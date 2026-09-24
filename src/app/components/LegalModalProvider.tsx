"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { legalModals, type LegalModalId } from "@/data/legalContent";
import { Modal } from "@/app/components/Modal";

/**
 * Ouverture partagée des modales légales.
 *
 * L’état de la modale active est porté ici, au-dessus du site entier, afin
 * que la bannière de consentement (« En savoir plus ») et le pied de page
 * ouvrent exactement la même modale, avec le même contenu légal unique.
 */

type LegalModalContextValue = {
  open: (id: LegalModalId) => void;
  close: () => void;
};

const LegalModalContext = createContext<LegalModalContextValue | null>(null);

export function useLegalModal(): LegalModalContextValue | null {
  return useContext(LegalModalContext);
}

export function LegalModalProvider({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState<LegalModalId | null>(null);
  const active = legalModals.find((m) => m.id === activeId) ?? null;

  const open = useCallback((id: LegalModalId) => setActiveId(id), []);
  const close = useCallback(() => setActiveId(null), []);

  const value = useMemo<LegalModalContextValue>(() => ({ open, close }), [open, close]);

  return (
    <LegalModalContext.Provider value={value}>
      {children}
      <Modal open={active !== null} onClose={close} title={active?.title ?? ""}>
        {active?.content}
      </Modal>
    </LegalModalContext.Provider>
  );
}
