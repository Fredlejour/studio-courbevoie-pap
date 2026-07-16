"use client";

import { motion } from "framer-motion";
import { property } from "@/data/property";
import { SectionTitle } from "@/app/components/SectionTitle";
import { MetricCard } from "@/app/components/MetricCard";
import { formatCurrency, formatPercent } from "@/lib/utils";

export function FinancialPlan() {
  const inv = property.investment;

  return (
    <section id="rendement" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Lecture financière de l’investissement"
          subtitle="Données brutes du dossier, hors frais de notaire, financement et fiscalité personnelle."
          centered
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <MetricCard label="Prix FAI" value={formatCurrency(inv.price)} accent />
          <MetricCard label="Revenus annuels" value={`${formatCurrency(inv.annualRent)} TTC`} />
          <MetricCard label="Taxe foncière" value={`${formatCurrency(inv.propertyTax)} / an`} />
          <MetricCard label="Revenu après taxe foncière" value={`${formatCurrency(inv.incomeAfterTax)} / an`} accent />
          <MetricCard label="Rendement brut" value={formatPercent(inv.grossYield)} />
          <MetricCard label="Rendement après taxe foncière" value={formatPercent(inv.yieldAfterTax)} accent />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-2xl border border-gold/10 bg-navy p-6 text-cream md:p-8"
        >
          <h3 className="text-xl font-semibold text-gold">Simulation personnalisée</h3>
          <p className="mt-4 max-w-3xl leading-relaxed text-cream/80">
            Une simulation personnalisée pourra être réalisée selon l’apport, la durée et les
            conditions de financement de l’acquéreur. Les rendements affichés sont calculés sur
            le prix de vente honoraires inclus de {formatCurrency(inv.price)}, hors frais de
            notaire, financement, fiscalité personnelle et éventuelles charges non intégrées.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
