import React from 'react';
import { FaArrowRight, FaGlobe } from "react-icons/fa";
import Reveal from "./Reveal";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#050505] px-6 md:px-12 py-20 overflow-hidden">
      
      {/* Background: Pure Darkness with very subtle texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-l from-[#e63c3c]/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Content (8 Columns) */}
        <div className="lg:col-span-8 space-y-10">
          <Reveal>
            <div className="inline-flex items-center gap-3 px-3 py-1 border-l-2 border-[#e63c3c] bg-white/5 mt-12">
              <span className="text-[10px] font-black uppercase tracking-[4px] text-white/80">
                • Available Worldwide
              </span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.9]">
              IMPACTFUL <br />
              <span className="text-white/20">DIGITAL</span> PRODUCTS.
            </h1>
          </Reveal>

          <Reveal delay={400}>
            <p className="max-w-xl text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
              We specialize in building high-performance <span className="text-white">AI-driven platforms</span> that bridge the gap between complex technology and human-centric design.
            </p>
          </Reveal>

          <Reveal delay={600}>
            <div className="flex flex-wrap items-center gap-6">
              <button className="px-10 py-5 bg-white text-black text-[12px] font-black uppercase tracking-widest hover:bg-[#e63c3c] hover:text-white transition-all duration-500">
                Work with us
              </button>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <FaGlobe className="text-xs" />
                </div>
                <span className="text-white text-[11px] font-bold uppercase tracking-widest">Explore Portfolio</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Side: Visual Element (4 Columns) */}
        <div className="lg:col-span-4 hidden lg:block">
          <Reveal delay={800}>
            <div className="relative aspect-[3/4] w-full border border-white/10 rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000" 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-[2s]" 
                alt="Architecture"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-3xl font-black italic mb-2 tracking-tighter leading-none">STRATEGY <br /> & CODE.</p>
                <div className="h-[2px] w-full bg-[#e63c3c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
              </div>
            </div>
          </Reveal>
        </div>

      </div>

      {/* Vertical Side Bar - The "Signature" look */}
      <div className="absolute left-0 top-0 h-full w-20 hidden xl:flex flex-col items-center justify-center border-r border-white/5">
        <p className="rotate-90 whitespace-nowrap text-[10px] font-bold tracking-[10px] text-white/20 uppercase">
          Digital Excellence 2026
        </p>
      </div>

    </section>
  );
};

export default Hero;