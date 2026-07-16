"use client";

import { motion } from "framer-motion";
import { ArrowDown, Building2 } from "lucide-react";
import { property } from "@/data/property";
import { HighlightBlock } from "@/app/components/HighlightBlock";
import { formatCurrency, formatPercent } from "@/lib/utils";

export function Hero() {
  const highlights = [
    { icon: "Building2" as const, label: "Résidence", value: property.property.residence },
    { icon: "MapPin" as const, label: "Localisation", value: `${property.property.city} (${property.property.zipCode})` },
    { icon: "TrendingUp" as const, label: "Rendement brut", value: formatPercent(property.investment.grossYield) },
    { icon: "Key" as const, label: "Gestion", value: "Clé en main" },
  ];

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center bg-navy pt-16"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              {property.brand}
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-cream md:text-5xl lg:text-6xl">
              Investissement locatif clé en main à {property.property.city}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
              Découvrez une opportunité premium dans la résidence étudiante{" "}
              <strong className="text-gold">{property.property.residence}</strong>. Un studio
              sélectionné par {property.brand} pour les investisseurs exigeants.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-base font-semibold text-navy transition hover:bg-gold-light"
              >
                Recevoir le dossier
              </a>
              <a
                href="#investissement"
                className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-7 py-3.5 text-base font-semibold text-cream transition hover:border-gold hover:text-gold"
              >
                Voir les chiffres
              </a>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {highlights.map((item) => (
                <HighlightBlock
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-gold/10 bg-gradient-to-br from-navy-light to-navy shadow-2xl">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-cream/40">
                <Building2 className="h-16 w-16" />
                <p className="text-sm font-medium uppercase tracking-widest">
                  Visuel du bien à venir
                </p>
              </div>
              <div className="absolute bottom-6 left-6 rounded-2xl bg-navy/80 p-5 backdrop-blur">
                <p className="text-sm text-cream/70">Prix d’acquisition</p>
                <p className="mt-1 text-3xl font-semibold text-gold">
                  {formatCurrency(property.investment.price)}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-cream/50 lg:block"
        >
          <a href="#investissement" aria-label="Défiler vers le contenu">
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
