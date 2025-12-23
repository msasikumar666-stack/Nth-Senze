import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import SenseWorks from './components/SenseWorks';
import Clients from './components/Clients';
import Footprint from './components/Footprint';
import Portfolio from './components/Portfolio';
import ProblemSolution from './components/ProblemSolution';
import EcoSystem from './components/EcoSystem';
import Opportunity from './components/Opportunity';
import ProcessMethod from './components/ProcessMethod';
import ContentCycle from './components/ContentCycle';
import Blog from './components/Blog';
import Footer from './components/Footer';
import StarsBackground from './components/StarsBackground';

function App() {
  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      <StarsBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <About />
        <Services />
        <SenseWorks />
        <Clients />
        <Footprint />
        <Portfolio />
        <ProblemSolution />
        <EcoSystem />
        <Opportunity />
        <ProcessMethod />
        <ContentCycle />
        <Blog />
      </main>
      <Footer />
      
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.65" 
              numOctaves="3" 
              stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </div>
  );
}

export default App;