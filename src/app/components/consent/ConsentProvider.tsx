"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import {
  disableAnalytics,
  isAnalyticsConfigured,
  readConsent,
  writeConsent,
  type ConsentStatus,
} from "@/lib/consent";
import { Analytics } from "./Analytics";
import { ConsentBanner } from "./ConsentBanner";

/**
 * Gestion du consentement à la mesure d’audience.
 *
 * Le fournisseur ne rend la bannière qu’après hydratation : le HTML statique
 * est inchangé, reste indexable sans JavaScript, et aucun script tiers n’est
 * présent tant que le visiteur n’a pas accepté.
 *
 * Sans identifiant de mesure configuré, le fournisseur est transparent :
 * aucun contexte, aucune bannière, aucun bouton de préférences, aucun cookie.
 */

type ConsentContextValue = {
  status: ConsentStatus;
  grant: () => void;
  deny: () => void;
  openPreferences: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

/** `null` si la mesure n’est pas configurée : les appelants ne rendent rien. */
export function useConsent(): ConsentContextValue | null {
  return useContext(ConsentContext);
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const configured = isAnalyticsConfigured();

  const [status, setStatus] = useState<ConsentStatus>("unknown");
  const [mounted, setMounted] = useState(false);
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    if (!configured) return;
    const frame = requestAnimationFrame(() => {
      setStatus(readConsent());
      setMounted(true);
    });
    return () => cancelAnimationFrame(frame);
  }, [configured]);

  const grant = useCallback(() => {
    writeConsent("granted");
    setStatus("granted");
    setReopened(false);
  }, []);

  const deny = useCallback(() => {
    // Le rechargement n’a de sens que pour un véritable retrait : il garantit
    // que le nouveau document ne contient plus le script Google. Un premier
    // refus n’a jamais rien chargé, la page reste donc en place.
    const wasGranted = readConsent() === "granted";

    writeConsent("denied");
    disableAnalytics();
    setStatus("denied");
    setReopened(false);

    if (wasGranted) window.location.reload();
  }, []);

  const openPreferences = useCallback(() => {
    setReopened(true);
  }, []);

  const value = useMemo<ConsentContextValue>(
    () => ({ status, grant, deny, openPreferences }),
    [status, grant, deny, openPreferences]
  );

  if (!configured) return <>{children}</>;

  const bannerOpen = mounted && (status === "unknown" || reopened);

  return (
    <ConsentContext.Provider value={value}>
      {children}
      {bannerOpen ? (
        <ConsentBanner
          status={status}
          onAccept={grant}
          onReject={deny}
          onDismiss={() => setReopened(false)}
          autoFocus={reopened}
        />
      ) : null}
      {status === "granted" ? <Analytics /> : null}
    </ConsentContext.Provider>
  );
}
