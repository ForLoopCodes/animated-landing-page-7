import Image from "next/image";
import { HeroSection } from "./_sections/HeroSection";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="overflow-x-hidden max-w-screen bg-black">
      <Header />
      <HeroSection />
    </div>
  );
}
