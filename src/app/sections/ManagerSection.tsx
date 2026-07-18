"use client";

import { motion } from "framer-motion";
import { Building2, FileText, Key, DoorOpen } from "lucide-react";
import { SectionTitle } from "@/app/components/SectionTitle";

const cards = [
  {
    icon: Building2,
    title: "Exploitant identifié",
    text: "La résidence est exploitée par Nexity Studéa – Pôle Propriétaire, acteur reconnu dans la gestion de résidences étudiantes.",
  },
  {
    icon: FileText,
    title: "Versement du loyer",
    text: "Le loyer est versé par l’exploitant conformément aux conditions prévues au bail commercial, qu’un étudiant occupe ou non le studio.",
  },
  {
    icon: Key,
    title: "Gestion totalement déléguée",
    text: "Vous n’avez ni recherche de locataire, ni états des lieux, ni gestion quotidienne à assurer.",
  },
  {
    icon: DoorOpen,
    title: "Résidence avec services",
    text: "Accueil, laverie, salle de sport, espaces communs, sécurité et services destinés aux étudiants.",
  },
];

export function ManagerSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Une exploitation confiée à Nexity Studéa"
          subtitle="Le studio est intégré à la résidence étudiante Studéa Léonard de Vinci et exploité dans le cadre d’un bail commercial."
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-navy p-8 text-center text-cream md:p-10"
        >
          <h3 className="text-lg font-semibold text-gold md:text-xl">
            Pourquoi un bail commercial séduit autant les investisseurs ?
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-cream/90 md:text-base">
            Contrairement à une location classique, l’exploitation du studio est confiée à un
            gestionnaire professionnel. Le propriétaire bénéficie d’une visibilité accrue sur son
            investissement tout en déléguant l’ensemble de la gestion locative.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                <h3 className="mt-4 text-lg font-semibold text-navy">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-dark">{card.text}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-8 max-w-4xl text-center text-sm leading-relaxed text-slate-dark"
        >
          Le bail commercial actuellement en vigueur constitue le cadre juridique de l’exploitation
          du studio. Les conditions précises figurent dans le dossier d’investissement disponible
          sur demande.
        </motion.p>
      </div>
    </section>
  );
}
