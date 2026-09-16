import React from 'react';
import { UtensilsCrossed, Soup, Cake, Trees, ShoppingBag, Users, Sparkles } from 'lucide-react';
import { WHY_VISIT_FEATURES } from '../data/restaurantData';

export const WhyVisit: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    UtensilsCrossed,
    Soup,
    Cake,
    Trees,
    ShoppingBag,
    Users,
  };

  return (
    <section id="why-visit" className="py-16 md:py-24 bg-white border-b border-[#E6DCce]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0E6] text-xs font-bold text-[#C25E26] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Mezbaan Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1B18] tracking-tight">
            Why Visit Mezbaan
          </h2>

          <p className="text-base sm:text-lg text-[#524942]">
            Thoughtfully planned for families, diners, and host celebrations in Okara.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_VISIT_FEATURES.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || UtensilsCrossed;
            return (
              <div
                key={feature.id}
                id={`feature-card-${idx}`}
                className="group relative p-7 rounded-2xl bg-[#FAF7F2] border border-[#E6DCce] hover:border-[#C25E26]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Accent Top Border Bar on Hover */}
                <div className="w-12 h-1 rounded-full bg-[#C25E26]/20 group-hover:bg-[#C25E26] transition-colors mb-6" />

                {/* Icon Circle */}
                <div className="w-13 h-13 rounded-xl bg-white flex items-center justify-center text-[#C25E26] shadow-xs border border-[#E6DCce] group-hover:bg-[#FAF0E6] group-hover:scale-105 transition-all duration-200 mb-5">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-bold text-[#1E1B18] group-hover:text-[#C25E26] transition-colors mb-2.5">
                  {feature.title}
                </h3>

                <p className="text-sm text-[#524942] leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
