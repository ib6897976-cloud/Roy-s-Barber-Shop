
import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#0f0f0f] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <div className="flex justify-center gap-1 text-[#c5a059] mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
          </div>
          <h2 className="text-5xl font-black font-serif">Chicago's Top Choice</h2>
          <p className="text-white/60 text-lg italic">"Don’t take our word for it. Ask your neighbors."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {REVIEWS.map((review, index) => (
            <div key={index} className="p-10 bg-[#0a0a0a] border border-white/5 relative group hover:border-[#c5a059]/20 transition-all">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <svg className="w-16 h-16 fill-[#c5a059]" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3H21.017V21H14.017ZM3.01709 21L3.01709 18C3.01709 16.8954 3.91252 16 5.01709 16H8.01709C8.56937 16 9.01709 15.5523 9.01709 15V9C9.01709 8.44772 8.56937 8 8.01709 8H5.01709C3.91252 8 3.01709 7.10457 3.01709 6V3H10.0171V21H3.01709Z"/></svg>
              </div>
              <div className="space-y-6 relative z-10">
                <p className="text-[#c5a059] uppercase tracking-widest text-[10px] font-bold">{review.highlight}</p>
                <p className="text-xl leading-relaxed text-white/80 font-serif">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c5a059] to-black flex items-center justify-center text-xs font-bold text-white">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-sm uppercase tracking-wider">{review.name}</p>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">Verified Customer</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-bold text-white/40 hover:text-[#c5a059] transition-colors"
          >
            Read All 450+ Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
