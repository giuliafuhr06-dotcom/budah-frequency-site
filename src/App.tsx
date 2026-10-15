/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { StickyHeader } from './components/StickyHeader';
import { HeroSection } from './components/HeroSection';
import { VslPlayer } from './components/VslPlayer';
import { WhatIsSection } from './components/WhatIsSection';
import { BenefitsSection } from './components/BenefitsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { FrequenciesGrid } from './components/FrequenciesGrid';
import { WhatsIncludedSection } from './components/WhatsIncludedSection';
import { OfferSection } from './components/OfferSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#060713] text-slate-200 selection:bg-amber-400/20 selection:text-amber-200 relative overflow-x-hidden">
      {/* Dynamic Background Aurora Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-teal-500/[0.07] blur-[140px] animate-aurora-1" />
        <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] rounded-full bg-indigo-600/[0.08] blur-[150px] animate-aurora-2" />
        <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-amber-500/[0.06] blur-[160px] animate-aurora-1" />
      </div>

      {/* Main Content Flow */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Sticky Header with Buy Button */}
        <StickyHeader />

        <main className="flex-1">
          {/* 1. Hero */}
          <HeroSection />

          {/* 2. VSL Player Section (Vertical 9:16 + Delayed Button) */}
          <VslPlayer />

          {/* 3. What is Budah Frequency */}
          <WhatIsSection />

          {/* 4. Benefits (Soft wording) */}
          <BenefitsSection />

          {/* 5. How It Works (3 Steps) */}
          <HowItWorksSection />

          {/* 6. Available Frequencies Grid (12 tracks, NO play/preview buttons) */}
          <FrequenciesGrid />

          {/* 7. What's Included (NO testimonials) */}
          <WhatsIncludedSection />

          {/* 8. Offer Card */}
          <OfferSection />

          {/* 9. Guarantee Section */}
          <GuaranteeSection />

          {/* 10. FAQ */}
          <FaqSection />

          {/* 11. Final CTA */}
          <FinalCtaSection />
        </main>

        {/* 12. Footer & Legal Modals */}
        <Footer />
      </div>
    </div>
  );
}
