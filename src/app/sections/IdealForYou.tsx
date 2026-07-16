"use client";

import { motion } from "framer-motion";
import { Key, Wallet, MapPin, TrendingUp, Globe, Sparkles } from "lucide-react";
import { SectionTitle } from "@/app/components/SectionTitle";

const cards = [
  {
    icon: Key,
    title: "Vous souhaitez investir sans gérer les contraintes du quotidien",
    text: "Vous recherchez un bien déjà exploité avec une gestion locative entièrement déléguée.",
  },
  {
    icon: Wallet,
    title: "Vous souhaitez percevoir des revenus dès votre acquisition",
    text: "Le studio est exploité sous bail commercial et génère déjà des revenus.",
  },
  {
    icon: MapPin,
    title: "Vous privilégiez les emplacements solides",
    text: "Vous investissez dans une commune recherchée aux portes de La Défense, au sein d'une résidence étudiante reconnue.",
  },
  {
    icon: TrendingUp,
    title: "Vous recherchez un investissement patrimonial",
    text: "Vous souhaitez développer progressivement votre patrimoine avec un actif sélectionné pour sa cohérence et son potentiel.",
  },
  {
    icon: Globe,
    title: "Vous vivez à l'étranger",
    text: "Vous recherchez un investissement immobilier en France pouvant être géré sans intervention quotidienne.",
  },
  {
    icon: Sparkles,
    title: "Vous réalisez votre premier investissement locatif",
    text: "Vous souhaitez commencer avec un investissement simple à comprendre, documenté et immédiatement exploité.",
  },
];

export function IdealForYou() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Cet investissement est fait pour vous si..."
          centered
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-2xl border border-gold/10 bg-cream p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy">
                  {card.title}
                </h3>
                <p className="mt-2 text-slate-dark">{card.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
