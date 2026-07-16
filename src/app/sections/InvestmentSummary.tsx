"use client";

import { motion } from "framer-motion";
import { property } from "@/data/property";
import { MetricCard } from "@/app/components/MetricCard";
import { SectionTitle } from "@/app/components/SectionTitle";
import { formatCurrency, formatPercent } from "@/lib/utils";

export function InvestmentSummary() {
  const inv = property.investment;

  return (
    <section id="investissement" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Un investissement chiffré"
          subtitle="Les données clés du dossier présentées de manière transparente, sans frais cachés."
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-6 rounded-2xl border border-gold/20 bg-navy p-8 text-center shadow-sm"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-cream/60">
            Revenus locatifs annuels
          </p>
          <p className="mt-2 text-4xl font-semibold text-gold md:text-5xl">
            {formatCurrency(inv.annualRent)} <span className="text-2xl text-cream/60">TTC / an</span>
          </p>
          <p className="mt-2 text-sm text-cream/70">
            Soit {formatCurrency(inv.incomeAfterTax)} / an après taxe foncière
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <MetricCard
            label="Prix honoraires inclus"
            value={formatCurrency(inv.price)}
          />
          <MetricCard
            label="Prix net vendeur"
            value={formatCurrency(inv.netPrice)}
          />
          <MetricCard
            label="Honoraires acquéreur"
            value={`${formatCurrency(inv.buyerFees)} TTC`}
          />
          <MetricCard
            label="Loyer trimestriel"
            value={`${formatCurrency(inv.quarterlyRent)} TTC`}
          />
          <MetricCard
            label="Taxe foncière"
            value={`${formatCurrency(inv.propertyTax)} / an`}
          />
          <MetricCard
            label="Revenu après taxe foncière"
            value={`${formatCurrency(inv.incomeAfterTax)} / an`}
            accent
          />
          <MetricCard
            label="Rendement brut"
            value={formatPercent(inv.grossYield)}
          />
          <MetricCard
            label="Rendement après taxe foncière"
            value={formatPercent(inv.yieldAfterTax)}
            accent
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-2xl border border-gold/10 bg-white p-6 text-center text-sm text-slate shadow-sm md:p-8"
        >
          Les rendements sont calculés sur le prix de vente honoraires inclus de{" "}
          {formatCurrency(inv.price)}, hors frais de notaire, financement et fiscalité personnelle.
          La taxe foncière de {formatCurrency(inv.propertyTax)} est confirmée par l’avis fiscal.
        </motion.div>
      </div>
    </section>
  );
}
