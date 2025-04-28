"use client";

import React from "react";
import Image from "next/image";
import Noise from "@/Animations/Noise/Noise";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { Book, BookOpen } from "lucide-react";

const FeaturedSection = () => {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-8 xl:grid-cols-12 gap-6 max-w-8xl mx-auto">
          {/* First card - full width */}
          {/* Two cards in the middle row */}
          <div className="md:col-span-4 relative rounded-3xl overflow-hidden min-h-[300px] p-0.5 bg-gradient-to-br from-white/50 via-black to-black relative">
            <div className="w-full h-full flex flex-col items-start justify-end z-10 rounded-3xl overflow-hidden bg-black relative">
              <Noise
                patternSize={10}
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
              <div className="antialiased w-full justify-center  items-center absolute inset -top-[50vh] blur-2xl z-1 contrast-[2]">
                <div className="absolute w-[120%] left-[-40%] h-[100vh] bg-radial from-[#043BD6] saturate-[2] rounded-full blur-3xl to-transparent -top-[25vh]"></div>{" "}
              </div>

              <div className="w-full h-full flex flex-col items-start justify-end pt-[14vh] pb-10 z-10 px-10 relative">
                <BookOpen className="text-white/60 w-16 h-16" />
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-shine text-white w-full max-w-4xl mt-6">
                  Threat Detection
                </h1>
                <p className="text-base text-white/50 mt-6 sm:mt-6 max-w-3xl">
                  <span className="text-white">
                    Stay ahead of cyber threats
                  </span>{" "}
                  with our intelligent detection systems that identify malicious
                  patterns before they cause damage. Our AI models{" "}
                  <span className="text-white">
                    continuously learn from global threat data.
                  </span>
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="md:col-span-4 relative rounded-3xl overflow-hidden min-h-[300px] p-0.5 bg-gradient-to-br from-white/50 via-black to-black relative">
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
              <div className="antialiased w-full justify-center  items-center absolute inset -top-[50vh] blur-2xl z-1 contrast-[2]">
                <div className="absolute w-[120%] left-[-40%] h-[100vh] bg-radial from-[#043BD6] saturate-[2] rounded-full blur-3xl to-transparent -top-[25vh]"></div>{" "}
              </div>

              <div className="w-full h-full flex flex-col items-start justify-end pt-[14vh] pb-10 z-10 px-10 relative">
                <BookOpen className="text-white/60 w-16 h-16" />
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-shine text-white w-full max-w-4xl mt-6">
                  Threat Detection
                </h1>
                <p className="text-base text-white/50 mt-6 sm:mt-6 max-w-3xl">
                  <span className="text-white">
                    Stay ahead of cyber threats
                  </span>{" "}
                  with our intelligent detection systems that identify malicious
                  patterns before they cause damage. Our AI models{" "}
                  <span className="text-white">
                    continuously learn from global threat data.
                  </span>
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="md:col-span-4 relative rounded-3xl overflow-hidden min-h-[300px] p-0.5 bg-gradient-to-br from-white/50 via-black to-black relative">
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
              <div className="antialiased w-full justify-center  items-center absolute inset -top-[50vh] blur-2xl z-1 contrast-[2]">
                <div className="absolute w-[120%] left-[-40%] h-[100vh] bg-radial from-[#043BD6] saturate-[2] rounded-full blur-3xl to-transparent -top-[25vh]"></div>{" "}
              </div>

              <div className="w-full h-full flex flex-col items-start justify-end pt-[14vh] pb-10 z-10 px-10 relative">
                <BookOpen className="text-white/60 w-16 h-16" />
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-shine text-white w-full max-w-4xl mt-6">
                  Threat Detection
                </h1>
                <p className="text-base text-white/50 mt-6 sm:mt-6 max-w-3xl">
                  <span className="text-white">
                    Stay ahead of cyber threats
                  </span>{" "}
                  with our intelligent detection systems that identify malicious
                  patterns before they cause damage. Our AI models{" "}
                  <span className="text-white">
                    continuously learn from global threat data.
                  </span>
                </p>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
