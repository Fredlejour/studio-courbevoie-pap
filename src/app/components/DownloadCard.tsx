import { FileText, Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface DownloadCardProps {
  title: string;
  file: string;
  available?: boolean;
  className?: string;
}

export function DownloadCard({ title, file, available = true, className }: DownloadCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-start justify-between gap-6 rounded-2xl border border-gold/10 bg-white p-6 shadow-sm transition",
        available && "hover:shadow-md",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-gold",
          available ? "bg-navy" : "bg-slate/20"
        )}>
          <FileText className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-navy">{title}</h3>
          <p className="mt-1 text-sm text-slate">{available ? "Document PDF" : "Bientôt disponible"}</p>
        </div>
      </div>
      {available ? (
        <a
          href={file}
          download
          className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
        >
          <Download className="h-4 w-4" />
          Télécharger
        </a>
      ) : (
        <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-slate/20 px-5 py-2.5 text-sm font-semibold text-slate">
          Bientôt disponible
        </span>
      )}
    </div>
  );
}
