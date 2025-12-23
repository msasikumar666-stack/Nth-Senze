import React, { useState, useMemo } from 'react';
import { PORTFOLIO } from '../constants';

const CATEGORIES = ['All', 'Motion Graphics', 'Tech Solutions', 'Creative & Production', 'Media & Activations', 'Content Strategy'];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PORTFOLIO;
    return PORTFOLIO.filter(project => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="work" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-indigo-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">Our Portfolio</h2>
            <h3 className="text-6xl md:text-8xl font-black text-white leading-tight tracking-tighter mb-6">
              Sensory <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500 italic">Portfolio.</span>
            </h3>
            <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
              The craft behind the vision. Explore our latest explorations in sensory design and digital excellence.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-500 border ${
                  activeFilter === cat 
                    ? 'bg-white text-slate-950 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                    : 'text-slate-500 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat === 'All' ? 'All Projects' : cat.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-900 border border-white/5 transition-all duration-700 ease-out transform ${
                hoveredId !== null && hoveredId !== project.id ? 'opacity-40 grayscale scale-[0.98]' : 'opacity-100'
              }`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out forwards ${index * 0.1}s`,
                opacity: 0,
              }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-blue-500/10 to-transparent" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
              </div>

              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">
                    {project.category}
                  </span>
                  <h4 className="text-3xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-300 transition-all duration-500">
                    {project.title}
                  </h4>
                  
                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-950 shadow-2xl transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-white">View Case</span>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 border border-white/0 group-hover:border-indigo-500/50 rounded-[2.5rem] transition-colors duration-700" />
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="light-glow-button px-12 py-5 rounded-full text-white font-black text-sm uppercase tracking-[0.3em] active:scale-95 group relative overflow-hidden">
            <span className="relative z-10">Archive 2018—2024</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;