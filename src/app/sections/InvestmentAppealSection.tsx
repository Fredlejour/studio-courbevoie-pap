"use client";

import { motion } from "framer-motion";
import { Wallet, FileText, Building2, MapPin, Zap, FolderCheck } from "lucide-react";
import { SectionTitle } from "@/app/components/SectionTitle";

const cards = [
  {
    icon: Wallet,
    title: "Revenus immédiats",
    text: "Aucun délai de commercialisation.",
  },
  {
    icon: FileText,
    title: "Bail commercial",
    text: "Gestion locative confiée à un professionnel.",
  },
  {
    icon: Building2,
    title: "Résidence étudiante",
    text: "Marché porté par une demande locative structurelle.",
  },
  {
    icon: MapPin,
    title: "La Défense",
    text: "Proximité immédiate du premier quartier d’affaires européen.",
  },
  {
    icon: Zap,
    title: "Performance énergétique",
    text: "Classe énergétique C.",
  },
  {
    icon: FolderCheck,
    title: "Documents disponibles",
    text: "Tous les diagnostics officiels sont consultables.",
  },
];

export function InvestmentAppealSection() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Pourquoi ce studio est un investissement recherché"
          subtitle="Six atouts essentiels pour comprendre rapidement la qualité de cette opportunité."
          centered
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-2xl border border-gold/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-dark">{card.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
