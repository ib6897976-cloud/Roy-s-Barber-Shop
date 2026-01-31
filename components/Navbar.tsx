
import React, { useState, useEffect } from 'react';
import { SHOP_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('top')} 
          className="group bg-transparent border-none cursor-pointer text-left focus:outline-none"
        >
          <span className="text-2xl font-black tracking-tighter uppercase font-serif group-hover:text-[#c5a059] transition-colors">
            Roy's <span className="text-[#c5a059] group-hover:text-white transition-colors">Barber Shop</span>
          </span>
        </button>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest">
          <button 
            onClick={() => scrollToSection('about')} 
            className="bg-transparent border-none cursor-pointer hover:text-[#c5a059] transition-colors focus:outline-none"
          >
            Legacy
          </button>
          <button 
            onClick={() => scrollToSection('services')} 
            className="bg-transparent border-none cursor-pointer hover:text-[#c5a059] transition-colors focus:outline-none"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('shop')} 
            className="bg-transparent border-none cursor-pointer hover:text-[#c5a059] transition-colors focus:outline-none"
          >
            The Shop
          </button>
          <button 
            onClick={() => scrollToSection('reviews')} 
            className="bg-transparent border-none cursor-pointer hover:text-[#c5a059] transition-colors focus:outline-none"
          >
            Testimonials
          </button>
        </div>

        <a 
          href={`tel:${SHOP_INFO.phone}`}
          className="bg-[#c5a059] text-black px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-[#b48f49] transition-all transform hover:scale-105 active:scale-95"
        >
          Call Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
