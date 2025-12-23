import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
    <div className="relative">
      <svg 
        width="32" 
        height="26" 
        viewBox="0 0 100 80" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 drop-shadow-[0_0_5px_rgba(59,130,246,0.3)] transition-transform duration-500 group-hover:scale-110"
      >
        <path d="M10 10L35 5L60 35L85 65L65 75L40 45L10 10Z" fill="#002E5D" />
        <path d="M35 5L55 15L40 45L35 5Z" fill="#004A99" />
        <path d="M60 35L85 65L75 25L60 35Z" fill="#003D80" />
        <path d="M15 40L40 45L25 70L15 40Z" fill="#001F3F" />
        <path d="M40 45L65 75L25 70L40 45Z" fill="#0056B3" />
      </svg>
    </div>
    <div className="flex flex-col leading-none">
      <div className="flex items-baseline gap-1">
        <span className="text-slate-400 text-sm font-light tracking-tight">The</span>
        <span className="text-[#009CFF] text-lg font-black flex items-start">
          n<span className="text-[10px] mt-0.5">th</span>
        </span>
        <span className="text-slate-200 text-lg font-black tracking-tight">Senze</span>
      </div>
      <span className="text-[5px] font-bold text-slate-500 tracking-[0.5em] uppercase">Beyond Basics</span>
    </div>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="pt-32 pb-16 border-t border-white/5 relative overflow-hidden">
      <div className="glow-effect w-[300px] h-[300px] bg-purple-900/30 bottom-0 left-0" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Ready to feel the <br /> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">nth sense?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-md">
              Let's build something extraordinary together. Reach out for a consultation or just to say hi.
            </p>
            <div className="flex gap-4">
               <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-900 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors flex-1"
               />
               <button className="px-6 py-3 rounded-full bg-indigo-600 text-sm font-bold hover:bg-indigo-500 transition-colors">
                 Subscribe
               </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold mb-6">Explore</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Solutions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Social</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo />
          <p className="text-slate-500 text-sm">
            © 2024 Nth Senze. All rights reserved. Built for creators.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;