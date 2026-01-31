
import React from 'react';
import { TRUST_POINTS } from '../constants';

const TrustSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {TRUST_POINTS.map((point, index) => (
            <div key={index} className="group p-8 bg-[#0f0f0f] border border-white/5 hover:border-[#c5a059]/30 transition-all duration-500">
              <div className="w-12 h-12 flex items-center justify-center bg-[#c5a059]/10 text-[#c5a059] mb-6 rounded-lg group-hover:scale-110 transition-transform">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold font-serif mb-4">{point.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center gap-12 border-t border-white/5 pt-20">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black font-serif leading-tight">
              The Standard of <span className="text-[#c5a059]">Chicago Grooming</span> since 1998.
            </h2>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              We aren't a corporate franchise. We're a family. At Roy's, we believe your barber should be someone you know by name, someone who knows your hair better than you do, and someone you can trust with your biggest moments.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-black font-serif text-[#c5a059]">20k+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-black font-serif text-[#c5a059]">25+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-black font-serif text-[#c5a059]">4.9</p>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Star Reputation</p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full h-[500px] relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800" 
              alt="Classic Shave"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
