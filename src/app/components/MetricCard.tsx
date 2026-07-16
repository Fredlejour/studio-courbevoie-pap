import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string;
  accent?: boolean;
  className?: string;
}

export function MetricCard({ label, value, accent, className }: MetricCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-6 shadow-sm transition-all hover:shadow-md",
        accent
          ? "border-gold/20 bg-navy text-cream"
          : "border-gold/10 bg-white text-navy",
        className
      )}
    >
      <p className={cn("text-sm font-medium", accent ? "text-cream/70" : "text-slate-dark")}>
        {label}
      </p>
      <p
        className={cn(
          "mt-2 text-3xl font-semibold tracking-tight",
          accent ? "text-gold" : "text-navy"
        )}
      >
        {value}
      </p>
    </div>
  );
}
