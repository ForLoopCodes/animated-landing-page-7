"use client";

import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="h-content w-screen my-6 px-52 z-10000"
      style={{ zIndex: 10000 }}
    >
      <div className="flex flex-col items-center bg-black/30 backdrop-blur-3xl rounded-[28px] w-full h-full relative">
        <div className="flex items-center justify-between w-full h-16">
          {/* Logo and mobile menu button */}
          <div className="pl-4 hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="h-10 w-auto animate-soft-pulse"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-between items-center p-4">
            <nav>
              <ul className="flex space-x-4">
                {["Home", "Products", "Features", "Services", "Pricing"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="relative text-neutral-300 hover:text-white px-0 mx-2 py-1 transition-all duration-300 group overflow-hidden"
                      >
                        {item}
                        <span
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-all duration-500 
                                  transform -translate-x-full group-hover:translate-x-0 
                                  animate-shine bg-[length:200%_auto]"
                        />
                        <span
                          className="absolute bottom-0 left-[50%] translate-x-[-50%] w-full h-px bg-white/30 scale-x-0 group-hover:scale-x-100 
                                  transition-transform duration-300 origin-center"
                        />
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden pr-4 z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-5 h-[1px] bg-white/70 transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-[1px] bg-white/70 transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-5 h-[1px] bg-white/70 transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>

          {/* Desktop Download Button */}
          <div className="hidden md:flex items-center justify-end p-4">
            <div className="rounded-full bg-gradient-to-br from-blue-800 via-blue-500 to-blue-900 !p-0.5 transition-transform duration-300">
              <button className="px-6 hover:px-7 sm:hover:px-7 py-2 sm:py-2 group flex justify-center items-center gap-0 hover:gap-2 shadow shadow-inner shadow-blue-400 hover:shadow-blue-400 drop-shadow drop-shadow-blue-400/30 drop-shadow-xl hover:drop-shadow-blue-600/40 bg-blue-800/40 hover:bg-blue-800/80 text-white rounded-full font-medium text-sm sm:text-base transition-all duration-200">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Content */}
        <div
          className={`md:hidden w-full overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black/10 py-6 w-full">
            <nav>
              <ul className="flex flex-col space-y-3 items-center">
                {["Home", "Products", "Features", "Services", "Pricing"].map(
                  (item) => (
                    <li key={item} className="w-full text-center">
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-neutral-300 hover:text-white text-lg py-2 block w-full transition-all duration-300"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
                <li className="max-w-[200px]">
                  <div className="w-full rounded-full bg-gradient-to-br from-blue-800 via-blue-500 to-blue-900 !p-0.5 transition-transform duration-300">
                    <button className="px-6 hover:px-7 sm:hover:px-7 py-2 sm:py-2 group flex justify-center items-center gap-0 hover:gap-2 shadow shadow-inner shadow-blue-400 hover:shadow-blue-400 drop-shadow drop-shadow-blue-400/30 drop-shadow-xl hover:drop-shadow-blue-600/40 bg-blue-800/40 hover:bg-blue-800/80 text-white rounded-full font-medium text-sm sm:text-base transition-all duration-200">
                      Get Started
                    </button>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
