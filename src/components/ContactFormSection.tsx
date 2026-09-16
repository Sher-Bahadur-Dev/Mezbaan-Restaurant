import React, { useState } from 'react';
import { Send, MessageCircle, Phone, CheckCircle2, Calendar, User, Mail, HelpCircle, Sparkles } from 'lucide-react';
import { InquiryType, InquiryFormData } from '../types';
import { BUSINESS_INFO } from '../data/restaurantData';

interface ContactFormSectionProps {
  initialInquiryType?: InquiryType;
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  initialInquiryType = 'Restaurant Reservation',
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    inquiryType: initialInquiryType,
    preferredDate: '',
    guests: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please provide your name.';
    if (!formData.phone.trim()) errs.phone = 'Please provide your phone number.';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `*New Website Inquiry for Mezbaan Restaurant Okara*
• *Type:* ${formData.inquiryType}
• *Name:* ${formData.fullName || 'Prospective Guest'}
• *Phone:* ${formData.phone || 'Provided via inquiry'}
• *Email:* ${formData.email || 'N/A'}
• *Date:* ${formData.preferredDate || 'Flexible'}
• *Guests:* ${formData.guests || 'N/A'}
• *Message:* ${formData.message || 'Please contact me with details.'}`;

    window.open(`https://wa.me/923002632000?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-[#E6DCce]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0E6] text-xs font-bold text-[#C25E26] uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Inquire</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E1B18] tracking-tight">
            Contact & Booking Inquiry
          </h2>

          <p className="text-base sm:text-lg text-[#524942]">
            Reserve a dining table, inquire about customized cakes, or discuss event lawn availability directly with the Mezbaan team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#FAF7F2] rounded-3xl border border-[#E6DCce] p-6 sm:p-10 shadow-xs">
            {submitted ? (
              <div className="text-center py-10 space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-bold text-[#1E1B18]">
                    Inquiry Submitted Successfully!
                  </h3>
                  <p className="text-sm text-[#524942] max-w-md mx-auto">
                    Thank you for reaching out to <strong>Mezbaan Restaurant Okara</strong>. In this demo presentation, your inquiry for <em>{formData.inquiryType}</em> has been registered.
                  </p>
                </div>

                {/* Direct WhatsApp Forward Button */}
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0F5132] to-[#146C43] hover:from-[#146C43] hover:to-[#0F5132] text-white text-sm font-semibold shadow-[0_8px_25px_rgba(16,185,129,0.35)] border border-emerald-500/40 transition-all transform hover:-translate-y-0.5 active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-200" />
                    <span>Send this Inquiry to Mezbaan's WhatsApp Now</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        inquiryType: 'Restaurant Reservation',
                        preferredDate: '',
                        guests: '',
                        message: '',
                      });
                    }}
                    className="px-5 py-3.5 rounded-xl bg-white hover:bg-stone-100 text-[#24211E] text-sm font-medium border border-[#D5C7B2] shadow-2xs transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="contact-fullname" className="block text-xs font-semibold text-[#3E3630] mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="contact-fullname"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Muhammad Aslam"
                        className={`w-full px-4 py-2.5 rounded-xl border ${
                          errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-[#D5C7B2]'
                        } bg-white text-sm text-[#24211E] focus:ring-2 focus:ring-[#C25E26]/40 focus:border-[#C25E26] outline-none transition-all`}
                      />
                    </div>
                    {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-[#3E3630] mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0300 2632000"
                      className={`w-full px-4 py-2.5 rounded-xl border ${
                        errors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#D5C7B2]'
                      } bg-white text-sm text-[#24211E] focus:ring-2 focus:ring-[#C25E26]/40 focus:border-[#C25E26] outline-none transition-all`}
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-[#3E3630] mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D5C7B2] bg-white text-sm text-[#24211E] focus:ring-2 focus:ring-[#C25E26]/40 focus:border-[#C25E26] outline-none transition-all"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label htmlFor="contact-type" className="block text-xs font-semibold text-[#3E3630] mb-1.5">
                      Inquiry Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="contact-type"
                      value={formData.inquiryType}
                      onChange={(e) =>
                        setFormData({ ...formData, inquiryType: e.target.value as InquiryType })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D5C7B2] bg-white text-sm text-[#24211E] focus:ring-2 focus:ring-[#C25E26]/40 focus:border-[#C25E26] outline-none transition-all"
                    >
                      <option value="Restaurant Reservation">Restaurant Reservation</option>
                      <option value="Cake Inquiry">Customized Cake Inquiry</option>
                      <option value="Event Booking">Event Lawn Booking</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Preferred Date */}
                  <div>
                    <label htmlFor="contact-date" className="block text-xs font-semibold text-[#3E3630] mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="contact-date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D5C7B2] bg-white text-sm text-[#24211E] focus:ring-2 focus:ring-[#C25E26]/40 focus:border-[#C25E26] outline-none transition-all"
                    />
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label htmlFor="contact-guests" className="block text-xs font-semibold text-[#3E3630] mb-1.5">
                      Number of Guests (Optional)
                    </label>
                    <input
                      type="text"
                      id="contact-guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      placeholder="e.g. 4 people / 40 guests"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D5C7B2] bg-white text-sm text-[#24211E] focus:ring-2 focus:ring-[#C25E26]/40 focus:border-[#C25E26] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[#3E3630] mb-1.5">
                    Message / Details
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you are planning (e.g. Birthday cake theme, family dinner timing, event lawn setup preferences)..."
                    className="w-full px-4 py-3 rounded-xl border border-[#D5C7B2] bg-white text-sm text-[#24211E] focus:ring-2 focus:ring-[#C25E26]/40 focus:border-[#C25E26] outline-none resize-none transition-all"
                  ></textarea>
                </div>

                {/* Submit buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-between">
                  <button
                    type="submit"
                    id="contact-send-inquiry-btn"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#F26522] to-[#D85316] hover:from-[#D85316] hover:to-[#B8420E] text-white text-sm font-semibold shadow-[0_6px_22px_rgba(242,101,34,0.35)] hover:shadow-[0_8px_28px_rgba(242,101,34,0.45)] transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-amber-100" />
                    <span>Submit Inquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0F5132] to-[#146C43] hover:from-[#146C43] hover:to-[#0F5132] text-white text-sm font-semibold shadow-[0_6px_20px_rgba(16,185,129,0.25)] hover:shadow-[0_8px_25px_rgba(16,185,129,0.35)] border border-emerald-500/30 transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-200" />
                    <span>Send via WhatsApp Directly</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
