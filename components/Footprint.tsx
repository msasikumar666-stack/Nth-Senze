import React from 'react';

const Footprint: React.FC = () => {
  const locations = [
    { name: 'San Francisco', top: '35%', left: '15%' },
    { name: 'New York', top: '38%', left: '25%' },
    { name: 'London', top: '32%', left: '48%' },
    { name: 'Berlin', top: '33%', left: '52%' },
    { name: 'Dubai', top: '45%', left: '62%' },
    { name: 'Mumbai', top: '55%', left: '72%' },
    { name: 'Singapore', top: '65%', left: '78%' },
    { name: 'Tokyo', top: '40%', left: '85%' },
    { name: 'Sydney', top: '80%', left: '90%' },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-slate-950">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="space-y-10 relative z-10 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="w-12 h-1 bg-indigo-500 mb-6" />
              <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
                Footprint & <br />
                <span style={{ color: '#009CFF' }}>
                  Key Clients
                </span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-slate-200 font-medium leading-relaxed">
                  A brand isn’t a logo or tagline — it’s a feeling. We craft ideas and experiences that hit people in the heart, not just the algorithm.
                </p>
                <p className="text-lg text-indigo-400/80 font-light italic">
                  Subtle, smart, and occasionally spicy.
                </p>
              </div>
              
              <p className="text-slate-500 text-base leading-relaxed max-w-lg font-normal">
                Lorem ipsum dolor sit amet consectetur. Sagittis dignissim et tortor sem. Ut tempor velit magna aliquet dignissim in purus molestie congue. Imperdiet sit ante urna massa eu. Massa magna pellentesque rhoncus ornare ut. Ullamcorper varius.
              </p>
            </div>

            <div className="pt-4">
              <button className="light-glow-button px-10 py-5 rounded-full text-white font-bold text-sm uppercase tracking-[0.2em] active:scale-95 group overflow-hidden relative">
                <span className="relative z-10 flex items-center gap-4">
                  Discover More
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-square md:aspect-video lg:aspect-square">
              <div className="absolute inset-0 rounded-[3.5rem] bg-slate-900/40 border border-white/5 backdrop-blur-sm overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
                  alt="Minimalist World Map" 
                  className="w-full h-full object-cover opacity-20 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-transparent to-slate-950/80" />
                
                {locations.map((loc, i) => (
                  <div 
                    key={i}
                    className="absolute group/marker"
                    style={{ top: loc.top, left: loc.left }}
                  >
                    <div className="relative flex items-center justify-center">
                      <div className="marker-glow w-8 h-8 opacity-40" />
                      <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.8)] relative z-10 border border-white/20" />
                      
                      <div className="absolute bottom-full mb-3 px-3 py-1 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded text-[10px] font-bold text-white uppercase tracking-widest opacity-0 group-hover/marker:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover/marker:translate-y-0 shadow-xl">
                        {loc.name}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                  <div className="relative">
                    <div className="absolute inset-0 bg-indigo-500/20 blur-3xl animate-pulse rounded-full" />
                    <div className="w-16 h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center relative z-10 transform rotate-12 shadow-2xl">
                      <span className="text-3xl font-black text-white italic">N</span>
                    </div>
                  </div>
                  <div className="mt-4 text-[10px] font-black text-indigo-400 tracking-[0.5em] uppercase opacity-60">
                    SENSORY HUB
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 p-6 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Network Active</span>
                </div>
              </div>

              <div className="absolute -bottom-10 left-10 p-6 bg-indigo-600/10 backdrop-blur-2xl border border-indigo-500/20 rounded-[2rem] shadow-2xl hidden xl:block">
                <p className="text-white font-black text-4xl">120<span className="text-indigo-400 text-xl font-bold">+</span></p>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">Countries Felt</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Footprint;