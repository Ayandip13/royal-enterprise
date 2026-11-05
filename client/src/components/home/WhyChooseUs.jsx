import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  AntiqueStar,
  BotanicalBranch,
  FloatingPetal,
  OrnamentalFlourish,
  FloralLineArt,
  GoldParticleCluster,
} from '../common/BotanicalDecor';

const WhyChooseUs = ({ onOpenQuote }) => {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Briefing',
      detail:
        'We understand your event purpose, expected guest count, venue preferences, and comfortable budget without pushy upselling.',
      tag: 'First Conversation',
      timeframe: 'Phase 01',
    },
    {
      num: '02',
      title: '3D Concept & Line-Item Pricing',
      detail:
        'We draft a customized 3D stage preview, run-of-show schedule, and itemized cost breakdown with zero surprise additions.',
      tag: 'Transparent Estimates',
      timeframe: 'Phase 02',
    },
    {
      num: '03',
      title: 'Tastings & Pre-Production',
      detail:
        'Live catering menu tastings, acoustic sound checks, lighting cues, stage dry-runs, and municipal fire safety clearances.',
      tag: 'Dry Runs & Tastings',
      timeframe: 'Phase 03',
    },
    {
      num: '04',
      title: 'Calm Day-Of Management',
      detail:
        'Our experienced floor managers stay active on site from the morning setup until the very last guest departs.',
      tag: 'On-Ground Care',
      timeframe: 'Phase 04',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF5ED] dark:bg-[#143130] border-b border-[#E8DFD3] dark:border-[#244C4A] transition-colors relative overflow-hidden">
      {/* Decorative Botanical Flourish */}
      <div className="absolute top-12 left-4 pointer-events-none opacity-20 dark:opacity-10 text-[#193C3B] dark:text-[#D6B56F]">
        <BotanicalBranch className="w-56 h-56" rotate={35} />
      </div>

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 space-y-16 sm:space-y-24">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl space-y-4 text-left">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.24em] font-semibold text-[#D66D59] dark:text-[#D6B56F] font-sans">
            <AntiqueStar className="w-3.5 h-3.5 text-[#D6B56F]" />
            <span>The Client Experience • Continuous Timeline</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#292323] dark:text-[#F5EFE5] font-normal tracking-tight leading-[1.08]">
            How We Bring Calm To <br />
            <span className="italic font-display text-[#193C3B] dark:text-[#D6B56F]">
              High-Stakes Celebrations.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#665C5C] dark:text-[#C8D6D5] font-light leading-relaxed font-sans">
            Planning a milestone event should feel inspiring, not stressful. Here is our proven four-step operational workflow from your first call to the final applause.
          </p>
        </div>

        {/* ======================================================================= */}
        {/* CONTINUOUS EDITORIAL TIMELINE (No generic card grid) */}
        {/* ======================================================================= */}
        <div className="relative">
          {/* Top Flourish Finial (Desktop) */}
          <div className="hidden lg:flex justify-center -mb-2 pointer-events-none text-[#D6B56F]/40">
            <OrnamentalFlourish className="w-28 h-6 text-[#D6B56F]/40" />
          </div>

          {/* Continuous Center Timeline Spine (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-6 bottom-6 -translate-x-1/2 w-[1.5px] bg-gradient-to-b from-[#D6B56F] via-[#D66D59] to-[#193C3B] opacity-50" />

          {/* Continuous Left Timeline Spine (Mobile & Tablet) */}
          <div className="lg:hidden absolute left-5 top-3 bottom-3 w-[1.5px] bg-gradient-to-b from-[#D6B56F] via-[#D66D59] to-[#193C3B] opacity-50" />

          <div className="space-y-12 lg:space-y-20">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={step.num}
                  className="relative flex flex-col lg:flex-row items-center"
                >
                  {/* Timeline Center Medallion (Desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-10 w-11 h-11 rounded-full bg-[#F5EFE5] dark:bg-[#102726] border-2 border-[#D6B56F] items-center justify-center text-[#193C3B] dark:text-[#D6B56F] shadow-md">
                    <span className="font-display text-sm font-semibold">{step.num}</span>
                  </div>

                  {/* Timeline Node (Mobile) */}
                  <div className="lg:hidden absolute left-5 top-6 -translate-x-1/2 z-10 w-7 h-7 rounded-full bg-[#F5EFE5] dark:bg-[#102726] border-2 border-[#D6B56F] flex items-center justify-center text-[10px] font-semibold text-[#193C3B] dark:text-[#D6B56F]">
                    {step.num}
                  </div>

                  {/* Left Column (Desktop) */}
                  <div
                    className={`w-full lg:w-1/2 pl-12 lg:pl-0 ${
                      !isEven
                        ? 'lg:pr-16 lg:text-right'
                        : 'lg:order-2 lg:pl-16 lg:text-left'
                    }`}
                  >
                    <div className="relative group">
                      {/* Oversized background numeral */}
                      <span
                        className={`font-display text-7xl sm:text-8xl font-light text-[#D6B56F]/20 absolute -top-10 select-none pointer-events-none transition-colors group-hover:text-[#D6B56F]/35 ${
                          !isEven ? 'lg:right-0 right-auto' : 'left-0'
                        }`}
                      >
                        {step.num}
                      </span>

                      <div className="space-y-3 relative z-10">
                        {/* Step tag & Phase */}
                        <div
                          className={`flex items-center space-x-3 text-xs uppercase tracking-[0.16em] font-semibold font-sans ${
                            !isEven ? 'lg:justify-end' : 'justify-start'
                          }`}
                        >
                          <span className="text-[#D66D59]">{step.tag}</span>
                          <span className="text-stone-300 dark:text-stone-600">•</span>
                          <span className="text-[#8C8282] dark:text-[#8FA4A3]">
                            {step.timeframe}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-2xl sm:text-3xl text-[#292323] dark:text-[#F5EFE5] font-normal leading-snug">
                          {step.title}
                        </h3>

                        {/* Detail */}
                        <p className="text-sm sm:text-base text-[#665C5C] dark:text-[#C8D6D5] font-light leading-relaxed max-w-lg font-sans inline-block">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Opposite Column Spacer (Desktop) */}
                  <div
                    className={`hidden lg:block w-1/2 ${
                      !isEven ? 'order-2 pl-16' : 'order-1 pr-16'
                    }`}
                  >
                    {/* Delicate editorial watermark accent */}
                    <div
                      className={`h-[1px] w-24 bg-gradient-to-r from-[#D6B56F]/40 to-transparent ${
                        isEven ? 'ml-auto' : ''
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ======================================================================= */}
        {/* EXPERIENCE CALLOUT BANNER: DRAMATIC CONTRAST BLOCK */}
        {/* ======================================================================= */}
        <div className="relative rounded-2xl p-8 sm:p-12 lg:p-14 bg-[#193C3B] text-[#F5EFE5] border border-[#D6B56F]/30 shadow-2xl overflow-hidden">
          {/* Subtle botanical line art */}
          <div className="absolute -top-12 -right-12 pointer-events-none opacity-15 text-[#D6B56F]">
            <BotanicalBranch className="w-64 h-64" rotate={-30} />
          </div>
          {/* Subtle floating petal */}
          <div className="absolute bottom-4 left-6 pointer-events-none text-[#D6B56F]/30 hidden sm:block">
            <FloatingPetal className="w-6 h-6 text-[#D6B56F]/30" rotate={-45} variant="single" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10">
            <div className="space-y-3 text-center lg:text-left max-w-2xl font-sans">
              <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#D6B56F] block">
                Direct Desk • Kolkata
              </span>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
                One local team with you from morning setup to the final plate.
              </h3>
              <p className="text-sm sm:text-base text-[#F5EFE5]/80 font-light leading-relaxed">
                Zero finger-pointing between separate caterers and decorators. We assume single-point accountability for your entire event.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenQuote}
              className="px-8 py-4 text-xs uppercase tracking-[0.16em] font-semibold whitespace-nowrap rounded-lg bg-[#D66D59] hover:bg-[#BA5643] text-white shadow-xl shrink-0 inline-flex items-center space-x-2.5 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Plan Your Event</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
