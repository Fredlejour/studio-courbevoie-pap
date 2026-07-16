"use client";

import { motion } from "framer-motion";
import { Train, Building2, ShoppingBag, GraduationCap, Leaf } from "lucide-react";
import { property } from "@/data/property";
import { SectionTitle } from "@/app/components/SectionTitle";
import { cn } from "@/lib/utils";

const LATITUDE = 48.8970336;
const LONGITUDE = 2.2354627;
const BBOX_DELTA = 0.004;
const osmBbox = [
  LONGITUDE - BBOX_DELTA,
  LATITUDE - BBOX_DELTA / 1.4,
  LONGITUDE + BBOX_DELTA,
  LATITUDE + BBOX_DELTA / 1.4,
].join(",");
const osmEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${osmBbox}&layer=mapnik&marker=${LATITUDE},${LONGITUDE}`;
const osmLinkUrl = `https://www.openstreetmap.org/?mlat=${LATITUDE}&mlon=${LONGITUDE}#map=17/${LATITUDE}/${LONGITUDE}`;

const proximityItems = [
  { icon: Train, label: "Transports en commun", value: "À proximité" },
  { icon: Building2, label: "Secteur de La Défense", value: "Accès proche" },
  { icon: ShoppingBag, label: "Commerces et services", value: "Du quotidien à proximité" },
  { icon: GraduationCap, label: "Établissements d'enseignement supérieur", value: "Étudiants / alternants" },
  { icon: Leaf, label: "Cadre", value: "Résidence sécurisée" },
];

export function Location() {
  return (
    <section id="localisation" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Une adresse stratégique"
          subtitle={`Le bien est situé à ${property.property.city} (${property.property.zipCode}), dans une résidence étudiante à fort potentiel locatif, proche de La Défense et des transports.`}
          centered
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-gold/10 bg-navy shadow-sm"
          >
            <iframe
              title="Localisation du bien"
              src={osmEmbedUrl}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
            />
            <a
              href={osmLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 rounded-full bg-navy/80 px-4 py-2 text-xs font-medium text-cream backdrop-blur transition hover:bg-navy"
            >
              Voir en plein écran
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid content-start gap-4"
          >
            {proximityItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={cn(
                    "flex items-center gap-4 rounded-2xl border border-gold/10 bg-white p-4 transition hover:border-gold/30",
                    index === 0 && "border-gold/30 bg-gold/5"
                  )}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate">{item.label}</p>
                    <p className="text-base font-semibold text-navy">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
