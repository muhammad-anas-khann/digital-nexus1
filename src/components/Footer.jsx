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
    <footer className="relative w-full bg-black border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#e63c3c]/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#8b0000]/5 rounded-full blur-[130px] -z-10 pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
        
        {/* Brand Section */}
        <div className="flex flex-col space-y-6">
          <div className="inline-flex w-fit">
            <a href="/" className="relative text-white text-2xl font-black tracking-tighter italic">
              DIGITAL
              <span className="text-[#e63c3c] ml-1 inline-block">
                NEXUS
              </span>
            </a>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Transforming bold ideas into world-class digital masterpieces through precision engineering and unparalleled design.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-white font-bold text-[13px] uppercase tracking-[2px]">Quick Links</h3>
          <ul className="space-y-3">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="text-gray-400 text-sm transition-all duration-300 hover:text-white hover:translate-x-1 inline-block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-white font-bold text-[13px] uppercase tracking-[2px]">Follow Us</h3>
          <div className="flex items-center gap-4">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-gray-400 text-lg transition-all duration-300 hover:text-[#e63c3c] hover:-translate-y-1"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {currentYear} DIGITAL NEXUS. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 text-xs hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 text-xs hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}} />
    </footer>
  );
};

export default Footer;