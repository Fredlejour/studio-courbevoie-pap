export type IconName =
  | "ShieldCheck"
  | "MapPin"
  | "TrendingUp"
  | "Key"
  | "Building2"
  | "Home"
  | "Euro"
  | "FileText"
  | "Download"
  | "Mail"
  | "Phone"
  | "ChevronDown";

export type FormRequestType = "dossier" | "visite";

export interface PropertyData {
  brand: string;
  siteName: string;
  reference: string;
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage: string;
  property: {
    name: string;
    address: string;
    city: string;
    zipCode: string;
    residence: string;
    type: string;
    surface: number;
    floor: number;
    elevator: boolean;
    rooms: number;
    yearBuilt: number;
    equipment: string[];
  };
  investment: {
    price: number;
    priceUnit: string;
    charges: number;
    monthlyRent: number;
    grossYield: number;
    netYield: number;
    occupancy: number;
    taxRegime: string;
    managementType: string;
  };
  highlights: Array<{
    icon: IconName;
    label: string;
    value: string;
  }>;
  documents: Array<{
    title: string;
    file: string;
  }>;
  contact: {
    recipientName: string;
    forms: Record<FormRequestType, { label: string; type: FormRequestType }>;
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

// FICHIER CENTRAL DE CONFIGURATION
// Pour publier un futur bien, remplacer simplement les valeurs ci-dessous.
export const property: PropertyData = {
  brand: "Lejour Consulting",
  siteName: "Lejour Consulting Invest",
  reference: "LJC-CVB-001",

  title:
    "Investissement locatif clé en main à Courbevoie | Studio Studéa Léonard de Vinci",
  description:
    "Opportunité d'investissement immobilier premium : studio dans la résidence étudiante Studéa Léonard de Vinci à Courbevoie. Rendement attractif, gestion simplifiée, localisation recherchée.",
  canonicalUrl: "https://lejourconsulting-courbevoie-invest.vercel.app",
  ogImage: "/og-image.svg",

  property: {
    name: "Studio Studéa Léonard de Vinci",
    address: "Résidence Studéa Léonard de Vinci, Courbevoie",
    city: "Courbevoie",
    zipCode: "92400",
    residence: "Studéa Léonard de Vinci",
    type: "Studio étudiant",
    surface: 18.5,
    floor: 3,
    elevator: true,
    rooms: 1,
    yearBuilt: 2009,
    equipment: [
      "Kitchenette équipée",
      "Salle d'eau avec WC",
      "Placards intégrés",
      "Connexion internet",
      "Vigik et interphone",
      "Local vélos",
    ],
  },

  investment: {
    price: 185000,
    priceUnit: "€",
    charges: 125,
    monthlyRent: 850,
    grossYield: 0.051,
    netYield: 0.043,
    occupancy: 0.95,
    taxRegime: "LMNP (Loueur en Meublé Non Professionnel)",
    managementType: "Gestion locative externe clé en main",
  },

  highlights: [
    {
      icon: "ShieldCheck",
      label: "Résidence réputée",
      value: "Studéa Léonard de Vinci",
    },
    { icon: "MapPin", label: "Localisation", value: "Courbevoie — La Défense" },
    { icon: "TrendingUp", label: "Rendement brut", value: "5,1 %" },
    { icon: "Key", label: "Gestion", value: "Clé en main" },
  ],

  documents: [
    {
      title: "Dossier complet d'investissement",
      file: "/documents/dossier-investissement.pdf",
    },
    {
      title: "Plan du studio",
      file: "/documents/plan-appartement.pdf",
    },
  ],

  contact: {
    recipientName: "Frédéric Lejour",
    forms: {
      dossier: {
        label: "Recevoir le dossier complet",
        type: "dossier",
      },
      visite: {
        label: "Organiser un échange / visite",
        type: "visite",
      },
    },
  },

  faq: [
    {
      question: "Quel est le profil idéal de l'investisseur pour ce bien ?",
      answer:
        "Ce studio s'adresse aux investisseurs recherchant un placement sécurisé, rentable et sans gestion au quotidien : primo-accédants investisseurs, expatriés ou professionnels souhaitant diversifier leur patrimoine.",
    },
    {
      question: "Le bien est-il déjà loué ?",
      answer:
        "La résidence bénéficie d'une forte demande locative étudiante. Le bien peut être vendu loué ou libre selon la stratégie retenue. Nous vous communiquerons la situation exacte dans le dossier complet.",
    },
    {
      question: "Quel régime fiscal s'applique ?",
      answer:
        "Le studio est éligible au régime LMNP (Loueur en Meublé Non Professionnel), qui permet d'amortir le bien et de réduire l'imposition sur les revenus locatifs. Consultez votre expert-comptable pour une optimisation personnalisée.",
    },
    {
      question: "Comment est assurée la gestion locative ?",
      answer:
        "Lejour Consulting met à disposition un partenaire gestionnaire expérimenté pour la location, l'entretien courant et le suivi locataire. Vous percevez votre loyer sans contrainte opérationnelle.",
    },
    {
      question: "Quels documents sont disponibles ?",
      answer:
        "Un dossier complet d'investissement et le plan du studio sont téléchargeables sur cette page. Pour les pièces complémentaires (bilan locatif, diagnostics, règlement de copropriété), contactez-nous via le formulaire.",
    },
  ],
} as const;
