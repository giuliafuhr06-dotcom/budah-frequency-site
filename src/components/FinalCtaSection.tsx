import React from 'react';
import { BRAND_NAME, PRICE, GUARANTEE_DAYS, handleCheckoutClick } from '../config';
import { Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Aurora glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[400px] rounded-full bg-gradient-to-r from-teal-500/15 via-amber-500/20 to-indigo-500/15 blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-white font-medium mb-6">
          Begin Your Daily Frequency Journey Today
        </h2>

        <p className="font-sans-clean text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Give yourself the gift of acoustic serenity. Download the full 12-track {BRAND_NAME} master suite and experience how intentional sound frequencies can transform your personal sanctuary.
        </p>

        {/* Big Final Buy Button */}
        <div className="max-w-md mx-auto">
          <button
            type="button"
            onClick={() => handleCheckoutClick('final_cta_button')}
            className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-bold text-lg sm:text-xl tracking-wide shadow-2xl shadow-amber-500/40 hover:brightness-105 active:scale-[0.98] transition flex items-center justify-center gap-3 animate-gold-pulse group"
          >
            <Sparkles className="w-5 h-5 text-slate-950 fill-amber-500 transition-transform group-hover:rotate-12" />
            <span>Download Now – Only {PRICE}</span>
          </button>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 mt-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              {GUARANTEE_DAYS}-Day Satisfaction Guarantee
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              Instant Secure Checkout
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
