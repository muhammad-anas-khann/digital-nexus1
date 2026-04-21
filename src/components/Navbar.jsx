import React, { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa6"; 
import { FaBars, FaTimes } from "react-icons/fa"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const navLinks = [
    { name: "Home", href: "#home", isActive: true },
    { name: "Services", href: "#services" },
    { name: "About", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  // 🔥 Hide on scroll down, show on top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNav(false); // scroll down → hide
      } else {
        setShowNav(true); // top → show
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] px-6 py-6 transition-all duration-500 
      ${showNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}`}>
      
      <div className="max-w-[100%] md:max-w-[70%] mx-auto backdrop-blur-md bg-black/70 border border-[#e63c3c]/40 shadow-[0_0_15px_rgba(230,60,60,0.25)] rounded-full flex items-center justify-between px-6 md:px-10 py-4 md:py-5 transition-all duration-500 ease-out"> 
        
        {/* Logo */}
        <div className="relative z-10">
          <a href="/" className="text-white text-xl md:text-2xl font-black tracking-tighter italic">
            DIGITAL
            <span className="text-[#e63c3c] ml-1">NEXUS</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-0">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group">
              <a
                href={link.href}
                className={`px-5 py-1.5 text-md font-bold tracking-wider relative z-20 block transition-all duration-300
                  ${link.isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}
              >
                {link.name}
              </a>
              
              <div className={`absolute inset-0 rounded-full transition-all duration-500
                ${link.isActive 
                  ? 'bg-[#e63c3c]/15 border border-[#e63c3c]/20 opacity-100' 
                  : 'bg-white/5 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100'}`} 
              />
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4 md:gap-6">
          
          <div className="hidden md:flex items-center gap-3.5">
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

          <div className="hidden md:block">
            <button className="relative group/btn overflow-hidden px-6 py-2 bg-[#e63c3c] text-white text-[11px] font-extrabold uppercase tracking-[2px] rounded-2xl transition-all duration-500 hover:shadow-[0_0_25px_rgba(230,60,60,0.4)] active:scale-95">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_2s_infinite]" />
              <span className="relative z-10">Hire Us</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden text-white text-xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden mt-4 mx-auto max-w-[90%] backdrop-blur-md bg-black/80 border border-[#e63c3c]/30 rounded-2xl overflow-hidden transition-all duration-500
        ${isOpen ? "max-h-[400px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"}`}>

        <ul className="flex flex-col items-center gap-5">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="text-white font-bold text-lg">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex justify-center mt-6">
          <button className="px-6 py-3 bg-[#e63c3c] text-white text-xs font-bold rounded-xl">
            Hire Us
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