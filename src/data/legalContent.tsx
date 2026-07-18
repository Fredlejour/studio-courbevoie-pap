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
            <p>Frédéric Lejour</p>
            <p>Lejour Consulting</p>
            <p>Kirchstrasse 37</p>
            <p>55218 Ingelheim am Rhein</p>
            <p>Allemagne</p>
          </div>
          <div className="mt-3 space-y-1">
            <p>
              <strong className="text-navy">Téléphone France :</strong>{" "}
              <a href="tel:+33652646890" className="text-gold underline-offset-2 hover:underline">
                +33 6 52 64 68 90
              </a>
            </p>
            <p>
              <strong className="text-navy">Téléphone Allemagne :</strong>{" "}
              <a href="tel:+4917646073361" className="text-gold underline-offset-2 hover:underline">
                +49 176 46073361
              </a>
            </p>
            <p>
              <strong className="text-navy">Courriel :</strong>{" "}
              <a
                href="mailto:frederic.lejour@lejourconsulting.com"
                className="text-gold underline-offset-2 hover:underline"
              >
                frederic.lejour@lejourconsulting.com
              </a>
            </p>
            <p>
              <strong className="text-navy">Site internet :</strong>{" "}
              <a
                href="https://lejourconsulting.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline-offset-2 hover:underline"
              >
                https://lejourconsulting.com
              </a>
            </p>
          </div>
        </section>

        <section>
          <h3 className="mb-2 text-base font-semibold text-navy">Identification professionnelle</h3>
          <div className="space-y-1">
            <p>
              <strong className="text-navy">Steuernummer (Allemagne) :</strong> 08/103/51926
            </p>
            <p>
              <strong className="text-navy">Numéro de TVA intracommunautaire (VAT) :</strong> DE287643129
            </p>
            <p>
              <strong className="text-navy">IHK Rheinhessen :</strong> n° 152 00 686043
            </p>
          </div>
        </section>

        <section>
          <h3 className="mb-2 text-base font-semibold text-navy">Autorisations d'exercice</h3>
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="font-medium text-navy">Libre prestation de services immobiliers en France</p>
              <p>Titulaire du récépissé de libre prestation de services immobiliers en France</p>
              <p>
                <strong className="text-navy">N°</strong> LPS75012025000000015
              </p>
              <p>
                <strong className="text-navy">Délivré par :</strong> CCI Paris Île-de-France
              </p>
              <p>
                <strong className="text-navy">Valable jusqu'au :</strong> 22 septembre 2026
              </p>
              <p>Conformément à la loi n°70-9 du 2 janvier 1970 (Loi Hoguet).</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium text-navy">Carte Professionnelle Européenne</p>
              <p>Titulaire de la Carte Professionnelle Européenne (EPC)</p>
              <p>
                <strong className="text-navy">Profession :</strong> Agent immobilier
              </p>
              <p>
                <strong className="text-navy">N°</strong> 05-7511-z2T4
              </p>
              <p>
                <strong className="text-navy">Attribuée le :</strong> 14 juillet 2021
              </p>
              <p>
                <strong className="text-navy">Valable jusqu'au :</strong> 12 janvier 2026
              </p>
              <p>Conformément au décret n°2017-1481 du 17 octobre 2017.</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium text-navy">Autorisation d'exercer en Allemagne</p>
              <p>
                Titulaire d'une autorisation d'exercer l'activité d'agent immobilier (Erlaubnis
                Immobilienmakler)
              </p>
              <p>
                <strong className="text-navy">Délivrée le :</strong> 10 mars 2021
              </p>
              <p>
                <strong className="text-navy">Par :</strong> Stadtverwaltung Ingelheim am Rhein, Allemagne
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="mb-2 text-base font-semibold text-navy">Assurance professionnelle</h3>
          <p>
            Lejour Consulting est assuré auprès d'AXA au titre de la responsabilité civile
            professionnelle couvrant les activités de transaction immobilière.
          </p>
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
            L'ensemble des contenus présents sur ce site (textes, photographies, illustrations,
            documents, éléments graphiques, identité visuelle et code source) est protégé par les
            dispositions du Code de la propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, diffusion ou exploitation, totale ou partielle, sans
            autorisation écrite préalable de Lejour Consulting est interdite.
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
          Elles sont uniquement utilisées par Lejour Consulting dans le cadre du traitement de
          votre demande.
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
          Vous pouvez exercer ces droits à l&apos;adresse :{" "}
          <a
            href="mailto:frederic.lejour@lejourconsulting.com"
            className="text-gold underline-offset-2 hover:underline"
          >
            frederic.lejour@lejourconsulting.com
          </a>
        </p>
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
          Le site utilise uniquement les cookies nécessaires à son fonctionnement ainsi que, le
          cas échéant, des outils de mesure d&apos;audience.
        </p>
        <p>Aucun cookie publicitaire n&apos;est installé sans votre consentement.</p>
        <p>Vous pouvez modifier vos préférences directement depuis votre navigateur.</p>
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
          Lejour Consulting s&apos;efforce d&apos;assurer l&apos;exactitude des informations
          diffusées mais ne peut garantir l&apos;absence d&apos;erreurs ou de modifications
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
