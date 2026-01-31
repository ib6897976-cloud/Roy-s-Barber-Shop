
import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-32 bg-[#0f0f0f] border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-24 space-y-4">
          <div className="flex justify-center gap-1 text-[#c5a059] mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 md:w-5 h-4 md:h-5 fill-current" />)}
          </div>
          <h2 className="text-4xl md:text-7xl font-black font-serif tracking-tighter">The Reputation</h2>
          <p className="text-white/50 text-base md:text-xl italic font-light">"Chicago's best, according to your neighbors."</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
          {REVIEWS.map((review, index) => (
            <div key={index} className="p-8 md:p-12 bg-[#0a0a0a] border border-white/5 relative group hover:border-[#c5a059]/20 transition-all duration-500 rounded-sm">
              <div className="absolute top-0 right-0 p-4 md:p-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <svg className="w-12 h-12 md:w-20 md:h-20 fill-[#c5a059]" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3H21.017V21H14.017ZM3.01709 21L3.01709 18C3.01709 16.8954 3.91252 16 5.01709 16H8.01709C8.56937 16 9.01709 15.5523 9.01709 15V9C9.01709 8.44772 8.56937 8 8.01709 8H5.01709C3.91252 8 3.01709 7.10457 3.01709 6V3H10.0171V21H3.01709Z"/></svg>
              </div>
              <div className="space-y-6 md:space-y-8 relative z-10">
                <p className="text-[#c5a059] uppercase tracking-[0.4em] text-[8px] md:text-[10px] font-black">{review.highlight}</p>
                <p className="text-xl md:text-2xl leading-relaxed text-white font-serif tracking-tight">"{review.text}"</p>
                <div className="flex items-center gap-4 pt-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-sm bg-gradient-to-br from-[#c5a059] to-black flex items-center justify-center text-xs font-black text-white shadow-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-black text-xs md:text-sm uppercase tracking-widest leading-none">{review.name}</p>
                    <p className="text-[8px] md:text-[10px] text-white/30 uppercase tracking-[0.3em] mt-2 font-bold">Loyal Customer</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-20 text-center">
          <a 
            href="https://www.google.com/search?q=Roy%27s+Barber+Shop+Chicago+reviews" 
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-col items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.4em] font-black text-white/30 hover:text-[#c5a059] transition-all"
          >
            <span>Read 450+ Five-Star Reviews</span>
            <span className="w-12 h-[2px] bg-white/10 group-hover:bg-[#c5a059] group-hover:w-24 transition-all duration-500"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
