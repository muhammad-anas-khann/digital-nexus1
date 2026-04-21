import React from 'react';
import { 
  FaFacebookF, 
  FaLinkedin, 
  FaInstagram, 
  FaArrowUp, 
  FaEnvelope, 
  FaGlobe 
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#050505] pt-20 overflow-hidden">
      
      {/* Background FX */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#e63c3c] to-transparent opacity-30" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#e63c3c]/5 rounded-full blur-[120px]" />

      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* HEADER */}
        <div className="relative mb-24 overflow-hidden py-10 group">
          <h2 className="text-white text-[12vw] md:text-[15vw] font-black leading-none tracking-tighter opacity-5 uppercase select-none">
            Digital Nexus
          </h2>

          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-4xl md:text-7xl font-black italic uppercase tracking-tighter">
              READY TO <span className="text-[#e63c3c] animate-pulse">ASCEND?</span>
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 pb-20">
          
          {/* BRAND */}
          <div className="md:col-span-5 space-y-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#e63c3c] rounded-lg flex items-center justify-center rotate-45">
                <FaGlobe className="text-white -rotate-45" />
              </div>
              <span className="text-white text-2xl font-black tracking-tighter">
                DN. PROTOCOL
              </span>
            </div>

            <p className="text-zinc-500 text-xl font-medium leading-relaxed max-w-sm italic">
              We don't just build websites; we build the future of digital world.
            </p>

            <div className="flex gap-4">
              <a href="#" className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#e63c3c] hover:-translate-y-2 transition-all">
                <FaFacebookF />
              </a>
              <a href="#" className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#e63c3c] hover:-translate-y-2 transition-all">
                <FaInstagram />
              </a>
              <a href="#" className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#e63c3c] hover:-translate-y-2 transition-all">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* LINKS */}
          <div className="md:col-span-3">
            <h4 className="text-[#e63c3c] font-black uppercase text-[10px] tracking-[5px] mb-10">
              Navigation
            </h4>

            <ul className="space-y-4">
              {["Home", "Services", "Projects", "Team"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-zinc-400 text-3xl font-black uppercase italic hover:text-white hover:pl-4 transition-all">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT FIXED */}
          <div className="md:col-span-4 space-y-10">
            <h4 className="text-[#e63c3c] font-black uppercase text-[10px] tracking-[5px] mb-10">
              Direct Uplink
            </h4>

            {/* FIXED: no nested <a> */}
            <a 
              href="mailto:digitalnexus.2326@gmail.com"
              className="flex items-center gap-6 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[#e63c3c] transition-colors">
                <FaEnvelope />
              </div>

              <span className="text-white text-lg font-bold group-hover:tracking-widest transition-all">
                digitalnexus.2326@gmail.com
              </span>
            </a>

            <div className="p-8 rounded-[30px] bg-white/[0.02] border border-white/5">
              <p className="text-zinc-500 text-xs font-black uppercase tracking-[3px] mb-2">
                Current Status
              </p>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                <span className="text-white font-bold italic text-xl">
                  ACCEPTING PROJECTS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-10 pb-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[5px]">
            © {currentYear} ALL RIGHTS RESERVED
          </p>

          <button onClick={scrollToTop} className="flex items-center gap-4 group">
            <span className="text-white text-[10px] font-black uppercase group-hover:text-[#e63c3c]">
              Return To Top
            </span>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#e63c3c] transition-all">
              <FaArrowUp />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;