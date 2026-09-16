import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { WhyVisit } from './components/WhyVisit';
import { MenuSection } from './components/MenuSection';
import { CakesSection } from './components/CakesSection';
import { EventLawnSection } from './components/EventLawnSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { LocationSection } from './components/LocationSection';
import { ContactFormSection } from './components/ContactFormSection';
import { SocialSection } from './components/SocialSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { OwnerDemoBanner } from './components/OwnerDemoBanner';
import { CartDrawer } from './components/CartDrawer';
import { CartProvider } from './context/CartContext';
import { InquiryType } from './types';

function MainAppContent() {
  const [selectedInquiryType, setSelectedInquiryType] = useState<InquiryType>('Restaurant Reservation');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContactWithType = (inquiryType: string) => {
    setSelectedInquiryType(inquiryType as InquiryType);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#24211E] selection:bg-[#C25E26]/20 selection:text-[#8C360E]">
      {/* Presentation banner for restaurant management demo */}
      <OwnerDemoBanner />

      {/* Sticky Navbar with Cart Badge */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onScrollTo={scrollToSection} />

        {/* 2. Restaurant Introduction */}
        <Introduction
          onExploreMenu={() => scrollToSection('menu')}
          onExploreEvents={() => scrollToSection('events')}
        />

        {/* 3. Why Visit Mezbaan (6 feature cards) */}
        <WhyVisit />

        {/* 4. Menu & Online Ordering Section */}
        <MenuSection />

        {/* 5. Customized Cakes Section */}
        <CakesSection onScrollToContact={handleScrollToContactWithType} />

        {/* 6. Event Lawn Section */}
        <EventLawnSection
          onPreloadInquiry={() => handleScrollToContactWithType('Event Booking')}
        />

        {/* 7. Responsive Gallery with Lightbox */}
        <GallerySection />

        {/* 8. About Section */}
        <AboutSection />

        {/* 9. Location & Interactive Map Section */}
        <LocationSection />

        {/* 10. Contact & Booking Form */}
        <ContactFormSection initialInquiryType={selectedInquiryType} />

        {/* 11. Social Media Presence */}
        <SocialSection />
      </main>

      {/* Footer */}
      <Footer onScrollTo={scrollToSection} />

      {/* Floating Call, WhatsApp, Cart & Back-To-Top */}
      <FloatingActions />

      {/* Slide-Over Cart Drawer & WhatsApp Checkout */}
      <CartDrawer />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainAppContent />
    </CartProvider>
  );
}
