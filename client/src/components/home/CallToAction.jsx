import React, { useState } from 'react';
import { Phone, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';
import { useNotification } from '../../context/NotificationContext';
import { submitContactEnquiry } from '../../services/api';
import {
  BotanicalBranch,
  AntiqueStar,
  FloatingPetal,
  MiniatureButterfly,
  GoldParticleCluster,
} from '../common/BotanicalDecor';

const CallToAction = ({ onOpenQuote }) => {
  const { showToast } = useNotification();
  const [phoneInput, setPhoneInput] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleQuickCallback = async (e) => {
    e.preventDefault();
    if (!phoneInput.trim() || phoneInput.length < 8) {
      showToast('Please enter a valid phone number.', 'error');
      return;
    }

    setSubmitting(true);
    try {
      await submitContactEnquiry({
        customerName: 'Quick Callback Request',
        phone: phoneInput,
        email: 'contact@royalenterprise.com',
        subject: 'Quick Callback Request from Website Banner',
        message: 'Client requested an immediate consultation callback via homepage banner.',
      });
      setSubmitted(true);
      showToast(
        "Got it. We'll call you within 2 hours between 10:00 AM and 8:30 PM IST.",
        'success'
      );
      setPhoneInput('');
    } catch (err) {
      showToast('Unable to request callback. Opening quote form...', 'info');
      onOpenQuote();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#193C3B] text-[#F5EFE5] relative overflow-hidden transition-colors border-t border-[#D6B56F]/20">
      {/* Decorative Botanical Flourish */}
      <div className="absolute -top-16 -right-16 pointer-events-none opacity-15 text-[#D6B56F]">
        <BotanicalBranch className="w-80 h-80" rotate={-30} />
      </div>
      <div className="absolute -bottom-16 -left-16 pointer-events-none opacity-10 text-[#D6B56F]">
        <BotanicalBranch className="w-80 h-80" rotate={120} />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold Editorial Title & Copy */}
          <div className="lg:col-span-7 space-y-6 text-left font-sans">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.24em] font-semibold text-[#D6B56F]">
              <AntiqueStar className="w-3.5 h-3.5 text-[#D6B56F]" />
              <span>Direct Consultation • In-House Team</span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.04]">
              Let's Talk. <br />
              <span className="italic font-display text-[#D6B56F]">
                Your Celebration Awaits.
              </span>
              <span className="inline-block ml-3 align-middle pointer-events-none">
                <FloatingPetal className="w-7 h-7 text-[#D6B56F]" rotate={24} variant="single" />
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#F5EFE5]/85 font-light leading-relaxed max-w-xl">
              Dates during the Kolkata wedding seasons (November–February) fill up quickly. Drop your phone number below for an immediate callback, or speak directly with our planning directors.
            </p>

            {/* Callback Form (Logic Preserved 100%) */}
            {submitted ? (
              <div className="p-5 bg-emerald-950/80 border border-emerald-400/40 rounded-xl text-emerald-200 text-sm font-medium flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Got it. Our central kitchen & planning desk will call you within 2 hours.</span>
              </div>
            ) : (
              <form
                onSubmit={handleQuickCallback}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 max-w-md"
              >
                <div className="flex-1 flex items-center bg-white/10 border border-white/20 focus-within:border-[#D6B56F] rounded-lg px-4 py-3 text-white transition-colors">
                  <span className="text-xs font-semibold text-[#D6B56F] mr-2">🇮🇳 +91</span>
                  <input
                    type="tel"
                    placeholder="Enter contact number"
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    className="w-full text-sm focus:outline-none bg-transparent font-medium placeholder:text-white/40 text-white"
                    maxLength={15}
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-7 py-3 text-xs uppercase tracking-[0.14em] font-semibold whitespace-nowrap rounded-lg bg-[#D66D59] hover:bg-[#BA5643] text-white shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  {submitting ? 'Connecting...' : 'Request Callback'}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Instant Proposal Trigger */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-center font-sans relative">
            {/* Miniature Butterfly resting on card border */}
            <div className="absolute -top-3.5 right-8 z-20 pointer-events-none text-[#D6B56F] hidden sm:block">
              <MiniatureButterfly className="w-6 h-6 text-[#D6B56F]" rotate={-10} />
            </div>

            <div className="bg-[#102726]/80 border border-[#D6B56F]/25 rounded-2xl p-7 sm:p-9 space-y-4 backdrop-blur-md shadow-2xl relative">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D6B56F] block">
                Direct Desk Channels
              </span>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20an%20event.`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp py-3.5 px-6 text-xs uppercase tracking-wider font-semibold flex items-center justify-center space-x-2 shadow-md w-full rounded-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Chat</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 py-3.5 px-6 text-xs uppercase tracking-wider font-semibold rounded-lg flex items-center justify-center space-x-2 transition-colors w-full"
              >
                <Phone className="w-4 h-4 text-[#D6B56F]" />
                <span>Call: {COMPANY_INFO.displayPhone}</span>
              </a>

              <button
                type="button"
                onClick={onOpenQuote}
                className="bg-[#D66D59] hover:bg-[#BA5643] text-white py-3.5 px-6 text-xs uppercase tracking-[0.14em] font-semibold rounded-lg flex items-center justify-center space-x-2 shadow-md w-full transition-all"
              >
                <span>Request Custom Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;
