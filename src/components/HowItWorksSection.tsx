import React from 'react';
import { DownloadCloud, Headphones, Sparkles, ArrowRight } from 'lucide-react';
import { BRAND_NAME } from '../config';

const steps = [
  {
    step: "01",
    icon: <DownloadCloud className="w-6 h-6 text-teal-300" />,
    title: "Instant Digital Access",
    description: `Complete your one-time purchase and receive immediate lifetime access to download all 12 ${BRAND_NAME} MP3 audio tracks to any of your devices.`,
  },
  {
    step: "02",
    icon: <Sparkles className="w-6 h-6 text-amber-300" />,
    title: "Select Your Daily Frequency",
    description: "Browse the curated tracklist to choose the exact vibration you desire — from calming mental chatter to peaceful evening unwinding.",
  },
  {
    step: "03",
    icon: <Headphones className="w-6 h-6 text-indigo-300" />,
    title: "Relax & Immerse",
    description: "Play through ordinary earphones, earbuds, or ambient room speakers for 15 to 30 minutes while working, resting, meditating, or reading.",
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-teal-400 font-medium">
            Simplicity by Design
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-white font-medium mt-3 mb-4">
            How It Works in 3 Simple Steps
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            No complicated apps, no recurring subscriptions, and no special technical gear required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-px bg-gradient-to-r from-teal-500/20 via-amber-400/30 to-indigo-500/20 -translate-y-8 pointer-events-none" />

          {steps.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-7 rounded-3xl relative flex flex-col items-center text-center hover:border-indigo-400/30 transition-all duration-300"
            >
              <span className="text-xs font-mono font-bold tracking-widest text-amber-300/80 mb-3 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20">
                STEP {item.step}
              </span>

              <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center my-3 shadow-inner">
                {item.icon}
              </div>

              <h3 className="font-serif-luxury text-xl sm:text-2xl text-white font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-slate-400 text-sm font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
