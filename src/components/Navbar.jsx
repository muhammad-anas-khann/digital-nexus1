import React from 'react';
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa6"; 
import logo from "../assets/Digital Nexus Logo Final-02.jpg (1).jpeg"; 

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#home", isActive: true },
    { name: "Services", href: "#services" },
    { name: "About", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    /* Yahan relative class ensure kar rahi hai ki ye document flow mein rahe */
    <nav className="relative w-full z-[100] px-6 py-6">
      
      {/* Main Glass Container */}
      <div className="max-w-[65%] mx-auto backdrop-blur-md bg-black/70 border border-[#e63c3c]/40 shadow-[0_0_15px_rgba(230,60,60,0.25)] rounded-full flex items-center justify-between px-10 py-2.5 relative transition-all duration-500 ease-out"> 
        
        {/* 1. Logo Section */}
        <div className="relative z-10">
          <a href="/" className="relative text-white text-2xl font-black tracking-tighter italic transition-all duration-300 hover:opacity-90 block">
            DIGITAL
            <span className="text-[#e63c3c] ml-1 inline-block">
              NEXUS
            </span>
          </a>
        </div>

        {/* 2. Navigation Links */}
        <ul className="flex items-center gap-0">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group">
              <a
                href={link.href}
                className={`px-5 py-1.5 text-xs font-bold tracking-wider relative z-20 block transition-all duration-300
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
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3.5">
            {[
              { icon: <FaFacebookF />, color: 'hover:text-blue-600' },
              { icon: <FaInstagram />, color: 'hover:text-pink-500' },
              { icon: <FaLinkedinIn />, color: 'hover:text-blue-400' },
            ].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className={`text-gray-400 text-sm transition-all duration-300 hover:-translate-y-0.5 ${item.color}`}
              >
                {item.icon}
              </a>
            ))}
          </div>
          <a href="#">
            <button className="relative group/btn overflow-hidden px-6 py-2 bg-[#e63c3c] text-white text-[11px] font-extrabold uppercase tracking-[2px] rounded-2xl transition-all duration-500 hover:shadow-[0_0_25px_rgba(230,60,60,0.4)] active:scale-95">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_2s_infinite]" />
              <span className="relative z-10">Hire Us</span>
            </button>
          </a>
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