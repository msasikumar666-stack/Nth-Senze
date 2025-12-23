import React, { useEffect, useRef, useState } from 'react';

const ECO_STEPS = [
  {
    id: 1,
    title: "Awareness",
    tagline: "Step 1: The Spark",
    description: "Creating the first point of contact. We don't just show your brand; we make it felt through high-impact visual strategy and sensory triggers.",
    image: "https://images.unsplash.com/photo-1557833330-7e05bc4fa4f6?auto=format&fit=crop&q=80&w=800",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: 2,
    title: "Engagement",
    tagline: "Step 2: The Hook",
    description: "Deepening the connection. Through interactive content and motion graphics, we keep the user within your brand's gravitational pull.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    color: "from-indigo-500 to-purple-600"
  },
  {
    id: 3,
    title: "Conversation",
    tagline: "Step 3: The Dialogue",
    description: "Turning interest into action. We facilitate high-fidelity conversations and community building that turn visitors into brand advocates.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 4,
    title: "Retention",
    tagline: "Step 4: The Legacy",
    description: "Building lasting loyalty. Our eco-system ensures the brand experience doesn't end at the purchase—it becomes a part of the user's lifestyle.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    color: "from-pink-500 to-red-600"
  }
];

const EcoSystem: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden hidden lg:block">
        <svg className="w-full h-full" viewBox="0 0 1440 3200" fill="none" preserveAspectRatio="none">
          <path 
            d="M720 0 C 720 400, 1200 600, 1200 1000 S 240 1400, 240 1800 S 1200 2200, 1200 2600 S 720 2800, 720 3200" 
            stroke="url(#lineGradient)" 
            strokeWidth="2" 
            strokeDasharray="20 10"
            className="opacity-20"
          />
          <path 
            d="M720 0 C 720 400, 1200 600, 1200 1000 S 240 1400, 240 1800 S 1200 2200, 1200 2600 S 720 2800, 720 3200" 
            stroke="url(#lineGradient)" 
            strokeWidth="4" 
            strokeDasharray="1000 3200"
            strokeDashoffset={1000 - (scrollProgress * 1000)}
            className="opacity-60 blur-[2px]"
          />
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <h2 className="text-indigo-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">Our Methodology</h2>
          <h3 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter">
            We Build a Brand <br /> 
            <span style={{ color: '#009CFF' }} className="italic">Eco-System.</span>
          </h3>
        </div>

        <div className="space-y-40 lg:space-y-64">
          {ECO_STEPS.map((step, index) => (
            <div 
              key={step.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
            >
              <div className="flex-1 w-full group">
                <div className="relative aspect-[16/10] lg:aspect-square rounded-[3rem] overflow-hidden">
                  <div className={`absolute -inset-10 bg-gradient-to-br ${step.color} blur-[100px] opacity-0 group-hover:opacity-30 transition-opacity duration-1000`} />
                  
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700" />
                  
                  <div className="absolute top-8 left-8 px-6 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
                    <span className="text-white text-[10px] font-black tracking-[0.2em] uppercase">{step.tagline}</span>
                  </div>

                  <div className={`absolute inset-0 border border-white/5 group-hover:border-white/20 transition-colors duration-700 rounded-[3rem]`} />
                </div>
              </div>

              <div className="flex-1 space-y-8 text-center lg:text-left">
                <div className="space-y-4">
                  <h4 className={`text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br ${step.color}`}>
                    {step.title}
                  </h4>
                  <p className="text-2xl md:text-3xl font-bold text-white max-w-lg leading-tight">
                    Resonating at every <span className="italic text-slate-400">frequency.</span>
                  </p>
                </div>
                
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                  {step.description}
                </p>

                <div className="pt-4">
                  <button className="group/btn relative px-8 py-3 bg-transparent text-white font-bold text-xs uppercase tracking-widest overflow-hidden border-b border-white/10 hover:border-white/40 transition-all">
                    Explore Strategy
                    <div className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${step.color} group-hover/btn:w-full transition-all duration-500`} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-40 lg:mt-64 text-center">
          <div className="p-16 rounded-[4rem] bg-gradient-to-b from-white/5 to-transparent border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-indigo-600/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <h5 className="text-3xl md:text-5xl font-black text-white mb-8">Ready to evolve your eco-system?</h5>
            <button className="light-glow-button px-12 py-5 rounded-full text-white font-bold text-sm uppercase tracking-[0.3em] active:scale-95">
              Sync with Nth Senze
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoSystem;