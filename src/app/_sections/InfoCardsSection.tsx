"use client";

import React from "react";
import Image from "next/image";
import Noise from "@/Animations/Noise/Noise";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const InfoCardsSection = () => {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {/* First card - full width */}
          <div className="md:col-span-12 relative bg-gradient-to-b from-blue-900 to-black rounded-3xl shadow-lg shadow-black/50 overflow-hidden min-h-[500px]">
            <Noise
              patternSize={100}
              patternScaleX={1}
              patternScaleY={1}
              patternRefreshInterval={2}
              patternAlpha={15}
            />
            <div className="relative antialiased w-full justify-center items-center absolute inset -top-[50vh] blur-2xl z-1 contrast-[2]">
              <div className="absolute w-full h-[20vh] bg-radial from-blue-900 to-transparent top-[40vh] brightness-[2]  contrast-[2]"></div>
              <div className="absolute w-full h-[100vh] bg-radial from-blue-900 saturate-[10] via-transparent to-transparent -top-[20vh]"></div>
              <div className="absolute w-full h-[100vh] bg-radial from-blue-300/80 saturate-[10] via-transparent brightness-[2] to-transparent -top-[20vh]"></div>
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
          </div>

          {/* Two cards in the middle row */}
          <div className="md:col-span-6 relative rounded-3xl shadow-lg shadow-black/50 overflow-hidden min-h-[500px]">
            <Noise
              patternSize={100}
              patternScaleX={1}
              patternScaleY={1}
              patternRefreshInterval={2}
              patternAlpha={15}
            />
            <div className="relative antialiased w-full justify-center items-center absolute inset -top-[50vh] blur-2xl z-1 contrast-[2]">
              <div className="absolute w-full left-[20%] h-[200vh] bg-radial from-blue-700 to-transparent -top-[80vh]"></div>
              <div className="absolute w-full left-[-10%] h-[20vh] bg-radial from-blue-600 to-transparent top-[40vh]"></div>
              <div className="absolute w-[120%] left-[30%] h-[80vh] bg-radial from-blue-100 saturate-[1] rounded-full brightness-[200] to-transparent -top-[21vh]"></div>
              <div className="absolute w-[120%] left-[30%] h-[100vh] bg-radial from-blue-500 saturate-[1] rounded-full blur-3xl to-transparent -top-[35vh]"></div>
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

          <div className="md:col-span-6 relative rounded-3xl shadow-lg shadow-black/50 overflow-hidden min-h-[500px]">
            <Noise
              patternSize={100}
              patternScaleX={1}
              patternScaleY={1}
              patternRefreshInterval={2}
              patternAlpha={15}
            />
            <div className="relative antialiased w-full justify-center items-center absolute inset -top-[50vh] blur-2xl z-1 contrast-[2]">
              <div className="absolute w-full left-[-40%] h-[200vh] bg-radial from-blue-900/80 to-transparent -top-[80vh]"></div>
              <div className="absolute w-full left-[10%] h-[20vh] bg-radial from-blue-600 to-transparent top-[40vh]"></div>
              <div className="absolute w-[120%] left-[-60%] h-[80vh] bg-radial from-blue-100 saturate-[1] rounded-full brightness-[200] to-transparent -top-[21vh]"></div>
              <div className="absolute w-[120%] left-[-60%] h-[100vh] bg-radial from-blue-500 saturate-[1] rounded-full blur-3xl to-transparent -top-[35vh]"></div>{" "}
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
          <div className="md:col-span-12">
            <AuroraBackground className="relative bg-gradient-to-b from-blue-900 via-blue-900/50 to-blue-900/10 rounded-3xl shadow-lg shadow-black/50 overflow-hidden min-h-[500px]">
              <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="w-full h-full relative rounded-3xl shadow-lg shadow-black/50 overflow-hidden min-h-[500px]"
              >
                <CardSpotlight className="h-full w-full">
                  <Noise
                    patternSize={100}
                    patternScaleX={1}
                    patternScaleY={1}
                    patternRefreshInterval={2}
                    patternAlpha={15}
                  />
                  <div className="relative antialiased w-full justify-center items-center absolute inset -top-[50vh] blur-2xl z-1">
                    <div className="absolute w-full h-[200vh] bg-radial from-blue-900/80 to-transparent -top-[80vh]"></div>
                    <div className="absolute w-full h-[100vh] bg-radial from-blue-900/30 saturate-[10] via-blue-900/20 to-transparent -top-[20vh]"></div>
                    <div className="absolute w-full h-[100vh] bg-radial from-blue-900/30 saturate-[10] via-black to-transparent -top-[20vh]"></div>
                  </div>
                  <div className="w-1/2 h-full flex flex-col items-start justify-end pt-[14vh] pb-10 z-10 px-10 relative">
                    <p className="text-sm bg-white/40 bg-gradient-to-b from-blue-900/50 to-blue-900/20 text-white/80 shadow shadow-black/90 shadow-md gap-4 rounded-xl px-4 py-0.5 rounded-full transition-transform duration-300 group-hover:scale-105">
                      Compliance & Governance
                    </p>
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-shine text-white w-full max-w-4xl mt-6">
                      Regulatory Compliance Solutions
                    </h1>
                    <p className="text-base text-white/50 mt-6 sm:mt-6 max-w-3xl">
                      <span className="text-white">
                        Meet industry standards
                      </span>{" "}
                      with our comprehensive compliance tools designed for GDPR,
                      HIPAA, SOC 2, and other frameworks. We help you{" "}
                      <span className="text-white">
                        navigate complex regulatory requirements with
                        confidence.
                      </span>
                    </p>
                  </div>
                </CardSpotlight>
              </motion.div>
            </AuroraBackground>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
