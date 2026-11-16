import React, { useState } from 'react';
import { submitContactEnquiry } from '../services/api';
import { useNotification } from '../context/NotificationContext';
import { COMPANY_INFO } from '../data/mockData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { BotanicalBranch, AntiqueStar } from '../components/common/BotanicalDecor';
import { WhatsAppIcon, InstagramIcon, FacebookIcon, YouTubeIcon, LinkedInIcon } from '../components/common/SocialIcons';

const Contact = () => {
  const { showToast } = useNotification();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    eventType: 'Wedding Ceremony & Reception',
    eventDate: '',
    guestCount: '',
    notes: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.customerName.trim()) newErrors.customerName = 'Full name is required.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.email.trim()) newErrors.email = 'Email address is required.';
    if (!formData.eventDate) newErrors.eventDate = 'Event date (or target month) is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      showToast('Please fill in the required fields.', 'error');
      return;
    }

    setLoading(true);
    try {
      const subject = `Enquiry for ${formData.eventType} (${formData.eventDate})`;
      const message = `Event Type: ${formData.eventType}\nDate: ${formData.eventDate}\nApproximate Guests: ${
        formData.guestCount || 'Not specified'
      }\nDetails: ${formData.notes || 'Please contact me to discuss options.'}`;

      await submitContactEnquiry({
        customerName: formData.customerName,
        phone: formData.phone,
        email: formData.email,
        subject,
        message,
      });

      showToast(
        "Got it. We'll call you within 2 hours between 10:00 AM and 8:30 PM IST.",
        'success'
      );
      setSubmitted(true);
      setFormData({
        customerName: '',
        phone: '',
        email: '',
        eventType: 'Wedding Ceremony & Reception',
        eventDate: '',
        guestCount: '',
        notes: '',
      });
    } catch (err) {
      if (err.validationErrors && err.validationErrors.length > 0) {
        const backendErrors = {};
        err.validationErrors.forEach((e) => {
          backendErrors[e.field] = e.message;
        });
        setErrors(backendErrors);
        const detail = err.validationErrors.map((e) => e.message).join(' • ');
        showToast(detail, 'error');
      } else {
        showToast(err.message || 'Unable to submit enquiry. Please try again.', 'error');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#193C3B] text-[#F5EFE5] min-h-screen font-sans transition-colors relative overflow-hidden">
      
      {/* Decorative Botanical Flourish (Background Accents) */}
      <div className="absolute top-24 -left-16 pointer-events-none opacity-15 text-[#D6B56F]">
        <BotanicalBranch className="w-80 h-80" rotate={35} />
      </div>
      <div className="absolute -bottom-20 right-0 pointer-events-none opacity-10 text-[#D6B56F]">
        <BotanicalBranch className="w-96 h-96" rotate={-120} />
      </div>

      {/* Dramatic Contact Hero Banner */}
      <section className="pt-36 sm:pt-44 pb-12 sm:pb-16 border-b border-[#D6B56F]/20 relative z-10">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.24em] font-semibold text-[#D6B56F]">
              <AntiqueStar className="w-3.5 h-3.5 text-[#D6B56F]" />
              <span>Direct Desk • Kolkata & Eastern India</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-normal tracking-tight text-white leading-[1.06]">
              Get in touch with <br />
              <span className="italic font-display text-[#D6B56F]">
                Royal Enterprise.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#F5EFE5]/85 font-light leading-relaxed max-w-2xl">
              Tell us about your date and guest count. We'll check our central kitchen calendar and call you back directly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Split Contact Grid (Distinctive Editorial Architecture) */}
      <section className="py-12 sm:py-20 max-w-[1320px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Desk, Address, Phone, Hours, Google Maps */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct WhatsApp Callout Banner */}
            <div className="p-6 bg-[#102726]/80 border border-[#D6B56F]/30 rounded-2xl space-y-3.5 shadow-xl backdrop-blur-md">
              <div className="flex items-center space-x-2.5 text-white font-bold text-sm">
                <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                <span>Prefer a quick WhatsApp chat?</span>
              </div>
              <p className="text-xs text-[#F5EFE5]/80 leading-relaxed font-light">
                Send us a message directly with your event date and estimated guests. We respond during business hours within minutes.
              </p>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20an%20event.`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-4 text-xs font-semibold inline-flex items-center space-x-2 rounded-lg shadow-sm transition-all duration-200"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Message us on WhatsApp: {COMPANY_INFO.displayPhone}</span>
              </a>
            </div>

            {/* Address & Office Details */}
            <div className="bg-[#102726]/60 border border-white/15 rounded-2xl p-7 sm:p-8 space-y-6 shadow-xl backdrop-blur-md">
              <div className="space-y-1">
                <h3 className="font-display text-2xl sm:text-3xl text-white">
                  Royal Enterprise Office
                </h3>
                <span className="text-[11px] text-[#D6B56F] font-semibold uppercase tracking-[0.18em] block">
                  Events • Catering • Wedding Planning
                </span>
              </div>

              <div className="space-y-5 text-xs sm:text-[13px] text-[#F5EFE5]/85">
                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-4 h-4 text-[#D6B56F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-white">Address:</span>
                    <span className="leading-relaxed block text-[#F5EFE5]/75 font-light">{COMPANY_INFO.address}</span>
                    <a
                      href={COMPANY_INFO.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#D6B56F] hover:text-white font-semibold hover:underline inline-flex items-center space-x-1 mt-1 text-xs transition-colors"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Phone className="w-4 h-4 text-[#D6B56F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-white">Phone / WhatsApp:</span>
                    <a
                      href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-[#D6B56F] hover:text-white font-semibold hover:underline block transition-colors"
                    >
                      {COMPANY_INFO.displayPhone}
                    </a>
                    <a
                      href={`tel:${COMPANY_INFO.secondaryPhone.replace(/\s+/g, '')}`}
                      className="text-xs text-[#F5EFE5]/75 hover:text-[#D6B56F] block font-light mt-0.5"
                    >
                      Alternate: {COMPANY_INFO.secondaryPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Mail className="w-4 h-4 text-[#D6B56F] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-semibold block text-white">Email Enquiries:</span>
                    <div className="space-y-0.5">
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-[#D6B56F] hover:text-white font-semibold hover:underline block transition-colors"
                      >
                        {COMPANY_INFO.email}
                      </a>
                      {COMPANY_INFO.supportEmail && (
                        <a
                          href={`mailto:${COMPANY_INFO.supportEmail}`}
                          className="text-xs text-[#F5EFE5]/75 hover:text-[#D6B56F] block transition-colors"
                        >
                          Support: {COMPANY_INFO.supportEmail}
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Clock className="w-4 h-4 text-[#D6B56F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-white">Working Hours:</span>
                    <span className="text-[#F5EFE5]/75 block font-light">{COMPANY_INFO.officeHours}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels with Authentic Brand Icons */}
              <div className="pt-4 border-t border-white/15">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D6B56F] block mb-2.5">
                  Social Channels
                </span>
                <div className="flex items-center space-x-2.5">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20an%20event.`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-white/5 hover:bg-[#25D366] rounded-lg text-white transition-all duration-200"
                    aria-label="WhatsApp"
                    title={`WhatsApp: ${COMPANY_INFO.displayPhone}`}
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={COMPANY_INFO.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-white/5 hover:bg-[#E1306C] rounded-lg text-white transition-all duration-200"
                    aria-label="Instagram"
                    title="Instagram: [Your_Instagram_ID]"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={COMPANY_INFO.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-white/5 hover:bg-[#1877F2] rounded-lg text-white transition-all duration-200"
                    aria-label="Facebook"
                    title="Facebook: [Your_Facebook_ID]"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={COMPANY_INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-white/5 hover:bg-[#D6B56F] rounded-lg text-white hover:text-[#102726] transition-all duration-200"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={COMPANY_INFO.socials.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 bg-white/5 hover:bg-[#FF0000] rounded-lg text-white transition-all duration-200"
                    aria-label="YouTube"
                    title="YouTube"
                  >
                    <YouTubeIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Distinctive Editorial Form (Avoiding generic dashboard cards) */}
          <div className="lg:col-span-7">
            <div className="bg-[#102726]/80 border border-[#D6B56F]/30 rounded-2xl p-8 sm:p-12 shadow-2xl backdrop-blur-md">
              <div className="border-b border-white/15 pb-5 mb-8">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D6B56F] block mb-1">
                  Enquiry Form
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-normal text-white">
                  Check dates and ask questions
                </h2>
                <p className="text-xs sm:text-sm text-[#F5EFE5]/75 mt-1 font-light">
                  We ask only for what we need to verify dates and catering requirements.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-950/80 border border-emerald-400 rounded-full flex items-center justify-center mx-auto text-emerald-300">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-3xl font-normal text-white">
                    Got it. Your enquiry is received.
                  </h3>
                  <p className="text-sm text-[#F5EFE5]/85 max-w-md mx-auto leading-relaxed font-light">
                    We will call you within <strong className="font-semibold text-white">2 hours</strong> between <strong className="font-semibold text-white">10:00 AM and 8:30 PM IST</strong> to confirm details.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 text-xs uppercase tracking-wider font-semibold rounded-lg border border-[#D6B56F] text-[#D6B56F] hover:bg-[#D6B56F]/10 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#D6B56F] block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        placeholder="e.g. [Customer Name]"
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#D6B56F]"
                      />
                      {errors.customerName && (
                        <span className="text-[11px] text-rose-300 block">{errors.customerName}</span>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#D6B56F] block">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98310 11474"
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#D6B56F]"
                      />
                      {errors.phone && (
                        <span className="text-[11px] text-rose-300 block">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#D6B56F] block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#D6B56F]"
                      />
                      {errors.email && (
                        <span className="text-[11px] text-rose-300 block">{errors.email}</span>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#D6B56F] block">
                        Event Type
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full bg-[#143130] border border-white/20 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D6B56F]"
                      >
                        <option value="Wedding Ceremony & Reception">Wedding Ceremony & Reception</option>
                        <option value="In-House Catering Banquet">In-House Catering Banquet</option>
                        <option value="Corporate Conference & Summit">Corporate Conference & Summit</option>
                        <option value="Milestone Birthday / Anniversary">Milestone Birthday / Anniversary</option>
                        <option value="Stage Design & Audio Setup">Stage Design & Audio Setup</option>
                        <option value="General Question / Other">General Question / Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#D6B56F] block">
                        Event Date (or target month) *
                      </label>
                      <input
                        type="text"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        placeholder="e.g. 15 Dec 2026 or Jan 2027"
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#D6B56F]"
                      />
                      {errors.eventDate && (
                        <span className="text-[11px] text-rose-300 block">{errors.eventDate}</span>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#D6B56F] block">
                        Approximate Guest Count
                      </label>
                      <input
                        type="text"
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        placeholder="e.g. 250 or 800"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#D6B56F]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#D6B56F] block">
                      Notes or specific requests
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Tell us about the venue, dietary preferences (e.g. pure-veg Marwari or Bengali Biye Bari), or budget..."
                      rows={4}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#D6B56F]"
                    />
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <span className="text-xs text-white/60 font-light">
                      We respect your privacy. No promotional spam calls.
                    </span>
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-8 py-3.5 text-xs uppercase tracking-[0.14em] font-semibold rounded-lg bg-[#D66D59] hover:bg-[#BA5643] text-white shadow-xl inline-flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{loading ? 'Submitting...' : 'Send enquiry'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
