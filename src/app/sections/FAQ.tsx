import { property } from "@/data/property";
import { SectionTitle } from "@/app/components/SectionTitle";
import { FAQItem } from "@/app/components/FAQItem";

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Questions fréquentes"
          subtitle="Les réponses aux interrogations les plus courantes des investisseurs sur ce type d'opportunité."
          centered
        />

        <div className="mt-12">
          {property.faq.map((item) => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
