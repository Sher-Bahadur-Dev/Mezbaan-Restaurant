import React from 'react';
import { Utensils, Users, ShoppingBag, Cake, Trees, Sparkles } from 'lucide-react';

interface IntroductionProps {
  onExploreMenu: () => void;
  onExploreEvents: () => void;
}

export const Introduction: React.FC<IntroductionProps> = ({ onExploreMenu, onExploreEvents }) => {
  const highlights = [
    {
      title: 'Freshly Prepared Food',
      desc: 'Each handi, karahi, sizzler, and wok dish is cooked fresh upon order using selected ingredients and authentic spice blends.',
      icon: Utensils,
    },
    {
      title: 'Family Dining',
      desc: 'Comfortable indoor seating arrangements organized for family comfort, respect, and peaceful shared meals.',
      icon: Users,
    },
    {
      title: 'Takeaway Convenience',
      desc: 'Carefully packed hot takeaways ready for pickup so you can enjoy your favorite dishes at home or at work.',
      icon: ShoppingBag,
    },
    {
      title: 'Customized Cakes',
      desc: 'Freshly baked artisan celebration cakes customized for birthdays, anniversaries, and family milestones.',
      icon: Cake,
    },
    {
      title: 'Events & Celebrations',
      desc: 'An outdoor event lawn equipped for open-air family gatherings, wedding receptions, and celebratory feasts.',
      icon: Trees,
    },
  ];

  return (
    <section id="about-intro" className="py-16 md:py-24 bg-white border-y border-[#E6DCce]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E6DCce] bg-[#FAF7F2] aspect-[4/3] sm:aspect-[1/1] max-w-md mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=80"
                  alt="Authentic Pakistani Karahi cooked with fresh spices at Mezbaan"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Authentic Experience Badge */}
              <div className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-4 bg-[#FAF7F2] p-4 rounded-xl border border-[#D5C7B2] shadow-md max-w-[220px]">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-[#C25E26]" />
                  <span className="text-xs font-bold text-[#1E1B18]">Hospitality in Okara</span>
                </div>
                <p className="text-[11px] text-[#4A423B] leading-snug">
                  Traditional culinary warmth and dedicated service for every guest.
                </p>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-[#C25E26]">
                Our Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E1B18] tracking-tight">
                Welcome to Mezbaan
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#3E3630] leading-relaxed font-normal">
              <p>
                Located conveniently on <strong>40D Depalpur Road in Okara</strong>, Mezbaan Restaurant provides a hospitable space where authentic Pakistani culinary tradition meets popular Chinese and Continental specialties.
              </p>
              <p className="text-stone-600 text-base">
                Whether you are stopping by for a comforting family lunch, taking home hot freshly cooked karahi, ordering a customized themed birthday cake, or hosting a gathering on our event lawn, our team focuses on quality ingredients, cleanliness, and respectful service.
              </p>
            </div>

            {/* 5 Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              {highlights.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E6DCce] hover:border-[#C25E26]/40 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#FAF0E6] flex items-center justify-center flex-shrink-0 text-[#C25E26] mt-0.5">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[#1E1B18]">{item.title}</h3>
                        <p className="text-xs text-[#524942] mt-1 leading-normal">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onExploreMenu}
                className="px-5 py-2.5 rounded-lg bg-[#C25E26] text-white text-sm font-semibold hover:bg-[#A34816] transition-colors"
              >
                Explore Today's Menu
              </button>
              <button
                type="button"
                onClick={onExploreEvents}
                className="px-5 py-2.5 rounded-lg bg-[#F3ECE1] text-[#24211E] text-sm font-semibold hover:bg-[#E6DCce] transition-colors border border-[#D5C7B2]"
              >
                Learn About Events & Lawn
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
