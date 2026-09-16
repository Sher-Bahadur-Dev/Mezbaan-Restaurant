import React, { useState } from 'react';
import { X, Cake, ShoppingBag, MessageCircle, Check, Sparkles, Heart } from 'lucide-react';
import { CakeItem } from '../types';
import { useCart } from '../context/CartContext';
import { BUSINESS_INFO } from '../data/restaurantData';

interface CakeCustomizerModalProps {
  cake: CakeItem | null;
  onClose: () => void;
}

export const CakeCustomizerModal: React.FC<CakeCustomizerModalProps> = ({ cake, onClose }) => {
  const { addToCart } = useCart();
  const [selectedFlavour, setSelectedFlavour] = useState('Belgian Chocolate Fudge');
  const [selectedWeight, setSelectedWeight] = useState('2.5 lbs');
  const [inscription, setInscription] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [specialThemeNotes, setSpecialThemeNotes] = useState('');
  const [addedAnimation, setAddedAnimation] = useState(false);

  if (!cake) return null;

  const flavours = [
    'Belgian Chocolate Fudge',
    'Red Velvet Cream Cheese',
    'Classic Vanilla Sponge',
    'Lotus Biscoff Crunch',
    'Caramel Toffee Crunch',
  ];

  const weights = [
    { label: '2.0 lbs (8-10 servings)', estPrice: 1950 },
    { label: '2.5 lbs (12-14 servings)', estPrice: 2350 },
    { label: '3.0 lbs (15-18 servings)', estPrice: 2800 },
    { label: '4.0+ lbs (Multi-tier Celebration)', estPrice: 3800 },
  ];

  const currentWeightObj = weights.find(w => w.label.startsWith(selectedWeight.split(' ')[0])) || weights[0];

  const handleAddToCart = () => {
    addToCart({
      menuItemId: cake.id,
      name: `${cake.title} (${selectedFlavour})`,
      categoryLabel: 'Customized Cakes',
      priceText: `Est. Rs. ${currentWeightObj.estPrice.toLocaleString()}`,
      unitPrice: currentWeightObj.estPrice,
      quantity: 1,
      image: cake.image,
      customCakeDetails: {
        flavour: selectedFlavour,
        weight: selectedWeight,
        inscription: inscription.trim() || undefined,
        themeDescription: specialThemeNotes.trim() || undefined,
      },
      specialInstructions: pickupDate ? `Required for: ${pickupDate}` : undefined,
    });

    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
      onClose();
    }, 600);
  };

  const handleDirectWhatsApp = () => {
    let text = `*Customized Cake Order for Mezbaan Restaurant Okara*\n`;
    text += `*Cake Design:* ${cake.title}\n`;
    text += `*Flavour:* ${selectedFlavour}\n`;
    text += `*Weight:* ${selectedWeight}\n`;
    if (inscription.trim()) {
      text += `*Cake Inscription/Message:* "${inscription.trim()}"\n`;
    }
    if (pickupDate.trim()) {
      text += `*Required Date/Time:* ${pickupDate}\n`;
    }
    if (specialThemeNotes.trim()) {
      text += `*Theme Instructions:* ${specialThemeNotes.trim()}\n`;
    }
    text += `*Bakery Pickup:* 40D Depalpur Road, Okara\n`;
    text += `_Please confirm baking slot and kitchen quote. Thank you!_`;

    window.open(`https://wa.me/923002632000?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-2xl border border-[#E6DCce] z-10 my-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors shadow-md"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Visual Header */}
        <div className="relative h-48 sm:h-52 w-full bg-stone-900">
          <img
            src={cake.image}
            alt={cake.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161412] via-transparent to-black/30" />
          
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#C25E26] text-[10px] font-bold tracking-wider uppercase mb-1">
              {cake.categoryLabel}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug">
              {cake.title}
            </h3>
          </div>
        </div>

        {/* Form content */}
        <div className="p-6 space-y-4 max-h-[65vh] overflow-y-auto">
          <p className="text-xs text-[#524942]">
            {cake.description}
          </p>

          {/* Flavour Choice */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1B18] mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C25E26]" />
              <span>Choose Cake Sponge & Cream Flavour</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {flavours.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setSelectedFlavour(f)}
                  className={`p-2.5 rounded-xl text-left text-xs font-semibold border transition-all ${
                    selectedFlavour === f
                      ? 'bg-[#161412] text-white border-[#161412] shadow-xs'
                      : 'bg-white text-stone-700 border-[#D5C7B2] hover:bg-stone-50'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Weight & Size */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1B18] mb-2">
              Select Cake Weight / Size
            </label>
            <div className="grid grid-cols-2 gap-2">
              {weights.map((w) => (
                <button
                  key={w.label}
                  type="button"
                  onClick={() => setSelectedWeight(w.label)}
                  className={`p-2.5 rounded-xl text-left text-xs border transition-all ${
                    selectedWeight === w.label
                      ? 'bg-[#161412] text-white border-[#161412] shadow-xs'
                      : 'bg-white text-stone-700 border-[#D5C7B2] hover:bg-stone-50'
                  }`}
                >
                  <span className="font-bold block">{w.label.split('(')[0]}</span>
                  <span className={`text-[10px] ${selectedWeight === w.label ? 'text-stone-300' : 'text-stone-500'}`}>
                    Est. Rs. {w.estPrice.toLocaleString()}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Custom Inscription on Cake */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1B18] mb-1">
              Custom Cake Writing / Inscription
            </label>
            <input
              type="text"
              value={inscription}
              onChange={(e) => setInscription(e.target.value)}
              placeholder='e.g. "Happy 10th Birthday Aayan!" or "Mezbaan Mubarak"'
              className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#D5C7B2] bg-white text-[#1E1B18] focus:ring-1 focus:ring-[#C25E26] outline-none"
            />
          </div>

          {/* Celebration Date */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1E1B18] mb-1">
              Celebration / Pickup Date
            </label>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#D5C7B2] bg-white text-[#1E1B18] focus:ring-1 focus:ring-[#C25E26] outline-none"
            />
          </div>

          {/* Theme Notes */}
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1">
              Specific Color or Theme Request (Optional)
            </label>
            <input
              type="text"
              value={specialThemeNotes}
              onChange={(e) => setSpecialThemeNotes(e.target.value)}
              placeholder="e.g. Blue & Gold accent colors, floral icing on top..."
              className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#D5C7B2] bg-white text-[#1E1B18] focus:ring-1 focus:ring-[#C25E26] outline-none"
            />
          </div>

          {/* Actions */}
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
                  <span>Cake Added to Cart!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-amber-200" />
                  <span>Add Cake to Cart</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleDirectWhatsApp}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-sm border border-emerald-600/30 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>Inquire via WhatsApp</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
