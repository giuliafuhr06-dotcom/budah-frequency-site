import React from 'react';
import { Waves, Disc, Sparkles } from 'lucide-react';
import { BRAND_NAME } from '../config';

interface TrackItem {
  hz: string;
  name: string;
  purpose: string;
  toneDescription: string;
}

const tracks: TrackItem[] = [
  {
    hz: "174Hz",
    name: "Relief for pain",
    purpose: "Traditionally associated with soothing physical tension and cultivating a deeply relaxed bodily state.",
    toneDescription: "Deep resonant foundation tone designed to ease muscular tightness and ground the body.",
  },
  {
    hz: "258Hz",
    name: "Vitality",
    purpose: "Celebrated for encouraging energetic renewal, revitalized stamina, and refreshed morning motivation.",
    toneDescription: "Warm, buoyant acoustic pulse that enlivens tired energy reserves.",
  },
  {
    hz: "417Hz",
    name: "Transformation and change",
    purpose: "Traditionally associated with clearing stagnant patterns, breaking mental loops, and welcoming positive shifts.",
    toneDescription: "Dynamic, clearing harmonic wave that inspires fresh perspectives.",
  },
  {
    hz: "432Hz",
    name: "Calms the mind",
    purpose: "Tuned to natural mathematical harmony to soften mental friction, settle an overactive mind, and restore inner peace.",
    toneDescription: "Serene, universally soothing tone often celebrated as nature's organic tuning.",
  },
  {
    hz: "432Hz + 528Hz",
    name: "Opening paths",
    purpose: "A synergistic blend traditionally associated with new opportunities, cognitive clarity, and aligned direction.",
    toneDescription: "Dual-tone harmonic interplay designed for breakthrough thinking and open horizons.",
  },
  {
    hz: "528Hz",
    name: "Solfeggio Frequency",
    purpose: "Known as the celebrated Solfeggio tone, traditionally associated with harmony, heart coherence, and deep emotional resonance.",
    toneDescription: "Luminous, golden-ratio acoustic vibration revered for heartfelt balance.",
  },
  {
    hz: "639Hz",
    name: "Harmonious relationships",
    purpose: "Traditionally associated with empathy, peaceful communication, relational warmth, and heartfelt connection.",
    toneDescription: "Gentle interpersonal resonance tone that fosters understanding and emotional softness.",
  },
  {
    hz: "741Hz",
    name: "Detox",
    purpose: "Traditionally associated with shedding mental clutter, dissolving sensory fatigue, and clarifying the inner space.",
    toneDescription: "Crisp, clarifying acoustic wave that helps clear the cobwebs of mental overstimulation.",
  },
  {
    hz: "852Hz",
    name: "Intuition",
    purpose: "Traditionally associated with heightening quiet inner knowing, reflective discernment, and mindful contemplation.",
    toneDescription: "Ethereal high-register resonance ideal for meditative stillness and inner guidance.",
  },
  {
    hz: "888Hz",
    name: "Prosperity and abundance",
    purpose: "Associated with infinite flow, aligned focus, gratitude practices, and intentional manifestation routines.",
    toneDescription: "Rich, expansive vibration created to inspire a mindset of plenty and optimism.",
  },
  {
    hz: "963Hz",
    name: "Spiritual connection",
    purpose: "The crown Solfeggio frequency, traditionally associated with higher awareness, transcendent peace, and interconnectedness.",
    toneDescription: "Transcendent crystalline tone designed to elevate conscious awareness.",
  },
  {
    hz: "Ambient Field",
    name: "Sounds of Nature",
    purpose: "High-definition organic field recordings woven with restorative undertones for effortless daily background tranquility.",
    toneDescription: "Organic forest whispers, distant flowing water, and soft wind acoustics.",
  },
];

export const FrequenciesGrid: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6">
      {/* Decorative background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-400/20 text-amber-300 text-xs font-medium mb-4">
            <Waves className="w-3.5 h-3.5 text-amber-400" />
            <span>Complete 12-Track Master Edition</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-white font-medium mb-4">
            The 12 Sacred Tracks of <span className="text-amber-300 italic">{BRAND_NAME}</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            Every audio file is rendered in pristine, full-spectrum MP3 format. Explore the complete collection and its traditional harmonic focus below.
          </p>
        </div>

        {/* 12 Tracks Grid: Notice NO play/preview buttons as required */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tracks.map((track, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-3xl relative flex flex-col justify-between hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold tracking-wider px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-teal-300">
                    {track.hz}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Track #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-xl sm:text-2xl text-white font-semibold mb-2 group-hover:text-amber-200 transition">
                  {track.name}
                </h3>

                <p className="text-amber-200/90 text-xs leading-relaxed mb-3 font-medium">
                  {track.purpose}
                </p>

                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  {track.toneDescription}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Disc className="w-3.5 h-3.5 text-teal-400/80" />
                  Studio Master MP3
                </span>
                <span className="text-slate-400">Universal Audio</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-xs text-slate-400 max-w-xl mx-auto">
          * Traditional associations refer to historical and contemplative music traditions. Individual subjective experiences with sound and meditation may naturally vary.
        </div>
      </div>
    </section>
  );
};
