import React from 'react';
import { BRAND_NAME, PRICE, handleCheckoutClick } from '../config';
import { PlayCircle, Sparkles, Waves, ShieldCheck } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToPlayer = () => {
    const el = document.getElementById('vsl-player-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-6 pb-14 sm:pt-12 sm:pb-20 px-4 sm:px-6 overflow-hidden">
      {/* Aurora glow backdrops */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[320px] sm:w-[680px] h-[380px] rounded-full bg-gradient-to-r from-teal-500/15 via-indigo-600/20 to-amber-500/15 blur-3xl pointer-events-none animate-aurora-1" />
      <div className="absolute top-48 -right-20 w-80 h-80 rounded-full bg-purple-700/10 blur-3xl pointer-events-none animate-aurora-2" />

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Subtle Sacred Sound motif pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-amber-200/90 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md">
          <Waves className="w-3.5 h-3.5 text-amber-400" />
          <span>The Ancient Solfeggio Resonance Collection</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-white font-medium tracking-tight leading-[1.18] sm:leading-[1.15] mb-5">
          Elevate Your Daily State with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 italic">
            {BRAND_NAME}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="font-sans-clean text-slate-300 text-base sm:text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-8 sm:mb-10 text-balance">
          A masterfully crafted suite of 12 pure Solfeggio &amp; harmonic audio frequencies designed to invite deep calm, mental clarity, and centered tranquility into your living space.
        </p>

        {/* CTA Buttons (Section 1 requirement) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
          {/* Button 1: Watch the Video */}
          <button
            type="button"
            onClick={scrollToPlayer}
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-white font-medium text-sm sm:text-base backdrop-blur-md transition-all active:scale-[0.98] flex items-center justify-center gap-2.5 shadow-sm"
          >
            <PlayCircle className="w-5 h-5 text-amber-400" />
            <span>Watch the Video</span>
          </button>

          {/* Button 2: Buy Now - $37 */}
          <button
            type="button"
            onClick={() => handleCheckoutClick('hero_cta_button')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-amber-500/25 hover:brightness-105 active:scale-[0.98] transition flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-slate-950 fill-amber-500" />
            <span>Buy Now – {PRICE}</span>
          </button>
        </div>

        {/* Reassurance micro-copy */}
        <div className="flex items-center justify-center gap-5 text-xs text-slate-400 mt-6 flex-wrap">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            12 Pure MP3 Audio Tracks
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            Instant Digital Download
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            7-Day Guarantee
          </span>
        </div>
      </div>
    </section>
  );
};
