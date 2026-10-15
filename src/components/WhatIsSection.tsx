import React from 'react';
import { BRAND_NAME } from '../config';
import { Disc3, Sparkles, Compass, Radio } from 'lucide-react';

export const WhatIsSection: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-teal-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-400/20 text-teal-300 text-xs font-medium mb-4">
            <Compass className="w-3.5 h-3.5 text-teal-400" />
            <span>Harmonic Acoustic Heritage</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-white font-medium mb-5">
            What is <span className="text-amber-300 italic">{BRAND_NAME}</span>?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            {BRAND_NAME} is an artisan collection of 12 precisely tuned, high-fidelity audio tracks. Built around mathematical sound intervals celebrated across centuries, each track creates an acoustic sanctuary designed to restore serenity to everyday life.
          </p>
        </div>

        {/* 3 Pillars in Glassmorphism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden group hover:border-amber-400/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-300 mb-6 group-hover:scale-105 transition-transform">
              <Radio className="w-6 h-6 text-teal-300" />
            </div>
            <h3 className="font-serif-luxury text-xl sm:text-2xl text-white font-semibold mb-3">
              Precision Acoustic Engineering
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Every frequency is rendered with studio-grade tonal clarity, delivering smooth harmonic resonance free of harsh digital artifacts or distracting overtones.
            </p>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden group hover:border-amber-400/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-300 mb-6 group-hover:scale-105 transition-transform">
              <Disc3 className="w-6 h-6 text-indigo-300" />
            </div>
            <h3 className="font-serif-luxury text-xl sm:text-2xl text-white font-semibold mb-3">
              Sacred Solfeggio Scale
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Centuries-old tonal scales revered in contemplative traditions, now thoughtfully orchestrated for modern meditation, journaling, creative flow, and relaxation.
            </p>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden group hover:border-amber-400/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 mb-6 group-hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6 text-amber-300" />
            </div>
            <h3 className="font-serif-luxury text-xl sm:text-2xl text-white font-semibold mb-3">
              Seamless Daily Integration
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Delivered in universal MP3 format, ready to play effortlessly on any smartphone, tablet, computer, or home sound system whenever you need a mindful reset.
            </p>
          </div>
        </div>

        {/* Decorative concentric soundwave graphic */}
        <div className="mt-12 flex justify-center items-center opacity-40">
          <svg className="w-64 h-12 text-teal-400" viewBox="0 0 400 60" fill="none">
            <path d="M0 30 Q 50 10, 100 30 T 200 30 T 300 30 T 400 30" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
            <path d="M0 30 Q 50 0, 100 30 T 200 30 T 300 30 T 400 30" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
            <path d="M0 30 Q 50 20, 100 30 T 200 30 T 300 30 T 400 30" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
          </svg>
        </div>
      </div>
    </section>
  );
};
