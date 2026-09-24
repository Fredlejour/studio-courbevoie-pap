import type { ReactNode } from "react";

export type LegalModalId =
  | "mentions-legales"
  | "confidentialite"
  | "cookies"
  | "conditions"
  | "informations-investissement";

export interface LegalModalConfig {
  id: LegalModalId;
  footerLabel: string;
  title: string;
  content: ReactNode;
}

export const legalModals: LegalModalConfig[] = [
  {
    id: "mentions-legales",
    footerLabel: "Mentions légales",
    title: "Mentions légales",
    content: (
      <div className="space-y-6">
        <section>
          <h3 className="mb-2 text-base font-semibold text-navy">Éditeur du site</h3>
          <div className="space-y-1">
            <p>Anthony et Eve Piorowicz</p>
            <p>Propriétaires vendeurs du studio présenté sur ce site.</p>
          </div>
          <div className="mt-3 space-y-1">
            <p>
              <strong className="text-navy">Contact :</strong> via le formulaire de
              contact disponible sur ce site. Votre demande est transmise directement aux
              propriétaires.
            </p>
          </div>
        </section>

        <section>
          <h3 className="mb-2 text-base font-semibold text-navy">Hébergement du site</h3>
          <p>Le site est hébergé par :</p>
          <div className="mt-1 space-y-1">
            <p>Vercel Inc.</p>
            <p>3979 Freedom Circle</p>
            <p>Suite 300</p>
            <p>Santa Clara</p>
            <p>California</p>
            <p>États-Unis</p>
            <p>
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline-offset-2 hover:underline"
              >
                https://vercel.com
              </a>
            </p>
          </div>
        </section>

        <section>
          <h3 className="mb-2 text-base font-semibold text-navy">Propriété intellectuelle</h3>
          <p>
            L&apos;ensemble des contenus présents sur ce site (textes, photographies, illustrations,
            documents, éléments graphiques, identité visuelle et code source) est protégé par les
            dispositions du Code de la propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, diffusion ou exploitation, totale ou partielle, sans
            autorisation écrite préalable de l&apos;éditeur du site est interdite.
          </p>
        </section>
      </div>
    ),
  },
  {
    id: "confidentialite",
    footerLabel: "Confidentialité",
    title: "Protection de vos données personnelles",
    content: (
      <div className="space-y-4">
        <p>
          Les informations transmises via les formulaires sont exclusivement utilisées afin de
          répondre à votre demande concernant cette opportunité d&apos;investissement.
        </p>
        <p>Les données collectées peuvent notamment comprendre :</p>
        <ul className="ml-4 list-disc space-y-1">
          <li>nom</li>
          <li>prénom</li>
          <li>adresse e-mail</li>
          <li>téléphone</li>
          <li>profil d&apos;investisseur</li>
          <li>message</li>
        </ul>
        <p>
          Ces données ne sont ni revendues ni transmises à des tiers à des fins commerciales.
          Elles sont uniquement utilisées par les propriétaires du studio dans le cadre du
          traitement de votre demande.
        </p>
        <p>Conformément au RGPD, vous disposez d&apos;un droit :</p>
        <ul className="ml-4 list-disc space-y-1">
          <li>d&apos;accès</li>
          <li>de rectification</li>
          <li>d&apos;effacement</li>
          <li>de limitation</li>
          <li>d&apos;opposition</li>
        </ul>
        <p>
          Vous pouvez exercer ces droits en écrivant aux propriétaires via le formulaire de
          contact disponible sur ce site.
        </p>
        <section>
          <h3 className="mb-2 text-base font-semibold text-navy">Mesure d&apos;audience</h3>
          <p>
            Avec votre consentement, ce site utilise Google Analytics 4 afin de mesurer son
            audience et de mieux comprendre l&apos;utilisation des différentes sections du
            site. Google Analytics n&apos;est chargé qu&apos;après votre acceptation. Vous
            pouvez retirer votre consentement à tout moment depuis le lien « Préférences
            cookies » situé en bas du site.
          </p>
        </section>
      </div>
    ),
  },
  {
    id: "cookies",
    footerLabel: "Cookies",
    title: "Politique relative aux cookies",
    content: (
      <div className="space-y-4">
        <p>
          Lors de votre première visite, un bandeau vous permet d&apos;accepter ou de refuser
          la mesure d&apos;audience. Votre choix est conservé dans un cookie nommé{" "}
          <strong className="text-navy">pap_consent</strong>, pendant une durée d&apos;environ
          6 mois.
        </p>
        <p>
          Google Analytics n&apos;est activé qu&apos;après votre consentement. Aucun cookie de
          mesure n&apos;est déposé avant votre choix, et aucun si vous refusez.
        </p>
        <p>
          Après acceptation, Google Analytics 4 peut déposer des cookies de mesure ({" "}
          <strong className="text-navy">_ga</strong> et{" "}
          <strong className="text-navy">_ga_*</strong>) utilisés pour établir des statistiques
          de fréquentation.
        </p>
        <p>
          Vous pouvez modifier ou retirer votre consentement à tout moment via le lien{" "}
          « Préférences cookies » situé en bas du site. En cas de retrait, les cookies de
          mesure déjà déposés sont supprimés.
        </p>
        <p>Aucun cookie publicitaire n&apos;est utilisé sur ce site.</p>
      </div>
    ),
  },
  {
    id: "conditions",
    footerLabel: "Conditions d'utilisation",
    title: "Conditions d'utilisation",
    content: (
      <div className="space-y-4">
        <p>Les informations publiées sur ce site sont fournies à titre informatif.</p>
        <p>
          Elles ne constituent ni une offre contractuelle, ni un conseil juridique, fiscal ou
          financier.
        </p>
        <p>
          Les caractéristiques du bien sont communiquées sur la base des informations
          disponibles au moment de la publication.
        </p>
        <p>
          Les propriétaires s&apos;efforcent d&apos;assurer l&apos;exactitude des informations
          diffusées mais ne peuvent garantir l&apos;absence d&apos;erreurs ou de modifications
          ultérieures.
        </p>
      </div>
    ),
  },
  {
    id: "informations-investissement",
    footerLabel: "Informations sur l'investissement",
    title: "Informations importantes",
    content: (
      <div className="space-y-4">
        <p>Les données financières présentées sur ce site sont communiquées à titre indicatif.</p>
        <p>
          Les rendements affichés sont calculés à partir des éléments connus à la date de
          publication.
        </p>
        <p>Ils ne constituent pas une garantie de performance future.</p>
        <p>
          Chaque investisseur est invité à réaliser sa propre analyse et, si nécessaire, à
          solliciter l&apos;avis de son notaire, de son expert-comptable ou de son conseiller
          patrimonial avant toute décision d&apos;investissement.
        </p>
      </div>
    ),
  },
];
