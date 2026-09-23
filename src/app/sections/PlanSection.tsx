"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import { property } from "@/data/property";
import { SectionTitle } from "@/app/components/SectionTitle";

export function PlanSection() {
  const [open, setOpen] = useState(false);
  const { plan } = property.assets;

  return (
    <>
      <section id="plan" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Plan du studio"
            subtitle="Organisation optimisée d'un studio de 17,92 m² (18 m²) : entrée, pièce de vie avec kitchenette, salle d'eau et WC."
            centered
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              onClick={() => setOpen(true)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-gold/10 bg-cream p-2 outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label="Agrandir le plan du studio"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={encodeURI(plan.src)}
                  alt={plan.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-navy/80 text-cream opacity-0 transition group-hover:opacity-100">
                <Maximize2 className="h-5 w-5" />
              </div>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col justify-center rounded-2xl border border-gold/10 bg-cream p-8"
            >
              <h3 className="text-2xl font-semibold text-navy">
                {property.property.surfaceDisplay} pensés pour la location
              </h3>
              <p className="mt-4 text-slate-dark">
                Le plan propose une distribution fonctionnelle et optimisée : chaque espace est
                pensé pour maximiser le confort d’usage dans un studio étudiant meublé.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  { label: "Entrée + placard", area: "3,90 m²" },
                  { label: "Séjour / Chambre + Kitchenette", area: "11,00 m²" },
                  { label: "Salle d’eau + WC", area: "3,02 m²" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-xl border border-gold/10 bg-white p-4"
                  >
                    <span className="flex items-center gap-3 text-slate-dark">
                      <span className="h-2 w-2 rounded-full bg-gold" />
                      {item.label}
                    </span>
                    <span className="font-semibold text-navy">{item.area}</span>
                  </div>
                ))}

                <div className="flex items-center justify-between rounded-xl bg-navy p-4">
                  <span className="font-semibold text-cream">Total</span>
                  <span className="font-semibold text-gold">{property.property.surfaceDisplay}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy/95 p-4">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 rounded-full bg-cream/10 p-2 text-cream transition hover:bg-cream/20"
            aria-label="Fermer"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative h-[85vh] w-full max-w-6xl">
            <Image
              src={encodeURI(plan.src)}
              alt={plan.alt}
              fill
              sizes="100vw"
              className="object-contain"
              unoptimized
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
