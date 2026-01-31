
import React from 'react';
import { SERVICES, SHOP_INFO } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#0f0f0f] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#c5a059]/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <p className="text-[#c5a059] uppercase tracking-widest text-xs font-bold">The Menu</p>
          <h2 className="text-5xl md:text-6xl font-black font-serif">Masterful Services</h2>
          <p className="text-white/60 text-lg">Straightforward pricing. Unrivaled precision. No gimmicks.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl mx-auto">
          {SERVICES.map((service, index) => (
            <div key={index} className="flex justify-between items-start group border-b border-white/5 pb-8 hover:border-[#c5a059]/30 transition-all">
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-serif group-hover:text-[#c5a059] transition-colors">{service.name}</h3>
                <p className="text-sm text-white/50 leading-relaxed max-w-xs">{service.description}</p>
              </div>
              <div className="text-[#c5a059] opacity-50 text-xs uppercase tracking-widest pt-2">
                Premium
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center flex flex-col items-center gap-6">
          <div className="flex items-center gap-4 text-white/40 uppercase tracking-widest text-xs font-bold">
            <span className="w-8 h-[1px] bg-white/10"></span>
            Walk-ins Welcome | Appointments Accepted
            <span className="w-8 h-[1px] bg-white/10"></span>
          </div>
          <a 
            href={`tel:${SHOP_INFO.phone}`} 
            className="text-white border-b-2 border-[#c5a059] pb-1 font-bold hover:text-[#c5a059] transition-colors"
          >
            Call to Check Wait Time
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
