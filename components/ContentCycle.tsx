import React, { useEffect, useRef, useState } from 'react';

const CYCLE_STEPS = [
  {
    id: 1,
    title: "Long Form Asset",
    description: "The pillar of your strategy. High-fidelity cinematic films, documentaries, or deep-dive educational content that establishes authority.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    accent: "indigo"
  },
  {
    id: 2,
    title: "Cutdowns",
    description: "Multi-platform optimization. We extract the most resonant moments for YouTube Shorts, LinkedIn highlights, and strategic teaser campaigns.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758L5 19m0-14l4.121 4.121" />
      </svg>
    ),
    accent: "blue"
  },
  {
    id: 3,
    title: "Ads / UGC",
    description: "Conversion-centric creative. Transforming assets into high-performance social proof and authentic user-style visuals that drive measurable ROI.",
    image: "https://images.unsplash.com/photo-1551288560-12961f7c2d4c?auto=format&fit=crop&q=80&w=800",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    accent: "purple"
  },
  {
    id: 4,
    title: "Reels / Carousels",
    description: "Daily brand frequency. Micro-narratives and sensory-rich carousels that maintain consistent engagement and top-of-mind awareness.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10l3 3 3-3" />
      </svg>
    ),
    accent: "cyan"
  }
];

const ContentCycle: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden bg-slate-950">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] pointer-events-none opacity-20">
        <svg className="w-full h-full animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100">
          <circle 
            cx="50" cy="50" r="48" 
            fill="none" 
            stroke="url(#cycleGradient)" 
            strokeWidth="0.1" 
            strokeDasharray="1 3"
          />
          <defs>
            <linearGradient id="cycleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-indigo-500 font-bold tracking-[0.3em] uppercase text-xs mb-6">Omni-Channel Flow</h2>
          <h3 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter">
            Content Cycle <br /> 
            <span style={{ color: '#009CFF' }} className="italic">Management.</span>
          </h3>
          <p className="mt-8 text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            We don't just produce assets; we manage their entire lifecycle to ensure every second of production works 10x harder for your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {CYCLE_STEPS.map((step, idx) => (
            <div 
              key={step.id}
              className={`group relative flex flex-col transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="relative h-full flex flex-col rounded-[2.5rem] bg-slate-900/50 border border-white/5 p-8 overflow-hidden transition-all duration-500 hover:border-white/20 hover:-translate-y-2">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                    {step.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">Stage 0{step.id}</span>
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-slate-950 transition-all">
                      <svg className="w-4 h-4 transform group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className={`absolute -bottom-10 -right-10 w-32 h-32 blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 ${
                  step.accent === 'indigo' ? 'bg-indigo-500' : 
                  step.accent === 'blue' ? 'bg-blue-500' : 
                  step.accent === 'purple' ? 'bg-purple-500' : 'bg-cyan-500'
                }`} />
              </div>

              {idx < 3 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                  <div className="w-6 h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 rounded-[3.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-3xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <h5 className="text-2xl font-bold text-white">Maximum Asset Efficiency</h5>
              <p className="text-slate-400 leading-relaxed">
                By implementing our Content Cycle Management, brands typically see a 300% increase in content frequency without additional filming days. One shoot, infinite possibilities.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-40 h-40">
                <div className="absolute inset-0 rounded-full border border-indigo-500/20 animate-[ping_3s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border border-purple-500/40 animate-[ping_4s_linear_infinite]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-4xl font-black text-white">10X</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Yield</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentCycle;