import React from 'react';
import { TESTIMONIALS, REAL_WEDDINGS } from '../../data/mockData';
import { MapPin, Users, Sparkles } from 'lucide-react';
import {
  BotanicalBranch,
  AntiqueStar,
  FloatingPetal,
  FloralLineArt,
  GoldParticleCluster,
  BotanicalWatermark,
} from '../common/BotanicalDecor';

const ClientReviews = () => {
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
                Real Weddings & Events by Royal Enterprise
              </h3>
            </div>
            <span className="text-xs sm:text-sm text-[#8C8282] dark:text-[#8FA4A3] font-sans max-w-md">
              Real celebrations across Kolkata rajbaris, heritage lawns & hotel ballrooms
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REAL_WEDDINGS.map((w, idx) => (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden bg-[#F5EFE5] dark:bg-[#102726] border border-[#E8DFD3] dark:border-[#244C4A] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Hero Photo */}
                  <div className="relative h-60 sm:h-64 overflow-hidden bg-stone-200 dark:bg-stone-800">
                    <img
                      src={w.mainImage}
                      alt={`${w.couple} at ${w.location}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#193C3B]/90 text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-md border border-[#D6B56F]/30 font-sans">
                      {w.category}
                    </div>
                  </div>

                  {/* 2 Side-by-side Thumbnails */}
                  <div className="grid grid-cols-2 gap-1.5 p-1.5 bg-[#ECE3D5] dark:bg-[#143130]">
                    <div className="h-24 overflow-hidden rounded-lg">
                      <img
                        src={w.thumb1}
                        alt={`${w.couple} moment`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative h-24 overflow-hidden rounded-lg">
                      <img
                        src={w.thumb2}
                        alt={`${w.couple} celebration`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] flex flex-col items-center justify-center text-white text-xs font-semibold font-sans">
                        <span className="text-sm font-bold">{w.photoCount}</span>
                        <span className="text-[10px] font-light text-white/80">Archived</span>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6 font-sans space-y-3">
                    <h4 className="font-display text-2xl text-[#292323] dark:text-[#F5EFE5]">
                      {w.couple}
                    </h4>
                    
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
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ClientReviews;
