import React from 'react';

const SenseWorks: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-10 bg-blue-500/10 blur-[120px] rounded-full opacity-40 animate-pulse"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-square group shadow-2xl shadow-blue-500/5">
              <img 
                src="https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Abstract Sensorial Art" 
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center shadow-[0_0_30px_rgba(79,70,229,0.5)]">
                    <svg className="w-6 h-6 text-white fill-current ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="absolute top-8 left-8 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
                <span className="text-white text-xs font-bold tracking-widest uppercase">Showreel 2024</span>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-4 bg-indigo-600 p-8 rounded-[2rem] hidden md:block animate-float shadow-xl shadow-indigo-900/40">
               <div className="flex items-center space-x-4">
                  <div className="text-white">
                    <p className="text-[0.6rem] font-bold tracking-[0.3em] uppercase opacity-70 mb-1">Sensory Input</p>
                    <p className="text-2xl font-black">ACTIVE</p>
                  </div>
                  <div className="flex space-x-1 items-end h-8">
                    <div className="w-1 bg-white/30 h-4 animate-bounce"></div>
                    <div className="w-1 bg-white/50 h-8 animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-1 bg-white h-6 animate-bounce" style={{animationDelay: '0.4s'}}></div>
                  </div>
               </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-10">
            <div className="space-y-4">
               <h2 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter">
                We Sense <br />
                <span style={{ color: '#009CFF' }}>
                  What Works
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-2xl md:text-3xl text-slate-100 font-semibold leading-tight max-w-xl">
                A brand isn’t a logo or tagline — <span className="text-indigo-400">it’s a feeling.</span>
              </p>
              
              <p className="text-lg text-slate-400 leading-relaxed border-l-2 border-indigo-500/50 pl-6 py-2">
                We craft ideas and experiences that hit people in the heart, not just the algorithm. Subtle, smart, and occasionally spicy.
              </p>
              
              <p className="text-slate-500 text-base leading-relaxed font-light">
                Lorem ipsum dolor sit amet consectetur. Sagittis dignissim et tortor sem. Ut tempor velit magna aliquet dignissim in purus molestie congue. Imperdiet sit ante urna massa eu. Massa magna pellentesque rhoncus ornare ut. Ullamcorper varius.
              </p>
            </div>
            
            <div className="pt-6">
              <button className="group relative px-8 py-4 bg-transparent text-white font-bold overflow-hidden rounded-full border border-white/10 hover:border-indigo-500/50 transition-all">
                <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-10"></div>
                <span className="flex items-center gap-3">
                  Explore our ethos
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SenseWorks;