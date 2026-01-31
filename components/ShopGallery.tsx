
import React from 'react';
import { SHOP_IMAGES } from '../constants';

const ShopGallery: React.FC = () => {
  return (
    <section id="shop" className="py-16 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-20 gap-8">
          <div className="max-w-2xl space-y-4">
            <p className="text-[#c5a059] uppercase tracking-[0.4em] text-[10px] md:text-xs font-black">Inside the Shop</p>
            <h2 className="text-4xl md:text-7xl font-black font-serif tracking-tighter">A Space For <br className="md:hidden"/>Gentlemen.</h2>
            <p className="text-white/50 text-base md:text-xl font-light">Clean, professional, and welcoming. A sanctuary where you leave looking your absolute best.</p>
          </div>
          <div className="hidden lg:block">
            <p className="text-white/10 font-serif italic text-7xl select-none">Established 1998</p>
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 h-[400px] md:h-[600px]">
          {/* Large Image - Full Width on smallest, span 2 on medium */}
          <div className="col-span-2 h-full overflow-hidden group relative rounded-sm">
            <img src={SHOP_IMAGES[0]} alt="Shop interior" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
          </div>
          
          {/* Vertical Stack */}
          <div className="col-span-1 flex flex-col gap-2 md:gap-4 h-full">
            <div className="h-1/2 overflow-hidden group relative rounded-sm">
              <img src={SHOP_IMAGES[1]} alt="Barber working" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
            </div>
            <div className="h-1/2 overflow-hidden group relative rounded-sm">
              <img src={SHOP_IMAGES[2]} alt="Tools" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
            </div>
          </div>
          
          {/* Single Image */}
          <div className="col-span-1 h-full overflow-hidden group relative rounded-sm">
            <img src={SHOP_IMAGES[3]} alt="Details" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopGallery;
