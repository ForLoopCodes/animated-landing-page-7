"use client";

import React from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { ArrowRight } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="w-[140vw] left-[-20vw] bg-[#043BD6] blur-[100px] absolute h-80 top-72 z-1"></div>

      <div className="relative text-center pb-36 z-10">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium mt-2 leading-[1.2em]">
          Plans for every creator.
        </h2>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-8 xl:grid-cols-12 gap-6 max-w-8xl mx-auto">
          {/* First card - full width */}
          {/* Two cards in the middle row */}
          <div className="md:col-span-4 relative rounded-3xl overflow-hidden min-h-[300px] p-0.5 bg-gradient-to-b from-white/20 via-black to-black relative">
            <div className="w-full h-full flex flex-col items-start justify-start z-10 rounded-3xl overflow-hidden bg-black relative">
              <div className="antialiased w-full justify-center  items-center absolute inset -top-[50vh] blur-2xl z-1 contrast-[2]">
                <div className="absolute w-[120%] left-[-40%] h-[100vh] bg-radial from-blue-900/30 saturate-[2] rounded-full blur-3xl to-transparent -top-[25vh]"></div>{" "}
              </div>

              <div className="w-full h-full flex flex-col items-start justify-start pt-[4vh] pb-10 z-10 px-10 relative">
                <h1 className="text-lg md:text-xl lg:text-2xl text-shine text-white w-full max-w-4xl mt-2">
                  Professional
                </h1>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold mt-3">
                  <span className="text-shine">$99</span>
                  <span className="text-white/70 text-base">
                    /month + 12.5% fee
                  </span>
                </div>
                <p className="text-base text-white/50 mt-6 sm:mt-6 max-w-3xl">
                  Includes{" "}
                  <span className="text-white">professional support</span> and{" "}
                  <span className="text-white">strategic guidance</span> to help
                  your business maximize security and operational efficiency.
                </p>
                <button className="mt-8 border border-white w-full font-semibold text-white px-2 py-2 text-black flex justify-between items-center shadow shadow-black shadow-xl gap-4 pl-6 rounded-full">
                  Get Started
                  <ArrowRight className="w-8 h-8 translate-x-0 transition-all duration-200 p-2 rounded-full text-white" />
                </button>
                <div className="bg-white opacity-10 h-0.5 rounded-full w-full my-6" />{" "}
                <p className="text-base text-white/50 max-w-3xl">
                  Upto 2500 members.
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
                    <p className="text-base text-white/70">Unlimited courses</p>
                  </div>{" "}
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
                      Unlimited communities
                    </p>
                  </div>{" "}
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
                      Unlimited downloads
                    </p>
                  </div>{" "}
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
                    <p className="text-base text-white/70">Unlimited events</p>
                  </div>{" "}
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
                    <p className="text-base text-white/70">Unlimited admins</p>
                  </div>{" "}
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
                      Unlimited affiliates
                    </p>
                  </div>{" "}
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
                      No Code Page Builder
                    </p>
                  </div>{" "}
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
                      GTM strategy session
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="md:col-span-4 relative rounded-3xl overflow-hidden min-h-[300px] p-0.5 bg-gradient-to-b from-white/50 via-black to-black relative">
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
              <div className="antialiased w-full justify-center  items-center absolute inset -top-[50vh] blur-2xl z-1 contrast-[2]">
                <div className="absolute w-[120%] left-[-40%] h-[100vh] bg-radial from-[#043BD6] saturate-[2] rounded-full blur-3xl to-transparent -top-[25vh]"></div>{" "}
                <div className="absolute w-[120%] left-[-70%] h-[100vh] bg-radial from-[#043BD6] saturate-[2] rounded-full blur-3xl to-transparent top-[10vh]"></div>{" "}
              </div>

              <div className="w-full h-full flex flex-col items-start justify-start pt-[4vh] pb-10 z-10 px-10 relative">
                <h1 className="text-lg md:text-xl lg:text-2xl text-shine text-white w-full max-w-4xl mt-2">
                  Professional
                </h1>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold mt-3">
                  <span className="text-shine">$99</span>
                  <span className="text-white/70 text-base">
                    /month + 12.5% fee
                  </span>
                </div>
                <p className="text-base text-white/50 mt-6 sm:mt-6 max-w-3xl">
                  Includes{" "}
                  <span className="text-white">professional support</span> and{" "}
                  <span className="text-white">strategic guidance</span> to help
                  your business maximize security and operational efficiency.
                </p>
                <button className="mt-8 bg-white w-full font-semibold bg-gradient-to-b from-blue-900/40 to-white px-2 py-2 text-black flex justify-between items-center shadow shadow-black shadow-xl gap-4 pl-6 rounded-full">
                  Get Started
                  <ArrowRight className="w-8 h-8 translate-x-0 transition-all duration-200 p-2 rounded-full text-white bg-black shadow shadow-black/80 shadow-xl" />
                </button>
                <div className="bg-white opacity-10 h-0.5 rounded-full w-full my-6" />{" "}
                <p className="text-base text-white/50 max-w-3xl">
                  Upto 2500 members.
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
                    <p className="text-base text-white/70">Unlimited courses</p>
                  </div>{" "}
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
                      Unlimited communities
                    </p>
                  </div>{" "}
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
                      Unlimited downloads
                    </p>
                  </div>{" "}
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
                    <p className="text-base text-white/70">Unlimited events</p>
                  </div>{" "}
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
                    <p className="text-base text-white/70">Unlimited admins</p>
                  </div>{" "}
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
                      Unlimited affiliates
                    </p>
                  </div>{" "}
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
                      No Code Page Builder
                    </p>
                  </div>{" "}
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
                      GTM strategy session
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="md:col-span-4 relative rounded-3xl overflow-hidden min-h-[300px] p-0.5 bg-gradient-to-b from-white/20 via-black to-black relative">
            <div className="w-full h-full flex flex-col items-start justify-start z-10 rounded-3xl overflow-hidden bg-black relative">
              <div className="antialiased w-full justify-center  items-center absolute inset -top-[50vh] blur-2xl z-1 contrast-[2]">
                <div className="absolute w-[120%] left-[-40%] h-[100vh] bg-radial from-blue-900/30 saturate-[2] rounded-full blur-3xl to-transparent -top-[25vh]"></div>{" "}
              </div>

              <div className="w-full h-full flex flex-col items-start justify-start pt-[4vh] pb-10 z-10 px-10 relative">
                <h1 className="text-lg md:text-xl lg:text-2xl text-shine text-white w-full max-w-4xl mt-2">
                  Professional
                </h1>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold mt-3">
                  <span className="text-shine">$99</span>
                  <span className="text-white/70 text-base">
                    /month + 12.5% fee
                  </span>
                </div>
                <p className="text-base text-white/50 mt-6 sm:mt-6 max-w-3xl">
                  Includes{" "}
                  <span className="text-white">professional support</span> and{" "}
                  <span className="text-white">strategic guidance</span> to help
                  your business maximize security and operational efficiency.
                </p>
                <button className="mt-8 border border-white w-full font-semibold text-white px-2 py-2 text-black flex justify-between items-center shadow shadow-black shadow-xl gap-4 pl-6 rounded-full">
                  Get Started
                  <ArrowRight className="w-8 h-8 translate-x-0 transition-all duration-200 p-2 rounded-full text-white" />
                </button>
                <div className="bg-white opacity-10 h-0.5 rounded-full w-full my-6" />{" "}
                <p className="text-base text-white/50 max-w-3xl">
                  Upto 2500 members.
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
                    <p className="text-base text-white/70">Unlimited courses</p>
                  </div>{" "}
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
                      Unlimited communities
                    </p>
                  </div>{" "}
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
                      Unlimited downloads
                    </p>
                  </div>{" "}
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
                    <p className="text-base text-white/70">Unlimited events</p>
                  </div>{" "}
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
                    <p className="text-base text-white/70">Unlimited admins</p>
                  </div>{" "}
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
                      Unlimited affiliates
                    </p>
                  </div>{" "}
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
                      No Code Page Builder
                    </p>
                  </div>{" "}
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
                      GTM strategy session
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
