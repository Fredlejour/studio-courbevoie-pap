"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import { property } from "@/data/property";
import { SectionTitle } from "@/app/components/SectionTitle";

export function VirtualTour() {
  const { virtualTour } = property.assets;
  const [showIframe, setShowIframe] = useState(false);

  return (
    <section id="visite-virtuelle" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Visite virtuelle"
          subtitle="Découvrez le studio comme si vous y étiez grâce à la visite virtuelle interactive."
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-5xl"
        >
          {showIframe ? (
            <div className="space-y-4">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-gold/10 bg-white shadow-sm">
                <iframe
                  src={virtualTour.url}
                  title="Visite virtuelle du studio"
                  className="absolute inset-0 h-full w-full"
                  allow="fullscreen"
                  allowFullScreen
                />
              </div>
              <p className="text-center text-sm text-slate">
                Si la visite ne s’affiche pas, ouvrez-la directement :
                <a
                  href={virtualTour.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 inline-flex items-center gap-1 font-medium text-gold underline-offset-2 hover:underline"
                >
                  <ExternalLink className="h-3 w-3" />
                  Visite virtuelle Previsite
                </a>
              </p>
            </div>
          ) : (
            <div className="relative overflow-hidden rounded-2xl border border-gold/10 bg-white p-8 text-center shadow-sm sm:p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-navy/5 to-navy/10" />
              <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy text-gold shadow-lg">
                  <Play className="h-6 w-6 fill-current" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-navy">
                  Visite virtuelle 360°
                </h3>
                <p className="mt-3 text-slate">
                  Certaines plateformes de visite virtuelle bloquent l’intégration dans un iframe.
                  Vous pouvez lancer la visite ici ou l’ouvrir dans un nouvel onglet.
                </p>
                <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <button
                    type="button"
                    onClick={() => setShowIframe(true)}
                    className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
                  >
                    <Play className="h-4 w-4 fill-current" />
                    Lancer la visite virtuelle
                  </button>
                  <a
                    href={virtualTour.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-navy/10 px-8 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy/5"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Ouvrir dans un nouvel onglet
                  </a>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
