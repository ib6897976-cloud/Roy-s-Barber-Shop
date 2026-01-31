
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import Services from './components/Services';
import Reviews from './components/Reviews';
import ShopGallery from './components/ShopGallery';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f0] selection:bg-[#c5a059] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <Services />
        <ShopGallery />
        <Reviews />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
