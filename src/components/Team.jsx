import React, { useState } from 'react';
import Reveal from "./Reveal";
import { FaArrowRight, FaCheckCircle, FaCircleNotch } from "react-icons/fa";

const Team = () => {
  // Form State
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulating API call
    setTimeout(() => {
      setStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setStatus('idle'), 4000);
    }, 2500);
  };

  return (
    <section id="contact" className="py-32 bg-[#050505] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e63c3c]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="mb-20">
          <Reveal>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-[1px] bg-[#e63c3c]" />
              <span className="text-[#e63c3c] font-black tracking-[8px] uppercase text-[10px]">Transmission Start</span>
            </div>
            <h2 className="text-white text-6xl md:text-9xl font-black uppercase italic leading-[0.8] tracking-tighter">
              LET'S <br /> <span className="text-transparent stroke-white opacity-20">SYNC.</span>
            </h2>
          </Reveal>
        </div>

        {/* --- MAIN CONTACT INTERFACE --- */}
        <div className="relative group min-h-[600px] rounded-[60px] bg-[#0a0a0a] border border-white/5 overflow-hidden shadow-2xl">
          
          {/* Animated Scanning Line (Hover Effect) */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#e63c3c] to-transparent opacity-0 group-hover:opacity-100 group-hover:top-full transition-all duration-[3s] ease-in-out" />

          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            
            {/* Left Side: Brand & Status */}
            <div className="p-12 md:p-20 flex flex-col justify-between bg-white/[0.01] border-b lg:border-b-0 lg:border-r border-white/5">
              <div className="space-y-8">
                <h3 className="text-white text-5xl md:text-7xl font-black uppercase italic leading-none">
                  START <br /> THE <span className="text-[#e63c3c]">PROTOCOL.</span>
                </h3>
                <p className="text-zinc-500 text-lg max-w-sm font-medium leading-relaxed italic">
                  Drop your coordinates. Our elite strategy team will initiate contact within 12 cycles.
                </p>
              </div>

              {/* Status Indicators */}
              <div className="space-y-6 pt-10">
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${status === 'success' ? 'bg-green-500 shadow-[0_0_15px_green]' : 'bg-[#e63c3c] shadow-[0_0_15px_red] animate-pulse'}`} />
                  <span className="text-white text-[10px] font-black uppercase tracking-[4px]">
                    {status === 'idle' ? 'System Ready' : status === 'loading' ? 'Encrypting Data...' : 'Connection Established'}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2 h-1 w-full max-w-[200px]">
                   {[1,2,3,4].map(i => (
                     <div key={i} className={`h-full ${status === 'success' ? 'bg-green-500' : 'bg-white/10'} transition-colors duration-500`} />
                   ))}
                </div>
              </div>
            </div>

            {/* Right Side: The Terminal Form */}
            <div className="p-12 md:p-20 relative">
              <form onSubmit={handleSubmit} className={`space-y-12 transition-all duration-700 ${status === 'success' ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
                
                {/* Custom Input Field */}
                {['Initiator Name', 'Digital Address', 'Project Scope'].map((label, idx) => (
                  <div key={idx} className="relative group/field">
                    <input 
                      required 
                      type={idx === 1 ? 'email' : 'text'}
                      className="w-full bg-transparent border-b-2 border-white/10 py-4 text-white text-2xl font-bold outline-none focus:border-[#e63c3c] transition-all peer" 
                      placeholder=" " 
                    />
                    <label className="absolute left-0 top-4 text-zinc-600 text-xs font-black uppercase tracking-[4px] pointer-events-none transition-all peer-focus:-top-6 peer-focus:text-[#e63c3c] peer-[:not(:placeholder-shown)]:-top-6">
                      {label}
                    </label>
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#e63c3c] transition-all duration-500 group-hover/field:w-full" />
                  </div>
                ))}

                {/* Submit Button with States */}
                <button 
                  disabled={status !== 'idle'}
                  className={`relative w-full h-24 overflow-hidden rounded-3xl transition-all duration-500 flex items-center justify-center gap-4 group/btn ${status === 'loading' ? 'bg-[#e63c3c]' : 'bg-white hover:bg-[#e63c3c]'}`}
                >
                  <div className="absolute inset-0 bg-[#e63c3c] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                  
                  <span className={`relative z-10 text-xs font-black uppercase tracking-[8px] transition-colors duration-500 ${status === 'loading' ? 'text-white' : 'text-black group-hover/btn:text-white'}`}>
                    {status === 'loading' ? 'Processing...' : 'Execute Mission'}
                  </span>
                  
                  {status === 'loading' ? (
<FaCircleNotch className="animate-spin text-white relative z-10" />
                  ) : (
                    <FaArrowRight className={`relative z-10 transition-all group-hover/btn:translate-x-2 ${status === 'loading' ? 'text-white' : 'text-black group-hover/btn:text-white'}`} />
                  )}
                </button>
              </form>

              {/* Success Message Overlay */}
              <div className={`absolute inset-0 flex flex-col items-center justify-center p-12 text-center transition-all duration-700 ${status === 'success' ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'}`}>
                <div className="w-24 h-24 rounded-full bg-green-500/10 border border-green-500/50 flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(34,197,94,0.2)]">
                  <FaCheckCircle className="text-green-500 text-5xl animate-bounce" />
                </div>
                <h4 className="text-white text-4xl font-black uppercase italic mb-4">Transmission Success</h4>
                <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest leading-relaxed">
                  Project files received. <br /> Security protocols verified. <br /> Expect contact soon.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-10 text-[#e63c3c] text-[10px] font-black uppercase tracking-[4px] hover:underline"
                >
                  New Transmission?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .stroke-white { -webkit-text-stroke: 1px white; }
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus {
          -webkit-text-fill-color: white;
          -webkit-box-shadow: 0 0 0px 1000px #0a0a0a inset;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}} />
    </section>
  );
};

export default Team;