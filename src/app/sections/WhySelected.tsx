"use client";

import { motion } from "framer-motion";
import { MapPin, Wallet, Key, TrendingUp, FileCheck } from "lucide-react";
import { property } from "@/data/property";
import { SectionTitle } from "@/app/components/SectionTitle";

const reasons = [
  {
    icon: MapPin,
    title: "Emplacement recherché",
    text: `Le bien est situé à ${property.property.city}, à proximité immédiate de La Défense.`,
  },
  {
    icon: Wallet,
    title: "Revenus immédiats",
    text: "Le studio est déjà exploité sous bail commercial.",
  },
  {
    icon: Key,
    title: "Gestion simplifiée",
    text: "La gestion locative est entièrement déléguée.",
  },
  {
    icon: TrendingUp,
    title: "Rentabilité cohérente",
    text: "Le rendement présenté repose sur des données réelles et documentées.",
  },
  {
    icon: FileCheck,
    title: "Documentation complète",
    text: "Les principaux documents sont consultables ou disponibles sur demande.",
  },
];

export function WhySelected() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Pourquoi Lejour Consulting a sélectionné cette opportunité ?"
          subtitle="Chez Lejour Consulting, nous ne diffusons pas simplement des biens immobiliers. Chaque opportunité est sélectionnée selon une analyse portant sur son emplacement, sa rentabilité, son potentiel patrimonial et la simplicité de sa gestion afin de proposer des investissements cohérents et documentés."
          centered
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-2xl border border-gold/10 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy">
                  {reason.title}
                </h3>
                <p className="mt-2 text-slate-dark">{reason.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
