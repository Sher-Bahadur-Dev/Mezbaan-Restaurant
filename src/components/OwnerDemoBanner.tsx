import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ChevronDown, ChevronUp, ExternalLink, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

export const OwnerDemoBanner: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#FAF0E6] border-b border-[#E8D4C3] text-stone-800 text-xs py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#C25E26] text-white text-[10px] font-bold">
            ✓
          </span>
          <span className="font-semibold text-[#8C360E]">
            Client Demo Presentation for Mezbaan Restaurant (40D Depalpur Road, Okara)
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#8C360E] hover:text-[#5C2308] font-semibold underline flex items-center gap-1"
          >
            <span>{isOpen ? 'Hide Owner Guide' : 'View Presentation Highlights'}</span>
            {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="max-w-7xl mx-auto mt-3 pt-3 border-t border-[#E8D4C3] grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] text-stone-700">
          <div className="bg-white/80 p-2.5 rounded-lg border border-[#E8D4C3]/60">
            <strong className="text-[#8C360E] block mb-1">Direct Leads & Calling:</strong>
            All Call Now buttons (`{BUSINESS_INFO.phoneDisplay}`), WhatsApp messages, and Google Maps directions link straight to your real restaurant accounts.
          </div>
          <div className="bg-white/80 p-2.5 rounded-lg border border-[#E8D4C3]/60">
            <strong className="text-[#8C360E] block mb-1">Accurate & Editable:</strong>
            No fake reviews, fake prices, or unsupported claims were created. All menu prices show realistic editable placeholders for your exact kitchen rates.
          </div>
          <div className="bg-white/80 p-2.5 rounded-lg border border-[#E8D4C3]/60">
            <strong className="text-[#8C360E] block mb-1">Cakes & Event Lawn:</strong>
            Dedicated customer paths designed to bring high-value bookings for customized cakes and wedding/event lawn reservations.
          </div>
        </div>
      )}
    </div>
  );
};
