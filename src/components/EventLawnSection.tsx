import React, { useState } from 'react';
import { Trees, Calendar, Users, MessageCircle, ArrowRight, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { EVENT_TYPES, BUSINESS_INFO } from '../data/restaurantData';

interface EventLawnSectionProps {
  onPreloadInquiry: (data: { eventType: string; date?: string; guests?: string }) => void;
}

export const EventLawnSection: React.FC<EventLawnSectionProps> = ({ onPreloadInquiry }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedEventType, setSelectedEventType] = useState('Weddings & Mehendi');
  const [eventDate, setEventDate] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsappSend = () => {
    const text = `Hello Mezbaan Restaurant Okara, I would like to ask about Event Lawn booking:
- Event: ${selectedEventType}
- Name: ${name || 'Prospective Guest'}
- Phone: ${phone || 'Available upon inquiry'}
- Preferred Date: ${eventDate || 'To be discussed'}
- Approximate Guests: ${guestCount || 'To be discussed'}
- Message: ${message || 'Please provide details on lawn availability and catering arrangements.'}`;

    window.open(`https://wa.me/923002632000?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="events" className="py-16 md:py-24 bg-white border-b border-[#E6DCce]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0E6] text-xs font-bold text-[#C25E26] uppercase tracking-wider">
            <Trees className="w-3.5 h-3.5" />
            <span>Outdoor Hospitality</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1B18] tracking-tight">
            Celebrate Your Special Moments
          </h2>

          <p className="text-base sm:text-lg text-[#524942]">
            Along with our dining halls, Mezbaan offers a dedicated <strong>Event Lawn</strong> in Okara for open-air gatherings, family functions, ceremonies, and private celebrations.
          </p>
        </div>

        {/* 5 Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-16">
          {EVENT_TYPES.map((evt) => (
            <div
              key={evt.id}
              className="group bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#E6DCce] hover:border-[#C25E26]/50 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white text-base font-serif font-bold">
                    {evt.title}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-[#524942] leading-relaxed">
                    {evt.description}
                  </p>

                  <div className="space-y-2 pt-1 border-t border-[#E6DCce]/60">
                    {evt.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C25E26] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 mt-2">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedEventType(evt.title);
                    const formElement = document.getElementById('event-inquiry-box');
                    if (formElement) {
                      formElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-[#FAF0E6] text-[#24211E] hover:text-[#C25E26] text-xs font-semibold border border-[#D5C7B2] hover:border-[#C25E26] transition-all flex items-center justify-center gap-2"
                >
                  <span>Select For Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Event Inquiry & Booking Box */}
        <div
          id="event-inquiry-box"
          className="rounded-3xl bg-[#FAF7F2] border border-[#E6DCce] p-6 sm:p-10 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Context */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF0E6] text-xs font-semibold text-[#8C360E]">
                <Sparkles className="w-3.5 h-3.5 text-[#C25E26]" />
                Event Lawn Consultation
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1B18]">
                Plan Your Event with Mezbaan
              </h3>

              <p className="text-sm text-[#524942] leading-relaxed">
                Every celebration is unique. Discuss lawn availability, customized banquet menus (Pakistani, Chinese, Continental), and specialty celebration cakes with our management.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-[#3E3630]">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#C25E26] border border-[#E6DCce]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Direct consultation with restaurant manager</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#3E3630]">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#C25E26] border border-[#E6DCce]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Flexible catering packages customized to your guest preferences</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#3E3630]">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#C25E26] border border-[#E6DCce]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Located conveniently on 40D Depalpur Road, Okara</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={`https://wa.me/923002632000?text=${encodeURIComponent(
                    'Hello Mezbaan Restaurant Okara, I would like to ask about Event Lawn availability and booking packages.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-100/70 hover:bg-emerald-100 px-4 py-2.5 rounded-lg border border-emerald-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-700" />
                  <span>Instant Lawn Booking Inquiry on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Booking / Inquiry Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#E6DCce] shadow-xs">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-[#1E1B18]">Inquiry Received (Demo)</h4>
                  <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                    Thank you! Your event inquiry for <strong>{selectedEventType}</strong> has been noted. In a live system, this sends to Mezbaan management.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      type="button"
                      onClick={handleWhatsappSend}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send to Mezbaan WhatsApp Now</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 rounded-lg bg-stone-100 text-stone-700 text-xs font-medium hover:bg-stone-200"
                    >
                      Fill Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h4 className="text-lg font-serif font-bold text-[#1E1B18] border-b border-[#E6DCce] pb-2">
                    Event Booking Inquiry
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="evt-name" className="block text-xs font-semibold text-[#3E3630] mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="evt-name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Tariq Mehmood"
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#D5C7B2] bg-white text-[#24211E] focus:ring-2 focus:ring-[#C25E26]/40 focus:border-[#C25E26] outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="evt-phone" className="block text-xs font-semibold text-[#3E3630] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="evt-phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0300 XXXXXXX"
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#D5C7B2] bg-white text-[#24211E] focus:ring-2 focus:ring-[#C25E26]/40 focus:border-[#C25E26] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="evt-type" className="block text-xs font-semibold text-[#3E3630] mb-1">
                        Event Type *
                      </label>
                      <select
                        id="evt-type"
                        value={selectedEventType}
                        onChange={(e) => setSelectedEventType(e.target.value)}
                        className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-[#D5C7B2] bg-white text-[#24211E] focus:ring-2 focus:ring-[#C25E26]/40 focus:border-[#C25E26] outline-none"
                      >
                        <option value="Weddings & Mehendi">Weddings & Mehendi</option>
                        <option value="Birthday Celebrations">Birthday Celebrations</option>
                        <option value="Family Events & Dawat">Family Events & Dawat</option>
                        <option value="Private Gatherings">Private Gatherings</option>
                        <option value="Milestone Celebrations">Milestone Celebrations</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="evt-date" className="block text-xs font-semibold text-[#3E3630] mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="evt-date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-[#D5C7B2] bg-white text-[#24211E] focus:ring-2 focus:ring-[#C25E26]/40 focus:border-[#C25E26] outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="evt-guests" className="block text-xs font-semibold text-[#3E3630] mb-1">
                        Estimated Guests
                      </label>
                      <input
                        type="text"
                        id="evt-guests"
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        placeholder="e.g. 50 - 150"
                        className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-[#D5C7B2] bg-white text-[#24211E] focus:ring-2 focus:ring-[#C25E26]/40 focus:border-[#C25E26] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="evt-message" className="block text-xs font-semibold text-[#3E3630] mb-1">
                      Message / Special Requests
                    </label>
                    <textarea
                      id="evt-message"
                      rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share menu preferences (Pakistani, Chinese, Continental), stage or cake requirements..."
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#D5C7B2] bg-white text-[#24211E] focus:ring-2 focus:ring-[#C25E26]/40 focus:border-[#C25E26] outline-none resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      id="event-submit-btn"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-[#C25E26] hover:bg-[#A34816] text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Ask About Event Booking</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsappSend}
                      className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Direct WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
