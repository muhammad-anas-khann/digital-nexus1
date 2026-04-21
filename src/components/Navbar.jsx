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
    <nav className={`w-full z-[999] transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}>
      
      <div className="max-w-[1300px] mx-auto px-6">
        
        <div className={`flex items-center justify-between px-10 py-4 rounded-2xl border transition-all duration-500 
          ${scrolled 
            ? "bg-black/70 backdrop-blur-xl border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)]" 
            : "bg-white/[0.02] border-white/5"}`}>

          {/* LOGO */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-3 h-3 bg-[#e63c3c] rounded-full shadow-[0_0_15px_#e63c3c] group-hover:scale-125 transition" />
            <span className="text-white text-2xl font-black italic">
              DIGITAL<span className="text-[#e63c3c]">NEXUS</span>
            </span>
          </div>

          {/* NAV LINKS */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-[12px] font-bold uppercase tracking-[2px] text-zinc-400 transition-all duration-300 group hover:text-white"
              >
                {link.name}

                {/* Animated Line */}
                <span className="absolute left-1/2 -bottom-2 h-[2px] w-0 bg-gradient-to-r from-transparent via-[#e63c3c] to-transparent transition-all duration-500 group-hover:w-full group-hover:left-0" />

                {/* Glow Blur */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-md bg-[#e63c3c]/10 transition duration-500 rounded-md -z-10" />
              </a>
            ))}
          </div>

          {/* BUTTON + TOGGLE */}
          <div className="flex items-center gap-6">

            {/* CTA */}
            <button className="hidden sm:block relative overflow-hidden text-white text-[11px] font-bold uppercase tracking-widest border border-[#e63c3c]/40 px-8 py-3 rounded-xl transition-all duration-300 group">
              
              <span className="relative z-10 group-hover:text-white">Let's Talk</span>

              {/* Liquid Fill */}
              <span className="absolute inset-0 bg-[#e63c3c] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

              {/* Glow */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 shadow-[0_0_30px_#e63c3c] transition" />
            </button>

            {/* MOBILE MENU */}
            <button className="lg:hidden flex flex-col gap-1.5" onClick={() => setIsOpen(!isOpen)}>
              <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? "w-7 rotate-45 translate-y-2.5" : "w-7"}`} />
              <span className={`h-[2px] bg-[#e63c3c] transition-all duration-300 ${isOpen ? "opacity-0" : "w-5"}`} />
              <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? "w-7 -rotate-45 -translate-y-2.5" : "w-7"}`} />
            </button>

          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 bg-[#080808] transition-all duration-500 lg:hidden
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}>

        <div className="flex flex-col h-full items-center justify-center gap-10">
          {navLinks.map((link, i) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-black text-white uppercase italic tracking-tight hover:text-[#e63c3c] transition-all"
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