import React, { useState } from 'react';
import { 
  Search, 
  UtensilsCrossed, 
  MessageCircle, 
  Phone, 
  Plus, 
  ShoppingBag, 
  Check, 
  SlidersHorizontal,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Award,
  ArrowRight
} from 'lucide-react';
import { MenuCategory, MenuItem } from '../types';
import { MENU_ITEMS, BUSINESS_INFO } from '../data/restaurantData';
import { useCart } from '../context/CartContext';
import { DishOrderModal } from './DishOrderModal';

type SpecialMenuMealTime = 'breakfast' | 'brunch' | 'lunch' | 'dinner';

interface SpecialDishItem {
  id: string;
  name: string;
  isRecommended?: boolean;
  priceDisplay: string;
  priceSecondary: string;
  estimatedPrice: number;
  description: string;
  mealTime: SpecialMenuMealTime;
  image: string;
  categoryLabel: string;
}

const SPECIAL_MENU_DATA: SpecialDishItem[] = [
  // --- BREAKFAST ---
  {
    id: 'spec-bk-1',
    name: 'Special Lahori Halwa Puri Thali',
    isRecommended: true,
    priceDisplay: '$6.50',
    priceSecondary: 'Rs. 550',
    estimatedPrice: 550,
    description: 'Crispy puffed puris served with spicy organic chana masala, sweet suji halwa, and house-made mango pickle',
    mealTime: 'breakfast',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    categoryLabel: 'Desi Breakfast',
  },
  {
    id: 'spec-bk-2',
    name: 'Slow-Simmered Beef Nihari',
    isRecommended: true,
    priceDisplay: '$11.50',
    priceSecondary: 'Rs. 980',
    estimatedPrice: 980,
    description: 'Tender beef shank slow-cooked overnight with bone marrow, garnished with fresh ginger, green chilies & lemon juice',
    mealTime: 'breakfast',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    categoryLabel: 'Desi Pakistani',
  },
  {
    id: 'spec-bk-3',
    name: 'Murgh Chanay Khas Lahori',
    isRecommended: false,
    priceDisplay: '$7.00',
    priceSecondary: 'Rs. 580',
    estimatedPrice: 580,
    description: 'Tender chicken pieces simmered with chickpeas in authentic Punjabi tarka and freshly roasted cumin spices',
    mealTime: 'breakfast',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
    categoryLabel: 'Desi Pakistani',
  },
  {
    id: 'spec-bk-4',
    name: 'Cheese Omelette & Lachha Paratha',
    isRecommended: false,
    priceDisplay: '$4.80',
    priceSecondary: 'Rs. 400',
    estimatedPrice: 400,
    description: 'Three-egg fluffy omelette stuffed with melted cheddar, served with multi-layered crispy tandoori lachha paratha',
    mealTime: 'breakfast',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    categoryLabel: 'Breakfast',
  },
  {
    id: 'spec-bk-5',
    name: 'Karak Doodh Patti Chai',
    isRecommended: false,
    priceDisplay: '$2.00',
    priceSecondary: 'Rs. 180',
    estimatedPrice: 180,
    description: 'Slow-brewed black tea steeped with crushed green cardamoms, organic jaggery, and fresh buffalo milk',
    mealTime: 'breakfast',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    categoryLabel: 'Beverages',
  },

  // --- BRUNCH ---
  {
    id: 'spec-br-1',
    name: 'Chicken Malai Boti Platter',
    isRecommended: true,
    priceDisplay: '$14.50',
    priceSecondary: 'Rs. 1,200',
    estimatedPrice: 1200,
    description: 'Charcoal-grilled boneless chicken morsels steeped in fresh dairy cream, cardamom and white pepper marinade',
    mealTime: 'brunch',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    categoryLabel: 'BBQ Special',
  },
  {
    id: 'spec-br-2',
    name: 'Fettuccine Alfredo Pasta',
    isRecommended: true,
    priceDisplay: '$15.00',
    priceSecondary: 'Rs. 1,250',
    estimatedPrice: 1250,
    description: 'Ribbon pasta in silky garlic parmesan cream sauce, topped with seared herbed chicken breast & fresh parsley',
    mealTime: 'brunch',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80',
    categoryLabel: 'Continental',
  },
  {
    id: 'spec-br-3',
    name: 'Mezbaan Triple-Decker Club Sandwich',
    isRecommended: false,
    priceDisplay: '$9.00',
    priceSecondary: 'Rs. 750',
    estimatedPrice: 750,
    description: 'Toasted bakery bread stacked with roasted chicken, sunny-side farm egg, cheese, fresh veggies & crinkle fries',
    mealTime: 'brunch',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    categoryLabel: 'Continental',
  },
  {
    id: 'spec-br-4',
    name: 'Chicken Corn Soup (19B Style)',
    isRecommended: false,
    priceDisplay: '$5.20',
    priceSecondary: 'Rs. 440',
    estimatedPrice: 440,
    description: 'Hearty comforting chicken broth with shredded tender breast, crushed sweet golden corn, and egg drops',
    mealTime: 'brunch',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    categoryLabel: 'Chinese Cuisine',
  },
  {
    id: 'spec-br-5',
    name: 'Lotus Biscoff Pastry Slice',
    isRecommended: false,
    priceDisplay: '$6.00',
    priceSecondary: 'Rs. 520',
    estimatedPrice: 520,
    description: 'Decadent moist vanilla sponge layered with caramelized Belgian Lotus spread and spiced speculoos cream',
    mealTime: 'brunch',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    categoryLabel: 'Bakery & Cakes',
  },

  // --- LUNCH ---
  {
    id: 'spec-lu-1',
    name: 'Special Mutton Karahi',
    isRecommended: true,
    priceDisplay: '$27.85',
    priceSecondary: 'Rs. 2,450',
    estimatedPrice: 2450,
    description: 'Fresh hand-cut prime mutton wok-tossed with ripe farm tomatoes, fresh ginger juliennes & crushed black pepper',
    mealTime: 'lunch',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    categoryLabel: 'Desi Pakistani',
  },
  {
    id: 'spec-lu-2',
    name: 'Chicken Boneless Handi',
    isRecommended: true,
    priceDisplay: '$20.00',
    priceSecondary: 'Rs. 1,750',
    estimatedPrice: 1750,
    description: 'Tender boneless chicken simmered in rich creamy butter gravy, roasted cashews, garlic, ginger and kasuri methi',
    mealTime: 'lunch',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    categoryLabel: 'Desi Pakistani',
  },
  {
    id: 'spec-lu-3',
    name: 'Chicken Manchurian with Fried Rice',
    isRecommended: false,
    priceDisplay: '$14.20',
    priceSecondary: 'Rs. 1,180',
    estimatedPrice: 1180,
    description: 'Golden chicken cubes glazed in zesty sweet and tangy ginger-garlic sauce over steaming egg fried jasmine rice',
    mealTime: 'lunch',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80',
    categoryLabel: 'Chinese Cuisine',
  },
  {
    id: 'spec-lu-4',
    name: 'Prime Beef Pepper Steak',
    isRecommended: false,
    priceDisplay: '$22.00',
    priceSecondary: 'Rs. 1,850',
    estimatedPrice: 1850,
    description: 'Charbroiled tenderloin beef fillet served with peppercorn reduction sauce, sautéed garden veggies and mashed potato',
    mealTime: 'lunch',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    categoryLabel: 'Continental',
  },
  {
    id: 'spec-lu-5',
    name: 'Tandoori Roghani Naan Basket',
    isRecommended: false,
    priceDisplay: '$3.50',
    priceSecondary: 'Rs. 290',
    estimatedPrice: 290,
    description: 'Freshly baked leavened bread brushed with clarified butter, nigella seeds, and aromatic toasted sesame',
    mealTime: 'lunch',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
    categoryLabel: 'Tandoor',
  },

  // --- DINNER ---
  {
    id: 'spec-di-1',
    name: 'Chef Shinwari Mutton Karahi',
    isRecommended: true,
    priceDisplay: '$29.50',
    priceSecondary: 'Rs. 2,650',
    estimatedPrice: 2650,
    description: 'Tribal mountain style mutton cooked exclusively in fresh tomato essence, animal fat, sea salt and slit green chilies',
    mealTime: 'dinner',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    categoryLabel: 'Desi Pakistani',
  },
  {
    id: 'spec-di-2',
    name: 'Royal Sizzling BBQ Platter',
    isRecommended: true,
    priceDisplay: '$25.00',
    priceSecondary: 'Rs. 2,200',
    estimatedPrice: 2200,
    description: 'Beef seekh kabab, chicken reshmi kabab, malai boti, and charcoal grilled fish served sizzling over caramelized onions',
    mealTime: 'dinner',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    categoryLabel: 'BBQ Special',
  },
  {
    id: 'spec-di-3',
    name: 'Kung Pao Chicken Szechuan',
    isRecommended: false,
    priceDisplay: '$15.15',
    priceSecondary: 'Rs. 1,250',
    estimatedPrice: 1250,
    description: 'Spicy wok-fried chicken pieces tossed with dried red chilies, roasted crunchy peanuts, scallions, and dark soy',
    mealTime: 'dinner',
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80',
    categoryLabel: 'Chinese Cuisine',
  },
  {
    id: 'spec-di-4',
    name: 'Chicken Parmesan with Pasta',
    isRecommended: false,
    priceDisplay: '$17.50',
    priceSecondary: 'Rs. 1,450',
    estimatedPrice: 1450,
    description: 'Crispy panko-breaded chicken breast smothered in tangy marinara and melted bubbling mozzarella over spaghetti',
    mealTime: 'dinner',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80',
    categoryLabel: 'Continental',
  },
  {
    id: 'spec-di-5',
    name: 'Belgian Chocolate Fudge Ganache Cake',
    isRecommended: false,
    priceDisplay: '$26.00',
    priceSecondary: 'Rs. 2,200',
    estimatedPrice: 2200,
    description: 'Decadent multi-layered dark cocoa sponge completely blanketed in warm Belgian fudge ganache glaze',
    mealTime: 'dinner',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    categoryLabel: 'Bakery & Cakes',
  },
];

interface MenuSectionProps {
  onSelectInquiryItem?: (itemName: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectInquiryItem }) => {
  const { addToCart, openCart, totalItems } = useCart();
  
  // Special Menu meal-time tab state (matching screenshot 2: Breakfast, Brunch, Lunch, Dinner)
  const [activeMealTime, setActiveMealTime] = useState<SpecialMenuMealTime>('lunch');
  
  // Full catalog view controls
  const [showFullCatalog, setShowFullCatalog] = useState(false);
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDishForModal, setSelectedDishForModal] = useState<MenuItem | null>(null);
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  const mealTimeTabs: { id: SpecialMenuMealTime; label: string }[] = [
    { id: 'breakfast', label: 'Breakfast' },
    { id: 'brunch', label: 'Brunch' },
    { id: 'lunch', label: 'Lunch' },
    { id: 'dinner', label: 'Dinner' },
  ];

  const currentSpecialItems = SPECIAL_MENU_DATA.filter(
    (item) => item.mealTime === activeMealTime
  );

  const categories: { id: MenuCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Offerings', count: MENU_ITEMS.length },
    { id: 'desi-pakistani', label: 'Desi Pakistani', count: MENU_ITEMS.filter(i => i.category === 'desi-pakistani').length },
    { id: 'chinese', label: 'Chinese Cuisine', count: MENU_ITEMS.filter(i => i.category === 'chinese').length },
    { id: 'continental', label: 'Continental', count: MENU_ITEMS.filter(i => i.category === 'continental').length },
    { id: 'cakes', label: 'Custom Cakes', count: MENU_ITEMS.filter(i => i.category === 'cakes').length },
    { id: 'event-packages', label: 'Event Packages', count: MENU_ITEMS.filter(i => i.category === 'event-packages').length },
  ];

  const filteredFullItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.tags && item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const handleSpecialItemAdd = (item: SpecialDishItem) => {
    addToCart({
      menuItemId: item.id,
      name: item.name,
      categoryLabel: item.categoryLabel,
      priceText: `${item.priceSecondary} (${item.priceDisplay})`,
      unitPrice: item.estimatedPrice,
      quantity: 1,
      image: item.image,
      spiceLevel: 'Mild',
    });

    setRecentlyAddedId(item.id);
    setTimeout(() => {
      setRecentlyAddedId(null);
    }, 1400);
  };

  const handleQuickAdd = (item: MenuItem, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      menuItemId: item.id,
      name: item.name,
      categoryLabel: item.categoryLabel,
      priceText: item.pricePlaceholder,
      unitPrice: item.estimatedPrice || 0,
      quantity: 1,
      image: item.image,
      spiceLevel: item.spiceLevel,
    });

    setRecentlyAddedId(item.id);
    setTimeout(() => {
      setRecentlyAddedId(null);
    }, 1200);
  };

  const getWhatsappItemUrl = (itemName: string) => {
    const message = encodeURIComponent(
      `Hello Mezbaan Restaurant Okara, I would like to order or ask details for "${itemName}". Please let me know preparation timing.`
    );
    return `https://wa.me/923002632000?text=${message}`;
  };

  const generalMenuWhatsappUrl = encodeURIComponent(
    `Hello Mezbaan Restaurant Okara, I would like to ask about today's fresh menu, Karahi specials, and dining availability.`
  );

  return (
    <section id="menu" className="relative bg-[#071118] text-white pt-16 sm:pt-24 pb-20 overflow-hidden border-t border-stone-800">
      
      {/* Dark Ambient Restaurant Photography Overlay matching Screenshot 2 */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-15 mix-blend-luminosity"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1920&q=80')`
        }}
      />
      {/* Dark Vignette Mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071118] via-[#0A1620]/95 to-[#071118] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Floating Cart Quick Banner if items selected */}
        {totalItems > 0 && (
          <div className="mb-8 p-4 rounded-2xl bg-stone-900/90 text-white flex items-center justify-between gap-4 shadow-xl border border-stone-700 backdrop-blur-md animate-in fade-in duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F26522] flex items-center justify-center text-white shadow-md shadow-[#F26522]/30">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">
                  You have {totalItems} {totalItems === 1 ? 'dish' : 'dishes'} in your order cart
                </p>
                <p className="text-xs text-stone-300">
                  Ready to send directly to Mezbaan Restaurant via WhatsApp.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={openCart}
              className="px-4 py-2 rounded-xl bg-[#F26522] hover:bg-[#d85316] text-white text-xs sm:text-sm font-semibold shadow-sm transition-colors whitespace-nowrap"
            >
              Review &amp; Checkout
            </button>
          </div>
        )}

        {/* ========================================================= */}
        {/* SCREENSHOT 2 MATCH: "Our Special Menu" Centered Heading */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Our Special Menu
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto font-normal">
            Handcrafted daily by Mezbaan’s executive chefs with fresh local Karahi cuts, rich handi gravies, and gourmet recipes.
          </p>
        </div>

        {/* Outline Rectangular Filter Tabs: [ Breakfast ] [ Brunch ] [ Lunch ] [ Dinner ] */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-4 mb-12 sm:mb-16" role="tablist">
          {mealTimeTabs.map((tab) => {
            const isActive = activeMealTime === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveMealTime(tab.id)}
                className={`px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm tracking-wide font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'border-2 border-[#F26522] text-[#F26522] bg-transparent font-semibold shadow-sm shadow-[#F26522]/20'
                    : 'border border-stone-600/90 hover:border-stone-400 text-stone-300 hover:text-white bg-transparent'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Two-Column Grid: Menu List on Left, Chef Photo on Right (Screenshot 2 Match) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column (lg:col-span-7): Dotted line gourmet menu items */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {currentSpecialItems.map((dish) => {
              const isAdded = recentlyAddedId === dish.id;
              return (
                <div 
                  key={dish.id}
                  className="group relative pb-5 border-b border-stone-800/80 last:border-0 transition-colors"
                >
                  {/* Top Line: Title + RECOMMENDED badge + Dotted Leader + Price */}
                  <div className="flex items-baseline justify-between gap-2">
                    <div className="flex items-center flex-wrap gap-2 flex-shrink-0">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white tracking-wide group-hover:text-[#F26522] transition-colors">
                        {dish.name}
                      </h3>

                      {dish.isRecommended && (
                        <span className="px-2 py-0.5 rounded-xs bg-[#F26522] text-white text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest shadow-xs">
                          RECOMMENDED
                        </span>
                      )}
                    </div>

                    {/* Dotted connecting line */}
                    <div className="flex-1 mx-2 sm:mx-3 border-b-2 border-dotted border-stone-600/80 mb-1.5 min-w-[20px]" />

                    {/* Price in bold white matching screenshot */}
                    <div className="text-right flex-shrink-0">
                      <span className="text-base sm:text-lg lg:text-xl font-bold text-white tracking-wide">
                        {dish.priceDisplay}
                      </span>
                      <span className="block text-[11px] text-stone-400 font-normal -mt-0.5">
                        {dish.priceSecondary}
                      </span>
                    </div>
                  </div>

                  {/* Subtitle: Ingredients / Description */}
                  <div className="mt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <p className="text-xs sm:text-sm text-stone-300/90 leading-relaxed font-normal max-w-lg">
                      {dish.description}
                    </p>

                    {/* Quick interactive Add / Order trigger */}
                    <div className="flex items-center gap-2 pt-1 sm:pt-0 flex-shrink-0">
                      <button
                        type="button"
                        onClick={() => handleSpecialItemAdd(dish)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          isAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-stone-800 hover:bg-[#F26522] text-stone-200 hover:text-white border border-stone-700/80 hover:border-[#F26522]'
                        }`}
                        title="Add dish to online order cart"
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added!</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Order</span>
                          </>
                        )}
                      </button>

                      <a
                        href={getWhatsappItemUrl(dish.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center p-1.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 text-emerald-400 border border-emerald-700/40 hover:border-emerald-600 transition-colors"
                        title="WhatsApp inquiry for this dish"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </div>
              );
            })}

            {/* Quick Helper Note */}
            <div className="pt-2 flex items-center gap-2 text-xs text-stone-400">
              <Sparkles className="w-3.5 h-3.5 text-[#F26522]" />
              <span>Prices include fresh tandoori bread pairing and traditional salad raita accompaniments.</span>
            </div>
          </div>

          {/* Right Column (lg:col-span-5): Chef Photo Card matching Screenshot 2 */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border-2 border-stone-800 shadow-2xl bg-stone-900 group">
              {/* Executive Chef Image */}
              <div className="aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=80"
                  alt="Mezbaan Executive Head Chef"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Ambient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              {/* Top Tag Pill */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-[#F26522] text-white text-xs font-bold uppercase tracking-wider shadow-md">
                  Executive Chef Curated
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-5 left-5 right-5 text-white space-y-2">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold">
                  <Award className="w-4 h-4 text-[#F26522]" />
                  <span>Mezbaan Master Kitchen • Okara</span>
                </div>
                <h4 className="text-xl font-serif font-bold text-white leading-tight">
                  Authentic Cooking &amp; Fresh Cast-Iron Wok Mastery
                </h4>
                <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
                  “Every Karahi is freshly cut and spiced upon order. No pre-cooked gravies, ensuring tender meat and rich aroma.”
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#F26522] hover:text-white transition-colors"
                  >
                    <span>Reserve Kitchen Table</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <span className="text-[11px] text-stone-400">
                    40D Depalpur Road
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* EXPANDABLE FULL MENU CATALOG & CATEGORY FILTER */}
        {/* ========================================================= */}
        <div className="mt-16 pt-12 border-t border-stone-800/90">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F26522] block">
                Complete Restaurant Selection
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Explore Full Menu &amp; Categories
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-1">
                Browse our complete Desi, Chinese, Continental, Customized Cakes &amp; Event Platters catalog ({MENU_ITEMS.length} dishes).
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowFullCatalog(!showFullCatalog)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold border border-stone-700 transition-colors shadow-sm"
            >
              <span>{showFullCatalog ? 'Collapse Catalog' : 'Browse All Dishes'}</span>
              {showFullCatalog ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Collapsible Content */}
          {showFullCatalog && (
            <div className="pt-6 space-y-8 animate-in fade-in duration-300">
              
              {/* Search & Category Filter Controls */}
              <div className="space-y-4">
                {/* Search Box */}
                <div className="relative max-w-md mx-auto">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    id="menu-search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search dishes (e.g. Mutton Karahi, Chowmein, Steak, Cake)..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-700 bg-stone-900 text-xs sm:text-sm text-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#F26522]/40 focus:border-[#F26522] shadow-2xs"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-white font-semibold"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Category Filter Pills */}
                <div className="flex items-center justify-center flex-wrap gap-2 pt-1" role="tablist" aria-label="Menu categories">
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
                        className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                          isActive
                            ? 'bg-[#F26522] text-white shadow-xs'
                            : 'bg-stone-900 text-stone-300 border border-stone-700 hover:bg-stone-800'
                        }`}
                      >
                        <span>{cat.label}</span>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                          isActive ? 'bg-white text-[#F26522] font-bold' : 'bg-stone-800 text-stone-400'
                        }`}>
                          {cat.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Full Menu Cards Grid */}
              {filteredFullItems.length === 0 ? (
                <div className="text-center py-16 bg-stone-900 rounded-2xl border border-stone-800 max-w-md mx-auto p-6">
                  <UtensilsCrossed className="w-10 h-10 text-stone-500 mx-auto mb-3" />
                  <h3 className="text-base font-bold text-white">No dishes found matching your search</h3>
                  <p className="text-xs text-stone-400 mt-1 mb-4">
                    Try searching with another keyword or reset the category filter.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory('all');
                      setSearchQuery('');
                    }}
                    className="px-4 py-2 text-xs font-semibold rounded-xl bg-stone-800 text-[#F26522] hover:bg-stone-700"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredFullItems.map((item) => {
                    const isJustAdded = recentlyAddedId === item.id;
                    return (
                      <div
                        key={item.id}
                        id={`menu-item-${item.id}`}
                        className="group bg-stone-900/90 rounded-2xl overflow-hidden border border-stone-800 hover:border-stone-700 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                      >
                        {/* Image & Badges */}
                        <div>
                          <div className="relative aspect-[16/10] overflow-hidden bg-stone-950">
                            <img
                              src={item.image}
                              alt={item.name}
                              loading="lazy"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />

                            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-black/75 text-white backdrop-blur-xs">
                                {item.categoryLabel}
                              </span>
                              {item.isPopular && (
                                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#F26522] text-white shadow-xs">
                                  Chef Special
                                </span>
                              )}
                            </div>

                            {item.portion && (
                              <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/80 text-[10px] text-stone-200 backdrop-blur-xs">
                                {item.portion}
                              </div>
                            )}
                          </div>

                          {/* Card Body */}
                          <div className="p-5 space-y-2.5">
                            <div className="flex items-start justify-between gap-2">
                              <h3 
                                onClick={() => setSelectedDishForModal(item)}
                                className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-[#F26522] transition-colors leading-snug cursor-pointer"
                              >
                                {item.name}
                              </h3>
                            </div>

                            <p className="text-xs text-stone-300 leading-relaxed line-clamp-2">
                              {item.description}
                            </p>

                            {item.tags && item.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1.5 pt-1">
                                {item.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="text-[10px] font-medium px-2 py-0.5 rounded bg-stone-800 text-stone-400 border border-stone-700/80"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Card Footer: Price & Add to Cart Controls */}
                        <div className="p-5 pt-0 mt-2 border-t border-stone-800 pt-3.5 space-y-3">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex flex-col">
                              <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400">
                                Price
                              </span>
                              <span className="text-xs sm:text-sm font-bold text-[#F26522]">
                                {item.estimatedPrice && item.estimatedPrice > 0 
                                  ? `Rs. ${item.estimatedPrice.toLocaleString()}`
                                  : item.pricePlaceholder}
                              </span>
                            </div>

                            <a
                              href={getWhatsappItemUrl(item.name)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-800/80 transition-all"
                              title="Inquire directly on WhatsApp"
                            >
                              <MessageCircle className="w-3 h-3 text-emerald-400" />
                              <span>WhatsApp</span>
                            </a>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <button
                              type="button"
                              onClick={(e) => handleQuickAdd(item, e)}
                              className={`inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all ${
                                isJustAdded
                                  ? 'bg-emerald-700 text-white shadow-xs'
                                  : 'bg-gradient-to-r from-[#F26522] to-[#A34816] hover:from-[#A34816] hover:to-[#8C360E] text-white shadow-2xs hover:shadow-xs'
                              }`}
                            >
                              {isJustAdded ? (
                                <>
                                  <Check className="w-3.5 h-3.5" />
                                  <span>Added to Cart</span>
                                </>
                              ) : (
                                <>
                                  <Plus className="w-3.5 h-3.5 text-amber-200" />
                                  <span>Add to Cart</span>
                                </>
                              )}
                            </button>

                            <button
                              type="button"
                              onClick={() => setSelectedDishForModal(item)}
                              className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-xs font-semibold border border-stone-700 hover:border-[#F26522]/50 shadow-2xs transition-colors"
                            >
                              <SlidersHorizontal className="w-3.5 h-3.5 text-stone-400" />
                              <span>Customize</span>
                            </button>
                          </div>

                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

            </div>
          )}

        </div>

        {/* Section Bottom WhatsApp & Call CTA Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-stone-900/90 text-white text-center max-w-3xl mx-auto shadow-2xl border border-stone-800 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-950 border border-stone-800 text-xs text-[#F26522]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Daily Fresh Karahi &amp; Tandoor Service</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Special Requests or Large Family Dastarkhwan?
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto font-normal leading-relaxed">
            Our head chef prepares fresh handis and custom family platters to order. Contact our kitchen management directly on WhatsApp for today's special cuts and quick booking.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`https://wa.me/923002632000?text=${generalMenuWhatsappUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              id="cta-ask-todays-menu-btn"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-emerald-950/40 border border-emerald-600/40 transition-all transform active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>Inquire on WhatsApp</span>
            </a>

            <a
              href={BUSINESS_INFO.phoneTel}
              id="cta-menu-call-btn"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-xs sm:text-sm font-semibold border border-stone-700 transition-all"
            >
              <Phone className="w-4 h-4 text-[#F26522]" />
              <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

      </div>

      {/* Dish Customization Modal */}
      {selectedDishForModal && (
        <DishOrderModal
          item={selectedDishForModal}
          onClose={() => setSelectedDishForModal(null)}
        />
      )}
    </section>
  );
};
