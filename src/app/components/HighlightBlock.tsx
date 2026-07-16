import { cn } from "@/lib/utils";
import {
  ShieldCheck,
  MapPin,
  TrendingUp,
  Key,
  Building2,
  Home,
  Euro,
  FileText,
  Download,
  Mail,
  Phone,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/data/property";

const icons: Record<IconName, LucideIcon> = {
  ShieldCheck,
  MapPin,
  TrendingUp,
  Key,
  Building2,
  Home,
  Euro,
  FileText,
  Download,
  Mail,
  Phone,
  ChevronDown,
};

interface HighlightBlockProps {
  icon: IconName;
  label: string;
  value: string;
  className?: string;
}

export function HighlightBlock({ icon, label, value, className }: HighlightBlockProps) {
  const Icon = icons[icon] ?? ShieldCheck;

  return (
    <div className={cn("flex items-start gap-4", className)}>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-medium text-cream/60">{label}</p>
        <p className="text-base font-semibold text-cream">{value}</p>
      </div>
    </div>
  );
}
