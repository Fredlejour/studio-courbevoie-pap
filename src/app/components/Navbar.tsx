"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { property } from "@/data/property";

const navLinks = [
  { label: "L'investissement", href: "#investissement" },
  { label: "Le bien", href: "#bien" },
  { label: "Localisation", href: "#localisation" },
  { label: "Rendement", href: "#rendement" },
  { label: "Documents", href: "#documents" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/10 bg-navy/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="text-lg font-semibold tracking-tight text-gold">
          {property.brand}
          <span className="ml-2 text-xs font-medium uppercase tracking-widest text-cream/70">
            Invest
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
          >
            Être recontacté
          </a>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-cream md:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-b border-gold/10 bg-navy transition-all md:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-4 px-4 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-cream/80 hover:text-gold"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-navy hover:bg-gold-light"
            onClick={() => setOpen(false)}
          >
            Être recontacté
          </a>
        </nav>
      </div>
    </header>
  );
}
