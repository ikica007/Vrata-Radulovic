import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[var(--bg)] flex flex-col justify-center items-center"
        >
          <div className="font-serif text-3xl tracking-widest text-[var(--text)] uppercase flex items-center gap-2 mb-8">
            DOORS<span className="text-[var(--gold)]">LUX</span>
          </div>
          <div className="w-40 h-[1px] bg-[var(--border-light)] relative overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-[var(--gold)]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
