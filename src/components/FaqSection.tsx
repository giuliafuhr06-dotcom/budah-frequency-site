import React, { useState } from 'react';
import { BRAND_NAME, GUARANTEE_DAYS, CONTACT_EMAIL, PRICE } from '../config';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How do I get my files?",
    answer: `Immediately after your secure checkout is completed, you will receive instant access on your confirmation page, as well as a confirmation email containing your direct download link. You can download all 12 ${BRAND_NAME} high-definition MP3 files to your phone, tablet, or computer right away.`
  },
  {
    question: "What is the refund policy?",
    answer: `Every order of ${BRAND_NAME} comes with our unconditional ${GUARANTEE_DAYS}-day money-back guarantee. If you decide the collection is not right for you within ${GUARANTEE_DAYS} days of purchase, simply submit a refund request through the Hotmart customer portal or reach out to our team at ${CONTACT_EMAIL} for a complete 100% refund.`
  },
  {
    question: "Can I listen on my phone?",
    answer: `Yes, absolutely! The audio files are standard, universal MP3s. You can play them directly on any iPhone, iPad, Android phone, tablet, laptop, or desktop computer using your favorite native music player (such as Apple Music, Spotify local files, Google Drive, or any file player).`
  },
  {
    question: "Do I need special headphones to experience the frequencies?",
    answer: `No special or expensive equipment is required. While standard headphones or comfortable earbuds provide an intimate, immersive listening experience, you can also play the frequencies freely through your laptop speakers, bedside speaker, or home sound system to gently harmonize your entire room.`
  },
  {
    question: "How often should I listen to the tracks?",
    answer: `You can listen whenever you feel drawn to a moment of stillness, focus, or relaxation. Many listeners enjoy playing a calming frequency for 15 to 30 minutes in the morning to start their day centered, or in the evening to unwind before sleep.`
  },
  {
    question: "Is there any monthly subscription or recurring fee?",
    answer: `No. ${BRAND_NAME} is a one-time purchase of only ${PRICE}. You receive complete lifetime ownership of all 12 MP3 files with no recurring charges, memberships, or hidden fees ever.`
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-400/20 text-teal-300 text-xs font-medium mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-teal-400" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-white font-medium mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Everything you need to know about purchasing and enjoying {BRAND_NAME}.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl overflow-hidden border border-white/8 transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 text-white hover:text-amber-200 transition"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-luxury text-lg sm:text-xl font-medium">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-300 text-sm sm:text-base font-light leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
