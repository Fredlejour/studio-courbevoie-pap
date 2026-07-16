"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, Globe, User, ArrowRight } from "lucide-react";
import { property } from "@/data/property";
import { SectionTitle } from "@/app/components/SectionTitle";
import { cn } from "@/lib/utils";

export function ProfileSection() {
  const { presenter } = property.assets;
  const hasPhoto = Boolean(presenter.photo);

  return (
    <section id="interlocuteur" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Votre interlocuteur"
          subtitle="Un accompagnement personnalisé de la première question jusqu'à la signature."
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-gold/10 bg-cream shadow-sm"
        >
          <div className="grid gap-8 overflow-hidden md:grid-cols-[320px_1fr]">
            <div className="relative h-80 w-full bg-navy md:h-full md:min-h-[420px]">
              {hasPhoto ? (
                <Image
                  src={encodeURI(presenter.photo!)}
                  alt={presenter.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover object-top"
                  unoptimized
                  priority
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-cream/40">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-cream/20">
                    <User className="h-10 w-10" />
                  </div>
                  <span className="text-sm font-medium uppercase tracking-wider">
                    Photo à venir
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center p-8 md:p-10">
              <h3 className="text-3xl font-semibold text-navy">{presenter.name}</h3>
              <p className="mt-1 text-lg font-medium text-gold">{presenter.role}</p>

              <div className="mt-6 space-y-3 text-slate-dark">
                {presenter.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`tel:${presenter.phone.replace(/\s/g, "")}`}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    "border border-gold/10 bg-white text-navy hover:border-gold/30"
                  )}
                >
                  <Phone className="h-4 w-4 text-gold" />
                  {presenter.phone}
                </a>
                <a
                  href={`mailto:${presenter.email}`}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    "border border-gold/10 bg-white text-navy hover:border-gold/30"
                  )}
                >
                  <Mail className="h-4 w-4 text-gold" />
                  {presenter.email}
                </a>
                <a
                  href={presenter.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    "border border-gold/10 bg-white text-navy hover:border-gold/30"
                  )}
                >
                  <Globe className="h-4 w-4 text-gold" />
                  lejourconsulting.com
                </a>
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-gold transition-colors hover:bg-navy-light"
              >
                {presenter.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
