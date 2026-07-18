"use client";

import { motion } from "framer-motion";
import { property } from "@/data/property";
import { SectionTitle } from "@/app/components/SectionTitle";
import { Gallery } from "@/app/components/Gallery";

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
          >
            <Gallery images={property.assets.studio} />
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
                <dt className="text-sm text-slate">Surface Loi Carrez</dt>
                <dd className="text-lg font-semibold text-navy">
                  {property.property.surfaceDisplay}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-slate">Pièces</dt>
                <dd className="text-lg font-semibold text-navy">
                  {property.property.rooms}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-slate">Lot</dt>
                <dd className="text-lg font-semibold text-navy">
                  {property.property.lot}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-slate">Étage</dt>
                <dd className="text-lg font-semibold text-navy">
                  {property.property.floor}{property.property.elevator ? " avec ascenseur" : ""}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-slate">Construction</dt>
                <dd className="text-lg font-semibold text-navy">
                  {property.property.yearBuilt}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-slate">Chauffage</dt>
                <dd className="text-lg font-semibold text-navy">
                  {property.property.heating}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-slate">Fenêtre</dt>
                <dd className="text-lg font-semibold text-navy">
                  {property.property.window}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-slate">Gestion</dt>
                <dd className="text-lg font-semibold text-navy">
                  {property.investment.managementType}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-slate">Gestionnaire / exploitant</dt>
                <dd className="text-lg font-semibold text-navy">Nexity Studéa</dd>
              </div>
              <div>
                <dt className="text-sm text-slate">DPE</dt>
                <dd className="text-lg font-semibold text-navy">C</dd>
              </div>
            </dl>

            <div className="mt-8">
              <p className="text-slate-dark">
                Le studio développe une surface Loi Carrez de {property.property.surfaceDisplay}.
                Son agencement comprend une entrée avec placard, une pièce principale intégrant
                un espace nuit, un espace de travail et une kitchenette équipée, ainsi qu’une
                salle d’eau avec WC. Situé au {property.property.floor}e étage, il est intégré
                à une résidence étudiante proposant plusieurs espaces et services communs.
              </p>

              <h4 className="mt-6 text-sm font-semibold uppercase tracking-wider text-navy">
                Répartition issue du métrage
              </h4>
              <ul className="mt-4 grid grid-cols-2 gap-3">
                <li className="flex items-center gap-2 text-slate-dark">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Entrée + placard : 3,90 m²
                </li>
                <li className="flex items-center gap-2 text-slate-dark">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Séjour / Chambre + Kitchenette : 11,00 m²
                </li>
                <li className="flex items-center gap-2 text-slate-dark">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Salle d’eau + WC : 3,02 m²
                </li>
                <li className="flex items-center gap-2 text-slate-dark">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Total : 17,92 m² (18 m²)
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
