import React, { useState, useEffect, useRef } from 'react';
import { STATS } from '../constants';

const StatCounter: React.FC<{ value: number; suffix?: string; isVisible: boolean }> = ({ value, suffix, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value, isVisible]);

  return <span>{count}{suffix}</span>;
};

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-slate-950/50 relative border-y border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
      <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {STATS.map((stat, idx) => (
            <div 
              key={idx} 
              className={`space-y-4 group transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="relative inline-block">
                <h3 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 group-hover:to-indigo-400 transition-all duration-500">
                  <StatCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                </h3>
                <div className="absolute -inset-x-4 -inset-y-2 bg-indigo-500/0 group-hover:bg-indigo-500/5 rounded-2xl blur-xl transition-all duration-500 -z-10" />
              </div>
              
              <div className="overflow-hidden">
                <p className={`text-slate-500 font-medium tracking-widest uppercase text-xs transition-all duration-700 transform ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                } group-hover:text-indigo-400`}
                style={{ transitionDelay: `${(idx * 150) + 300}ms` }}>
                  {stat.label}
                </p>
              </div>
              
              <div className="w-8 h-1 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent mx-auto scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;