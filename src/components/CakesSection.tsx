import React, { useState } from 'react';
import { Cake, MessageCircle, Heart, Sparkles, CheckCircle2, ArrowRight, ShoppingBag, SlidersHorizontal } from 'lucide-react';
import { CAKE_ITEMS } from '../data/restaurantData';
import { CakeCategory, CakeItem } from '../types';
import { CakeCustomizerModal } from './CakeCustomizerModal';
import { useCart } from '../context/CartContext';

interface CakesSectionProps {
  onScrollToContact: (inquiryType: string) => void;
}

export const CakesSection: React.FC<CakesSectionProps> = ({ onScrollToContact }) => {
  const { openCart, totalItems } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<CakeCategory>('all');
  const [selectedCakeForModal, setSelectedCakeForModal] = useState<CakeItem | null>(null);

  const categories: { id: CakeCategory; label: string }[] = [
    { id: 'all', label: 'All Designs' },
    { id: 'birthday', label: 'Birthday Cakes' },
    { id: 'wedding', label: 'Wedding Cakes' },
    { id: 'anniversary', label: 'Anniversary Cakes' },
    { id: 'celebration', label: 'Celebration Cakes' },
    { id: 'custom', label: 'Custom Designs' },
  ];

  const filteredCakes = CAKE_ITEMS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const getCakeWhatsappUrl = (cakeTitle?: string) => {
    const text = cakeTitle
      ? `Hello Mezbaan Restaurant Okara, I would like to inquire about ordering a "${cakeTitle}". Please let me know the advance notice required and pricing.`
      : `Hello Mezbaan Restaurant Okara, I would like to inquire about ordering a customized celebration cake.`;
    return `https://wa.me/923002632000?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="cakes" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E6DCce]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0E6] text-xs font-bold text-[#C25E26] uppercase tracking-wider">
            <Cake className="w-3.5 h-3.5" />
            <span>Artisan Bakery & Customized Pastry</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1B18] tracking-tight">
            Customized Cakes for Every Celebration
          </h2>

          <p className="text-sm sm:text-base text-[#524942]">
            Handcrafted celebration cakes prepared fresh to order in Okara. From playful birthday themes to elegant multi-tiered wedding centerpieces with custom inscriptions and rich flavors.
          </p>
        </div>

        {/* Cake Categories Filter */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-[#161412] text-white shadow-xs'
                    : 'bg-white text-[#4A423B] border border-[#E6DCce] hover:bg-[#F3ECE1]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Cakes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-14">
          {filteredCakes.map((cake) => (
            <div
              key={cake.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E6DCce] hover:border-[#C25E26]/40 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div 
                  onClick={() => setSelectedCakeForModal(cake)}
                  className="relative aspect-[4/3] overflow-hidden bg-stone-100 cursor-pointer"
                >
                  <img
                    src={cake.image}
                    alt={cake.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-lg bg-[#161412]/80 backdrop-blur-xs text-white text-[11px] font-medium">
                      {cake.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="flex items-center gap-1 font-medium text-stone-200">
                      <Heart className="w-3.5 h-3.5 text-rose-400" />
                      <span>{cake.suitableFor}</span>
                    </span>
                    <span className="bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-md text-[10px]">
                      Bespoke Bakery
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-2.5">
                  <h3 
                    onClick={() => setSelectedCakeForModal(cake)}
                    className="text-lg sm:text-xl font-serif font-bold text-[#1E1B18] group-hover:text-[#C25E26] transition-colors cursor-pointer"
                  >
                    {cake.title}
                  </h3>

                  <p className="text-xs text-[#524942] leading-relaxed">
                    {cake.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 mt-2 border-t border-[#F3ECE1] pt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#C25E26]">
                    Custom Made to Order
                  </span>
                  <span className="text-[11px] text-stone-500">
                    2 to 5+ lbs Available
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedCakeForModal(cake)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#C25E26] to-[#A34816] hover:from-[#A34816] hover:to-[#8C360E] text-white text-xs font-semibold shadow-2xs transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-amber-200" />
                    <span>Customize & Add</span>
                  </button>

                  <a
                    href={getCakeWhatsappUrl(cake.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100/90 text-emerald-900 border border-emerald-200 text-xs font-semibold transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How Cake Orders Work Feature Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E6DCce] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs uppercase tracking-wider font-bold text-[#C25E26]">
                Simple & Reliable Process
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#1E1B18]">
                How to Order Your Custom Celebration Cake at Mezbaan
              </h3>
              <p className="text-xs sm:text-sm text-[#524942] leading-relaxed">
                We make it seamless to craft the exact cake you envision for birthdays, weddings, or family milestones:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                <div className="flex items-start gap-2 text-xs text-[#3E3630]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>1. Share Theme:</strong> Send us your photo or message.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#3E3630]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>2. Pick Flavor:</strong> Chocolate Fudge, Lotus, Red Velvet & more.</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-[#3E3630]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>3. Bakery Pickup:</strong> Freshly decorated at 40D Depalpur Road.</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={getCakeWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                id="cakes-whatsapp-cta"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-emerald-950/30 border border-emerald-600/40 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Order Cake via WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => onScrollToContact('Cake Inquiry')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-[#FAF7F2] text-[#24211E] text-xs sm:text-sm font-semibold border border-[#D5C7B2] hover:border-[#C25E26]/50 shadow-2xs transition-colors"
              >
                <span>Send Cake Booking Form</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C25E26]" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Cake Customizer Modal */}
      {selectedCakeForModal && (
        <CakeCustomizerModal
          cake={selectedCakeForModal}
          onClose={() => setSelectedCakeForModal(null)}
        />
      )}
    </section>
  );
};
