import React, { useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import WeddingEnquiryForm from '../components/wedding/WeddingEnquiryForm';
import WeddingProposalModal from '../components/wedding/WeddingProposalModal';
import {
  HeartHandshake,
  Check,
  FileText,
  Palette,
  Users,
  Crown,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { BotanicalBranch, AntiqueStar } from '../components/common/BotanicalDecor';
import { WhatsAppIcon } from '../components/common/SocialIcons';

const WeddingPlanner = () => {
  const [packageType, setPackageType] = useState('Gold: Complete Planning');
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);

  // =========================================================================
  // 1. THE FIVE MANDATORY BESPOKE PILLARS (EDITORIAL SHOWCASE)
  // =========================================================================
  const bespokePillars = [
    {
      id: 'venue',
      title: 'Heritage Venue Selection',
      tag: 'Palaces & Lawns',
      image: '/images/heritage-rajbari-venue.jpg',
      description:
        'Reserving historic Kolkata rajbaris, Five-Star luxury hotel ballrooms, and tranquil riverside lawns at honest, contracted family rates.',
      highlights: ['Rajbari courtyards', 'Five-star ballrooms', 'Open riverside lawns'],
    },
    {
      id: 'makeup',
      title: 'Bridal Makeup & Styling',
      tag: 'Aesthetic Artistry',
      image: '/images/bengali-wedding-hero.jpg',
      description:
        'HD and airbrush makeup artists, floral hair adornment, and drape specialists to ensure the bride and family look flawless from morning rituals to reception.',
      highlights: ['Airbrush & HD makeup', 'Floral tresses', 'Family vanity coordination'],
    },
    {
      id: 'jewellery',
      title: 'Heritage Jewellery Curation',
      tag: 'Heirloom Elegance',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80',
      description:
        'Expert guidance pairing traditional gold, Jadau, Kundan, and Polki ornaments with ceremony necklines and saree borders for a timeless royal look.',
      highlights: ['Traditional Bengali gold', 'Kundan & Polki styling', 'Secure on-site lockers'],
    },
    {
      id: 'saree',
      title: 'Handloom Benarasi Sarees',
      tag: 'Royal Weaves',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
      description:
        'Direct sourcing of authentic pure silk Benarasi drapes, zardozi odhnis, and hand-embroidered groom sherwanis crafted by master weavers.',
      highlights: ['Pure silk Benarasi drapes', 'Zardozi odhnis', 'Bespoke groom sherwanis'],
    },
    {
      id: 'packages',
      title: 'Complete Wedding Packages',
      tag: 'End-to-End Care',
      image: '/images/bengali-vedic-mandap.jpg',
      description:
        'Single-point accountability encompassing Vedic mandap decor, guest logistics, authentic in-house catering, and personal bride/groom shadow managers.',
      highlights: ['100% In-house catering', '3D Mandap fabrication', 'Dedicated floor director'],
    },
  ];

  // =========================================================================
  // 2. DEDICATED PROPOSED WEDDING SERVICE OFFERINGS (BOTANICAL EDITORIAL ATELIER)
  // Easy to edit, replace, or configure without modifying the rest of the application
  // =========================================================================
  const proposedWeddingServices = [
    {
      id: 'wedding-planning-coordination',
      num: '01',
      roman: 'I',
      title: 'Wedding Planning & Coordination',
      bengaliTitle: 'বিয়ের সামগ্রিক পরিকল্পনা ও অন-গ্রাউন্ড কো-অর্ডিনেশন',
      badge: 'Proposed Atelier Discipline',
      status: 'Proposed Service',
      image: '/wedding-gallary/bengali-wedding-couple.jpg',
      imageLabel: 'Bengali Bride & Groom Couple Portrait',
      description:
        'Single-point ceremonial stewardship from timeline charting and vendor synchronization to run-of-show execution and dedicated bridal shadow coordinators on the wedding floor.',
      highlights: ['Milestone timeline schedules', 'Vendor coordination & contracts', 'Dedicated floor director & shadow'],
      aspect: 'aspect-[16/10]',
    },
    {
      id: 'wedding-decor-mandap-design',
      num: '02',
      roman: 'II',
      title: 'Wedding Decor & Mandap Design',
      bengaliTitle: 'বৈদিক মণ্ডপ ও পুষ্পশোভিত রাজকীয় মঞ্চ নির্মাণ',
      badge: 'Proposed Atelier Discipline',
      status: 'Proposed Service',
      image: '/wedding-gallary/20241129_183629.jpg',
      imageLabel: 'Royal Reception Stage & Floral Arch',
      description:
        'Architectural Vedic mandap structures, fresh tuberose and marigold canopies, thematic reception sets, and photogenic floral entrance gateways crafted with botanical grace.',
      highlights: ['Vedic mandap architecture', 'Fresh seasonal floral canopies', 'Grand entrance & reception backdrops'],
      aspect: 'aspect-[4/3]',
    },
    {
      id: 'photography-cinematography',
      num: '03',
      roman: 'III',
      title: 'Photography & Cinematography',
      bengaliTitle: 'স্মৃতিচারণ ফটোগ্রাফি ও সিনেমাটিক ফিল্মিং',
      badge: 'Proposed Atelier Discipline',
      status: 'Proposed Service',
      image: '/wedding-gallary/bengali-sindoor-daan.jpg',
      imageLabel: 'Sacred Vedic Sindoor Daan Ritual',
      description:
        'Fine-art candid ritual portraiture, 4K ceremonial highlight films, traditional family documentation, and cinematic teasers capturing timeless vows.',
      highlights: ['4K cinematic teasers & films', 'Candid ritual portraiture', 'Heirloom printed family albums'],
      aspect: 'aspect-[4/3]',
    },
    {
      id: 'lighting-sound',
      num: '04',
      roman: 'IV',
      title: 'Lighting & Sound',
      bengaliTitle: 'উৎসবমুখর আলোকসজ্জা ও অ্যাকোস্টিক সাউন্ড',
      badge: 'Proposed Atelier Discipline',
      status: 'Proposed Service',
      image: '/images/gala-stage-lighting.jpg',
      imageLabel: 'Architectural Stage & Ambient Lighting',
      description:
        'Warm architectural uplighting, crystal chandelier rigging, sacred shehnai acoustics, and balanced reception sound systems tailored for serene conversation.',
      highlights: ['Architectural lawn uplighting', 'Acoustic shehnai & vocal sound', 'Sangeet sound reinforcement'],
      aspect: 'aspect-[16/10]',
    },
    {
      id: 'venue-guest-management',
      num: '05',
      roman: 'V',
      title: 'Venue & Guest Management',
      bengaliTitle: 'হেরিটেজ ভেন্যু নির্বাচন ও পরম আত্মীয় আপ্যায়ন',
      badge: 'Proposed Atelier Discipline',
      status: 'Proposed Service',
      image: '/events-gallary/20240805_235720_01.jpg',
      imageLabel: 'Five-Star Ballroom & Guest Seating',
      description:
        'Securing heritage Kolkata rajbaris and riverside lawns, managing airport arrivals, personalized welcome kits, hotel check-ins, and attentive elderly concierge care.',
      highlights: ['Heritage rajbari reservation', 'Airport & station greeting desks', 'Luggage & elderly concierge care'],
      aspect: 'aspect-[4/3]',
    },
    {
      id: 'bridal-groom-styling',
      num: '06',
      roman: 'VI',
      title: 'Bridal & Groom Styling',
      bengaliTitle: 'বর-কনের ঐতিহ্যবাহী সাজসজ্জা ও রাজকীয় বেশভূষা',
      badge: 'Proposed Atelier Discipline',
      status: 'Proposed Service',
      image: '/wedding-gallary/bengali-wedding-2.jpg',
      imageLabel: 'Classic Bengali Bridal Adornment',
      description:
        'Authentic pure silk Benarasi drape artistry, custom topor and mukut coordination, heirloom jewellery pairing, and professional bridal vanity scheduling.',
      highlights: ['Benarasi & zardozi draping', 'Mukut, topor & kalgi styling', 'Vanity & touch-up scheduling'],
      aspect: 'aspect-[4/3]',
    },
  ];

  // =========================================================================
  // 3. STEP-BY-STEP WEDDING COUNTDOWN TIMELINE
  // =========================================================================
  const timelineChecklist = [
    {
      period: '6–9 Months Before',
      title: 'Budget, Prime Venues & The Big Vision',
      tag: 'Phase 01',
      items: [
        'Sit down with family to finalize the guest list and overall spending comfort.',
        'Visit and reserve your favorite rajbaris, banquets, or lawns for pre-wedding and wedding days.',
        'Book high-demand single-client specialists early: your lead photographer and bridal makeup artist.',
      ],
    },
    {
      period: '3–5 Months Before',
      title: 'Decor Themes, Menu Tastings & Invitations',
      tag: 'Phase 02',
      items: [
        'Finalize flower and decor themes for Haldi, Mehendi, Sangeet, Mandap, and Boubhat.',
        'Join our kitchen team for live food tastings and handpick your favorite per-plate recipes.',
        'Order traditional printed cards, bespoke gift boxes, and digital video invites.',
        'Confirm family Sangeet choreographers, live musicians, and DJ setups.',
      ],
    },
    {
      period: '1–2 Months Before',
      title: 'Outfits, Guest Stays & Local Permissions',
      tag: 'Phase 03',
      items: [
        'Complete final bridal and groom outfit fittings; finalize Benarasi drapes, jewellery, and footwear.',
        'Confirm outstation family train/flight timings and block hotel room wings.',
        'Wrap wedding favors and design ceremonial tattwa trays.',
        'Secure any required outdoor ground or music sound permissions.',
      ],
    },
    {
      period: '1–2 Weeks Before',
      title: 'Run-of-Show Schedules & Final Walkthrough',
      tag: 'Phase 04',
      items: [
        'Share a clear minute-by-minute schedule with family heads and vendors so everyone is aligned.',
        'Assemble welcome vanity bags, room hampers, and guest luggage tags.',
        'Review auspicious lagna timings and ritual items with the family priest.',
      ],
    },
    {
      period: 'The Wedding Days',
      title: 'On-Ground Care & Family Shadow Support',
      tag: 'Celebration Day',
      items: [
        'Our team arrives 8 hours prior to guest arrivals to inspect flowers, sound, and dining stations.',
        'A dedicated personal shadow stays by the bride and groom for refreshments, wardrobe adjustments, and cues.',
        'We guide guests smoothly between greeting lounges, the main mandap, and hot buffet dining.',
      ],
    },
  ];

  // =========================================================================
  // 4. WEDDING PLANNING PACKAGES
  // =========================================================================
  const weddingPackages = [
    {
      name: 'Silver: Day-of Management',
      subtitle: 'For couples who booked vendors but want to relax on the big day',
      engagement: 'Starts 4 weeks before event',
      decor: 'Coordinate and supervise client-booked decor team',
      catering: 'Sync food timings, plate counts, and live counters',
      entertainment: 'Sound and music timing management',
      hospitality: 'Warm guest guidance and reception flow',
      teamSize: '3–4 Coordinators',
      highlight: false,
      badge: 'Essentials',
    },
    {
      name: 'Gold: Complete Planning',
      subtitle: 'Best for city weddings with 300 to 600 guests',
      engagement: '6–8 months of dedicated planning',
      decor: 'Custom 3D design, fresh flower setups & production',
      catering: 'Full menu curation, kitchen tastings & quality audits',
      entertainment: 'Professional emcee, DJ console & folk/dance artists',
      hospitality: 'Airport transfers, hotel check-in desk & hamper delivery',
      teamSize: '6–8 Specialists + 1 Event Director',
      highlight: true,
      badge: 'Most Popular',
    },
    {
      name: 'Imperial: Royal All-Inclusive',
      subtitle: 'For grand palatial and destination celebrations (500+ guests)',
      engagement: '9–12 months of comprehensive care',
      decor: 'Architectural rajbari builds, exotic florals & LED stagecraft',
      catering: 'Royal multi-course banquets, chef tables & dessert counters',
      entertainment: 'Celebrity singers, headline bands & Sufi night setups',
      hospitality: 'Luxury car fleet, 24/7 hospitality lounge & luggage desk',
      teamSize: '12+ Full Crew + Bride & Groom Shadow Managers',
      highlight: false,
      badge: 'Royal Flagship',
    },
  ];

  // =========================================================================
  // 5. 3-DAY WEDDING JOURNEY BLUEPRINT
  // =========================================================================
  const eventBlueprint = [
    {
      day: 'Day 1 • Morning',
      title: 'Haldi & Phoolon Ki Holi',
      description: 'Bright marigold floral setup, live dhol beats, organic herbal haldi, and joyful candid photo-ops.',
      accent: 'border-[#D6B56F] bg-[#D6B56F]/15 text-[#193C3B] dark:text-[#D6B56F]',
    },
    {
      day: 'Day 1 • Evening',
      title: 'Sangeet & Cocktail Night',
      description: 'Glamorous club lighting, elevated mocktail bar, high-energy DJ music, and choreographed family dances.',
      accent: 'border-[#D66D59] bg-[#D66D59]/15 text-[#D66D59] dark:text-[#F5EFE5]',
    },
    {
      day: 'Day 2 • Morning',
      title: 'Traditional Aai Buro Bhaat',
      description: 'Intimate rituals with brass lamps, auspicious alpana art, and a beloved traditional Bengali feast.',
      accent: 'border-[#D6B56F] bg-[#D6B56F]/15 text-[#193C3B] dark:text-[#D6B56F]',
    },
    {
      day: 'Day 2 • Evening',
      title: 'The Royal Wedding Ceremony',
      description: 'Grand Barat entry, fresh flower mandap, sacred Vedic chants, and a grand banquet feast for all guests.',
      accent: 'border-[#193C3B] bg-[#193C3B]/15 text-[#193C3B] dark:text-[#D6B56F]',
    },
    {
      day: 'Day 3 • Evening',
      title: 'Boubhat & Grand Reception',
      description: 'Sleek modern decor, live acoustic sufi or jazz music, family photo lounge, and an imperial feast.',
      accent: 'border-[#D6B56F] bg-[#D6B56F]/15 text-[#193C3B] dark:text-[#D6B56F]',
    },
  ];

  const handleSelectPackage = (pkgName) => {
    setPackageType(pkgName);
    const formElement = document.getElementById('wedding-enquiry-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#F5EFE5] dark:bg-[#102726] min-h-screen text-[#292323] dark:text-[#F5EFE5] transition-colors font-sans relative overflow-hidden">
      
      {/* Decorative Botanical Flourish */}
      <div className="absolute top-28 -right-12 pointer-events-none opacity-20 dark:opacity-10 text-[#193C3B] dark:text-[#D6B56F]">
        <BotanicalBranch className="w-72 h-72" rotate={-35} />
      </div>

      {/* ========================================================================= */}
      {/* 1. CINEMATIC WEDDING HERO (EDITORIAL SPLIT COMPOSITION) */}
      {/* ========================================================================= */}
      <section className="pt-36 sm:pt-44 pb-16 lg:pb-24 border-b border-[#E8DFD3] dark:border-[#244C4A] bg-[#FAF5ED] dark:bg-[#143130] transition-colors relative z-10">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Editorial Typography */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.24em] font-semibold text-[#D66D59] dark:text-[#D6B56F]">
                <AntiqueStar className="w-3.5 h-3.5 text-[#D6B56F]" />
                <span>Kolkata • Heritage Rajbaris • Destination</span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal text-[#292323] dark:text-[#F5EFE5] tracking-tight leading-[1.05]">
                Every Sacred Vow, <br />
                <span className="italic font-display text-[#193C3B] dark:text-[#D6B56F]">
                  Crafted with Royal Poise.
                </span>
              </h1>

              <p className="font-display text-xl sm:text-2xl text-[#D66D59] dark:text-[#D6B56F] font-normal italic max-w-2xl">
                From historic rajbari courtyards and Vedic floral mandaps to feasts cooked live by our bawarchis.
              </p>

              <p className="text-base sm:text-lg text-[#665C5C] dark:text-[#C8D6D5] font-light leading-relaxed max-w-xl">
                We handle venue reservations, mandap artistry, bridal styling, ritual timings, and guest hospitality with one devoted team. Your family celebrates without stress.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('wedding-packages-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3.5 text-xs uppercase tracking-[0.14em] font-semibold rounded-lg bg-[#D66D59] hover:bg-[#BA5643] text-white shadow-lg transition-all"
                >
                  Explore Planning Packages
                </button>

                <button
                  type="button"
                  onClick={() => setIsProposalModalOpen(true)}
                  className="px-6 py-3.5 text-xs uppercase tracking-[0.14em] font-semibold rounded-lg bg-white/80 dark:bg-[#102726] hover:bg-white dark:hover:bg-[#193C3B] text-[#193C3B] dark:text-[#F5EFE5] border border-[#E8DFD3] dark:border-[#244C4A] transition-all inline-flex items-center space-x-2"
                >
                  <FileText className="w-4 h-4 text-[#D6B56F]" />
                  <span>View Sample Proposal</span>
                </button>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20our%20upcoming%20wedding.`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3.5 text-xs uppercase tracking-[0.12em] font-semibold inline-flex items-center space-x-2 shadow-sm rounded-lg transition-all duration-200"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right: Arched Wedding Frame with Botanical Branch */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[420px]">
                <div className="relative z-10 w-full aspect-[4/5] rounded-t-[190px] rounded-b-2xl overflow-hidden shadow-2xl border-2 border-[#D6B56F]/40 bg-[#102726]">
                  <img
                    src="/images/bengali-wedding-hero.jpg"
                    alt="Royal Enterprise Bespoke Wedding Planning and Heritage Rajbari Biye Bari in Kolkata"
                    className="w-full h-full object-cover filter brightness-[0.96]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#193C3B]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-center text-white text-xs">
                    <span className="text-[#D6B56F] uppercase tracking-[0.2em] font-semibold block mb-0.5">
                      Bespoke Kolkata Biye Bari
                    </span>
                    <span className="font-display italic text-base text-[#F5EFE5]">
                      Heritage Courtyards & Sacred Mandaps
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Banner Indicators */}
          <div className="pt-10 mt-10 border-t border-[#E8DFD3] dark:border-[#244C4A] grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#292323] dark:text-[#C8D6D5]">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-4 h-4 text-[#D6B56F]" />
              <span>Dedicated single floor manager for the entire day</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-4 h-4 text-[#D6B56F]" />
              <span>Punctual ritual timings & auspicious subho drishti</span>
            </div>
            <div className="flex items-center space-x-3">
              <Sparkles className="w-4 h-4 text-[#D6B56F]" />
              <span>Fresh live cooking with zero outsourced brokers</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 py-14 sm:py-20 space-y-16 sm:space-y-24 relative z-10">

        {/* ========================================================================= */}
        {/* 2. THE FIVE BESPOKE DISCIPLINES (EDITORIAL SHOWCASE) */}
        {/* ========================================================================= */}
        <section id="bespoke-disciplines">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D6B56F]" />
              <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#D66D59] dark:text-[#D6B56F]">
                The Five Disciplines
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#292323] dark:text-[#F5EFE5] font-normal tracking-tight leading-[1.08]">
              Every Detail of Your Biye Bari, <br />
              <span className="italic font-display text-[#193C3B] dark:text-[#D6B56F]">
                Looked After Under One Roof.
              </span>
            </h2>

            <p className="text-base text-[#665C5C] dark:text-[#C8D6D5] font-light leading-relaxed">
              We look after palatial courtyards, bridal styling, heirloom jewellery, handloom silks, and full wedding execution so you never have to coordinate between separate suppliers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bespokePillars.map((pillar, idx) => (
              <div
                key={pillar.id}
                className={`bg-[#FAF5ED] dark:bg-[#143130] rounded-2xl border border-[#E8DFD3] dark:border-[#244C4A] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col justify-between ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 dark:bg-stone-900">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-[#193C3B] text-white text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full shadow-sm font-sans">
                      {pillar.tag}
                    </div>
                  </div>

                  <div className="p-7 space-y-3.5">
                    <h3 className="font-display text-2xl font-normal text-[#292323] dark:text-[#F5EFE5] group-hover:text-[#193C3B] dark:group-hover:text-[#D6B56F] transition-colors leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#665C5C] dark:text-[#C8D6D5] font-light leading-relaxed">
                      {pillar.description}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2">
                      {pillar.highlights.map((h, hIdx) => (
                        <span
                          key={hIdx}
                          className="inline-flex items-center space-x-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/80 dark:bg-[#102726] border border-[#E8DFD3] dark:border-[#244C4A] text-[#292323] dark:text-[#F5EFE5]"
                        >
                          <Check className="w-3 h-3 text-[#D66D59]" />
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0 border-t border-[#E8DFD3] dark:border-[#244C4A] mt-4">
                  <button
                    type="button"
                    onClick={() => handleSelectPackage('Gold: Complete Planning')}
                    className="text-xs uppercase tracking-wider font-semibold text-[#193C3B] dark:text-[#D6B56F] hover:text-[#D66D59] inline-flex items-center space-x-1.5 transition-colors"
                  >
                    <span>Inquire for {pillar.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D6B56F]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. DEDICATED WEDDING SERVICE OFFERINGS (BOTANICAL ATELIER SHOWCASE) */}
        {/* ========================================================================= */}
        <section id="wedding-services" className="space-y-8 scroll-mt-24">
          <div id="scope-of-services" />
          <SectionHeader
            badge="Proposed Service Offerings"
            title="Curated Wedding Atelier Services"
            subtitle="ছয়টি প্রস্তাবিত ওয়েডিং ডিসিপ্লিন — Dedicated wedding services crafted to bring sacred ritual sanctity, architectural elegance, and stress-free family hospitality to your celebration."
          />

          {/* Asymmetric Botanical Editorial Folio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {proposedWeddingServices.map((service) => (
              <div
                key={service.id}
                className="group bg-[#FAF5ED] dark:bg-[#143130] border border-[#E8DFD3] dark:border-[#244C4A] rounded-2xl overflow-hidden hover:border-[#193C3B]/50 dark:hover:border-[#D6B56F]/50 transition-all duration-300 flex flex-col justify-between shadow-sm hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  {/* Small Editorial Photography Crop */}
                  <div className="relative overflow-hidden bg-[#E8DFD3] dark:bg-[#102726] border-b border-[#E8DFD3] dark:border-[#244C4A]">
                    <div className={`w-full ${service.aspect} overflow-hidden`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                    </div>
                    {/* Editorial Top Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white">
                      <span className="font-display tracking-[0.25em] text-[10px] uppercase px-2.5 py-0.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-[#FAF5ED]">
                        Atelier {service.roman}
                      </span>
                      <span className="text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#193C3B]/80 text-[#FAF5ED] backdrop-blur-md border border-white/20 font-medium">
                        {service.badge}
                      </span>
                    </div>

                    {/* Bottom In-Image Accent */}
                    <div className="absolute bottom-2.5 left-3 right-3 text-white/90 text-[11px] font-display italic tracking-wider flex items-center gap-1.5">
                      <AntiqueStar className="w-3 h-3 text-[#D6B56F] shrink-0" />
                      <span className="truncate">{service.imageLabel}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-normal text-[#292323] dark:text-[#F5EFE5] leading-snug group-hover:text-[#193C3B] dark:group-hover:text-[#D6B56F] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#8A7D7D] dark:text-[#A0B0AF] font-light mt-1">
                      {service.bengaliTitle}
                    </p>
                    <p className="text-sm text-[#665C5C] dark:text-[#C8D6D5] leading-relaxed font-light mt-3">
                      {service.description}
                    </p>

                    {/* Curated Touchpoints */}
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3.5 border-t border-[#E8DFD3]/70 dark:border-[#244C4A]/70">
                      {service.highlights.map((item, hIdx) => (
                        <span
                          key={hIdx}
                          className="text-[11px] px-2.5 py-1 rounded-md bg-white/70 dark:bg-[#102726]/80 border border-[#E8DFD3] dark:border-[#244C4A] text-[#554C4C] dark:text-[#D0DFDE] flex items-center gap-1.5"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#D6B56F]" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Subtle Editorial Bottom Bar */}
                <div className="px-6 py-3.5 bg-black/[0.02] dark:bg-black/20 border-t border-[#E8DFD3] dark:border-[#244C4A] flex items-center justify-between text-xs text-[#8A7D7D] dark:text-[#A0B0AF]">
                  <span className="flex items-center gap-1.5 font-light">
                    <BotanicalBranch className="w-3.5 h-3.5 text-[#D6B56F]" />
                    {service.status}
                  </span>
                  <span className="font-display italic text-[#193C3B] dark:text-[#D6B56F] font-medium">
                    Royal Atelier {service.num}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quiet Proposed Disclaimer Banner */}
          <div className="rounded-xl p-4 bg-[#FAF5ED]/80 dark:bg-[#143130]/80 border border-[#E8DFD3] dark:border-[#244C4A] text-center max-w-2xl mx-auto">
            <p className="text-xs text-[#665C5C] dark:text-[#C8D6D5] font-light leading-relaxed">
              <span className="font-medium text-[#193C3B] dark:text-[#D6B56F]">Proposed Service Disciplines:</span> These curated categories represent our specialized wedding capabilities. Each offering is reviewed and confirmed during one-on-one family alignment consultations.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. MASTER WEDDING TIMELINE COUNTDOWN */}
        {/* ========================================================================= */}
        <section id="wedding-timeline" className="bg-[#FAF5ED] dark:bg-[#143130] border border-[#E8DFD3] dark:border-[#244C4A] rounded-2xl p-8 sm:p-12 shadow-sm">
          <SectionHeader
            badge="Step-by-step checklist"
            title="Your Wedding Planning Countdown"
            subtitle="A clear milestone schedule from our first cup of tea to the morning of Boubhat so you always know what comes next."
          />

          <div className="space-y-6">
            {timelineChecklist.map((phase, idx) => (
              <div
                key={idx}
                className="bg-white/80 dark:bg-[#102726] border border-[#E8DFD3] dark:border-[#244C4A] rounded-2xl p-6 sm:p-8 hover:border-[#193C3B]/50 dark:hover:border-[#D6B56F]/50 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 border-b border-[#E8DFD3] dark:border-[#244C4A] pb-4">
                  <div className="flex items-center space-x-3">
                    <span className="font-display text-2xl sm:text-3xl font-normal text-[#193C3B] dark:text-[#D6B56F]">
                      {phase.period}
                    </span>
                    <span className="text-sm font-semibold text-[#292323] dark:text-[#F5EFE5]">
                      • {phase.title}
                    </span>
                  </div>
                  <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#D66D59]/10 text-[#D66D59] w-fit">
                    {phase.tag}
                  </span>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs sm:text-sm text-[#665C5C] dark:text-[#C8D6D5] font-light">
                  {phase.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start">
                      <div className="w-4 h-4 rounded-full bg-[#193C3B]/10 dark:bg-[#D6B56F]/20 text-[#193C3B] dark:text-[#D6B56F] flex items-center justify-center shrink-0 mr-2.5 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. WEDDING PLANNING PACKAGES */}
        {/* ========================================================================= */}
        <section id="wedding-packages-section">
          <SectionHeader
            badge="Transparent Packages"
            title="Planning Tiers Tailored to Your Vision"
            subtitle="Honest options tailored to whether you need a dedicated hand on the day of the wedding or comprehensive guidance from day one."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {weddingPackages.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.highlight
                    ? 'bg-[#FAF5ED] dark:bg-[#143130] border-2 border-[#193C3B] dark:border-[#D6B56F] shadow-2xl'
                    : 'bg-[#FAF5ED] dark:bg-[#143130] border border-[#E8DFD3] dark:border-[#244C4A] hover:border-[#193C3B]/40 dark:hover:border-[#D6B56F]/50 shadow-sm'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#193C3B] text-white font-semibold text-xs px-4 py-1 rounded-full shadow-md flex items-center">
                    <Crown className="w-3.5 h-3.5 mr-1.5 text-[#D6B56F]" />
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className="font-display text-3xl font-normal text-[#292323] dark:text-[#F5EFE5] mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#D66D59] dark:text-[#D6B56F] font-semibold mb-3">
                      {pkg.subtitle}
                    </p>
                    <div className="p-4 bg-white/70 dark:bg-[#102726] border border-[#E8DFD3] dark:border-[#244C4A] rounded-xl text-xs text-[#665C5C] dark:text-[#C8D6D5] space-y-1 font-light">
                      <p><span className="text-[#8C8282]">Planning Period:</span> <strong className="text-[#292323] dark:text-[#F5EFE5] font-semibold">{pkg.engagement}</strong></p>
                      <p><span className="text-[#8C8282]">On-Site Crew:</span> <strong className="text-[#193C3B] dark:text-[#D6B56F] font-semibold">{pkg.teamSize}</strong></p>
                    </div>
                  </div>

                  <h5 className="text-xs uppercase tracking-wider font-semibold text-[#292323] dark:text-[#F5EFE5] mb-3.5 border-b border-[#E8DFD3] dark:border-[#244C4A] pb-2">
                    Key Deliverables:
                  </h5>

                  <ul className="space-y-3 mb-8 text-xs sm:text-sm text-[#665C5C] dark:text-[#C8D6D5] font-light">
                    <li className="flex items-start">
                      <strong className="text-[#292323] dark:text-[#F5EFE5] w-28 shrink-0 text-xs font-semibold">Decor & Sets:</strong>
                      <span>{pkg.decor}</span>
                    </li>
                    <li className="flex items-start">
                      <strong className="text-[#292323] dark:text-[#F5EFE5] w-28 shrink-0 text-xs font-semibold">Feast Sync:</strong>
                      <span>{pkg.catering}</span>
                    </li>
                    <li className="flex items-start">
                      <strong className="text-[#292323] dark:text-[#F5EFE5] w-28 shrink-0 text-xs font-semibold">Music & Sound:</strong>
                      <span>{pkg.entertainment}</span>
                    </li>
                    <li className="flex items-start">
                      <strong className="text-[#292323] dark:text-[#F5EFE5] w-28 shrink-0 text-xs font-semibold">Guest Care:</strong>
                      <span>{pkg.hospitality}</span>
                    </li>
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => handleSelectPackage(pkg.name)}
                  className={`w-full py-3.5 text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors ${
                    pkg.highlight
                      ? 'bg-[#193C3B] hover:bg-[#102726] text-white shadow-md'
                      : 'border border-[#CBBFB0] dark:border-[#2B5755] text-[#292323] dark:text-[#F5EFE5] hover:bg-white dark:hover:bg-[#102726]'
                  }`}
                >
                  Select {pkg.name.split(':')[0]}
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#8C8282] italic mt-6 font-light font-sans">
            (Note: Planning packages cover professional direction, design mockups, and on-ground manpower; production, venue bookings, and catering are billed transparently at actuals).
          </p>
        </section>

        {/* ========================================================================= */}
        {/* 6. MULTI-DAY EVENT BLUEPRINT */}
        {/* ========================================================================= */}
        <section id="multi-day-blueprint">
          <SectionHeader
            badge="The Celebrations"
            title="A 3-Day Wedding Journey in Kolkata"
            subtitle="How we guide your family through each traditional ceremony with peaceful elegance and zero rush."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {eventBlueprint.map((event, idx) => (
              <div
                key={idx}
                className="bg-[#FAF5ED] dark:bg-[#143130] border border-[#E8DFD3] dark:border-[#244C4A] rounded-2xl p-6 hover:border-[#193C3B]/50 dark:hover:border-[#D6B56F]/50 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  <div className={`p-2 rounded-lg text-xs font-semibold mb-3.5 text-center border ${event.accent}`}>
                    {event.day}
                  </div>
                  <h4 className="font-display font-normal text-xl text-[#292323] dark:text-[#F5EFE5] mb-2 leading-snug">
                    {event.title}
                  </h4>
                  <p className="text-xs text-[#665C5C] dark:text-[#C8D6D5] leading-relaxed font-light">
                    {event.description}
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-[#E8DFD3] dark:border-[#244C4A] text-xs text-[#193C3B] dark:text-[#D6B56F] font-semibold flex items-center justify-between">
                  <span>Assigned Team</span>
                  <Check className="w-3.5 h-3.5 text-[#D66D59]" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. INQUIRY FORM */}
        {/* ========================================================================= */}
        <section id="wedding-enquiry-form" className="pt-8">
          <WeddingEnquiryForm initialPackageType={packageType} />
        </section>

      </div>

      {/* Proposal & Contract Modal */}
      <WeddingProposalModal
        isOpen={isProposalModalOpen}
        onClose={() => setIsProposalModalOpen(false)}
      />
    </div>
  );
};

export default WeddingPlanner;
