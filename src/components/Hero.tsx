import React from 'react';
import { Phone, MapPin, ArrowRight, UtensilsCrossed, Calendar, Cake, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

interface HeroProps {
  onScrollTo: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollTo }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-6 pb-16 md:pt-10 md:pb-24">
      {/* Subtle warm background accents */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#C25E26]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-[#D97706]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Owner Demo Preview Notice Pill */}
        <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0E6] border border-[#E8D4C3] text-xs text-[#8C360E]">
          <span className="w-2 h-2 rounded-full bg-[#C25E26] animate-pulse"></span>
          <span className="font-semibold">Demo Presentation:</span>
          <span>A modern web presence tailored for Mezbaan Restaurant Okara</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F3ECE1] text-xs font-semibold text-[#8C360E] tracking-wider uppercase">
              <MapPin className="w-3.5 h-3.5 text-[#C25E26]" />
              40D Depalpur Road, Okara
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1E1B18] tracking-tight leading-[1.15]">
              Mezbaan <span className="text-[#C25E26]">Restaurant</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#4A423B] leading-relaxed max-w-2xl font-normal">
              Desi Pakistani, Chinese & Continental Cuisine — made for everyday dining, family gatherings and special occasions.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap gap-3.5 sm:gap-4 items-center">
              <button
                type="button"
                id="hero-view-menu-btn"
                onClick={() => onScrollTo('menu')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold rounded-xl bg-[#C25E26] hover:bg-[#A34816] text-white shadow-md shadow-[#C25E26]/20 transition-all transform active:scale-95"
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>View Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BUSINESS_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-directions-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-semibold rounded-xl bg-white hover:bg-[#FAF7F2] text-[#24211E] border border-[#D5C7B2] shadow-sm transition-all"
              >
                <MapPin className="w-4 h-4 text-[#C25E26]" />
                <span>Get Directions</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneTel}
                id="hero-call-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-semibold rounded-xl bg-[#24211E] hover:bg-black text-white shadow-sm transition-all"
              >
                <Phone className="w-4 h-4 text-[#C25E26]" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Information Strip as requested: Dine-In • Takeaway • Customized Cakes • Event Lawn */}
            <div className="pt-6 border-t border-[#E6DCce]">
              <p className="text-xs uppercase tracking-wider font-semibold text-stone-500 mb-3">
                Dining & Hospitality Services
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-lg border border-[#E6DCce]/80 shadow-xs">
                  <div className="w-7 h-7 rounded-md bg-[#FAF0E6] flex items-center justify-center text-[#C25E26]">
                    <UtensilsCrossed className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-[#24211E]">Dine-In</span>
                </div>

                <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-lg border border-[#E6DCce]/80 shadow-xs">
                  <div className="w-7 h-7 rounded-md bg-[#FAF0E6] flex items-center justify-center text-[#C25E26]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-[#24211E]">Takeaway</span>
                </div>

                <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-lg border border-[#E6DCce]/80 shadow-xs">
                  <div className="w-7 h-7 rounded-md bg-[#FAF0E6] flex items-center justify-center text-[#C25E26]">
                    <Cake className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-[#24211E]">Custom Cakes</span>
                </div>

                <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-lg border border-[#E6DCce]/80 shadow-xs">
                  <div className="w-7 h-7 rounded-md bg-[#FAF0E6] flex items-center justify-center text-[#C25E26]">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-[#24211E]">Event Lawn</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High Quality Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-stone-900 aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
                  alt="Traditional Pakistani BBQ and savory feast arrangement"
                  className="w-full h-full object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Overlaid caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block text-[11px] font-semibold uppercase tracking-wider bg-[#C25E26] px-2 py-0.5 rounded text-white mb-1">
                    Okara Food Culture
                  </span>
                  <p className="text-sm font-medium text-stone-200">
                    Desi Karahi, BBQ Platters, Chinese & Continental favorites prepared fresh for every order.
                  </p>
                </div>
              </div>

              {/* Floating Highlight Card */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white p-3.5 rounded-xl shadow-lg border border-[#E6DCce] items-center gap-3 max-w-[260px]">
                <div className="w-10 h-10 rounded-full bg-[#FAF0E6] flex items-center justify-center flex-shrink-0 text-[#C25E26]">
                  <Cake className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-[#1E1B18]">Specialty Pastry Lab</h2>
                  <p className="text-[11px] text-stone-500">Customized cakes for birthdays & weddings</p>
                </div>
              </div>

              {/* Floating Location Card */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white/95 backdrop-blur-xs px-3.5 py-2 rounded-lg shadow-md border border-[#E6DCce] items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-semibold text-[#1E1B18]">Depalpur Road, Okara</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
