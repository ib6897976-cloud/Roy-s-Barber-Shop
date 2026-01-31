
import React from 'react';
import { SERVICES, SHOP_INFO } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-32 bg-[#0f0f0f] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-full md:w-1/3 h-full bg-gradient-to-l from-[#c5a059]/5 to-transparent pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#c5a059]/5 blur-3xl rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-24 space-y-4">
          <p className="text-[#c5a059] uppercase tracking-[0.4em] text-[10px] md:text-xs font-black">The Menu</p>
          <h2 className="text-4xl md:text-7xl font-black font-serif tracking-tighter">Masterful Services</h2>
          <p className="text-white/50 text-base md:text-xl font-light">Straightforward precision. Neighborhood pricing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-20 gap-y-8 md:gap-y-12 max-w-5xl mx-auto">
          {SERVICES.map((service, index) => (
            <div key={index} className="flex justify-between items-start group border-b border-white/5 pb-6 md:pb-8 hover:border-[#c5a059]/40 transition-all duration-300">
              <div className="space-y-1 md:space-y-2 pr-4">
                <h3 className="text-lg md:text-2xl font-bold font-serif group-hover:text-[#c5a059] transition-colors tracking-tight">{service.name}</h3>
                <p className="text-xs md:text-sm text-white/40 leading-relaxed max-w-xs font-light">{service.description}</p>
              </div>
              <div className="text-[#c5a059] font-black text-[8px] md:text-[10px] uppercase tracking-widest pt-2 shrink-0">
                Premium
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 text-center flex flex-col items-center gap-6 md:gap-8">
          <div className="flex items-center gap-3 md:gap-4 text-white/30 uppercase tracking-[0.3em] text-[8px] md:text-[10px] font-black">
            <span className="w-6 md:w-10 h-[1px] bg-white/10"></span>
            Walk-ins Welcome
            <span className="w-2 h-2 rounded-full border border-white/10"></span>
            Appointments Accepted
            <span className="w-6 md:w-10 h-[1px] bg-white/10"></span>
          </div>
          <a 
            href={`tel:${SHOP_INFO.phone}`} 
            className="group text-white text-sm md:text-base font-black uppercase tracking-widest border-b-2 border-[#c5a059] pb-1 hover:text-[#c5a059] hover:border-white transition-all flex items-center gap-2"
          >
            Check Wait Time 
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
