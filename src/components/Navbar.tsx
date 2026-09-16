import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu as MenuIcon, X, MapPin, Clock, ShoppingBag } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu & Order', href: '#menu' },
    { name: 'Custom Cakes', href: '#cakes' },
    { name: 'Event Lawn', href: '#events' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
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
      {/* Top announcement bar */}
      <div className="hidden md:block bg-[#161412] text-[#F3ECE1] text-xs py-1.5 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#C25E26]" />
              40D Depalpur Road, Okara, Punjab
            </span>
            <span className="flex items-center gap-1.5 text-stone-400">
              <Clock className="w-3.5 h-3.5 text-[#C25E26]" />
              Authentic Dining • Hot Takeaway • Customized Cakes • Event Lawn
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="hover:text-white transition-colors flex items-center gap-1 text-stone-300"
            >
              <Phone className="w-3 h-3 text-[#C25E26]" />
              {BUSINESS_INFO.phoneDisplay}
            </a>
            <span className="text-stone-700">|</span>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-300 text-emerald-400 font-medium flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3 h-3" />
              WhatsApp Direct
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
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-[14px] font-medium text-[#3E3630] hover:text-[#C25E26] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C25E26] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Online Order Cart Trigger */}
            <button
              type="button"
              onClick={openCart}
              id="navbar-cart-btn"
              className="relative inline-flex items-center justify-center gap-2 px-3.5 py-2.5 text-xs font-semibold rounded-xl bg-white hover:bg-stone-50 text-[#1E1B18] border border-[#D5C7B2] shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:border-[#F26522]/60 hover:shadow-md transition-all transform active:scale-95"
              aria-label="View online ordering cart"
            >
              <ShoppingBag className="w-4 h-4 text-[#F26522]" />
              <span>Order Cart</span>
              {totalItems > 0 && (
                <span className="ml-0.5 px-1.5 py-0.2 rounded-full bg-[#F26522] text-white text-[10px] font-bold shadow-xs">
                  {totalItems}
                </span>
              )}
            </button>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-btn"
              className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 text-xs font-semibold rounded-xl bg-gradient-to-r from-[#0F5132] to-[#146C43] hover:from-[#146C43] hover:to-[#0F5132] text-white border border-emerald-500/30 shadow-[0_4px_14px_rgba(16,185,129,0.25)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.35)] transition-all transform hover:-translate-y-0.5 active:scale-95"
              title="Chat on WhatsApp"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href={BUSINESS_INFO.phoneTel}
              id="header-call-btn"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-gradient-to-r from-[#F26522] to-[#D85316] hover:from-[#D85316] hover:to-[#B8420E] text-white shadow-[0_4px_14px_rgba(242,101,34,0.35)] hover:shadow-[0_6px_20px_rgba(242,101,34,0.45)] transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-amber-100" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile menu and Cart controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={openCart}
              id="mobile-navbar-cart-btn"
              className="relative inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white text-[#1E1B18] border border-[#D5C7B2]"
              aria-label="View online ordering cart"
            >
              <ShoppingBag className="w-4 h-4 text-[#C25E26]" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 px-1.5 py-0.2 rounded-full bg-[#C25E26] text-white text-[10px] font-bold">
                  {totalItems}
                </span>
              )}
            </button>

            <a
              href={BUSINESS_INFO.phoneTel}
              className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#C25E26] text-white"
              aria-label="Call Mezbaan Restaurant"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#24211E] hover:bg-[#F3ECE1] transition-colors border border-[#E6DCce]"
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
            <div className="pb-3 border-b border-[#E6DCce]/60 text-xs text-stone-600 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C25E26]" />
                40D Depalpur Road, Okara
              </span>
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openCart();
                }}
                className="text-xs font-bold text-[#C25E26] underline flex items-center gap-1"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Cart ({totalItems})</span>
              </button>
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
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#F26522] to-[#D85316] text-white text-xs sm:text-sm font-semibold shadow-[0_4px_14px_rgba(242,101,34,0.35)]"
              >
                <Phone className="w-3.5 h-3.5 text-amber-100" />
                <span>Call Restaurant</span>
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#0F5132] to-[#146C43] hover:from-[#146C43] hover:to-[#0F5132] text-white text-xs sm:text-sm font-semibold shadow-[0_4px_14px_rgba(16,185,129,0.25)] border border-emerald-500/30"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-200" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
