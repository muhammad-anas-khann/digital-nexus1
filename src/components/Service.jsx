import React from 'react';
import Reveal from "./Reveal";

const Service = () => {

  const ServiceCard = ({ id, title, desc, tags, popular, image }) => (
    <div className="group relative flex flex-col w-full h-[400px] rounded-[30px] bg-[#795050] border border-white/5 overflow-hidden transition-all duration-700 hover:border-[#e63c3c]/50 hover:shadow-[0_0_40px_rgba(230,60,60,0.2)]">
      
      {/* Image */}
      <div className="relative w-full h-40 overflow-hidden">
        <img 
          src={image || "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=500"} 
          className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" 
          alt={title} 
        />
        {popular && (
          <span className="absolute top-4 right-4 px-3 py-1 bg-[#00f2ea]/20 text-[#00f2ea] text-[9px] font-bold uppercase rounded-full border border-[#00f2ea]/30 z-20">
            Popular
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-grow relative">
        <span className="absolute -top-4 right-8 text-7xl font-black text-white/5 group-hover:text-[#e63c3c]/10 transition-all duration-700 italic">
          {id}
        </span>

        <div className="w-10 h-10 rounded-lg bg-[#e63c3c]/10 flex items-center justify-center mb-4 border border-[#e63c3c]/20 group-hover:rotate-[360deg] transition-transform duration-1000">
          <div className="w-2.5 h-2.5 bg-[#e63c3c] rounded-sm shadow-[0_0_15px_#e63c3c]" />
        </div>

        <h3 className="text-xl font-bold text-white mb-2 italic group-hover:text-[#e63c3c] transition-colors uppercase">
          {title}
        </h3>

        <p className="text-gray-400 text-[11px] leading-relaxed mb-4 line-clamp-2">
          {desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto mb-6">
          {tags.map((tag, i) => (
            <span key={i} className="text-[9px] font-bold text-zinc-500 px-3 py-1 bg-white/5 rounded-md border border-white/5 uppercase">
              ✓ {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest group/btn">
          Discover More 
          <span className="text-[#e63c3c] group-hover/btn:translate-x-2 transition-transform">
            →
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="services" className="py-20 px-6 overflow-hidden">
      <div className="max-w-[95%] mx-auto relative">

        {/* Heading */}
        <Reveal>
          <div className="mb-16 text-left group">
            <h2 className="text-white text-5xl md:text-6xl font-black uppercase italic tracking-tighter transition-all duration-700 hover:tracking-normal cursor-default">
              Our <span className="text-[#e63c3c]">Services</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#e63c3c] mt-4 shadow-[0_0_20px_#e63c3c] animate-pulse transition-all duration-500 group-hover:w-96" />
          </div>
        </Reveal>

        {/* Feature Section */}
        <div className="flex flex-col lg:flex-row items-center gap-22 mb-32">

          <Reveal>
            <div className="w-full lg:w-full h-[450px] rounded-[40px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(230,60,60,0.1)]">
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop" 
                alt="Digital Workspace"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="w-full lg:w-full text-left space-y-6">
              <h1 className="text-4xl md:text-5xl font-black text-white uppercase italic leading-none tracking-tighter">
                Defining the <span className="text-[#e63c3c]">Digital Frontier</span> with Precision.
              </h1>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl font-medium">
                We don't just build websites; we engineer digital experiences that dominate the market.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-[1px] bg-[#e63c3c]"></div>
                <span className="text-[#e63c3c] text-[10px] font-black uppercase tracking-[4px]">
                  Elite Agency Standard
                </span>
              </div>
            </div>
          </Reveal>

        </div>

        {/* Projects Heading */}
        <Reveal>
          <div className="mb-16 text-left group">
            <h2 className="text-white text-5xl md:text-6xl font-black uppercase italic tracking-tighter transition-all duration-700 hover:tracking-normal cursor-default">
              Our <span className="text-[#e63c3c]">Projects</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#e63c3c] mt-4 shadow-[0_0_20px_#e63c3c] animate-pulse transition-all duration-500 group-hover:w-96" />
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-8 items-stretch">

          {/* Left */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <Reveal>
              <ServiceCard id="01" popular title="Visual Branding" desc="Tailored visual identities that speak your brand's language." tags={["Logo","Strategy"]} />
            </Reveal>

            <Reveal delay={100}>
              <ServiceCard id="02" title="UI/UX Crafting" desc="Intuitive design systems for seamless user journeys." tags={["Wireframing","UI"]} />
            </Reveal>

            <Reveal delay={200}>
              <ServiceCard id="03" title="Web Dev" desc="High performance React applications with modern architecture." tags={["React","Vite"]} />
            </Reveal>

            <Reveal delay={300}>
              <ServiceCard id="04" title="Mobile Apps" desc="Cross-platform solutions for iOS and Android systems." tags={["Native","Hybrid"]} />
            </Reveal>

          </div>

          {/* Right */}
          <div className="flex flex-col gap-8">
            
            <Reveal>
              <ServiceCard id="05" title="SEO Analytics" desc="Data driven growth strategies for digital dominance." tags={["Data","SEO"]} />
            </Reveal>

            <Reveal delay={150}>
              <div className="group relative flex-grow p-10 rounded-[30px] bg-gradient-to-br from-[#e63c3c] to-[#500000] flex flex-col items-center justify-center text-center overflow-hidden min-h-[300px]">
                <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />
                
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-b-white transform -rotate-45" />
                </div>

                <h3 className="text-3xl font-black text-white italic uppercase leading-none">
                  Transform <br/> Vision
                </h3>

                <button className="mt-8 w-full py-4 bg-white text-black font-black rounded-2xl text-[11px] uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-xl active:scale-95">
                  Launch Project →
                </button>
              </div>
            </Reveal>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Service;