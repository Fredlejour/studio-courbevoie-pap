"use client";

import { useState } from "react";
import { useWeb3Forms } from "@/app/hooks/useWeb3Forms";
import { property, type FormRequestType } from "@/data/property";
import { cn } from "@/lib/utils";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface ContactFormProps {
  requestType: FormRequestType;
}

export function ContactForm({ requestType }: ContactFormProps) {
  const { status, message, submit } = useWeb3Forms();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [messageText, setMessageText] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Valeurs calculées injectées
    const fullName = `${firstName} ${lastName}`.trim();
    formData.set("name", fullName);
    formData.set("from_name", fullName);
    formData.set("subject", `${property.siteName} — Demande ${requestType === "dossier" ? "de dossier" : "d'échange / visite"}`);
    formData.set("reference", property.reference);
    formData.set("property_name", property.property.name);
    formData.set("request_type", requestType);
    formData.set("page_url", typeof window !== "undefined" ? window.location.href : "");
    formData.set("submission_date", new Date().toLocaleString("fr-FR"));

    await submit(formData);
  };

  const formLabel =
    requestType === "dossier"
      ? "Recevoir le dossier complet"
      : "Organiser un échange / visite";

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-gold/20 bg-navy p-8 text-cream">
        <div className="flex items-start gap-4">
          <CheckCircle className="h-6 w-6 shrink-0 text-gold" />
          <div>
            <p className="text-lg font-semibold text-gold">Demande envoyée</p>
            <p className="mt-1 text-cream/80">{message}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-gold/10 bg-white p-6 shadow-sm md:p-8"
    >
      <h3 className="text-xl font-semibold text-navy">{formLabel}</h3>

      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-navy">
            Prénom <span className="text-gold">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full rounded-xl border border-gold/20 bg-cream px-4 py-3 text-navy outline-none transition focus:border-gold focus:ring-1 focus:ring-gold"
            placeholder="Votre prénom"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-navy">
            Nom <span className="text-gold">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full rounded-xl border border-gold/20 bg-cream px-4 py-3 text-navy outline-none transition focus:border-gold focus:ring-1 focus:ring-gold"
            placeholder="Votre nom"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-navy">
            Email <span className="text-gold">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-gold/20 bg-cream px-4 py-3 text-navy outline-none transition focus:border-gold focus:ring-1 focus:ring-gold"
            placeholder="exemple@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-navy">
            Téléphone
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-xl border border-gold/20 bg-cream px-4 py-3 text-navy outline-none transition focus:border-gold focus:ring-1 focus:ring-gold"
            placeholder="06 12 34 56 78"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          className="w-full rounded-xl border border-gold/20 bg-cream px-4 py-3 text-navy outline-none transition focus:border-gold focus:ring-1 focus:ring-gold"
          placeholder="Votre message, questions, dates de disponibilité..."
        />
      </div>

      <label className="flex items-start gap-3">
        <input
          type="checkbox"
          name="consent"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-4 w-4 accent-gold"
        />
        <span className="text-sm text-slate-dark">
          J’accepte que les propriétaires du studio traitent mes données pour répondre à
          ma demande.
        </span>
      </label>

      {status === "error" && (
        <div className="flex items-start gap-3 rounded-xl bg-red-50 p-4 text-red-700">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p className="text-sm">{message}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className={cn(
          "inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-base font-semibold text-navy transition-colors hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-60",
          "sm:w-auto sm:self-start"
        )}
      >
        {status === "loading" ? "Envoi en cours..." : formLabel}
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
