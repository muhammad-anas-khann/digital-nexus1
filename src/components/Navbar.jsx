import React from 'react';
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa6"; 

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#home", isActive: true },
    { name: "Services", href: "#services" },
    { name: "About", href: "#projects" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="relative w-full z-[100] px-4 py-6 bg-black">
      {/* Main Glass Container */}
      <div className="max-w-[92%] mx-auto backdrop-blur-md bg-black/80 border border-white/5 rounded-[28px] flex items-center justify-between px-12 py-4 relative transition-all duration-500 ease-out">
        
        {/* 1. Logo Section */}
        <div className="relative z-10">
          <a href="/" className="relative text-white text-3xl font-black tracking-tighter italic transition-all duration-300 hover:opacity-90 block">
            DIGITAL
            <span className="text-[#e63c3c] ml-1 inline-block">
              NEXUS
            </span>
          </a>
        </div>

        {/* 2. Navigation Links */}
        <ul className="flex items-center gap-3">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group">
              <a
                href={link.href}
                className={`px-6 py-2.5 text-sm font-bold tracking-wider relative z-20 block transition-all duration-300
                  ${link.isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}
              >
                {link.name}
              </a>
              
              {/* Active/Hover Pill */}
              <div className={`absolute inset-0 rounded-full transition-all duration-500
                ${link.isActive 
                  ? 'bg-[#e63c3c]/15 border border-[#e63c3c]/20 opacity-100' 
                  : 'bg-white/5 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100'}`} 
              />
            </li>
          ))}
        </ul>

        {/* 3. Social Icons & Action Button */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-5">
            {[
              { icon: <FaFacebookF />, hover: 'hover:text-white' },
              { icon: <FaInstagram />, hover: 'hover:text-white' },
              { icon: <FaLinkedinIn />, hover: 'hover:text-white' },
            ].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className={`text-gray-400 text-lg transition-all duration-300 hover:-translate-y-0.5 ${item.hover}`}
              >
                {item.icon}
              </a>
            ))}
          </div>
          
          <button className="relative group/btn overflow-hidden px-8 py-3 bg-[#e63c3c] text-white text-[12px] font-extrabold uppercase tracking-[2px] rounded-2xl transition-all duration-500 hover:shadow-[0_0_25px_rgba(230,60,60,0.4)] active:scale-95">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_2s_infinite]" />
            <span className="relative z-10">Hire Us</span>
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </nav>
  );
};

export default Navbar;