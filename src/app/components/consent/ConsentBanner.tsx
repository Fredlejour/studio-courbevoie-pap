"use client";

import { useEffect, useRef, useState } from "react";
import type { ConsentStatus } from "@/lib/consent";
import { useLegalModal } from "@/app/components/LegalModalProvider";
import { cn } from "@/lib/utils";

type Props = {
  status: ConsentStatus;
  onAccept: () => void;
  onReject: () => void;
  /** Fermeture sans changer le choix — uniquement si un choix existe déjà. */
  onDismiss: () => void;
  /** Déplace le focus sur le panneau lors d’une réouverture depuis le pied de page. */
  autoFocus: boolean;
};

/**
 * Bandeau de consentement à la mesure d’audience.
 *
 * Choix de conception :
 *
 * - les deux actions ont **exactement** le même traitement visuel : même
 *   forme, même taille, même contraste, aucun choix précoché ; refuser est
 *   donc aussi simple et aussi visible qu’accepter ;
 * - le panneau est ancré en bas de l’écran et ne couvre qu’une bande : le
 *   contenu de la page reste lisible et accessible, sans voile ni blocage ;
 * - le dialogue n’est pas modal et ne piège pas le focus ; la touche Échap ne
 *   le ferme que si un choix a déjà été exprimé, afin qu’une fermeture ne
 *   puisse jamais valoir consentement ;
 * - l’animation d’apparition est confiée à Tailwind et neutralisée par
 *   `motion-reduce`, conformément au reste du site ;
 * - « En savoir plus » ouvre la modale légale « Cookies » existante, sans
 *   quitter la page ni dupliquer le contenu légal.
 */
export function ConsentBanner({ status, onAccept, onReject, onDismiss, autoFocus }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const legalModal = useLegalModal();

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (autoFocus) panelRef.current?.focus();
  }, [autoFocus]);

  // Échap ne referme le panneau que lorsqu’un choix a déjà été enregistré :
  // une fermeture ne vaut jamais acceptation.
  useEffect(() => {
    if (status === "unknown") return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onDismiss();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [status, onDismiss]);

  // Hauteur tactile plancher de 48 px, libellé centré pouvant passer sur deux
  // lignes sans jamais réduire la zone cliquable. Classes identiques pour les
  // deux actions : aucune n’est visuellement favorisée.
  const actionClasses =
    "inline-flex min-h-[3rem] w-full items-center justify-center rounded-lg border border-cream/70 px-4 py-2.5 text-center text-sm font-medium leading-snug text-cream transition-colors hover:bg-cream hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:w-auto sm:min-w-[13rem] sm:px-6 sm:py-3";

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-[80] transition-transform duration-300 ease-out motion-reduce:transition-none",
        visible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="false"
        aria-labelledby="pap-consent-title"
        aria-describedby="pap-consent-text"
        className="border-t border-gold/40 bg-navy outline-none"
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 md:py-6 lg:px-8">
          <div className="flex flex-col gap-4 md:gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
            <div className="max-w-prose">
              <h2 id="pap-consent-title" className="text-lg font-semibold text-cream">
                Mesure d’audience
              </h2>

              <p id="pap-consent-text" className="mt-2 text-sm leading-relaxed text-cream/80">
                Avec votre accord, nous utilisons Google Analytics pour mesurer la
                fréquentation du site et améliorer son fonctionnement. Aucun cookie de
                mesure n’est déposé avant votre consentement.
              </p>

              <button
                type="button"
                onClick={() => legalModal?.open("cookies")}
                className="mt-2 inline-block py-1 text-sm font-medium text-gold underline underline-offset-4 transition-opacity hover:opacity-80"
              >
                En savoir plus
              </button>
            </div>

            <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:gap-3 lg:pt-1">
              <button type="button" onClick={onAccept} className={actionClasses}>
                Accepter les statistiques
              </button>
              <button type="button" onClick={onReject} className={actionClasses}>
                Refuser
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
