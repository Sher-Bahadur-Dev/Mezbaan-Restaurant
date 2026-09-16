import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  MessageCircle, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  ArrowRight,
  Info,
  CheckCircle2,
  Utensils
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { OrderType, OrderCustomerDetails } from '../types';
import { BUSINESS_INFO } from '../data/restaurantData';

export const CartDrawer: React.FC = () => {
  const { 
    items, 
    isOpen, 
    closeCart, 
    updateQuantity, 
    removeItem, 
    clearCart, 
    totalItems, 
    totalEstimatedPrice,
    submitOrderToWhatsApp 
  } = useCart();

  const [orderType, setOrderType] = useState<OrderType>('takeaway');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [tableGuests, setTableGuests] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  const [formError, setFormError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) {
      setFormError('Please enter your active phone number for order confirmation.');
      return;
    }
    setFormError('');

    const details: OrderCustomerDetails = {
      fullName: fullName.trim() || 'Valued Guest',
      phone: phone.trim(),
      orderType,
      preferredDate,
      preferredTime,
      tableGuests: orderType === 'dine-in' ? tableGuests : undefined,
      specialNotes,
    };

    submitOrderToWhatsApp(details);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] text-[#24211E] shadow-2xl flex flex-col border-l border-[#E6DCce]">
          
          {/* Header */}
          <div className="px-6 py-5 bg-[#161412] text-white flex items-center justify-between border-b border-stone-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#C25E26] flex items-center justify-center text-white shadow-xs">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base font-serif font-bold text-white tracking-wide">
                  Your Mezbaan Order
                </h2>
                <p className="text-[11px] text-stone-400">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'} selected • WhatsApp Dispatch
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={closeCart}
              className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800/80 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#EFE9DF] flex items-center justify-center text-stone-400">
                <Utensils className="w-8 h-8 text-stone-500" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-serif font-bold text-[#1E1B18]">
                  Your cart is empty
                </h3>
                <p className="text-xs text-[#524942] max-w-xs mx-auto">
                  Explore our Desi Pakistani Karahis, BBQ, Chinese wok favorites, and customized celebration cakes.
                </p>
              </div>
              <button
                type="button"
                onClick={closeCart}
                className="mt-2 px-6 py-2.5 rounded-xl bg-[#C25E26] hover:bg-[#A34816] text-white text-xs font-semibold shadow-xs transition-colors"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              
              {/* Order Type Toggle */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                  Order Preference
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-[#EDE6DC] rounded-xl text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setOrderType('takeaway')}
                    className={`py-2 px-2 rounded-lg transition-all text-center ${
                      orderType === 'takeaway'
                        ? 'bg-[#161412] text-white shadow-xs'
                        : 'text-stone-700 hover:text-black'
                    }`}
                  >
                    Takeaway
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('dine-in')}
                    className={`py-2 px-2 rounded-lg transition-all text-center ${
                      orderType === 'dine-in'
                        ? 'bg-[#161412] text-white shadow-xs'
                        : 'text-stone-700 hover:text-black'
                    }`}
                  >
                    Dine-In
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('cake-order')}
                    className={`py-2 px-2 rounded-lg transition-all text-center ${
                      orderType === 'cake-order'
                        ? 'bg-[#161412] text-white shadow-xs'
                        : 'text-stone-700 hover:text-black'
                    }`}
                  >
                    Cake Order
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('event-catering')}
                    className={`py-2 px-2 rounded-lg transition-all text-center ${
                      orderType === 'event-catering'
                        ? 'bg-[#161412] text-white shadow-xs'
                        : 'text-stone-700 hover:text-black'
                    }`}
                  >
                    Event Lawn
                  </button>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-stone-500">
                  <span className="font-bold uppercase tracking-wider">Selected Dishes & Cakes</span>
                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-stone-500 hover:text-red-600 transition-colors flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear All</span>
                  </button>
                </div>

                <div className="space-y-2.5">
                  {items.map((item) => (
                    <div
                      key={item.cartId}
                      className="p-3.5 rounded-xl bg-white border border-[#E6DCce] shadow-xs flex gap-3 items-start"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover flex-shrink-0 border border-[#E6DCce]"
                      />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs sm:text-sm font-serif font-bold text-[#1E1B18] truncate">
                            {item.name}
                          </h4>
                          <button
                            type="button"
                            onClick={() => removeItem(item.cartId)}
                            className="text-stone-400 hover:text-red-500 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <p className="text-[11px] text-stone-500 mb-1">
                          {item.categoryLabel}
                          {item.spiceLevel ? ` • ${item.spiceLevel}` : ''}
                        </p>

                        {/* Custom cake details if present */}
                        {item.customCakeDetails && (
                          <div className="text-[10px] bg-[#FAF0E6] text-[#8C360E] p-1.5 rounded-md mb-1.5 space-y-0.5">
                            {item.customCakeDetails.flavour && (
                              <p>Flavour: <strong>{item.customCakeDetails.flavour}</strong> ({item.customCakeDetails.weight || 'Std'})</p>
                            )}
                            {item.customCakeDetails.inscription && (
                              <p>Message: <em>"{item.customCakeDetails.inscription}"</em></p>
                            )}
                          </div>
                        )}

                        {item.specialInstructions && (
                          <p className="text-[10px] text-stone-600 italic mb-1.5">
                            Note: {item.specialInstructions}
                          </p>
                        )}

                        <div className="flex items-center justify-between pt-1">
                          <span className="text-xs font-bold text-[#C25E26]">
                            {item.unitPrice > 0
                              ? `Rs. ${(item.unitPrice * item.quantity).toLocaleString()}`
                              : item.priceText || 'Price on request'}
                          </span>

                          {/* Quantity Controls */}
                          <div className="inline-flex items-center border border-[#D5C7B2] rounded-lg bg-[#FAF7F2]">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.cartId, -1)}
                              className="p-1 text-stone-600 hover:text-black hover:bg-stone-200/60 rounded-l-lg transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 text-xs font-bold text-[#1E1B18]">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.cartId, 1)}
                              className="p-1 text-stone-600 hover:text-black hover:bg-stone-200/60 rounded-r-lg transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customer Contact & Time Details Form */}
              <div className="p-4 rounded-2xl bg-white border border-[#E6DCce] space-y-3.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C25E26] block">
                  Customer & Timing Details
                </span>

                <div className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                      Your Full Name
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Tariq Mehmood"
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-[#D5C7B2] bg-[#FAF7F2] text-[#1E1B18] focus:ring-1 focus:ring-[#C25E26] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                      WhatsApp / Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0300 2632000"
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-[#D5C7B2] bg-[#FAF7F2] text-[#1E1B18] focus:ring-1 focus:ring-[#C25E26] outline-none"
                      />
                    </div>
                    {formError && <p className="text-[11px] text-red-500 mt-1">{formError}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-2.5 py-2 text-xs rounded-xl border border-[#D5C7B2] bg-[#FAF7F2] text-[#1E1B18] focus:ring-1 focus:ring-[#C25E26] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                        Pickup / Dine Time
                      </label>
                      <input
                        type="time"
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full px-2.5 py-2 text-xs rounded-xl border border-[#D5C7B2] bg-[#FAF7F2] text-[#1E1B18] focus:ring-1 focus:ring-[#C25E26] outline-none"
                      />
                    </div>
                  </div>

                  {orderType === 'dine-in' && (
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                        Estimated Number of Table Guests
                      </label>
                      <input
                        type="text"
                        value={tableGuests}
                        onChange={(e) => setTableGuests(e.target.value)}
                        placeholder="e.g. 6 persons (Family section)"
                        className="w-full px-3 py-2 text-xs rounded-xl border border-[#D5C7B2] bg-[#FAF7F2] text-[#1E1B18] focus:ring-1 focus:ring-[#C25E26] outline-none"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-[11px] font-semibold text-stone-600 mb-1">
                      Kitchen Notes or Special Requests (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      placeholder="e.g. Less oil in Karahi, pack extra mint raita..."
                      className="w-full px-3 py-2 text-xs rounded-xl border border-[#D5C7B2] bg-[#FAF7F2] text-[#1E1B18] focus:ring-1 focus:ring-[#C25E26] outline-none resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Kitchen note */}
              <div className="p-3 rounded-xl bg-[#FAF0E6] border border-[#E8D4C3] flex items-start gap-2.5 text-xs text-[#8C360E]">
                <Info className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#C25E26]" />
                <p className="text-[11px] leading-relaxed">
                  Your order details are formatted and sent directly to Mezbaan Restaurant's WhatsApp (<strong>0300 2632000</strong>). The manager will confirm preparation timing and final kitchen bill instantly.
                </p>
              </div>
            </div>
          )}

          {/* Footer Checkout Action */}
          {items.length > 0 && (
            <div className="p-5 bg-white border-t border-[#E6DCce] space-y-3">
              {totalEstimatedPrice > 0 && (
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-600">Estimated Food Total:</span>
                  <span className="text-base font-serif font-bold text-[#1E1B18]">
                    Rs. {totalEstimatedPrice.toLocaleString()}
                  </span>
                </div>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                id="cart-submit-whatsapp-btn"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-gradient-to-r from-emerald-800 to-emerald-700 hover:from-emerald-700 hover:to-emerald-600 active:scale-[0.98] text-white text-sm font-semibold shadow-md shadow-emerald-950/20 border border-emerald-500/40 transition-all duration-200"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <MessageCircle className="w-4 h-4 text-emerald-200" />
                <span>Send Order via WhatsApp ({totalItems} Items)</span>
              </button>

              <p className="text-center text-[10px] text-stone-500">
                Direct to Mezbaan Restaurant: 40D Depalpur Road, Okara
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
