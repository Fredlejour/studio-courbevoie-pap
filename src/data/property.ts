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

export interface GalleryImage {
  src: string;
  alt: string;
  label?: string;
}

export interface DocumentAsset {
  title: string;
  file: string;
  available: boolean;
}

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
    lot: string;
    surface: number;
    floor: number;
    elevator: boolean;
    rooms: number;
    yearBuilt: number;
    heating: string;
    window: string;
    equipment: string[];
  };
  investment: {
    price: number;
    priceUnit: string;
    buyerFees: number;
    netPrice: number;
    quarterlyRent: number;
    annualRent: number;
    propertyTax: number;
    incomeAfterTax: number;
    grossYield: number;
    yieldAfterTax: number;
    taxRegime: string;
    managementType: string;
  };
  highlights: Array<{
    icon: IconName;
    label: string;
    value: string;
  }>;
  documents: DocumentAsset[];
  contact: {
    recipientName: string;
    forms: Record<FormRequestType, { label: string; type: FormRequestType }>;
  };
  assets: {
    ogImage: string;
    studio: GalleryImage[];
    residence: GalleryImage[];
    plan: { src: string; alt: string };
    virtualTour: { url: string; label: string };
    presenter: {
      photo: string | null;
      name: string;
      role: string;
      bio: string[];
      phone: string;
      email: string;
      website: string;
      cta: string;
    };
    documents: DocumentAsset[];
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
    "Studio meublé de 17,92 m² dans la résidence étudiante Studéa Léonard de Vinci à Courbevoie, exploité sous bail commercial. Données financières et fiscales communiquées à titre indicatif.",
  canonicalUrl: "https://lejourconsulting-courbevoie-invest.vercel.app",
  ogImage: "/assets/images/og-image.svg",

  property: {
    name: "Studio Studéa Léonard de Vinci",
    address: "4 allée Botticelli, 92400 Courbevoie",
    city: "Courbevoie",
    zipCode: "92400",
    residence: "Studéa Léonard de Vinci",
    type: "studio meublé en résidence étudiante",
    lot: "n°116",
    surface: 17.92,
    floor: 5,
    elevator: true,
    rooms: 1,
    yearBuilt: 1996,
    heating: "électrique individuel",
    window: "PVC double vitrage",
    equipment: [
      "Entrée avec placard",
      "Pièce principale avec espace nuit, espace travail et kitchenette équipée",
      "Salle d'eau avec WC",
      "Fenêtre PVC double vitrage",
      "Chauffage électrique individuel",
    ],
  },

  investment: {
    price: 117000,
    priceUnit: "€",
    buyerFees: 5000,
    netPrice: 112000,
    quarterlyRent: 1627.62,
    annualRent: 6510.48,
    propertyTax: 450,
    incomeAfterTax: 6060.48,
    grossYield: 0.0556,
    yieldAfterTax: 0.0518,
    taxRegime:
      "Le bien peut être compatible avec le statut de loueur en meublé non professionnel selon la situation personnelle et fiscale de l’acquéreur.",
    managementType: "bail commercial",
  },

  highlights: [
    { icon: "Home", label: "Surface Carrez", value: "17,92 m²" },
    { icon: "MapPin", label: "Adresse", value: "4 allée Botticelli, Courbevoie" },
    { icon: "TrendingUp", label: "Rendement après taxe foncière", value: "5,18 %" },
    { icon: "Key", label: "Gestion", value: "Bail commercial" },
  ],

  documents: [
    {
      title: "Dossier complet d'investissement",
      file: "/assets/documents/dossier-investissement.pdf",
      available: false,
    },
    {
      title: "Plan du studio",
      file: "/assets/documents/plan-appartement.pdf",
      available: false,
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

  assets: {
    ogImage: "/assets/images/og-image.svg",
    studio: [
      {
        src: "/assets/images/studio/7-Appartement 94200 courbevoie - entrée couloir.jpg",
        alt: "Entrée et couloir du studio",
        label: "Entrée",
      },
      {
        src: "/assets/images/studio/8-Appartement 94200 courbevoie - piece de vie vue entrée.jpg",
        alt: "Séjour du studio",
        label: "Séjour",
      },
      {
        src: "/assets/images/studio/9-Appartement 94200 courbevoie - piece de vie vue angle fenetre.jpg",
        alt: "Pièce de vue et fenêtre",
        label: "Fenêtre",
      },
      {
        src: "/assets/images/studio/10-Appartement 94200 courbevoie - piece de vie kitchenette.jpg",
        alt: "Kitchenette équipée",
        label: "Kitchenette",
      },
      {
        src: "/assets/images/studio/11-Appartement 94200 courbevoie - salle de douche wc.jpg",
        alt: "Salle d'eau avec WC",
        label: "Salle d'eau",
      },
    ],
    residence: [
      {
        src: "/assets/images/residence/1-Appartement 94200 courbevoie - batiment.jpg",
        alt: "Façade de la résidence Studéa",
        label: "Façade",
      },
      {
        src: "/assets/images/residence/2-Appartement 94200 courbevoie - entrée batiment vue depuis fond.jpg",
        alt: "Entrée de la résidence",
        label: "Entrée",
      },
      {
        src: "/assets/images/residence/5-Appartement 94200 courbevoie - espace ascenseurs et boites aux lettres - batiment.jpg",
        alt: "Hall, ascenseurs et boîtes aux lettres",
        label: "Hall",
      },
      {
        src: "/assets/images/residence/12-Appartement 94200 courbevoie - cafétaria vue fond.jpg",
        alt: "Cafétéria de la résidence",
        label: "Cafétéria",
      },
      {
        src: "/assets/images/residence/17-Appartement 94200 courbevoie - salle fitness vue fond.jpg",
        alt: "Salle de sport de la résidence",
        label: "Salle de sport",
      },
      {
        src: "/assets/images/residence/21-Appartement 94200 courbevoie - batiment sous sol - buanderie.jpg",
        alt: "Laverie dans la résidence",
        label: "Laverie",
      },
    ],
    plan: {
      src: "/assets/images/Plan/plan appartement Piorowicz.png",
      alt: "Plan du studio",
    },
    virtualTour: {
      url: "https://tour.previsite.com/u/93AB2C7E-0169-2287-BD3D-C7CEC459CE05",
      label: "Lancer la visite virtuelle",
    },
    presenter: {
      photo: "/assets/images/profile/Profil Frederic lejour lejour consulting.jpg",
      name: "Frédéric Lejour",
      role: "Fondateur de Lejour Consulting",
      bio: [
        "Je sélectionne des opportunités immobilières répondant à trois critères essentiels :",
        "• un emplacement recherché,",
        "• une rentabilité attractive,",
        "• un véritable potentiel de valorisation à long terme.",
        "Chaque investissement fait l'objet d'une analyse approfondie afin de proposer un dossier documenté, transparent et cohérent avec une stratégie patrimoniale durable.",
        "Pour cette opportunité à Courbevoie, je reste votre interlocuteur privilégié pour répondre à vos questions et vous accompagner jusqu'à la signature.",
      ],
      phone: "+33 6 52 64 68 90",
      email: "frederic.lejour@lejourconsulting.com",
      website: "https://lejourconsulting.com",
      cta: "Organiser un échange",
    },
    documents: [
      {
        title: "Dossier complet d'investissement",
        file: "/assets/documents/dossier-investissement.pdf",
        available: false,
      },
      {
        title: "Plan du studio",
        file: "/assets/documents/plan-appartement.pdf",
        available: false,
      },
    ],
  },

  faq: [
    {
      question: "Pourquoi investir sous bail commercial ?",
      answer:
        "Le bail commercial confie l'exploitation du studio au gestionnaire de la résidence Studéa Léonard de Vinci. Cette organisation permet de percevoir des revenus sans gérer la recherche d'occupant, l'entretien courant ou le suivi administratif, sous les conditions prévues par le bail en cours.",
    },
    {
      question: "Pourquoi investir à Courbevoie ?",
      answer:
        "Courbevoie est une commune des Hauts-de-Seine directement voisine du quartier d'affaires de La Défense. Cette proximité soutient une demande locative régulière, notamment étudiante, dans un secteur bien desservi par les transports en commun.",
    },
    {
      question: "Quels revenus génère ce studio ?",
      answer:
        "Le studio génère un loyer trimestriel de 1 627,62 € TTC, soit 6 510,48 € TTC de revenus annuels. Après déduction de la taxe foncière de 450 €, le revenu net s'établit à 6 060,48 € par an, soit un rendement de 5,18 %.",
    },
    {
      question: "Quels sont les principaux risques ?",
      answer:
        "Comme tout investissement locatif, ce bien comporte des risques à évaluer : dépendance au gestionnaire de la résidence, évolution des conditions du bail commercial, fiscalité personnelle de l'acquéreur et variation de la valeur du bien dans le temps. Ces éléments doivent être étudiés avant toute décision.",
    },
    {
      question: "Comment se déroule la gestion locative ?",
      answer:
        "Le studio est géré via un bail commercial. Cette organisation limite la gestion quotidienne : recherche d'occupant, entretien courant et suivi sont délégués au gestionnaire de la résidence, sous les conditions du bail.",
    },
    {
      question: "Puis-je financer ce bien par emprunt ?",
      answer:
        "Ce studio peut être financé par emprunt, selon les conditions d'octroi de votre établissement bancaire et votre situation personnelle. Il est recommandé de consulter votre banque ou un courtier pour étudier les modalités adaptées à votre profil.",
    },
    {
      question: "Comment obtenir le dossier complet ?",
      answer:
        "Vous pouvez recevoir le dossier complet d'investissement en utilisant le formulaire « Recevoir le dossier » en bas de page. Nous vous transmettrons les documents disponibles et répondrons à vos questions complémentaires.",
    },
  ],
};
