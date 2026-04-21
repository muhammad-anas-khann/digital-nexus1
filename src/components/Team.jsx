import React from 'react';
import Reveal from "./Reveal";
import './Team.css';
import kashan from "../assets/kashan.jpeg";
import speed from "../assets/speed.png";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa6";

const Team = () => {
  const members = [
    { 
      name: "Kashan", 
      role: "Co-Founder & CEO", 
      img: kashan, 
      bio: "Leading the strategic vision and global expansion of Digital Nexus.",
      linkedin: "https://linkedin.com/in/kashan",
      instagram: "https://instagram.com/kashan",
      facebook: "https://facebook.com/kashan"
    },
    { 
      name: "Abdullah", 
      role: "Co-Founder & CTO", 
      img: speed, 
      bio: "Masterminding the technological backbone and engineering excellence.",
      linkedin: "https://linkedin.com/in/abdullah",
      instagram: "https://instagram.com/abdullah",
      facebook: "https://facebook.com/abdullah"
    }
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
          alt={`${m.name}, ${m.role}`}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* animated name overlay */}
        <div className="absolute bottom-4 left-4 group-hover:opacity-100 opacity-0 transition-all duration-500">
          <h4 className="text-white font-black italic text-lg uppercase drop-shadow-lg">
            {m.name}
          </h4>
          <p className="text-[#e63c3c] text-xs font-bold uppercase tracking-wider mt-1">
            {m.role}
          </p>
        </div>

        {/* SOCIAL ICONS */}
        <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">

          <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name}'s LinkedIn`} className="text-white/70 hover:text-blue-500 text-sm transition-colors">
            <FaLinkedinIn />
          </a>

          <a href={m.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${m.name}'s Instagram`} className="text-white/70 hover:text-pink-500 text-sm transition-colors">
            <FaInstagram />
          </a>

          <a href={m.facebook} target="_blank" rel="noopener noreferrer" aria-label={`${m.name}'s Facebook`} className="text-white/70 hover:text-blue-600 text-sm transition-colors">
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

          <div className="flex w-[200%] gap-6 sm:gap-10 animate-scroll-left hover:pause-scroll">
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>

          <div className="flex w-[200%] gap-6 sm:gap-10 animate-scroll-right hover:pause-scroll">
            {[...testimonials, ...testimonials].reverse().map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>

        </div>

      </div>

      {/* Contact Form UI */}
      <div className="group relative max-w-6xl mx-auto min-h-[500px] rounded-[50px] bg-[#050505] border border-white/5 overflow-hidden transition-all duration-700 hover:scale-[1.01] hover:border-[#e63c3c]/30 hover:shadow-[0_0_80px_rgba(230,60,60,0.15)] mt-20">
        <div className="absolute top-0 -left-20 w-80 h-80 bg-[#e63c3c]/10 rounded-full blur-[120px] group-hover:bg-[#e63c3c]/25 transition-all duration-700" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-[#8b0000]/10 rounded-full blur-[150px] group-hover:bg-[#8b0000]/20 transition-all duration-700" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full">
          <div className="p-10 lg:p-14 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
            <div className="space-y-6">
              <span className="inline-block text-[10px] font-black uppercase tracking-[6px] text-[#e63c3c] border border-[#e63c3c]/30 px-6 py-2 rounded-full animate-pulse">Direct Channel</span>
              <h3 className="text-4xl md:text-6xl font-black text-white italic uppercase leading-[0.9] tracking-tighter transition-transform group-hover:translate-x-2">
                Let's <br /> <span className="stroke-text">Discuss</span> <br /> 
                <span className="text-[#e63c3c]">Success.</span>
              </h3>
              <p className="text-zinc-500 text-xs max-w-sm font-medium leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">
                Drop your details and project vision. Our elite strategy team will reach out within 12 hours.
              </p>
            </div>
          </div>

          <div id="contact" className="p-8 lg:p-14 bg-gradient-to-br from-white/[0.01] to-transparent">
            <form netlify method="POST" className="space-y-6">
              <input type="hidden" name="form-name" value="contact" />
              <div className="relative group/field border-b-2 border-white/10">
                <input type="text" name="name" required placeholder=" " className="peer w-full bg-transparent py-3 text-white text-xs font-bold uppercase tracking-widest outline-none border-none focus:ring-0" />
                <label className="absolute left-0 top-3 text-white/20 text-[10px] font-black uppercase tracking-[3px] transition-all peer-focus:-top-4 peer-focus:text-[#e63c3c] peer-[:not(:placeholder-shown)]:-top-4">Full Name</label>
                <div className="absolute -bottom-[2px] left-0 w-0 h-[2px] bg-[#e63c3c] transition-all duration-500 group-hover/field:w-full peer-focus:w-full shadow-[0_0_10px_#e63c3c]" />
              </div>
              <div className="relative group/field border-b-2 border-white/10">
                <input type="email" name="email" required placeholder=" " className="peer w-full bg-transparent py-3 text-white text-xs font-bold uppercase tracking-widest outline-none border-none focus:ring-0" />
                <label className="absolute left-0 top-3 text-white/20 text-[10px] font-black uppercase tracking-[3px] transition-all peer-focus:-top-4 peer-focus:text-[#e63c3c] peer-[:not(:placeholder-shown)]:-top-4">Email Address</label>
                <div className="absolute -bottom-[2px] left-0 w-0 h-[2px] bg-[#e63c3c] transition-all duration-500 group-hover/field:w-full peer-focus:w-full shadow-[0_0_10px_#e63c3c]" />
              </div>
              <div className="relative group/field border-b-2 border-white/10">
                <textarea name="message" required rows="3" placeholder=" " className="peer w-full bg-transparent py-3 text-white text-xs font-bold uppercase tracking-widest outline-none border-none focus:ring-0 resize-none" />
                <label className="absolute left-0 top-3 text-white/20 text-[10px] font-black uppercase tracking-[3px] transition-all peer-focus:-top-4 peer-focus:text-[#e63c3c] peer-[:not(:placeholder-shown)]:-top-4">Project Brief</label>
                <div className="absolute -bottom-[2px] left-0 w-0 h-[2px] bg-[#e63c3c] transition-all duration-500 group-hover/field:w-full peer-focus:w-full shadow-[0_0_10px_#e63c3c]" />
              </div>
              <button type="submit" className="relative w-full overflow-hidden group/btn bg-white py-5 rounded-2xl transition-all duration-500 active:scale-95 shadow-[0_10px_30px_rgba(255,255,255,0.05)] hover:shadow-[0_15px_40px_rgba(230,60,60,0.2)]">
                <div className="absolute inset-0 w-0 bg-[#e63c3c] transition-all duration-500 group-hover/btn:w-full" />
                <span className="relative z-10 text-black text-[11px] font-black uppercase tracking-[5px] group-hover/btn:text-white transition-colors">Initialize Project →</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

