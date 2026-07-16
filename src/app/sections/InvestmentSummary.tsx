"use client";

import { motion } from "framer-motion";
import { property } from "@/data/property";
import { MetricCard } from "@/app/components/MetricCard";
import { SectionTitle } from "@/app/components/SectionTitle";
import { formatCurrency, formatPercent } from "@/lib/utils";

export function InvestmentSummary() {
  const annualRent = property.investment.monthlyRent * 12;
  const grossYieldDisplay = formatPercent(property.investment.grossYield);
  const netYieldDisplay = formatPercent(property.investment.netYield);

  return (
    <section id="investissement" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Un investissement chiffré"
          subtitle="Les données clés du dossier présentées de manière transparente, sans frais cachés."
          centered
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <MetricCard
            label="Prix d'acquisition"
            value={formatCurrency(property.investment.price)}
            accent
          />
          <MetricCard
            label="Loyer mensuel estimé"
            value={formatCurrency(property.investment.monthlyRent)}
          />
          <MetricCard
            label="Rendement brut"
            value={grossYieldDisplay}
          />
          <MetricCard
            label="Rendement net estimé"
            value={netYieldDisplay}
          />
          <MetricCard
            label="Charges mensuelles"
            value={formatCurrency(property.investment.charges)}
          />
          <MetricCard
            label="Régime fiscal"
            value={property.investment.taxRegime}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-2xl border border-gold/10 bg-white p-6 shadow-sm md:p-8"
        >
          <h3 className="text-lg font-semibold text-navy">Synthèse en un coup d’œil</h3>
          <div className="mt-6 grid gap-8 sm:grid-cols-3">
            <div>
              <p className="text-sm text-slate">Type de bien</p>
              <p className="mt-1 text-xl font-semibold text-navy">
                {property.property.type}
              </p>
            </div>
            <div>
              <p className="text-sm text-slate">Surface</p>
              <p className="mt-1 text-xl font-semibold text-navy">
                {property.property.surface} m²
              </p>
            </div>
            <div>
              <p className="text-sm text-slate">Loyer annuel estimé</p>
              <p className="mt-1 text-xl font-semibold text-gold">
                {formatCurrency(annualRent)}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
