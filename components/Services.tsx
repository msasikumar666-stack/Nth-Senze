import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="solutions" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 text-center">
          <h2 className="text-indigo-500 font-bold tracking-[0.2em] uppercase text-xs mb-4">Our Service</h2>
          <h3 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">What do we Provide</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative p-10 rounded-[2.5rem] bg-slate-900/40 border border-white/5 transition-all duration-700 hover:-translate-y-3 hover:border-indigo-500/40 overflow-hidden"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500/20 via-blue-500/20 to-purple-500/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-indigo-500/10 flex items-center justify-center text-4xl mb-8 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(79,70,229,0)] group-hover:shadow-[0_0_40px_rgba(79,70,229,0.3)]">
                  <span className="filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{service.icon}</span>
                </div>
                
                <h4 className="text-3xl font-bold mb-5 text-white group-hover:text-indigo-200 transition-colors tracking-tight">
                  {service.title}
                </h4>
                
                <p className="text-slate-400 text-lg leading-relaxed mb-10 group-hover:text-slate-300 transition-colors">
                  {service.description}
                </p>
                
                <div className="flex items-center space-x-3 text-indigo-400 font-bold group-hover:text-white transition-all duration-300 cursor-pointer">
                  <span className="text-sm uppercase tracking-widest">Learn more</span>
                  <div className="w-8 h-px bg-indigo-400/30 group-hover:w-12 group-hover:bg-white transition-all duration-500" />
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-indigo-500/20 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;