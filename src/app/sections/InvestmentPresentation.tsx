"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { SectionTitle } from "@/app/components/SectionTitle";

export function InvestmentPresentation() {
  return (
    <section id="presentation" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Présentation de l’investissement"
          subtitle="Exploitation et gestion du studio dans une résidence étudiante reconnue."
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 space-y-6 rounded-2xl border border-gold/10 bg-cream p-8 shadow-sm md:p-10"
        >
          <p className="text-lg leading-relaxed text-slate-dark">
            Ce studio est exploité dans le cadre d&rsquo;un bail commercial au sein de la
            résidence étudiante Studéa Léonard de Vinci.
          </p>
          <p className="text-slate-dark">
            L&rsquo;investisseur acquiert un bien déjà exploité, générant des revenus locatifs et
            dont la gestion quotidienne est déléguée au gestionnaire de la résidence.
          </p>
          <p className="text-slate-dark">
            Cette organisation limite les contraintes habituelles de la location directe :
            recherche d&rsquo;un occupant, gestion courante et suivi quotidien du logement.
          </p>

          <div className="flex items-start gap-3 rounded-xl border border-gold/10 bg-white p-4 text-sm text-slate">
            <FileText className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <p>
              Revenus encadrés par le bail commercial en cours. Aucune garantie de revenus,
              d&rsquo;absence de vacance locative ou de prise en charge exhaustive des travaux
              futurs n&rsquo;est affichée sans référence au contrat en vigueur.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
