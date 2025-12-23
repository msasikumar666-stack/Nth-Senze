import React, { useRef } from 'react';

const BLOG_POSTS = [
  {
    id: 1,
    date: "MAR 12, 2024",
    category: "INSIGHTS",
    title: "The Future of Sensory Branding in 2025",
    desc: "How haptic feedback and immersive audio are redefining the standard of digital interaction.",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800",
    accent: "indigo"
  },
  {
    id: 2,
    date: "FEB 28, 2024",
    category: "STRATEGY",
    title: "Why Motion is the New Static Engagement",
    desc: "Decoding the neurobiology of why moving pixels capture 3x more attention than static imagery.",
    image: "https://images.unsplash.com/photo-1550741111-c80715d3ad9c?auto=format&fit=crop&q=80&w=800",
    accent: "blue"
  },
  {
    id: 3,
    date: "FEB 15, 2024",
    category: "CULTURE",
    title: "The Nth Method: A Deep Dive into Process",
    desc: "Exploring how we dismantle traditional agency silos to build brand ecosystems that resonate.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    accent: "purple"
  },
  {
    id: 4,
    date: "JAN 20, 2024",
    category: "TECH",
    title: "Spatial Computing and Brand Sovereignty",
    desc: "Preparing for the era of AR/VR where your brand physically exists in the user's living space.",
    image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=800",
    accent: "rose"
  },
  {
    id: 5,
    date: "JAN 05, 2024",
    category: "PRODUCTION",
    title: "The Ethics of AI in Creative Systems",
    desc: "Balancing generative efficiency with the raw, imperfect soul of human creativity.",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800",
    accent: "cyan"
  }
];

const Blog: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - (clientWidth * 0.8) : scrollLeft + (clientWidth * 0.8);
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-slate-950">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <div>
            <h2 className="text-indigo-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">Intellectual Property</h2>
            <h3 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter">
              Latest News & <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500 italic">Articles.</span>
            </h3>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-all duration-300 group"
            >
              <svg className="w-6 h-6 transition-transform group-active:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-all duration-300 group"
            >
              <svg className="w-6 h-6 transition-transform group-active:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-16 snap-x snap-mandatory no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {BLOG_POSTS.map((post) => (
            <div 
              key={post.id} 
              className="min-w-[85%] md:min-w-[45%] lg:min-w-[30%] snap-start group"
            >
              <div className="relative h-full flex flex-col rounded-[3rem] bg-slate-900/40 border border-white/5 overflow-hidden transition-all duration-700 hover:border-indigo-500/30 hover:-translate-y-2">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
                    <span className="text-[9px] font-black text-white uppercase tracking-[0.2em]">{post.category}</span>
                  </div>
                </div>

                <div className="p-10 flex-1 flex flex-col">
                  <span className="text-[10px] font-black text-indigo-500 tracking-[0.3em] uppercase mb-4">{post.date}</span>
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors leading-snug">
                    {post.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-10 flex-1">
                    {post.desc}
                  </p>
                  
                  <div className="flex items-center gap-4 text-white group/btn">
                    <span className="text-xs font-black uppercase tracking-widest opacity-60 group-hover/btn:opacity-100 transition-opacity">Read Full Story</span>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-slate-950 transition-all duration-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className={`absolute -bottom-12 -right-12 w-32 h-32 blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-1000 ${
                  post.accent === 'indigo' ? 'bg-indigo-500' : 
                  post.accent === 'blue' ? 'bg-blue-500' : 
                  post.accent === 'purple' ? 'bg-purple-500' : 
                  post.accent === 'rose' ? 'bg-rose-500' : 'bg-cyan-500'
                }`} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="light-glow-button px-12 py-5 rounded-full text-white font-black text-sm uppercase tracking-[0.3em] active:scale-95 group overflow-hidden relative">
            <span className="relative z-10">View All Observations</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Blog;