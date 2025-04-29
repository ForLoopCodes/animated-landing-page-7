"use client";

import React from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { ArrowRight } from "lucide-react";

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="py-24 bg-black text-white relative overflow-hidden pb-72"
    >
      <div className="w-[140vw] left-[-20vw] bg-[#043BD6] blur-[100px] absolute h-80 top-72 z-1"></div>

      <div className="relative text-center pb-24 z-10">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium mt-2 leading-[1.2em]">
          Plans for Every App Developer
        </h2>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mt-6 mx-auto">
          Choose a plan that fits your app’s security needs. From startups to
          enterprises, we provide robust protection so you can focus on growth.
        </p>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-8 xl:grid-cols-8 gap-6 max-w-6xl mx-auto">
          {/* First Card - Standard Plan */}
          <div className="md:col-span-4 relative rounded-3xl overflow-hidden min-h-[300px] p-0.5 bg-gradient-to-b from-white/20 via-blue-900/50 to-black relative">
            <div className="w-full h-full flex flex-col items-start justify-start z-10 rounded-3xl overflow-hidden bg-black relative">
              <div className="antialiased w-full justify-center items-center absolute inset -top-[50vh] blur-2xl z-1 contrast-[2]">
                <div className="absolute w-[120%] left-[-40%] h-[100vh] bg-radial from-blue-900/30 saturate-[2] rounded-full blur-3xl to-transparent -top-[25vh]"></div>
              </div>
              <div className="w-full h-full flex flex-col items-start justify-start pt-[4vh] pb-10 z-10 px-10 relative">
                <h1 className="text-lg md:text-xl lg:text-2xl text-shine text-white w-full max-w-4xl mt-2">
                  Standard
                </h1>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold mt-3">
                  <span className="text-shine">$49</span>
                  <span className="text-white/70 text-base">/month</span>
                </div>
                <p className="text-base text-white/50 mt-6 sm:mt-6 max-w-3xl">
                  Get essential security features including{" "}
                  <span className="text-white">
                    secure payment integration and basic reverse engineering
                    protection
                  </span>{" "}
                  to safeguard your app.
                </p>
                <button className="mt-8 border border-white w-full font-semibold text-white px-2 py-2 flex justify-between items-center shadow shadow-black shadow-xl gap-4 pl-6 rounded-full">
                  Get Started
                  <ArrowRight className="w-8 h-8 translate-x-0 transition-all duration-200 p-2 rounded-full text-white" />
                </button>
                <div className="bg-white opacity-10 h-0.5 rounded-full w-full my-6" />
                <p className="text-base text-white/50 max-w-3xl">
                  Ideal for small apps with up to 1,000 users.
                </p>
                <div className="flex flex-col gap-3 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="p-1 bg-white/10 rounded-md mr-0">
                      <svg
                        className="w-4 h-4 text-white/70"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    </div>
                    <p className="text-base text-white/70">
                      Secure payment integration
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-1 bg-white/10 rounded-md mr-0">
                      <svg
                        className="w-4 h-4 text-white/70"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    </div>
                    <p className="text-base text-white/70">
                      Basic reverse engineering protection
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-1 bg-white/10 rounded-md mr-0">
                      <svg
                        className="w-4 h-4 text-white/70"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    </div>
                    <p className="text-base text-white/70">Standard support</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-1 bg-white/10 rounded-md mr-0">
                      <svg
                        className="w-4 h-4 text-white/70"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    </div>
                    <p className="text-base text-white/70">
                      Basic compliance tools
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Second Card - Enterprise Plan */}
          <div className="md:col-span-4 relative rounded-3xl overflow-hidden min-h-[300px] p-0.5 bg-gradient-to-b from-white/50 via-blue-700/60 to-black relative">
            <div className="w-full h-full flex flex-col items-start justify-start z-10 rounded-3xl overflow-hidden bg-black relative">
              <div className="antialiased w-[100%] h-[100%] absolute inset opacity-30 z-1 contrast-[2]">
                <CanvasRevealEffect
                  animationSpeed={3}
                  containerClassName="bg-black scale-y-[2]"
                  colors={[
                    [0, 0, 100],
                    [0, 0, 150],
                  ]}
                  dotSize={3}
                />
              </div>
              <div className="antialiased w-full justify-center items-center absolute inset -top-[50vh] blur-2xl z-1 contrast-[2]">
                <div className="absolute w-[120%] left-[-40%] h-[100vh] bg-radial from-[#043BD6] saturate-[2] rounded-full blur-3xl to-transparent -top-[25vh]"></div>
                <div className="absolute w-[120%] left-[-70%] h-[100vh] bg-radial from-[#043BD6] saturate-[2] rounded-full blur-3xl to-transparent top-[10vh]"></div>
              </div>
              <div className="w-full h-full flex flex-col items-start justify-start pt-[4vh] pb-10 z-10 px-10 relative">
                <h1 className="text-lg md:text-xl lg:text-2xl text-shine text-white w-full max-w-4xl mt-2">
                  Enterprise
                </h1>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold mt-3">
                  <span className="text-shine">$199</span>
                  <span className="text-white/70 text-base">/month</span>
                </div>
                <p className="text-base text-white/50 mt-6 sm:mt-6 max-w-3xl">
                  Comprehensive security with{" "}
                  <span className="text-white">
                    advanced reverse engineering protection, real-time threat
                    detection, and priority support
                  </span>{" "}
                  for large-scale apps.
                </p>
                <button className="mt-8 bg-white w-full font-semibold bg-gradient-to-b from-blue-900/40 to-white px-2 py-2 text-black flex justify-between items-center shadow shadow-black shadow-xl gap-4 pl-6 rounded-full">
                  Get Started
                  <ArrowRight className="w-8 h-8 translate-x-0 transition-all duration-200 p-2 rounded-full text-white bg-black shadow shadow-black/80 shadow-xl" />
                </button>
                <div className="bg-white opacity-10 h-0.5 rounded-full w-full my-6" />
                <p className="text-base text-white/50 max-w-3xl">
                  Ideal for apps with up to 10,000 users.
                </p>
                <div className="flex flex-col gap-3 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="p-1 bg-white/10 rounded-md mr-0">
                      <svg
                        className="w-4 h-4 text-white/70"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    </div>
                    <p className="text-base text-white/70">
                      Advanced payment security
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-1 bg-white/10 rounded-md mr-0">
                      <svg
                        className="w-4 h-4 text-white/70"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    </div>
                    <p className="text-base text-white/70">
                      Enhanced reverse engineering protection
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-1 bg-white/10 rounded-md mr-0">
                      <svg
                        className="w-4 h-4 text-white/70"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    </div>
                    <p className="text-base text-white/70">
                      Real-time threat detection
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-1 bg-white/10 rounded-md mr-0">
                      <svg
                        className="w-4 h-4 text-white/70"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    </div>
                    <p className="text-base text-white/70">Priority support</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-1 bg-white/10 rounded-md mr-0">
                      <svg
                        className="w-4 h-4 text-white/70"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    </div>
                    <p className="text-base text-white/70">
                      Full compliance suite
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-1 bg-white/10 rounded-md mr-0">
                      <svg
                        className="w-4 h-4 text-white/70"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    </div>
                    <p className="text-base text-white/70">
                      Custom security consultation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
