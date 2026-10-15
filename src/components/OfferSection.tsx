import React from 'react';
import { BRAND_NAME, PRICE, GUARANTEE_DAYS, handleCheckoutClick } from '../config';
import { Check, ShieldCheck, Sparkles, Disc, Download, Smartphone, Clock } from 'lucide-react';

export const OfferSection: React.FC = () => {
  return (
    <section id="offer-section" className="relative py-16 sm:py-24 px-4 sm:px-6">
      {/* Aurora glow behind offer card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[450px] rounded-full bg-gradient-to-r from-teal-500/10 via-amber-500/15 to-indigo-600/15 blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-amber-300 font-medium">
            Limited Time Master Collection
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-white font-medium mt-2">
            Claim Your {BRAND_NAME} Collection
          </h2>
        </div>

        {/* The Main Offer Card */}
        <div className="glass-panel-gold rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl shadow-indigo-950/80">
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-400 via-amber-400 to-amber-300" />

          {/* Pricing Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-white/10 gap-4">
            <div>
              <span className="px-3.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider inline-block mb-2">
                Special One-Time Digital Release
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-bold">
                {BRAND_NAME} Full Album
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Complete 12 Solfeggio &amp; Healing Audio MP3s
              </p>
            </div>

            <div className="text-left sm:text-right">
              <div className="flex items-baseline gap-2 sm:justify-end">
                <span className="text-slate-500 line-through text-lg font-light">$97</span>
                <span className="font-serif-luxury text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  {PRICE}
                </span>
              </div>
              <span className="text-xs text-teal-300 font-medium block mt-0.5">
                One-time payment • Lifetime access
              </span>
            </div>
          </div>

          {/* Inclusions Checklist */}
          <div className="py-8">
            <h4 className="text-xs uppercase tracking-widest text-slate-400 font-medium mb-4">
              Here is everything you get:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm text-slate-200">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300 flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>All 12 Solfeggio &amp; Nature MP3 tracks</span>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300 flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Pristine 320kbps High-Fidelity Master audio</span>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300 flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Instant digital access delivery immediately</span>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300 flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Plays on smartphone, tablet, computer or speaker</span>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300 flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Lifetime ownership with unlimited re-downloads</span>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300 flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Zero recurring fees or subscriptions</span>
              </div>
            </div>
          </div>

          {/* Big Buy Button */}
          <button
            type="button"
            onClick={() => handleCheckoutClick('offer_card_main_button')}
            className="w-full py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-bold text-lg sm:text-xl tracking-wide shadow-2xl shadow-amber-500/40 hover:brightness-105 active:scale-[0.98] transition flex items-center justify-center gap-3 animate-gold-pulse group"
          >
            <Sparkles className="w-5 h-5 text-slate-950 fill-amber-500 transition-transform group-hover:rotate-12" />
            <span>Get Instant Access Now – Only {PRICE}</span>
          </button>

          {/* Guarantee Badge inside Offer Card */}
          <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-4 bg-indigo-950/40 p-4 rounded-2xl border border-indigo-400/20">
            <div className="w-12 h-12 rounded-xl bg-teal-500/15 border border-teal-400/30 flex items-center justify-center text-teal-300 flex-shrink-0">
              <ShieldCheck className="w-7 h-7 text-teal-300" />
            </div>
            <div>
              <div className="text-white font-medium text-sm flex items-center gap-2">
                <span>{GUARANTEE_DAYS}-Day Money-Back Guarantee</span>
              </div>
              <p className="text-slate-300 text-xs mt-0.5 leading-relaxed font-light">
                If you are not satisfied with {BRAND_NAME}, you can request a full refund within {GUARANTEE_DAYS} days of purchase directly through the purchase platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
