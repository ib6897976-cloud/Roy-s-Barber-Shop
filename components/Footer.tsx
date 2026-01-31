
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="space-y-4">
            <h3 className="text-2xl font-black uppercase font-serif tracking-tighter">
              Roy's <span className="text-[#c5a059]">Barber Shop</span>
            </h3>
            <p className="text-white/20 text-[10px] uppercase tracking-[0.5em]">
              Serving Chicago with Pride since 1998
            </p>
          </div>

          <div className="flex gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>

          <div className="text-[10px] uppercase tracking-[0.2em] text-white/20">
            &copy; {new Date().getFullYear()} Roy's Barber Shop Chicago. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
