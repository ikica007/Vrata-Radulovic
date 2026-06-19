import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const ime = formData.get('ime') as string;
    const email = formData.get('email') as string;
    const telefon = formData.get('telefon') as string;
    const poruka = formData.get('poruka') as string;

    const subject = `Novi upit sa sajta: ${ime}`;
    const body = `Ime: ${ime}\nEmail: ${email}\nTelefon: ${telefon}\n\nPoruka:\n${poruka}`;

    window.location.href = `mailto:info@doorslux.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="kontakt" className="py-32 px-[4vw] bg-[var(--bg)] border-b border-[var(--border)]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="tag-label uppercase tracking-widest text-[#B49A5E] text-xs font-semibold mb-6">Kontakt</div>
          <h2 className="text-4xl md:text-[3.5rem] leading-[1.1] font-sans font-semibold text-white mb-8">Započnimo vaš <br/> projekat</h2>
          <p className="text-[var(--text-dim)] mb-12 max-w-md text-base leading-relaxed">Bilo da renovirate dom ili gradite novi, tu smo da vam pomognemo u izboru savršenih vrata. Kontaktirajte nas za besplatne konsultacije.</p>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-full border border-[var(--border-light)] flex items-center justify-center text-[var(--gold)] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--text-dim)] mb-1 font-medium">Telefon</div>
                <a href="tel:+38267410222" className="text-xl font-medium text-[var(--text)] hover:text-[var(--gold)] transition-colors block">067 410 222</a>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-full border border-[var(--border-light)] flex items-center justify-center text-[var(--gold)] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--text-dim)] mb-1 font-medium">Email</div>
                <a href="mailto:info@doorslux.me" className="text-xl font-medium text-[var(--text)] hover:text-[var(--gold)] transition-colors block">info@doorslux.me</a>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-full border border-[var(--border-light)] flex items-center justify-center text-[var(--gold)] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--text-dim)] mb-1 font-medium">Lokacija</div>
                <div className="text-xl font-medium text-[var(--text)]">Nikšić, Crna Gora</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[var(--bg-card)] border-t-[3px] border-t-[var(--gold)] p-10 md:p-14">
          <h3 className="text-2xl font-serif text-[var(--text)] font-medium mb-10">Pošaljite upit</h3>
          <form onSubmit={handleSubmit} className="space-y-8 flex flex-col">
            <div className="relative">
              <input type="text" name="ime" required placeholder="Vaše Ime" className="w-full bg-transparent border-b border-[var(--border-light)] py-4 text-[var(--text)] font-light placeholder:text-[var(--text-dim)] focus:outline-none focus:border-[var(--gold)] transition-colors" />
            </div>
            <div className="relative">
              <input type="email" name="email" required placeholder="Email Adresa" className="w-full bg-transparent border-b border-[var(--border-light)] py-4 text-[var(--text)] font-light placeholder:text-[var(--text-dim)] focus:outline-none focus:border-[var(--gold)] transition-colors" />
            </div>
            <div className="relative">
              <input type="tel" name="telefon" placeholder="Broj Telefona" className="w-full bg-transparent border-b border-[var(--border-light)] py-4 text-[var(--text)] font-light placeholder:text-[var(--text-dim)] focus:outline-none focus:border-[var(--gold)] transition-colors" />
            </div>
            <div className="relative">
              <textarea name="poruka" required placeholder="Vaša Poruka" rows={4} className="w-full bg-transparent border-b border-[var(--border-light)] py-4 text-[var(--text)] font-light placeholder:text-[var(--text-dim)] focus:outline-none focus:border-[var(--gold)] transition-colors resize-none"></textarea>
            </div>
            <button type="submit" className="w-full mt-6 px-8 py-5 border border-[var(--border-light)] hover:border-[var(--gold)] hover:text-[var(--gold)] bg-transparent text-[var(--text)] text-xs font-semibold tracking-[0.2em] uppercase transition-colors">
              Pošalji poruku
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
