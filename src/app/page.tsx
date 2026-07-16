import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { Hero } from "@/app/sections/Hero";
import { InvestmentSummary } from "@/app/sections/InvestmentSummary";
import { PropertyPresentation } from "@/app/sections/PropertyPresentation";
import { Location } from "@/app/sections/Location";
import { FinancialPlan } from "@/app/sections/FinancialPlan";
import { Documents } from "@/app/sections/Documents";
import { FAQ } from "@/app/sections/FAQ";
import { ContactSection } from "@/app/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <InvestmentSummary />
        <PropertyPresentation />
        <Location />
        <FinancialPlan />
        <Documents />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
