
import React, { useState, useEffect } from 'react';
import { SHOP_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-5 md:py-8'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('top')} 
          className="group bg-transparent border-none cursor-pointer text-left focus:outline-none transition-transform active:scale-95"
        >
          <span className="text-xl md:text-2xl font-black tracking-tighter uppercase font-serif block group-hover:text-[#c5a059] transition-colors leading-none">
            Roy's <span className="text-[#c5a059] group-hover:text-white transition-colors">Barber Shop</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8 text-[10px] font-bold uppercase tracking-[0.2em]">
          <button onClick={() => scrollToSection('about')} className="hover:text-[#c5a059] transition-colors">Legacy</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-[#c5a059] transition-colors">Services</button>
          <button onClick={() => scrollToSection('shop')} className="hover:text-[#c5a059] transition-colors">The Shop</button>
          <button onClick={() => scrollToSection('reviews')} className="hover:text-[#c5a059] transition-colors">Reviews</button>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href={`tel:${SHOP_INFO.phone}`}
            className="bg-[#c5a059] text-black px-4 md:px-6 py-2 rounded-sm font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-[#b48f49] transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-[#c5a059]/10"
          >
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
