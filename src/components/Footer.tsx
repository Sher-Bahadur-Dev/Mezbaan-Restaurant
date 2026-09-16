import React from 'react';
import { 
  UtensilsCrossed, 
  Facebook, 
  Twitter, 
  Instagram, 
  MessageCircle, 
  ArrowUp 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface FooterProps {
  onScrollTo: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-[#0B131A] text-white pt-20 pb-16 overflow-hidden border-t border-stone-800/80">
      {/* Background Atmosphere Image with Dark Teal/Charcoal Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-25 mix-blend-luminosity scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80')`
        }}
      />
      {/* Dark gradient mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B131A]/95 via-[#0B131A]/92 to-[#070D12] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main 4-Column Layout as in Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-16 border-b border-stone-800/80">
          
          {/* Column 1: Brand & Bio & Socials */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo: Orange circular icon + Brand Name */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#F26522] flex items-center justify-center text-white shadow-md shadow-[#F26522]/30 flex-shrink-0">
                <UtensilsCrossed className="w-5 h-5 text-white" />
              </div>
              <span className="text-3xl font-serif font-bold tracking-tight text-white">
                Mezbaan
              </span>
            </div>

            {/* Subtitle / Bio matching screenshot text */}
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-sm font-normal">
              Mezbaan is one of the most popular Restaurant &amp; special menu made by our passionate chefs.
            </p>

            {/* Social Circular Outline Icons (Facebook, Twitter, Instagram, WhatsApp) */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-stone-600/80 flex items-center justify-center text-stone-300 hover:text-white hover:border-[#F26522] hover:bg-[#F26522]/20 transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full border border-stone-600/80 flex items-center justify-center text-stone-300 hover:text-white hover:border-[#F26522] hover:bg-[#F26522]/20 transition-all duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-stone-600/80 flex items-center justify-center text-stone-300 hover:text-white hover:border-[#F26522] hover:bg-[#F26522]/20 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full border border-stone-600/80 flex items-center justify-center text-stone-300 hover:text-white hover:border-[#25D366] hover:bg-[#25D366]/20 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            {/* Powered by tag matching screenshot */}
            <div className="pt-4 text-xs text-stone-400 font-medium">
              Powered by Mezbaan Restaurant Okara
            </div>
          </div>

          {/* Column 2: Restaurant Links */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-xl sm:text-2xl font-medium tracking-tight text-white">
              Restaurant
            </h4>
            <ul className="space-y-3.5 text-sm sm:text-base text-stone-300">
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('about')}
                  className="hover:text-[#F26522] transition-colors"
                >
                  About us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('menu')}
                  className="hover:text-[#F26522] transition-colors"
                >
                  Our Menu
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('contact')}
                  className="hover:text-[#F26522] transition-colors"
                >
                  Book a Table
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('events')}
                  className="hover:text-[#F26522] transition-colors"
                >
                  Event Lawn
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('contact')}
                  className="hover:text-[#F26522] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Information Links */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-xl sm:text-2xl font-medium tracking-tight text-white">
              Information
            </h4>
            <ul className="space-y-3.5 text-sm sm:text-base text-stone-300">
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('contact')}
                  className="hover:text-[#F26522] transition-colors"
                >
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('contact')}
                  className="hover:text-[#F26522] transition-colors"
                >
                  24/7 Service
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('cakes')}
                  className="hover:text-[#F26522] transition-colors"
                >
                  Customized Cakes
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('about')}
                  className="hover:text-[#F26522] transition-colors"
                >
                  Halal Certified &amp; Licenses
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onScrollTo('gallery')}
                  className="hover:text-[#F26522] transition-colors"
                >
                  Photo Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-xl sm:text-2xl font-medium tracking-tight text-white">
              Contact info
            </h4>
            <div className="space-y-4 text-sm sm:text-base text-stone-300">
              {/* Address */}
              <div>
                <p className="text-white font-medium">40D Depalpur Road</p>
                <p className="text-stone-400 text-sm">Okara, Punjab, Pakistan</p>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="block hover:text-[#F26522] transition-colors break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
                <a
                  href="mailto:info@mezbaanokara.com"
                  className="block text-stone-400 text-sm hover:text-white transition-colors"
                >
                  info@mezbaanokara.com
                </a>
              </div>

              {/* Phone */}
              <div className="pt-1">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="text-white font-semibold text-base hover:text-[#F26522] transition-colors block"
                >
                  +92 300 2632000
                </a>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 text-xs font-medium hover:text-emerald-300 transition-colors inline-block mt-1"
                >
                  WhatsApp: 0300 2632000
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Bar with Powered by and Floating Orange Scroll-To-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-stone-400">
            © 2026 Mezbaan Restaurant Okara. All rights reserved.
          </p>

          {/* Dedicated Orange Circular Scroll To Top Button matching screenshot */}
          <button
            type="button"
            onClick={scrollToTop}
            id="footer-scroll-to-top-btn"
            className="w-12 h-12 rounded-full bg-[#F26522] hover:bg-[#d85316] active:scale-95 text-white flex items-center justify-center shadow-xl shadow-[#F26522]/30 transition-all duration-300 cursor-pointer"
            aria-label="Scroll back to top"
            title="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-white stroke-[2.5]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
