import Noise from "@/Animations/Noise/Noise";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { ArrowDown, ArrowRight, Shield } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-[94vw] h-screen rounded-4xl overflow-hidden bg-gradient-to-b from-[#043BD6] via-[#043BD6] via-black via-black via-black to-black text-white flex mt-6 mx-auto flex-col items-center text-center relative px-4 sm:px-6 lg:px-8 z-1"
    >
      <Noise
        patternSize={100}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />{" "}
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
      <div className="relative antialiased w-full justify-center items-center absolute inset -top-[50vh] blur-2xl z-1">
        <div className="absolute w-full h-[200vh] bg-radial from-[#043BD6] to-transparent -top-[80vh]"></div>
        <div className="absolute w-full h-[100vh] bg-radial from-[#1FDAFF] saturate-[10] via-transparent to-transparent -top-[20vh]"></div>
        <div className="absolute w-full h-[100vh] bg-radial from-[#1FDAFF] saturate-[10] via-transparent to-transparent -top-[20vh]"></div>
      </div>
      <div className="w-full flex flex-col items-center justify-center pt-[14vh] z-10 px-10 relative ">
        <p className="text-sm bg-white bg-gradient-to-b from-blue-900/50 to-blue-900/20 text-black shadow shadow-black/90 shadow-md gap-4 rounded-xl px-4 py-0.5 rounded-full transition-transform duration-300 group-hover:scale-105">
          Total Security Solutions
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-shine text-white w-full max-w-5xl mt-8 font-semibold">
          Advanced{" "}
          <Shield className="inline -translate-y-2 -rotate-5 w-8 h-8 sm:w-14 sm:h-14 bg-white bg-gradient-to-b from-blue-900/40 to-white px-1.5 sm:px-3 text-black flex justify-center items-center shadow shadow-black/90 shadow-xl rounded-md sm:rounded-xl" />{" "}
          Security Systems for your Software.
        </h1>
        <p className="text-base text-white/50 mt-8 sm:mt-12 max-w-3xl px-4">
          <span className="text-white">Protect your applications</span> with
          cutting-edge technology designed to keep your data safe and secure.
          Our solutions are{" "}
          <span className="text-white">
            tailored to meet the needs of modern software development.
          </span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-12">
          <button className="bg-white font-semibold bg-gradient-to-b from-blue-900/40 to-white px-2 py-2 text-black flex justify-center items-center shadow shadow-black shadow-xl gap-4 pl-6 rounded-full">
            Get Started
            <ArrowRight className="w-8 h-8 translate-x-0 transition-all duration-200 p-2 rounded-full text-white bg-black shadow shadow-black/80 shadow-xl" />
          </button>
        </div>
        <p className="text-sm text-white/50 mt-20 sm:mt-36 max-w-3xl flex items-center gap-2">
          <ArrowDown className="w-4 h-4" /> Scroll down to learn more{" "}
        </p>
      </div>
    </section>
  );
};
