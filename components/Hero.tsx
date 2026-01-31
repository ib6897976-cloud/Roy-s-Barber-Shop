
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover"
          alt="Vintage Barbershop Interior"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0a0a0a]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-[#c5a059] uppercase tracking-[0.3em] font-semibold animate-pulse">
            Chicago's Legendary Institution
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-serif leading-tight">
            Master Cuts.<br />
            <span className="italic font-light text-[#c5a059]">For Life.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Trusted by generations. Straight razor precision. 
            Walk-ins welcome. Appointments available.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button 
              onClick={() => scrollToSection('cta')}
              className="w-full sm:w-auto px-10 py-5 bg-[#c5a059] text-black font-bold uppercase tracking-widest text-sm hover:bg-[#b48f49] transition-all transform hover:translate-y-[-2px] shadow-xl cursor-pointer"
            >
              Get a Fresh Cut
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto px-10 py-5 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all cursor-pointer"
            >
              View Services
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-[#c5a059]"></div>
        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
