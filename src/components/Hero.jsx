import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import Reveal from "./Reveal";

const Hero = () => {
  return (
    <section className="w-full min-h-[100vh] flex items-center justify-center px-4 sm:px-6 text-white">
      <div className="max-w-4xl text-center">
        
        {/* Heading */}
        <Reveal>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black italic leading-[1] md:leading-[0.95] mb-6 md:mb-8">
            <span className="text-[#e63c3c] block mt-1 md:mt-30">
              Your Business,
            </span>
            Accelerated by Digital Excellence
          </h1>
        </Reveal>

        {/* Paragraph */}
        <Reveal delay={200}>
          <p className="max-w-xl md:max-w-2xl text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-medium mx-auto mb-8 md:mb-10 px-2 sm:px-0">
            DIGITAL NEXUS transforms bold ideas into world-class digital realities through precision engineering and unparalleled design. Your future, engineered.
          </p>
        </Reveal>

        {/* Button */}
        <Reveal delay={400}>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-[#e63c3c] text-white text-[11px] sm:text-[13px] font-extrabold uppercase rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-3 mx-auto hover:scale-105 transition-transform shadow-[0_0_20px_rgba(230,60,60,0.5)]">
            Explore Projects <FaArrowRight />
          </button>
        </Reveal>

      </div>
    </section> 
  );
};

export default Hero;