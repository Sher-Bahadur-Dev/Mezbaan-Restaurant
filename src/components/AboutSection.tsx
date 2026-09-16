import React from 'react';
import { MapPin, Utensils, Cake, Trees, ShieldCheck, HeartHandshake } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-[#E6DCce]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0E6] text-xs font-bold text-[#C25E26] uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Our Identity</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1B18] tracking-tight">
            A Place for Food, Family & Celebrations
          </h2>

          <p className="text-base sm:text-lg text-[#524942]">
            Authentic hospitality and multi-cuisine dining situated on 40D Depalpur Road, Okara.
          </p>
        </div>

        {/* Narrative & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5 text-base text-[#4A423B] leading-relaxed">
            <p>
              Mezbaan Restaurant was created to provide the residents and visitors of Okara with a welcoming destination for authentic meals, peaceful family dining, and memorable celebrations.
            </p>
            <p>
              Our kitchen bridges rich culinary traditions under one hospitable roof: vibrant <strong>Desi Pakistani recipes</strong> including slow-cooked Karahis and charcoal BBQ, savory <strong>Chinese stir-fries and soups</strong>, and satisfying <strong>Continental mains</strong> like sizzling steaks, pasta, and burgers.
            </p>
            <p>
              Beyond daily dining, Mezbaan features an artisan <strong>customized cake bakery</strong> to honor personal milestones, as well as an open <strong>event lawn</strong> prepared for weddings, birthdays, and family dawats. Both <strong>dine-in</strong> and <strong>takeaway</strong> are provided with careful attention to taste and hygiene.
            </p>

            <div className="pt-2 flex items-center gap-3 text-sm text-[#1E1B18] font-semibold">
              <MapPin className="w-4 h-4 text-[#C25E26]" />
              <span>40D Depalpur Road, Okara, Punjab, Pakistan</span>
            </div>
          </div>

          {/* Pillars Bento Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#E6DCce]">
              <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-[#C25E26] shadow-xs mb-3">
                <Utensils className="w-4 h-4" />
              </div>
              <h3 className="text-base font-serif font-bold text-[#1E1B18] mb-1">Pakistani Cuisine</h3>
              <p className="text-xs text-[#524942] leading-relaxed">
                Traditional karahis, handis, kebabs, and aromatic biryanis prepared with pure regional spices.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#E6DCce]">
              <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-[#C25E26] shadow-xs mb-3">
                <Utensils className="w-4 h-4" />
              </div>
              <h3 className="text-base font-serif font-bold text-[#1E1B18] mb-1">Chinese & Continental</h3>
              <p className="text-xs text-[#524942] leading-relaxed">
                Wok favorites, noodles, pastas, steaks, and gourmet sandwiches for multi-generational families.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#E6DCce]">
              <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-[#C25E26] shadow-xs mb-3">
                <Cake className="w-4 h-4" />
              </div>
              <h3 className="text-base font-serif font-bold text-[#1E1B18] mb-1">Customized Cakes</h3>
              <p className="text-xs text-[#524942] leading-relaxed">
                Artisan celebration cakes personalized for birthdays, weddings, anniversaries, and graduations.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#E6DCce]">
              <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-[#C25E26] shadow-xs mb-3">
                <Trees className="w-4 h-4" />
              </div>
              <h3 className="text-base font-serif font-bold text-[#1E1B18] mb-1">Event Lawn & Gatherings</h3>
              <p className="text-xs text-[#524942] leading-relaxed">
                Open-air outdoor lawn suited for memorable family functions, wedding dinners, and ceremonies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
