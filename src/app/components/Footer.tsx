import { property } from "@/data/property";

export function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-navy py-12 text-cream/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-semibold text-gold">{property.brand}</p>
            <p className="mt-1 text-sm">Opportunités d’investissement immobilier sélectionnées</p>
          </div>
          <div className="text-sm">
            <p>Réf. : {property.reference}</p>
            <p className="mt-1">© {new Date().getFullYear()} {property.brand}. Tous droits réservés.</p>
          </div>
        </div>
        <p className="mt-8 text-xs leading-relaxed text-cream/40">
          Les informations présentées sur ce site sont fournies à titre indicatif et ne constituent pas un conseil en investissement. Les performances passées ne préjugent pas des performances futures. Les conditions, rendements et chiffres mentionnés sont susceptibles d’évolution et doivent être confirmés par l’équipe {property.brand}.
        </p>
      </div>
    </footer>
  );
}
