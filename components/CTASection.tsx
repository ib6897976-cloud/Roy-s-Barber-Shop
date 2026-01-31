
import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { SHOP_INFO } from '../constants';

const CTASection: React.FC = () => {
  return (
    <section id="cta" className="relative py-32 overflow-hidden">
      {/* Background Texture/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0a0a0a] opacity-90"></div>
        <img 
          src="https://images.unsplash.com/photo-1512690196236-d5a232933d44?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover mix-blend-overlay grayscale"
          alt="Leather background"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black font-serif uppercase tracking-tighter">
              Ready to <span className="text-[#c5a059] italic">Look Sharp?</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto">
              No appointments needed for a world-class experience. 
              Step in, grab a seat, and leave like a new man.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg">
            <a 
              href={`tel:${SHOP_INFO.phone}`} 
              className="flex-1 px-10 py-6 bg-[#c5a059] text-black font-black uppercase tracking-widest text-sm hover:bg-[#b48f49] transition-all transform hover:scale-105"
            >
              Call the Shop
            </a>
            <a 
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SHOP_INFO.address)}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-10 py-6 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-gray-200 transition-all transform hover:scale-105"
            >
              Get Directions
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full pt-20 border-t border-white/10">
            <div className="flex flex-col items-center space-y-3">
              <MapPin className="text-[#c5a059] w-6 h-6 mb-2" />
              <p className="font-bold uppercase tracking-widest text-sm">Location</p>
              <p className="text-white/40 text-sm whitespace-pre-line">{SHOP_INFO.address}</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Clock className="text-[#c5a059] w-6 h-6 mb-2" />
              <p className="font-bold uppercase tracking-widest text-sm">Business Hours</p>
              <div className="text-white/40 text-sm">
                {SHOP_INFO.hours.map((h, i) => (
                  <p key={i}>{h.day}: {h.time}</p>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Phone className="text-[#c5a059] w-6 h-6 mb-2" />
              <p className="font-bold uppercase tracking-widest text-sm">Quick Connect</p>
              <p className="text-white/40 text-sm">{SHOP_INFO.displayPhone}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
