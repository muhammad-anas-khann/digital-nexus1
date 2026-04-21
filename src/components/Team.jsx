import React from 'react';
import Reveal from "./Reveal";
import kashan from "../assets/kashan.jpeg";
import speed from "../assets/speed.png";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa6";

const Team = () => {
  const members = [
    { name: "Kashan", role: "Co-Founder & CEO", img: kashan, bio: "Leading the strategic vision and global expansion of Digital Nexus." },
    { name: "Abdullah", role: "Co-Founder & CTO", img: speed, bio: "Masterminding the technological backbone and engineering excellence." }
  ];

  const testimonials = [
    { name: "Muhammad Hassan", role: "Full Stack Developer", location: "Karachi, Pakistan", text: "Their attention to unmatched precision in every pixel transformed our entire project." },
    { name: "Fatima Ahmed", role: "UI/UX Designer", location: "Lahore, Pakistan", text: "They redefined our digital identity completely with innovative design solutions." },
    { name: "Ali Raza", role: "Backend Architect", location: "Islamabad, Pakistan", text: "The elite partners every startup needs for technical excellence and reliability." },
    { name: "Ayesha Khan", role: "Product Manager", location: "Multan, Pakistan", text: "Psychology-driven design at its best combined with technical excellence." },
  ];

  const MemberCard = ({ m }) => (
    <div className="group relative flex flex-col md:flex-row bg-[#0a0a0a] rounded-[30px] sm:rounded-[40px] border border-white/5 overflow-visible transition-all duration-700 hover:border-[#e63c3c]/40 hover:shadow-[0_20px_60px_rgba(230,60,60,0.15)]">

      {/* IMAGE */}
      <div className="relative w-full md:w-2/5 h-[250px] sm:h-[350px] overflow-hidden">
        <img
          src={m.img}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* animated name overlay */}
        <div className="absolute bottom-4 left-4">
        
        </div>

        {/* SOCIAL ICONS */}
        <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">

          <a href="#" className="text-white/70 hover:text-blue-500 text-sm">
            <FaLinkedinIn />
          </a>

          <a href="#" className="text-white/70 hover:text-pink-500 text-sm">
            <FaInstagram />
          </a>

          <a href="#" className="text-white/70 hover:text-blue-600 text-sm">
            <FaFacebookF />
          </a>

        </div>
      </div>

      {/* CONTENT */}
      <div className="w-full md:w-3/5 p-6 sm:p-10 flex flex-col justify-center relative">

        <h4 className="text-white font-black italic text-xl sm:text-3xl uppercase group-hover:text-[#e63c3c] transition-colors">
          {m.name}
        </h4>

        <p className="text-[#e63c3c] text-[9px] sm:text-[10px] font-black uppercase tracking-[3px] mt-2 mb-3">
          Executive Board
        </p>

        <p className="text-gray-400 text-xs sm:text-sm italic leading-relaxed">
          "{m.bio}"
        </p>

        {/* bottom glow line */}
        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#e63c3c] group-hover:w-full transition-all duration-700" />
      </div>
    </div>
  );

  const TestimonialCard = ({ t }) => (
    <div className="flex-shrink-0 w-[85vw] sm:w-[400px] lg:w-[540px] h-[280px] sm:h-[320px] group">
      <div className="relative w-full h-full p-6 sm:p-8 rounded-[40px] border border-white/20 flex flex-col justify-between transition-all duration-500 group-hover:-translate-y-3 group-hover:border-[#e63c3c]/50">

        <p className="text-gray-400 italic text-sm sm:text-base group-hover:text-white transition">
          {t.text}
        </p>

        <div className="text-center">
          <div className="w-6 h-[2px] bg-[#e63c3c] mx-auto mb-3 group-hover:scale-x-[2] transition-transform" />
          <h6 className="text-white font-black uppercase text-sm">{t.name}</h6>
          <p className="text-[#e63c3c] text-[10px] font-bold uppercase">{t.role}</p>
          <p className="text-gray-500 text-[9px] uppercase">{t.location}</p>
        </div>

      </div>
    </div>
  );

  return (
    <section id="team" className="py-20 px-4 sm:px-6 overflow-hidden">

      <div className="max-w-[95%] mx-auto">

        {/* HEADER */}
        <Reveal>
          <h2 className="text-white text-3xl sm:text-5xl md:text-6xl font-black uppercase italic">
            Elite <span className="text-[#e63c3c]">Partners</span>
          </h2>
        </Reveal>

        {/* MEMBERS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 my-16">
          {members.map((m, i) => (
            <Reveal key={i}>
              <MemberCard m={m} />
            </Reveal>
          ))}
        </div>

        {/* TESTIMONIALS */}
        <Reveal>
          <h2 className="text-white text-3xl sm:text-5xl md:text-6xl font-black uppercase italic mb-10">
            Client <span className="text-[#e63c3c]">Voices</span>
          </h2>
        </Reveal>

        <div className="relative space-y-10 overflow-visible">

          <div className="flex w-[200%] gap-6 sm:gap-10 animate-scroll-left">
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>

          <div className="flex w-[200%] gap-6 sm:gap-10 animate-scroll-right">
            {[...testimonials, ...testimonials].reverse().map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>

        </div>

      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-scroll-left {
          animation: scroll-left 35s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 35s linear infinite;
        }
      `}</style>

    </section>
  );
};

export default Team;