import { HeroSection } from "./_sections/HeroSection";
import { Header } from "@/components/header";
import InfoCardsSection from "./_sections/InfoCardsSection";

export default function Home() {
  return (
    <div className="overflow-x-hidden max-w-screen bg-black">
      <Header />
      <HeroSection />
      <InfoCardsSection />
    </div>
  );
}
