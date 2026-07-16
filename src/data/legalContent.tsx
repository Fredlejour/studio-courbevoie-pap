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
      <div className="space-y-4">
        <p>Le présent site est édité par :</p>
        <p>
          Lejour Consulting
          <br />
          Frédéric Lejour
          <br />
          Kirchstrasse 37
          <br />
          55218 Ingelheim am Rhein
          <br />
          Allemagne
        </p>
        <p>
          <strong className="text-navy">Téléphone :</strong> +33 6 52 64 68 90
        </p>
        <p>
          <strong className="text-navy">Email :</strong> frederic.lejour@lejourconsulting.com
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
        <p>
          <strong className="text-navy">Directeur de la publication :</strong> Frédéric Lejour
        </p>
        <p>
          <strong className="text-navy">Hébergement :</strong>
          <br />
          Le site est hébergé par Vercel Inc.
          <br />
          3979 Freedom Circle, Suite 300
          <br />
          Santa Clara, California
          <br />
          États-Unis
        </p>
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
