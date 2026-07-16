"use client";

import { useState } from "react";

export type SubmissionStatus = "idle" | "loading" | "success" | "error";

export interface UseWeb3FormsReturn {
  status: SubmissionStatus;
  message: string;
  submit: (formData: FormData) => Promise<void>;
}

export function useWeb3Forms(): UseWeb3FormsReturn {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [message, setMessage] = useState("");

  async function submit(formData: FormData) {
    setStatus("loading");
    setMessage("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      setMessage("Clé Web3Forms manquante. Veuillez vérifier la configuration.");
      return;
    }

    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setMessage("Merci, votre demande a bien été transmise. Nous revenons vers vous rapidement.");
      } else {
        setStatus("error");
        setMessage(data?.message || "Une erreur est survenue lors de l'envoi.");
      }
    } catch {
      setStatus("error");
      setMessage("Une erreur réseau est survenue. Veuillez réessayer.");
    }
  }

  return { status, message, submit };
}
