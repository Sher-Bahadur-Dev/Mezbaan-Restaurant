export type MenuCategory = 
  | 'all'
  | 'desi-pakistani'
  | 'chinese'
  | 'continental'
  | 'cakes'
  | 'event-packages';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  categoryLabel: string;
  description: string;
  pricePlaceholder: string;
  estimatedPrice?: number; // Optional numerical price for cart calculation demo
  image: string;
  isPopular?: boolean;
  spiceLevel?: 'Mild' | 'Medium' | 'Desi Spicy' | 'Non-Spicy';
  tags?: string[];
  portion?: string;
}

export interface CartItem {
  cartId: string;
  menuItemId: string;
  name: string;
  categoryLabel: string;
  priceText: string;
  unitPrice: number;
  quantity: number;
  image: string;
  spiceLevel?: string;
  specialInstructions?: string;
  customCakeDetails?: {
    occasion?: string;
    flavour?: string;
    weight?: string;
    inscription?: string;
  };
}

export type OrderType = 'takeaway' | 'dine-in' | 'cake-order' | 'event-catering';

export interface OrderCustomerDetails {
  fullName: string;
  phone: string;
  orderType: OrderType;
  preferredDate?: string;
  preferredTime?: string;
  tableGuests?: string;
  specialNotes?: string;
}

export type CakeCategory = 
  | 'all'
  | 'birthday'
  | 'wedding'
  | 'anniversary'
  | 'celebration'
  | 'custom';

export interface CakeItem {
  id: string;
  title: string;
  category: CakeCategory;
  categoryLabel: string;
  description: string;
  image: string;
  suitableFor: string;
  flavours?: string[];
  priceEstimate?: string;
  defaultWeight?: string;
}

export interface EventType {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  recommendedGuests?: string;
}

export type GalleryCategory = 'all' | 'food' | 'restaurant' | 'cakes' | 'events' | 'interior';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  image: string;
  description: string;
}

export type InquiryType = 
  | 'Restaurant Reservation'
  | 'Cake Inquiry'
  | 'Event Booking'
  | 'General Question';

export interface InquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  inquiryType: InquiryType;
  preferredDate: string;
  guests: string;
  message: string;
}

