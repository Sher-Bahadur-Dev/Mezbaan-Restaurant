import React, { useState } from 'react';
import { X, Plus, Minus, MessageCircle, ShoppingBag, Flame, Sparkles, Check } from 'lucide-react';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';
import { BUSINESS_INFO } from '../data/restaurantData';

interface DishOrderModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const DishOrderModal: React.FC<DishOrderModalProps> = ({ item, onClose }) => {
  const { addToCart, openCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [spiceLevel, setSpiceLevel] = useState<string>(item?.spiceLevel || 'Medium');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [addedAnimation, setAddedAnimation] = useState(false);

  if (!item) return null;

  const unitPrice = item.estimatedPrice || 0;
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    addToCart({
      menuItemId: item.id,
      name: item.name,
      categoryLabel: item.categoryLabel,
      priceText: item.pricePlaceholder,
      unitPrice,
      quantity,
      image: item.image,
      spiceLevel,
      specialInstructions: specialInstructions.trim() || undefined,
    });

    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
    }, 600);
  };

  const handleDirectWhatsApp = () => {
    let text = `*New Dish Order for Mezbaan Restaurant Okara*\n`;
    text += `*Dish:* ${item.name} × ${quantity}\n`;
    text += `*Category:* ${item.categoryLabel}\n`;
    text += `*Spice Level:* ${spiceLevel}\n`;
    if (specialInstructions.trim()) {
      text += `*Special Note:* ${specialInstructions.trim()}\n`;
    }
    text += `*Address:* 40D Depalpur Road, Okara\n`;
    text += `_Please confirm preparation time and kitchen price. Thank you!_`;

    window.open(`https://wa.me/923002632000?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-2xl border border-[#E6DCce] z-10">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors shadow-md"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Dish Visual Header */}
        <div className="relative h-56 sm:h-64 w-full bg-stone-900">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161412] via-transparent to-black/20" />
          
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#C25E26] text-[11px] font-bold tracking-wider uppercase mb-1">
              {item.categoryLabel}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug">
              {item.name}
            </h3>
          </div>
        </div>

        {/* Body Details */}
        <div className="p-6 space-y-5">
          <p className="text-xs sm:text-sm text-[#524942] leading-relaxed">
            {item.description}
          </p>

          {/* Pricing & Portion */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E6DCce]">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
                Portion & Pricing
              </span>
              <p className="text-sm font-semibold text-[#1E1B18]">
                {item.portion || 'Fresh Kitchen Portion'}
              </p>
            </div>
            <div className="text-right">
              <span className="text-sm font-serif font-bold text-[#C25E26]">
                {unitPrice > 0 ? `Rs. ${unitPrice.toLocaleString()}` : item.pricePlaceholder}
              </span>
              <p className="text-[10px] text-stone-500">Verified kitchen standard</p>
            </div>
          </div>

          {/* Spice Preference (for savory items) */}
          {item.category !== 'cakes' && (
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1B18] mb-2 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-[#C25E26]" />
                <span>Spice Preference</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['Mild', 'Medium', 'Desi Spicy'] as const).map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setSpiceLevel(level)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                      spiceLevel === level
                        ? 'bg-[#161412] text-white border-[#161412] shadow-xs'
                        : 'bg-white text-stone-700 border-[#D5C7B2] hover:bg-stone-50'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1E1B18]">
              Order Quantity
            </span>
            <div className="inline-flex items-center border border-[#D5C7B2] rounded-xl bg-white shadow-xs">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-2 text-stone-600 hover:text-black hover:bg-stone-100 rounded-l-xl transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="px-4 text-sm font-bold text-[#1E1B18]">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-2 text-stone-600 hover:text-black hover:bg-stone-100 rounded-r-xl transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Special Instructions Note */}
          <div>
            <label className="block text-[11px] font-semibold text-stone-600 mb-1">
              Kitchen Instructions (Optional)
            </label>
            <input
              type="text"
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="e.g. Less oil, extra green chilies, separate raita..."
              className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#D5C7B2] bg-white text-[#1E1B18] focus:ring-1 focus:ring-[#C25E26] outline-none"
            />
          </div>

          {/* Action CTAs */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={handleAddToCart}
              className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold shadow-sm transition-all ${
                addedAnimation
                  ? 'bg-emerald-700 text-white scale-98 shadow-emerald-950/20'
                  : 'bg-gradient-to-r from-[#C25E26] to-[#A34816] hover:from-[#A34816] hover:to-[#8C360E] text-white shadow-[#C25E26]/20'
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Cart!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-amber-200" />
                  <span>Add to Order Cart</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleDirectWhatsApp}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-sm border border-emerald-600/30 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>Order via WhatsApp</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
