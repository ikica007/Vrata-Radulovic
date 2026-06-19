import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Ruler, Clock, Award } from 'lucide-react';
import { cn } from '../lib/utils';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export function IntroSection() {
  return (
    <section id="onama" className="relative py-32 md:py-48 px-[4vw] bg-[var(--bg)] border-b border-[var(--border)] text-center flex flex-col items-center overflow-hidden">
      {/* Background Image representing the dark doors */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.25]"
        style={{ backgroundImage: 'url("/14.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="max-w-[700px] mx-auto z-10 relative">
        <h4 className="text-[10px] md:text-xs text-[var(--gold)] uppercase tracking-[0.3em] font-sans font-medium mb-8">
          Ekskluzivna kolekcija
        </h4>
        
        <h2 className="font-sans font-medium text-[4.5rem] md:text-[6.5rem] leading-none tracking-tight text-[var(--text)] mb-2">
          Arhitektura
        </h2>
        
        <h2 className="font-sans font-medium text-[4.5rem] md:text-[6.5rem] leading-none tracking-tight text-[var(--text)] mb-16">
          <span className="italic text-[var(--text-dim)] font-light">vašeg</span> ulaza.
        </h2>
        
        <div className="w-[1px] h-32 md:h-40 bg-[var(--gold)]/30 mx-auto my-12" />

        <p className="text-[var(--text-dim)] text-base md:text-[1.1rem] leading-relaxed max-w-2xl mx-auto font-sans font-light">
          Svaki detalj je pažljivo osmišljen sa dubokim razumevanjem estetike i funkcionalnosti, pružajući savršen balans između beskompromisne sigurnosti, apsolutne zvučne izolacije i luksuznog dizajna koji oplemenjuje vaš dom.
        </p>
      </motion.div>
    </section>
  );
}

const features = [
  {
    icon: ShieldCheck,
    title: "Vrhunski Kvalitet",
    text: "Koristimo isključivo selektovano, premium puno drvo, najfinije furnire i materijale visoke gustine koji osiguravaju neprevaziđenu trajnost i luksuzan izgled."
  },
  {
    icon: Ruler,
    title: "Izrada po Mjeri",
    text: "Svaka vrata su unikatna umetnička ostvarenja, savršeno prilagođena vašim tačnim dimenzijama i najvišim estetskim zahtjevima."
  },
  {
    icon: Clock,
    title: "Poštovanje Rokova",
    text: "Garantujemo besprekornu isporuku i preciznu montažu u dogovorenom roku, bez i najmanjeg kompromisa po pitanju kvaliteta izrade."
  },
  {
    icon: Award,
    title: "Tradicija i Iskustvo",
    text: "Decenije neprocenjivog iskustva u ekskluzivnoj obradi drveta i izradi vrata koja predstavljaju krunu arhitekture prestižnih domova."
  }
];

export function WhyUsSection() {
  return (
    <section className="py-32 px-[4vw] bg-[var(--bg-alt)]">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-20">
          <div className="tag-label justify-center">Zašto odabrati nas</div>
          <h2 className="title-section">Majstorstvo u svakom detalju</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, i) => (
            <motion.div 
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }
              }}
              className="bg-[var(--bg-card)] border border-[var(--border)] p-10 hover:border-[var(--gold)] transition-colors duration-500 group"
            >
              <feat.icon className="w-10 h-10 text-[var(--gold)] mb-8 opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1} />
              <h3 className="text-xl font-serif text-[var(--text)] mb-4">{feat.title}</h3>
              <p className="text-[var(--text-dim)] text-sm">{feat.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
