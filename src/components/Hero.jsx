import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center pt-[140px] pb-10 px-6">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#e63c3c]/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#8b0000]/10 rounded-full blur-[130px] -z-10 pointer-events-none" />

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Center Section: Text & Buttons */}
        <div className="flex flex-col space-y-8">
          <div className="inline-flex items-center justify-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full group/badge transition-all duration-300 hover:bg-[#e63c3c]/10 hover:border-[#e63c3c]/20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e63c3c] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#e63c3c]"></span>
            </span>
            <span className="text-xs font-semibold text-white tracking-widest uppercase opacity-80">
              Innovating the Digital Frontier
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white italic leading-[0.95]">
            We Build Digital
            <span className="text-[#e63c3c] ml-2 drop-shadow-[0_0_8px_rgba(230,60,60,0.5)]">Masterpieces</span>
          </h1>

          <p className="max-w-2xl text-lg text-gray-300 leading-relaxed font-medium mx-auto">
            DIGITAL NEXUS transforms bold ideas into world-class digital realities through precision engineering and unparalleled design. Your future, engineered.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <button className="relative group/btn overflow-hidden w-full sm:w-auto px-8 py-4 bg-[#e63c3c] text-white text-[13px] font-extrabold uppercase tracking-[2.5px] rounded-2xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(230,60,60,0.5)] active:scale-95 flex items-center justify-center gap-3 animate-pulse hover:animate-none">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
              <span className="relative z-10 flex items-center gap-3">
                Explore Projects
                <FaArrowRight className="text-sm transition-transform group-hover/btn:translate-x-1 group-hover/btn:rotate-12" />
              </span>
            </button>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </section> 
  );
};

export default Hero;