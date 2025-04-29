import React from "react";
import { ArrowRight } from "lucide-react";
import Noise from "@/Animations/Noise/Noise";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

const FinalSection = () => {
  return (
    <section id="services" className="relative bg-black py-20 text-white">
      <div className="container text-start max-w-8xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side */}
          <div className="lg:w-1/2">
            <div className="mb-4">
              <span className="text-sm px-4 py-2 bg-blue-800/20 rounded-lg font-medium">
                Secure Integrations
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium mt-2 leading-[1.2em]">
              Enhance Your Security
              <br /> Seamlessly
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mt-6">
              Integrate with leading security tools to protect your app’s
              payment systems and prevent reverse engineering. Our platform
              ensures secure and efficient workflows for your development team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-12">
              <button className="bg-white font-semibold bg-gradient-to-b from-blue-900/40 to-white px-2 py-2 text-black flex justify-center items-center shadow shadow-black shadow-xl gap-4 pl-6 rounded-full">
                Start Securing Now
                <ArrowRight className="w-8 h-8 translate-x-0 transition-all duration-200 p-2 rounded-full text-white bg-black shadow shadow-black/80 shadow-xl" />
              </button>
            </div>
          </div>
          {/* Right Side - Cards with InfoCardsSection Theme */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            {/* Stripe Integration Card */}
            <div
              className="relative rounded-3xl bg-gradient-to-b from-[#043BD6] to-black shadow-lg shadow-black/50 overflow-hidden min-h-[200px]"
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
              <div className="antialiased w-full justify-center items-center absolute inset -top-[50vh] blur-2xl z-1 contrast-[2]">
                <div className="absolute w-full left-[20%] h-[200vh] bg-radial from-[#043BD6] to-transparent -top-[80vh]"></div>
                <div className="absolute w-full left-[-10%] h-[20vh] bg-radial from-[#043BD6] to-transparent top-[40vh]"></div>
                <div className="absolute w-[120%] left-[20%] h-[80vh] bg-radial from-[#1FDAFF] saturate-[1] rounded-full brightness-[200] to-transparent -top-[21vh]"></div>
                <div className="absolute w-[120%] left-[0%] h-[100vh] bg-radial from-[#1FDAFF]/50 saturate-[1] rounded-full blur-3xl to-transparent -top-[35vh]"></div>
              </div>
              <div className="w-full h-full flex flex-col items-start justify-center z-10 px-6 py-6 relative">
                <h3 className="text-xl text-white">Stripe Integration</h3>
                <p className="text-white/70 mt-2">
                  Securely process payments with Stripe, leveraging end-to-end
                  encryption and real-time fraud detection for your app.
                </p>
              </div>
            </div>
            {/* Snyk Integration Card */}
            <div className="relative rounded-3xl bg-gradient-to-b from-black to-black shadow-lg shadow-black/50 overflow-hidden min-h-[200px]">
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
                <div className="absolute w-full left-[10%] h-[200vh] bg-radial from-[#043BD6] to-transparent -top-[120vh]"></div>
                <div className="absolute w-[120%] left-[20%] h-[80vh] bg-radial from-[#1FDAFF]/10 saturate-[1] rounded-full brightness-[200] to-transparent -top-[25vh]"></div>
                <div className="absolute w-[120%] left-[20%] h-[100vh] bg-radial from-[#1FDAFF77] saturate-[1] rounded-full blur-3xl to-transparent -top-[37vh]"></div>
              </div>
              <div className="w-full h-full flex flex-col items-start justify-center z-10 px-6 py-6 relative">
                <h3 className="text-xl text-white">Snyk Integration</h3>
                <p className="text-white/70 mt-2">
                  Identify and fix vulnerabilities in your app’s code with Snyk,
                  ensuring secure development and deployment.
                </p>
              </div>
            </div>
            {/* AWS Integration Card */}
            <div
              className="relative rounded-3xl bg-gradient-to-b from-[#043BD622] to-black shadow-lg shadow-black/50 overflow-hidden min-h-[200px]"
              style={{ boxShadow: "inset 0px 100px 200px -150px #000000" }}
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
                <div className="absolute w-full left-[10%] h-[200vh] bg-radial from-[#043BD622] to-transparent -top-[120vh]"></div>
                <div className="absolute w-[120%] left-[20%] h-[80vh] bg-radial from-[#043BD622]/10 saturate-[1] rounded-full brightness-[200] to-transparent -top-[25vh]"></div>
                <div className="absolute w-[120%] left-[20%] h-[100vh] bg-radial from-[#043BD622] saturate-[1] rounded-full blur-3xl to-transparent -top-[37vh]"></div>
              </div>
              <div className="w-full h-full flex flex-col items-start justify-center z-10 px-6 py-6 relative">
                <h3 className="text-xl text-white">AWS Integration</h3>
                <p className="text-white/70 mt-2">
                  Leverage AWS security services to enhance your app’s
                  protection, with seamless integration for encryption and
                  monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;
