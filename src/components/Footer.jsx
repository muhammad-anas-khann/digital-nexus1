import React from 'react';
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#projects" },
    { name: "Team", href: "#team" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
  ];

  return (
    <footer className="relative w-full bg-black border-t border-white/10 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#e63c3c]/10 blur-[160px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#8b0000]/10 blur-[140px] -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div className="space-y-6">
          <h1 className="text-white text-3xl font-black italic tracking-tighter">
            DIGITAL <span className="text-[#e63c3c]">NEXUS</span>
          </h1>

          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Transforming bold ideas into world-class digital experiences with precision, performance, and design excellence.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 pt-2">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="relative text-gray-400 text-lg transition-all duration-300 hover:text-[#e63c3c] hover:-translate-y-1"
              >
                <span className="absolute inset-0 scale-0 group-hover:scale-150 bg-[#e63c3c]/10 rounded-full blur-md transition" />
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-white font-bold uppercase text-xs tracking-[3px] mb-6">
            Navigation
          </h3>

          <ul className="space-y-4">
            {quickLinks.map((l, i) => (
              <li key={i}>
                <a
                  href={l.href}
                  className="relative text-gray-400 text-sm group transition"
                >
                  <span className="group-hover:text-white transition">
                    {l.name}
                  </span>

                  {/* underline animation */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#e63c3c] group-hover:w-full transition-all duration-500" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA / INFO */}
        <div className="space-y-5">
          <h3 className="text-white font-bold uppercase text-xs tracking-[3px]">
            Let’s Build Something
          </h3>

          <p className="text-gray-500 text-sm leading-relaxed">
            Have a project in mind? Let’s turn your vision into a digital reality.
          </p>

          <button className="relative overflow-hidden px-6 py-3 bg-[#e63c3c] text-white text-xs font-bold uppercase rounded-xl transition-all duration-500 hover:shadow-[0_0_25px_rgba(230,60,60,0.4)] active:scale-95">
            <span className="relative z-10">Start Project</span>
            <div className="absolute inset-0 bg-white/10 -translate-x-full hover:translate-x-full transition-transform duration-700" />
          </button>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-gray-500 text-xs">
            © {currentYear} DIGITAL NEXUS. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a className="text-gray-500 text-xs hover:text-white transition">Privacy</a>
            <a className="text-gray-500 text-xs hover:text-white transition">Terms</a>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;