import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MapPin,
} from 'lucide-react';
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
    title: 'Heritage Vedic Vivah & Reception',
    subtitle: 'Sacred Mandap Styling, Topor-Mukut & Sacred Vows',
    location: 'Kolkata Heritage Biye Bari',
    badge: 'Bespoke Biye Bari',
    image: '/wedding-gallary/bengali-wedding-couple.jpg',
    alt: 'Royal Enterprise Heritage Bengali Wedding Planning',
    accentColor: '#D6B56F',
  },
  {
    id: 'catering',
    purpose: 'Catering',
    discipline: '02 / In-House Kitchen',
    title: 'Authentic Live Culinary Feasts',
    subtitle: 'Uniformed Chefs, Pure Kolkata Bhetki & Basanti Pulao',
    location: 'Live Cooking Stations & Banquets',
    badge: 'In-House Kitchen',
    image: '/catering-gallary/20241129_202026.jpg',
    alt: 'Royal Enterprise In-House Catering & Live Gourmet Kitchen',
    accentColor: '#D66D59',
  },
  {
    id: 'events',
    purpose: 'Events',
    discipline: '03 / Production',
    title: 'National Cultural Galas & Stagecraft',
    subtitle: 'Victoria Memorial Illumination & Symphony Arenas',
    location: 'Victoria Memorial & Premier Arenas, Kolkata',
    badge: 'Corporate & Galas',
    image: '/events-gallary/20221215_182925.jpg',
    alt: 'Royal Enterprise Event Management & Mega Stage Production',
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
  const [lightboxIndex, setLightboxIndex] = useState(null);
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
    // Pause auto-rotation if user hovers or if lightbox is open
    if (isPaused || lightboxIndex !== null) return;

    // Respect user's prefers-reduced-motion accessibility setting
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const timer = setInterval(() => {
      rotateNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, lightboxIndex, rotateNext]);

  // Keyboard accessibility for Lightbox Modal
  useEffect(() => {
    if (lightboxIndex === null) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        const next = (lightboxIndex + 1) % HERO_CAROUSEL_IMAGES.length;
        setLightboxIndex(next);
        setActiveProminentIndex(next);
      }
      if (e.key === 'ArrowLeft') {
        const prev = (lightboxIndex - 1 + HERO_CAROUSEL_IMAGES.length) % HERO_CAROUSEL_IMAGES.length;
        setLightboxIndex(prev);
        setActiveProminentIndex(prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  // ==========================================================================
  // 3D CYLINDRICAL SLOTS GEOMETRY
  // Slot 0: Upper Center (Prominent, foreground, elevated in Z)
  // Slot 1: Lower Right Flank (Offset along cylindrical curve, receding in Z)
  // Slot 2: Lower Left Flank (Offset along cylindrical curve, receding in Z)
  // ==========================================================================
  const slots = isMobile
    ? [
      // Mobile Slot 0 (Upper Center Prominent - Enhanced size)
      {
        x: 0,
        y: -46,
        z: 38,
        rotateX: -3,
        rotateY: 0,
        rotateZ: 0,
        scale: 1.14,
        opacity: 1.0,
        zIndex: 30,
        isProminent: true,
      },
      // Mobile Slot 1 (Lower Right Flank)
      {
        x: 55,
        y: 46,
        z: -28,
        rotateX: 5,
        rotateY: -15,
        rotateZ: 3,
        scale: 0.84,
        opacity: 0.86,
        zIndex: 20,
        isProminent: false,
      },
      // Mobile Slot 2 (Lower Left Flank)
      {
        x: -55,
        y: 46,
        z: -28,
        rotateX: 5,
        rotateY: 15,
        rotateZ: -3,
        scale: 0.84,
        opacity: 0.86,
        zIndex: 15,
        isProminent: false,
      },
    ]
    : [
      // Desktop Slot 0 (Upper Center Prominent - Enhanced size)
      {
        x: 0,
        y: -68,
        z: 60,
        rotateX: -4,
        rotateY: 0,
        rotateZ: 0,
        scale: 1.16,
        opacity: 1.0,
        zIndex: 30,
        isProminent: true,
      },
      // Desktop Slot 1 (Lower Right Flank)
      {
        x: 94,
        y: 62,
        z: -38,
        rotateX: 6,
        rotateY: -18,
        rotateZ: 4,
        scale: 0.76,
        opacity: 0.58,
        zIndex: 20,
        isProminent: false,
      },
      // Desktop Slot 2 (Lower Left Flank)
      {
        x: -94,
        y: 62,
        z: -38,
        rotateX: 6,
        rotateY: 18,
        rotateZ: -4,
        scale: 0.76,
        opacity: 0.78,
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
        className="relative w-full h-[415px] xs:h-[455px] sm:h-[495px] lg:h-[515px] xl:h-[535px] flex items-center justify-center"
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
              onClick={() => {
                setActiveProminentIndex(imgIndex);
                setLightboxIndex(imgIndex);
              }}
              className="absolute cursor-pointer will-change-transform group"
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
              aria-label={`Open full photograph: ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveProminentIndex(imgIndex);
                  setLightboxIndex(imgIndex);
                }
              }}
            >
              {/* Card Canvas with Elegant Image Framing & Subtle Rounded Corners */}
              <div
                className={`relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 bg-[#102726] ${isProminent
                  ? 'border-2 border-[#D6B56F] shadow-2xl shadow-[#102726]/40 dark:shadow-black/70'
                  : 'border border-[#D6B56F]/40 shadow-xl shadow-[#102726]/20 hover:border-[#D6B56F]/80'
                  }`}
              >
                {/* Photographic Artwork */}
                <CarouselCardImage src={item.image} alt={item.alt} />

                {/* Subtle natural bottom shadow for text legibility without darkening the photo */}
                <div
                  className={`absolute bottom-0 inset-x-0 h-28 sm:h-32 transition-opacity duration-500 bg-gradient-to-t pointer-events-none ${isProminent
                    ? 'from-black/75 via-black/25 to-transparent'
                    : 'from-black/80 via-black/35 to-transparent'
                    }`}
                />

                {/* Top Discipline Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white font-sans pointer-events-none">
                  <span
                    className={`inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-[0.16em] font-semibold border backdrop-blur-md ${isProminent
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

                {/* Floating Expand Icon on Hover */}
                <div className="absolute top-3.5 right-3.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/60 backdrop-blur-md text-[#D6B56F] border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md pointer-events-none z-20">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Photographic Caption & Location */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-left text-white font-sans pointer-events-none">
                  <div className="inline-flex items-center space-x-1.5 mb-0.5 text-[9.5px] uppercase tracking-[0.2em] text-[#D6B56F] font-semibold">
                    <AntiqueStar className="w-3 h-3 text-[#D6B56F]" />
                    <span>{item.badge}</span>
                  </div>

                  <h3
                    className={`font-display text-[#F5EFE5] font-normal leading-tight line-clamp-1 ${isProminent ? 'text-lg sm:text-xl' : 'text-sm sm:text-base opacity-90'
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
                    <span className="text-[9px] text-[#D6B56F] block mt-0.5 opacity-85">
                      Click to open photo &rarr;
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
              className={`group flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-sans font-medium transition-all duration-300 cursor-pointer ${isActive
                ? 'bg-[#193C3B] text-[#F5EFE5] shadow-md dark:bg-[#D6B56F] dark:text-[#102726] font-semibold ring-1 ring-[#D6B56F]/50'
                : 'bg-white/70 dark:bg-white/10 text-[#665C5C] dark:text-[#C8D6D5] hover:bg-white dark:hover:bg-white/20'
                }`}
              aria-label={`Select ${item.purpose}`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isActive
                  ? 'bg-[#D6B56F] dark:bg-[#102726] scale-125'
                  : 'bg-[#CBBFB0] group-hover:bg-[#193C3B]'
                  }`}
              />
              <span>{item.purpose}</span>
            </button>
          );
        })}
      </div>

      {/* =================================================================== */}
      {/* FULLSCREEN EDITORIAL LIGHTBOX MODAL (PORTAL TO BODY - COVERS NAVBAR) */}
      {/* =================================================================== */}
      {typeof document !== 'undefined' &&
        lightboxIndex !== null &&
        HERO_CAROUSEL_IMAGES[lightboxIndex] &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-between bg-black/95 backdrop-blur-2xl p-4 sm:p-6 py-6 sm:py-8 overflow-y-auto"
            onClick={() => setLightboxIndex(null)}
            role="dialog"
            aria-modal="true"
          >
            {/* Top Bar: Discipline Tag & High-Contrast Close Button */}
            <div
              className="w-full max-w-4xl flex items-center justify-between z-50 shrink-0 mb-3"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#102726] border border-[#D6B56F]/40 text-xs text-[#D6B56F]">
                <AntiqueStar className="w-3.5 h-3.5 text-[#D6B56F]" />
                <span className="uppercase tracking-widest font-semibold text-[10px]">
                  {HERO_CAROUSEL_IMAGES[lightboxIndex].discipline}
                </span>
              </div>

              {/* Prominent High-Contrast Close Button */}
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 text-white transition-all cursor-pointer border border-white/20 shadow-lg group"
                aria-label="Close photograph view"
              >
                <span className="text-xs font-sans tracking-wider uppercase font-medium">Close</span>
                <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
              </button>
            </div>

            {/* Previous Arrow */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                const prev = (lightboxIndex - 1 + HERO_CAROUSEL_IMAGES.length) % HERO_CAROUSEL_IMAGES.length;
                setLightboxIndex(prev);
                setActiveProminentIndex(prev);
              }}
              className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-3.5 rounded-full bg-black/70 hover:bg-[#102726] border border-white/25 hover:border-[#D6B56F] text-white transition-all cursor-pointer shadow-2xl focus:outline-none"
              aria-label="Previous photograph"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-[#D6B56F]" />
            </button>

            {/* Next Arrow */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                const next = (lightboxIndex + 1) % HERO_CAROUSEL_IMAGES.length;
                setLightboxIndex(next);
                setActiveProminentIndex(next);
              }}
              className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-3.5 rounded-full bg-black/70 hover:bg-[#102726] border border-white/25 hover:border-[#D6B56F] text-white transition-all cursor-pointer shadow-2xl focus:outline-none"
              aria-label="Next photograph"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-[#D6B56F]" />
            </button>

            {/* Central Photograph Frame with Generous Margins & Visible Gold Borders */}
            <div
              className="relative max-w-4xl w-full flex-1 flex items-center justify-center my-auto py-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[62vh] sm:max-h-[66vh] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#D6B56F]/50 bg-[#0B1C1B] shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
                <img
                  src={HERO_CAROUSEL_IMAGES[lightboxIndex].image}
                  alt={HERO_CAROUSEL_IMAGES[lightboxIndex].alt}
                  className="max-h-[62vh] sm:max-h-[66vh] w-auto max-w-full object-contain block"
                />
              </div>
            </div>

            {/* Solid High-Contrast Editorial Caption Card (100% Readable in Light & Dark Themes) */}
            <div
              className="w-full max-w-4xl bg-[#102726] border border-[#D6B56F]/40 rounded-2xl p-4 sm:p-5 shadow-2xl shrink-0 mt-3 z-50 text-left font-sans"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs text-[#D6B56F] font-semibold">
                    <MapPin className="w-3.5 h-3.5 shrink-0 text-[#D6B56F]" />
                    <span>{HERO_CAROUSEL_IMAGES[lightboxIndex].location}</span>
                    <span className="text-[#D6B56F]/50">•</span>
                    <span className="uppercase tracking-widest text-[#D6B56F]">
                      {HERO_CAROUSEL_IMAGES[lightboxIndex].purpose}
                    </span>
                  </div>
                  <h4 className="font-display text-xl sm:text-2xl text-[#F5EFE5] font-normal tracking-tight">
                    {HERO_CAROUSEL_IMAGES[lightboxIndex].title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#F5EFE5]/85 font-light">
                    {HERO_CAROUSEL_IMAGES[lightboxIndex].subtitle}
                  </p>
                </div>

                <div className="shrink-0 flex items-center space-x-3">
                  <span className="text-xs text-[#D6B56F] font-mono bg-black/50 px-3.5 py-1.5 rounded-full border border-[#D6B56F]/30">
                    {lightboxIndex + 1} of {HERO_CAROUSEL_IMAGES.length}
                  </span>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default HeroVisualCollage;
