"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { property } from "@/data/property";
import { SectionTitle } from "@/app/components/SectionTitle";

export function PropertyPresentation() {
  return (
    <section id="bien" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Le bien en détail"
          subtitle={`${property.property.type} dans la résidence ${property.property.residence}, au ${property.property.floor}ème étage avec ascenseur.`}
          centered
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-2xl bg-cream"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-navy/5 to-navy/10" />
                <Camera className="relative z-10 h-8 w-8 text-slate" />
                <span className="relative z-10 mt-2 text-xs font-medium uppercase tracking-wider text-slate">
                  Photo {i}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-gold/10 bg-cream p-8"
          >
            <h3 className="text-2xl font-semibold text-navy">{property.property.name}</h3>
            <p className="mt-2 text-slate">{property.property.address}</p>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <dt className="text-sm text-slate">Surface</dt>
                <dd className="text-lg font-semibold text-navy">
                  {property.property.surface} m²
                </dd>
              </div>
              <div>
                <dt className="text-sm text-slate">Pièces</dt>
                <dd className="text-lg font-semibold text-navy">
                  {property.property.rooms}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-slate">Étage</dt>
                <dd className="text-lg font-semibold text-navy">
                  {property.property.floor}{property.property.elevator ? " avec ascenseur" : ""}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-slate">Année de construction</dt>
                <dd className="text-lg font-semibold text-navy">
                  {property.property.yearBuilt}
                </dd>
              </div>
            </dl>

            <div className="mt-8">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-navy">
                Équipements
              </h4>
              <ul className="mt-4 grid grid-cols-2 gap-3">
                {property.property.equipment.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-dark">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
