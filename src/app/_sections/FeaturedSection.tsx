"use client";

import React from "react";
import Noise from "@/Animations/Noise/Noise";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { Lock, Shield, Code } from "lucide-react";

const FeaturedSection = () => {
  const cards = [
    {
      icon: <Lock className="text-white/60 w-16 h-16" />,
      heading: "Secure Payment Integration",
      text: 'Seamlessly integrate payment systems with <span class="text-white">end-to-end encryption and real-time fraud detection</span>. Our solutions ensure full compliance with PCI DSS and other industry standards.',
    },
    {
      icon: <Shield className="text-white/60 w-16 h-16" />,
      heading: "Reverse Engineering Protection",
      text: 'Protect your app’s intellectual property with <span class="text-white">advanced code obfuscation and runtime application self-protection (RASP)</span>. Make it nearly impossible for attackers to analyze or modify your app.',
    },
    {
      icon: <Code className="text-white/60 w-16 h-16" />,
      heading: "Secure App Development",
      text: 'Build security into your app from the ground up with <span class="text-white">vulnerability scanning, secure API integration, and encryption tools</span>. Reduce risks and ensure a strong security posture.',
    },
  ];

  return (
    <section id="features" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="container text-start pb-36 max-w-8xl mx-auto px-4">
        <div className="mb-4">
          <span className="text-sm px-4 py-2 bg-blue-800/20 rounded-lg font-medium">
            Why Choose Us
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium mt-2 leading-[1.2em]">
          More Than Security
          <br /> A Partner For Your App’s Success
        </h2>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mt-6">
          With our comprehensive app security solutions, you can focus on
          building and scaling your app. We handle the security, so you don’t
          have to.
        </p>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-8 xl:grid-cols-12 gap-6 max-w-8xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="md:col-span-4 relative rounded-3xl overflow-hidden min-h-[300px] p-0.5 bg-gradient-to-br from-white/50 via-black to-black relative"
            >
              <div className="w-full h-full flex flex-col items-start justify-end z-10 rounded-3xl overflow-hidden bg-black relative">
                <Noise
                  patternSize={100}
                  patternScaleX={1}
                  patternScaleY={1}
                  patternRefreshInterval={2}
                  patternAlpha={15}
                />
                <div className="antialiased w-[100%] h-[100%] absolute inset opacity-30 z-1 contrast-[2]">
                  <CanvasRevealEffect
                    animationSpeed={3}
                    containerClassName="bg-black"
                    colors={[
                      [0, 0, 100],
                      [0, 0, 150],
                    ]}
                    dotSize={3}
                  />
                </div>
                <div className="antialiased w-full justify-center items-center absolute inset -top-[50vh] blur-2xl z-1 contrast-[2]">
                  <div className="absolute w-[120%] left-[-40%] h-[100vh] bg-radial from-[#043BD6] saturate-[2] rounded-full blur-3xl to-transparent -top-[25vh]"></div>
                </div>
                <div className="w-full h-full flex flex-col items-start justify-end pt-[14vh] pb-10 z-10 px-10 relative">
                  {card.icon}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-shine text-white w-full max-w-4xl mt-6">
                    {card.heading}
                  </h1>
                  <p
                    dangerouslySetInnerHTML={{ __html: card.text }}
                    className="text-base text-white/50 mt-6 sm:mt-6 max-w-3xl"
                  ></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
