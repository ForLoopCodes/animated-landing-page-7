import Noise from "@/Animations/Noise/Noise";

export const HeroSection = () => {
  return (
    <section className="w-full h-[100vh] overflow-y-hidden text-white flex flex-col items-center text-center relative">
      {/**/}
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1.5}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
      <div className="flex antialiased w-full h-screen justify-center items-center absolute inset -top-[25vh]">
        <div
          className="w-screen h-[180.5vh]"
          style={{
            background:
              "conic-gradient(from 90deg, #aaaaff 0%, #00000000 100%)",
          }}
        ></div>
        <div
          className="w-screen h-[180.5vh]"
          style={{
            background:
              "conic-gradient(from 270deg, #00000000 0%, #aaaaff 100%)",
          }}
        ></div>
      </div>
      <h1 className="text-7xl text-shine font-semibold mt-[35vh] text-black w-full max-w-4xl z-10 relative">
        Advanced security systems for your software.
      </h1>
      <p className="text-lg text-gray-900/60 z-10 relative mt-8 max-w-xl">
        Protect your applications with cutting-edge technology designed to keep
        your data safe and secure.
      </p>
    </section>
  );
};
