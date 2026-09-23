"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Users, MapPin, FileDown, CalendarClock } from "lucide-react";
import { property, type FormRequestType } from "@/data/property";
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
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-slate">{title}</p>
        <div className="mt-1 break-words text-navy">{children}</div>
      </div>
    </div>
  );
}

const tabs: Array<{ type: FormRequestType; label: string; icon: typeof FileDown }> = [
  { type: "dossier", label: "Recevoir le dossier", icon: FileDown },
  { type: "visite", label: "Organiser un échange / visite", icon: CalendarClock },
];

export function ContactSection() {
  const { phone, email } = property.assets.presenter;
  const [activeTab, setActiveTab] = useState<FormRequestType>("dossier");

  return (
    <section id="contact" className={cn("bg-cream py-24")}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Intéressé par ce studio ?"
          subtitle="Recevez le dossier complet ou organisez un échange directement avec les propriétaires."
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 grid gap-4 sm:grid-cols-3"
        >
          <ContactBox icon={<Users className="h-5 w-5" />} title="Vos interlocuteurs">
            <p className="font-semibold">{property.assets.presenter.name}</p>
            <p className="text-sm text-slate">Propriétaires du studio</p>
          </ContactBox>
          <ContactBox icon={<Mail className="h-5 w-5" />} title="Contact">
            {email ? (
              <a href={`mailto:${email}`} className="font-semibold hover:text-gold">
                {email}
              </a>
            ) : (
              <p className="font-semibold">Via le formulaire ci-dessous</p>
            )}
            {phone && (
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="block font-semibold hover:text-gold"
              >
                {phone}
              </a>
            )}
            <p className="text-sm text-slate">Réponse directe des propriétaires</p>
          </ContactBox>
          <ContactBox icon={<MapPin className="h-5 w-5" />} title="Adresse du bien">
            <p className="font-semibold">{property.property.address}</p>
          </ContactBox>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 rounded-2xl border border-gold/10 bg-navy p-6 text-center text-cream"
        >
          <p className="text-gold font-semibold">Vente directe avec les propriétaires</p>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-cream/80">
            Sur ce site, vous échangez directement avec Anthony et Eve Piorowicz,
            propriétaires du studio.
          </p>
          <p className="mt-3 text-xs text-cream/50">Réf. {property.reference}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10"
        >
          <div className="mb-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
            <div className="grid w-full gap-2 rounded-full border border-gold/10 bg-white p-1.5 sm:inline-flex sm:w-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.type;
                return (
                  <button
                    key={tab.type}
                    type="button"
                    onClick={() => setActiveTab(tab.type)}
                    className={cn(
                      "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                      isActive ? "bg-navy text-gold" : "text-slate hover:text-navy"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mx-auto max-w-3xl">
            <ContactForm key={activeTab} requestType={activeTab} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
