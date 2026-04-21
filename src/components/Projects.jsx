import React from 'react';
import Reveal from "./Reveal";

const Projects = () => {
  const projectData = [
    { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500", title: "E-Commerce AI" },
    { url: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=500", title: "Brand Identity" },
    { url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=500", title: "Cyber Security" },
    { url: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=500", title: "UI System" },
    { url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500", title: "Dev Portfolio" },
    { url: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=500", title: "Cloud App" },
  ];

  return (
<section id="projects" className="py-32 bg-[#050505] overflow-hidden relative">
      
      {/* Decorative Blur background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#e63c3c]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1500px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-28">
          <Reveal>
            <span className="text-[#e63c3c] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Portfolio Exhibition</span>
            <h2 className="text-white text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
              Delivered <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e63c3c] to-[#ff8080]">Projects.</span>
            </h2>
          </Reveal>
        </div>

        {/* 3D Carousel Wrapper */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center perspective-[2000px]">
          
          <div className="carousel-container relative w-[280px] h-[380px] md:w-[400px] md:h-[250px]">
            {projectData.map((project, index) => (
              <div 
                key={index}
                className="absolute inset-0 rounded-[30px] overflow-hidden border border-white/10 group cursor-pointer bg-[#0f0f0f] shadow-2xl transition-all duration-500 hover:border-[#e63c3c]/50 hover:shadow-[0_0_30px_rgba(230,60,60,0.2)]"
                style={{
                  transform: `rotateY(${index * (360 / projectData.length)}deg) translateZ(450px)`,
                  backfaceVisibility: 'hidden'
                }}
              >
                {/* Image */}
                <img 
                  src={project.url} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0" 
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[#e63c3c] text-[10px] font-black uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity">Live Preview</p>
                  <h3 className="text-white text-xl md:text-2xl font-black italic uppercase leading-none">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Helper Text */}
        <div className="mt-20 text-center">
            <p className="text-gray-600 text-[10px] uppercase tracking-[5px] animate-pulse">Hover to pause • Drag to explore</p>
        </div>

      </div>

      {/* Global CSS for 3D Animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        .perspective-[2000px] {
          perspective: 2000px;
        }
        .carousel-container {
          transform-style: preserve-3d;
          animation: rotate3d 20s linear infinite;
        }
        .carousel-container:hover {
          animation-play-state: paused;
        }
        @keyframes rotate3d {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        
        /* Mobile adjustment for translateZ */
        @media (max-width: 768px) {
          .carousel-container {
             transform: scale(0.7);
          }
        }
      `}} />
    </section>
  );
};

export default Projects;