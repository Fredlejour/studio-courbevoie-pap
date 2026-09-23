"use client";

import { useState } from "react";
import { property } from "@/data/property";
import { legalModals, type LegalModalId } from "@/data/legalContent";
import { Modal } from "@/app/components/Modal";

export function Footer() {
  const [activeModal, setActiveModal] = useState<LegalModalId | null>(null);
  const active = legalModals.find((m) => m.id === activeModal) ?? null;

  return (
    <footer className="border-t border-gold/10 bg-navy py-12 text-cream/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-semibold text-gold">{property.siteName}</p>
            <p className="mt-1 text-sm">Vente directe avec les propriétaires</p>
          </div>
          <div className="text-sm">
            <p>Réf. : {property.reference}</p>
            <p className="mt-1">© {new Date().getFullYear()} {property.brand}. Tous droits réservés.</p>
          </div>
        </div>

        <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-cream/10 pt-6 text-sm">
          {legalModals.map((modal) => (
            <button
              key={modal.id}
              type="button"
              onClick={() => setActiveModal(modal.id)}
              className="text-cream/60 transition-colors hover:text-gold"
            >
              {modal.footerLabel}
            </button>
          ))}
        </nav>

        <p className="mt-8 text-xs leading-relaxed text-cream/40">
          Les informations présentées sur ce site sont fournies à titre indicatif et ne constituent pas un conseil en investissement. Les performances passées ne préjugent pas des performances futures. Les conditions, rendements et chiffres mentionnés sont susceptibles d’évolution et doivent être confirmés directement auprès des propriétaires.
        </p>
      </div>

      <Modal
        open={active !== null}
        onClose={() => setActiveModal(null)}
        title={active?.title ?? ""}
      >
        {active?.content}
      </Modal>
    </footer>
  );
}
