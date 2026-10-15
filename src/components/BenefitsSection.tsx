import React from 'react';
import { Moon, Feather, Brain, Heart, Wind, ShieldCheck } from 'lucide-react';

interface BenefitCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: BenefitCard[] = [
  {
    icon: <Feather className="w-6 h-6 text-teal-300" />,
    title: "Gentle Evening Calm",
    description: "Invites a soothing transition from the busy demands of the day into a tranquil, grounded headspace before sleep.",
  },
  {
    icon: <Brain className="w-6 h-6 text-amber-300" />,
    title: "Centered Mental Stillness",
    description: "Helps soften inner mental chatter during work, study, or meditation, making it easier to sustain a calm and focused flow.",
  },
  {
    icon: <Heart className="w-6 h-6 text-rose-300" />,
    title: "Emotional Ease & Harmony",
    description: "Subtle acoustic harmonics traditionally used to promote feelings of warmth, personal equilibrium, and self-compassion.",
  },
  {
    icon: <Moon className="w-6 h-6 text-indigo-300" />,
    title: "Restful Nighttime Rituals",
    description: "Create an inviting bedroom ambiance that supports peaceful bedtime routines and restful overnight quietude.",
  },
  {
    icon: <Wind className="w-6 h-6 text-cyan-300" />,
    title: "Rejuvenating Space Cleansing",
    description: "Fills your room with uplifting acoustic waves that naturally elevate the warmth and presence of your living or work area.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-300" />,
    title: "Mindful Breath & Centering",
    description: "An effortless companion for breathing exercises, somatic relaxation, yoga sessions, or introspective journaling.",
  },
];

export const BenefitsSection: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-amber-300/90 font-medium">
            Everyday Wellness &amp; Presence
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-white font-medium mt-3 mb-4">
            How Frequencies Enrich Your Day
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
            Thoughtfully tuned soundscapes designed to accompany your routines, bringing gentle balance and quiet renewal whenever you press play.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-7 rounded-3xl relative hover:border-teal-400/30 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-5">
                  {benefit.icon}
                </div>
                <h3 className="font-serif-luxury text-xl text-white font-semibold mb-2.5">
                  {benefit.title}
                </h3>
                <p className="text-slate-400 text-sm font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400/60" />
                <span>Pure acoustic resonance</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
