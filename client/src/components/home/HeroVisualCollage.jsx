import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  BotanicalBranch,
  AntiqueStar,
  MiniatureButterfly,
  FloralLineArt,
  GoldParticleCluster,
} from '../common/BotanicalDecor';

// ============================================================================
// HERO CYLINDRICAL CAROUSEL IMAGE CONFIGURATION
// Three consistent-dimension photographs representing Royal Enterprise's disciplines:
// 1. Weddings (Heritage Rajbari Celebrations)
// 2. In-House Catering (Authentic Live Gourmet Feasts)
// 3. Event Production (Stagecraft & Corporate Galas)
// ============================================================================
export const HERO_CAROUSEL_IMAGES = [
  {
    id: 'weddings',
    purpose: 'Weddings',
    discipline: '01 / Weddings',
    title: 'Heritage Rajbari Celebrations',
    subtitle: 'Vedic Mandap Styling & Quiet Grandeur',
    location: 'Kolkata & Rajbaris',
    badge: 'Bespoke Biye Bari',
    image: '/images/bengali-wedding-hero.jpg',
    alt: 'Royal Enterprise Heritage Bengali Wedding Planning',
    accentColor: '#D6B56F',
  },
  {
    id: 'catering',
    purpose: 'Catering',
    discipline: '02 / In-House Kitchen',
    title: 'Authentic Live Feasts',
    subtitle: 'Slow-Simmered Kosha Mangsho & Fresh Kolkata Bhetki',
    location: 'Live Cooking Stations',
    badge: 'In-House Kitchen',
    image: '/images/bengali-wedding-couple.jpg',
    alt: 'Royal Enterprise In-House Catering & Gourmet Feasts',
    accentColor: '#D66D59',
  },
  {
    id: 'events',
    purpose: 'Events',
    discipline: '03 / Production',
    title: 'Grand Gala Architecture',
    subtitle: '3D Stage Fabrication, Acoustic Design & Lights',
    location: 'Conventions & Arenas',
    badge: 'Corporate & Galas',
    image: '/images/hero-stage.png',
    alt: 'Royal Enterprise Event Management & Stage Production',
    accentColor: '#193C3B',
  },
];

// Fallback component if any local image is unavailable
const CarouselCardImage = ({ src, alt }) => {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#FAF5ED] to-[#EAE0D0] dark:from-[#143130] dark:to-[#0D201F] text-[#193C3B] dark:text-[#D6B56F]">
        <div className="w-10 h-10 rounded-full border border-[#D6B56F]/50 flex items-center justify-center mb-2 bg-white/50 dark:bg-black/20">
          <AntiqueStar className="w-4 h-4 text-[#D6B56F]" />
        </div>
        <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-center line-clamp-1">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02]"
      loading="eager"
    />
  );
};

export const HeroVisualCollage = () => {
  // activeProminentIndex: which image currently occupies Slot 0 (Upper Center)
  const [activeProminentIndex, setActiveProminentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive breakpoint tracking for cylindrical coordinate scaling
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Continuous cylindrical auto-rotation every 4.5 seconds
  // Advances so the next image (from Lower Left) rises to Upper Center
  const rotateNext = useCallback(() => {
    setActiveProminentIndex((prev) => (prev + 2) % 3);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    // Respect user's prefers-reduced-motion accessibility setting
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const timer = setInterval(() => {
      rotateNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, rotateNext]);

  // ==========================================================================
  // 3D CYLINDRICAL SLOTS GEOMETRY
  // Slot 0: Upper Center (Prominent, foreground, elevated in Z)
  // Slot 1: Lower Right Flank (Offset along cylindrical curve, receding in Z)
  // Slot 2: Lower Left Flank (Offset along cylindrical curve, receding in Z)
  // ==========================================================================
  const slots = isMobile
    ? [
        // Mobile Slot 0 (Upper Center Prominent)
        {
          x: 0,
          y: -44,
          z: 35,
          rotateX: -3,
          rotateY: 0,
          rotateZ: 0,
          scale: 1.0,
          opacity: 1.0,
          zIndex: 30,
          isProminent: true,
        },
        // Mobile Slot 1 (Lower Right Flank)
        {
          x: 52,
          y: 44,
          z: -28,
          rotateX: 5,
          rotateY: -15,
          rotateZ: 3,
          scale: 0.85,
          opacity: 0.86,
          zIndex: 20,
          isProminent: false,
        },
        // Mobile Slot 2 (Lower Left Flank)
        {
          x: -52,
          y: 44,
          z: -28,
          rotateX: 5,
          rotateY: 15,
          rotateZ: -3,
          scale: 0.85,
          opacity: 0.86,
          zIndex: 15,
          isProminent: false,
        },
      ]
    : [
        // Desktop Slot 0 (Upper Center Prominent)
        {
          x: 0,
          y: -65,
          z: 55,
          rotateX: -4,
          rotateY: 0,
          rotateZ: 0,
          scale: 1.0,
          opacity: 1.0,
          zIndex: 30,
          isProminent: true,
        },
        // Desktop Slot 1 (Lower Right Flank)
        {
          x: 88,
          y: 58,
          z: -38,
          rotateX: 6,
          rotateY: -18,
          rotateZ: 4,
          scale: 0.86,
          opacity: 0.88,
          zIndex: 20,
          isProminent: false,
        },
        // Desktop Slot 2 (Lower Left Flank)
        {
          x: -88,
          y: 58,
          z: -38,
          rotateX: 6,
          rotateY: 18,
          rotateZ: -4,
          scale: 0.86,
          opacity: 0.88,
          zIndex: 15,
          isProminent: false,
        },
      ];

  return (
    <div
      className="relative w-full max-w-[380px] xs:max-w-[420px] sm:max-w-[450px] lg:max-w-[460px] xl:max-w-[490px] mx-auto select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      aria-label="Royal Enterprise Cylindrical Three-Disciplines Carousel"
    >
      {/* ------------------------------------------------------------------- */}
      {/* BOTANICAL LUXURY ACCENTS (EXTENDING SUBTLY AROUND COMPOSITION)       */}
      {/* ------------------------------------------------------------------- */}
      {/* Top-Right Swaying Botanical Branch */}
      <div className="absolute -top-10 -right-6 sm:-right-8 z-10 pointer-events-none text-[#193C3B] dark:text-[#D6B56F] opacity-75 animate-botanical-sway">
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

      {/* Soft Cylindrical Antique-Gold Silhouette Aura */}
      <div
        aria-hidden="true"
        className="absolute inset-x-4 inset-y-6 sm:inset-x-8 sm:inset-y-8 rounded-[48px] border border-[#D6B56F]/25 dark:border-[#D6B56F]/15 pointer-events-none -rotate-1"
      />

      {/* ------------------------------------------------------------------- */}
      {/* 3D CYLINDRICAL CAROUSEL STAGE CONTAINER                             */}
      {/* ------------------------------------------------------------------- */}
      <div
        className="relative w-full h-[400px] xs:h-[440px] sm:h-[480px] lg:h-[500px] xl:h-[520px] flex items-center justify-center"
        style={{
          perspective: 1200,
          transformStyle: 'preserve-3d',
        }}
      >
        {HERO_CAROUSEL_IMAGES.map((item, imgIndex) => {
          // Calculate which slot this image belongs to in the current cycle
          const slotIndex = (imgIndex - activeProminentIndex + 3) % 3;
          const slot = slots[slotIndex];
          const isProminent = slot.isProminent;

          return (
            <motion.div
              key={item.id}
              onClick={() => setActiveProminentIndex(imgIndex)}
              className="absolute cursor-pointer will-change-transform"
              style={{
                width: isMobile ? 215 : 265,
                height: isMobile ? 275 : 340,
                transformStyle: 'preserve-3d',
              }}
              animate={{
                x: slot.x,
                y: slot.y,
                z: slot.z,
                rotateX: slot.rotateX,
                rotateY: slot.rotateY,
                rotateZ: slot.rotateZ,
                scale: slot.scale,
                opacity: slot.opacity,
                zIndex: slot.zIndex,
              }}
              transition={{
                duration: 1.15,
                ease: [0.22, 1, 0.36, 1], // Smooth, natural editorial ease curve
              }}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveProminentIndex(imgIndex);
                }
              }}
            >
              {/* Card Canvas with Elegant Image Framing & Subtle Rounded Corners */}
              <div
                className={`relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 bg-[#102726] ${
                  isProminent
                    ? 'border-2 border-[#D6B56F] shadow-2xl shadow-[#102726]/40 dark:shadow-black/70'
                    : 'border border-[#D6B56F]/40 shadow-xl shadow-[#102726]/20 hover:border-[#D6B56F]/80'
                }`}
              >
                {/* Photographic Artwork */}
                <CarouselCardImage src={item.image} alt={item.alt} />

                {/* Dark Vignette Gradient for Editorial Legibility */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 bg-gradient-to-t ${
                    isProminent
                      ? 'from-[#102726]/90 via-[#102726]/25 to-transparent'
                      : 'from-[#102726]/95 via-[#102726]/45 to-black/20'
                  }`}
                />

                {/* Top Discipline Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white font-sans pointer-events-none">
                  <span
                    className={`inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-[0.16em] font-semibold border backdrop-blur-md ${
                      isProminent
                        ? 'bg-[#102726]/80 text-[#D6B56F] border-[#D6B56F]/50'
                        : 'bg-black/60 text-[#F5EFE5]/80 border-white/15 text-[8.5px]'
                    }`}
                  >
                    {isProminent && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D6B56F] animate-pulse" />
                    )}
                    <span>{item.purpose}</span>
                  </span>

                  {isProminent && (
                    <span className="text-[8.5px] uppercase tracking-wider text-[#D6B56F] bg-[#102726]/80 backdrop-blur-sm px-2 py-0.5 rounded border border-[#D6B56F]/30 font-mono">
                      Featured
                    </span>
                  )}
                </div>

                {/* Bottom Photographic Caption & Location */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-left text-white font-sans pointer-events-none">
                  <div className="inline-flex items-center space-x-1.5 mb-0.5 text-[9.5px] uppercase tracking-[0.2em] text-[#D6B56F] font-semibold">
                    <AntiqueStar className="w-3 h-3 text-[#D6B56F]" />
                    <span>{item.badge}</span>
                  </div>

                  <h3
                    className={`font-display text-[#F5EFE5] font-normal leading-tight line-clamp-1 ${
                      isProminent ? 'text-lg sm:text-xl' : 'text-sm sm:text-base opacity-90'
                    }`}
                  >
                    {item.title}
                  </h3>

                  {isProminent && (
                    <p className="text-[11px] text-[#F5EFE5]/80 font-light font-sans line-clamp-1 mt-0.5">
                      {item.subtitle}
                    </p>
                  )}

                  {!isProminent && (
                    <span className="text-[9px] text-[#D6B56F] block mt-0.5 opacity-80">
                      Tap to bring forward &rarr;
                    </span>
                  )}
                </div>

                {/* Delicate Gold Filigree Inner Corner Accents on Prominent Card */}
                {isProminent && (
                  <div className="absolute inset-1.5 rounded-[18px] sm:rounded-[22px] border border-[#D6B56F]/25 pointer-events-none" />
                )}
              </div>
            </motion.div>
          );
        })}

        {/* Floating Golden Seal on Upper Left of Carousel */}
        <div className="absolute -top-3 -left-2 xs:-left-4 sm:-left-5 z-40 w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#193C3B] text-[#F5EFE5] p-2 flex flex-col items-center justify-center text-center shadow-2xl border-2 border-[#D6B56F] pointer-events-none">
          <AntiqueStar className="w-3 h-3 text-[#D6B56F] mb-0.5" />
          <span className="text-[7.5px] sm:text-[8.5px] uppercase tracking-[0.16em] font-semibold text-[#D6B56F] leading-tight font-sans">
            3 Disciplines
          </span>
          <span className="text-[7px] uppercase tracking-wider text-white/90 font-light font-sans">
            One Standard
          </span>

          <div className="absolute -bottom-1 -left-1.5 z-40 pointer-events-none text-[#D6B56F]">
            <GoldParticleCluster className="w-4 h-4 text-[#D6B56F]" />
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* INTERACTIVE ROTATION INDICATOR PILLS                                */}
      {/* ------------------------------------------------------------------- */}
      <div className="flex items-center justify-center space-x-2 pt-2 relative z-20">
        {HERO_CAROUSEL_IMAGES.map((item, idx) => {
          const isActive = idx === activeProminentIndex;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveProminentIndex(idx)}
              className={`group flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-sans font-medium transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-[#193C3B] text-[#F5EFE5] shadow-md dark:bg-[#D6B56F] dark:text-[#102726] font-semibold ring-1 ring-[#D6B56F]/50'
                  : 'bg-white/70 dark:bg-white/10 text-[#665C5C] dark:text-[#C8D6D5] hover:bg-white dark:hover:bg-white/20'
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
              <span>{item.purpose}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HeroVisualCollage;
