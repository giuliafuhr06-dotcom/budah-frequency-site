import React from 'react';
import { BRAND_NAME } from '../config';
import { Smartphone, Laptop, CheckCircle2, CloudDownload, Disc, Shield, Sparkles } from 'lucide-react';

export const WhatsIncludedSection: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-teal-400 font-medium">
            Full Transparency
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-white font-medium mt-3 mb-4">
            Everything Included With Your Order
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            You receive full, unrestricted digital ownership of the complete master library.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="glass-panel p-7 rounded-3xl relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 mb-5">
                <Disc className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="font-serif-luxury text-2xl text-white font-semibold mb-2">
                12 Master MP3 Tracks
              </h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed mb-4">
                The entire suite of curated Solfeggio frequencies and restorative ambient recordings, engineered for crisp depth and balanced resonance.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-slate-300 border-t border-white/5 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Standard universal 320kbps MP3</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Compatible with all audio players</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="glass-panel p-7 rounded-3xl relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-400/10 border border-teal-400/30 flex items-center justify-center text-teal-300 mb-5">
                <CloudDownload className="w-6 h-6 text-teal-300" />
              </div>
              <h3 className="font-serif-luxury text-2xl text-white font-semibold mb-2">
                Instant Digital Delivery
              </h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed mb-4">
                No waiting for shipping or physical discs. As soon as your order completes, you are directed to your private download hub.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-slate-300 border-t border-white/5 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Instant access link via email</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Lifetime access to re-download anytime</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="glass-panel p-7 rounded-3xl relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-400/10 border border-indigo-400/30 flex items-center justify-center text-indigo-300 mb-5">
                <Smartphone className="w-6 h-6 text-indigo-300" />
              </div>
              <h3 className="font-serif-luxury text-2xl text-white font-semibold mb-2">
                Universal Device Support
              </h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed mb-4">
                Enjoy {BRAND_NAME} on your smartphone, tablet, laptop, desktop, or streaming speakers without needing proprietary apps.
              </p>
            </div>
            <ul className="space-y-2 text-xs text-slate-300 border-t border-white/5 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Apple iOS, Android, Mac &amp; Windows</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Plays offline once downloaded</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Highlight Banner */}
        <div className="glass-panel-gold p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 flex-shrink-0">
              <Sparkles className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-xl sm:text-2xl text-white font-semibold">
                One-Time Payment. Lifetime Ownership.
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm font-light mt-0.5">
                You own the audio files directly. There are never any recurring subscriptions, monthly charges, or surprise fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
