"use client";

import { motion } from "framer-motion";
import { property } from "@/data/property";
import { SectionTitle } from "@/app/components/SectionTitle";
import { MetricCard } from "@/app/components/MetricCard";
import { formatCurrency, formatPercent } from "@/lib/utils";

export function FinancialPlan() {
  const acquisition = {
    price: property.investment.price,
    notaryFees: Math.round(property.investment.price * 0.0245),
    agencyFees: 0,
    total: 0,
  };
  acquisition.total = acquisition.price + acquisition.notaryFees + acquisition.agencyFees;

  const annualRent = property.investment.monthlyRent * 12;
  const annualCharges = property.investment.charges * 12;
  const netRent = annualRent - annualCharges;
  const netYield = netRent / acquisition.total;

  return (
    <section id="rendement" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Plan financier simplifié"
          subtitle="Estimation indicative basée sur les données communiquées. Les montants définitifs dépendent de la situation fiscale et bancaire de chaque investisseur."
          centered
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard label="Prix d'achat" value={formatCurrency(acquisition.price)} />
          <MetricCard label="Frais de notaire (estimés 2,45 %)" value={formatCurrency(acquisition.notaryFees)} />
          <MetricCard label="Total investi estimé" value={formatCurrency(acquisition.total)} accent />
          <MetricCard label="Loyer annuel brut" value={formatCurrency(annualRent)} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid gap-6 lg:grid-cols-3"
        >
          <div className="rounded-2xl border border-gold/10 bg-cream p-6">
            <p className="text-sm text-slate">Charges annuelles estimées</p>
            <p className="mt-2 text-2xl font-semibold text-navy">
              {formatCurrency(annualCharges)}
            </p>
            <p className="mt-1 text-sm text-slate-dark">
              Soit {property.investment.charges} € / mois
            </p>
          </div>
          <div className="rounded-2xl border border-gold/10 bg-cream p-6">
            <p className="text-sm text-slate">Revenu locatif net estimé</p>
            <p className="mt-2 text-2xl font-semibold text-gold">
              {formatCurrency(netRent)}
            </p>
            <p className="mt-1 text-sm text-slate-dark">
              Loyer annuel - charges annuelles
            </p>
          </div>
          <div className="rounded-2xl border border-gold/10 bg-cream p-6">
            <p className="text-sm text-slate">Rendement net estimé</p>
            <p className="mt-2 text-2xl font-semibold text-gold">
              {formatPercent(netYield)}
            </p>
            <p className="mt-1 text-sm text-slate-dark">
              Avant fiscalité
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 rounded-2xl border border-gold/10 bg-navy p-6 text-cream md:p-8"
        >
          <h3 className="text-xl font-semibold text-gold">Objectif de présentation</h3>
          <p className="mt-4 max-w-3xl leading-relaxed text-cream/80">
            Ce dossier vise à donner une vision claire de l’opportunité. Avant tout engagement,
            un accompagnement personnalisé avec simulation fiscale et financière sera réalisé
            avec chaque investisseur, selon sa situation et son objectif patrimonial.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
