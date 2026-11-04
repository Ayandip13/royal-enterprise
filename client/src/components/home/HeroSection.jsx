import React from 'react';
import { MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';
import { BotanicalBranch, AntiqueStar, EditorialStamp } from '../common/BotanicalDecor';

const HeroSection = ({ onOpenQuote }) => {
  const scrollToServices = () => {
    const el = document.getElementById('services-overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[95vh] lg:min-h-screen flex items-center bg-[#F5EFE5] dark:bg-[#102726] text-[#292323] dark:text-[#F5EFE5] overflow-hidden pt-28 sm:pt-32 pb-16 lg:py-24 transition-colors">
      {/* Delicate background botanical watermark (non-distracting, pure vector) */}
      <div className="absolute top-12 -left-12 pointer-events-none opacity-30 dark:opacity-10 text-[#193C3B] dark:text-[#D6B56F]">
        <BotanicalBranch className="w-72 h-72" rotate={45} />
      </div>
      <div className="absolute -bottom-16 right-4 pointer-events-none opacity-25 dark:opacity-10 text-[#D6B56F]">
        <BotanicalBranch className="w-80 h-80" rotate={-135} />
      </div>

      <div className="relative z-10 max-w-[1320px] w-full mx-auto px-5 sm:px-8">
        {/* ========================================================================= */}
        {/* DESKTOP & TABLET: ASYMMETRIC EDITORIAL SPLIT COMPOSITION */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ----------------------------------------------------------------------- */}
          {/* LEFT SIDE: EDITORIAL TYPOGRAPHY & GENEROUS NEGATIVE SPACE */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-7 sm:space-y-8 text-left">
            
            {/* Pre-Heading Badge / Editorial Stamp */}
            <div className="flex items-center space-x-3">
              <EditorialStamp text="Kolkata & Eastern India • Established 2014" />
            </div>

            {/* Oversized Display Headline (Instrument Serif) */}
            <div className="space-y-2">
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl xl:text-[84px] text-[#292323] dark:text-[#F5EFE5] font-normal tracking-tight leading-[1.04]">
                Event Services Fit For <br />
                <span className="font-display italic text-[#193C3B] dark:text-[#D6B56F] relative inline-block">
                  Royalty.
                  {/* Subtle antique gold underline stroke */}
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D6B56F] via-[#D66D59] to-transparent opacity-80" />
                </span>
              </h1>
            </div>

            {/* Existing Authentic Description */}
            <p className="text-base sm:text-lg lg:text-[19px] text-[#665C5C] dark:text-[#C8D6D5] font-light leading-relaxed max-w-xl font-sans">
              From heritage rajbari weddings to high-impact corporate galas, our own kitchen and on-ground crew run your entire celebration with calm precision.
            </p>

            {/* Action Group: Refined Terracotta Primary CTA & Direct Actions */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenQuote}
                className="px-8 py-3.5 text-xs uppercase tracking-[0.14em] font-semibold rounded-lg bg-[#D66D59] hover:bg-[#BA5643] text-white shadow-lg shadow-[#D66D59]/20 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Plan Your Event
              </button>

              <button
                type="button"
                onClick={scrollToServices}
                className="px-6 py-3.5 text-xs uppercase tracking-[0.14em] font-semibold rounded-lg bg-white/80 dark:bg-[#143130] hover:bg-white dark:hover:bg-[#193C3B] text-[#193C3B] dark:text-[#F5EFE5] border border-[#E8DFD3] dark:border-[#244C4A] transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D66D59]" />
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20an%20event.`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp px-5 py-3.5 text-xs uppercase tracking-[0.12em] font-semibold inline-flex items-center space-x-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Capability Anchors: Refined Horizontal Editorial Footnote */}
            <div className="pt-8 mt-4 border-t border-[#E8DFD3] dark:border-[#244C4A]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left font-sans">
                <div className="space-y-1 group">
                  <span className="text-[10.5px] uppercase tracking-[0.2em] text-[#D66D59] dark:text-[#D6B56F] font-semibold block">
                    01 / Event Management
                  </span>
                  <span className="font-normal text-xs text-[#292323] dark:text-[#C8D6D5] block leading-snug">
                    Corporate galas, media summits & stages
                  </span>
                </div>

                <div className="space-y-1 group">
                  <span className="text-[10.5px] uppercase tracking-[0.2em] text-[#D66D59] dark:text-[#D6B56F] font-semibold block">
                    02 / In-House Catering
                  </span>
                  <span className="font-normal text-xs text-[#292323] dark:text-[#C8D6D5] block leading-snug">
                    Authentic live feasts, pure veg & Bengali
                  </span>
                </div>

                <div className="space-y-1 group">
                  <span className="text-[10.5px] uppercase tracking-[0.2em] text-[#D66D59] dark:text-[#D6B56F] font-semibold block">
                    03 / Wedding Planning
                  </span>
                  <span className="font-normal text-xs text-[#292323] dark:text-[#C8D6D5] block leading-snug">
                    Rajbaris, styling, mandaps & decor
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* RIGHT SIDE: ARTISTIC OVAL & LAYERED EDITORIAL IMAGE COLLAGE */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-6 xl:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-[460px] sm:max-w-[500px]">
              
              {/* Botanical Branch Flourish Extending Beyond Frame */}
              <div className="absolute -top-10 -right-8 z-20 pointer-events-none text-[#193C3B] dark:text-[#D6B56F] animate-botanical-sway hidden sm:block">
                <BotanicalBranch className="w-32 h-32" rotate={20} />
              </div>

              {/* Decorative Antique Gold Fine Line Oval Ring */}
              <div className="absolute inset-0 -m-3 sm:-m-4 rounded-[160px] sm:rounded-[210px] border border-[#D6B56F]/40 dark:border-[#D6B56F]/30 pointer-events-none" />

              {/* Primary Large Wedding Photograph in Arched / Oval Luxury Frame */}
              <div className="relative z-10 w-full aspect-[4/5] rounded-[140px] sm:rounded-[190px] overflow-hidden shadow-2xl border-2 border-[#D6B56F]/50 bg-[#FAF5ED] dark:bg-[#143130]">
                <img
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80"
                  alt="Royal Enterprise Luxury Wedding Planning and Heritage Rajbari in Kolkata"
                  className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.04] hover:scale-105 transition-transform duration-1000 ease-out"
                />
                {/* Subtle warm vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#193C3B]/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-8 left-0 right-0 text-center px-6 text-white font-sans">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#D6B56F] font-semibold block mb-1">
                    Heritage Rajbari Celebrations
                  </span>
                  <span className="font-display text-lg sm:text-xl italic font-normal text-[#F5EFE5]">
                    Crafted with Vedic Grace & Quiet Grandeur
                  </span>
                </div>
              </div>

              {/* Secondary Overlapping Photograph: Production & Stagecraft */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 z-20 w-44 sm:w-56 aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl border-2 border-white dark:border-[#102726] bg-[#102726] transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/images/hero-stage.png"
                  alt="Royal Enterprise Stage Craft & Production"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 text-white text-[10px] font-sans font-medium flex items-center justify-between">
                  <span className="text-[#D6B56F] uppercase tracking-wider">In-House Staging</span>
                  <span className="text-white/80">Kolkata</span>
                </div>
              </div>

              {/* Floating Editorial Monogram Seal */}
              <div className="absolute -top-4 -left-4 sm:-left-6 z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#193C3B] text-[#F5EFE5] p-3 flex flex-col items-center justify-center text-center shadow-xl border-2 border-[#D6B56F] animate-botanical-drift">
                <AntiqueStar className="w-3.5 h-3.5 text-[#D6B56F] mb-1" />
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] font-semibold text-[#D6B56F] leading-tight font-sans">
                  In-House
                </span>
                <span className="text-[8px] uppercase tracking-wider text-white/90 font-light font-sans">
                  Standard
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
