import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="w-full min-h-[100vh] flex items-center justify-center pt-20 px-6 text-white">
      <div className="max-w-4xl text-center">
        
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-black italic leading-[0.95] mb-8">
          <span className="text-[#e63c3c] block mt-2">Your Business,  </span>
          Accelerated by Digital Excellence
        </h1>

        {/* Paragraph */}
        <p className="max-w-2xl text-lg text-gray-300 leading-relaxed font-medium mx-auto mb-10">
          DIGITAL NEXUS transforms bold ideas into world-class digital realities through precision engineering and unparalleled design. Your future, engineered.
        </p>

        {/* Button */}
        <button className="px-8 py-4 bg-[#e63c3c] text-white text-[13px] font-extrabold uppercase rounded-2xl flex items-center gap-3 mx-auto hover:scale-105 transition-transform shadow-[0_0_20px_rgba(230,60,60,0.5)]">
          Explore Projects <FaArrowRight />
        </button>
      </div>
    </section> 
  );
};

export default Hero;