import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';
import {
  BotanicalBranch,
  AntiqueStar,
  EditorialStamp,
  FloatingPetal,
  MiniatureButterfly,
  GoldParticleCluster,
  FloralLineArt,
} from '../common/BotanicalDecor';

const HeroSection = ({ onOpenQuote }) => {
  const scrollToServices = () => {
    const el = document.getElementById('services-overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center bg-[#F5EFE5] dark:bg-[#102726] text-[#292323] dark:text-[#F5EFE5] overflow-hidden pt-24 xs:pt-28 sm:pt-32 lg:pt-40 xl:pt-44 pb-14 sm:pb-16 lg:pb-24 transition-colors">
      {/* Background botanical vector watermarks - Desktop only to keep mobile clean & legible */}
      <div className="hidden lg:block absolute top-24 -left-14 pointer-events-none opacity-20 dark:opacity-10 text-[#193C3B] dark:text-[#D6B56F]">
        <BotanicalBranch className="w-64 h-64" rotate={40} />
      </div>
      <div className="hidden sm:block absolute -bottom-16 right-4 pointer-events-none opacity-20 dark:opacity-10 text-[#D6B56F]">
        <BotanicalBranch className="w-80 h-80" rotate={-135} />
      </div>

      <div className="relative z-10 max-w-[1320px] w-full mx-auto px-4 xs:px-5 sm:px-8">
        {/* ========================================================================= */}
        {/* ASYMMETRIC EDITORIAL SPLIT COMPOSITION */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
          
          {/* ----------------------------------------------------------------------- */}
          {/* LEFT SIDE: EDITORIAL TYPOGRAPHY & STORY */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-5 sm:space-y-7 text-left">
            
            {/* Pre-Heading Badge / Editorial Stamp */}
            <div className="flex items-center space-x-2.5">
              <EditorialStamp text="Kolkata & Eastern India • Established 2014" />
              <div className="inline-block pointer-events-none text-[#D6B56F]">
                <MiniatureButterfly className="w-5 h-5 text-[#D6B56F]" rotate={15} />
              </div>
            </div>

            {/* Oversized Display Headline (Instrument Serif) */}
            <div>
              <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[76px] text-[#292323] dark:text-[#F5EFE5] font-normal tracking-tight leading-[1.1] sm:leading-[1.04]">
                Event Services Fit For <br className="hidden xs:inline" />
                <span className="font-display italic text-[#193C3B] dark:text-[#D6B56F] relative inline-block whitespace-nowrap">
                  Royalty.
                  {/* Subtle antique gold underline stroke */}
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D6B56F] via-[#D66D59] to-transparent opacity-80" />
                </span>
                {/* Floating romantic terracotta petal drifting beside title */}
                <span className="inline-block ml-2.5 sm:ml-4 align-middle pointer-events-none">
                  <FloatingPetal className="w-6 h-6 sm:w-8 sm:h-8 text-[#D66D59]" rotate={28} variant="single" />
                </span>
              </h1>
            </div>

            {/* Existing Authentic Description */}
            <p className="text-sm xs:text-base sm:text-lg text-[#665C5C] dark:text-[#C8D6D5] font-light leading-relaxed max-w-xl font-sans">
              From heritage rajbari weddings to high-impact corporate galas, our own kitchen and on-ground crew run your entire celebration with calm precision.
            </p>

            {/* --------------------------------------------------------------------- */}
            {/* MOBILE ONLY: ARTISTIC ARCHED WEDDING PHOTO (SHOWN EARLY ON MOBILE) */}
            {/* --------------------------------------------------------------------- */}
            <div className="block lg:hidden my-6 max-w-[270px] xs:max-w-[300px] mx-auto relative">
              {/* Outer Delicate Gold Ring */}
              <div className="absolute inset-0 -m-2.5 rounded-[135px] border border-[#D6B56F]/40 dark:border-[#D6B56F]/30 pointer-events-none" />

              {/* Mobile Butterfly perched on upper arch */}
              <div className="absolute -top-3.5 right-4 z-20 pointer-events-none text-[#D6B56F]">
                <MiniatureButterfly className="w-5 h-5 text-[#D6B56F]" rotate={22} />
              </div>

              {/* Main Arched Photo */}
              <div className="relative z-10 w-full aspect-[4/5] rounded-[130px] overflow-hidden shadow-xl border-2 border-[#D6B56F]/50 bg-[#FAF5ED] dark:bg-[#143130]">
                <img
                  src="/images/bengali-wedding-hero.jpg"
                  alt="Royal Enterprise Authentic Bengali Wedding with Traditional Shubho Drishti in Kolkata"
                  className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#193C3B]/70 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-0 right-0 text-center px-4 text-white font-sans pointer-events-none">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#D6B56F] font-semibold block mb-0.5">
                    Heritage Rajbari Celebrations
                  </span>
                  <span className="font-display text-sm italic font-normal text-[#F5EFE5]">
                    Vedic Grace & Quiet Grandeur
                  </span>
                </div>
              </div>

              {/* Mobile Floating Monogram Seal */}
              <div className="absolute -top-3 -left-3 z-20 w-20 h-20 rounded-full bg-[#193C3B] text-[#F5EFE5] p-2 flex flex-col items-center justify-center text-center shadow-lg border-2 border-[#D6B56F]">
                <AntiqueStar className="w-3 h-3 text-[#D6B56F] mb-0.5" />
                <span className="text-[8.5px] uppercase tracking-[0.16em] font-semibold text-[#D6B56F] leading-tight font-sans">
                  In-House
                </span>
                <span className="text-[7.5px] uppercase tracking-wider text-white/90 font-light font-sans">
                  Standard
                </span>
              </div>

              {/* Mobile Floating Production Stagecraft Thumbnail */}
              <div className="absolute -bottom-2 -right-2 z-20 w-28 xs:w-32 aspect-[16/11] rounded-xl overflow-hidden shadow-xl border-2 border-white dark:border-[#102726] bg-[#102726]">
                <img
                  src="/images/hero-stage.png"
                  alt="Royal Enterprise Stage Craft & Production"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-1 left-2 right-2 text-white text-[8px] font-sans font-medium flex items-center justify-between">
                  <span className="text-[#D6B56F] uppercase tracking-wider">In-House Staging</span>
                  <span className="text-white/80">Kolkata</span>
                </div>
              </div>

              {/* Mobile Subtle Floating Petal */}
              <div className="absolute -bottom-4 right-1 z-20 pointer-events-none text-[#D66D59]/50">
                <FloatingPetal className="w-6 h-6 text-[#D66D59]/50" rotate={24} variant="single" />
              </div>
            </div>

            {/* Action Group: Refined Terracotta Primary CTA & Direct Actions */}
            <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 pt-1">
              <button
                type="button"
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-7 py-3 sm:py-3.5 text-xs uppercase tracking-[0.14em] font-semibold rounded-lg bg-[#D66D59] hover:bg-[#BA5643] text-white shadow-md shadow-[#D66D59]/25 transition-all duration-300 transform hover:-translate-y-0.5 text-center"
              >
                Plan Your Event
              </button>

              <div className="flex items-center gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={scrollToServices}
                  className="flex-1 sm:flex-initial px-4 sm:px-5 py-3 sm:py-3.5 text-xs uppercase tracking-[0.14em] font-semibold rounded-lg bg-white/80 dark:bg-[#143130] hover:bg-white dark:hover:bg-[#193C3B] text-[#193C3B] dark:text-[#F5EFE5] border border-[#E8DFD3] dark:border-[#244C4A] transition-all duration-300 inline-flex items-center justify-center space-x-2"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D66D59]" />
                </button>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20an%20event.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp flex-1 sm:flex-initial px-4 sm:px-5 py-3 sm:py-3.5 text-xs uppercase tracking-[0.12em] font-semibold inline-flex items-center justify-center space-x-1.5 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Floating golden petal drifting near actions */}
              <div className="hidden xl:block absolute -right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#D6B56F]">
                <FloatingPetal className="w-6 h-6 text-[#D6B56F]" rotate={-30} variant="pair" />
              </div>
            </div>

            {/* Capability Anchors: Refined Footnote */}
            <div className="pt-6 sm:pt-8 mt-3 sm:mt-4 border-t border-[#E8DFD3] dark:border-[#244C4A]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 text-left font-sans">
                <div className="flex sm:block items-baseline space-x-2 sm:space-x-0 space-y-0 sm:space-y-1">
                  <span className="text-[10px] sm:text-[10.5px] uppercase tracking-[0.2em] text-[#D66D59] dark:text-[#D6B56F] font-semibold block shrink-0">
                    01 / Event Management
                  </span>
                  <span className="font-normal text-[11px] sm:text-xs text-[#292323] dark:text-[#C8D6D5] block leading-snug">
                    Corporate galas, media summits & stages
                  </span>
                </div>

                <div className="flex sm:block items-baseline space-x-2 sm:space-x-0 space-y-0 sm:space-y-1">
                  <span className="text-[10px] sm:text-[10.5px] uppercase tracking-[0.2em] text-[#D66D59] dark:text-[#D6B56F] font-semibold block shrink-0">
                    02 / In-House Catering
                  </span>
                  <span className="font-normal text-[11px] sm:text-xs text-[#292323] dark:text-[#C8D6D5] block leading-snug">
                    Authentic live feasts, pure veg & Bengali
                  </span>
                </div>

                <div className="flex sm:block items-baseline space-x-2 sm:space-x-0 space-y-0 sm:space-y-1">
                  <span className="text-[10px] sm:text-[10.5px] uppercase tracking-[0.2em] text-[#D66D59] dark:text-[#D6B56F] font-semibold block shrink-0">
                    03 / Wedding Planning
                  </span>
                  <span className="font-normal text-[11px] sm:text-xs text-[#292323] dark:text-[#C8D6D5] block leading-snug">
                    Rajbaris, styling, mandaps & decor
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* DESKTOP ONLY: ARTISTIC OVAL & LAYERED EDITORIAL IMAGE COLLAGE */}
          {/* ----------------------------------------------------------------------- */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-[360px] xl:max-w-[420px]">
              
              {/* Botanical Branch Flourish Extending Beyond Frame */}
              <div className="absolute -top-8 -right-6 z-20 pointer-events-none text-[#193C3B] dark:text-[#D6B56F] animate-botanical-sway">
                <BotanicalBranch className="w-28 h-28" rotate={20} />
              </div>

              {/* Apex Floral Line Art Blossom atop Arch */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-[#D6B56F]">
                <FloralLineArt className="w-8 h-8 text-[#D6B56F]" />
              </div>

              {/* Decorative Antique Gold Fine Line Oval Ring */}
              <div className="absolute inset-0 -m-3 sm:-m-4 rounded-[160px] xl:rounded-[190px] border border-[#D6B56F]/40 dark:border-[#D6B56F]/30 pointer-events-none" />

              {/* Primary Large Wedding Photograph in Arched Luxury Frame */}
              <div className="relative z-10 w-full aspect-[4/5] rounded-[150px] xl:rounded-[180px] overflow-hidden shadow-2xl border-2 border-[#D6B56F]/50 bg-[#FAF5ED] dark:bg-[#143130]">
                <img
                  src="/images/bengali-wedding-hero.jpg"
                  alt="Royal Enterprise Authentic Bengali Wedding with Traditional Shubho Drishti in Kolkata"
                  className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.04] hover:scale-105 transition-transform duration-1000 ease-out"
                />
                {/* Subtle warm vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#193C3B]/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-8 left-0 right-0 text-center px-6 text-white font-sans pointer-events-none">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#D6B56F] font-semibold block mb-1">
                    Heritage Rajbari Celebrations
                  </span>
                  <span className="font-display text-lg xl:text-xl italic font-normal text-[#F5EFE5]">
                    Crafted with Vedic Grace & Quiet Grandeur
                  </span>
                </div>
              </div>

              {/* Secondary Overlapping Photograph: Production & Stagecraft */}
              <div className="absolute bottom-3 -left-6 xl:-left-8 z-20 w-44 xl:w-52 aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl border-2 border-white dark:border-[#102726] bg-[#102726] transform -rotate-3 hover:rotate-0 transition-transform duration-500">
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
              <div className="absolute -top-4 -left-4 xl:-left-6 z-20 w-24 h-24 xl:w-28 xl:h-28 rounded-full bg-[#193C3B] text-[#F5EFE5] p-3 flex flex-col items-center justify-center text-center shadow-xl border-2 border-[#D6B56F] animate-botanical-drift">
                <AntiqueStar className="w-3.5 h-3.5 text-[#D6B56F] mb-1" />
                <span className="text-[9px] xl:text-[10px] uppercase tracking-[0.18em] font-semibold text-[#D6B56F] leading-tight font-sans">
                  In-House
                </span>
                <span className="text-[8px] uppercase tracking-wider text-white/90 font-light font-sans">
                  Standard
                </span>
                {/* Micro Gold Particle Sparkle */}
                <div className="absolute -bottom-1 -left-2 z-30 pointer-events-none text-[#D6B56F]">
                  <GoldParticleCluster className="w-6 h-6 text-[#D6B56F]" />
                </div>
              </div>

              {/* Miniature Fine-Line Butterfly resting near stagecraft photo */}
              <div className="absolute bottom-28 -left-2 z-30 pointer-events-none text-[#D6B56F] hidden sm:block">
                <MiniatureButterfly className="w-7 h-7 text-[#D6B56F]" rotate={-15} />
              </div>

              {/* Floating Romantic Petal Pair */}
              <div className="absolute -bottom-5 right-2 z-20 pointer-events-none text-[#D66D59]/50 hidden sm:block">
                <FloatingPetal className="w-8 h-8 text-[#D66D59]/50" rotate={28} variant="pair" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
