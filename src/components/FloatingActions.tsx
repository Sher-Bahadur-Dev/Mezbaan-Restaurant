import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Mobile Floating Bottom Bar for Call & WhatsApp */}
      <div className="fixed bottom-0 left-0 right-0 z-30 p-3 bg-white/95 backdrop-blur-md border-t border-[#E6DCce] shadow-2xl md:hidden flex items-center gap-2.5">
        <a
          href={BUSINESS_INFO.phoneTel}
          id="mobile-sticky-call-btn"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#24211E] active:bg-black text-white text-xs font-bold shadow-xs"
        >
          <Phone className="w-4 h-4 text-[#C25E26]" />
          <span>Call Mezbaan</span>
        </a>

        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-sticky-whatsapp-btn"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white text-xs font-bold shadow-xs"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Us</span>
        </a>
      </div>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          id="back-to-top-btn"
          className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-30 p-3 rounded-full bg-white text-[#24211E] hover:text-[#C25E26] shadow-lg border border-[#D5C7B2] hover:bg-[#FAF7F2] transition-all transform active:scale-95"
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};
