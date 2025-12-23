import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-slate-950">
      <div className="glow-effect w-[600px] h-[600px] bg-blue-600/10 top-1/2 left-0 -translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-indigo-500 font-bold tracking-widest uppercase text-sm mb-6">About us</h2>
        <h3 className="text-3xl md:text-4xl font-semibold text-slate-300 mb-8 italic">We are the Nth Senze</h3>
        
        <div className="space-y-12">
          <h4 className="text-4xl md:text-7xl font-extrabold leading-tight text-white tracking-tight">
            A brand is not just seen or heard. <span style={{ color: '#009CFF' }}>It's felt.</span>
          </h4>
          
          <p className="text-lg md:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            At the Nth Senze, we bring together strategy, creativity, and instinct to help brands communicate in ways that move people, not just metrics.
          </p>
          
          <div className="pt-8">
            <button className="neon-button bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent -translate-x-1/2 pointer-events-none" />
    </section>
  );
};

export default About;