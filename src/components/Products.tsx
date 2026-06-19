import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, Home } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const categories = [
  {
    title: "Ulazna Vrata",
    desc: "Naša luksuzna ulazna vrata predstavljaju spoj impresivne arhitekture i beskompromisne bezbednosti. Uz najviši nivo termo i zvučne izolacije, kreirana su od pažljivo biranih materijala kako bi zaštitila Vaš mir i zadivila svakog posetioca Vašeg doma.",
    icon: Shield,
    img: "/6.jpg",
    bullets: ["SIGURNOSNE BRAVE", "TERMO IZOLACIJA", "ČELIČNA KONSTRUKCIJA"]
  },
  {
    title: "Sobna Vrata",
    desc: "Elegantna sobna vrata koja nepogrešivo daju karakter i toplinu svakom prostoru. Nudimo selekciju prestižnih dizajna, od raskošnih klasičnih linija do sofisticiranih minimalističkih modela, pažljivo stvorenih po Vašoj meri.",
    icon: Home,
    img: "/3.jpg",
    bullets: ["VRHUNSKI DIZAJN", "ZVUČNA IZOLACIJA", "RAZLIČITI DEKORI"]
  }
];

export function CategoriesSection() {
  return (
    <section id="proizvodi" className="py-32 px-[4vw] bg-[var(--bg)] border-b border-[var(--border)]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="tag-label">Nas asortiman</div>
            <h2 className="title-section mb-0">Vrste Vrata u <br/><span className="title-italic-gold">Našoj Ponudi</span></h2>
          </motion.div>
          <motion.a 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            href="#galerija" 
            className="text-[0.75rem] uppercase tracking-widest text-[var(--text)] hover:text-[var(--gold)] transition-colors flex items-center gap-2 pb-2 border-b border-[var(--border-light)] hover:border-[var(--gold)]"
          >
            Pogledaj sve radove <ChevronRight className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
             <motion.div 
               key={i}
               initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
               variants={{
                 hidden: { opacity: 0, y: 30 },
                 visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }
               }}
               className="flex flex-col bg-[var(--bg-card)] border border-[var(--border)] rounded-3xl overflow-hidden"
             >
               <div className="relative h-[300px] w-full">
                 <div className="absolute top-6 left-6 w-12 h-12 border border-[var(--gold)]/30 bg-black/60 backdrop-blur-md rounded-2xl flex items-center justify-center text-[var(--gold)] z-10">
                   <cat.icon strokeWidth={1.5} className="w-5 h-5" />
                 </div>
                 <img src={cat.img} alt={cat.title} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent opacity-80" />
               </div>
               
               <div className="p-10 flex flex-col flex-grow">
                 <h3 className="text-3xl font-serif text-[var(--text)] mb-6">{cat.title}</h3>
                 <p className="text-[var(--text-dim)] text-sm mb-10 flex-grow leading-relaxed">{cat.desc}</p>
                 
                 <ul className="space-y-4">
                   {cat.bullets.map((bullet, j) => (
                     <li key={j} className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.15em] text-[var(--text)]">
                       <div className="w-1.5 h-1.5 bg-[var(--gold)] rounded-full" />
                       {bullet}
                     </li>
                   ))}
                 </ul>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


