import React, { useState } from 'react';
import { BRAND_NAME, CONTACT_EMAIL } from '../config';
import { LegalModal, ModalType } from './LegalModal';
import { Mail, Radio } from 'lucide-react';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<ModalType>(null);

  return (
    <footer className="relative bg-[#04050d] border-t border-white/10 pt-12 pb-16 px-4 sm:px-6 text-slate-400">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Brand Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 rounded-full bg-amber-400/20 border border-amber-300/40 flex items-center justify-center text-amber-300">
            <Radio className="w-3.5 h-3.5 text-amber-300" />
          </div>
          <span className="font-serif-luxury text-xl font-bold tracking-wider text-white">
            {BRAND_NAME}
          </span>
        </div>

        <p className="text-xs text-slate-400 max-w-md font-light mb-6">
          12 Solfeggio &amp; healing frequency MP3 tracks for personal mindfulness, relaxation, and acoustic balance.
        </p>

        {/* Contact Email Link */}
        <div className="mb-8">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-amber-300 transition py-1.5 px-3.5 rounded-full bg-white/[0.04] border border-white/10"
          >
            <Mail className="w-3.5 h-3.5 text-teal-400" />
            <span>Support: {CONTACT_EMAIL}</span>
          </a>
        </div>

        {/* Policy Links (Opens modals with TEMPLATE – review before launch texts) */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 mb-8">
          <button
            type="button"
            onClick={() => setModalType('privacy')}
            className="hover:text-amber-200 transition underline-offset-4 hover:underline"
          >
            Privacy Policy
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={() => setModalType('terms')}
            className="hover:text-amber-200 transition underline-offset-4 hover:underline"
          >
            Terms of Use
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={() => setModalType('refund')}
            className="hover:text-amber-200 transition underline-offset-4 hover:underline"
          >
            Refund Policy
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={() => setModalType('contact')}
            className="hover:text-amber-200 transition underline-offset-4 hover:underline"
          >
            Contact
          </button>
        </nav>

        {/* Mandatory Legal & Medical Disclaimer */}
        <div className="max-w-2xl text-[11px] leading-relaxed text-slate-400 space-y-2.5 pt-6 border-t border-white/5">
          <p>
            <strong>Medical Disclaimer:</strong> This product does not replace medical or therapeutic care. Results may vary. Not intended to diagnose, treat, cure or prevent any disease. Always consult your qualified healthcare practitioner for any medical concerns.
          </p>
          <p>
            <strong>Platform Disclaimer:</strong> This site is not part of Facebook or Meta Platforms, Inc. Additionally, this site is NOT endorsed by Meta Platforms, Inc. in any way. FACEBOOK is a trademark of META PLATFORMS, INC.
          </p>
          <p className="text-slate-400 pt-2">
            &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
        </div>
      </div>

      {/* In-page Modal */}
      <LegalModal type={modalType} onClose={() => setModalType(null)} />
    </footer>
  );
};
