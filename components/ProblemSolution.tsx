import React, { useRef } from 'react';

const CHALLENGES = [
  {
    id: 1,
    problemTitle: "Noise & Desensitization",
    problemDesc: "Modern brands are trapped in a cycle of shouting. Metrics are high, but connection is zero. Users see your logo, but they don't feel your soul.",
    solutionTitle: "The Sensory Bridge",
    solutionDesc: "We decode the Nth sense. Integrating sensory strategy into digital DNA to create experiences that resonate at a human level.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    accent: "red"
  },
  {
    id: 2,
    problemTitle: "The Ghost Brand",
    problemDesc: "Invisible in a crowded market. You have a great product, but your visual identity lacks the magnetic pull required to stop the scroll.",
    solutionTitle: "The Beacon Strategy",
    solutionDesc: "High-fidelity motion and distinctive brand codes that act as a lighthouse in the digital storm. We make you impossible to ignore.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    accent: "purple"
  },
  {
    id: 3,
    problemTitle: "Functional but Cold",
    problemDesc: "Interfaces that work perfectly but lack personality. Users complete tasks but forget the brand the moment they close the tab.",
    solutionTitle: "Emotional Utility",
    solutionDesc: "Micro-interactions, haptic-style animations, and tonal shifts that turn a 'tool' into a 'companion'. Logic meets pure emotion.",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800",
    accent: "blue"
  },
  {
    id: 4,
    problemTitle: "Static Narratives",
    problemDesc: "Storytelling that stays on the page. In an era of 3D and spatial computing, flat content feels like a relic of the past.",
    solutionTitle: "Immersive Echoes",
    solutionDesc: "Multi-dimensional content strategy that lives across platforms. We build worlds, not just websites, where users can truly explore.",
    image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=800",
    accent: "indigo"
  }
];

const ProblemSolution: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-slate-950">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-indigo-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">Core Philosophy</h2>
            <h3 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
              The Problem <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500 italic">is...</span>
            </h3>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-hide no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {CHALLENGES.map((item) => (
            <div 
              key={item.id}
              className="min-w-full md:min-w-[85%] lg:min-w-[70%] snap-center group"
            >
              <div className="relative rounded-[3.5rem] overflow-hidden bg-slate-900/40 border border-white/5 p-8 md:p-16 h-full flex flex-col lg:flex-row gap-12 transition-all duration-700 hover:border-white/20">
                
                <div className="flex-1 flex flex-col justify-between space-y-12">
                  <div className="space-y-10">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="w-10 h-px bg-red-500/50"></span>
                        <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Problem {item.id}</span>
                      </div>
                      <h4 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{item.problemTitle}</h4>
                      <p className="text-slate-400 text-lg leading-relaxed">{item.problemDesc}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="w-10 h-px bg-blue-500/50"></span>
                        <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">The Solution</span>
                      </div>
                      <h4 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 tracking-tight">
                        {item.solutionTitle}
                      </h4>
                      <p className="text-slate-300 text-lg leading-relaxed font-medium">{item.solutionDesc}</p>
                    </div>
                  </div>

                  <div className="pt-4">
                     <button className="flex items-center gap-4 text-white font-bold text-sm uppercase tracking-[0.2em] group/btn">
                        Learn Process
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-slate-950 transition-all duration-300">
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                           </svg>
                        </div>
                     </button>
                  </div>
                </div>

                <div className="flex-1 relative aspect-square lg:aspect-auto rounded-[2.5rem] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.problemTitle} 
                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                     <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl opacity-30 ${item.accent === 'red' ? 'bg-red-500' : item.accent === 'purple' ? 'bg-purple-500' : 'bg-blue-500'}`} />
                     <div className={`absolute bottom-0 left-0 w-32 h-32 blur-3xl opacity-30 ${item.accent === 'red' ? 'bg-red-500' : item.accent === 'purple' ? 'bg-purple-500' : 'bg-blue-500'}`} />
                  </div>
                  
                  <div className="absolute bottom-8 left-8 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                     <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full animate-pulse ${item.accent === 'red' ? 'bg-red-500' : 'bg-blue-500'}`} />
                        <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Sensory Analytics Active</span>
                     </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <button className="light-glow-button px-14 py-6 rounded-full text-white font-black text-sm uppercase tracking-[0.3em] active:scale-95">
              Initialize Project Bridge
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;