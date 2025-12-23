import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const phrases = [
    "Brand Strategy",
    "Video Production",
    "Digital Marketing",
    "Content Strategy"
  ];
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(300);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = phrases[currentIndex];
      const fullWords = fullText.split(' ');
      const currentWords = displayText.split(' ').filter(w => w !== '');
      
      if (!isDeleting) {
        const nextWords = fullWords.slice(0, currentWords.length + 1).join(' ');
        setDisplayText(nextWords);
        setTypingSpeed(400);

        if (nextWords === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentWords.length > 0) {
          const prevWords = fullWords.slice(0, currentWords.length - 1).join(' ');
          setDisplayText(prevWords);
          setTypingSpeed(200);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, phrases, typingSpeed]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="glow-effect w-[500px] h-[500px] bg-indigo-600 top-[-10%] right-[-10%]" />
      <div className="glow-effect w-[600px] h-[600px] bg-purple-700 bottom-[-20%] left-[-10%]" />
      
      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-8 animate-float">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span>WE'RE LIVE: NEW PORTFOLIO OUT NOW</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight leading-tight mb-8">
          We create Brands <br /> People feel, through
          <div className="h-[1.2em] relative flex justify-center items-center mt-4">
            <span 
              className="min-h-[1.2em] inline-block font-black"
              style={{ color: '#009CFF' }}
            >
              {displayText}
              <span 
                className="inline-block ml-2 w-[4px] h-[0.8em] align-middle animate-cursor"
                style={{ backgroundColor: '#009CFF' }}
              ></span>
            </span>
          </div>
        </h1>

        <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-12 leading-relaxed">
          Nth Senze is a multi-disciplinary design studio crafting sensory experiences 
          that bridge the gap between digital interaction and human emotion.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-950 font-bold hover:bg-slate-200 transition-colors">
            Start a project
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 border border-white/10 text-white font-bold hover:bg-slate-800 transition-colors">
            View Case Studies
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;