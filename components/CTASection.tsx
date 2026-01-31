
import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { SHOP_INFO } from '../constants';

const CTASection: React.FC = () => {
  return (
    <section id="cta" className="relative py-20 md:py-40 overflow-hidden">
      {/* Background Texture/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0a0a0a] opacity-90"></div>
        <img 
          src="https://images.unsplash.com/photo-1512690196236-d5a232933d44?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover mix-blend-overlay grayscale"
          alt="Leather background"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-12 md:space-y-20">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-black font-serif uppercase tracking-tighter leading-none">
              Ready to <br className="sm:hidden"/><span className="text-[#c5a059] italic font-light">Look Sharp?</span>
            </h2>
            <p className="text-base md:text-2xl text-white/50 font-light max-w-2xl mx-auto px-4">
              Step in, grab a seat, and leave like a new man. No gimmicks, just mastery.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full max-w-lg px-4">
            <a 
              href={`tel:${SHOP_INFO.phone}`} 
              className="flex-1 px-8 py-5 md:py-6 bg-[#c5a059] text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-2xl"
            >
              Call the Shop
            </a>
            <a 
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SHOP_INFO.address)}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-8 py-5 md:py-6 bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-[#c5a059] transition-all transform hover:scale-105 active:scale-95 shadow-2xl"
            >
              Get Directions
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 w-full pt-16 md:pt-24 border-t border-white/10">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-10 h-10 rounded-full border border-[#c5a059]/30 flex items-center justify-center">
                <MapPin className="text-[#c5a059] w-5 h-5" />
              </div>
              <p className="font-black uppercase tracking-[0.3em] text-[10px] text-white">Location</p>
              <p className="text-white/40 text-xs md:text-sm leading-relaxed max-w-[200px]">{SHOP_INFO.address}</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-10 h-10 rounded-full border border-[#c5a059]/30 flex items-center justify-center">
                <Clock className="text-[#c5a059] w-5 h-5" />
              </div>
              <p className="font-black uppercase tracking-[0.3em] text-[10px] text-white">Barber Hours</p>
              <div className="text-white/40 text-[10px] md:text-xs space-y-1 font-medium">
                {SHOP_INFO.hours.map((h, i) => (
                  <p key={i} className="flex justify-between gap-4">
                    <span className="uppercase tracking-widest opacity-60">{h.day}</span>
                    <span className="text-white font-bold">{h.time}</span>
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-10 h-10 rounded-full border border-[#c5a059]/30 flex items-center justify-center">
                <Phone className="text-[#c5a059] w-5 h-5" />
              </div>
              <p className="font-black uppercase tracking-[0.3em] text-[10px] text-white">Contact</p>
              <p className="text-white/40 text-xs md:text-sm font-bold tracking-widest">{SHOP_INFO.displayPhone}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
