import React from 'react';
import Reveal from "./Reveal";
import { 
  FaEnvelope, 
  FaPhoneFlip, 
  FaLocationDot, 
  FaArrowRightLong,
  FaLinkedinIn, 
  FaInstagram, 
  FaTwitter 
} from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden text-white">
      
      {/* Background Aesthetic Blur */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#e63c3c]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#e63c3c]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="mb-20 text-center md:text-left">
          <Reveal>
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <div className="w-12 h-[2px] bg-[#e63c3c]" />
              <span className="text-[#e63c3c] font-black uppercase tracking-[5px] text-[10px]">Get in touch</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black uppercase italic leading-[0.9] tracking-tighter">
              READY TO <br /> <span className="text-transparent border-text">COLLABORATE?</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE: CONTACT INFO (4 Columns) */}
          <div className="lg:col-span-4 space-y-10">
            <Reveal delay={0.2}>
              <div className="space-y-8">
                <div className="group flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#e63c3c] group-hover:border-[#e63c3c] transition-all duration-500">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">Email Us</p>
<a href="mailto:digitalnexus.2326@gmail.com">
  <h4 className="text-lg font-bold group-hover:text-[#e63c3c] transition-colors">
    digitalnexus.2326@gmail.com
  </h4>
</a>                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#e63c3c] group-hover:border-[#e63c3c] transition-all duration-500">
                    <FaPhoneFlip className="text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">Call Us</p>
                    <h4 className="text-lg font-bold group-hover:text-[#e63c3c] transition-colors">+92 312 456 7890</h4>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#e63c3c] group-hover:border-[#e63c3c] transition-all duration-500">
                    <FaLocationDot className="text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">Visit Us</p>
                    <h4 className="text-lg font-bold group-hover:text-[#e63c3c] transition-colors italic">Sector T-Maymar, Karachi</h4>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-10 flex gap-4">
                {[FaLinkedinIn, FaInstagram, FaTwitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500">
                    <Icon />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT SIDE: CONTACT FORM (8 Columns) */}
          <div className="lg:col-span-8 bg-[#0a0a0a] border border-white/5 rounded-[40px] p-8 md:p-12 relative overflow-hidden group hover:border-[#e63c3c]/30 transition-all duration-700">
            {/* Glow effect for form */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#e63c3c]/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <form className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#e63c3c]">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#e63c3c] transition-all text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#e63c3c]">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#e63c3c] transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#e63c3c]">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#e63c3c] transition-all text-sm appearance-none cursor-pointer">
                  <option className="bg-black">UI/UX Design</option>
                  <option className="bg-black">Web Development</option>
                  <option className="bg-black">Digital Marketing</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#e63c3c]">Your Message</label>
                <textarea 
                  rows="5" 
                  placeholder="Tell us about your project..." 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#e63c3c] transition-all text-sm resize-none"
                />
              </div>

              <button className="group/btn w-full md:w-auto px-10 py-5 bg-[#e63c3c] rounded-2xl flex items-center justify-center gap-4 font-black uppercase italic tracking-tighter hover:bg-white hover:text-black transition-all duration-500 overflow-hidden relative">
                <span className="relative z-10">Send Message</span>
                <FaArrowRightLong className="relative z-10 group-hover/btn:translate-x-2 transition-transform duration-500" />
              </button>
            </form>
          </div>

        </div>
      </div>

      <style jsx>{`
        .border-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
        }
        input::placeholder, textarea::placeholder {
          color: rgba(255,255,255,0.2);
        }
      `}</style>
    </section>
  );
};

export default Contact;