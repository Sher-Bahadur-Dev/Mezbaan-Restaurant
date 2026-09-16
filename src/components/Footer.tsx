import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface FooterProps {
  onScrollTo: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo }) => {
  const links = [
    { name: 'Home', href: 'home' },
    { name: 'Menu', href: 'menu' },
    { name: 'About', href: 'about' },
    { name: 'Cakes', href: 'cakes' },
    { name: 'Events', href: 'events' },
    { name: 'Gallery', href: 'gallery' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <footer className="bg-[#1E1B18] text-[#F3ECE1] pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-stone-800">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="text-3xl font-bold tracking-wider text-white font-logo uppercase">
                MEZBAAN
              </span>
              <span className="text-xs tracking-widest uppercase text-[#C25E26] font-semibold -mt-1">
                Restaurant • Cakes • Events
              </span>
            </div>

            <p className="text-sm text-stone-300 leading-relaxed max-w-sm font-normal">
              Serving Desi Pakistani, Chinese and Continental cuisine in Okara, alongside bespoke celebration cakes and outdoor event lawn hosting.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs text-stone-400">
              <span className="bg-stone-800/80 px-2.5 py-1 rounded">Dine-In</span>
              <span className="bg-stone-800/80 px-2.5 py-1 rounded">Takeaway</span>
              <span className="bg-stone-800/80 px-2.5 py-1 rounded">Customized Cakes</span>
              <span className="bg-stone-800/80 px-2.5 py-1 rounded">Event Lawn</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-stone-800 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.name}>
                  <button
                    type="button"
                    onClick={() => onScrollTo(link.href)}
                    className="text-stone-300 hover:text-[#C25E26] transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-stone-800 pb-2">
              Mezbaan Contact
            </h4>
            <div className="space-y-3 text-sm text-stone-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C25E26] flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C25E26] flex-shrink-0" />
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors"
                >
                  WhatsApp: {BUSINESS_INFO.phoneRaw}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C25E26] flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© 2026 Mezbaan Restaurant. All rights reserved.</p>

          <p className="flex items-center gap-1.5 text-stone-400">
            <span>Website Demo for Mezbaan Restaurant Okara</span>
            <span>•</span>
            <span className="text-stone-300">40D Depalpur Road</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
