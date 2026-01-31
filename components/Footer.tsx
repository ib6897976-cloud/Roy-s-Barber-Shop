
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center space-y-10">
          <div className="space-y-4">
            <h3 className="text-3xl font-black uppercase font-serif tracking-tighter">
              Roy's <span className="text-[#c5a059]">Barber Shop</span>
            </h3>
            <div className="flex items-center justify-center gap-4">
               <span className="w-4 h-[1px] bg-[#c5a059]"></span>
               <p className="text-white/20 text-[8px] md:text-[10px] uppercase tracking-[0.5em] font-bold">
                 Chicago Legacy since 1998
               </p>
               <span className="w-4 h-[1px] bg-[#c5a059]"></span>
            </div>
          </div>

          <div className="flex gap-10 text-[10px] uppercase tracking-[0.3em] font-black text-white/40">
            <a href="#" className="hover:text-[#c5a059] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#c5a059] transition-colors">Facebook</a>
          </div>

          <div className="pt-6 border-t border-white/5 w-full max-w-xs text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-white/10 font-medium">
            &copy; {new Date().getFullYear()} Roy's Barber Shop Chicago. <br className="sm:hidden"/> All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
