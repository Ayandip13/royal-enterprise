import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';
import { WhatsAppIcon } from '../common/SocialIcons';
import {
  BotanicalBranch,
  AntiqueStar,
  EditorialStamp,
  FloatingPetal,
  MiniatureButterfly,
  GoldParticleCluster,
  FloralLineArt,
} from '../common/BotanicalDecor';
import HeroVisualCollage from './HeroVisualCollage';

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
                  {/* Live animated antique gold & terracotta underline stroke (left-to-right slide on load) */}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 sm:-bottom-1.5 left-0 right-0 h-[2px] sm:h-[2.5px] rounded-full bg-gradient-to-r from-[#D6B56F] via-[#D66D59] to-[#D6B56F]/30 origin-left animate-live-underline pointer-events-none"
                  />
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
            {/* MOBILE ONLY: ARTISTIC 3-PURPOSE EDITORIAL IMAGE COLLAGE */}
            {/* --------------------------------------------------------------------- */}
            <div className="block lg:hidden my-8 py-2">
              <HeroVisualCollage />
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
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white flex-1 sm:flex-initial px-4 sm:px-5 py-3 sm:py-3.5 text-xs uppercase tracking-[0.12em] font-semibold inline-flex items-center justify-center space-x-1.5 shadow-sm rounded-lg transition-all duration-200 hover:shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
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
          {/* DESKTOP ONLY: ARTISTIC 3-PURPOSE EDITORIAL IMAGE COLLAGE */}
          {/* ----------------------------------------------------------------------- */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-5 relative mt-4 lg:mt-0">
            <HeroVisualCollage />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
