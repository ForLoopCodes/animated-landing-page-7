"use client";

import React from "react";
import Image from "next/image";
import Noise from "@/Animations/Noise/Noise";
import { ArrowRight } from "lucide-react";

const InfoCardsSection = () => {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <Noise
        patternSize={100}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
      <div className="relative w-full justify-center items-center absolute -top-[20vh] blur-2xl z-1">
        <div className="absolute w-full h-[100vh] bg-radial from-blue-900/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl text-center mb-12 text-shine">
          Security Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {/* First card - full width */}
          <div className="md:col-span-12 bg-gradient-to-b from-blue-900 via-blue-900/50 to-blue-900/10 rounded-3xl shadow-lg shadow-black/50 overflow-hidden min-h-[500px]">
            <div className="flex flex-col md:flex-row h-full">
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <p className="text-sm bg-white bg-gradient-to-b from-blue-900/50 to-blue-900/20 text-black shadow shadow-black/90 shadow-md rounded-xl px-4 py-0.5 rounded-full w-fit mb-4">
                  Enterprise Solution
                </p>
                <h3 className="text-3xl md:text-4xl mb-4 text-shine">
                  Enterprise Security
                </h3>
              </div>{" "}
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src="/security-dashboard.jpg"
                  alt="Security Dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
              </div>
            </div>
          </div>

          {/* Two cards in the middle row */}
          <div className="md:col-span-6 bg-gradient-to-b from-blue-900 via-blue-900/50 to-blue-900/10 rounded-3xl shadow-lg shadow-black/50 overflow-hidden min-h-[500px]">
            <div className="p-8 h-full flex flex-col justify-center">
              <p className="text-sm bg-white bg-gradient-to-b from-blue-900/50 to-blue-900/20 text-black shadow shadow-black/90 shadow-md rounded-xl px-4 py-0.5 rounded-full w-fit mb-4">
                Feature
              </p>
              <h3 className="text-2xl md:text-3xl mb-4 text-shine">
                Create And Sell
              </h3>
            </div>
          </div>

          <div className="md:col-span-6 bg-gradient-to-b from-blue-900 via-blue-900/50 to-blue-900/10 rounded-3xl shadow-lg shadow-black/50 overflow-hidden min-h-[500px]">
            <div className="p-8 h-full flex flex-col justify-center">
              <p className="text-sm bg-white bg-gradient-to-b from-blue-900/50 to-blue-900/20 text-black shadow shadow-black/90 shadow-md rounded-xl px-4 py-0.5 rounded-full w-fit mb-4">
                Feature
              </p>
              <h3 className="text-2xl md:text-3xl mb-4 text-shine">
                Threat Detection
              </h3>
            </div>
          </div>
          {/* First card - full width */}
          <div className="md:col-span-12 bg-gradient-to-b from-blue-900 via-blue-900/50 to-blue-900/10 rounded-3xl shadow-lg shadow-black/50 overflow-hidden min-h-[500px]">
            <div className="flex flex-col md:flex-row h-full">
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <p className="text-sm bg-white bg-gradient-to-b from-blue-900/50 to-blue-900/20 text-black shadow shadow-black/90 shadow-md rounded-xl px-4 py-0.5 rounded-full w-fit mb-4">
                  Enterprise Solution
                </p>
                <h3 className="text-3xl md:text-4xl mb-4 text-shine">
                  Enterprise Security
                </h3>
              </div>{" "}
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src="/security-dashboard.jpg"
                  alt="Security Dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
