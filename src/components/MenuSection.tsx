import React, { useState } from 'react';
import { Search, UtensilsCrossed, MessageCircle, Phone, Info } from 'lucide-react';
import { MenuCategory, MenuItem } from '../types';
import { MENU_ITEMS, BUSINESS_INFO } from '../data/restaurantData';

interface MenuSectionProps {
  onSelectInquiryItem?: (itemName: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectInquiryItem }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'all', label: 'All Offerings' },
    { id: 'desi-pakistani', label: 'Desi Pakistani' },
    { id: 'chinese', label: 'Chinese Cuisine' },
    { id: 'continental', label: 'Continental' },
    { id: 'cakes', label: 'Custom Cakes' },
    { id: 'event-packages', label: 'Event Packages' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.tags && item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const getWhatsappItemUrl = (itemName: string) => {
    const message = encodeURIComponent(
      `Hello Mezbaan Restaurant Okara, I would like to ask about availability and details for "${itemName}".`
    );
    return `https://wa.me/923002632000?text=${message}`;
  };

  const generalMenuWhatsappUrl = encodeURIComponent(
    `Hello Mezbaan Restaurant Okara, I would like to ask about today's available menu and dining options.`
  );

  return (
    <section id="menu" className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0E6] text-xs font-bold text-[#C25E26] uppercase tracking-wider">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Culinary Selections</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1B18] tracking-tight">
            Explore Our Menu
          </h2>

          <p className="text-base sm:text-lg text-[#524942]">
            Browse our selections across traditional Desi Karahis, savory Chinese wok specialties, Continental favorites, and freshly customized celebration cakes.
          </p>
        </div>

        {/* Notice for Restaurant Owner */}
        <div className="mb-8 p-4 rounded-xl bg-white border border-[#E6DCce] shadow-xs flex items-start sm:items-center justify-between gap-4 flex-col sm:flex-row">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#FAF0E6] flex items-center justify-center flex-shrink-0 text-[#C25E26]">
              <Info className="w-4 h-4" />
            </div>
            <p className="text-xs sm:text-sm text-stone-700">
              <strong className="text-[#1E1B18]">Demo Notice for Management:</strong> In this demo, prices display editable placeholders (<em>Price — Add restaurant price</em>) to reflect accurate kitchen pricing when finalized.
            </p>
          </div>

          <a
            href={`https://wa.me/923002632000?text=${generalMenuWhatsappUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            id="ask-todays-menu-top-btn"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#C25E26] hover:bg-[#A34816] text-white text-xs font-semibold whitespace-nowrap transition-colors flex-shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Ask About Today's Menu</span>
          </a>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 mb-10">
          {/* Search Box */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="menu-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes (e.g. Karahi, Chowmein, Steak, Cake)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#D5C7B2] bg-white text-sm text-[#24211E] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C25E26]/40 focus:border-[#C25E26]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2 pt-2" role="tablist" aria-label="Menu categories">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  id={`menu-cat-btn-${cat.id}`}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-[#C25E26] text-white shadow-sm'
                      : 'bg-white text-[#4A423B] border border-[#E6DCce] hover:bg-[#F3ECE1]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E6DCce] max-w-md mx-auto p-6">
            <UtensilsCrossed className="w-10 h-10 text-stone-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-[#1E1B18]">No dishes found matching your search</h3>
            <p className="text-xs text-stone-500 mt-1 mb-4">
              Try searching with another keyword or reset the category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#FAF0E6] text-[#C25E26] hover:bg-[#F3ECE1]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredItems.map((item: MenuItem) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E6DCce] hover:border-[#C25E26]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* Top Image Container */}
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#1E1B18]/80 backdrop-blur-xs text-white text-[11px] font-medium tracking-wide">
                        {item.categoryLabel}
                      </span>
                      {item.isPopular && (
                        <span className="px-2 py-0.5 rounded-md bg-[#C25E26] text-white text-[11px] font-semibold">
                          Recommended
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-2.5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-serif font-bold text-[#1E1B18] group-hover:text-[#C25E26] transition-colors leading-snug">
                        {item.name}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#5C534B] leading-relaxed line-clamp-3">
                      {item.description}
                    </p>

                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#FAF7F2] text-stone-600 border border-[#E6DCce]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer: Price Placeholder & WhatsApp Button */}
                <div className="p-5 pt-0 mt-2 border-t border-[#F3ECE1] pt-3.5 flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-stone-400">
                      Pricing
                    </span>
                    <span className="text-xs font-semibold text-[#8C360E] italic bg-[#FAF0E6] px-2 py-0.5 rounded border border-[#E8D4C3]">
                      {item.pricePlaceholder}
                    </span>
                  </div>

                  <a
                    href={getWhatsappItemUrl(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold border border-emerald-200 transition-colors"
                    title={`Inquire about ${item.name} on WhatsApp`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Section Bottom CTA as requested */}
        <div className="mt-14 p-8 rounded-2xl bg-[#1E1B18] text-white text-center max-w-3xl mx-auto shadow-lg space-y-4">
          <h3 className="text-2xl font-serif font-bold text-white">
            Looking for Today's Fresh Specialties?
          </h3>
          <p className="text-sm text-stone-300 max-w-xl mx-auto font-normal leading-relaxed">
            Our daily specialties, Karahi cuts, seasonal desserts, and banquet catering packages can be confirmed directly with our kitchen management.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/923002632000?text=${generalMenuWhatsappUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              id="cta-ask-todays-menu-btn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C25E26] hover:bg-[#A34816] text-white text-sm font-semibold shadow-md transition-all transform active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask About Today's Menu</span>
            </a>

            <a
              href={BUSINESS_INFO.phoneTel}
              id="cta-menu-call-btn"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold border border-white/20 transition-all"
            >
              <Phone className="w-4 h-4 text-[#C25E26]" />
              <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
