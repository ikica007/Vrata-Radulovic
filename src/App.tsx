import React, { useState } from 'react';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroSection, WhyUsSection } from './components/Sections';
import { CategoriesSection } from './components/Products';
import { AboutSection, GallerySection } from './components/AboutGallery';
import { ContactSection } from './components/Contact';
import { Footer } from './components/Footer';
import { MenuOverlay } from './components/MenuOverlay';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Loader />
      <Navbar onOpenMenu={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main>
        <Hero onOpenMenu={() => setIsMenuOpen(true)} />
        <IntroSection />
        <WhyUsSection />
        <CategoriesSection />
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Grain overlay for texture */}
      <div 
        className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.025]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}
      />
    </>
  );
}

export default App;
