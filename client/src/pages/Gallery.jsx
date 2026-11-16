import React, { useState, useEffect } from 'react';
import {
  Camera,
  MapPin,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Phone,
  Image as ImageIcon,
} from 'lucide-react';
import {
  BotanicalBranch,
  AntiqueStar,
  FloralCorner,
  FloatingPetal,
  MiniatureButterfly,
  BotanicalWatermark,
  GoldParticleCluster,
} from '../components/common/BotanicalDecor';
import { WhatsAppIcon } from '../components/common/SocialIcons';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/galleryData';
import { COMPANY_INFO } from '../data/mockData';
import QuickQuoteModal from '../components/layout/QuickQuoteModal';

// Category color accent helpers
const getCategoryAccent = (category) => {
  switch (category) {
    case 'Weddings':
      return {
        badgeBg: 'bg-[#D6B56F]/20 text-[#8F6B1E] dark:text-[#D6B56F] border-[#D6B56F]/40',
        dot: 'bg-[#D6B56F]',
      };
    case 'Catering':
      return {
        badgeBg: 'bg-[#D66D59]/15 text-[#B84E3A] dark:text-[#E28472] border-[#D66D59]/30',
        dot: 'bg-[#D66D59]',
      };
    case 'Events':
    default:
      return {
        badgeBg: 'bg-[#193C3B]/15 text-[#193C3B] dark:text-[#A7D1CE] border-[#193C3B]/30',
        dot: 'bg-[#193C3B] dark:bg-[#D6B56F]',
      };
  }
};

// Editorial Placeholder Canvas for items awaiting user's photographs
const GalleryCardCanvas = ({ item }) => {
  const accent = getCategoryAccent(item.category);

  if (item.image) {
    return (
      <div className="relative w-full h-full overflow-hidden bg-[#102726]">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-75 group-hover:opacity-90 transition-opacity pointer-events-none" />

        {/* Caption Overlay on Hover / Always at bottom */}
        <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-white z-10 pointer-events-none">
          <div className="flex items-center space-x-1.5 text-[10px] text-[#D6B56F] font-sans font-medium mb-0.5">
            <MapPin className="w-3 h-3 shrink-0 text-[#D6B56F]" />
            <span className="line-clamp-1">{item.location}</span>
          </div>
          <h3 className="font-display font-normal text-white leading-snug line-clamp-1 text-base sm:text-lg">
            {item.title}
          </h3>
          <p className="text-[11px] text-[#F5EFE5]/80 font-light font-sans line-clamp-1 mt-0.5">
            {item.subtitle}
          </p>
        </div>
      </div>
    );
  }

  // Bespoke Luxury Editorial Placeholder
  return (
    <div className="relative w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#FAF5ED] via-[#F4ECE0] to-[#EAE0D0] dark:from-[#143130] dark:via-[#112928] dark:to-[#0D201F] text-[#292323] dark:text-[#F5EFE5] select-none transition-colors overflow-hidden">
      {/* Corner Filigree Flourishes */}
      <div className="absolute top-2 left-2 pointer-events-none opacity-40 dark:opacity-30 text-[#D6B56F]">
        <FloralCorner className="w-10 h-10" />
      </div>
      <div className="absolute bottom-2 right-2 pointer-events-none opacity-40 dark:opacity-30 text-[#D6B56F] rotate-180">
        <FloralCorner className="w-10 h-10" />
      </div>

      {/* Subtle Background Geometry */}
      <div className="absolute inset-3 rounded-xl border border-dashed border-[#D6B56F]/30 dark:border-[#D6B56F]/20 pointer-events-none" />

      {/* Top Header: Category Tag & Placeholder Badge */}
      <div className="relative z-10 flex items-center justify-between">
        <span
          className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.18em] font-semibold border ${accent.badgeBg} font-sans`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
          <span>{item.category}</span>
        </span>

        <span className="text-[9px] uppercase tracking-wider text-[#665C5C] dark:text-[#C8D6D5] font-mono bg-white/60 dark:bg-black/25 px-2 py-0.5 rounded border border-[#E8DFD3] dark:border-white/10">
          Placeholder
        </span>
      </div>

      {/* Center Icon & Dimension Note */}
      <div className="relative z-10 my-auto py-5 text-center flex flex-col items-center justify-center">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#D6B56F]/50 bg-white/80 dark:bg-black/40 flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 group-hover:border-[#D6B56F] transition-all duration-300">
          <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-[#D6B56F]" />
        </div>
        <span className="font-mono text-[9.5px] sm:text-[10px] uppercase tracking-wider text-[#8C8282] dark:text-[#A7D1CE]/80">
          {item.placeholderNote}
        </span>
      </div>

      {/* Bottom Information */}
      <div className="relative z-10 pt-2 border-t border-[#D6B56F]/20 text-left">
        <div className="flex items-center space-x-1.5 text-[10px] text-[#D66D59] dark:text-[#D6B56F] font-sans font-medium mb-0.5">
          <MapPin className="w-3 h-3 shrink-0" />
          <span className="line-clamp-1">{item.location}</span>
        </div>
        <h3 className="font-display font-normal text-[#193C3B] dark:text-[#F5EFE5] leading-snug line-clamp-1 text-base sm:text-lg">
          {item.title}
        </h3>
        <p className="text-[11px] text-[#665C5C] dark:text-[#C8D6D5] font-light font-sans line-clamp-1 mt-0.5">
          {item.subtitle}
        </p>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredItems =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  // Keyboard accessibility for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <div className="min-h-screen bg-[#F5EFE5] dark:bg-[#102726] text-[#292323] dark:text-[#F5EFE5] transition-colors pt-24 sm:pt-28 pb-16 sm:pb-24">
      {/* ======================================================================= */}
      {/* 01. EDITORIAL PAGE HERO BANNER */}
      {/* ======================================================================= */}
      <section className="relative overflow-hidden border-b border-[#E8DFD3] dark:border-[#244C4A] pb-14 sm:pb-18">
        {/* Botanical Flourishes */}
        <div className="absolute top-0 right-0 pointer-events-none opacity-20 dark:opacity-10 text-[#193C3B] dark:text-[#D6B56F] translate-x-12 -translate-y-8">
          <BotanicalBranch className="w-72 h-72" rotate={-25} />
        </div>
        <div className="absolute bottom-0 left-0 pointer-events-none opacity-10 dark:opacity-5 text-[#193C3B] dark:text-[#D6B56F] -translate-x-16 translate-y-12">
          <BotanicalWatermark className="w-80 h-80" rotate={35} />
        </div>

        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 relative z-10">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.24em] font-semibold text-[#D66D59] dark:text-[#D6B56F] font-sans">
              <AntiqueStar className="w-3.5 h-3.5 text-[#D6B56F]" />
              <span>Curated Visual Portfolio • Est. 2014</span>
              <MiniatureButterfly className="w-4 h-4 text-[#D6B56F] inline-block ml-1" rotate={10} />
            </div>

            {/* Requested Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#292323] dark:text-[#F5EFE5] font-normal tracking-tight leading-[1.08]">
              A Glimpse of Our{' '}
              <span className="italic font-display text-[#193C3B] dark:text-[#D6B56F]">
                Celebrations.
              </span>
              <span className="inline-block ml-3 align-middle pointer-events-none">
                <FloatingPetal className="w-6 h-6 text-[#D66D59]" rotate={18} variant="single" />
              </span>
            </h1>

            {/* Short Elegant Subtitle */}
            <p className="text-base sm:text-lg text-[#665C5C] dark:text-[#C8D6D5] font-light leading-relaxed font-sans pt-1">
              Explore authentic glimpses across our three craft pillars: Vedic rajbari mandaps, immersive corporate gala stagecraft, and in-house live culinary feasts across Kolkata and Eastern India.
            </p>
          </div>

          {/* Three Craft Stats Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 max-w-2xl font-sans">
            <div className="p-4 rounded-xl bg-white/70 dark:bg-[#143130] border border-[#E8DFD3] dark:border-[#244C4A] shadow-sm">
              <div className="text-xs uppercase tracking-widest text-[#D6B56F] font-semibold">01. Weddings</div>
              <div className="text-sm font-medium text-[#193C3B] dark:text-[#F5EFE5] mt-0.5">Heritage Mandaps & Biye Bari</div>
            </div>
            <div className="p-4 rounded-xl bg-white/70 dark:bg-[#143130] border border-[#E8DFD3] dark:border-[#244C4A] shadow-sm">
              <div className="text-xs uppercase tracking-widest text-[#193C3B] dark:text-[#A7D1CE] font-semibold">02. Events</div>
              <div className="text-sm font-medium text-[#193C3B] dark:text-[#F5EFE5] mt-0.5">Conferences, Summits & Galas</div>
            </div>
            <div className="p-4 rounded-xl bg-white/70 dark:bg-[#143130] border border-[#E8DFD3] dark:border-[#244C4A] shadow-sm">
              <div className="text-xs uppercase tracking-widest text-[#D66D59] font-semibold">03. Catering</div>
              <div className="text-sm font-medium text-[#193C3B] dark:text-[#F5EFE5] mt-0.5">In-House Live Gourmet Kitchens</div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* 02. GALLERY FILTER BAR & ASYMMETRICAL EDITORIAL GRID */}
      {/* ======================================================================= */}
      <section className="max-w-[1320px] mx-auto px-5 sm:px-8 pt-12 sm:pt-16">

        {/* Category Filters Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-[#E8DFD3]/80 dark:border-[#244C4A]/80 font-sans">
          <div className="flex flex-wrap items-center gap-2">
            {GALLERY_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count =
                cat === 'All'
                  ? GALLERY_ITEMS.length
                  : GALLERY_ITEMS.filter((item) => item.category === cat).length;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center space-x-2 text-xs uppercase tracking-[0.14em] font-medium px-4 sm:px-5 py-2.5 rounded-lg transition-all duration-300 cursor-pointer ${isSelected
                      ? 'bg-[#193C3B] text-white shadow-md dark:bg-[#D6B56F] dark:text-[#102726] font-semibold'
                      : 'bg-white/80 dark:bg-[#143130] text-[#665C5C] dark:text-[#C8D6D5] border border-[#E8DFD3] dark:border-[#244C4A] hover:border-[#193C3B] dark:hover:border-[#D6B56F]'
                    }`}
                  aria-pressed={isSelected}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected
                        ? 'bg-white/20 dark:bg-black/20 text-white dark:text-[#102726]'
                        : 'bg-[#E8DFD3] dark:bg-black/30 text-[#665C5C] dark:text-[#C8D6D5]'
                      }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-xs text-[#8C8282] dark:text-[#A7D1CE]/70 font-mono">
            Showing {filteredItems.length} photograph {filteredItems.length === 1 ? 'slot' : 'slots'}
          </div>
        </div>

        {/* Responsive Balanced Gallery Grid (Compact & Short) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 items-stretch">
          {filteredItems.map((item, idx) => {
            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E8DFD3] dark:border-[#244C4A] bg-[#FAF5ED] dark:bg-[#143130] shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col"
                tabIndex={0}
                role="button"
                aria-label={`Open ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setLightboxIndex(idx);
                  }
                }}
              >
                <div className="relative aspect-[4/3] w-full h-full overflow-hidden">
                  <GalleryCardCanvas item={item} />

                  {/* Floating View Icon Hover Overlay */}
                  <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-[#D6B56F] border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ======================================================================= */}
      {/* 03. CONSULTATION / INVITATION CTA */}
      {/* ======================================================================= */}
      <section className="max-w-[1320px] mx-auto px-5 sm:px-8 pt-16 sm:pt-20">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#193C3B] via-[#143130] to-[#0D201F] text-[#F5EFE5] p-8 sm:p-14 overflow-hidden shadow-2xl border border-[#D6B56F]/30">
          <div className="absolute top-0 right-0 pointer-events-none opacity-20 text-[#D6B56F] translate-x-12 -translate-y-12">
            <BotanicalBranch className="w-64 h-64" rotate={-10} />
          </div>

          <div className="relative z-10 max-w-2xl space-y-4 text-left">
            <span className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-[0.2em] text-[#D6B56F] font-semibold font-sans">
              <AntiqueStar className="w-3.5 h-3.5 text-[#D6B56F]" />
              <span>Let's Create Your Next Memory</span>
            </span>

            <h2 className="font-display text-3xl sm:text-4xl text-white font-normal leading-tight">
              Envisioning a wedding, stage gala, or grand culinary feast?
            </h2>

            <p className="text-sm sm:text-base text-[#F5EFE5]/80 font-light font-sans leading-relaxed">
              Every celebration photographed in our archives was planned, decorated, and served by our in-house master team. Talk directly with our founder and culinary directors.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3 font-sans">
              <button
                type="button"
                onClick={() => setIsQuoteOpen(true)}
                className="bg-[#D66D59] hover:bg-[#c55d4a] text-white px-7 py-3 rounded-xl font-semibold text-xs tracking-wider uppercase shadow-lg transition-all flex items-center space-x-2 cursor-pointer"
              >
                <span>Plan Your Event</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20an%20event.`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-xl font-semibold text-xs tracking-wider uppercase shadow-lg transition-all flex items-center space-x-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="border border-white/20 hover:border-[#D6B56F] hover:text-[#D6B56F] text-white px-6 py-3 rounded-xl font-medium text-xs tracking-wider uppercase transition-colors flex items-center space-x-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#D6B56F]" />
                <span>{COMPANY_INFO.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* 04. FULLSCREEN EDITORIAL LIGHTBOX MODAL */}
      {/* ======================================================================= */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-lg p-4 sm:p-6 transition-opacity"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer focus:outline-none"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer focus:outline-none"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            className="relative max-w-4xl w-full flex flex-col items-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full max-h-[75vh] flex items-center justify-center rounded-2xl overflow-hidden border border-white/15 bg-[#143130] shadow-2xl">
              {filteredItems[lightboxIndex].image ? (
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />
              ) : (
                <div className="p-12 sm:p-20 text-center flex flex-col items-center justify-center text-[#F5EFE5]">
                  <div className="w-16 h-16 rounded-full border border-[#D6B56F] flex items-center justify-center mb-4 bg-white/5">
                    <ImageIcon className="w-8 h-8 text-[#D6B56F]" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#D6B56F] font-semibold mb-1">
                    {filteredItems[lightboxIndex].category} Photography Slot
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-white font-normal mb-2">
                    {filteredItems[lightboxIndex].title}
                  </h3>
                  <p className="text-sm text-[#F5EFE5]/80 max-w-md font-light font-sans mb-4">
                    {filteredItems[lightboxIndex].subtitle}
                  </p>
                  <span className="font-mono text-xs px-3 py-1 rounded bg-black/40 border border-white/10 text-white/70">
                    {filteredItems[lightboxIndex].placeholderNote}
                  </span>
                </div>
              )}
            </div>

            {/* Lightbox Footer Caption */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-white font-sans px-2">
              <div className="text-center sm:text-left space-y-0.5">
                <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs text-[#D6B56F]">
                  <MapPin className="w-3 h-3" />
                  <span>{filteredItems[lightboxIndex].location}</span>
                  <span>•</span>
                  <span className="uppercase tracking-wider font-semibold">
                    {filteredItems[lightboxIndex].category}
                  </span>
                </div>
                <h4 className="font-display text-lg sm:text-xl text-white font-normal">
                  {filteredItems[lightboxIndex].title}
                </h4>
              </div>

              <div className="text-xs text-white/60 font-mono bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                {lightboxIndex + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Quick Quote Modal */}
      <QuickQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
};

export default Gallery;

