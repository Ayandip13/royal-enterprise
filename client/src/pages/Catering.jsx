import React, { useState, useEffect } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import CateringMenuSection from '../components/catering/CateringMenuSection';
import CateringEnquiryForm from '../components/catering/CateringEnquiryForm';
import {
  Utensils,
  Award,
  ChefHat,
  Sparkles,
  ShieldCheck,
  GlassWater,
  Flame,
  Check,
  ArrowRight,
  Crown,
  Leaf,
  Plus,
  X,
  ChevronLeft,
  ChevronRight,
  Clock,
  Eye,
  Maximize2,
  FileText,
  CheckCircle2,
  Tag,
} from 'lucide-react';
import { COMPANY_INFO, RATE_CHART_POSTERS, CATERING_PACKAGES } from '../data/mockData';
import { BotanicalBranch, AntiqueStar } from '../components/common/BotanicalDecor';
import { WhatsAppIcon } from '../components/common/SocialIcons';

const Catering = () => {
  const [selectedPackage, setSelectedPackage] = useState(
    'Package 02: Bangaliana Special Wedding Package (₹750 / plate)'
  );
  const [galleryCategory, setGalleryCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [rateChartLightbox, setRateChartLightbox] = useState(null);
  const [equipmentLightbox, setEquipmentLightbox] = useState(null);

  // =========================================================================
  // 1. CATERING SERVICES & CULINARY DISCIPLINES (EDITORIAL SHOWCASE)
  // =========================================================================
  const cateringDisciplines = [
    {
      id: 'wedding-catering',
      num: '01',
      title: 'Grand Wedding Catering & Biye Bari Feasts',
      subtitle: 'Traditional Bengali & North Indian Ceremonial Banquets',
      description:
        'From authentic Gondhoraj coolers and crunchy Kolkata pure Bhetki fry to slow-simmered Kosha Mangsho and hot baked rosogollas, our veteran bawarchis curate an unforgettable course-by-course culinary journey.',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
      badge: 'Wedding Banquets',
      highlights: [
        'Pure Kolkata Bhetki fry with fresh kasundi',
        'Slow-cooked mutton kosha & Basanti pulao',
        'Traditional Mishti Doi in earthen handis',
        'Hot baked rosogollas & malpua counters',
      ],
    },
    {
      id: 'pure-veg',
      num: '02',
      title: 'Dedicated Pure Vegetarian & Jain Banquets',
      subtitle: 'Strictly Segregated Cookware, Kitchens & Specialized Chefs',
      description:
        'Complete peace of mind for sacred ceremonies, Marwari and Jain celebrations. We maintain separate cooking utensils, dedicated raw-material supply, and specialized chefs for authentic Dal Baati Churma, Shahi Paneer, and Sattvic spreads.',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
      badge: '100% Pure Veg & Jain',
      highlights: [
        'Jodhpuri Dal Baati Churma with pure desi ghee',
        'Shahi Paneer Pasanda in rich cashew cream',
        'No-onion, no-garlic Sattvic menus upon request',
        'Live kesariya jalebi & rabri sweet lounge',
      ],
    },
    {
      id: 'milestone-events',
      num: '03',
      title: 'Milestone Birthdays, Anniversaries & Socials',
      subtitle: 'Annaprashan, Golden Jubilees & Pre-Wedding Gatherings',
      description:
        'Relaxed yet refined hospitality where multi-generational families gather. We coordinate live interactive street chaat counters, artisanal skewers, and comforting family main courses.',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
      badge: 'Social & Family Feasts',
      highlights: [
        'Live Phuchka and Palak Patta Chaat bars',
        'Clay-oven chicken reshmi & dahi ke kebabs',
        'Comforting Bengali Sunday mutton curries',
        'Artisanal dessert towers & fruit counters',
      ],
    },
    {
      id: 'live-theatres',
      num: '04',
      title: 'Live Interactive Food & Dessert Theatres',
      subtitle: 'In-House Softy Dispensers, Frozen Slush, Korean Bingsu & Clay Grills',
      description:
        'Transform dining into engaging entertainment. Sizzling charcoal tandoori grills, toss-to-order artisanal pastas, in-house commercial softy dispensers, frozen slush bars, and instant Korean bingsu snowmakers.',
      image: '/catering-equipment/live-korean-bingsu-snow-ice-machine.jpg',
      badge: 'Live Experience',
      highlights: [
        'In-house digital softy & soft-serve ice cream dispenser',
        'Dolphin rapid-freeze slush & frozen granita mocktail bar',
        'Touchscreen snowmaker for Korean Bingsu & fresh fruit snow ice',
        'Live charcoal tandoori kebabs, pasta & Banarasi paan counters',
      ],
    },
    {
      id: 'corporate-buffets',
      num: '05',
      title: 'Corporate Executive Buffets & Galas',
      subtitle: 'Pristine Hygiene, Punctual Setup & Boardroom Standards',
      description:
        'Balanced, temperature-controlled, and calorie-conscious dining for leadership summits, shareholder meetings, and corporate award evenings across Kolkata hotel convention centers.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      badge: 'Corporate Standard',
      highlights: [
        'Strictly punctual session buffet synchronization',
        'Calorie-conscious & international options',
        'Polite, uniformed bilingual serving captains',
        'Rapid setup and discreet breakdown',
      ],
    },
  ];

  // =========================================================================
  // 2. LUXURY FOOD SHOWCASE HIGHLIGHTS (BALANCED UNIFORM SIZING)
  // =========================================================================
  const foodHighlights = [
    {
      title: 'Live Gourmet Chef Buffet Counter',
      subtitle: 'Uniformed chefs serving live hot delicacies at wedding receptions',
      image: '/catering-gallary/20241129_202026.jpg',
      tag: 'Live Chef Hospitality',
    },
    {
      title: 'Authentic Bengali Basanti Pulao',
      subtitle: 'Fragrant Gobindobhog rice, golden pure ghee & whole dry fruits',
      image: '/catering-gallary/20250725_195009.jpg',
      tag: 'Heritage Signature',
    },
    {
      title: 'Royal Handi Dum Biryani',
      subtitle: 'Slow-cooked with saffron, rose water, tender meat & potato',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      tag: 'Awadhi Royalty',
    },
    {
      title: 'Artisanal Clay Pot Mishti Doi',
      subtitle: 'Traditional sweet red curd set in earthen matir shora',
      image: '/catering-gallary/20250725_205208.jpg',
      tag: 'Artisanal Mishti',
    },
  ];

  // =========================================================================
  // 2.5 IN-HOUSE LIVE DESSERT & BEVERAGE EQUIPMENT SPECIFICATIONS
  // =========================================================================
  const liveEquipmentItems = [
    {
      id: 'equip-softy-1',
      title: 'Commercial Soft-Serve & Softy Ice Cream Dispenser',
      bengaliTitle: 'ডিজিটাল সফটি আইসক্রিম ডিসপেন্সার মেশিন',
      category: 'Live Dessert Counter',
      badge: 'Wedding Reception Favorite',
      image: '/catering-equipment/live-softy-ice-cream-machine.png',
      caption: 'Digital countertop commercial soft-serve dispenser',
      description:
        'Commercial grade soft-serve ice cream machine featuring intelligent digital temperature & viscosity control, churning smooth vanilla, chocolate, and strawberry swirl cones for 600+ guests.',
      features: [
        'Dual micro-digital temperature & viscosity regulation',
        'Continuous smooth swirl dispensing with crisp waffle cones',
        'Rapid freezing recovery between serves (zero melting)',
        'Hygienic 304 food-grade stainless steel internal refrigeration',
      ],
      idealFor: 'Wedding receptions, Sangeet dessert lounges, and milestone birthdays.',
    },
    {
      id: 'equip-slush-1',
      title: 'Dolphin Commercial Frozen Slush & Granita Dispenser',
      bengaliTitle: 'ডলফিন ফ্রোজেন স্লাশ ও গ্রানিতা মকটেল মেশিন',
      category: 'Live Beverage Lounge',
      badge: 'Welcome Lounge Essential',
      image: '/catering-equipment/live-slush-frozen-mocktail-dispenser.jpg',
      caption: 'High-capacity clear cylinder frozen beverage dispenser by Dolphin Appliances',
      description:
        'Heavy-duty frozen granita and slush machine equipped with a clear illuminated hopper and slow-spiral churning auger, serving frosty Blue Lagoon, Virgin Mojito, and chilled Aam Panna slush.',
      features: [
        'Rapid cryogenic freezing cylinder with heavy-duty spiral auger',
        'Crystal-clear illuminated bowl showcasing vibrant iced mocktails',
        'Ergonomic push-dispense handle for swift guest hospitality',
        'Maintains uniform velvety frost texture even in summer weddings',
      ],
      idealFor: 'Entrance welcome drinks lounge, Summer Biye Bari, and cocktail evenings.',
    },
    {
      id: 'equip-snow-1',
      title: 'Dolphin Smart Snowmaker & Korean Bingsu Machine',
      bengaliTitle: 'ডলফিন টাচস্ক্রিন স্নোমেকার ও কোরিয়ান বিংসু মেশিন',
      category: 'Gourmet Live Dessert Bar',
      badge: 'Artisanal Dessert Theatre',
      image: '/catering-equipment/live-korean-bingsu-snow-ice-machine.jpg',
      caption: 'Instant cryogenic ribbon snowmaker with rotating turntable',
      description:
        'State-of-the-art commercial snowmaker crafting ultra-fine ribbon snow ice bowls topped with fresh Alphonso mango pulp, berries, Belgian chocolate drizzle, and sweet condensed milk.',
      features: [
        'Digital smart touchscreen console for precision speed & blade control',
        'Instant cryogenic roller transforming fruit juices & milk into snow',
        'Motorized spinning turntable for artistic 360° dessert bowl plating',
        'Spectacular interactive counter that guests love watching live',
      ],
      idealFor: 'Gourmet dessert lounges, VIP wedding receptions, and anniversary galas.',
    },
    {
      id: 'equip-softy-2',
      title: 'Live Softy Ice Cream Station Setup',
      bengaliTitle: 'অন-সাইট লাইভ সফটি স্টেশন অ্যান্ড সার্ভিস কাউন্টার',
      category: 'Live Dessert Counter',
      badge: 'In-House Banquet Service',
      image: '/catering-equipment/live-soft-serve-ice-cream-station.jpg',
      caption: 'Full operational on-site soft-serve setup ready for banquet service',
      description:
        'Fully managed on-site dessert stall staffed by our uniformed attendants, equipped with assorted sprinkles, chocolate sauce, and waffle cones for non-stop guest delight.',
      features: [
        'Manned by polite, uniformed Royal Enterprise dessert captains',
        'Choice of sprinkles, choco chips, gems & warm chocolate sauce',
        'Compact hygienic footprint integrating seamlessly with venue decor',
        'Top crowd-pleaser for children, families & dessert lovers alike',
      ],
      idealFor: 'Boubhat receptions, Annaprashan, and family celebration feasts.',
    },
  ];

  // =========================================================================
  // 3. EDITORIAL CATERING GALLERY (BALANCED UNIFORM GRID)
  // =========================================================================
  const galleryItems = [
    {
      id: 1,
      title: 'Live Gourmet Buffet Counter with Uniformed Chefs',
      category: 'Wedding Feasts',
      image: '/catering-gallary/20241129_202026.jpg',
      location: 'Grand Ballroom Buffet, Kolkata',
    },
    {
      id: 2,
      title: 'Commercial Soft-Serve & Softy Ice Cream Dispenser',
      category: 'Live Counters',
      image: '/catering-equipment/live-softy-ice-cream-machine.png',
      location: 'Live Dessert Lounge',
    },
    {
      id: 3,
      title: 'Dolphin Frozen Slush & Granita Mocktail Dispenser',
      category: 'Live Counters',
      image: '/catering-equipment/live-slush-frozen-mocktail-dispenser.jpg',
      location: 'Live Beverage Counter',
    },
    {
      id: 4,
      title: 'Dolphin Smart Snowmaker & Korean Bingsu Machine',
      category: 'Live Counters',
      image: '/catering-equipment/live-korean-bingsu-snow-ice-machine.jpg',
      location: 'Live Dessert Theatre',
    },
    {
      id: 5,
      title: 'Live Softy Ice Cream Station Setup',
      category: 'Desserts & Sweets',
      image: '/catering-equipment/live-soft-serve-ice-cream-station.jpg',
      location: 'Reception Dessert Stall',
    },
    {
      id: 6,
      title: 'Authentic Bengali Basanti Pulao in Golden Chafing Handi',
      category: 'Wedding Feasts',
      image: '/catering-gallary/20250725_195009.jpg',
      location: 'Royal Feast Buffet',
    },
    {
      id: 7,
      title: 'Artisanal Clay Pots for Bengali Mishti Doi',
      category: 'Desserts & Sweets',
      image: '/catering-gallary/20250725_205208.jpg',
      location: 'Traditional Mishti Counter',
    },
    {
      id: 8,
      title: 'Fresh Salad & Gourmet Appetizer Bar',
      category: 'Wedding Feasts',
      image: '/catering-gallary/20241129_202341 (1).jpg',
      location: 'Live Dining Pavilion',
    },
  ];

  const galleryCategories = ['All', 'Wedding Feasts', 'Live Counters', 'Desserts & Sweets'];
  const filteredGallery = galleryCategory === 'All'
    ? galleryItems
    : galleryItems.filter((i) => i.category === galleryCategory || (galleryCategory === 'All Dishes' && i.category === 'All Dishes'));

  // Keyboard navigation for Lightbox, Rate Chart Lightbox & Equipment Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (equipmentLightbox !== null) {
        if (e.key === 'Escape') setEquipmentLightbox(null);
        if (e.key === 'ArrowRight') {
          setEquipmentLightbox((prev) => (prev + 1) % liveEquipmentItems.length);
        }
        if (e.key === 'ArrowLeft') {
          setEquipmentLightbox((prev) => (prev - 1 + liveEquipmentItems.length) % liveEquipmentItems.length);
        }
        return;
      }
      if (rateChartLightbox !== null) {
        if (e.key === 'Escape') setRateChartLightbox(null);
        if (e.key === 'ArrowRight') {
          setRateChartLightbox((prev) => (prev + 1) % RATE_CHART_POSTERS.length);
        }
        if (e.key === 'ArrowLeft') {
          setRateChartLightbox((prev) => (prev - 1 + RATE_CHART_POSTERS.length) % RATE_CHART_POSTERS.length);
        }
        return;
      }
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredGallery.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredGallery.length, rateChartLightbox, equipmentLightbox]);

  // =========================================================================
  // 4. SIGNATURE FEAST PACKAGES (PRESERVED DATA)
  // =========================================================================
  const signaturePackages = [
    {
      id: 'package-a',
      code: 'Package A',
      fullName: 'Package A: Classic Heritage Feast (Standard Non-Veg)',
      name: 'Classic Heritage Feast (Standard Non-Veg)',
      bestFor: 'Reception (Boubhat), Annaprashan, Ring Ceremonies',
      badge: 'Classic Heritage',
      sections: [
        {
          heading: 'Welcome Drinks',
          items: ['Gondhoraj Lemonade / Aam Panna', 'Signature Mocktail Bar'],
        },
        {
          heading: 'Starters (Passed Around)',
          items: [
            'Kolkata Pure Bhetki Fish Fry (Kasundi dip)',
            'Crispy Mochar Chop',
            'Paneer Malai Tikka',
          ],
        },
        {
          heading: 'Breads & Traditional Starters',
          items: ['Koraishutir Kochuri / Radhaballavi with Hing-Aloordum'],
        },
        {
          heading: 'Salad & Accompaniments',
          items: [
            'Green Garden Salad with Kasundi Mustard Dressing',
            'Plastic (Raw Papaya) Chutney / Pineapple Chutney & Crispy Papad',
          ],
        },
        {
          heading: 'Mains (Fish, Poultry & Veg)',
          items: [
            'Steamed Gobindobhog Basanti Pulao',
            'Katla Kalia / Rui Macher Jhol',
            'Royal Chicken Chaap or Chicken Kosha',
            'Chhanar Dalna / Veg Navratan Korma (Vegetarian guests)',
          ],
        },
        {
          heading: 'Desserts & Sweets',
          items: [
            'Traditional Baked Rosogolla',
            'Mishti Doi (in traditional clay pots)',
            'Vanilla Ice Cream with Hot Chocolate sauce',
          ],
        },
      ],
    },
    {
      id: 'package-b',
      code: 'Package B',
      fullName: 'Package B: The Grand Imperial Royal Spread (Premium Non-Veg)',
      name: 'The Grand Imperial Royal Spread (Premium Non-Veg)',
      bestFor: 'Grand Weddings & Premium Receptions',
      badge: 'Most Requested Imperial',
      popular: true,
      sections: [
        {
          heading: 'Welcome Drinks & Brews',
          items: [
            'Blue Lagoon Citrus Cooler',
            'Fresh Tender Coconut Water',
            'Live Turkish Sand Coffee Counter',
          ],
        },
        {
          heading: 'Live Starter Theatres',
          items: [
            'Kolkata Style Phuchka & Papri Chaat Bar (3 flavors of spiced water)',
            'Live Tandoor: Chicken Reshmi Kebab, Murgh Malai Tikka, Tandoori Fish Tikka',
            'Veg Starters: Crispy Baby Corn, Dahi ke Kebab, Paneer Shashlik',
          ],
        },
        {
          heading: 'Breads, Rice & Biryani',
          items: [
            'Assorted Naan (Butter, Garlic) & Laccha Paratha',
            'Kolkata Dum Mutton Biryani (with soft egg & melt-in-mouth aloo)',
            'Shahi Kaju-Kishmish Pulao',
          ],
        },
        {
          heading: 'Royal Seafood & Meat Mains',
          items: [
            'Kolkata Bhetki Paturi (steamed in banana leaf) OR Daab Chingri (Jumbo prawn in coconut)',
            'Signature Slow-Cooked Mutton Kosha (tender meat in rich gravy)',
            'Paneer Lababdar & Dal Bukhara (Vegetarian alternatives)',
          ],
        },
        {
          heading: 'Desserts & Confectionery',
          items: [
            'Live Malpua with Rabri / Live Jilebi Counter',
            'Nolen Gur Sandesh / Kesar Rasmalai',
            'Matka Kulfi with Faluda',
            'Sweet Pan Counter (Banarasi / Fire Pan)',
          ],
        },
      ],
    },
    {
      id: 'package-c',
      code: 'Package C',
      fullName: 'Package C: Pure Vegetarian Shubh Vivah Spread',
      name: 'Pure Vegetarian Shubh Vivah Spread',
      bestFor: 'Sangeet, Pooja, Haldi, Marwari / Jain Celebrations',
      badge: 'Sattvic Grandeur',
      sections: [
        {
          heading: 'Welcome Drinks',
          items: ['Kesariya Thandai', 'Royal Rose Sherbet & Sabja', 'Fresh Fruit Coolers'],
        },
        {
          heading: 'Artisanal Starters',
          items: [
            'Dahi Puchka & Palak Patta Chaat Bar',
            'Paneer Tikka Angara with Mint Coulis',
            'Hara Bhara Kebab with Spiced Cashew',
          ],
        },
        {
          heading: 'Royal Vegetarian Mains',
          items: [
            'Jodhpuri Dal Baati Churma with Pure Desi Ghee',
            'Paneer Pasanda / Shahi Paneer in Cashew Cream',
            'Gatte Ki Sabzi / Kashmiri Dum Aloo',
            'Panchmel Dal & Fragrant Kesar Jeera Rice',
          ],
        },
        {
          heading: 'Breads',
          items: ['Missi Roti', 'Butter Naan', 'Tandoori Kulcha'],
        },
        {
          heading: 'Traditional Sweets',
          items: [
            'Warm Moong Dal Halwa with Gold Leaf',
            'Kesari Jalebi with Creamy Rabri',
            'Traditional Rajasthani Ghewar',
          ],
        },
      ],
    },
  ];

  // =========================================================================
  // 5. CATERING PRICING GUIDE (BENCHMARKS BASED ON ANALYZED RATE CHARTS)
  // =========================================================================
  const pricingGuide = [
    {
      category: 'Budget Traditional (₹720 / plate)',
      caterer: 'Joyguru Caterer',
      highlights: 'Phuchka & Coffee stalls, Fish Fry with Kasundi, Kolkata Mutton Biryani, Chicken Kosha, Doi Katla, Rumali Roti, Rajbhog & Kesar Jalebi.',
    },
    {
      category: 'Special Wedding Feast (₹750 / plate)',
      caterer: 'Bangaliana Caterer (Best Value)',
      highlights: 'Live Radhaballabhi, Fish Kabiraji, Doi Katla, Mutton/Chicken Kosha, Dal Maharani, Rosogolla, Sandesh + Free 20-Guest Breakfast & Lunch.',
    },
    {
      category: 'Grand Multi-Course Banquet (₹750 / plate)',
      caterer: "Santanu's Food Adda (Rajkio Menu #9)",
      highlights: '2 Welcome Coolers, 3 Starters (Golden Prawns, Bhetki Fry), Clear Soup, Basanti Pulao, 4 Non-Veg Mains (Mutton Kosha, Chingri Malaikari), 4 Desserts & Meetha Paan.',
    },
    {
      category: 'Full-Day Ceremonial Feast (₹950 / plate)',
      caterer: 'Nilkantha Caterer (Full Day)',
      highlights: 'All-Day Care: Morning Luchi-Alur Dom, Afternoon Katla Kalia Lunch, Evening Live Tandoor Kebabs, Bhetki Paturi, Mutton Kosha & Dedicated Veg Counter.',
    },
    {
      category: 'Imperial Luxury Diamond (₹1,250 / plate)',
      caterer: 'Maa Sandhya Caterers (Min 250 Plates)',
      highlights: '14-item Mocktail Counter, Diamond Bhetki Fry, Chicken Malai Kebab, Bhetki Paturi, Chingri Malaikari, Mutton Maharaja / Rogan Josh, Rabri, 3 Ice Creams & Fire Paan.',
    },
  ];

  const handleSelectPackage = (pkgFullName) => {
    setSelectedPackage(pkgFullName);
    const formElement = document.getElementById('catering-enquiry-form');
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
      {/* 1. PREMIUM CATERING HERO SECTION (ASYMMETRIC SPLIT) */}
      {/* ========================================================================= */}
      <section className="pt-36 sm:pt-44 pb-16 lg:pb-24 border-b border-[#E8DFD3] dark:border-[#244C4A] bg-[#FAF5ED] dark:bg-[#143130] transition-colors relative z-10">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Editorial Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.24em] font-semibold text-[#D66D59] dark:text-[#D6B56F]">
                <AntiqueStar className="w-3.5 h-3.5 text-[#D6B56F]" />
                <span>Kolkata & Eastern India • In-House Gourmet Feasts</span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal text-[#292323] dark:text-[#F5EFE5] tracking-tight leading-[1.05]">
                Gourmet Feasts Fit For <br />
                <span className="italic font-display text-[#193C3B] dark:text-[#D6B56F]">
                  Royal Celebrations.
                </span>
              </h1>

              <p className="font-display text-xl sm:text-2xl text-[#D66D59] dark:text-[#D6B56F] font-normal italic max-w-2xl">
                "We cook the food ourselves. Nothing is outsourced to a stranger’s kitchen."
              </p>

              <p className="text-base sm:text-lg text-[#665C5C] dark:text-[#C8D6D5] font-light leading-relaxed max-w-xl">
                From crispy Kolkata Bhetki fry and slow-simmered Mutton Kosha to fragrant Awadhi dum biryanis and dedicated pure-veg Marwari kitchens — cooked fresh on site by our veteran bawarchis.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('rate-charts');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3.5 text-xs uppercase tracking-[0.14em] font-semibold rounded-lg bg-[#D66D59] hover:bg-[#BA5643] text-white shadow-lg transition-all inline-flex items-center space-x-2"
                >
                  <Tag className="w-3.5 h-3.5 text-white" />
                  <span>Rate Charts (₹720 - ₹1,250)</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('signature-menus');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 text-xs uppercase tracking-[0.14em] font-semibold rounded-lg bg-white/80 dark:bg-[#102726] hover:bg-white dark:hover:bg-[#193C3B] text-[#193C3B] dark:text-[#F5EFE5] border border-[#E8DFD3] dark:border-[#244C4A] transition-all"
                >
                  Signature Menus
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('menu-explorer');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 text-xs uppercase tracking-[0.14em] font-semibold rounded-lg bg-white/80 dark:bg-[#102726] hover:bg-white dark:hover:bg-[#193C3B] text-[#193C3B] dark:text-[#F5EFE5] border border-[#E8DFD3] dark:border-[#244C4A] transition-all"
                >
                  Browse All Dishes
                </button>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20our%20catering%20menu.`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3.5 text-xs uppercase tracking-[0.12em] font-semibold inline-flex items-center space-x-2 shadow-sm rounded-lg transition-all duration-200"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right: Arched Feast Framing with Overlapping Dish Detail */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[420px]">
                <div className="relative z-10 w-full aspect-[4/5] rounded-t-[190px] rounded-b-2xl overflow-hidden shadow-2xl border-2 border-[#D6B56F]/40 bg-[#102726]">
                  <img
                    src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80"
                    alt="Royal Enterprise Gourmet Wedding Catering and Banquet Setup in Kolkata"
                    className="w-full h-full object-cover filter brightness-[0.96]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#193C3B]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-center text-white text-xs">
                    <span className="text-[#D6B56F] uppercase tracking-[0.2em] font-semibold block mb-0.5">
                      100% In-House Kitchen
                    </span>
                    <span className="font-display italic text-base text-[#F5EFE5]">
                      Veteran Bawarchis & Authentic Clay Grills
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
              <span>100% In-house preparation. Never outsourced.</span>
            </div>
            <div className="flex items-center space-x-3">
              <Leaf className="w-4 h-4 text-[#526C55] dark:text-[#D6B56F]" />
              <span>Dedicated separate kitchens for pure-veg banquets</span>
            </div>
            <div className="flex items-center space-x-3">
              <Utensils className="w-4 h-4 text-[#D6B56F]" />
              <span>Complimentary pre-wedding live menu tastings</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Flow */}
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 py-14 sm:py-20 space-y-16 sm:space-y-24 relative z-10">

        {/* ========================================================================= */}
        {/* 2. LUXURY FOOD SHOWCASE SECTION */}
        {/* ========================================================================= */}
        <section id="food-showcase">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D6B56F]" />
              <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#D66D59] dark:text-[#D6B56F]">
                Culinary Artistry
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#292323] dark:text-[#F5EFE5] font-normal tracking-tight leading-[1.08]">
              Honest Ingredients. <br />
              <span className="italic font-display text-[#193C3B] dark:text-[#D6B56F]">
                Unforgettable Flavours.
              </span>
            </h2>

            <p className="text-base text-[#665C5C] dark:text-[#C8D6D5] font-light leading-relaxed">
              Every dish is freshly prepared at your venue by our veteran bawarchis using pure mustard oil, morning-fresh Kolkata fish, and traditional slow-cooked spices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {foodHighlights.map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden border border-[#E8DFD3] dark:border-[#244C4A] bg-[#FAF5ED] dark:bg-[#143130] shadow-sm hover:shadow-xl transition-all duration-500 group h-[260px] sm:h-[280px] flex flex-col justify-end"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute top-3.5 left-3.5 bg-[#193C3B]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-[10px] uppercase tracking-wider font-semibold text-[#D6B56F] font-sans z-10">
                  {item.tag}
                </div>
                <div className="relative z-10 p-4 sm:p-5 text-white space-y-1 font-sans">
                  <h3 className="font-display text-lg sm:text-xl font-normal leading-snug text-white drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#F5EFE5]/85 font-light line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. CATERING DISCIPLINES (ALTERNATING EDITORIAL SHOWCASE) */}
        {/* ========================================================================= */}
        <section id="catering-disciplines">
          <SectionHeader
            badge="Catering Disciplines"
            title="Traditions and Formats We Specialize In"
            subtitle="From legendary Bengali Biye Bari courses to clay-oven grills, live theatres, and dedicated vegetarian kitchens."
          />

          <div className="space-y-14 sm:space-y-20 pt-6">
            {cateringDisciplines.map((item, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={item.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
                >
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-7 relative group ${
                      isEven ? 'order-1 lg:order-2' : 'order-1'
                    }`}
                  >
                    <div className="relative rounded-2xl overflow-hidden border border-[#E8DFD3] dark:border-[#244C4A] bg-[#FAF5ED] dark:bg-[#143130] shadow-lg aspect-[16/10]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.96]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white font-sans text-xs">
                        <span className="uppercase tracking-[0.2em] font-medium text-[#D6B56F]">
                          {item.badge}
                        </span>
                        <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[10.5px]">
                          Fresh On-Site Preparation
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Text Column */}
                  <div
                    className={`lg:col-span-5 space-y-4 ${
                      isEven ? 'order-2 lg:order-1' : 'order-2'
                    }`}
                  >
                    <div className="flex items-center justify-between border-b border-[#E8DFD3] dark:border-[#244C4A] pb-2">
                      <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D66D59] dark:text-[#D6B56F] flex items-center space-x-2 font-sans">
                        <Utensils className="w-3.5 h-3.5 text-[#D6B56F]" />
                        <span>Pillar {item.num} • {item.badge}</span>
                      </span>
                      <span className="font-display text-4xl font-light text-[#D6B56F]/40 select-none">
                        {item.num}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#292323] dark:text-[#F5EFE5] leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#D6B56F] font-semibold font-sans">
                      {item.subtitle}
                    </p>

                    <p className="text-sm text-[#665C5C] dark:text-[#C8D6D5] font-light leading-relaxed font-sans">
                      {item.description}
                    </p>

                    <div className="space-y-2 pt-2 font-sans">
                      {item.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-center space-x-2 text-xs text-[#292323] dark:text-[#C8D6D5]">
                          <Check className="w-3.5 h-3.5 text-[#D66D59] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3">
                      <button
                        type="button"
                        onClick={() => handleSelectPackage('Package B: The Grand Imperial Royal Spread (Premium Non-Veg)')}
                        className="px-6 py-3 text-xs uppercase tracking-wider font-semibold rounded-lg bg-[#193C3B] hover:bg-[#102726] text-white shadow-sm inline-flex items-center space-x-2 transition-colors font-sans"
                      >
                        <span>Inquire For This Menu</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#D6B56F]" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. PREMIUM DINING EXPERIENCE (SPLIT-SCREEN SECTION) */}
        {/* ========================================================================= */}
        <section id="dining-experience" className="bg-[#FAF5ED] dark:bg-[#143130] rounded-2xl border border-[#E8DFD3] dark:border-[#244C4A] overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Side: Large Luxury Dining Photography */}
            <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[520px]">
              <img
                src="/images/hero-stage.png"
                alt="Royal Enterprise Luxurious Dining Setup & Banquet Table Arrangement"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-white font-sans">
                <span className="text-xs font-display italic text-[#D6B56F] block">The Dining Standard</span>
                <span className="text-xs font-medium text-white">Fine Bone China & Polished Serviceware</span>
              </div>
            </div>

            {/* Right Side: Editorial Content */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-6">
              <div className="space-y-3.5">
                <div className="inline-flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D6B56F]" />
                  <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#D66D59] dark:text-[#D6B56F] font-sans">
                    Hospitality & Tablecraft
                  </span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#292323] dark:text-[#F5EFE5] leading-tight">
                  The Art of Refined <br />
                  <span className="italic font-display text-[#193C3B] dark:text-[#D6B56F]">Banquet Hospitality.</span>
                </h2>

                <p className="text-sm text-[#665C5C] dark:text-[#C8D6D5] font-light leading-relaxed font-sans">
                  Great catering is not merely what is on the plate—it is the grace with which your guests are received, the warmth of the serving captains, and the immaculate presentation of the dining floor.
                </p>
              </div>

              {/* 4 Pillars of Tablecraft */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs text-[#292323] dark:text-[#C8D6D5] font-sans">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-[#193C3B] dark:text-[#D6B56F] font-semibold text-sm">
                    <Award className="w-4 h-4 text-[#D6B56F]" />
                    <span>Fine Serviceware</span>
                  </div>
                  <p className="text-[#665C5C] dark:text-[#8FA4A3] font-light leading-relaxed">
                    Fine bone china, polished copper buffet warmers, and hammered brass handis.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-[#193C3B] dark:text-[#D6B56F] font-semibold text-sm">
                    <ChefHat className="w-4 h-4 text-[#D6B56F]" />
                    <span>Trained Stewards</span>
                  </div>
                  <p className="text-[#665C5C] dark:text-[#8FA4A3] font-light leading-relaxed">
                    Polite, uniformed bilingual serving captains and swift clearing staff.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-[#193C3B] dark:text-[#D6B56F] font-semibold text-sm">
                    <ShieldCheck className="w-4 h-4 text-[#D6B56F]" />
                    <span>Sanitized Holding</span>
                  </div>
                  <p className="text-[#665C5C] dark:text-[#8FA4A3] font-light leading-relaxed">
                    Temperature-monitored holding units and strict kitchen cleanliness.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-[#193C3B] dark:text-[#D6B56F] font-semibold text-sm">
                    <GlassWater className="w-4 h-4 text-[#D6B56F]" />
                    <span>Beverage Care</span>
                  </div>
                  <p className="text-[#665C5C] dark:text-[#8FA4A3] font-light leading-relaxed">
                    Branded packaged water dispensers and imported glassware for mocktails.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E8DFD3] dark:border-[#244C4A]">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('catering-enquiry-form');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-7 py-3.5 text-xs uppercase tracking-wider font-semibold rounded-lg bg-[#D66D59] hover:bg-[#BA5643] text-white shadow-md transition-colors font-sans"
                >
                  Reserve Your Event Date
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4.5 AUTHENTIC CATERER RATE CHARTS & POSTERS */}
        {/* ========================================================================= */}
        <section id="rate-charts" className="space-y-8">
          <SectionHeader
            badge="Verified Rate Charts & Menu Cards"
            title="Authentic Caterer Rate Charts & Plate Pricing"
            subtitle="প্রামাণ্য ক্যাটারার রেট চার্ট ও মেনু কার্ড — Transparent, authentic plate rates from ₹720 to ₹1,250 with verified course breakdowns and original posters."
          />

          {/* Quick Rate Badges Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-sans pb-2">
            {RATE_CHART_POSTERS.map((rc, idx) => (
              <button
                key={rc.id}
                type="button"
                onClick={() => setRateChartLightbox(idx)}
                className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-medium border border-[#E8DFD3] dark:border-[#244C4A] bg-[#FAF5ED] dark:bg-[#143130] text-[#193C3B] dark:text-[#D6B56F] hover:border-[#D6B56F] hover:bg-[#193C3B] hover:text-[#D6B56F] transition-all"
              >
                <Tag className="w-3 h-3 text-[#D66D59] shrink-0" />
                <span className="font-semibold">{rc.price}</span>
                <span className="text-[11px] opacity-80">({rc.caterer})</span>
              </button>
            ))}
          </div>

          {/* 5 Rate Chart Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RATE_CHART_POSTERS.map((poster, idx) => (
              <div
                key={poster.id}
                className="group relative rounded-2xl overflow-hidden border border-[#E8DFD3] dark:border-[#244C4A] bg-[#FAF5ED] dark:bg-[#143130] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Poster Thumbnail with Hover Zoom & Click to Open Lightbox */}
                  <div
                    onClick={() => setRateChartLightbox(idx)}
                    className="relative aspect-[3/4] overflow-hidden bg-[#102726] cursor-pointer"
                  >
                    <img
                      src={poster.image}
                      alt={poster.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 opacity-70 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Badge top-left */}
                    <div className="absolute top-3.5 left-3.5 bg-[#193C3B]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#D6B56F]/40 text-[10.5px] uppercase tracking-wider font-semibold text-[#D6B56F]">
                      {poster.badge}
                    </div>

                    {/* Zoom Icon top-right */}
                    <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-[#D6B56F] border border-white/20 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                      <Maximize2 className="w-4 h-4" />
                    </div>

                    {/* Bottom overlay with Price Tag */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between">
                      <div className="max-w-[70%]">
                        <span className="text-[11px] text-white/80 uppercase tracking-widest block font-sans">
                          {poster.caterer}
                        </span>
                        <h4 className="text-white font-display text-lg font-normal drop-shadow-md truncate">
                          {poster.title}
                        </h4>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-display text-2xl font-bold text-[#D6B56F] drop-shadow-md block">
                          {poster.price}
                        </span>
                        <span className="block text-[10px] text-white/80 font-sans">
                          {poster.priceUnit}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4 font-sans text-left">
                    <p className="text-xs text-[#665C5C] dark:text-[#C8D6D5] font-light leading-relaxed">
                      {poster.summary}
                    </p>

                    {/* Highlighted items */}
                    <div className="space-y-2 pt-2 border-t border-[#E8DFD3] dark:border-[#244C4A]">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#193C3B] dark:text-[#D6B56F] block">
                        Course Highlights:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#292323] dark:text-[#C8D6D5]">
                        {poster.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D66D59] mr-2 mt-0.5 shrink-0" />
                            <span className="font-light">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="p-6 pt-0 grid grid-cols-2 gap-3 font-sans">
                  <button
                    type="button"
                    onClick={() => setRateChartLightbox(idx)}
                    className="py-2.5 px-3 rounded-lg border border-[#E8DFD3] dark:border-[#244C4A] hover:border-[#193C3B] dark:hover:border-[#D6B56F] text-[#193C3B] dark:text-[#F5EFE5] text-xs font-medium inline-flex items-center justify-center space-x-1.5 transition-colors bg-white/60 dark:bg-[#102726]"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#D6B56F]" />
                    <span>View Poster</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const matched = CATERING_PACKAGES.find(p => p.price.includes(poster.price.replace(/[^\d]/g, '')) || p.name.includes(poster.caterer.split(' ')[0]));
                      const pkgName = matched ? `${matched.code}: ${matched.name} (${matched.price})` : `${poster.title} (${poster.price})`;
                      handleSelectPackage(pkgName);
                    }}
                    className="py-2.5 px-3 rounded-lg bg-[#193C3B] hover:bg-[#102726] text-white text-xs font-semibold inline-flex items-center justify-center space-x-1 transition-colors shadow-sm"
                  >
                    <span>Select Menu</span>
                    <ArrowRight className="w-3 h-3 text-[#D6B56F]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4.8 IN-HOUSE LIVE DESSERT THEATRES & BEVERAGE STATIONS */}
        {/* ========================================================================= */}
        <section id="live-stations" className="space-y-8">
          <SectionHeader
            badge="In-House Culinary Equipment"
            title="Live Dessert Theatres & Frozen Beverage Stations"
            subtitle="ইন-হাউস লাইভ ডেজার্ট ও ফ্রোজেন বেভারেজ কাউন্টার — We own and deploy our own commercial softy dispensers, frozen slush granita machines, and Korean bingsu snowmakers for live wedding hospitality."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {liveEquipmentItems.map((item, idx) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden border border-[#E8DFD3] dark:border-[#244C4A] bg-[#FAF5ED] dark:bg-[#143130] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Equipment Photography */}
                  <div
                    onClick={() => setEquipmentLightbox(idx)}
                    className="relative aspect-[4/5] overflow-hidden bg-white/90 dark:bg-[#102726] flex items-center justify-center p-3 cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />

                    {/* Badge top-left */}
                    <div className="absolute top-3 left-3 bg-[#193C3B]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#D6B56F]/40 text-[10px] uppercase tracking-wider font-semibold text-[#D6B56F]">
                      {item.badge}
                    </div>

                    {/* Zoom Icon top-right */}
                    <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md text-[#D6B56F] border border-white/20 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>

                    {/* Bottom overlay with Category */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 flex items-center justify-between text-white text-[11px] font-sans">
                      <span className="text-[#D6B56F] font-medium">{item.category}</span>
                      <span className="text-white/70 text-[10px]">In-House Asset</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3 font-sans text-left">
                    <div>
                      <span className="text-[11px] text-[#D66D59] dark:text-[#D6B56F] font-semibold block mb-0.5">
                        {item.bengaliTitle}
                      </span>
                      <h4 className="font-display text-lg font-normal text-[#292323] dark:text-[#F5EFE5] leading-snug">
                        {item.title}
                      </h4>
                    </div>

                    <p className="text-xs text-[#665C5C] dark:text-[#C8D6D5] font-light leading-relaxed">
                      {item.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-1.5 pt-2 border-t border-[#E8DFD3] dark:border-[#244C4A]">
                      <span className="text-[10.5px] uppercase tracking-wider font-semibold text-[#193C3B] dark:text-[#D6B56F] block">
                        Equipment Highlights:
                      </span>
                      <ul className="space-y-1 text-xs text-[#292323] dark:text-[#C8D6D5]">
                        {item.features.map((f, fIdx) => (
                          <li key={fIdx} className="flex items-start">
                            <CheckCircle2 className="w-3 h-3 text-[#D66D59] mr-1.5 mt-0.5 shrink-0" />
                            <span className="font-light text-[11px] leading-tight">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="p-5 pt-0 grid grid-cols-2 gap-2.5 font-sans">
                  <button
                    type="button"
                    onClick={() => setEquipmentLightbox(idx)}
                    className="py-2 px-2.5 rounded-lg border border-[#E8DFD3] dark:border-[#244C4A] hover:border-[#193C3B] dark:hover:border-[#D6B56F] text-[#193C3B] dark:text-[#F5EFE5] text-[11px] font-medium inline-flex items-center justify-center space-x-1 transition-colors bg-white/60 dark:bg-[#102726]"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#D6B56F]" />
                    <span>Inspect</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const formElement = document.getElementById('catering-enquiry-form');
                      if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="py-2 px-2.5 rounded-lg bg-[#193C3B] hover:bg-[#102726] text-white text-[11px] font-semibold inline-flex items-center justify-center space-x-1 transition-colors shadow-sm"
                  >
                    <span>Add to Menu</span>
                    <ArrowRight className="w-3 h-3 text-[#D6B56F]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. SIGNATURE MENUS (PRESERVED DATA & LOGIC) */}
        {/* ========================================================================= */}
        <section id="signature-menus">
          <SectionHeader
            badge="Signature Feasts"
            title="Our Most Requested Banquet Spreads"
            subtitle="Curated menu sequences featuring authentic Kolkata Bhetki, slow-cooked Mutton Kosha, and hot artisanal mishti."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {signaturePackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 font-sans ${
                  pkg.popular
                    ? 'bg-[#FAF5ED] dark:bg-[#143130] border-2 border-[#193C3B] dark:border-[#D6B56F] shadow-2xl'
                    : 'bg-[#FAF5ED] dark:bg-[#143130] border border-[#E8DFD3] dark:border-[#244C4A] hover:border-[#193C3B]/40 dark:hover:border-[#D6B56F]/50 shadow-sm'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#193C3B] text-white font-semibold text-xs px-4 py-1 rounded-full shadow-md flex items-center">
                    <Crown className="w-3.5 h-3.5 mr-1.5 text-[#D6B56F]" />
                    {pkg.badge}
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#D66D59] dark:text-[#D6B56F] block mb-1">
                      {pkg.code}
                    </span>
                    <h3 className="font-display text-3xl font-normal text-[#292323] dark:text-[#F5EFE5] mb-2 leading-snug">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#665C5C] dark:text-[#C8D6D5] bg-white/70 dark:bg-[#102726] p-3.5 rounded-xl border border-[#E8DFD3] dark:border-[#244C4A] font-light">
                      <strong className="text-[#292323] dark:text-[#F5EFE5] font-semibold">Best for:</strong> {pkg.bestFor}
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    {pkg.sections.map((sec, secIdx) => (
                      <div key={secIdx} className="border-b border-[#E8DFD3] dark:border-[#244C4A] pb-3.5 last:border-b-0">
                        <h5 className="text-xs uppercase tracking-wider font-semibold text-[#193C3B] dark:text-[#D6B56F] mb-2">
                          {sec.heading}:
                        </h5>
                        <ul className="space-y-1.5 text-xs text-[#665C5C] dark:text-[#C8D6D5] font-light">
                          {sec.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-[#D66D59] mr-2 mt-1.5 shrink-0 rounded-full" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleSelectPackage(pkg.fullName)}
                  className={`w-full py-3.5 text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors ${
                    pkg.popular
                      ? 'bg-[#193C3B] hover:bg-[#102726] text-white shadow-md'
                      : 'border border-[#CBBFB0] dark:border-[#2B5755] text-[#292323] dark:text-[#F5EFE5] hover:bg-white dark:hover:bg-[#102726]'
                  }`}
                >
                  Choose Menu & Request Tasting
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. EDITORIAL CATERING PHOTOGRAPHY GALLERY WITH LIGHTBOX */}
        {/* ========================================================================= */}
        <section id="catering-gallery">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-2 max-w-xl text-left">
              <div className="inline-flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6B56F]" />
                <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#D66D59] dark:text-[#D6B56F] font-sans">
                  Culinary Portfolio
                </span>
              </div>
              <h3 className="font-display text-4xl sm:text-5xl text-[#292323] dark:text-[#F5EFE5] font-normal">
                Feast Presentation & Tablecraft
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2 font-sans">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setGalleryCategory(cat)}
                  className={`text-xs uppercase tracking-wider font-medium px-4 py-2.5 rounded-lg transition-all duration-300 ${
                    galleryCategory === cat
                      ? 'bg-[#193C3B] text-white shadow-sm'
                      : 'bg-[#FAF5ED] dark:bg-[#143130] text-[#665C5C] dark:text-[#C8D6D5] border border-[#E8DFD3] dark:border-[#244C4A] hover:border-[#193C3B]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredGallery.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className="group relative rounded-2xl overflow-hidden border border-[#E8DFD3] dark:border-[#244C4A] bg-[#FAF5ED] dark:bg-[#143130] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer h-[320px] sm:h-[350px] flex flex-col justify-end"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Subtle permanent dark gradient to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Rich Full Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Category Badge top-left */}
                <div className="absolute top-3.5 left-3.5 bg-[#193C3B]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#D6B56F]/40 text-[10px] uppercase tracking-wider font-semibold text-[#D6B56F] shadow-sm z-10">
                  {item.category}
                </div>

                {/* Zoom Icon top-right */}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-[#D6B56F] border border-white/20 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 shadow-sm z-10">
                  <Plus className="w-4 h-4 stroke-[2]" />
                </div>

                {/* Bottom Details Container - ALWAYS visible and never clipped! */}
                <div className="relative z-10 p-4 sm:p-5 text-white font-sans w-full">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D6B56F] block mb-1 drop-shadow-sm truncate">
                    {item.location}
                  </span>
                  <h4 className="font-display text-base sm:text-lg font-normal leading-snug text-white line-clamp-2 drop-shadow-md">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. INTERACTIVE DISH EXPLORER */}
        {/* ========================================================================= */}
        <section id="menu-explorer" className="bg-[#FAF5ED] dark:bg-[#143130] border border-[#E8DFD3] dark:border-[#244C4A] rounded-2xl p-8 sm:p-12 shadow-sm">
          <SectionHeader
            badge="Full Culinary Repertoire"
            title="Browse Our Dish Library"
            subtitle="Explore our traditional Bengali fish courses, royal dum biryanis, clay-oven kebabs, and artisanal sweets."
          />
          <CateringMenuSection />
        </section>

        {/* ========================================================================= */}
        {/* 8. CATERING PRICING GUIDE */}
        {/* ========================================================================= */}
        <section id="pricing-guide" className="bg-[#FAF5ED] dark:bg-[#143130] border border-[#E8DFD3] dark:border-[#244C4A] rounded-2xl p-8 sm:p-12 shadow-sm">
          <SectionHeader
            badge="Menu Benchmarks"
            title="Catering Menu & Rate Benchmark Guide"
            subtitle="Standard course breakdowns and authentic market plate rates to help plan your wedding or milestone banquet."
          />

          <div className="overflow-x-auto rounded-xl border border-[#E8DFD3] dark:border-[#244C4A] bg-white/70 dark:bg-[#102726] font-sans">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead className="bg-[#FAF5ED] dark:bg-[#143130] text-[#193C3B] dark:text-[#D6B56F] uppercase tracking-[0.16em] font-semibold border-b border-[#E8DFD3] dark:border-[#244C4A]">
                <tr>
                  <th className="p-4 border-r border-[#E8DFD3] dark:border-[#244C4A] text-[11px] w-1/4">Package Tier & Rate</th>
                  <th className="p-4 border-r border-[#E8DFD3] dark:border-[#244C4A] text-[11px] w-1/4">Caterer Reference</th>
                  <th className="p-4 text-[11px]">Verified Course Highlights</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8DFD3] dark:divide-[#244C4A] text-[#292323] dark:text-[#C8D6D5]">
                {pricingGuide.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/60 dark:hover:bg-[#193C3B]/40 transition-colors">
                    <td className="p-4 font-semibold text-[#193C3B] dark:text-[#D6B56F] border-r border-[#E8DFD3] dark:border-[#244C4A]">{row.category}</td>
                    <td className="p-4 font-medium text-[#292323] dark:text-[#F5EFE5] border-r border-[#E8DFD3] dark:border-[#244C4A]">{row.caterer}</td>
                    <td className="p-4 font-light text-[#665C5C] dark:text-[#C8D6D5] leading-relaxed">{row.highlights}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-xs text-[#8C8282] italic mt-6 font-light font-sans">
            (Note: Pricing adjusts based on guest count, fish selection such as Vetki vs. Katla, and live counter additions).
          </p>
        </section>

        {/* ========================================================================= */}
        {/* 9. DEDICATED CATERING ENQUIRY FORM */}
        {/* ========================================================================= */}
        <section id="catering-enquiry-form" className="max-w-4xl mx-auto pt-6">
          <SectionHeader
            badge="Menu Consultation"
            title="Reserve Your Catering Date"
            subtitle="Submit your menu preferences and guest count. Our master culinary director will prepare an exquisite, itemized menu tasting proposal."
          />
          <CateringEnquiryForm initialPackage={selectedPackage} />
        </section>

      </div>

      {/* Full-Screen Lightbox for Catering Gallery */}
      {lightboxIndex !== null && filteredGallery[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="flex items-center justify-between text-white/80 max-w-[1320px] w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xs uppercase tracking-[0.2em] text-[#D6B56F] font-mono">
              0{lightboxIndex + 1} / 0{filteredGallery.length}
            </div>
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div
            className="relative flex items-center justify-center my-auto max-w-5xl mx-auto w-full h-[70vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredGallery[lightboxIndex].image}
              alt={filteredGallery[lightboxIndex].title}
              className="max-h-full max-w-full object-contain rounded-xl shadow-2xl border border-white/20"
            />
            <button
              type="button"
              onClick={() =>
                setLightboxIndex(
                  (lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length
                )
              }
              className="absolute left-2 sm:-left-16 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={() =>
                setLightboxIndex((lightboxIndex + 1) % filteredGallery.length)
              }
              className="absolute right-2 sm:-right-16 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div
            className="text-center text-white max-w-xl mx-auto pb-4 font-sans"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-[#D6B56F] font-semibold block mb-1">
              {filteredGallery[lightboxIndex].category} • {filteredGallery[lightboxIndex].location}
            </span>
            <h4 className="font-display text-xl sm:text-2xl font-normal text-white">
              {filteredGallery[lightboxIndex].title}
            </h4>
          </div>
        </div>
      )}

      {/* Full-Screen Lightbox for Rate Chart Posters */}
      {rateChartLightbox !== null && RATE_CHART_POSTERS[rateChartLightbox] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fade-in"
          onClick={() => setRateChartLightbox(null)}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between text-white/90 max-w-[1320px] w-full mx-auto pb-3 border-b border-white/10 font-sans"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D6B56F] font-mono">
                RATE CHART 0{rateChartLightbox + 1} / 0{RATE_CHART_POSTERS.length}
              </span>
              <span className="hidden sm:inline-block bg-[#D66D59] text-white text-[11px] px-2.5 py-0.5 rounded-full font-semibold">
                {RATE_CHART_POSTERS[rateChartLightbox].price} {RATE_CHART_POSTERS[rateChartLightbox].priceUnit}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={() => {
                  const current = RATE_CHART_POSTERS[rateChartLightbox];
                  const matched = CATERING_PACKAGES.find(p => p.price.includes(current.price.replace(/[^\d]/g, '')) || p.name.includes(current.caterer.split(' ')[0]));
                  const pkgName = matched ? `${matched.code}: ${matched.name} (${matched.price})` : `${current.title} (${current.price})`;
                  handleSelectPackage(pkgName);
                  setRateChartLightbox(null);
                }}
                className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-lg bg-[#D66D59] hover:bg-[#BA5643] text-white text-xs font-semibold shadow-md transition-all"
              >
                <span>Select This Package</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => setRateChartLightbox(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close Rate Chart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Image & Navigation */}
          <div
            className="relative flex items-center justify-center my-auto max-w-5xl mx-auto w-full h-[72vh] p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={RATE_CHART_POSTERS[rateChartLightbox].image}
              alt={RATE_CHART_POSTERS[rateChartLightbox].title}
              className="max-h-full max-w-full object-contain rounded-xl shadow-2xl border border-white/20 bg-black/40"
            />

            <button
              type="button"
              onClick={() =>
                setRateChartLightbox(
                  (rateChartLightbox - 1 + RATE_CHART_POSTERS.length) % RATE_CHART_POSTERS.length
                )
              }
              className="absolute left-2 sm:-left-16 p-3 rounded-full bg-black/70 hover:bg-black/95 text-white border border-white/20 transition-colors"
              aria-label="Previous Rate Chart"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={() =>
                setRateChartLightbox((rateChartLightbox + 1) % RATE_CHART_POSTERS.length)
              }
              className="absolute right-2 sm:-right-16 p-3 rounded-full bg-black/70 hover:bg-black/95 text-white border border-white/20 transition-colors"
              aria-label="Next Rate Chart"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Footer Details */}
          <div
            className="text-center text-white max-w-2xl mx-auto pt-2 pb-2 font-sans space-y-1.5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D6B56F] font-semibold">
                {RATE_CHART_POSTERS[rateChartLightbox].caterer}
              </span>
              <span className="text-white/40">•</span>
              <span className="text-xs text-white/90">
                {RATE_CHART_POSTERS[rateChartLightbox].title}
              </span>
              <span className="text-white/40">•</span>
              <span className="text-xs font-bold text-[#D6B56F]">
                {RATE_CHART_POSTERS[rateChartLightbox].price} {RATE_CHART_POSTERS[rateChartLightbox].priceUnit}
              </span>
            </div>
            <p className="text-xs text-white/70 max-w-xl mx-auto font-light line-clamp-2">
              {RATE_CHART_POSTERS[rateChartLightbox].summary}
            </p>
          </div>
        </div>
      )}

      {/* Full-Screen Lightbox for Live Equipment */}
      {equipmentLightbox !== null && liveEquipmentItems[equipmentLightbox] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fade-in"
          onClick={() => setEquipmentLightbox(null)}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between text-white/90 max-w-[1320px] w-full mx-auto pb-3 border-b border-white/10 font-sans"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D6B56F] font-mono">
                LIVE EQUIPMENT 0{equipmentLightbox + 1} / 0{liveEquipmentItems.length}
              </span>
              <span className="hidden sm:inline-block bg-[#193C3B] border border-[#D6B56F]/40 text-[#D6B56F] text-[11px] px-2.5 py-0.5 rounded-full font-semibold">
                {liveEquipmentItems[equipmentLightbox].badge}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={() => {
                  setEquipmentLightbox(null);
                  const el = document.getElementById('catering-enquiry-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-lg bg-[#D66D59] hover:bg-[#BA5643] text-white text-xs font-semibold shadow-md transition-all"
              >
                <span>Add Station to Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => setEquipmentLightbox(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close Machine Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Image & Navigation */}
          <div
            className="relative flex items-center justify-center my-auto max-w-5xl mx-auto w-full h-[68vh] p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={liveEquipmentItems[equipmentLightbox].image}
              alt={liveEquipmentItems[equipmentLightbox].title}
              className="max-h-full max-w-full object-contain rounded-xl shadow-2xl border border-white/20 bg-white/10 p-4"
            />

            <button
              type="button"
              onClick={() =>
                setEquipmentLightbox(
                  (equipmentLightbox - 1 + liveEquipmentItems.length) % liveEquipmentItems.length
                )
              }
              className="absolute left-2 sm:-left-16 p-3 rounded-full bg-black/70 hover:bg-black/95 text-white border border-white/20 transition-colors"
              aria-label="Previous Machine"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={() =>
                setEquipmentLightbox((equipmentLightbox + 1) % liveEquipmentItems.length)
              }
              className="absolute right-2 sm:-right-16 p-3 rounded-full bg-black/70 hover:bg-black/95 text-white border border-white/20 transition-colors"
              aria-label="Next Machine"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Footer Details */}
          <div
            className="text-center text-white max-w-2xl mx-auto pt-2 pb-2 font-sans space-y-1.5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D6B56F] font-semibold">
                {liveEquipmentItems[equipmentLightbox].bengaliTitle}
              </span>
              <span className="text-white/40">•</span>
              <span className="text-xs text-white/90 font-medium">
                {liveEquipmentItems[equipmentLightbox].title}
              </span>
              <span className="text-white/40">•</span>
              <span className="text-xs text-[#D66D59]">
                {liveEquipmentItems[equipmentLightbox].category}
              </span>
            </div>
            <p className="text-xs text-white/80 max-w-xl mx-auto font-light leading-relaxed">
              {liveEquipmentItems[equipmentLightbox].description}
            </p>
          </div>
        </div>
      )}

    </div>
  );
};

export default Catering;
