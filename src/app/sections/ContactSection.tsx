"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { property } from "@/data/property";
import { SectionTitle } from "@/app/components/SectionTitle";
import { ContactForm } from "@/app/components/ContactForm";
import { cn } from "@/lib/utils";

interface ContactBoxProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function ContactBox({ icon, title, children }: ContactBoxProps) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-gold/10 bg-white p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-slate">{title}</p>
        <div className="mt-1 text-navy">{children}</div>
      </div>
    </div>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className={cn("bg-cream py-24")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Intéressé par ce dossier ?"
          subtitle={`Recevez le dossier complet ou organisez un échange personnalisé avec l'équipe ${property.brand}.`}
          centered
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <ContactBox icon={<Mail className="h-5 w-5" />} title="Email">
              <a href="mailto:contact@lejourconsulting.fr" className="font-semibold hover:text-gold">
                contact@lejourconsulting.fr
              </a>
            </ContactBox>
            <ContactBox icon={<Phone className="h-5 w-5" />} title="Téléphone">
              <a href="tel:+33600000000" className="font-semibold hover:text-gold">
                +33 6 00 00 00 00
              </a>
            </ContactBox>
            <ContactBox icon={<MapPin className="h-5 w-5" />} title="Zone">
              <p className="font-semibold">Courbevoie — Grand Paris</p>
            </ContactBox>

            <div className="rounded-2xl border border-gold/10 bg-navy p-6 text-cream">
              <p className="text-gold font-semibold">{property.brand}</p>
              <p className="mt-2 text-cream/80 text-sm">
                Conseil en investissement immobilier sélectionné. Accompagnement personnalisé
                et dossiers clés en main pour investisseurs privés et expatriés.
              </p>
              <p className="mt-4 text-xs text-cream/50">Réf. {property.reference}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ContactForm requestType="dossier" />
          </motion.div>
        </div>

        <div className="mt-12">
          <div className="rounded-2xl border border-gold/10 bg-white p-6 shadow-sm lg:max-w-3xl">
            <h3 className="text-xl font-semibold text-navy">Organiser un échange ou une visite</h3>
            <p className="mt-2 text-slate-dark">
              Vous souhaitez discuter de l’opportunité ou visiter le bien ? Envoyez-nous votre disponibilité.
            </p>
            <div className="mt-6">
              <ContactForm requestType="visite" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
