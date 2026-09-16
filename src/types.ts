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
  image: string;
  isPopular?: boolean;
  tags?: string[];
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
}

export interface EventType {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
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
