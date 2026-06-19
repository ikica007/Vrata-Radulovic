import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--bg)] border-t border-[var(--border)] pt-24 pb-12 px-[4vw]">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between gap-16 mb-24">
        <div className="lg:max-w-sm">
          <a href="#" className="font-serif text-3xl tracking-widest text-[var(--text)] uppercase flex items-center gap-2 mb-6">
            DOORS<span className="text-[var(--gold)]">LUX</span>
          </a>
          <p className="text-[var(--text-dim)] text-base leading-relaxed">
            Ekskluzivna izrada premium sobnih i ulaznih vrata po meri. Neprikosnovena tradicija i vrhunski kvalitet od 1994. godine.
          </p>
        </div>
        
        <div className="flex-grow max-w-2xl flex flex-col">
          <h4 className="text-[var(--text)] text-xs font-semibold tracking-[0.2em] uppercase mb-8">Naša Lokacija</h4>
          <div className="w-full h-[300px] relative rounded-xl overflow-hidden border border-[var(--border-light)] hover:border-[var(--gold)] transition-colors duration-500 z-10">
            <div className="absolute inset-0 bg-[var(--bg)] animate-pulse -z-10" />
            <iframe 
              src="https://maps.google.com/maps?q=Doors%20Lux%20Radulovi%C4%87,%20Rastoci,%20Niksic&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto pt-8 border-t border-[var(--border-light)] flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[var(--text-dim)] text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} Doors Lux Radulović. Sva prava zadržana.
        </div>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/doorsluxradulovic?igsh=NHE3dGd2Y3U3ZDVi" target="_blank" rel="noreferrer" className="w-10 h-10 border border-[var(--border-light)] flex items-center justify-center text-[var(--text-dim)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-all">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="https://www.facebook.com/share/1EPzFWrQUJ/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="w-10 h-10 border border-[var(--border-light)] flex items-center justify-center text-[var(--text-dim)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-all">
            <Facebook className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
