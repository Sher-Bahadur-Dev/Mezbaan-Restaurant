import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  ArrowRight, 
  UtensilsCrossed, 
  Calendar, 
  Cake, 
  ShoppingBag, 
  MessageCircle, 
  Sparkles, 
  Clock, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';
import { useCart } from '../context/CartContext';

interface HeroProps {
  onScrollTo: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollTo }) => {
  const { openCart, totalItems } = useCart();
  const [activeHighlight, setActiveHighlight] = useState<number>(0);

  const heroHighlights = [
    {
      title: 'Desi Karahi & Charcoal BBQ',
      subtitle: 'Slow-simmered handis, clay-oven tandoor, and authentic charcoal-grilled skewers.',
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=80',
      tag: 'Pakistani Heritage',
      linkTarget: 'menu',
    },
    {
      title: 'Chinese Wok & Continental',
      subtitle: 'Crispy chili dry, chicken manchurian, sizzling mushroom steaks & gourmet burgers.',
      image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1200&q=80',
      tag: 'Multi-Cuisine Variety',
      linkTarget: 'menu',
    },
    {
      title: 'Artisan Customized Cakes',
      subtitle: 'Bespoke celebration cakes for birthdays, weddings, anniversaries & milestones.',
      image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1200&q=80',
      tag: 'Specialty Pastry',
      linkTarget: 'cakes',
    },
    {
      title: 'Private Event Lawn',
      subtitle: 'Spacious open-air lawn setting for memorable weddings, mehendis & family dawats.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      tag: 'Outdoor Celebrations',
      linkTarget: 'events',
    },
  ];

  const current = heroHighlights[activeHighlight];

  return (
    <section id="home" className="relative bg-[#141210] text-[#F3ECE1] overflow-hidden">
      {/* Background warm glow spots */}
      <div className="absolute -top-32 right-0 w-[550px] h-[550px] bg-[#C25E26]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 left-10 w-[450px] h-[450px] bg-[#D97706]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative subtle texture line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C25E26]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 md:pt-16 md:pb-24">
        
        {/* Top Badges Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/90 border border-stone-800 text-xs text-[#E6DCce]">
            <span className="w-2 h-2 rounded-full bg-[#C25E26] animate-pulse"></span>
            <span className="font-semibold text-white">Modern Pakistani Cuisine & Family Dining</span>
            <span className="text-stone-500">•</span>
            <span className="text-stone-300">40D Depalpur Road, Okara</span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-xs text-stone-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C25E26]" />
              Dine-In & Takeaway Ready
            </span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typography & Order Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="inline-block text-xs uppercase tracking-[0.22em] font-bold text-[#D4A359]">
                Authentic Taste • Family Atmosphere • Since Day One
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12]">
                Mezbaan <span className="text-[#E07A2B]">Restaurant</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-light text-stone-300 mt-2">
                  & Celebration Event Lawn
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl font-normal">
              Experience authentic Desi Karahi & Handi, sizzling charcoal BBQ, gourmet Chinese and Continental specialties in Okara. Paired with our custom artisan bakery and an outdoor event lawn for cherished gatherings.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3 sm:gap-4 items-center">
              <button
                type="button"
                id="hero-order-menu-btn"
                onClick={() => onScrollTo('menu')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold rounded-xl bg-gradient-to-r from-[#F26522] to-[#D85316] hover:from-[#D85316] hover:to-[#B8420E] text-white shadow-[0_8px_25px_rgba(242,101,34,0.4)] hover:shadow-[0_12px_32px_rgba(242,101,34,0.5)] border border-amber-400/30 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
              >
                <UtensilsCrossed className="w-4 h-4 text-amber-100" />
                <span>View Menu &amp; Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                id="hero-open-cart-btn"
                onClick={openCart}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold rounded-xl bg-stone-900/95 hover:bg-stone-800 text-white border border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.4)] hover:border-[#F26522]/50 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <ShoppingBag className="w-4 h-4 text-[#F26522]" />
                <span>Order Cart</span>
                {totalItems > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-[#F26522] text-white text-[11px] font-bold shadow-xs">
                    {totalItems}
                  </span>
                )}
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-sm sm:text-base font-semibold rounded-xl bg-gradient-to-r from-[#0F5132] to-[#146C43] hover:from-[#146C43] hover:to-[#0F5132] text-white border border-emerald-500/40 shadow-[0_8px_25px_rgba(16,185,129,0.3)] hover:shadow-[0_12px_32px_rgba(16,185,129,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <MessageCircle className="w-4 h-4 text-emerald-200" />
                <span>WhatsApp: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Quick Feature Pillars Bar */}
            <div className="pt-6 border-t border-stone-800/90 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div 
                onClick={() => onScrollTo('menu')}
                className="cursor-pointer bg-stone-900/70 hover:bg-stone-800/80 p-3 rounded-xl border border-stone-800 transition-all"
              >
                <div className="flex items-center gap-2 text-[#C25E26] mb-1">
                  <UtensilsCrossed className="w-4 h-4" />
                  <span className="text-xs font-bold text-white">Desi Dining</span>
                </div>
                <p className="text-[11px] text-stone-400">Karahi & BBQ in family setting</p>
              </div>

              <div 
                onClick={() => onScrollTo('menu')}
                className="cursor-pointer bg-stone-900/70 hover:bg-stone-800/80 p-3 rounded-xl border border-stone-800 transition-all"
              >
                <div className="flex items-center gap-2 text-[#C25E26] mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-bold text-white">Takeaway</span>
                </div>
                <p className="text-[11px] text-stone-400">Fast packed fresh orders</p>
              </div>

              <div 
                onClick={() => onScrollTo('cakes')}
                className="cursor-pointer bg-stone-900/70 hover:bg-stone-800/80 p-3 rounded-xl border border-stone-800 transition-all"
              >
                <div className="flex items-center gap-2 text-[#C25E26] mb-1">
                  <Cake className="w-4 h-4" />
                  <span className="text-xs font-bold text-white">Custom Cakes</span>
                </div>
                <p className="text-[11px] text-stone-400">Pastries & celebration themes</p>
              </div>

              <div 
                onClick={() => onScrollTo('events')}
                className="cursor-pointer bg-stone-900/70 hover:bg-stone-800/80 p-3 rounded-xl border border-stone-800 transition-all"
              >
                <div className="flex items-center gap-2 text-[#C25E26] mb-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs font-bold text-white">Event Lawn</span>
                </div>
                <p className="text-[11px] text-stone-400">Weddings & milestone dawats</p>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Visual Stage */}
          <div className="lg:col-span-5 space-y-3">
            {/* Visual Frame */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-stone-800 shadow-2xl bg-stone-900 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
              
              {/* Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Tag pill */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-[#C25E26] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                  {current.tag}
                </span>
              </div>

              {/* Direct call button overlay */}
              <div className="absolute top-4 right-4">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="px-3 py-1 rounded-full bg-black/60 hover:bg-black text-stone-200 hover:text-white text-xs font-semibold backdrop-blur-xs flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C25E26]" />
                  <span>0300 2632000</span>
                </a>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                  {current.title}
                </h3>
                <p className="text-xs text-stone-300 mt-1 line-clamp-2">
                  {current.subtitle}
                </p>

                <div className="mt-2.5 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onScrollTo(current.linkTarget)}
                    className="text-xs text-[#E07A2B] hover:text-white font-semibold flex items-center gap-1 transition-colors"
                  >
                    <span>Explore This Section</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-[11px] text-stone-400">
                    Depalpur Road, Okara
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Carousel Thumbnails Selector */}
            <div className="grid grid-cols-4 gap-2 pt-1">
              {heroHighlights.map((item, idx) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveHighlight(idx)}
                  className={`p-2 rounded-xl text-left border transition-all ${
                    activeHighlight === idx
                      ? 'bg-stone-900 border-[#C25E26] shadow-xs'
                      : 'bg-stone-950/60 border-stone-800/80 hover:bg-stone-900/60 opacity-70 hover:opacity-100'
                  }`}
                >
                  <span className="block text-[10px] font-bold text-stone-400 truncate">
                    {item.tag}
                  </span>
                  <span className="block text-[11px] font-semibold text-white truncate">
                    {item.title.split(' ')[0]} {item.title.split(' ')[1]}
                  </span>
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
