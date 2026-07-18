import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { Hero } from "@/app/sections/Hero";
import { IdealForYou } from "@/app/sections/IdealForYou";
import { InvestmentSummary } from "@/app/sections/InvestmentSummary";
import { InvestmentPresentation } from "@/app/sections/InvestmentPresentation";
import { PropertyPresentation } from "@/app/sections/PropertyPresentation";
import { ResidencePresentation } from "@/app/sections/ResidencePresentation";
import { VirtualTour } from "@/app/sections/VirtualTour";
import { PlanSection } from "@/app/sections/PlanSection";
import { Location } from "@/app/sections/Location";
import { FinancialPlan } from "@/app/sections/FinancialPlan";
import { FAQ } from "@/app/sections/FAQ";
import { WhySelected } from "@/app/sections/WhySelected";
import { ProfileSection } from "@/app/sections/ProfileSection";
import { ContactSection } from "@/app/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <IdealForYou />
        <InvestmentSummary />
        <InvestmentPresentation />
        <PropertyPresentation />
        <ResidencePresentation />
        <VirtualTour />
        <PlanSection />
        <Location />
        <FinancialPlan />
        <FAQ />
        <WhySelected />
        <ProfileSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
