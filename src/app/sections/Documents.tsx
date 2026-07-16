"use client";

import { motion } from "framer-motion";
import { property } from "@/data/property";
import { SectionTitle } from "@/app/components/SectionTitle";
import { DownloadCard } from "@/app/components/DownloadCard";

export function Documents() {
  return (
    <section id="documents" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Téléchargez le dossier d'investissement"
          subtitle="Consultez les principaux documents du bien afin d'étudier sereinement cette opportunité."
          centered
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {property.documents.map((doc) => (
            <DownloadCard key={doc.title} title={doc.title} file={doc.file} available={doc.available} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
