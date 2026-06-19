import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Instagram, Facebook } from 'lucide-react';

export function Hero({ onOpenMenu }: { onOpenMenu: () => void }) {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Use a faster split: they open up within the first 60% of the scroll
  const leftX = useTransform(scrollYProgress, [0, 0.6], ["0%", "-100%"]);
  const rightX = useTransform(scrollYProgress, [0, 0.6], ["0%", "100%"]);

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative h-[250vh] bg-[#0a0a0a]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center text-center">
        {/* Background Image splitting effect */}
        <div className="absolute inset-0 z-0 flex opacity-80">
          <motion.div style={{ x: leftX }} className="w-1/2 h-full relative overflow-hidden">
            <img src="/ulaz-vrata.jpg" className="absolute top-0 left-0 w-[100vw] max-w-none h-full object-cover object-center" alt="" />
          </motion.div>
          <motion.div style={{ x: rightX }} className="w-1/2 h-full relative overflow-hidden">
            <img src="/ulaz-vrata.jpg" className="absolute top-0 right-0 w-[100vw] max-w-none h-full object-cover object-center" alt="" />
          </motion.div>
          
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />
        </div>

        {/* Top Left: Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-10 left-8 md:top-12 md:left-[4vw] z-20 text-left"
        >
          <div className="text-[var(--text-dim)] font-medium tracking-wide text-xs md:text-sm uppercase mb-1">
            doors lux & bonvivan
          </div>
          <h1 className="font-semibold text-lg md:text-xl tracking-[0.2em] text-[var(--text)] uppercase m-0 leading-none">
            RADULOVIĆ
          </h1>
        </motion.div>

        {/* Top Right: Hamburger Icon */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-10 right-8 md:top-12 md:right-[4vw] z-20 cursor-pointer flex flex-col gap-2 items-end group"
          onClick={onOpenMenu}
        >
          <div className="w-10 h-[1.5px] bg-[var(--text)] opacity-70 group-hover:opacity-100 group-hover:bg-[var(--gold)] transition-colors"></div>
          <div className="w-6 h-[1.5px] bg-[var(--text)] opacity-70 group-hover:opacity-100 group-hover:bg-[var(--gold)] transition-colors"></div>
          <div className="w-10 h-[1.5px] bg-[var(--text)] opacity-70 group-hover:opacity-100 group-hover:bg-[var(--gold)] transition-colors"></div>
        </motion.div>

        {/* Left side: Navigation numbers */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute left-8 md:left-[4vw] top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-8 font-sans text-[10px] tracking-widest"
        >
          <a href="#hero" className="text-[var(--gold)]">01</a>
          <a href="#proizvodi" className="text-[var(--text-dim)] hover:text-[var(--gold)] transition-colors">02</a>
          <a href="#onama" className="text-[var(--text-dim)] hover:text-[var(--gold)] transition-colors">03</a>
          <a href="#galerija" className="text-[var(--text-dim)] hover:text-[var(--gold)] transition-colors">04</a>
          <a href="#kontakt" className="text-[var(--text-dim)] hover:text-[var(--gold)] transition-colors">05</a>
        </motion.div>

        {/* Right side: Vertical text */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute right-8 md:right-[4vw] top-1/2 -translate-y-1/2 z-20 hidden md:block"
        >
          <div 
            className="font-sans text-[10px] tracking-[0.3em] text-[var(--text-dim)] uppercase" 
            style={{ writingMode: 'vertical-rl' }}
          >
            NIKŠIĆ, CRNA GORA — ESTABLISHED 1994
          </div>
        </motion.div>

        {/* Bottom left: Contact & Socials */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-8 md:bottom-12 md:left-[4vw] z-20 flex flex-col gap-4 font-sans text-[10px] tracking-[0.15em] text-[var(--text-dim)] text-left"
        >
          <div className="uppercase">TELEFON: 067 410 222</div>
          <div className="flex gap-6 items-center uppercase">
            <a href="https://www.instagram.com/doorsluxradulovic?igsh=NHE3dGd2Y3U3ZDVi" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[var(--gold)] transition-colors">
              <Instagram className="w-3.5 h-3.5" /> INSTAGRAM
            </a>
            <a href="https://www.facebook.com/share/1EPzFWrQUJ/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[var(--gold)] transition-colors">
              <Facebook className="w-3.5 h-3.5" /> FACEBOOK
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
