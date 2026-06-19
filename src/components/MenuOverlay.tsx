import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Facebook, X } from 'lucide-react';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: 'Početna', href: '#hero', num: '01' },
  { label: 'Proizvodi', href: '#proizvodi', num: '02' },
  { label: 'O nama', href: '#onama', num: '03' },
  { label: 'Galerija', href: '#galerija', num: '04' },
  { label: 'Kontakt', href: '#kontakt', num: '05' }
];

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] bg-[#080808] text-[var(--text)] flex flex-col justify-center items-center"
        >
          {/* Top Right: Close Button */}
          <div 
            className="absolute top-10 right-8 md:top-12 md:right-[4vw] z-20 cursor-pointer flex items-center gap-3 group"
            onClick={onClose}
          >
            <span className="text-xs uppercase tracking-[0.2em] group-hover:text-[var(--gold)] transition-colors">Close</span>
            <X className="w-6 h-6 group-hover:text-[var(--gold)] transition-colors" />
          </div>

          <div className="flex flex-col gap-4 md:gap-6 text-left">
            {navLinks.map((link, i) => (
              <motion.a 
                key={link.num}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.2, ease: "easeOut" }}
                href={link.href} 
                onClick={onClose}
                className="group flex items-center gap-6 md:gap-10"
              >
                <div className="font-sans text-xs md:text-sm tracking-widest text-[var(--gold)] opacity-70">
                  {link.num}
                </div>
                <div className="font-sans font-medium text-4xl md:text-[4.5rem] tracking-tight group-hover:text-[var(--gold)] transition-colors inline-block relative py-1">
                  {link.label}
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--gold)] transition-all duration-500 group-hover:w-full"></div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 w-full px-8 md:px-[4vw] pb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            {/* Bottom Left */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col gap-2 font-sans tracking-widest"
            >
              <div className="text-[10px] text-[var(--text-dim)] uppercase tracking-[0.2em]">Kontakt</div>
              <div className="text-lg md:text-xl font-medium">067 410 222</div>
            </motion.div>

            {/* Bottom Right */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col md:items-end gap-4 font-sans tracking-widest text-sm"
            >
              <div className="text-[10px] text-[var(--text-dim)] uppercase tracking-[0.2em]">Social</div>
              <div className="flex gap-8 uppercase">
                <a href="https://www.instagram.com/doorsluxradulovic?igsh=NHE3dGd2Y3U3ZDVi" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[var(--gold)] transition-colors">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
                <a href="https://www.facebook.com/share/1EPzFWrQUJ/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[var(--gold)] transition-colors">
                  <Facebook className="w-4 h-4" /> Facebook
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="absolute bottom-28 md:bottom-[7.5rem] left-8 md:left-[4vw] right-8 md:right-[4vw] h-[1px] bg-[var(--border-light)] opacity-30 pointer-events-none"></div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
