import { HeroSection } from "./_sections/HeroSection";
import { Header } from "@/components/header";
import InfoCardsSection from "./_sections/InfoCardsSection";
import FeaturedSection from "./_sections/FeaturedSection";
import PricingSection from "./_sections/PricingSection";
import EmpoweringSection from "./_sections/EmpoweringSection";
import FinalSection from "./_sections/FinalSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden max-w-screen bg-black">
      <Header />
      <HeroSection />
      <EmpoweringSection />
      <InfoCardsSection />
      <FeaturedSection />
      <FinalSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
