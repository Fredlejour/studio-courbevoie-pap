"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { GA_MEASUREMENT_ID, initGtag, isAnalyticsConfigured, trackPageView } from "@/lib/consent";

/**
 * Chargement de Google Analytics 4 — **uniquement** après acceptation.
 *
 * Ce composant n’est monté par `ConsentProvider` que lorsque le consentement
 * est accordé : avant cela, aucune balise n’est présente dans le document et
 * aucune requête n’est adressée à Google.
 *
 * `dataLayer` et `gtag` sont initialisés avant tout appel, et la configuration
 * est empilée immédiatement : les commandes en attente sont traitées dès
 * l’arrivée de `gtag.js`, l’ordre est donc garanti.
 *
 * Les vues de page sont envoyées manuellement (`send_page_view: false`) : une
 * seule au montage, puis une par changement réel de chemin. Les paramètres de
 * requête ne sont pas mesurés, et `useSearchParams` n’est volontairement pas
 * utilisé afin de préserver la génération statique sans frontière Suspense.
 */
export function Analytics() {
  const pathname = usePathname();
  const initialised = useRef(false);
  const lastPath = useRef<string | null>(null);

  // Initialisation unique. Le garde sur `ref` neutralise le double appel du
  // mode strict de React en développement.
  useEffect(() => {
    if (initialised.current) return;
    initGtag();
    initialised.current = true;
  }, []);

  // Une vue de page par chemin, jamais deux fois le même consécutivement.
  useEffect(() => {
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    trackPageView(pathname);
  }, [pathname]);

  if (!isAnalyticsConfigured()) return null;

  return (
    <Script
      id="ga4"
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      strategy="afterInteractive"
    />
  );
}
