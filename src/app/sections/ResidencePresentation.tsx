"use client";

import { motion } from "framer-motion";
import { Building2, DoorOpen, Coffee, Dumbbell, Shirt, ShieldCheck } from "lucide-react";
import { property } from "@/data/property";
import { SectionTitle } from "@/app/components/SectionTitle";
import { Gallery } from "@/app/components/Gallery";

const residenceFeatures = [
  { icon: Coffee, label: "Cafétéria", desc: "Espace convivial pour les résidents" },
  { icon: Dumbbell, label: "Salle de fitness et musculation", desc: "Équipements à disposition" },
  { icon: Shirt, label: "Laverie", desc: "Buanderie en sous-sol" },
  { icon: DoorOpen, label: "Hall et espaces communs", desc: "Accueil, boîtes aux lettres et ascenseurs" },
  { icon: Building2, label: "Ascenseurs", desc: "Accès facilité aux étages" },
  { icon: ShieldCheck, label: "Résidence dédiée aux étudiants", desc: "Studéa Léonard de Vinci" },
];

export function ResidencePresentation() {
  return (
    <section id="residence" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Résidence étudiante Studéa Léonard de Vinci"
          subtitle="Courbevoie – secteur La Défense"
          centered
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Gallery images={property.assets.residence} thumbClassName="grid-cols-3 md:grid-cols-6" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid content-start gap-4"
          >
            <p className="text-lg text-slate-dark">
              La résidence étudiante Studéa Léonard de Vinci propose un cadre de vie sécurisé,
              moderne et parfaitement adapté à la location meublée : espaces communs,
              cafétéria, salle de fitness, laverie et ascenseur.
            </p>

            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {residenceFeatures.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.label}
                    className="flex items-start gap-3 rounded-2xl border border-gold/10 bg-white p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy">{item.label}</h4>
                      <p className="text-sm text-slate">{item.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
