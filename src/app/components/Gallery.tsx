"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface GalleryImage {
  src: string;
  alt: string;
  label?: string;
}

interface GalleryProps {
  images: GalleryImage[];
  mainClassName?: string;
  thumbClassName?: string;
}

export function Gallery({ images, mainClassName, thumbClassName }: GalleryProps) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const current = images[index];
  if (!current) return null;

  const safeSrc = (src: string) => encodeURI(src);

  return (
    <>
      <div className={cn("space-y-4", mainClassName)}>
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="group relative block w-full overflow-hidden rounded-2xl border border-gold/10 bg-cream outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label="Ouvrir la galerie en plein écran"
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={safeSrc(current.src)}
              alt={current.alt}
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              unoptimized
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
          </div>
          {current.label && (
            <span className="absolute bottom-4 left-4 rounded-full bg-navy/80 px-3 py-1 text-xs font-medium text-cream backdrop-blur">
              {current.label}
            </span>
          )}
        </button>

        {images.length > 1 && (
          <div className={cn("grid gap-2", !thumbClassName && "grid-cols-5", thumbClassName)}>
            {images.map((img, i) => (
              <button
                key={img.src + i}
                type="button"
                onClick={() => setIndex(i)}
                className={cn(
                  "relative aspect-square overflow-hidden rounded-lg border-2 transition",
                  i === index
                    ? "border-gold"
                    : "border-transparent hover:border-gold/50"
                )}
                aria-label={`Voir ${img.alt}`}
              >
                <Image
                  src={safeSrc(img.src)}
                  alt={img.alt}
                  fill
                  sizes="120px"
                  className="object-cover"
                  unoptimized
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 p-4">
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute right-4 top-4 rounded-full bg-cream/10 p-2 text-cream transition hover:bg-cream/20"
            aria-label="Fermer"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={() => setIndex((i) => (i === 0 ? images.length - 1 : i - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-cream/10 p-2 text-cream transition hover:bg-cream/20"
            aria-label="Image précédente"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="relative h-full max-h-[80vh] w-full max-w-5xl">
            <Image
              src={safeSrc(current.src)}
              alt={current.alt}
              fill
              sizes="100vw"
              className="object-contain"
              unoptimized
              priority
            />
          </div>

          <button
            type="button"
            onClick={() => setIndex((i) => (i === images.length - 1 ? 0 : i + 1))}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-cream/10 p-2 text-cream transition hover:bg-cream/20"
            aria-label="Image suivante"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-cream/80">
            {index + 1} / {images.length} — {current.alt}
          </p>
        </div>
      )}
    </>
  );
}
