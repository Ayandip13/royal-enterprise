import React, { useState, useEffect } from 'react';
import { Plus, X, ChevronLeft, ChevronRight, MapPin, Eye } from 'lucide-react';
import {
  BotanicalBranch,
  AntiqueStar,
  FloralCorner,
  FloatingPetal,
  MiniatureButterfly,
  BotanicalWatermark,
} from '../common/BotanicalDecor';

const PortfolioGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Curated portfolio assets from existing project imagery
  const galleryItems = [
    {
      id: 1,
      title: 'Grand Gala Runway & Stage Architecture',
      category: 'Stages & Production',
      image: '/images/hero-stage.png',
      location: 'Kolkata Hotel Ballroom',
      featured: true,
      ratio: 'aspect-[16/10] lg:aspect-[16/11]',
    },
    {
      id: 2,
      title: 'Traditional Vedic Mandap & Bridal Florals',
      category: 'Weddings',
      image: '/images/bengali-wedding-couple.jpg',
      location: 'Heritage Rajbari Courtyard',
      featured: false,
      ratio: 'aspect-[16/9]',
      position: 'object-center',
    },
    {
      id: 3,
      title: 'Gourmet In-House Banquet Spread',
      category: 'Banquets & Catering',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
      location: 'Executive Dining Setup',
      featured: false,
      ratio: 'aspect-[16/10]',
      position: 'object-center',
    },
    {
      id: 4,
      title: '3D LED Stage Fabrication & Acoustic Concert Sound',
      category: 'Stages & Production',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      location: 'Convention Center, Kolkata',
      featured: false,
      ratio: 'aspect-[16/10]',
    },
    {
      id: 5,
      title: 'Romantic Evening Floral Canopy & Ambience',
      category: 'Weddings',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      location: 'Lawn Pavilion',
      featured: false,
      ratio: 'aspect-[4/5]',
    },
    {
      id: 6,
      title: 'Grand Chandelier Ballroom Reception',
      category: 'Weddings',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
      location: 'Five-Star Banquet Hall',
      featured: false,
      ratio: 'aspect-[16/9]',
    },
    {
      id: 7,
      title: 'Outdoor Festive Lanterns & Dining Pathway',
      category: 'Banquets & Catering',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
      location: 'Open Garden Grounds',
      featured: false,
      ratio: 'aspect-[3/4]',
    },
    {
      id: 8,
      title: 'Sacred Ritual Mandap Setup',
      category: 'Weddings',
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80',
      location: 'Traditional Biye Bari',
      featured: false,
      ratio: 'aspect-[4/5]',
    },
  ];

  const categories = ['All', 'Weddings', 'Banquets & Catering', 'Stages & Production'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  // Keyboard navigation for Lightbox
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
    <section className="py-16 sm:py-24 bg-[#F5EFE5] dark:bg-[#102726] border-b border-[#E8DFD3] dark:border-[#244C4A] transition-colors relative overflow-hidden">
      {/* Decorative Botanical Flourish & Watermark */}
      <div className="absolute top-1/4 -right-12 pointer-events-none opacity-20 dark:opacity-10 text-[#193C3B] dark:text-[#D6B56F]">
        <BotanicalBranch className="w-56 h-56" rotate={-15} />
      </div>
      <div className="absolute -bottom-16 -left-16 pointer-events-none opacity-5 dark:opacity-5 text-[#193C3B] dark:text-[#D6B56F]">
        <BotanicalWatermark className="w-72 h-72" rotate={45} />
      </div>

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.24em] font-semibold text-[#D66D59] dark:text-[#D6B56F] font-sans">
              <AntiqueStar className="w-3.5 h-3.5 text-[#D6B56F]" />
              <span>Visual Journal • Curated Moments</span>
              <MiniatureButterfly className="w-4 h-4 text-[#D6B56F] inline-block ml-1" rotate={10} />
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#292323] dark:text-[#F5EFE5] font-normal tracking-tight leading-[1.08]">
              Capturing Moments of <br />
              <span className="italic font-display text-[#193C3B] dark:text-[#D6B56F]">
                Grandeur & Intimacy.
              </span>
              <span className="inline-block ml-3 align-middle pointer-events-none">
                <FloatingPetal className="w-6 h-6 text-[#D66D59]" rotate={18} variant="single" />
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#665C5C] dark:text-[#C8D6D5] font-light leading-relaxed font-sans">
              An editorial look through our recent event stagecraft, bespoke mandap styling, and live culinary spreads.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 font-sans">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs uppercase tracking-[0.14em] font-medium px-4 py-2.5 rounded-lg transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#193C3B] text-white shadow-md'
                    : 'bg-white/80 dark:bg-[#143130] text-[#665C5C] dark:text-[#C8D6D5] border border-[#E8DFD3] dark:border-[#244C4A] hover:border-[#193C3B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ======================================================================= */}
        {/* EDITORIAL WEDDING & EVENT JOURNAL GRID (SEAMLESS & GAP-FREE) */}
        {/* ======================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {filteredItems.map((item, idx) => {
            // First 2 items get prominent 6-column editorial stage; subsequent items take 4 columns
            const isTopFeature = filteredItems.length > 2 ? idx < 2 : true;
            const colSpan = isTopFeature ? 'sm:col-span-2 lg:col-span-6' : 'sm:col-span-1 lg:col-span-4';
            const aspectClass = isTopFeature ? 'aspect-[16/10]' : 'aspect-[4/3]';

            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className={`${colSpan} group relative rounded-2xl overflow-hidden border border-[#E8DFD3] dark:border-[#244C4A] bg-[#FAF5ED] dark:bg-[#143130] shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer`}
              >
                <div className={`relative ${aspectClass} overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover ${item.position || 'object-center'} group-hover:scale-105 transition-transform duration-700 ease-out`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                  {/* Top Badge for Featured Items */}
                  {(item.featured || isTopFeature) && (
                    <div className="absolute top-4 left-4 bg-[#193C3B]/90 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10.5px] uppercase tracking-wider font-semibold border border-[#D6B56F]/40 font-sans">
                      {idx === 0 ? 'Featured Cover' : idx === 1 ? 'Heritage Wedding' : 'Curated'}
                    </div>
                  )}

                  {/* Floating View Icon on Hover */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md text-[#D6B56F] border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Eye className="w-4 h-4" />
                  </div>

                  {/* Bottom Editorial Caption */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 text-white font-sans space-y-1">
                    <div className="flex items-center space-x-2 text-xs text-[#D6B56F]">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{item.location}</span>
                      <span>•</span>
                      <span className="uppercase tracking-wider">{item.category}</span>
                    </div>
                    <h3 className={`font-display text-white font-normal leading-snug ${isTopFeature ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'}`}>
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal (Keyboard Navigation + Clean Editorial Frame) */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
          {/* Close button */}
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
              );
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl border border-white/20"
            />
            <div className="mt-4 text-center text-white font-sans space-y-1">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D6B56F] font-semibold block">
                {filteredItems[lightboxIndex].category} • {filteredItems[lightboxIndex].location}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-white font-normal">
                {filteredItems[lightboxIndex].title}
              </h3>
              <span className="text-xs text-white/50 block font-mono">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioGallery;
