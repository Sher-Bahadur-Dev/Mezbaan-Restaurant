import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, OrderCustomerDetails } from '../types';
import { BUSINESS_INFO } from '../data/restaurantData';

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addToCart: (item: Omit<CartItem, 'cartId'>) => void;
  updateQuantity: (cartId: string, delta: number) => void;
  removeItem: (cartId: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalEstimatedPrice: number;
  toastMessage: string | null;
  submitOrderToWhatsApp: (customerDetails: OrderCustomerDetails) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'mezbaan_order_cart_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen((prev) => !prev);

  const addToCart = (newItem: Omit<CartItem, 'cartId'>) => {
    const uniqueCartId = `${newItem.menuItemId}-${newItem.spiceLevel || ''}-${newItem.customCakeDetails?.flavour || ''}-${Date.now()}`;
    
    setItems((prev) => {
      // Check if exact same item with same customization exists
      const existingIdx = prev.findIndex(
        (i) =>
          i.menuItemId === newItem.menuItemId &&
          i.spiceLevel === newItem.spiceLevel &&
          i.specialInstructions === newItem.specialInstructions &&
          i.customCakeDetails?.flavour === newItem.customCakeDetails?.flavour &&
          i.customCakeDetails?.weight === newItem.customCakeDetails?.weight
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += newItem.quantity;
        return updated;
      }

      return [...prev, { ...newItem, cartId: uniqueCartId }];
    });

    showToast(`Added "${newItem.name}" to your order cart`);
  };

  const updateQuantity = (cartId: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.cartId === cartId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeItem = (cartId: string) => {
    setItems((prev) => prev.filter((i) => i.cartId !== cartId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((acc, curr) => acc + curr.quantity, 0);

  const totalEstimatedPrice = items.reduce(
    (acc, curr) => acc + (curr.unitPrice || 0) * curr.quantity,
    0
  );

  const submitOrderToWhatsApp = (customer: OrderCustomerDetails) => {
    if (items.length === 0) return;

    let orderTypeTitle = 'Takeaway Pickup';
    if (customer.orderType === 'dine-in') orderTypeTitle = 'Dine-In Pre-Order & Table Reservation';
    if (customer.orderType === 'cake-order') orderTypeTitle = 'Customized Cake Order';
    if (customer.orderType === 'event-catering') orderTypeTitle = 'Event Lawn Catering Order';

    let messageText = `*MEZBAAN RESTAURANT OKARA — NEW ONLINE ORDER*\n`;
    messageText += `*40D Depalpur Road, Okara*\n\n`;
    messageText += `📋 *Order Type:* ${orderTypeTitle}\n`;
    messageText += `👤 *Customer Name:* ${customer.fullName || 'Guest'}\n`;
    messageText += `📞 *Phone Number:* ${customer.phone}\n`;

    if (customer.preferredDate) {
      messageText += `📅 *Date:* ${customer.preferredDate}\n`;
    }
    if (customer.preferredTime) {
      messageText += `⏰ *Time:* ${customer.preferredTime}\n`;
    }
    if (customer.tableGuests) {
      messageText += `👥 *Guests / Party Size:* ${customer.tableGuests}\n`;
    }

    messageText += `\n━━━━━━━━━━━━━━━━━━━━\n`;
    messageText += `🛒 *ORDERED ITEMS (${totalItems}):*\n`;

    items.forEach((item, index) => {
      messageText += `\n${index + 1}. *${item.name}* × ${item.quantity}\n`;
      messageText += `   Category: ${item.categoryLabel}\n`;
      if (item.spiceLevel) {
        messageText += `   Spice: ${item.spiceLevel}\n`;
      }
      if (item.customCakeDetails?.flavour) {
        messageText += `   Cake Flavour: ${item.customCakeDetails.flavour} | Weight: ${item.customCakeDetails.weight || 'Standard'}\n`;
      }
      if (item.customCakeDetails?.inscription) {
        messageText += `   Cake Message: "${item.customCakeDetails.inscription}"\n`;
      }
      if (item.specialInstructions) {
        messageText += `   Special Note: ${item.specialInstructions}\n`;
      }
      if (item.unitPrice > 0) {
        messageText += `   Estimate: Rs. ${item.unitPrice * item.quantity}\n`;
      }
    });

    messageText += `\n━━━━━━━━━━━━━━━━━━━━\n`;
    if (totalEstimatedPrice > 0) {
      messageText += `💰 *Estimated Food Total:* Rs. ${totalEstimatedPrice.toLocaleString()} (Excluding GST/Delivery if applicable)\n`;
    } else {
      messageText += `💰 *Pricing:* Verified kitchen rates will be confirmed\n`;
    }

    if (customer.specialNotes) {
      messageText += `\n📝 *Additional Request:* ${customer.specialNotes}\n`;
    }

    messageText += `\n_Please confirm availability, preparation timing, and total bill. Thank you Mezbaan Team!_`;

    const encoded = encodeURIComponent(messageText);
    window.open(`https://wa.me/923002632000?text=${encoded}`, '_blank');
  };

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        totalItems,
        totalEstimatedPrice,
        toastMessage,
        submitOrderToWhatsApp,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
