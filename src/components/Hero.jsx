import React from 'react';
import { motion } from "framer-motion";
import { FaGlobe } from "react-icons/fa";
import Reveal from "./Reveal";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-[#050505] px-6 md:px-12 py-20 overflow-hidden">

      {/* subtle bg glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-[#e63c3c]/10 to-transparent blur-2xl" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT */}
        <div className="lg:col-span-8 space-y-8">

          <Reveal>
            <div className="inline-flex items-center gap-3 px-4 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur">
              <span className="text-[10px] font-semibold tracking-[3px] text-white/70 uppercase">
                Available Worldwide
              </span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95]">
              <span className="block text-white">IMPACTFUL</span>
              <span className="block bg-gradient-to-r from-white via-white/70 to-white/20 bg-clip-text text-transparent italic">
                DIGITAL PRODUCTS
              </span>
            </h1>
          </Reveal>

          <Reveal delay={400}>
            <p className="max-w-xl text-gray-400 text-base md:text-lg leading-relaxed">
              We build high-performance{" "}
              <span className="text-white font-semibold">AI-driven platforms</span>{" "}
              that merge complex tech with clean human design.
            </p>
          </Reveal>

          {/* 🔥 PREMIUM BUTTONS */}
          <Reveal delay={600}>
            <div className="flex flex-wrap items-center gap-6">

              {/* MAIN CTA */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-10 py-4 text-[11px] font-bold uppercase tracking-widest rounded-xl overflow-hidden group border border-white/20"
              >
                {/* text */}
                <span className="relative z-10 text-white group-hover:text-black transition duration-300">
                  Work with us
                </span>

                {/* liquid fill */}
                <span className="absolute inset-0 bg-gradient-to-r from-white to-[#e63c3c] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

                {/* glow */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 shadow-[0_0_40px_#e63c3c] transition duration-500" />

                {/* shine sweep */}
                <motion.span
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
              </motion.button>

              {/* SECONDARY BUTTON */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="relative w-10 h-10 rounded-full border border-white/20 flex items-center justify-center overflow-hidden group-hover:border-[#e63c3c] transition-all duration-300">

                  {/* glow bg */}
                  <span className="absolute inset-0 bg-[#e63c3c]/0 group-hover:bg-[#e63c3c]/20 transition duration-300" />

                  <FaGlobe className="text-xs text-white group-hover:text-[#e63c3c] transition" />
                </div>

                <span className="text-white text-[11px] font-semibold tracking-widest uppercase group-hover:tracking-[4px] transition-all duration-300">
                  Explore Portfolio
                </span>
              </motion.div>

            </div>
          </Reveal>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:col-span-4 hidden lg:block">
          <Reveal delay={800}>
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden group border border-white/10 bg-white/5 backdrop-blur"
            >

              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000"
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition duration-[1.5s]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              {/* moving light */}
              <motion.div
                initial={{ x: "-100%" }}
                whileHover={{ x: "150%" }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
              />

              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-2xl font-bold italic">
                  STRATEGY <br /> & CODE
                </p>

                <div className="h-[2px] w-full bg-gradient-to-r from-[#e63c3c] to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition duration-700" />
              </div>

            </motion.div>
          </Reveal>
        </div>

      </div>

      {/* side text */}
      <div className="absolute left-0 top-0 h-full w-20 hidden xl:flex flex-col items-center justify-center border-r border-white/5">
        <p className="rotate-90 whitespace-nowrap text-[10px] font-bold tracking-[10px] text-white/20 uppercase">
          Digital Excellence 2026
        </p>
      </div>

    </section>
  );
};

export default Hero;