
import React from 'react';
import { TRUST_POINTS } from '../constants';

const TrustSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-32 bg-[#0a0a0a] border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
          {TRUST_POINTS.map((point, index) => (
            <div key={index} className="group p-6 md:p-8 bg-[#0f0f0f] border border-white/5 hover:border-[#c5a059]/30 transition-all duration-500">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#c5a059]/10 text-[#c5a059] mb-4 md:mb-6 rounded-sm group-hover:bg-[#c5a059] group-hover:text-black transition-all">
                {point.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold font-serif mb-2 md:mb-4">{point.title}</h3>
              <p className="text-white/50 text-xs md:text-sm leading-relaxed font-light">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-32 flex flex-col lg:flex-row items-center gap-10 md:gap-20 border-t border-white/5 pt-16 md:pt-32">
          <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-serif leading-[1.1] tracking-tighter">
              A Chicago <span className="text-[#c5a059] italic font-light">Institution.</span>
            </h2>
            <p className="text-base md:text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We aren't a corporate franchise. We're a family. At Roy's, we believe your barber should be someone you know by name, someone who knows your hair better than you do, and someone you can trust with your biggest moments.
            </p>
            <div className="grid grid-cols-3 gap-4 md:gap-10 pt-4">
              <div>
                <p className="text-2xl md:text-4xl font-black font-serif text-[#c5a059]">20k+</p>
                <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 mt-1">Happy Clients</p>
              </div>
              <div>
                <p className="text-2xl md:text-4xl font-black font-serif text-[#c5a059]">25+</p>
                <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl md:text-4xl font-black font-serif text-[#c5a059]">4.9</p>
                <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 mt-1">Star Reviews</p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full h-[350px] md:h-[500px] relative overflow-hidden group rounded-sm shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800" 
              alt="Classic Shave"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden"></div>
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
