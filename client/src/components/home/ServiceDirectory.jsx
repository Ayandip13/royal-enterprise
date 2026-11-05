import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ChefHat, HeartHandshake, Film } from 'lucide-react';
import { BotanicalBranch, AntiqueStar, FloralCorner } from '../common/BotanicalDecor';

const ServiceDirectory = ({ onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState('01');

  const services = [
    {
      id: '01',
      num: '01',
      category: 'Pillar 01 • Wedding Planner',
      title: 'Bespoke Kolkata Weddings & Destination Celebrations.',
      description:
        'We manage heritage rajbari venues, sacred Vedic floral mandaps, bridal aesthetics, jewellery curation, and handloom sarees. A dedicated floor manager stays beside you throughout the wedding rituals so your family can celebrate without anxiety.',
      offeringsHeading: 'Bespoke Wedding Offerings:',
      items: [
        'Heritage Venue Selection',
        'Bridal & Family Makeup',
        'Heritage Jewellery Curation',
        'Handloom Benarasi Sarees',
        'Complete Wedding Packages (End-to-End Responsibility)',
      ],
      link: '/wedding-planner',
      linkText: 'Explore Wedding Planning',
      ctaText: 'Plan Your Wedding',
      image: '/images/bengali-wedding-hero.jpg',
      badge: 'Heritage Rajbaris & Bespoke Mandaps',
      subBadge: 'Full End-to-End Care',
      theme: 'ivory', // Warm ivory composition with arched frame
    },
    {
      id: '02',
      num: '02',
      category: 'Pillar 02 • In-House Catering',
      title: 'Authentic Live Feasts Cooked In-House. Never Outsourced.',
      description:
        'Food is the beating heart of an Indian celebration. Our veteran Kolkata bawarchis, halwais, and captains prepare every single course fresh on site—from traditional mustard-oil Bhetki Paturi to slow-simmered Kosha Mangsho and royal Awadhi dum biryani.',
      offeringsHeading: 'Catering Specialties:',
      items: [
        'Grand Wedding Catering & Biye Bari',
        'Birthday Party & Milestone Catering',
        'Dedicated Pure Veg & Jain Kitchens',
        'Live Charcoal Kebabs & Chaat Counters',
        'Slow-cooked Mutton Kosha & Handi Dum Biryani',
      ],
      link: '/catering',
      linkText: 'View Catering Menus',
      ctaText: 'Book a Food Tasting',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
      badge: 'Central Commercial Kitchens',
      subBadge: 'Strictly 100% In-House Food',
      theme: 'forest', // Deep Forest Teal dramatic section
    },
    {
      id: '03',
      num: '03',
      category: 'Pillar 03 • Event Management',
      title: 'Corporate Summits, Media Launches & Stage Production.',
      description:
        'We engineer concert-grade acoustic sound, build custom 3D LED stages, and run seamless delegate logistics across Kolkata’s premier convention centers and hotel ballrooms. Direct technical crew under one transparent invoice.',
      offeringsHeading: 'Comprehensive Capabilities:',
      items: [
        'Corporate Events & Galas',
        'Media Events & Press Meets',
        'Any Type of Program / Festivals',
        'Custom Set & Truss Design',
        '3D Stage Design, LED Walls & Live Sound',
      ],
      link: '/events',
      linkText: 'Explore Event Management',
      ctaText: 'Request Stage Proposal',
      image: '/images/gala-stage-lighting.jpg',
      badge: 'Stagecraft & Corporate Production',
      subBadge: '100 – 3,000 Attendees',
      theme: 'wine', // Deep Wine dramatic panorama
    },
  ];

  return (
    <section id="services-overview" className="relative transition-colors">
      
      {/* ========================================================================= */}
      {/* DIRECTORY NAVIGATION BAR: Large Editorial Service Directory Selector */}
      {/* ========================================================================= */}
      <div className="bg-[#F5EFE5] dark:bg-[#102726] pt-12 pb-6 border-b border-[#E8DFD3] dark:border-[#244C4A]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.24em] font-semibold text-[#D66D59] dark:text-[#D6B56F] block font-sans">
                Curated Divisions
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#292323] dark:text-[#F5EFE5]">
                Visual Service Directory.
              </h2>
            </div>

            {/* Directory Index Tabs */}
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-none font-sans">
              {services.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveTab(s.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-lg text-xs uppercase tracking-[0.14em] font-medium transition-all duration-300 whitespace-nowrap flex items-center space-x-2.5 ${
                    activeTab === s.id
                      ? 'bg-[#193C3B] text-white shadow-md'
                      : 'bg-white/80 dark:bg-[#143130] text-[#665C5C] dark:text-[#C8D6D5] border border-[#E8DFD3] dark:border-[#244C4A] hover:border-[#193C3B]'
                  }`}
                >
                  <span className="font-display text-base font-light text-[#D6B56F]">
                    {s.num}
                  </span>
                  <span>{s.category.split('•')[1]?.trim() || s.category}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* PILLAR 01: WEDDING PLANNING — ASYMMETRIC ARCHED FLORAL EDITORIAL */}
      {/* ========================================================================= */}
      <div
        className={`py-16 sm:py-24 bg-[#F5EFE5] dark:bg-[#102726] text-[#292323] dark:text-[#F5EFE5] border-b border-[#E8DFD3] dark:border-[#244C4A] ${
          activeTab !== '01' ? 'hidden' : 'block'
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Column: Elegant Arched Frame with Botanical Flourish */}
            <div className="lg:col-span-5 relative group">
              <div className="relative mx-auto max-w-[420px]">
                {/* Botanical branch peeking over arch */}
                <div className="absolute -top-10 -left-8 z-20 pointer-events-none text-[#193C3B] dark:text-[#D6B56F] hidden sm:block">
                  <BotanicalBranch className="w-32 h-32" rotate={-25} />
                </div>

                {/* Arched image container */}
                <div className="relative z-10 w-full aspect-[4/5] rounded-t-[180px] rounded-b-2xl overflow-hidden shadow-2xl border-2 border-[#D6B56F]/40 bg-[#FAF5ED] dark:bg-[#143130]">
                  <img
                    src="/images/bengali-wedding-hero.jpg"
                    alt="Royal Enterprise Bespoke Bengali Wedding Planning and Heritage Rajbari Biye Bari in Kolkata"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#193C3B]/75 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white font-sans text-xs">
                    <span className="text-[#D6B56F] uppercase tracking-[0.18em] font-medium">
                      Heritage Rajbaris & Bespoke Mandaps
                    </span>
                    <span className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[10.5px]">
                      Full End-to-End Care
                    </span>
                  </div>
                </div>

                {/* Editorial tag pill */}
                <div className="absolute -bottom-4 -right-4 z-20 bg-white dark:bg-[#143130] p-4 rounded-xl border border-[#E8DFD3] dark:border-[#244C4A] shadow-lg max-w-[200px] text-left font-sans">
                  <span className="text-[10px] uppercase tracking-wider text-[#D66D59] font-bold block">
                    Kolkata Venues
                  </span>
                  <span className="text-xs text-[#292323] dark:text-[#F5EFE5] font-medium leading-tight block mt-0.5">
                    Rajbari Bawali, PC Chandra & Heritage Lawns
                  </span>
                </div>
              </div>
            </div>

            {/* Editorial Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-baseline justify-between border-b border-[#E8DFD3] dark:border-[#244C4A] pb-3">
                <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#D66D59] dark:text-[#D6B56F] font-sans">
                  Pillar 01 • Wedding Planner
                </span>
                <span className="font-display text-5xl font-light text-[#D6B56F]/40 select-none">
                  01
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#292323] dark:text-[#F5EFE5] font-normal tracking-tight leading-tight">
                Bespoke Kolkata Weddings & Destination Celebrations.
              </h3>

              <p className="text-base sm:text-lg text-[#665C5C] dark:text-[#C8D6D5] font-light leading-relaxed font-sans">
                We manage heritage rajbari venues, sacred Vedic floral mandaps, bridal aesthetics, jewellery curation, and handloom sarees. A dedicated floor manager stays beside you throughout the wedding rituals so your family can celebrate without anxiety.
              </p>

              {/* Offerings list with editorial typographic styling */}
              <div className="space-y-3 pt-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#292323] dark:text-[#F5EFE5] block font-sans">
                  Bespoke Wedding Offerings:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#292323] dark:text-[#C8D6D5] font-sans">
                  {services[0].items.map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center space-x-2.5 py-2 px-3 rounded-lg bg-white/70 dark:bg-[#143130] border border-[#E8DFD3] dark:border-[#244C4A] ${
                        idx === 4 ? 'sm:col-span-2' : ''
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D66D59] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/wedding-planner"
                  className="px-6 py-3 text-xs uppercase tracking-wider font-semibold rounded-lg bg-[#193C3B] hover:bg-[#102726] text-white shadow-sm inline-flex items-center space-x-2 transition-colors"
                >
                  <span>Explore Wedding Planning</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D6B56F]" />
                </Link>
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="px-5 py-3 text-xs uppercase tracking-wider font-semibold rounded-lg border border-[#CBBFB0] dark:border-[#2B5755] text-[#292323] dark:text-[#F5EFE5] hover:bg-white dark:hover:bg-[#143130] transition-colors"
                >
                  Plan Your Wedding
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* PILLAR 02: IN-HOUSE CATERING — DRAMATIC DARK FOREST TEAL SECTION */}
      {/* ========================================================================= */}
      <div
        className={`py-16 sm:py-24 bg-[#193C3B] text-[#F5EFE5] relative overflow-hidden border-b border-[#244C4A] ${
          activeTab !== '02' ? 'hidden' : 'block'
        }`}
      >
        {/* Subtle decorative gold line art watermark */}
        <div className="absolute -bottom-10 -right-10 pointer-events-none opacity-20 text-[#D6B56F]">
          <BotanicalBranch className="w-80 h-80" rotate={-45} />
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Content Column (Left) */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <div className="flex items-baseline justify-between border-b border-white/20 pb-3">
                <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#D6B56F] font-sans">
                  Pillar 02 • In-House Catering
                </span>
                <span className="font-display text-5xl font-light text-[#D6B56F]/40 select-none">
                  02
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight leading-tight">
                Authentic Live Feasts Cooked In-House. Never Outsourced.
              </h3>

              <p className="text-base sm:text-lg text-[#F5EFE5]/85 font-light leading-relaxed font-sans">
                Food is the beating heart of an Indian celebration. Our veteran Kolkata bawarchis, halwais, and captains prepare every single course fresh on site—from traditional mustard-oil Bhetki Paturi to slow-simmered Kosha Mangsho and royal Awadhi dum biryani.
              </p>

              {/* Specialties List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#D6B56F] block font-sans">
                  Catering Specialties:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-white/90 font-sans">
                  {services[1].items.map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center space-x-2.5 py-2 px-3 rounded-lg bg-white/10 border border-white/15 backdrop-blur-sm ${
                        idx === 4 ? 'sm:col-span-2' : ''
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D6B56F] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/catering"
                  className="px-6 py-3 text-xs uppercase tracking-wider font-semibold rounded-lg bg-[#D66D59] hover:bg-[#BA5643] text-white shadow-md inline-flex items-center space-x-2 transition-colors"
                >
                  <span>View Catering Menus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="px-5 py-3 text-xs uppercase tracking-wider font-semibold rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors"
                >
                  Book a Food Tasting
                </button>
              </div>
            </div>

            {/* Visual Column: Wide Feast Photography with Floating Circular Badge (Right) */}
            <div className="lg:col-span-5 relative group order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D6B56F]/40 aspect-[4/3] bg-black/40">
                <img
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80"
                  alt="Royal Enterprise In-House Banquet Catering and Gourmet Service in Kolkata"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white font-sans text-xs">
                  <span className="text-[#D6B56F] uppercase tracking-[0.18em] font-medium">
                    Central Commercial Kitchens
                  </span>
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[10.5px]">
                    Strictly 100% In-House Food
                  </span>
                </div>
              </div>

              {/* Floating Chef Assurance Seal */}
              <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full bg-[#401D2C] border-2 border-[#D6B56F] text-[#F5EFE5] p-2 flex flex-col items-center justify-center text-center shadow-2xl">
                <span className="text-[10px] font-serif italic text-[#D6B56F]">Pure Mustard</span>
                <span className="text-[8px] uppercase tracking-wider font-semibold">Fresh Bhetki</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* PILLAR 03: EVENT MANAGEMENT — ARCHITECTURAL STAGE PANORAMA */}
      {/* ========================================================================= */}
      <div
        className={`py-16 sm:py-24 bg-[#401D2C] text-[#F5EFE5] border-b border-[#5C283F] ${
          activeTab !== '03' ? 'hidden' : 'block'
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Column (Left) */}
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D6B56F]/40 aspect-[16/11] bg-black/40">
                <img
                  src="/images/gala-stage-lighting.jpg"
                  alt="Royal Enterprise Corporate Event Management and 3D Stage Design in Kolkata"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white font-sans text-xs">
                  <span className="text-[#D6B56F] uppercase tracking-[0.18em] font-medium">
                    Stagecraft & Corporate Production
                  </span>
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[10.5px]">
                    100 – 3,000 Attendees
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column (Right) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-baseline justify-between border-b border-white/20 pb-3">
                <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#D6B56F] font-sans">
                  Pillar 03 • Event Management
                </span>
                <span className="font-display text-5xl font-light text-[#D6B56F]/40 select-none">
                  03
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight leading-tight">
                Corporate Summits, Media Launches & Stage Production.
              </h3>

              <p className="text-base sm:text-lg text-[#F5EFE5]/85 font-light leading-relaxed font-sans">
                We engineer concert-grade acoustic sound, build custom 3D LED stages, and run seamless delegate logistics across Kolkata’s premier convention centers and hotel ballrooms. Direct technical crew under one transparent invoice.
              </p>

              {/* Capabilities List */}
              <div className="space-y-3 pt-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#D6B56F] block font-sans">
                  Comprehensive Capabilities:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-white/90 font-sans">
                  {services[2].items.map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center space-x-2.5 py-2 px-3 rounded-lg bg-white/10 border border-white/15 backdrop-blur-sm ${
                        idx === 4 ? 'sm:col-span-2' : ''
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D6B56F] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/events"
                  className="px-6 py-3 text-xs uppercase tracking-wider font-semibold rounded-lg bg-[#D6B56F] hover:bg-[#B8964E] text-[#193C3B] shadow-md inline-flex items-center space-x-2 transition-colors font-bold"
                >
                  <span>Explore Event Management</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="px-5 py-3 text-xs uppercase tracking-wider font-semibold rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors"
                >
                  Request Stage Proposal
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default ServiceDirectory;

