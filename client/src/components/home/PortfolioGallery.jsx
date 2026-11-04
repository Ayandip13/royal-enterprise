import React, { useState, useEffect } from 'react';
import { Plus, X, ChevronLeft, ChevronRight, MapPin, Eye } from 'lucide-react';
import { BotanicalBranch, AntiqueStar, FloralCorner } from '../common/BotanicalDecor';

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
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
      location: 'Heritage Rajbari Courtyard',
      featured: false,
      ratio: 'aspect-[3/4]',
    },
    {
      id: 3,
      title: 'Gourmet In-House Banquet Spread',
      category: 'Banquets & Catering',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
      location: 'Executive Dining Setup',
      featured: false,
      ratio: 'aspect-[4/5]',
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
      {/* Decorative Botanical Flourish */}
      <div className="absolute top-1/4 -right-12 pointer-events-none opacity-20 dark:opacity-10 text-[#193C3B] dark:text-[#D6B56F]">
        <BotanicalBranch className="w-56 h-56" rotate={-15} />
      </div>

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.24em] font-semibold text-[#D66D59] dark:text-[#D6B56F] font-sans">
              <AntiqueStar className="w-3.5 h-3.5 text-[#D6B56F]" />
              <span>Visual Journal • Curated Moments</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#292323] dark:text-[#F5EFE5] font-normal tracking-tight leading-[1.08]">
              Capturing Moments of <br />
              <span className="italic font-display text-[#193C3B] dark:text-[#D6B56F]">
                Grandeur & Intimacy.
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
        {/* ASYMMETRIC WEDDING JOURNAL COLLAGE */}
        {/* ======================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Featured Large Photograph (Takes 7 columns on desktop) */}
          {filteredItems[0] && (
            <div
              onClick={() => setLightboxIndex(0)}
              className="md:col-span-7 group relative rounded-2xl overflow-hidden border border-[#E8DFD3] dark:border-[#244C4A] bg-[#FAF5ED] dark:bg-[#143130] shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden">
                <img
                  src={filteredItems[0].image}
                  alt={filteredItems[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 bg-[#193C3B]/90 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10.5px] uppercase tracking-wider font-semibold border border-[#D6B56F]/40 font-sans">
                  Featured Cover
                </div>

                {/* Floating View Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md text-[#D6B56F] border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Bottom Editorial Caption */}
                <div className="absolute bottom-5 left-5 right-5 text-white font-sans space-y-1.5">
                  <div className="flex items-center space-x-2 text-xs text-[#D6B56F]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{filteredItems[0].location}</span>
                    <span>•</span>
                    <span className="uppercase tracking-wider">{filteredItems[0].category}</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl text-white font-normal">
                    {filteredItems[0].title}
                  </h3>
                </div>
              </div>
            </div>
          )}

          {/* Staggered Secondary Column (Takes 5 columns on desktop) */}
          <div className="md:col-span-5 space-y-6">
            {filteredItems.slice(1, 3).map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx + 1)}
                className="group relative rounded-2xl overflow-hidden border border-[#E8DFD3] dark:border-[#244C4A] bg-[#FAF5ED] dark:bg-[#143130] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                <div className={`relative ${item.ratio} overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                  <div className="absolute bottom-4 left-4 right-4 text-white font-sans space-y-1">
                    <span className="text-[10.5px] uppercase tracking-wider text-[#D6B56F] block">
                      {item.category} • {item.location}
                    </span>
                    <h4 className="font-display text-xl text-white font-normal leading-snug">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Grid for Remaining Items in Asymmetric Rows */}
          {filteredItems.slice(3).map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx + 3)}
              className="md:col-span-4 group relative rounded-2xl overflow-hidden border border-[#E8DFD3] dark:border-[#244C4A] bg-[#FAF5ED] dark:bg-[#143130] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                <div className="absolute bottom-4 left-4 right-4 text-white font-sans space-y-0.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#D6B56F] block">
                    {item.location}
                  </span>
                  <h4 className="font-display text-lg text-white font-normal">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}

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
