import React, { useEffect, useRef, useState } from 'react';

const OPPORTUNITIES = [
  {
    title: "Market Resonance",
    desc: "The digital landscape is shifting. Brands that fail to innovate become background noise. We help you find the frequency where your audience is already listening.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Future-Proofing",
    desc: "From spatial computing to neural marketing, the tools of tomorrow are available today. We integrate these technologies before they become the standard.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Brand Sovereignty",
    desc: "Stop competing on price and start competing on legacy. We build autonomous brand worlds that dictate their own rules and command attention.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  }
];

const Opportunity: React.FC = () => {
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-12">
            <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs mb-6">Unclaimed Space</h2>
              <h3 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter">
                The <br /> 
                <span style={{ color: '#009CFF' }} className="italic">Opportunity.</span>
              </h3>
            </div>

            <div className="space-y-10">
              {OPPORTUNITIES.map((item, idx) => (
                <div 
                  key={idx}
                  className={`flex gap-6 group transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                  style={{ transitionDelay: `${idx * 200}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all duration-500">
                    {item.icon}
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">{item.title}</h4>
                    <p className="text-slate-400 leading-relaxed text-sm md:text-base max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className={`pt-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <button className="light-glow-button px-10 py-5 rounded-full text-white font-bold text-sm uppercase tracking-[0.3em] active:scale-95 group relative overflow-hidden border-amber-500/30">
                <span className="relative z-10">Seize the Future</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className={`relative aspect-[4/5] rounded-[3.5rem] overflow-hidden border border-white/10 group transition-all duration-[2000ms] ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
              <img 
                src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200" 
                alt="Growth and Opportunity" 
                className="w-full h-full object-cover grayscale transition-all duration-[3000ms] group-hover:grayscale-0 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
              <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-black font-black">!</div>
                  <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Urgent Market Signal</p>
                </div>
                <p className="text-white font-bold text-lg leading-snug">
                  The window of "Unique Brand Resonance" is closing for most industries. The time to pivot is now.
                </p>
              </div>

              <div className="absolute top-12 right-12 flex flex-col items-end gap-2">
                <div className="h-px w-24 bg-gradient-to-r from-transparent to-amber-500" />
                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.3em]">H0-R1Z0N 2025</span>
              </div>
            </div>

            <div className="absolute -inset-4 bg-amber-500/20 blur-[100px] -z-10 group-hover:opacity-40 transition-opacity duration-1000 opacity-0" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Opportunity;