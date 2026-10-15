import React, { useState, useEffect } from 'react';
import { BRAND_NAME, PRICE, handleCheckoutClick } from '../config';
import { Sparkles, Radio } from 'lucide-react';

export const StickyHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 120);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToPlayer = () => {
    const el = document.getElementById('vsl-player-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/85 backdrop-blur-md border-b border-indigo-900/40 shadow-lg shadow-black/30 py-3' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Name Logo */}
        <div 
          onClick={scrollToPlayer}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-teal-500/30 to-amber-400/40 border border-amber-300/40 flex items-center justify-center text-amber-300 transition-transform group-hover:scale-105">
            <Radio className="w-4 h-4 text-amber-300" />
          </div>
          <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-amber-200 transition">
            {BRAND_NAME}
          </span>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={scrollToPlayer}
            className="hidden sm:inline-flex text-xs font-medium text-slate-300 hover:text-white transition px-3 py-1.5"
          >
            Watch Video
          </button>

          <button
            type="button"
            onClick={() => handleCheckoutClick('sticky_header_button')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-amber-500/20 hover:brightness-105 active:scale-95 transition"
          >
            <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
            <span>Buy Now – {PRICE}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
