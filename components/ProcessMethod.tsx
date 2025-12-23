import React, { useEffect, useRef, useState } from 'react';

const METHODS = [
  {
    id: "01",
    title: "Decode",
    tagline: "Sensory Discovery",
    desc: "We start by dismantling the status quo. We analyze your brand's existing signals and decode the hidden emotional triggers of your audience through deep research and empathy mapping.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
    color: "indigo"
  },
  {
    id: "02",
    title: "Design",
    tagline: "Emotional Blueprinting",
    desc: "Visuals are only the surface. We design the frequency. This stage involves crafting visual systems, motion frameworks, and tonal guidelines that resonate on a visceral level.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
    color: "blue"
  },
  {
    id: "03",
    title: "Develop",
    tagline: "High-Fidelity Engineering",
    desc: "Bringing the vision to life with technical precision. We build robust digital products that maintain the 'feeling' across all devices, ensuring haptic-quality interactions.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    color: "purple"
  },
  {
    id: "04",
    title: "Deploy",
    tagline: "Ecosystem Integration",
    desc: "The launch is just the beginning. We deploy your brand into the market, orchestrating multi-channel activations that ensure your message lands with maximum impact.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    color: "cyan"
  },
  {
    id: "05",
    title: "Distill",
    tagline: "Continuous Refinement",
    desc: "The Nth sense evolves. We use real-time data and sensory feedback to distill insights, refining the experience to ensure long-term brand sovereignty and growth.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    color: "rose"
  }
];

const ProcessMethod: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;
      const progress = Math.min(Math.max((windowHeight/2 - rect.top) / totalHeight, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="process" className="py-32 relative bg-slate-950 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-40">
          <h2 className="text-indigo-500 font-bold tracking-[0.3em] uppercase text-xs mb-6">Execution Strategy</h2>
          <h3 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter">
            The Process & The <br /> 
            <span style={{ color: '#009CFF' }} className="italic">5-Step Nth Method.</span>
          </h3>
        </div>

        <div ref={containerRef} className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2 hidden lg:block">
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-indigo-500 via-purple-500 to-blue-500 transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
              style={{ height: `${scrollProgress * 100}%` }}
            />
            <div 
              className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_20px_white] transition-all duration-300 border-4 border-slate-950"
              style={{ top: `${scrollProgress * 100}%` }}
            />
          </div>

          <div className="space-y-40 lg:space-y-64">
            {METHODS.map((step, index) => (
              <div 
                key={step.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-32 relative`}
              >
                <div className="flex-1 w-full group relative">
                  <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden bg-slate-900 border border-white/5 transition-all duration-1000 group-hover:border-indigo-500/30">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                    
                    <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                      <p className="text-white font-bold text-lg">{step.tagline}</p>
                    </div>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                       <div className={`absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent`} />
                    </div>
                  </div>
                  
                  <div className={`absolute -top-12 ${index % 2 === 0 ? '-right-12' : '-left-12'} text-[12rem] font-black text-white/5 select-none leading-none z-[-1]`}>
                    {step.id}
                  </div>
                </div>

                <div className={`flex-1 space-y-8 text-center lg:text-left ${index % 2 === 0 ? 'lg:pl-10' : 'lg:pr-10'}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 justify-center lg:justify-start">
                      <span className="text-xs font-black text-indigo-500 tracking-[0.4em] uppercase">Step {step.id}</span>
                      <div className="h-px w-12 bg-indigo-500/30" />
                    </div>
                    <h4 className="text-6xl md:text-8xl font-black text-white tracking-tighter">
                      {step.title}
                    </h4>
                  </div>
                  
                  <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                    {step.desc}
                  </p>

                  <div className="pt-6">
                    <button className="flex items-center gap-4 mx-auto lg:mx-0 group/btn">
                      <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white group-hover/btn:bg-white group-hover/btn:text-slate-950 transition-all duration-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                      <span className="text-sm font-black uppercase tracking-[0.3em] text-white opacity-60 group-hover/btn:opacity-100 transition-opacity">Method Details</span>
                    </button>
                  </div>
                </div>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center">
                   <div className={`w-3 h-3 rounded-full bg-slate-950 border-2 border-white/20 transition-all duration-500 ${scrollProgress * 100 > (index * 20) + 10 ? 'scale-150 border-indigo-500 bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]' : ''}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-40 lg:mt-64">
           <div className="p-16 md:p-24 rounded-[4rem] bg-slate-900/40 border border-white/5 relative overflow-hidden group text-center">
              <div className="absolute inset-0 bg-indigo-600/5 blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <h5 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">Precision in every pulse.</h5>
                <p className="text-slate-400 text-lg mb-12">
                  The Nth Method isn't a linear path—it's a continuous cycle of creation and refinement designed to keep your brand ahead of the curve.
                </p>
                <button className="light-glow-button px-12 py-5 rounded-full text-white font-bold text-sm uppercase tracking-[0.3em] active:scale-95">
                  Request Methodology Deck
                </button>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessMethod;