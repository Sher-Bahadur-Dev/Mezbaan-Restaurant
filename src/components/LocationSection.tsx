import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, ExternalLink, Navigation, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  // Google Maps embed search URL for 40D Depalpur Road, Okara, Pakistan
  const mapEmbedUrl =
    'https://maps.google.com/maps?q=40D+Depalpur+Road,+Okara,+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed';

  return (
    <section id="location" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E6DCce]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0E6] text-xs font-bold text-[#C25E26] uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Find & Reach Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1B18] tracking-tight">
            Visit Mezbaan Restaurant
          </h2>

          <p className="text-base sm:text-lg text-[#524942]">
            Conveniently situated along Depalpur Road in Okara. Join us for dine-in meals, pick up your takeaway, or visit to discuss customized cakes and event bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Business Info Details Card */}
          <div className="lg:col-span-5 bg-white p-7 sm:p-9 rounded-2xl border border-[#E6DCce] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="border-b border-[#F3ECE1] pb-5">
                <span className="text-xs uppercase tracking-wider font-bold text-[#C25E26]">
                  Restaurant Address
                </span>
                <div className="flex items-start gap-3 mt-2">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF0E6] flex items-center justify-center flex-shrink-0 text-[#C25E26]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#1E1B18]">
                      {BUSINESS_INFO.address}
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Main Depalpur Road • Okara, Punjab
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="border-b border-[#F3ECE1] pb-5">
                <span className="text-xs uppercase tracking-wider font-bold text-[#C25E26]">
                  Phone Contact
                </span>
                <div className="flex items-start gap-3 mt-2">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF0E6] flex items-center justify-center flex-shrink-0 text-[#C25E26]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="text-lg font-serif font-bold text-[#1E1B18] hover:text-[#C25E26] transition-colors"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Call for dining reservations, orders & inquiries
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="border-b border-[#F3ECE1] pb-5">
                <span className="text-xs uppercase tracking-wider font-bold text-[#C25E26]">
                  Official Email
                </span>
                <div className="flex items-start gap-3 mt-2">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF0E6] flex items-center justify-center flex-shrink-0 text-[#C25E26]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-sm font-semibold text-[#1E1B18] hover:text-[#C25E26] transition-colors break-all"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Send event RFPs and official communications
                    </p>
                  </div>
                </div>
              </div>

              {/* Availability Services */}
              <div className="pt-1">
                <span className="text-xs uppercase tracking-wider font-bold text-stone-500 block mb-2">
                  Available Facilities
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2.5 py-1 rounded-md bg-[#FAF7F2] border border-[#E6DCce] text-stone-700 font-medium">
                    Dine-In
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-[#FAF7F2] border border-[#E6DCce] text-stone-700 font-medium">
                    Takeaway
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-[#FAF7F2] border border-[#E6DCce] text-stone-700 font-medium">
                    Customized Cakes
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-[#FAF7F2] border border-[#E6DCce] text-stone-700 font-medium">
                    Event Lawn
                  </span>
                </div>
              </div>
            </div>

            {/* Three Action Buttons as required: Get Directions, Call Now, WhatsApp */}
            <div className="pt-4 space-y-3">
              <a
                href={BUSINESS_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="location-directions-btn"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#C25E26] hover:bg-[#A34816] text-white text-sm font-semibold shadow-xs transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions (Google Maps)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-75" />
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  id="location-call-btn"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#24211E] hover:bg-black text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C25E26]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="location-whatsapp-btn"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Container */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E6DCce] overflow-hidden shadow-xs flex flex-col">
            <div className="p-4 bg-[#FAF7F2] border-b border-[#E6DCce] flex items-center justify-between text-xs text-stone-600">
              <span className="font-semibold text-[#1E1B18] flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#C25E26]" />
                Google Maps Navigation • Okara
              </span>
              <a
                href={BUSINESS_INFO.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C25E26] hover:underline font-medium flex items-center gap-1"
              >
                Open in Full Map
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="relative w-full flex-1 min-h-[380px] bg-stone-100">
              <iframe
                title="Mezbaan Restaurant Okara Map Location"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="p-4 bg-white border-t border-[#E6DCce] text-xs text-stone-500 flex items-center justify-between">
              <span>Coordinates: 40D Depalpur Road, Okara, Punjab, Pakistan</span>
              <span className="text-emerald-700 font-medium">Ready for Dine-In & Takeaway</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
