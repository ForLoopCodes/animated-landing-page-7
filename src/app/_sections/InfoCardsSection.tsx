"use client";

import React from "react";
import Noise from "@/Animations/Noise/Noise";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { TrendingUp } from "lucide-react";

const InfoCardsSection = () => {
  return (
    <section className="py-24 mt-16 bg-black text-white relative overflow-hidden">
      <div className="gap-6 my-8 sm:mt-12 flex justify-center items-center h-full">
        <div className="bg-white/40 bg-gradient-to-b from-blue-900/70 to-white rounded-xl w-1 h-8 rounded-full"></div>
        <button className="bg-white font-semibold bg-gradient-to-b from-blue-900/70 to-white shadow shadow-inner shadow-white drop-shadow drop-shadow-blue-600/70 drop-shadow-xl px-6 py-3 text-black flex justify-center items-center gap-4 rounded-full">
          <TrendingUp className="w-8 h-8 translate-x-0 transition-all duration-200 rounded-full text-blue-700" />
        </button>{" "}
        <div className="bg-white/40 bg-gradient-to-b from-blue-900/70 to-white rounded-xl w-1 h-8 rounded-full"></div>
      </div>
      <div className="text-center pb-36">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium mt-2 leading-[1.2em]">
          Build, Launch and Scale
          <br /> Superfast.
        </h2>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {/* First card - full width */}
          <div
            className="md:col-span-12 relative bg-gradient-to-b from-[#043BD6] flex justify-between to-black rounded-3xl overflow-hidden min-h-[500px]"
            style={{ boxShadow: "inset 0px 60px 50px -40px #1FDAFF" }}
          >
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
                  [0, 0, 153],
                  [0, 0, 249],
                ]}
                dotSize={3}
              />
            </div>
            <div className="antialiased w-full justify-center items-center absolute inset -top-[50vh] blur-2xl z-1 contrast-[2]">
              <div className="absolute w-full h-[20vh] bg-radial from-blue-900 to-transparent top-[40vh] brightness-[2]  contrast-[2]"></div>
              <div className="absolute w-full h-[100vh] bg-radial from-[#043BD6] saturate-[10] via-transparent to-transparent -top-[20vh]"></div>
              <div className="absolute w-full h-[100vh] bg-radial from-[#1FDAFF] saturate-[10] via-transparent brightness-[2] to-transparent -top-[20vh]"></div>
            </div>
            <div className="w-1/2 h-full flex flex-col items-start justify-end pt-[14vh] pb-10 z-10 px-10 relative">
              <p className="text-sm bg-white/40 bg-gradient-to-b from-blue-900/50 to-blue-900/20 text-white/80 shadow shadow-black/90 shadow-md gap-4 rounded-xl px-4 py-0.5 rounded-full transition-transform duration-300 group-hover:scale-105">
                Enterprise Security
              </p>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-shine text-white w-full max-w-4xl mt-6">
                Next-Generation Network Protection
              </h1>
              <p className="text-base text-white/50 mt-6 sm:mt-6 max-w-3xl">
                <span className="text-white">Fortify your infrastructure</span>{" "}
                with military-grade security protocols that defend against
                advanced persistent threats. Our network solutions provide{" "}
                <span className="text-white">
                  real-time monitoring and proactive threat neutralization.
                </span>
              </p>
            </div>
            <div className="h-[500px] flex flex-col items-start justify-end z-10 relative">
              <img
                src="/4.png"
                alt="Enterprise Security"
                className="w-full h-full object-cover opacity-50 rounded-3xl"
              />
            </div>
          </div>
          {/* Two cards in the middle row */}
          <div
            className="md:col-span-6 relative rounded-3xl bg-gradient-to-b from-[#043BD6] to-black shadow-lg shadow-black/50 overflow-hidden min-h-[500px]"
            style={{ boxShadow: "inset 0px 100px 200px -150px #1FDAFF" }}
          >
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
                  [0, 0, 153],
                  [0, 0, 249],
                ]}
                dotSize={3}
              />
            </div>
            <div className="antialiased w-full justify-center items-center absolute inset -top-[50vh] blur-[60px] z-1 contrast-[2]">
              <div className="absolute w-full left-[20%] h-[200vh] bg-radial from-[#043BD6] to-transparent -top-[80vh]"></div>
              <div className="absolute w-full left-[-10%] h-[20vh] bg-radial from-[#043BD6] to-transparent top-[40vh]"></div>
              <div className="absolute w-[120%] left-[20%] h-[80vh] bg-radial from-[#1FDAFF] saturate-[1] rounded-full brightness-[200] to-transparent -top-[21vh]"></div>
              <div className="absolute w-[120%] left-[0%] h-[100vh] bg-radial from-[#1FDAFF]/50 saturate-[1] rounded-full blur-3xl to-transparent -top-[35vh]"></div>
            </div>
            <div className="w-full h-full flex flex-col items-start justify-end pt-[14vh] pb-10 z-10 px-10 relative">
              <p className="text-sm bg-white/40 bg-gradient-to-b from-blue-900/50 to-blue-900/20 text-white/80 shadow shadow-black/90 shadow-md gap-4 rounded-xl px-4 py-0.5 rounded-full transition-transform duration-300 group-hover:scale-105">
                Cloud Security
              </p>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-shine text-white w-full max-w-4xl mt-6">
                Cloud-Native Protection
              </h1>
              <p className="text-base text-white/50 mt-6 sm:mt-6 max-w-3xl">
                <span className="text-white">
                  Secure your cloud infrastructure
                </span>{" "}
                with our specialized protection layers designed for
                containerized and serverless applications. Maintain{" "}
                <span className="text-white">
                  robust security in dynamic environments.
                </span>
              </p>
            </div>
          </div>
          <div
            className="md:col-span-6 relative rounded-3xl bg-gradient-to-b from-[#043BD6] via-black to-black overflow-hidden min-h-[500px]"
            style={{
              boxShadow: "inset 0px 100px 200px -150px #1FDAFF",
            }}
          >
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
                  [0, 0, 153],
                  [0, 0, 249],
                ]}
                dotSize={3}
              />
            </div>
            <div className="antialiased w-full justify-center  items-center absolute inset -top-[50vh] blur-2xl z-1 contrast-[2]">
              <div className="absolute w-full left-[-60%] h-[200vh] bg-radial from-[#043BD6] to-transparent -top-[80vh]"></div>
              <div className="absolute w-[120%] left-[-60%] h-[80vh] bg-radial from-[#1FDAFF]/50 saturate-[1] rounded-full brightness-[200] to-transparent -top-[25vh]"></div>
              <div className="absolute w-[120%] left-[-60%] h-[100vh] bg-radial from-[#1FDAFF] saturate-[1] rounded-full blur-3xl to-transparent -top-[37vh]"></div>{" "}
            </div>
            <div className="w-full h-full flex flex-col items-start justify-end pt-[14vh] pb-10 z-10 px-10 relative">
              <p className="text-sm bg-white/40 bg-gradient-to-b from-blue-900/50 to-blue-900/20 text-white/80 shadow shadow-black/90 shadow-md gap-4 rounded-xl px-4 py-0.5 rounded-full transition-transform duration-300 group-hover:scale-105">
                Threat Intelligence
              </p>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-shine text-white w-full max-w-4xl mt-6">
                AI-Powered Threat Detection
              </h1>
              <p className="text-base text-white/50 mt-6 sm:mt-6 max-w-3xl">
                <span className="text-white">Stay ahead of cyber threats</span>{" "}
                with our intelligent detection systems that identify malicious
                patterns before they cause damage. Our AI models{" "}
                <span className="text-white">
                  continuously learn from global threat data.
                </span>
              </p>
            </div>
          </div>
          {/* Last card - full width */}
          <div
            className="md:col-span-12 relative bg-gradient-to-b from-[#043BD600] to-black rounded-3xl overflow-hidden min-h-[500px] flex justify-between"
            style={{ boxShadow: "inset 0px 80px 50px -20px #000000" }}
          >
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
                  [0, 0, 153],
                  [0, 0, 249],
                ]}
                dotSize={3}
              />
            </div>
            <div className="antialiased w-full justify-center items-center absolute inset -top-[50vh] blur-[200px] z-1 contrast-[2]">
              <div className="absolute w-full h-[100vh] bg-radial from-[#043BD6] saturate-[10] via-black/50 to-black -top-[10vh] left-[-50%]"></div>
              <div className="absolute w-full h-[100vh] bg-radial from-[#043BD6] saturate-[10] via-black/50 to-black -top-[20vh] right-[-60%]"></div>
            </div>{" "}
            <div className="w-1/2 h-full flex flex-col items-start justify-end pt-[14vh] pb-10 z-10 px-10 relative">
              <p className="text-sm bg-white/40 bg-gradient-to-b from-blue-900/50 to-blue-900/20 text-white/80 shadow shadow-black/90 shadow-md gap-4 rounded-xl px-4 py-0.5 rounded-full transition-transform duration-300 group-hover:scale-105">
                Compliance & Governance
              </p>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-shine text-white w-full max-w-4xl mt-6">
                Regulatory Compliance Solutions
              </h1>
              <p className="text-base text-white/50 mt-6 sm:mt-6 max-w-3xl">
                <span className="text-white">Meet industry standards</span> with
                our comprehensive compliance tools designed for GDPR, HIPAA, SOC
                2, and other frameworks. We help you{" "}
                <span className="text-white">
                  navigate complex regulatory requirements with confidence.
                </span>
              </p>
            </div>
            <div className="h-[500px] flex flex-col items-start justify-end z-10 relative">
              <img
                src="/3.png"
                alt="Enterprise Security"
                className="w-full h-full object-cover opacity-50 rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
