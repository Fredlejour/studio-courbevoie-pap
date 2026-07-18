"use client";

import { motion } from "framer-motion";
import { FileText, Zap, Ruler, ShieldCheck, Receipt, Scale, ArrowDown } from "lucide-react";

const items = [
  { icon: FileText, label: "Bail commercial" },
  { icon: Zap, label: "DPE" },
  { icon: Ruler, label: "Loi Carrez" },
  { icon: ShieldCheck, label: "ERP" },
  { icon: Receipt, label: "Taxe foncière" },
  { icon: Scale, label: "Documents de propriété" },
];

export function PreContactCTA() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-navy py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-cream md:text-4xl">
            Prêt à étudier cette opportunité ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cream/80">
            Recevez gratuitement le dossier complet comprenant :
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3"
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-xl border border-gold/20 bg-white/5 px-4 py-3 text-cream"
              >
                <Icon className="h-5 w-5 shrink-0 text-gold" />
                <span className="font-medium">{item.label}</span>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 flex justify-center"
        >
          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-navy transition hover:bg-gold/90"
          >
            Recevoir le dossier
            <ArrowDown className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
