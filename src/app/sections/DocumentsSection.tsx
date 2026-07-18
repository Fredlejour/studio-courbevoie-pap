"use client";

import { motion } from "framer-motion";
import { FileCheck, Ruler, FileText, Receipt, ShieldCheck, Scale } from "lucide-react";
import { SectionTitle } from "@/app/components/SectionTitle";

const documents = [
  {
    icon: FileCheck,
    title: "Diagnostic de Performance Énergétique",
    text: "Classe énergétique C",
    badge: "Disponible",
  },
  {
    icon: Ruler,
    title: "Mesurage Loi Carrez",
    text: "17,92 m² (18 m²)",
    badge: "Disponible",
  },
  {
    icon: FileText,
    title: "Bail commercial",
    text: "Contrat d’exploitation",
    badge: "Disponible",
  },
  {
    icon: Receipt,
    title: "Taxe foncière",
    text: "Dernier avis disponible",
    badge: "Disponible",
  },
  {
    icon: ShieldCheck,
    title: "État des risques (ERP)",
    text: "Document réglementaire",
    badge: "Disponible",
  },
  {
    icon: Scale,
    title: "Attestation notariale",
    text: "Justificatif de propriété",
    badge: "Disponible",
  },
];

export function DocumentsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Tous les documents officiels sont disponibles"
          subtitle="L’ensemble des documents officiels relatifs à cet investissement est disponible et sera communiqué aux acquéreurs intéressés afin de leur permettre d’étudier le dossier en toute sérénité."
          centered
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc, index) => {
            const Icon = doc.icon;
            return (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-2xl border border-gold/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy">{doc.title}</h3>
                <p className="mt-2 text-slate-dark">{doc.text}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-xs font-semibold text-navy">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {doc.badge}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
