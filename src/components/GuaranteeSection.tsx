import React from 'react';
import { BRAND_NAME, GUARANTEE_DAYS, CONTACT_EMAIL } from '../config';
import { ShieldCheck, Mail, ExternalLink, HeartHandshake } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="relative py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-teal-500/25 relative overflow-hidden flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          {/* Guarantee Badge Icon */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-teal-500/20 via-indigo-500/20 to-amber-500/20 border-2 border-teal-400/40 flex items-center justify-center text-teal-300 flex-shrink-0 shadow-lg shadow-teal-950/40">
            <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-teal-300" />
          </div>

          <div className="text-center sm:text-left flex-1">
            <span className="text-xs uppercase tracking-widest text-teal-300 font-semibold">
              Risk-Free Exploration
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white font-semibold mt-1 mb-3">
              Our Friendly {GUARANTEE_DAYS}-Day Satisfaction Guarantee
            </h3>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-4">
              We want you to explore <span className="text-white font-medium">{BRAND_NAME}</span> with total peace of mind. Listen to the tracks during your meditation, work, and evening wind-down rituals. If within {GUARANTEE_DAYS} days you feel this collection isn&apos;t the right fit for your routine, you can easily request a 100% full refund.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs text-slate-400 pt-2 border-t border-white/10">
              <span className="flex items-center gap-1.5 text-slate-300">
                <HeartHandshake className="w-4 h-4 text-amber-400" />
                <span>Simple, no-hassle process</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Mail className="w-4 h-4 text-teal-400" />
                <span>Email {CONTACT_EMAIL} or request directly via Hotmart</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
