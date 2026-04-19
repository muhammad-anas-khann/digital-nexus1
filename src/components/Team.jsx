import React from 'react';

const Team = () => {
  const members = [
    { name: "Sophia Anderson", role: "Co-Founder & CEO", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800", bio: "Leading the strategic vision and global expansion of Digital Nexus." },
    { name: "Marcus Chen", role: "Co-Founder & CTO", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800", bio: "Masterminding the technological backbone and engineering excellence." }
  ];

  const testimonials = [
    { name: "Muhammad Hassan", role: "Full Stack Developer", location: "Karachi, Pakistan", text: "Their attention to unmatched precision in every pixel transformed our entire project. The level of detail and expertise they brought exceeded all expectations. From concept to deployment, everything was handled with exceptional care and professionalism." },
    { name: "Fatima Ahmed", role: "UI/UX Designer", location: "Lahore, Pakistan", text: "They redefined our digital identity completely with innovative design solutions. Working with them was seamless and collaborative throughout the entire process. The results have had a profound impact on our brand perception and user engagement metrics." },
    { name: "Ali Raza", role: "Backend Architect", location: "Islamabad, Pakistan", text: "The elite partners every startup needs for technical excellence and reliability. Their infrastructure solutions scaled beautifully as our business grew exponentially. I would confidently recommend them to any organization looking for world-class development services." },
    { name: "Ayesha Khan", role: "Product Manager", location: "Multan, Pakistan", text: "Psychology-driven design at its best combined with technical excellence. They understood our user psychology and created experiences that converted visitors into loyal customers. The strategic approach they took was both innovative and results-oriented." },
    { name: "Hassan Ibrahim", role: "DevOps Engineer", location: "Faisalabad, Pakistan", text: "Brutal aesthetics mixed with beautiful functional results across all platforms. Their infrastructure design was robust and scalable for enterprise-level demands. The deployment pipeline they established runs flawlessly with minimal intervention." },
    { name: "Zainab Malik", role: "Cloud Architect", location: "Peshawar, Pakistan", text: "Beyond expectations in every aspect of the project execution and delivery. The cloud infrastructure they designed is secure, efficient, and cost-optimized. They provided excellent support and guidance throughout the migration process." },
    { name: "Usman Ahmed", role: "Frontend Engineer", location: "Quetta, Pakistan", text: "The architects of the modern web who understand cutting-edge technologies and best practices. Their frontend solutions are performant, accessible, and incredibly user-friendly. The code quality they delivered sets the standard for our entire organization." },
    { name: "Hana Saeed", role: "Technical Lead", location: "Rawalpindi, Pakistan", text: "Visual storytelling like never before combined with solid technical implementation. They crafted narratives through design that resonated with our target audience deeply. Their ability to balance aesthetics with functionality is truly remarkable and industry-leading." },
  ];

  const TestimonialCard = ({ t }) => (
    <div className="flex-shrink-0 w-[540px] h-[320px] group ]">
      <div className="relative w-full h-full p-8 rounded-[45px] border border-white/59 bg-transparent flex flex-col justify-between transition-all duration-500 ease-out 
                      group-hover:-translate-y-4 group-hover:border-[#e63c3c]/50 
                      group-hover:shadow-[0_20px_50px_rgba(230,60,60,0.2)]">
        
        {/* Animated Inner Border Glow */}
        <div className="absolute inset-0 rounded-[45px] border border-white/0 group-hover:border-[#e63c3c]/20 transition-all duration-700 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center space-y-5">
          <div className="space-y-2">
            <p className="text-gray-400 text-lg font-medium italic leading-snug px-2 group-hover:text-white transition-colors duration-500">{t.text}</p>
          </div>
        </div>

        <div className="relative z-10 text-center">
          <div className="w-6 h-[2px] bg-[#e63c3c] mx-auto mb-4 scale-x-100 group-hover:scale-x-[2.5] transition-transform duration-500" />
          <h6 className="text-white text-lg font-black uppercase tracking-[3px]">{t.name}</h6>
          <p className="text-[#e63c3c] text-sm font-bold uppercase tracking-[1.5px] mt-1">{t.role}</p>
          <p className="text-gray-500 text-xs font-medium uppercase tracking-[1px] mt-1">{t.location}</p>
        </div>

        {/* Premium Glass Shimmer Effect */}
        <div className="absolute inset-0 rounded-[45px] overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
        </div>
      </div>
    </div>
  );

  return (
    <section id="team" className=" py-24 px-6 relative overflow-hidden">
      <div className="max-w-[95%] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 text-left group">
          <h2 className="text-white text-5xl md:text-6xl font-black uppercase italic tracking-tighter transition-all duration-700 hover:tracking-normal">
            Elite <span className="text-[#e63c3c] relative inline-block">Partners</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#e63c3c] mt-4 shadow-[0_0_20px_#e63c3c] animate-pulse transition-all duration-500 group-hover:w-96" />
        </div>

        {/* CEO Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">
          {members.map((m, i) => (
            <div key={i} className="group relative flex flex-col md:flex-row bg-[#0a0a0a] rounded-[40px] border border-white/5 overflow-hidden transition-all duration-700 hover:border-[#e63c3c]/30">
              <div className="w-full md:w-2/5 h-[350px] md:h-auto overflow-hidden">
                <img src={m.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="" />
              </div>
              <div className="w-full md:w-3/5 p-10 flex flex-col justify-center">
                <h4 className="text-white font-black italic text-3xl uppercase group-hover:text-[#e63c3c]">{m.name}</h4>
                <p className="text-[#e63c3c] text-[10px] font-black uppercase tracking-[4px] mt-2 mb-4">Executive Board</p>
                <p className="text-gray-400 text-sm italic leading-relaxed">"{m.bio}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {[
            { val: "85+", label: "Expert Members", icon: "◈" },
            { val: "18", label: "Global Offices", icon: "⬢" },
            { val: "40+", label: "Design Awards", icon: "✦" },
            { val: "96%", label: "Client Success", icon: "★" }
          ].map((stat, i) => (
            <div key={i} className="relative p-5 rounded-[20px] bg-zinc-900/30 border border-white/5 overflow-hidden group hover:bg-zinc-900/50 transition-all min-h-[145px]">
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-[#e63c3c]/10 rounded-full blur-xl group-hover:scale-[2.6] transition-transform duration-700" />
              <div className="relative z-10 flex flex-col items-center">
                <span className="text-[#e63c3c] text-xl mb-1 group-hover:animate-bounce">{stat.icon}</span>
                <h5 className="text-white text-3xl font-black italic tracking-tighter group-hover:scale-110 duration-500">{stat.val}</h5>
                <p className="text-zinc-500 text-[9px] uppercase font-bold tracking-[1.5px] mt-1">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Client Voices Heading */}
        <div className="mb-16 text-left group">
          <h2 className="text-white text-5xl md:text-6xl font-black uppercase italic tracking-tighter transition-all duration-700 hover:tracking-normal">
            Client <span className="text-[#e63c3c] relative inline-block">Voices</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#e63c3c] mt-4 shadow-[0_0_20px_#e63c3c] animate-pulse transition-all duration-500 group-hover:w-96" />
        </div>

        {/* --- DUAL DIRECTION DYNAMIC CAROUSEL --- */}
        <div className="relative w-full space-y-12 py-10">
          {/* Row 1: Right to Left */}
          <div className="flex w-[200%] gap-10 animate-scroll-left">
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={`left-${i}`} t={t} />
            ))}
          </div>

          {/* Row 2: Left to Right */}
          <div className="flex w-[200%] gap-10 animate-scroll-right">
            {[...testimonials, ...testimonials].reverse().map((t, i) => (
              <TestimonialCard key={`right-${i}`} t={t} />
            ))}
          </div>
        </div>

        {/* Contact Form Access Header */}
        <div className="mt-32 mb-16 text-left group">
          <h2 className="text-white text-5xl md:text-6xl font-black uppercase italic tracking-tighter transition-all duration-700 hover:tracking-normal">
            Direct <span className="text-[#e63c3c] relative inline-block">Access</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#e63c3c] mt-4 shadow-[0_0_20px_#e63c3c] animate-pulse transition-all duration-500 group-hover:w-96" />
        </div>

        {/* Contact Form UI */}
        <div className="group relative max-w-6xl mx-auto min-h-[500px] rounded-[50px] bg-[#050505] border border-white/5 overflow-hidden transition-all duration-700 hover:scale-[1.01] hover:border-[#e63c3c]/30 hover:shadow-[0_0_80px_rgba(230,60,60,0.15)]">
          <div className="absolute top-0 -left-20 w-80 h-80 bg-[#e63c3c]/10 rounded-full blur-[120px] group-hover:bg-[#e63c3c]/25 transition-all duration-700" />
          <div className="absolute bottom-0 -right-20 w-96 h-96 bg-[#8b0000]/10 rounded-full blur-[150px] group-hover:bg-[#8b0000]/20 transition-all duration-700" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full">
            <div className="p-10 lg:p-14 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
              <div className="space-y-6">
                <span className="inline-block text-[10px] font-black uppercase tracking-[6px] text-[#e63c3c] border border-[#e63c3c]/30 px-6 py-2 rounded-full animate-pulse">Direct Channel</span>
                <h3 className="text-4xl md:text-6xl font-black text-white italic uppercase leading-[0.9] tracking-tighter transition-transform group-hover:translate-x-2">
                  Let's <br /> <span className="text-transparent stroke-text">Discuss</span> <br /> 
                  <span className="text-[#e63c3c]">Success.</span>
                </h3>
                <p className="text-zinc-500 text-xs max-w-sm font-medium leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">
                  Drop your details and project vision. Our elite strategy team will reach out within 12 hours.
                </p>
              </div>
            </div>

            <div id="contact" className="p-8 lg:p-14 bg-gradient-to-br from-white/[0.01] to-transparent">
              <form action="https://formspree.io/f/aapki_id" method="POST" className="space-y-6">
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
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .stroke-text { -webkit-text-stroke: 1px rgba(255,255,255,0.2); }
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scroll-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-scroll-left { animation: scroll-left 45s linear infinite; }
        .animate-scroll-right { animation: scroll-right 45s linear infinite; }
        .animate-scroll-left:hover, .animate-scroll-right:hover { animation-play-state: paused; }
      `}} />
    </section>
  );
};

export default Team;