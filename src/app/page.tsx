import Image from "next/image";
import { HeroSection } from "./_sections/HeroSection";

export default function Home() {
  return <div className="overflow-x-hidden max-w-screen">
    <HeroSection />
  </div>;
}
