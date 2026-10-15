import React from 'react';
import { BRAND_NAME, GUARANTEE_DAYS, CONTACT_EMAIL } from '../config';
import { X } from 'lucide-react';

export type ModalType = 'privacy' | 'terms' | 'refund' | 'contact' | null;

interface LegalModalProps {
  type: ModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="glass-panel w-full max-w-2xl max-h-[85vh] rounded-3xl overflow-hidden flex flex-col border border-white/15 bg-slate-900/95 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h3 className="font-serif-luxury text-xl sm:text-2xl text-white font-semibold">
            {type === 'privacy' && 'Privacy Policy'}
            {type === 'terms' && 'Terms of Use'}
            {type === 'refund' && 'Refund Policy'}
            {type === 'contact' && 'Contact Support'}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto text-sm text-slate-300 font-light leading-relaxed space-y-4">
          {type === 'privacy' && (
            <div>
              {/* TEMPLATE – review before launch */}
              <p className="text-xs text-amber-300/80 font-mono mb-2">[ TEMPLATE – review before launch ]</p>
              <h4 className="text-white font-medium text-base mb-1">1. Information We Collect</h4>
              <p>
                When you visit our site, we and our service providers may collect non-personally identifiable technical information such as your browser type, device information, IP address, and interaction data.
              </p>

              <h4 className="text-white font-medium text-base mt-4 mb-1">2. Meta Pixel &amp; Analytics Cookies</h4>
              <p>
                We utilize technologies such as the Meta Pixel and analytics cookies to measure visitor behavior, track video engagement milestones (such as 25%, 50%, and 75% video completion), optimize advertising campaigns, and gauge checkout intent. You may manage cookie preferences through your individual browser settings.
              </p>

              <h4 className="text-white font-medium text-base mt-4 mb-1">3. Payment &amp; Checkout Information</h4>
              <p>
                All financial transactions and orders for {BRAND_NAME} are processed securely through our authorized payment platform (Hotmart). We do not store or process your credit card numbers on our servers.
              </p>

              <h4 className="text-white font-medium text-base mt-4 mb-1">4. Contact Inquiries</h4>
              <p>
                If you contact us via email, your email address is used solely to respond to your support request and will never be sold or rented to third parties.
              </p>
            </div>
          )}

          {type === 'terms' && (
            <div>
              {/* TEMPLATE – review before launch */}
              <p className="text-xs text-amber-300/80 font-mono mb-2">[ TEMPLATE – review before launch ]</p>
              <h4 className="text-white font-medium text-base mb-1">1. Digital Product &amp; Personal License</h4>
              <p>
                Upon purchasing {BRAND_NAME}, you are granted a non-exclusive, non-transferable, personal license to download and listen to the 12 MP3 audio tracks. You may not resell, redistribute, rebroadcast, or publicly distribute these files without prior written authorization.
              </p>

              <h4 className="text-white font-medium text-base mt-4 mb-1">2. No Medical or Therapeutic Claims</h4>
              <p>
                {BRAND_NAME} is intended purely for relaxation, personal enjoyment, and contemplative audio ambiance. It does not replace medical, psychiatric, or therapeutic care. Results may vary. It is not intended to diagnose, treat, cure, or prevent any illness or physical condition.
              </p>

              <h4 className="text-white font-medium text-base mt-4 mb-1">3. Safe Listening Practices</h4>
              <p>
                Please listen at comfortable, safe volume levels. Do not listen to meditative sound tracks while operating motor vehicles, heavy machinery, or engaging in activities requiring undivided alertness.
              </p>
            </div>
          )}

          {type === 'refund' && (
            <div>
              {/* TEMPLATE – review before launch */}
              <p className="text-xs text-amber-300/80 font-mono mb-2">[ TEMPLATE – review before launch ]</p>
              <h4 className="text-white font-medium text-base mb-1">1. {GUARANTEE_DAYS}-Day Satisfaction Guarantee</h4>
              <p>
                We proudly provide a {GUARANTEE_DAYS}-day satisfaction guarantee for {BRAND_NAME}. If you are not satisfied with your purchase, you may request a 100% full refund within {GUARANTEE_DAYS} calendar days from your purchase date.
              </p>

              <h4 className="text-white font-medium text-base mt-4 mb-1">2. How to Request Your Refund</h4>
              <p>
                To request a refund, you can either:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
                <li>Submit a refund request directly through the Hotmart buyer platform using your order transaction ID, OR</li>
                <li>Email our support team directly at <a href={`mailto:${CONTACT_EMAIL}`} className="text-amber-300 underline">{CONTACT_EMAIL}</a> with your order number.</li>
              </ul>
              <p className="mt-3">
                Refunds are processed promptly and returned to the original payment method used during checkout.
              </p>
            </div>
          )}

          {type === 'contact' && (
            <div>
              {/* TEMPLATE – review before launch */}
              <p className="text-xs text-amber-300/80 font-mono mb-2">[ TEMPLATE – review before launch ]</p>
              <h4 className="text-white font-medium text-base mb-1">Customer Care &amp; Support</h4>
              <p>
                Have questions about your order, downloading your {BRAND_NAME} audio files, or need assistance? Our support team is here to assist you.
              </p>
              <div className="mt-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Official Support Email</p>
                <a 
                  href={`mailto:${CONTACT_EMAIL}`} 
                  className="text-amber-300 hover:text-amber-200 text-base font-medium underline"
                >
                  {CONTACT_EMAIL}
                </a>
                <p className="text-xs text-slate-400 mt-2">
                  Typical response time: Within 24 business hours (Monday through Friday).
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-medium transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
