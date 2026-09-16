import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, ShoppingBag, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

export const FloatingActions: React.FC = () => {
  const { totalItems, openCart, totalEstimatedPrice } = useCart();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350);
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
      {/* Mobile Floating Bottom Dock (Call, Cart & WhatsApp) */}
      <div className="fixed bottom-3 left-3 right-3 z-40 max-w-md mx-auto p-1.5 bg-[#0B131A]/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_16px_45px_rgba(0,0,0,0.65)] md:hidden flex items-center gap-1.5">
        {/* Mobile Call Button */}
        <a
          href={BUSINESS_INFO.phoneTel}
          id="mobile-sticky-call-btn"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-stone-900/90 hover:bg-stone-800 active:bg-black text-white text-xs font-semibold border border-white/10 shadow-xs transition-all"
          aria-label="Call Mezbaan Restaurant"
        >
          <Phone className="w-3.5 h-3.5 text-[#F26522]" />
          <span>Call Now</span>
        </a>

        {/* Mobile Sticky Cart Button */}
        <button
          type="button"
          onClick={openCart}
          id="mobile-sticky-cart-btn"
          className="relative flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-gradient-to-r from-[#F26522] to-[#D85316] active:from-[#D85316] active:to-[#B8420E] text-white text-xs font-bold shadow-[0_4px_16px_rgba(242,101,34,0.4)] transition-all"
          aria-label="Open Order Cart"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Cart {totalItems > 0 && `(${totalItems})`}</span>
        </button>

        {/* Mobile WhatsApp Concierge Button */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-sticky-whatsapp-btn"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-gradient-to-r from-[#0F5132] to-[#146C43] hover:from-[#146C43] hover:to-[#0F5132] active:bg-emerald-950 text-white text-xs font-semibold shadow-[0_4px_16px_rgba(16,185,129,0.3)] border border-emerald-500/30 transition-all"
          aria-label="WhatsApp Mezbaan"
        >
          <span className="relative flex h-2 w-2 mr-0.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Desktop Floating Actions Suite (Bottom Right) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 pointer-events-none">
        <div className="pointer-events-auto flex flex-col items-end gap-2.5">
          
          {/* 1. Floating Cart Action (if items present) */}
          {totalItems > 0 && (
            <button
              type="button"
              onClick={openCart}
              id="desktop-floating-cart-btn"
              className="group flex items-center gap-3.5 p-2 pr-4.5 rounded-2xl bg-[#0B131A]/95 hover:bg-[#070D12] text-white shadow-[0_16px_40px_rgba(0,0,0,0.55)] border border-white/10 hover:border-[#F26522]/60 backdrop-blur-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-[#F26522] to-[#D85316] flex items-center justify-center text-white shadow-lg shadow-[#F26522]/35 group-hover:scale-105 transition-transform">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.2 rounded-full bg-white text-[#F26522] text-[10px] font-extrabold shadow-sm border border-[#0B131A]">
                  {totalItems}
                </span>
              </div>
              <div className="text-left">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#F26522]">
                  Online Order Cart
                </span>
                <p className="text-xs font-bold text-white tracking-wide">
                  {totalEstimatedPrice > 0 ? `Rs. ${totalEstimatedPrice.toLocaleString()}` : `${totalItems} Dishes Ready`}
                </p>
              </div>
            </button>
          )}

          {/* 2. Direct Call Action Card */}
          <a
            href={BUSINESS_INFO.phoneTel}
            id="desktop-floating-call-btn"
            className="group flex items-center gap-3 p-2 pr-4 rounded-2xl bg-[#0B131A]/95 hover:bg-[#070D12] backdrop-blur-xl text-white border border-white/10 hover:border-[#F26522]/50 shadow-[0_12px_35px_rgba(0,0,0,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 active:scale-98"
            title="Call Mezbaan Restaurant directly"
          >
            <div className="w-9 h-9 rounded-xl bg-stone-900 flex items-center justify-center text-[#F26522] border border-white/10 group-hover:scale-105 transition-transform shadow-xs">
              <Phone className="w-4 h-4" />
            </div>
            <div className="text-left">
              <span className="block text-[9px] uppercase font-bold tracking-wider text-stone-400">
                Direct Call Reservation
              </span>
              <p className="text-xs font-bold text-white group-hover:text-[#F26522] transition-colors">
                {BUSINESS_INFO.phoneDisplay}
              </p>
            </div>
          </a>

          {/* 3. WhatsApp Professional Concierge Card */}
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="desktop-floating-whatsapp-btn"
            className="group flex items-center gap-3.5 p-2 pr-4.5 rounded-2xl bg-[#0B131A]/95 hover:bg-[#070D12] backdrop-blur-xl text-white border border-white/10 hover:border-emerald-500/60 shadow-[0_20px_50px_rgba(0,0,0,0.55)] hover:shadow-emerald-950/50 transition-all duration-300 transform hover:-translate-y-1 active:scale-98"
            title="Chat directly with Mezbaan Restaurant on WhatsApp"
          >
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-[#0F5132] to-[#146C43] flex items-center justify-center text-white shadow-lg shadow-emerald-950/60 group-hover:scale-105 transition-transform border border-emerald-400/20">
              <MessageCircle className="w-5 h-5" />
              {/* Live pulsing online indicator */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-[#0B131A]"></span>
              </span>
            </div>

            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  WhatsApp Concierge
                </span>
                <span className="inline-block w-1 h-1 rounded-full bg-stone-600"></span>
                <span className="text-[10px] text-stone-400">Live Support</span>
              </div>
              <p className="text-xs font-bold text-white tracking-wide group-hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                <span>{BUSINESS_INFO.phoneDisplay}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-300 border border-emerald-700/50 font-medium">
                  Chat Now
                </span>
              </p>
            </div>
          </a>

          {/* 4. Back to Top Button Matching Screenshots */}
          {showBackToTop && (
            <button
              type="button"
              onClick={scrollToTop}
              id="back-to-top-btn"
              className="w-12 h-12 rounded-full bg-[#F26522] hover:bg-[#d95316] active:scale-95 text-white shadow-[0_10px_30px_rgba(242,101,34,0.45)] border-2 border-white/20 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-5 h-5 text-white stroke-[2.5]" />
            </button>
          )}

        </div>
      </div>
    </>
  );
};
