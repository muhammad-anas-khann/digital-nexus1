import React from 'react';
import Reveal from "./Reveal";

const Service = () => {

  const ServiceCard = ({ id, title, desc, tags, popular, image, iconColor }) => (
    <div className="group relative flex flex-col w-full h-[450px] rounded-[40px] bg-[#0f0f0f] border border-white/10 overflow-hidden transition-all duration-500 hover:border-[#e63c3c]/50 hover:shadow-[0_0_50px_rgba(230,60,60,0.15)]">
      
      {/* Background Glow Effect */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#e63c3c]/10 blur-[80px] group-hover:bg-[#e63c3c]/20 transition-all duration-700" />

      {/* Image Section with Overlay */}
      <div className="relative w-full h-44 overflow-hidden">
        <img 
          src={image || "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=500"} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
          alt={title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/40 to-transparent" />
        
        {popular && (
          <div className="absolute top-5 left-5 px-4 py-1.5 bg-[#e63c3c] text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(230,60,60,0.5)] z-20">
            Most Wanted
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow relative">
        {/* Floating ID */}
        <span className="absolute top-2 right-8 text-6xl font-outline-2 font-black text-white/5 group-hover:text-white/10 transition-all duration-700 select-none">
          {id}
        </span>

        {/* Icon / Bullet */}
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 group-hover:border-[#e63c3c]/40 transition-all duration-500 bg-gradient-to-br from-white/5 to-transparent`}>
           <div className={`w-3 h-3 rounded-full bg-[#e63c3c] shadow-[0_0_15px_#e63c3c] animate-pulse`} />
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform duration-500">
          {title}
        </h3>

        <p className="text-gray-400 text-xs leading-relaxed mb-6">
          {desc}
        </p>

        {/* Dynamic Tags */}
        <div className="flex flex-wrap gap-2 mt-auto mb-6">
          {tags.map((tag, i) => (
            <span key={i} className="text-[9px] font-medium text-white/60 px-3 py-1.5 bg-white/5 rounded-full border border-white/5 group-hover:border-[#e63c3c]/20 transition-all">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <div className="flex items-center gap-3 text-[#e63c3c] text-[11px] font-bold uppercase tracking-widest cursor-pointer group/link">
          Get This Design
          <div className="w-8 h-[1px] bg-[#e63c3c]/30 group-hover/link:w-12 transition-all duration-500"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="services" className="py-24 bg-[#050505] relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#e63c3c] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-30" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <Reveal>
            <div className="space-y-4">
              <span className="text-[#e63c3c] font-bold tracking-[0.3em] uppercase text-xs">Premium Solutions</span>
              <h2 className="text-white text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter">
                Dream <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e63c3c] to-[#ff8080]">Designs.</span>
              </h2>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="max-w-md text-right">
              <p className="text-gray-400 text-lg leading-relaxed">
                We craft <span className="text-white font-semibold">AI-powered, fully functional</span> websites at prices that make sense. High-end aesthetics meets intelligence.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Feature Banner */}
        <Reveal>
          <div className="relative w-full h-[500px] rounded-[50px] overflow-hidden mb-12 group border border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1500" 
              alt="AI Technology"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[2s]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent flex items-center p-12">
              <div className="max-w-xl space-y-6">
                <div className="inline-block px-4 py-1 border border-[#e63c3c] text-[#e63c3c] text-[10px] font-bold rounded-full uppercase">Next Gen Agency</div>
                <h3 className="text-white text-4xl md:text-5xl font-black leading-tight italic">
                  WE BUILD WEBSITES THAT <span className="text-[#e63c3c]">THINK</span> AND EVOLVE.
                </h3>
                <p className="text-gray-300">Har design me AI ki taqat aur aapke sapno ki jhalak hogi. Fully responsive and ready to launch.</p>
                <button className="px-8 py-4 bg-[#e63c3c] text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(230,60,60,0.5)] transition-all active:scale-95 uppercase text-xs tracking-widest">
                  Start Your Journey →
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <Reveal delay={100}>
            <ServiceCard 
              id="01" 
              popular 
              title="AI Web Systems" 
              desc="Full-scale websites integrated with smart AI behaviors and custom automation." 
              tags={["Auto-Scaling", "AI Integration", "React"]}
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500"
            />
          </Reveal>

          <Reveal delay={200}>
            <ServiceCard 
              id="02" 
              title="Dream UI/UX" 
              desc="Bespoke user interfaces designed to convert visitors into loyal customers." 
              tags={["Modern UI", "Figma", "User Flow"]}
              image="https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=500"
            />
          </Reveal>

          <Reveal delay={300}>
            <div className="group relative flex flex-col items-center justify-center text-center p-10 rounded-[40px] bg-gradient-to-b from-[#e63c3c] to-[#991b1b] overflow-hidden min-h-[450px]">
              {/* Animated Rings */}
              <div className="absolute w-64 h-64 border border-white/20 rounded-full animate-[ping_3s_linear_infinite]" />
              <div className="absolute w-48 h-48 border border-white/40 rounded-full animate-[ping_2s_linear_infinite]" />
              
              <h3 className="text-4xl font-black text-white italic uppercase mb-6 leading-none relative z-10">
                Ready to <br /> Go Live?
              </h3>
              <p className="text-white/80 text-sm mb-8 relative z-10">
                Aapke budget me, aapke liye behtareen digital ghar.
              </p>
              <button className="px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-black hover:text-white transition-all transform hover:-translate-y-2 shadow-2xl relative z-10 uppercase text-[10px] tracking-widest">
                Check Pricing Plan
              </button>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <ServiceCard 
              id="03" 
              title="Brand Identity" 
              desc="Digital-first branding that makes your company stand out in a crowded market." 
              tags={["Logo", "Guidelines", "Socials"]}
              image="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=500"
            />
          </Reveal>

          <Reveal delay={500}>
            <ServiceCard 
              id="04" 
              title="SEO Dominance" 
              desc="Not just a website, but a ranking machine built with the latest SEO standards." 
              tags={["Speed", "Keywords", "Rank"]}
              image="https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?q=80&w=500"
            />
          </Reveal>

          <Reveal delay={600}>
            <ServiceCard 
              id="05" 
              title="24/7 Support" 
              desc="Dedicated maintenance and support to keep your digital asset running forever." 
              tags={["Maintenance", "Cloud", "Security"]}
              image="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=500"
            />
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default Service;