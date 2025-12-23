import React from 'react';

const CLIENT_LOGOS = [
  { name: 'Google', url: 'https://cdn.worldvectorlogo.com/logos/google-2015.svg' },
  { name: 'Netflix', url: 'https://cdn.worldvectorlogo.com/logos/netflix-3.svg' },
  { name: 'Spotify', url: 'https://cdn.worldvectorlogo.com/logos/spotify-2.svg' },
  { name: 'Amazon', url: 'https://cdn.worldvectorlogo.com/logos/amazon-2.svg' },
  { name: 'Microsoft', url: 'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg' },
  { name: 'Airbnb', url: 'https://cdn.worldvectorlogo.com/logos/airbnb-2.svg' },
  { name: 'Tesla', url: 'https://cdn.worldvectorlogo.com/logos/tesla-9.svg' },
  { name: 'Adobe', url: 'https://cdn.worldvectorlogo.com/logos/adobe-2.svg' },
];

const LogoMarquee: React.FC<{ logos: typeof CLIENT_LOGOS; direction: 'left' | 'right' }> = ({ logos, direction }) => {
  const animationClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';
  
  return (
    <div className="flex overflow-hidden group/row py-12 relative w-full">
      <div className={`flex whitespace-nowrap w-max ${animationClass}`}>
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <div 
            key={index} 
            className="inline-flex items-center justify-center px-12 transition-all duration-500 hover:scale-125 cursor-pointer group/logo"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500" />
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-40 group-hover/logo:opacity-100 group-hover/logo:brightness-100 transition-all duration-500" 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Clients: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-slate-950/20 group/section">
      <div className="absolute inset-0 bg-blue-600/0 group-hover/section:bg-blue-600/5 transition-colors duration-1000 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-indigo-500/0 group-hover/section:bg-indigo-500/10 blur-[100px] rounded-full transition-all duration-1000 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16 text-center">
        <h2 className="text-indigo-500 font-bold tracking-[0.2em] uppercase text-xs mb-4">Our Happy Clients</h2>
        <h3 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Trust from the best.</h3>
      </div>

      <div className="pause-on-hover relative">
        <LogoMarquee logos={CLIENT_LOGOS} direction="left" />
        <div className="h-2" />
        <LogoMarquee logos={CLIENT_LOGOS} direction="right" />
        
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
};

export default Clients;