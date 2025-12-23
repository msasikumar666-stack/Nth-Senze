import React, { useState, useEffect } from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
    <div className="relative">
      <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <svg 
        width="40" 
        height="32" 
        viewBox="0 0 100 80" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-transform duration-500 group-hover:scale-110"
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
        <span className="text-slate-400 text-lg font-light tracking-tight">The</span>
        <span className="text-[#009CFF] text-2xl font-black flex items-start">
          n<span className="text-sm mt-0.5">th</span>
        </span>
        <span className="text-slate-200 text-2xl font-black tracking-tight">Senze</span>
      </div>
      <span className="text-[7px] font-bold text-slate-500 tracking-[0.5em] uppercase mt-0.5">Beyond Basics</span>
    </div>
  </div>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'About us', type: 'link' },
    { name: 'Team', type: 'link' },
    { name: 'Work', type: 'dropdown', items: ['Branding', 'Motion', 'Digital'] },
    { name: 'Solutions', type: 'dropdown', items: ['Marketing', 'Technology', 'Media'] },
    { name: 'Career', type: 'link' },
    { name: 'Contact', type: 'link' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <div 
              key={item.name} 
              className="relative group"
              onMouseEnter={() => item.type === 'dropdown' && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1">
                {item.name}
                {item.type === 'dropdown' && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
              
              {item.type === 'dropdown' && activeDropdown === item.name && (
                <div className="absolute top-full left-0 pt-4 w-48">
                  <div className="bg-slate-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl backdrop-blur-xl">
                    {item.items?.map((subItem) => (
                      <a 
                        key={subItem} 
                        href="#" 
                        className="block px-4 py-3 text-sm text-slate-400 hover:bg-white/5 hover:text-white transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <button 
          style={{ backgroundColor: '#009CFF' }}
          className="hidden md:block px-6 py-2.5 rounded-full text-sm font-bold text-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,156,255,0.4)] hover:shadow-[0_0_30px_rgba(0,156,255,0.6)] border border-white/10"
        >
          Request demo
        </button>

        <button className="md:hidden p-2 text-white">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
           </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;