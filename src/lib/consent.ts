/**
 * Consentement à la mesure d’audience — logique bas niveau.
 *
 * Mode de consentement **basique** : `gtag.js` n’est jamais injecté et aucune
 * requête n’est adressée à Google avant l’acceptation explicite du visiteur.
 * Aucun ping d’état n’est donc émis avant le choix.
 *
 * Le choix est mémorisé dans un unique cookie propriétaire, valable pour tout
 * le site. Aucun `localStorage` ni `sessionStorage` n’est utilisé.
 *
 * Si `NEXT_PUBLIC_GA_ID` est absent ou vide, tout le dispositif est inerte :
 * aucune bannière, aucun bouton de préférences, aucun cookie.
 */

export type ConsentStatus = 'unknown' | 'granted' | 'denied';

/** Nom du cookie de choix. Strictement nécessaire à la conservation du choix. */
export const CONSENT_COOKIE = 'pap_consent';

/** Six mois — durée de re-sollicitation retenue. */
const CONSENT_MAX_AGE = 60 * 60 * 24 * 182;

/**
 * Durée de vie maximale des cookies de mesure : 395 jours, soit environ
 * 13 mois. Associée à `cookie_update: false`, l’échéance est calculée au
 * premier dépôt et n’est jamais repoussée.
 */
export const GA_COOKIE_EXPIRES_SECONDS = 34128000;

/**
 * Identifiant de mesure. Les variables `NEXT_PUBLIC_*` sont inlinées au build :
 * la lecture doit être littérale, sans accès dynamique.
 */
export const GA_MEASUREMENT_ID = (process.env.NEXT_PUBLIC_GA_ID ?? '').trim();

/** Aucune mesure n’est possible sans identifiant : le dispositif reste inerte. */
export function isAnalyticsConfigured(): boolean {
  return GA_MEASUREMENT_ID.length > 0;
}

/** Cookies déposés par Google Analytics 4, à supprimer lors d’un retrait. */
function isMeasurementCookie(name: string): boolean {
  return name === '_ga' || name.startsWith('_ga_');
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Verrou local au document : posé lors d’un retrait, il empêche tout envoi
 * ultérieur, même si un composant demandait encore une mesure.
 */
let measurementLocked = false;

/**
 * Indicateur d’initialisation, porté par le module et non par un composant.
 *
 * Le module n’est évalué qu’une fois par document navigateur : la garde survit
 * à tous les remontages de composants, et un véritable rechargement la
 * réinitialise naturellement, sans cookie ni stockage.
 */
let gtagInitialised = false;

/* ─────────────────────────────── Cookie de choix ─────────────────────────────── */

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;

  for (const part of document.cookie.split(';')) {
    const separator = part.indexOf('=');
    if (separator === -1) continue;
    if (part.slice(0, separator).trim() !== name) continue;
    return decodeURIComponent(part.slice(separator + 1).trim());
  }

  return null;
}

/** Lit le choix mémorisé. `unknown` si aucun choix n’a encore été exprimé. */
export function readConsent(): ConsentStatus {
  if (!isAnalyticsConfigured()) return 'unknown';

  const value = readCookie(CONSENT_COOKIE);
  if (value === 'granted' || value === 'denied') return value;
  return 'unknown';
}

/**
 * Mémorise le choix. Aucun cookie n’est écrit si la mesure n’est pas
 * configurée : sans identifiant, il n’y a aucun choix à conserver.
 */
export function writeConsent(status: Exclude<ConsentStatus, 'unknown'>): void {
  if (!isAnalyticsConfigured() || typeof document === 'undefined') return;

  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${CONSENT_COOKIE}=${status}; Path=/; Max-Age=${CONSENT_MAX_AGE}; SameSite=Lax${secure}`;
}

/* ──────────────────────────────── Mesure GA4 ──────────────────────────────── */

/**
 * Initialise `dataLayer` et la fonction `gtag` **avant** tout appel, puis
 * empile la configuration. Les commandes empilées avant le chargement de
 * `gtag.js` sont traitées à son arrivée : l’ordre est donc garanti.
 *
 * L’opération est **idempotente** : une seule commande `js` et une seule
 * commande `config` sont publiées par document navigateur. Republier `config`
 * pour un identifiant déjà initialisé ferait ré-initialiser la balise, ce qui
 * peut provoquer des envois supplémentaires indépendants du suivi manuel.
 */
export function initGtag(): void {
  if (gtagInitialised || !isAnalyticsConfigured() || typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer ?? [];
  const dataLayer = window.dataLayer;

  if (!window.gtag) {
    window.gtag = function gtag() {
      // `gtag.js` n’interprète comme commande que l’objet `arguments` natif :
      // le pousser tel quel est la seule forme reconnue par la balise Google.
      // eslint-disable-next-line prefer-rest-params
      dataLayer.push(arguments);
    };
  }

  // Posé avant la publication des commandes : un appel réentrant ne peut donc
  // pas s’intercaler et dupliquer la configuration.
  gtagInitialised = true;

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false,
    cookie_expires: GA_COOKIE_EXPIRES_SECONDS,
    cookie_update: false,
    cookie_path: '/',
    cookie_domain: 'auto',
  });
}

/**
 * Envoie une vue de page.
 *
 * `page_location` est reconstruit à partir de l’origine et du chemin seuls :
 * les paramètres de requête ne sont donc jamais transmis, alors que la valeur
 * déduite automatiquement par `gtag.js` les contiendrait.
 */
export function trackPageView(path: string): void {
  if (measurementLocked || !isAnalyticsConfigured() || typeof window === 'undefined') return;
  if (readConsent() !== 'granted') return;

  window.gtag?.('event', 'page_view', {
    page_location: `${window.location.origin}${path}`,
    page_title: document.title,
  });
}

/* ──────────────────────────────── Retrait ──────────────────────────────── */

/** Domaines à essayer pour la suppression d’un cookie de mesure. */
function cookieDomains(): (string | null)[] {
  const { hostname } = window.location;
  return [null, hostname, `.${hostname}`];
}

/**
 * Coupe la mesure et supprime les cookies déjà déposés.
 *
 * Les cookies sont **énumérés individuellement** : un nom générique tel que
 * `_ga_*` ne peut pas être supprimé directement. Chaque cookie doit être
 * expiré nommément, pour chaque combinaison de chemin et de domaine
 * susceptible d’avoir servi au dépôt.
 */
export function disableAnalytics(): void {
  if (typeof window === 'undefined') return;

  measurementLocked = true;

  if (isAnalyticsConfigured()) {
    // Drapeau reconnu par gtag.js : neutralise la mesure dans ce document.
    (window as unknown as Record<string, boolean>)[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
  }

  const names = document.cookie
    .split(';')
    .map((part) => part.split('=')[0]?.trim() ?? '')
    .filter((name) => name.length > 0 && isMeasurementCookie(name));

  const expired = 'Expires=Thu, 01 Jan 1970 00:00:00 GMT; Max-Age=0';
  const domains = cookieDomains();

  for (const name of names) {
    for (const domain of domains) {
      const domainPart = domain ? `; Domain=${domain}` : '';
      document.cookie = `${name}=; Path=/${domainPart}; ${expired}`;
    }
  }
}
