import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[9999] transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}>
      <div className="max-w-[1300px] mx-auto px-6">
        
        <div className={`flex items-center justify-between px-10 py-4 rounded-2xl border transition-all duration-500 
          ${scrolled 
            ? "bg-black/80 backdrop-blur-lg border-white/10 shadow-2xl" 
            : "bg-white/[0.02] border-white/5"}`}>
          
          {/* --- LOGO (Bada aur Bold) --- */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-3 h-3 bg-[#e63c3c] rounded-full shadow-[0_0_15px_#e63c3c]" />
            <span className="text-white text-2xl font-black tracking-tighter uppercase italic">
              DIGITAL<span className="text-[#e63c3c]">NEXUS</span>
            </span>
          </div>

          {/* --- CENTER NAV --- */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-bold uppercase tracking-[2.5px] text-zinc-400 hover:text-white transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#e63c3c] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* --- CTA BUTTON (Red Hover) --- */}
          <div className="flex items-center gap-6">
            <button className="hidden sm:block text-white text-[11px] font-bold uppercase tracking-widest border border-[#e63c3c]/40 px-8 py-3 rounded-xl transition-all duration-300 hover:bg-[#e63c3c] hover:border-[#e63c3c] hover:shadow-[0_10px_20px_rgba(230,60,60,0.3)] active:scale-95">
              Let's Talk
            </button>

            {/* MOBILE TOGGLE */}
            <button className="lg:hidden flex flex-col gap-1.5" onClick={() => setIsOpen(!isOpen)}>
              <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? "w-7 rotate-45 translate-y-2.5" : "w-7"}`} />
              <span className={`h-[2px] bg-[#e63c3c] transition-all duration-300 ${isOpen ? "opacity-0" : "w-5"}`} />
              <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? "w-7 -rotate-45 -translate-y-2.5" : "w-7"}`} />
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE OVERLAY --- */}
      <div className={`fixed inset-0 h-screen w-full bg-[#080808] z-[-1] transition-all duration-500 lg:hidden
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}>
        <div className="flex flex-col h-full items-center justify-center gap-10">
          {navLinks.map((link, i) => (
            <a 
              key={link.name} href={link.href} onClick={() => setIsOpen(false)}
              className="text-4xl font-black text-white uppercase italic tracking-tighter hover:text-[#e63c3c] transition-all"
            >
              <span className="text-zinc-800 mr-4 text-2xl">0{i+1}</span>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;