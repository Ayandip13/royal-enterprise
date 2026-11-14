import React, { useState, useEffect } from 'react';
import {
  BotanicalBranch,
  AntiqueStar,
  MiniatureButterfly,
  FloralLineArt,
  GoldParticleCluster,
} from '../common/BotanicalDecor';

// ============================================================================
// HERO TRIPLE-PURPOSE IMAGE CONFIGURATION
// Replace the image placeholders below with your actual photographs anytime.
// Each slot represents one of Royal Enterprise's three core services:
// 1. Wedding Planning
// 2. In-House Gourmet Catering
// 3. Event Management & Stage Production
// ============================================================================
export const HERO_PURPOSE_IMAGES = [
  {
    id: 'weddings',
    purpose: 'Wedding Planning',
    title: 'Heritage Rajbari Celebrations',
    subtitle: 'Vedic Mandap Styling & Quiet Grandeur',
    tag: '01 / Weddings',
    badge: 'Bespoke Biye Bari',
    location: 'Kolkata & Rajbaris',
    // --- PLACEHOLDER 1: Replace with your wedding photograph URL/path ---
    image: '/images/bengali-wedding-hero.jpg',
    alt: 'Royal Enterprise Wedding Planning & Heritage Celebrations',
    accentColor: '#D6B56F',
  },
  {
    id: 'catering',
    purpose: 'In-House Catering',
    title: 'Authentic Live Feasts',
    subtitle: 'Slow-Simmered Kosha Mangsho & Fresh Kolkata Bhetki',
    tag: '02 / In-House Kitchen',
    badge: 'Our Own Kitchen',
    location: 'Live Cooking Stations',
    // --- PLACEHOLDER 2: Replace with your catering feast photograph URL/path ---
    image: '/images/bengali-wedding-couple.jpg',
    alt: 'Royal Enterprise In-House Catering & Gourmet Feasts',
    accentColor: '#D66D59',
  },
  {
    id: 'events',
    purpose: 'Event Management',
    title: 'Grand Gala Architecture',
    subtitle: '3D Stage Fabrication, Acoustic Design & Lights',
    tag: '03 / Production',
    badge: 'Corporate & Galas',
    location: 'Summits & Arenas',
    // --- PLACEHOLDER 3: Replace with your stage/event photograph URL/path ---
    image: '/images/hero-stage.png',
    alt: 'Royal Enterprise Event Management & Stagecraft',
    accentColor: '#193C3B',
  },
];

// Helper: Resilient Image Component with Editorial Placeholder Fallback
const CollageImage = ({ src, alt, className = '' }) => {
  const [loadFailed, setLoadFailed] = useState(false);

  if (!src || loadFailed) {
    return (
      <div
        className={`w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#FAF5ED] to-[#EFE8DD] dark:from-[#143130] dark:to-[#0D2221] text-[#193C3B] dark:text-[#D6B56F] select-none ${className}`}
      >
        <div className="w-10 h-10 rounded-full border border-[#D6B56F]/40 flex items-center justify-center mb-1.5 shadow-sm bg-white/40 dark:bg-black/20">
          <AntiqueStar className="w-4 h-4 text-[#D6B56F]" />
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-wider font-sans text-center line-clamp-1">
          {alt}
        </span>
        <span className="text-[9px] opacity-60 font-mono mt-0.5 tracking-tight">
          [Image Placeholder]
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setLoadFailed(true)}
      className={`w-full h-full object-cover object-center ${className}`}
      loading="eager"
    />
  );
};

export const HeroVisualCollage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic rotation: switches featured image every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;

    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_PURPOSE_IMAGES.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // The 3 purpose slots: active featured, and two secondary floating cards
  const featured = HERO_PURPOSE_IMAGES[activeIndex];
  const secondaryAIndex = (activeIndex + 1) % HERO_PURPOSE_IMAGES.length;
  const secondaryA = HERO_PURPOSE_IMAGES[secondaryAIndex];
  const secondaryBIndex = (activeIndex + 2) % HERO_PURPOSE_IMAGES.length;
  const secondaryB = HERO_PURPOSE_IMAGES[secondaryBIndex];

  return (
    <div
      className="relative w-full max-w-[390px] xs:max-w-[430px] lg:max-w-[440px] xl:max-w-[480px] mx-auto select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      aria-label="Royal Enterprise Three Core Disciplines Showcase"
    >
      {/* ------------------------------------------------------------------- */}
      {/* BOTANICAL & LUXURY ORNAMENTAL DETAILS (EXTENDING BEYOND COMPOSITION) */}
      {/* ------------------------------------------------------------------- */}
      {/* Top-Right Swaying Botanical Branch */}
      <div className="absolute -top-10 -right-6 sm:-right-10 z-10 pointer-events-none text-[#193C3B] dark:text-[#D6B56F] opacity-80 animate-botanical-sway">
        <BotanicalBranch className="w-24 h-24 sm:w-28 sm:h-28" rotate={20} />
      </div>

      {/* Top Center Floral Blossom Line Art */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-[#D6B56F]">
        <FloralLineArt className="w-7 h-7 sm:w-8 sm:h-8 text-[#D6B56F]" />
      </div>

      {/* Perched Miniature Butterfly */}
      <div className="absolute -top-3.5 right-6 z-30 pointer-events-none text-[#D6B56F] hidden xs:block">
        <MiniatureButterfly className="w-6 h-6 text-[#D6B56F]" rotate={18} />
      </div>

      {/* Outer Delicate Antique Gold Oval Ring */}
      <div className="absolute inset-0 -m-3 sm:-m-4 rounded-[42px] sm:rounded-[50px] border border-[#D6B56F]/40 dark:border-[#D6B56F]/30 pointer-events-none" />

      {/* ------------------------------------------------------------------- */}
      {/* 1. DOMINANT FEATURED IMAGE CARD (EDITORIAL ARCHED / ROUNDED CANVAS) */}
      {/* ------------------------------------------------------------------- */}
      <div className="relative z-10 w-full aspect-[4/5] rounded-[36px] sm:rounded-[44px] overflow-hidden shadow-2xl border-2 border-[#D6B56F]/50 bg-[#FAF5ED] dark:bg-[#143130] transition-all duration-700">
        
        {/* Render all 3 images with smooth crossfade and subtle scale transition */}
        {HERO_PURPOSE_IMAGES.map((item, index) => {
          const isCurrent = index === activeIndex;
          return (
            <div
              key={item.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                isCurrent
                  ? 'opacity-100 scale-100 pointer-events-auto z-10'
                  : 'opacity-0 scale-105 pointer-events-none z-0'
              }`}
            >
              <CollageImage
                src={item.image}
                alt={item.alt}
                className="filter brightness-[0.98] contrast-[1.03]"
              />

              {/* Rich Gradient Vignette for Editorial Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#102726]/85 via-[#102726]/20 to-transparent pointer-events-none" />

              {/* Top Purpose Tag & Active Indicator */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white font-sans pointer-events-none">
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-[#102726]/70 backdrop-blur-md border border-[#D6B56F]/40 text-[9.5px] uppercase tracking-[0.18em] font-semibold text-[#D6B56F]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D6B56F] animate-pulse" />
                  <span>{item.tag}</span>
                </span>

                <span className="text-[9px] uppercase tracking-wider text-[#F5EFE5]/80 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-md font-mono">
                  {index + 1} / 3
                </span>
              </div>

              {/* Bottom Editorial Caption */}
              <div className="absolute bottom-5 sm:bottom-7 left-0 right-0 px-5 sm:px-7 text-left text-white font-sans pointer-events-none">
                <div className="inline-flex items-center space-x-1.5 mb-1 text-[10px] uppercase tracking-[0.22em] text-[#D6B56F] font-semibold">
                  <AntiqueStar className="w-3 h-3 text-[#D6B56F]" />
                  <span>{item.badge}</span>
                  <span className="text-white/40">•</span>
                  <span className="text-white/80 font-normal">{item.location}</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl xl:text-[26px] text-[#F5EFE5] font-normal leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-[11px] sm:text-xs text-[#F5EFE5]/80 font-light font-sans line-clamp-1 mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* 2. SECONDARY FLOATING CARD A: ASYMMETRICAL BOTTOM-LEFT OVERLAP     */}
      {/* ------------------------------------------------------------------- */}
      <button
        type="button"
        onClick={() => setActiveIndex(secondaryAIndex)}
        className="group absolute -bottom-4 -left-3 xs:-left-6 sm:-left-8 z-20 w-36 xs:w-44 sm:w-48 aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl border-2 border-white dark:border-[#102726] bg-[#102726] transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B56F]"
        title={`Click to view ${secondaryA.purpose}`}
        aria-label={`Switch to ${secondaryA.purpose}`}
      >
        <CollageImage
          src={secondaryA.image}
          alt={secondaryA.alt}
          className="group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        
        {/* Floating Card Badge */}
        <div className="absolute top-2 left-2 pointer-events-none">
          <span className="text-[8px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[#D6B56F] border border-[#D6B56F]/30 font-sans">
            {secondaryA.tag.split('/')[1]?.trim() || secondaryA.purpose}
          </span>
        </div>

        {/* Floating Card Title */}
        <div className="absolute bottom-2 left-2.5 right-2.5 text-white font-sans pointer-events-none">
          <span className="block text-[10.5px] font-semibold leading-tight line-clamp-1 group-hover:text-[#D6B56F] transition-colors">
            {secondaryA.title}
          </span>
          <span className="text-[8.5px] text-white/70 block mt-0.5">
            Tap to view &rarr;
          </span>
        </div>
      </button>

      {/* ------------------------------------------------------------------- */}
      {/* 3. SECONDARY FLOATING CARD B: ASYMMETRICAL TOP-RIGHT OVERLAP       */}
      {/* ------------------------------------------------------------------- */}
      <button
        type="button"
        onClick={() => setActiveIndex(secondaryBIndex)}
        className="group absolute -top-5 -right-3 xs:-right-5 sm:-right-7 z-20 w-32 xs:w-36 sm:w-40 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-white dark:border-[#102726] bg-[#102726] transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B56F]"
        title={`Click to view ${secondaryB.purpose}`}
        aria-label={`Switch to ${secondaryB.purpose}`}
      >
        <CollageImage
          src={secondaryB.image}
          alt={secondaryB.alt}
          className="group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        
        {/* Floating Card Badge */}
        <div className="absolute top-2 left-2 pointer-events-none">
          <span className="text-[8px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[#D6B56F] border border-[#D6B56F]/30 font-sans">
            {secondaryB.tag.split('/')[1]?.trim() || secondaryB.purpose}
          </span>
        </div>

        {/* Floating Card Title */}
        <div className="absolute bottom-2 left-2 right-2 text-white font-sans pointer-events-none">
          <span className="block text-[10px] font-semibold leading-tight line-clamp-1 group-hover:text-[#D6B56F] transition-colors">
            {secondaryB.title}
          </span>
          <span className="text-[8px] text-white/70 block mt-0.5">
            Tap to view &rarr;
          </span>
        </div>
      </button>

      {/* ------------------------------------------------------------------- */}
      {/* 4. FLOATING MONOGRAM SEAL & ROTATION PROGRESS INDICATOR             */}
      {/* ------------------------------------------------------------------- */}
      <div className="absolute -top-4 -left-3 xs:-left-5 sm:-left-6 z-30 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#193C3B] text-[#F5EFE5] p-2.5 flex flex-col items-center justify-center text-center shadow-xl border-2 border-[#D6B56F] animate-botanical-drift pointer-events-none">
        <AntiqueStar className="w-3 h-3 text-[#D6B56F] mb-0.5" />
        <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.16em] font-semibold text-[#D6B56F] leading-tight font-sans">
          3 Disciplines
        </span>
        <span className="text-[7.5px] uppercase tracking-wider text-white/90 font-light font-sans">
          One Standard
        </span>

        {/* Micro Gold Particle Sparkle */}
        <div className="absolute -bottom-1 -left-2 z-30 pointer-events-none text-[#D6B56F]">
          <GoldParticleCluster className="w-5 h-5 text-[#D6B56F]" />
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* 5. MINIMAL LUXURY ROTATION PILLS (INTERACTIVE SWITCHER)             */}
      {/* ------------------------------------------------------------------- */}
      <div className="flex items-center justify-center space-x-2 pt-5 sm:pt-6 relative z-20">
        {HERO_PURPOSE_IMAGES.map((item, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`group flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-[10px] font-sans font-medium transition-all duration-300 ${
                isActive
                  ? 'bg-[#193C3B] text-[#F5EFE5] shadow-sm dark:bg-[#D6B56F] dark:text-[#102726] font-semibold'
                  : 'bg-white/60 dark:bg-white/10 text-[#665C5C] dark:text-[#C8D6D5] hover:bg-white dark:hover:bg-white/20'
              }`}
              aria-label={`Select ${item.purpose}`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-[#D6B56F] dark:bg-[#102726] scale-125'
                    : 'bg-[#CBBFB0] group-hover:bg-[#193C3B]'
                }`}
              />
              <span className="hidden sm:inline">{item.purpose}</span>
              <span className="inline sm:hidden">0{idx + 1}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HeroVisualCollage;

