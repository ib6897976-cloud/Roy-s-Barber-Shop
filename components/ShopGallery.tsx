
import React from 'react';
import { SHOP_IMAGES } from '../constants';

const ShopGallery: React.FC = () => {
  return (
    <section id="shop" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <p className="text-[#c5a059] uppercase tracking-widest text-xs font-bold">Inside the Shop</p>
            <h2 className="text-5xl font-black font-serif">A Space For Gentlemen.</h2>
            <p className="text-white/60 text-lg">Clean, professional, and welcoming. We’ve built a sanctuary where you can relax, have a conversation, and leave looking your absolute best.</p>
          </div>
          <div className="hidden md:block">
            <p className="text-white/20 font-serif italic text-6xl">Established 1998</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px]">
          <div className="md:col-span-2 h-full overflow-hidden group relative">
            <img src={SHOP_IMAGES[0]} alt="Shop interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div className="flex flex-col gap-4 h-full">
            <div className="h-1/2 overflow-hidden group relative">
              <img src={SHOP_IMAGES[1]} alt="Barber working" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="h-1/2 overflow-hidden group relative">
              <img src={SHOP_IMAGES[2]} alt="Tools" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
          <div className="h-full overflow-hidden group relative">
            <img src={SHOP_IMAGES[3]} alt="Details" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopGallery;
