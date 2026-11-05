import React from 'react';
import {
  BotanicalBranch,
  AntiqueStar,
  FloralCorner,
  BotanicalWatermark,
  OrnamentalFlourish,
  FloatingPetal,
} from '../common/BotanicalDecor';

const BrandIntroduction = () => {
  return (
    <section className="relative py-16 sm:py-24 bg-[#FAF5ED] dark:bg-[#143130] text-[#292323] dark:text-[#F5EFE5] border-y border-[#E8DFD3] dark:border-[#244C4A] overflow-hidden transition-colors">
      {/* Decorative Botanical Flourish & Watermark */}
      <div className="absolute top-8 right-6 pointer-events-none opacity-20 dark:opacity-10 text-[#193C3B] dark:text-[#D6B56F]">
        <BotanicalBranch className="w-48 h-48" rotate={-45} />
      </div>
      <div className="absolute -bottom-16 -left-12 pointer-events-none opacity-5 dark:opacity-5 text-[#193C3B] dark:text-[#D6B56F]">
        <BotanicalWatermark className="w-72 h-72" rotate={30} />
      </div>

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* Top Editorial Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-12 sm:pb-16 border-b border-[#E8DFD3] dark:border-[#244C4A]">
          
          {/* Left Column: Oversized Typography */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.24em] font-semibold text-[#D66D59] dark:text-[#D6B56F] font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-[#193C3B] dark:bg-[#D6B56F]" />
              <span>Core Disciplines</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-tight text-[#292323] dark:text-[#F5EFE5] leading-[1.06]">
              Three Specialized Pillars. <br />
              <span className="italic font-display text-[#193C3B] dark:text-[#D6B56F]">
                One In-House Standard.
              </span>
              <span className="inline-block ml-3 align-middle pointer-events-none">
                <FloatingPetal className="w-6 h-6 sm:w-7 sm:h-7 text-[#D66D59]" rotate={-25} variant="pair" />
              </span>
            </h2>
          </div>

          {/* Right Column: Existing Introduction Description & Subtle Editorial Credential */}
          <div className="lg:col-span-5 space-y-6 pt-2 lg:pt-8 font-sans">
            <p className="text-base sm:text-lg text-[#665C5C] dark:text-[#C8D6D5] font-light leading-relaxed">
              Most event companies act as third-party brokers. We maintain our own central commercial kitchens, technical stage crews, and on-ground managers right here in Kolkata.
            </p>

            <div className="flex items-center space-x-6 pt-2 text-xs uppercase tracking-[0.16em] text-[#8C8282] dark:text-[#8FA4A3]">
              <div className="flex items-center space-x-2">
                <AntiqueStar className="w-3.5 h-3.5 text-[#D6B56F]" />
                <span className="font-medium text-[#292323] dark:text-[#F5EFE5]">Direct Kitchens</span>
              </div>
              <div className="flex items-center space-x-2">
                <AntiqueStar className="w-3.5 h-3.5 text-[#D6B56F]" />
                <span className="font-medium text-[#292323] dark:text-[#F5EFE5]">Direct Floor Leads</span>
              </div>
            </div>
          </div>

        </div>

        {/* Striking Editorial Visual Interlude (Full-Bleed Photography with Layered Botanical Framing) */}
        <div className="pt-12 sm:pt-16">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E8DFD3] dark:border-[#244C4A] aspect-[16/8] sm:aspect-[21/9] bg-[#102726] group">
            <img
              src="/images/luxury-ballroom-venue.jpg"
              alt="Royal Enterprise Luxury Ballroom & Event Scenography in Kolkata"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-[0.88]"
            />
            {/* Ambient editorial vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#193C3B]/80 via-transparent to-black/40" />
            
            {/* Overlay Editorial Badge */}
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-12 max-w-lg text-[#F5EFE5] font-sans space-y-2">
              <span className="text-[11px] uppercase tracking-[0.24em] font-semibold text-[#D6B56F] block">
                The Kolkata Standard
              </span>
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl italic text-white font-normal leading-snug">
                "Where genuine family warmth meets unwavering culinary mastery."
              </p>
            </div>

            {/* Subtle floating gold petal near the image edge */}
            <div className="absolute bottom-6 right-8 pointer-events-none text-[#D6B56F]/40 hidden sm:block">
              <FloatingPetal className="w-7 h-7 text-[#D6B56F]/40" rotate={-20} variant="single" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BrandIntroduction;

