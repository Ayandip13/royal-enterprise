import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { TESTIMONIALS, REAL_WEDDINGS } from '../../data/mockData';
import {
  MapPin,
  Users,
  Sparkles,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Eye,
} from 'lucide-react';
import {
  BotanicalBranch,
  AntiqueStar,
  FloatingPetal,
  FloralLineArt,
  GoldParticleCluster,
  BotanicalWatermark,
} from '../common/BotanicalDecor';

const ClientReviews = () => {
  // Collect all individual photos from the real celebration cards for Lightbox
  const allCelebrationPhotos = REAL_WEDDINGS.flatMap((w) => [
    {
      image: w.mainImage,
      title: w.mainTitle || w.couple,
      subtitle: w.mainSubtitle || w.location,
      category: w.category,
      location: w.location,
      link: w.link,
    },
    {
      image: w.thumb1,
      title: w.thumb1Title || `${w.couple} - Highlight 1`,
      subtitle: w.thumb1Subtitle || w.location,
      category: w.category,
      location: w.location,
      link: w.link,
    },
    {
      image: w.thumb2,
      title: w.thumb2Title || `${w.couple} - Highlight 2`,
      subtitle: w.thumb2Subtitle || w.location,
      category: w.category,
      location: w.location,
      link: w.link,
    },
  ]);

  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') setActivePhotoIndex(null);
      if (e.key === 'ArrowLeft') {
        setActivePhotoIndex(
          (prev) => (prev - 1 + allCelebrationPhotos.length) % allCelebrationPhotos.length
        );
      }
      if (e.key === 'ArrowRight') {
        setActivePhotoIndex((prev) => (prev + 1) % allCelebrationPhotos.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, allCelebrationPhotos.length]);
  return (
    <section className="py-16 sm:py-24 bg-[#FAF5ED] dark:bg-[#143130] border-b border-[#E8DFD3] dark:border-[#244C4A] transition-colors relative overflow-hidden">
      {/* Decorative Botanical Flourish & Watermark */}
      <div className="absolute top-10 right-6 pointer-events-none opacity-20 dark:opacity-10 text-[#193C3B] dark:text-[#D6B56F]">
        <BotanicalBranch className="w-56 h-56" rotate={-45} />
      </div>
      <div className="absolute -bottom-16 -right-16 pointer-events-none opacity-5 dark:opacity-5 text-[#193C3B] dark:text-[#D6B56F]">
        <BotanicalWatermark className="w-72 h-72" rotate={-15} />
      </div>

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 space-y-16 sm:space-y-24">
        
        {/* ======================================================================= */}
        {/* EDITORIAL QUOTES HEADER */}
        {/* ======================================================================= */}
        <div className="max-w-3xl space-y-4 text-left">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.24em] font-semibold text-[#D66D59] dark:text-[#D6B56F] font-sans">
            <AntiqueStar className="w-3.5 h-3.5 text-[#D6B56F]" />
            <span>Stories from Kolkata families</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#292323] dark:text-[#F5EFE5] font-normal tracking-tight leading-[1.08]">
            What families say after the <br />
            <span className="italic font-display text-[#193C3B] dark:text-[#D6B56F]">
              last plate is cleared.
            </span>
            <span className="inline-block ml-3 align-middle pointer-events-none">
              <FloatingPetal className="w-6 h-6 text-[#D66D59]" rotate={30} variant="pair" />
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#665C5C] dark:text-[#C8D6D5] font-light leading-relaxed font-sans">
            Real weddings and celebrations we had the honor of planning and cooking for across Kolkata.
          </p>
        </div>

        {/* ======================================================================= */}
        {/* LITERARY EDITORIAL TESTIMONIAL COMPOSITION */}
        {/* ======================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="relative p-8 sm:p-9 rounded-2xl bg-[#F5EFE5] dark:bg-[#102726] border border-[#E8DFD3] dark:border-[#244C4A] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Subtle botanical corner accent per card */}
              <div className="absolute top-5 right-5 pointer-events-none">
                {idx === 0 && <FloatingPetal className="w-5 h-5 text-[#D66D59]/35" rotate={25} variant="single" />}
                {idx === 1 && <GoldParticleCluster className="w-5 h-5 text-[#D6B56F]" />}
                {idx === 2 && <FloralLineArt className="w-5 h-5 text-[#D6B56F]/40" rotate={10} />}
              </div>
              {/* Giant antique quote mark */}
              <div className="space-y-4">
                <span className="font-display text-6xl text-[#D6B56F]/40 leading-none select-none block -mb-4">
                  “
                </span>

                <p className="font-display text-xl sm:text-2xl text-[#292323] dark:text-[#F5EFE5] font-normal italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Event Metadata */}
              <div className="pt-6 mt-8 border-t border-[#E8DFD3] dark:border-[#244C4A] space-y-1.5 font-sans">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-sm sm:text-base text-[#193C3B] dark:text-[#D6B56F]">
                    {t.name}
                  </h4>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#D66D59]/10 text-[#D66D59]">
                    {t.guests}
                  </span>
                </div>

                <div className="flex items-center space-x-1.5 text-xs text-[#665C5C] dark:text-[#C8D6D5]">
                  <MapPin className="w-3.5 h-3.5 text-[#D6B56F] shrink-0" />
                  <span>{t.venue}</span>
                </div>

                <span className="text-[11px] text-[#8C8282] dark:text-[#8FA4A3] block">
                  {t.event}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ======================================================================= */}
        {/* REAL CELEBRATIONS JOURNAL CATALOG */}
        {/* ======================================================================= */}
        <div className="pt-12 border-t border-[#E8DFD3] dark:border-[#244C4A] space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#D66D59] dark:text-[#D6B56F] block font-sans">
                Real Celebrations
              </span>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#292323] dark:text-[#F5EFE5]">
                Real Weddings, Events &amp; Feasts by Royal Enterprise
              </h3>
            </div>
            <div className="flex flex-col sm:items-end gap-2 shrink-0">
              <span className="text-xs sm:text-sm text-[#8C8282] dark:text-[#8FA4A3] font-sans max-w-md">
                Live moments captured across Kolkata rajbaris, premier auditoriums &amp; banquet halls
              </span>
              <Link
                to="/gallery"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#D66D59] dark:text-[#D6B56F] hover:underline"
              >
                <span>Explore Full Celebration Gallery (22 Photos)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REAL_WEDDINGS.map((w, idx) => {
              const cardBaseIdx = idx * 3;
              return (
                <div
                  key={idx}
                  className="group rounded-2xl overflow-hidden bg-[#F5EFE5] dark:bg-[#102726] border border-[#E8DFD3] dark:border-[#244C4A] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
                >
                  <div>
                    {/* Hero Photo - Clickable to open full high-res image */}
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => setActivePhotoIndex(cardBaseIdx)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActivePhotoIndex(cardBaseIdx);
                        }
                      }}
                      className="relative h-60 sm:h-64 overflow-hidden bg-stone-200 dark:bg-stone-800 cursor-pointer group/hero"
                      title="Click to view full photograph"
                    >
                      <img
                        src={w.mainImage}
                        alt={`${w.couple} at ${w.location}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/hero:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-[#193C3B]/90 text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-md border border-[#D6B56F]/30 font-sans pointer-events-none z-10">
                        {w.category}
                      </div>

                      {/* Hover overlay hint */}
                      <div className="absolute inset-0 bg-black/0 group-hover/hero:bg-black/35 transition-colors flex items-center justify-center pointer-events-none">
                        <div className="opacity-0 group-hover/hero:opacity-100 transition-opacity bg-black/60 text-white px-3 py-1.5 rounded-full backdrop-blur-sm flex items-center space-x-1.5 text-xs font-semibold shadow-lg">
                          <Eye className="w-3.5 h-3.5 text-[#D6B56F]" />
                          <span>View Photo</span>
                        </div>
                      </div>
                    </div>

                    {/* 2 Side-by-side Thumbnails - Each individually clickable */}
                    <div className="grid grid-cols-2 gap-1.5 p-1.5 bg-[#ECE3D5] dark:bg-[#143130]">
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => setActivePhotoIndex(cardBaseIdx + 1)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setActivePhotoIndex(cardBaseIdx + 1);
                          }
                        }}
                        className="h-24 overflow-hidden rounded-lg cursor-pointer relative group/t1"
                        title="Click to view full photograph"
                      >
                        <img
                          src={w.thumb1}
                          alt={`${w.couple} highlight 1`}
                          className="w-full h-full object-cover group-hover/t1:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/t1:bg-black/35 transition-colors flex items-center justify-center pointer-events-none">
                          <Eye className="w-4 h-4 text-[#D6B56F] opacity-0 group-hover/t1:opacity-100 transition-opacity" />
                        </div>
                      </div>

                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => setActivePhotoIndex(cardBaseIdx + 2)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setActivePhotoIndex(cardBaseIdx + 2);
                          }
                        }}
                        className="relative h-24 overflow-hidden rounded-lg cursor-pointer group/t2"
                        title="Click to view full photograph"
                      >
                        <img
                          src={w.thumb2}
                          alt={`${w.couple} highlight 2`}
                          className="w-full h-full object-cover group-hover/t2:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] group-hover/t2:bg-black/75 transition-colors flex flex-col items-center justify-center text-white text-xs font-semibold font-sans pointer-events-none">
                          <Eye className="w-4 h-4 text-[#D6B56F] mb-1" />
                          <span className="text-[11px] font-bold">{w.photoCount}</span>
                          <span className="text-[9px] font-light text-white/80">Click to View</span>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-6 font-sans space-y-3">
                      <Link
                        to={w.link || '/gallery'}
                        className="font-display text-2xl text-[#292323] dark:text-[#F5EFE5] hover:text-[#D66D59] dark:hover:text-[#D6B56F] transition-colors block"
                      >
                        {w.couple}
                      </Link>
                      
                      <div className="flex items-center space-x-1.5 text-xs text-[#193C3B] dark:text-[#D6B56F] font-medium">
                        <MapPin className="w-3.5 h-3.5 text-[#D66D59] shrink-0" />
                        <span>{w.location}</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#E8DFD3] dark:border-[#244C4A]">
                        {w.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10.5px] bg-[#FAF5ED] dark:bg-[#143130] border border-[#E8DFD3] dark:border-[#244C4A] px-2.5 py-1 rounded-full text-[#665C5C] dark:text-[#C8D6D5]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2">
                        <Link
                          to={w.link || '/gallery'}
                          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#D66D59] dark:text-[#D6B56F] hover:underline"
                        >
                          <span>Explore in Gallery ({w.photoCount})</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* ======================================================================= */}
      {/* FULLSCREEN REAL CELEBRATION LIGHTBOX MODAL */}
      {/* ======================================================================= */}
      {activePhotoIndex !== null &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/92 backdrop-blur-md p-3 sm:p-6 transition-opacity"
            onClick={() => setActivePhotoIndex(null)}
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActivePhotoIndex(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Arrow */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActivePhotoIndex(
                  (prev) => (prev - 1 + allCelebrationPhotos.length) % allCelebrationPhotos.length
                );
              }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer focus:outline-none"
              aria-label="Previous photograph"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Arrow */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActivePhotoIndex((prev) => (prev + 1) % allCelebrationPhotos.length);
              }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer focus:outline-none"
              aria-label="Next photograph"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content Container */}
            <div
              className="relative max-w-4xl w-full flex flex-col items-center space-y-3 sm:space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full max-h-[72vh] flex items-center justify-center rounded-2xl overflow-hidden border border-white/15 bg-[#102726] shadow-2xl">
                <img
                  src={allCelebrationPhotos[activePhotoIndex].image}
                  alt={allCelebrationPhotos[activePhotoIndex].title}
                  className="max-h-[72vh] w-auto max-w-full object-contain"
                />
              </div>

              {/* Distinct High-Contrast Caption Card */}
              <div className="w-full bg-[#102726] border border-[#D6B56F]/40 rounded-xl px-5 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white shadow-xl">
                <div className="space-y-1 text-left">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#D6B56F]/20 text-[#D6B56F] border border-[#D6B56F]/40">
                      {allCelebrationPhotos[activePhotoIndex].category}
                    </span>
                    <span className="text-white/40 text-xs">•</span>
                    <span className="text-xs text-[#F5EFE5]/75 font-sans flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-[#D66D59]" />
                      <span>{allCelebrationPhotos[activePhotoIndex].location}</span>
                    </span>
                  </div>
                  <h4 className="font-display text-lg sm:text-xl text-[#F5EFE5]">
                    {allCelebrationPhotos[activePhotoIndex].title}
                  </h4>
                  <p className="text-xs text-[#F5EFE5]/70 font-light font-sans">
                    {allCelebrationPhotos[activePhotoIndex].subtitle}
                  </p>
                </div>

                <div className="flex items-center justify-between sm:justify-end space-x-4 shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-white/10">
                  <span className="font-mono text-xs text-[#D6B56F]">
                    {activePhotoIndex + 1} / {allCelebrationPhotos.length}
                  </span>
                  <Link
                    to={allCelebrationPhotos[activePhotoIndex].link || '/gallery'}
                    onClick={() => setActivePhotoIndex(null)}
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#D6B56F] hover:text-white transition-colors"
                  >
                    <span>View in Gallery</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default ClientReviews;
