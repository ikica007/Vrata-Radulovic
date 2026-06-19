import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export function AboutSection() {
  return (
    <section id="onama" className="py-32 px-[4vw] bg-[var(--bg)] border-b border-[var(--border)]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="tag-label">O nama</div>
          <h2 className="title-section mb-8">Tradicija izrade <span className="title-italic-gold">vrhunskih vrata</span></h2>
          <div className="space-y-6 text-[var(--text-dim)]">
            <p>Doors Lux Radulović predstavlja vrhunac ekskluzivne obrade drveta i porodičnu tradiciju iz Nikšića koja decenijama postavlja standarde u kreiranju unikatnih sobnih i ulaznih vrata po meri. Naša umetnost oblikovanja drveta i opsesivna posvećenost i najsitnijim detaljima rezultiraju remek-delima koja ne samo da ispunjavaju svoju funkciju, već postaju centralni estetski pečat svakog prostora.</p>
            <p>Kroz pažljivu selekciju isključivo najkvalitetnijih materijala — od plemenitog punog drveta i raritetnog prirodnog furnira do tehnološki naprednih kompozita, uspešno spajamo nasleđene zanatske tehnike ručne izrade sa prefinjenim, luksuznim modernim dizajnom.</p>
          </div>
          <a href="#galerija" className="inline-block mt-10 px-8 py-4 text-xs tracking-widest uppercase border border-[var(--border-light)] hover:border-[var(--gold)] text-[var(--text)] transition-colors">
            Saznajte Više
          </a>
        </motion.div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="relative aspect-square lg:aspect-[4/3] bg-[var(--bg-alt)] border border-[var(--border)] overflow-hidden"
        >
          <img src="/14.jpg" alt="Moderna vrata enterijer" className="w-full h-full object-cover opacity-60" />
        </motion.div>
      </div>
    </section>
  );
}

const galleryImages = [
  { type: 'img', url: '/1.jpg', span: 'col-span-1 row-span-2', category: 'sobna' },
  { type: 'img', url: '/2.jpg', span: 'col-span-1 row-span-1', category: 'sobna' },
  { type: 'img', url: '/4.jpg', span: 'col-span-1 row-span-1', category: 'ulazna' },
  { type: 'img', url: '/5.jpg', span: 'col-span-1 row-span-1', category: 'sobna' },
  { type: 'img', url: '/7.jpg', span: 'col-span-2 row-span-1', category: 'stepenice' },
  { type: 'video', url: '/8.mp4', span: 'col-span-1 row-span-1', category: 'ulazna' },
  { type: 'img', url: '/9.jpg', span: 'col-span-1 row-span-2', category: 'ulazna' },
  { type: 'img', url: '/10.jpg', span: 'col-span-1 row-span-1', category: 'sobna' },
  { type: 'img', url: '/11.jpg', span: 'col-span-1 row-span-1', category: 'brave' },
  { type: 'img', url: '/12.jpg', span: 'col-span-1 row-span-1', category: 'sobna' },
  { type: 'img', url: '/13.jpg', span: 'col-span-2 row-span-1', category: 'sobna' },
];

const filters = [
  { id: 'sve', label: 'Sve' },
  { id: 'sobna', label: 'Sobna Vrata' },
  { id: 'ulazna', label: 'Ulazna Vrata' },
  { id: 'brave', label: 'Brave' },
  { id: 'stepenice', label: 'Stepenice' },
];

export function GallerySection() {
  const [selectedMedia, setSelectedMedia] = useState<{url: string, type: string} | null>(null);
  const [activeFilter, setActiveFilter] = useState('sve');

  const filteredImages = activeFilter === 'sve'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <section id="galerija" className="py-32 px-[4vw] bg-[var(--bg-alt)] border-b border-[var(--border)]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <div className="tag-label uppercase tracking-widest text-[var(--gold)] text-xs font-semibold mb-6 flex justify-center">Naši Radovi</div>
          <h2 className="text-4xl md:text-[3.5rem] leading-[1.1] font-sans font-semibold text-white mb-8">Galerija <span className="title-italic-gold">Inspiracije</span></h2>
          <p className="text-[var(--text-dim)] text-base leading-relaxed max-w-2xl mx-auto">Istražite našu ekskluzivnu selekciju unikatnih vrata koja predstavljaju savršenu sinergiju luksuznog dizajna i superiorne funkcionalnosti. Svaka linija, tekstura i detalj pažljivo su projektovani da unesu karakter, toplinu i raskoš u Vaš životni ili poslovni prostor.</p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`relative px-6 py-3 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden cursor-pointer ${
                  isActive
                    ? 'text-[var(--gold)] border-[var(--gold)]'
                    : 'text-[var(--text-dim)] border-[var(--border-light)] hover:text-white hover:border-[var(--text-dim)]'
                } border`}
              >
                <span className="relative z-10">{filter.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeFilterBg"
                    className="absolute inset-0 bg-[var(--gold-glow)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[250px] gap-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={img.url + i}
                onClick={() => setSelectedMedia(img)}
                className={`relative group bg-[var(--bg)] border border-[var(--border)] overflow-hidden ${img.span} cursor-pointer`}
              >
                {img.type === 'video' ? (
                  <video src={img.url} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                ) : (
                  <img src={img.url} alt="Gallery item" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm">
                    <Search className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMedia(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8"
            >
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50"
              >
                <X className="w-8 h-8" />
              </button>
              
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-full max-h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedMedia.type === 'video' ? (
                  <video src={selectedMedia.url} autoPlay loop controls className="max-w-[100vw] max-h-[90vh] object-contain" />
                ) : (
                  <img src={selectedMedia.url} alt="Enlarged gallery item" className="max-w-[100vw] max-h-[90vh] object-contain" />
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
