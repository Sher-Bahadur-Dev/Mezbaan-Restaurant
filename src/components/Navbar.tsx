import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu as MenuIcon, X, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Cakes', href: '#cakes' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(href.replace('#', ''));
  };

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E6DCce]'
          : 'bg-[#FAF7F2] border-b border-[#E6DCce]/60'
      }`}
    >
      {/* Top micro bar with quick info */}
      <div className="hidden md:block bg-[#1E1B18] text-[#F3ECE1] text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#C25E26]" />
              40D Depalpur Road, Okara, Pakistan
            </span>
            <span className="flex items-center gap-1.5 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-[#C25E26]" />
              Dine-In • Takeaway • Events • Customized Cakes
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="hover:text-white transition-colors flex items-center gap-1 text-stone-200"
            >
              <Phone className="w-3 h-3 text-[#C25E26]" />
              {BUSINESS_INFO.phoneDisplay}
            </a>
            <span className="text-stone-600">|</span>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-emerald-400 font-medium flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3 h-3" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Subtitle */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            id="brand-logo-link"
            className="flex flex-col group py-1"
          >
            <span className="text-2xl sm:text-3xl font-bold tracking-wider text-[#1E1B18] font-logo uppercase group-hover:text-[#C25E26] transition-colors">
              MEZBAAN
            </span>
            <span className="text-[11px] sm:text-xs tracking-widest uppercase text-[#A34816] font-semibold -mt-1">
              Restaurant • Cakes • Events
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-[15px] font-medium text-[#3E3630] hover:text-[#C25E26] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C25E26] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-btn"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-[#EFE9DE] hover:bg-[#E5DDCF] text-[#24211E] transition-colors border border-[#D5C7B2]"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <a
              href={BUSINESS_INFO.phoneTel}
              id="header-call-btn"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-[#C25E26] hover:bg-[#A34816] text-white shadow-sm transition-all transform active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#C25E26] text-white"
              aria-label="Call Mezbaan Restaurant"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#24211E] hover:bg-[#F3ECE1] transition-colors border border-[#E6DCce]"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#C25E26]" />
              ) : (
                <MenuIcon className="w-6 h-6 text-[#24211E]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-b border-[#E6DCce] bg-[#FAF7F2] shadow-xl animate-in slide-in-from-top-2 duration-200"
        >
          <div className="px-5 pt-3 pb-6 space-y-2">
            <div className="pb-3 border-b border-[#E6DCce]/60 text-xs text-stone-600 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C25E26]" />
              <span>40D Depalpur Road, Okara</span>
            </div>

            <nav className="flex flex-col space-y-1 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-[#24211E] hover:bg-[#F3ECE1] hover:text-[#C25E26] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-4 mt-2 border-t border-[#E6DCce] grid grid-cols-2 gap-3">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#C25E26] text-white text-sm font-semibold shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-700 text-white text-sm font-semibold shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
