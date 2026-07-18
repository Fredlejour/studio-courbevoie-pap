"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/app/components/SectionTitle";

const dpeScale = [
  { label: "A", color: "#3a7d3e" },
  { label: "B", color: "#5da13e" },
  { label: "C", color: "#c7d33c", active: true },
  { label: "D", color: "#f7e643" },
  { label: "E", color: "#f7b334" },
  { label: "F", color: "#e67830" },
  { label: "G", color: "#d03e36" },
];

export function DPESection() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Diagnostic de Performance Énergétique"
          subtitle="Bilan énergétique officiel du studio et estimation des dépenses annuelles."
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-2xl border border-gold/10 bg-white p-8 shadow-sm md:p-10"
        >
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* DPE visual */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-full max-w-[260px] space-y-1.5">
                {dpeScale.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center rounded-r-md transition ${
                      item.active
                        ? "ring-2 ring-gold ring-offset-2 ring-offset-white"
                        : ""
                    }`}
                    style={{
                      backgroundColor: item.color,
                      width: `${100 - dpeScale.indexOf(item) * 8}%`,
                      minWidth: "44%",
                    }}
                  >
                    <span
                      className={`px-3 py-1 text-sm font-bold ${
                        item.active ? "text-navy" : "text-white"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm font-medium text-navy">Classe énergétique C</p>
            </div>

            {/* DPE data */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-white px-3 py-1.5 text-xs font-medium text-navy">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Diagnostic officiel réalisé en février 2026
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-gold/10 bg-cream p-4">
                  <p className="text-sm text-slate">Consommation</p>
                  <p className="mt-1 text-xl font-semibold text-navy">164 kWh/m²/an</p>
                </div>
                <div className="rounded-xl border border-gold/10 bg-cream p-4">
                  <p className="text-sm text-slate">Estimation des dépenses</p>
                  <p className="mt-1 text-xl font-semibold text-navy">380 € à 540 € / an</p>
                </div>
              </div>
              <p className="text-slate-dark leading-relaxed">
                Le classement énergétique C constitue un bon niveau de performance pour ce type
                d&rsquo;investissement et participe à la valorisation du bien.
              </p>
              <p className="text-slate-dark leading-relaxed">
                Les performances énergétiques constituent aujourd&rsquo;hui un critère important
                dans la valorisation d&rsquo;un patrimoine immobilier.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
