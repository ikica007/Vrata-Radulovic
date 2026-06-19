import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenMenu: () => void;
}

export function Navbar({ onOpenMenu }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Proizvodi', href: '#proizvodi', num: '02' },
    { label: 'O nama', href: '#onama', num: '03' },
    { label: 'Galerija', href: '#galerija', num: '04' },
    { label: 'Kontakt', href: '#kontakt', num: '05' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-between items-center px-[4vw] py-6 ${scrolled ? 'bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)] py-4 opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <a href="#" className="font-serif text-2xl tracking-widest text-[var(--text)] uppercase flex items-center gap-2">
        DOORS<span className="text-[var(--gold)]">LUX</span>
      </a>

      <div className="hidden md:flex gap-12 pointer-events-auto">
        {navLinks.map(link => (
          <a key={link.num} href={link.href} className="group relative text-xs tracking-widest uppercase text-[var(--text)] hover:text-[var(--gold)] transition-colors flex items-center gap-2">
            <span className="text-[10px] text-[var(--text-dim)] font-sans group-hover:text-[var(--gold)] transition-colors">
              {link.num}
            </span>
            {link.label}
          </a>
        ))}
      </div>

      <button 
        onClick={onOpenMenu}
        className="flex flex-col gap-1.5 w-8 items-end z-50 relative group pointer-events-auto"
      >
        <span className="h-px bg-[var(--text)] transition-all duration-300 w-10 group-hover:bg-[var(--gold)]" />
        <span className="h-px bg-[var(--text)] transition-all duration-300 w-6 group-hover:bg-[var(--gold)]" />
        <span className="h-px bg-[var(--text)] transition-all duration-300 w-10 group-hover:bg-[var(--gold)]" />
      </button>
    </nav>
  );
}
