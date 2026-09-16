import React from 'react';
import { Facebook, ExternalLink, Share2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

export const SocialSection: React.FC = () => {
  return (
    <section className="py-12 bg-[#FAF7F2] border-b border-[#E6DCce]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#E6DCce] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-[#C25E26]">
              <Share2 className="w-3.5 h-3.5" />
              <span>Social Presence</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-[#1E1B18]">
              Connect with Mezbaan on Social Media
            </h3>
            <p className="text-xs sm:text-sm text-[#524942]">
              Stay updated with daily announcements, event setups, and recent cake designs.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Facebook button as requested */}
            <a
              href={BUSINESS_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="social-facebook-link"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white text-sm font-semibold shadow-xs transition-all"
            >
              <Facebook className="w-4 h-4" />
              <span>Facebook: {BUSINESS_INFO.facebookName}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
