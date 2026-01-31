
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden">
      {/* Background with cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover scale-105"
          alt="Vintage Barbershop Interior"
        />
        <div className="absolute inset-0 bg-black/60 md:bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#0a0a0a]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <p className="text-[#c5a059] text-[10px] md:text-xs uppercase tracking-[0.4em] font-black animate-pulse">
            Chicago's Legendary Institution
          </p>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black font-serif leading-[1.1] tracking-tighter">
            Master Cuts.<br />
            <span className="italic font-light text-[#c5a059] block mt-2 md:inline md:mt-0">For Life.</span>
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed px-4">
            Trusted by generations since 1998. Straight razor precision for the modern man.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 md:pt-8 px-4">
            <button 
              onClick={() => scrollToSection('cta')}
              className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 bg-[#c5a059] text-black font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all transform hover:-translate-y-1 shadow-2xl active:scale-95"
            >
              Get Fresh
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 bg-white/5 backdrop-blur-md border border-white/20 text-white font-black uppercase tracking-[0.2em] text-xs hover:bg-white/10 transition-all active:scale-95"
            >
              The Menu
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on very small screens */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-3 opacity-30">
        <span className="text-[8px] uppercase tracking-[0.5em] font-bold">Explore</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#c5a059] to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
