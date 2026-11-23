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
  Gift,
} from 'lucide-react';
import { COMPANY_INFO, ROYAL_CATERING_PACKAGES } from '../data/mockData';
import { BotanicalBranch, AntiqueStar } from '../components/common/BotanicalDecor';
import { WhatsAppIcon } from '../components/common/SocialIcons';

const Catering = () => {
  const [selectedPackage, setSelectedPackage] = useState(
    'Package 02: Royal Biye Bari Special Feast (+20 Family Day Meals Free) (₹750 / plate)'
  );
  const [activePackageTab, setActivePackageTab] = useState(1);
  const [galleryCategory, setGalleryCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [equipmentLightbox, setEquipmentLightbox] = useState(null);

  // =========================================================================
  // 1. DEDICATED PROPOSED CATERING SERVICE OFFERINGS (GASTRONOMIC TASTING FOLIO)
  // Easy to edit, replace, or configure without modifying the rest of the application
  // =========================================================================
  const proposedCateringServices = [
    {
      id: 'wedding-event-catering',
      num: '01',
      roman: 'I',
      title: 'Wedding & Event Catering',
      bengaliTitle: 'বিবাহ ও সামাজিক আনুষ্ঠানিক মহাভোজ',
      badge: 'Proposed Catering Discipline',
      image: '/catering-gallary/20250725_195009.jpg',
      description:
        'Grand multi-course ceremonial dining for weddings, receptions, and family milestones featuring authentic heritage recipes and transparent per-plate packages.',
      highlights: ['Authentic Biye Bari courses', 'Slow-cooked Mutton Kosha & Bhetki', 'Transparent per-plate tiers'],
      aspect: 'aspect-[16/10]',
    },
    {
      id: 'live-food-counters',
      num: '02',
      roman: 'II',
      title: 'Live Food Counters',
      bengaliTitle: 'আকর্ষণীয় লাইভ ফুড স্টল ও স্ট্রিট ফুড',
      badge: 'Proposed Catering Discipline',
      image: '/catering-equipment/live-popcorn-machine-counter.jpg',
      description:
        'Interactive on-site culinary counters: artisanal phuchka, Kolkata kathi rolls, sizzling tawa kebabs, live chaat pavilions, and fresh theatre popcorn.',
      highlights: ['Interactive chef preparation', 'Hygienic live counter setups', 'Kolkata street signatures'],
      aspect: 'aspect-[16/10]',
    },
    {
      id: 'dessert-sweet-stations',
      num: '03',
      roman: 'III',
      title: 'Dessert & Sweet Stations',
      bengaliTitle: 'ঐতিহ্যবাহী মিষ্টি ও লাইভ ডেজার্ট লাউঞ্জ',
      badge: 'Proposed Catering Discipline',
      image: '/catering-gallary/20250725_205208.jpg',
      description:
        'Artisanal clay-pot Mishti Doi, live kesariya jalebi with rabdi, giant baked rosogollas, and in-house commercial soft-serve softy ice cream stations.',
      highlights: ['Earthen pot Mishti Doi', 'Live jalebi & rabdi kadhai', 'Commercial softy dispenser'],
      aspect: 'aspect-[16/10]',
    },
    {
      id: 'buffet-table-service',
      num: '04',
      roman: 'IV',
      title: 'Buffet & Table Service',
      bengaliTitle: 'সুসজ্জিত বুফে ও পরম শ্রদ্ধায় পঙক্তিভোজন',
      badge: 'Proposed Catering Discipline',
      image: '/catering-gallary/20250725_195041.jpg',
      description:
        'Elegantly styled chafing buffet lines with heated plate warmers, dedicated elder table service, and traditional sit-down banana-leaf feast options.',
      highlights: ['Brass & chafing presentation', 'Dedicated elder table care', 'Traditional sit-down feasts'],
      aspect: 'aspect-[16/10]',
    },
    {
      id: 'inhouse-kitchen-food-prep',
      num: '05',
      roman: 'V',
      title: 'In-house Kitchen & Food Preparation',
      bengaliTitle: 'নিজস্ব কিচেনে খাঁটি ও টাটকা উপাদানে প্রস্তুত',
      badge: 'Proposed Catering Discipline',
      image: '/catering-gallary/20241019_110837.jpg',
      description:
        'Morning-fresh Kolkata fish market sourcing, cold-pressed kachi ghani mustard oil, slow-cooked whole spices, and strictly zero outsourced cooking.',
      highlights: ['Morning fish market purchase', 'Cold-pressed mustard oil', '100% in-house food preparation'],
      aspect: 'aspect-[16/10]',
    },
    {
      id: 'service-staff-hospitality',
      num: '06',
      roman: 'VI',
      title: 'Service Staff & Hospitality',
      bengaliTitle: 'মার্জিত পোশাকধারী পরিবেশক ও উষ্ণ আতিথেয়তা',
      badge: 'Proposed Catering Discipline',
      image: '/catering-gallary/20241129_202026.jpg',
      description:
        'Polite, uniformed serving captains, trained floor stewards, continuous chafing replenishment, and warm Bengali family hospitality honoring every guest.',
      highlights: ['Uniformed captains & stewards', 'Continuous buffet replenishment', 'Respectful Bengali hospitality'],
      aspect: 'aspect-[16/10]',
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
      id: 'equip-popcorn-1',
      title: 'Commercial Live Popcorn Maker & Warmer Stall',
      bengaliTitle: 'লাইভ বাটার ও ক্যারামেল পপকর্ন মেকার কাউন্টার',
      category: 'Live Snack Counter',
      badge: 'Evening Reception Favorite',
      image: '/catering-equipment/live-popcorn-machine-counter.jpg',
      caption: 'Heated glass cabinet commercial popcorn machine with stainless steel kettle',
      description:
        'High-output commercial popcorn machine featuring a heavy-duty stainless steel kettle and heated warming base, serving piping hot, aromatic salted butter, cheese, and sweet caramel popcorn live for guests.',
      features: [
        'Heavy-duty stainless steel motorized kettle for rapid continuous popping',
        'Heated storage deck & infrared warming lamp keeping popcorn hot & crisp',
        'Multiple gourmet seasonings: Classic Butter, Tangy Cheese & Sweet Caramel',
        'Top crowd-pleaser for children, Sangeet evenings & pre-dinner social hours',
      ],
      idealFor: 'Sangeet cocktail nights, birthday celebrations, kids entertainment zone & evening receptions.',
    },
    {
      id: 'equip-standee-1',
      title: 'Interactive Digital Welcome Standee & Kiosk',
      bengaliTitle: 'ডিজিটাল ওয়েলকাম স্ট্যান্ডি ও ইন্টারেক্টিভ ডিসপ্লে কিওস্ক',
      category: 'Digital Hospitality & Direction',
      badge: 'Modern Wedding Essential',
      image: '/catering-equipment/digital-standee-welcome-kiosk.jpg',
      caption: 'High-definition vertical digital signage kiosk with white aluminum pedestal',
      description:
        'Commercial-grade floor-standing vertical digital signage kiosk featuring an ultra-clear portrait LED display for wedding welcome slides, couple photo stories, digital seating charts, and interactive guest direction.',
      features: [
        'Ultra-HD portrait LED display with wide-angle ambient viewing',
        'Dynamic digital couple photo timeline & personalized welcome slides',
        'Digital seating plan, table directory & ceremonial itinerary guide',
        'Minimalist white powder-coated floor-standing architectural frame',
      ],
      idealFor: 'Banquet foyer, wedding welcome entrance, corporate summits & gala registration.',
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
      title: 'Commercial Live Popcorn Maker & Warmer Stall',
      category: 'Live Counters',
      image: '/catering-equipment/live-popcorn-machine-counter.jpg',
      location: 'Live Snack & Sangeet Counter',
    },
    {
      id: 6,
      title: 'Interactive Digital Welcome Standee & Kiosk',
      category: 'Live Counters',
      image: '/catering-equipment/digital-standee-welcome-kiosk.jpg',
      location: 'Grand Entrance & Welcome Foyer',
    },
    {
      id: 7,
      title: 'Authentic Bengali Basanti Pulao in Golden Chafing Handi',
      category: 'Wedding Feasts',
      image: '/catering-gallary/20250725_195009.jpg',
      location: 'Royal Feast Buffet',
    },
    {
      id: 8,
      title: 'Artisanal Clay Pots for Bengali Mishti Doi',
      category: 'Desserts & Sweets',
      image: '/catering-gallary/20250725_205208.jpg',
      location: 'Traditional Mishti Counter',
    },
    {
      id: 9,
      title: 'Fresh Salad & Gourmet Appetizer Bar',
      category: 'Wedding Feasts',
      image: '/catering-gallary/20241129_202341 (1).jpg',
      location: 'Live Dining Pavilion',
    },
    {
      id: 10,
      title: 'Fresh Market-Sourced Pure Bhetki Fish',
      category: 'Wedding Feasts',
      image: '/catering-gallary/20241019_110837.jpg',
      location: 'In-House Fresh Sourcing',
    },
  ];

  const galleryCategories = ['All', 'Wedding Feasts', 'Live Counters', 'Desserts & Sweets'];
  const filteredGallery = galleryCategory === 'All'
    ? galleryItems
    : galleryItems.filter((i) => i.category === galleryCategory || (galleryCategory === 'All Dishes' && i.category === 'All Dishes'));

  // Keyboard navigation for Lightbox & Equipment Lightbox
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
  }, [lightboxIndex, filteredGallery.length, equipmentLightbox]);

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
  // 5. CATERING PRICING GUIDE (ROYAL ENTERPRISE OFFICIAL PACKAGES)
  // =========================================================================
  const pricingGuide = [
    {
      category: 'Package 01: Royal Classic Heritage (₹720 / plate)',
      caterer: 'Traditional Bengali Reception & Live Stalls',
      highlights: 'Live Phuchka & Coffee stalls, Pure Kolkata Fish Fry with Kasundi, Soft Rumali Roti, Royal Kolkata Dum Mutton Biryani, Chicken Kosha, Doi Katla, Spongy Rajbhog, Chhap Sandesh & Live Kesar Jalebi.',
      packageRef: 'Package 01: Royal Classic Heritage Feast (₹720 / plate)',
    },
    {
      category: 'Package 02: Royal Biye Bari Special (+20 Free Meals) (₹750 / plate)',
      caterer: 'Signature Wedding Banquet + 20 Family Day Meals Free',
      highlights: 'Complimentary 20-Guest Morning Breakfast (Luchi Alur Dom) & Afternoon Lunch (Katla Kalia). Evening Live Radhaballabhi, Fish Kabiraji, Doi Katla, Mutton Kosha / Chicken Kosha, Dal Maharani, Rosogolla & Sandesh.',
      packageRef: 'Package 02: Royal Biye Bari Special Feast (+20 Family Day Meals Free) (₹750 / plate)',
    },
    {
      category: 'Package 03: Royal Rajkio Grand Banquet - Menu 09 (₹750 / plate)',
      caterer: 'Custom Choice Banquet (4 Non-Veg Mains + 4 Sweets)',
      highlights: '2 Welcome Coolers, 3 Starters (Golden Fried Prawns, Pure Bhetki Fry), Clear Soup, Basanti Pulao, 4 Non-Veg Mains (Mutton Kosha 2 pcs, Chingri Malaikari, Bhetki Paturi), 4 Desserts & Meetha Paan.',
      packageRef: 'Package 03: Royal Rajkio Grand Banquet Feast - Menu 09 (₹750 / plate)',
    },
    {
      category: 'Package 04: Royal Full-Day Ceremonial Care (₹950 / plate)',
      caterer: 'Complete All-Day Care (Morning + Afternoon + Evening)',
      highlights: 'Sacred Morning Luchi & Kashmiri Alur Dom, Afternoon Family Basmati Rice & Katla Kalia Lunch, Evening Live Reshmi Kebabs, Kulcha Naan, Bhetki Paturi, Mutton Kosha & Dedicated 8-Item Pure Veg Counter.',
      packageRef: 'Package 04: Royal Full-Day Complete Ceremonial Package (₹950 / plate)',
    },
    {
      category: 'Package 05: Royal Imperial Luxury Diamond (₹1,250 / plate)',
      caterer: 'Five-Star VVIP Banquet (Regular ₹1,325 • Min 250 Plates)',
      highlights: '14-item Signature Mocktail Bar, Butter Coffee, Diamond Cut Bhetki Fry, Chicken Malai Kebab, Steamed Bhetki Paturi, Chingri Malaikari, Mutton Maharaja / Rogan Josh, Thick Rabri, 3 Ice Creams & Fire Paan.',
      packageRef: 'Package 05: Royal Imperial Luxury Diamond Spread (₹1,250 / plate)',
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
                  <span>Royal Packages (₹720 - ₹1,250)</span>
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
        {/* 3. DEDICATED PROPOSED CATERING SERVICES (GASTRONOMIC TASTING FOLIO) */}
        {/* ========================================================================= */}
        <section id="catering-services" className="space-y-10 scroll-mt-24">
          <div id="catering-disciplines" />
          
          <SectionHeader
            badge="Proposed Culinary Disciplines"
            title="Dedicated Catering Services & Disciplines"
            subtitle="ছয়টি স্বতন্ত্র ক্যাটারিং সেবা — From grand wedding banquets and interactive live street-food counters to artisanal dessert lounges, central kitchen slow-cooking, and refined hospitality."
          />

          {/* Gastronomic Tasting Folio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {proposedCateringServices.map((item) => (
              <div
                key={item.id}
                className="group bg-[#FAF5ED] dark:bg-[#143130] border border-[#E8DFD3] dark:border-[#244C4A] rounded-2xl overflow-hidden hover:border-[#193C3B]/50 dark:hover:border-[#D6B56F]/50 transition-all duration-300 flex flex-col justify-between shadow-sm hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  {/* Small Editorial Culinary Photography Frame */}
                  <div className="relative overflow-hidden bg-[#E8DFD3] dark:bg-[#102726] border-b border-[#E8DFD3] dark:border-[#244C4A]">
                    <div className={`w-full ${item.aspect} overflow-hidden`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.97]"
                        loading="lazy"
                      />
                    </div>
                    {/* Gastronomic Warm Dark Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white">
                      <span className="font-display tracking-[0.2em] text-[10.5px] uppercase px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#FAF5ED]">
                        Folio {item.roman}
                      </span>
                      <span className="text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#D66D59]/90 text-white backdrop-blur-md border border-white/20 font-medium">
                        {item.badge}
                      </span>
                    </div>

                    {/* Bottom In-Image Badge */}
                    <div className="absolute bottom-2.5 left-3 text-white/95 text-[11px] font-sans tracking-wider uppercase flex items-center gap-1.5">
                      <AntiqueStar className="w-3 h-3 text-[#D6B56F]" />
                      <span className="text-[#D6B56F] font-medium">Taste Discipline {item.num}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-normal text-[#292323] dark:text-[#F5EFE5] leading-snug group-hover:text-[#193C3B] dark:group-hover:text-[#D6B56F] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#8A7D7D] dark:text-[#A0B0AF] font-light mt-1">
                      {item.bengaliTitle}
                    </p>
                    <p className="text-sm text-[#665C5C] dark:text-[#C8D6D5] leading-relaxed font-light mt-3">
                      {item.description}
                    </p>

                    {/* Culinary Highlights */}
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3.5 border-t border-[#E8DFD3]/70 dark:border-[#244C4A]/70">
                      {item.highlights.map((h, hIdx) => (
                        <span
                          key={hIdx}
                          className="text-[11px] px-2.5 py-1 rounded-md bg-white/70 dark:bg-[#102726]/80 border border-[#E8DFD3] dark:border-[#244C4A] text-[#554C4C] dark:text-[#D0DFDE] flex items-center gap-1.5"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#D6B56F]" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Interactive Action & Botanical Footer */}
                <div className="px-6 py-3.5 bg-black/[0.02] dark:bg-black/20 border-t border-[#E8DFD3] dark:border-[#244C4A] flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => handleSelectPackage('Package B: The Grand Imperial Royal Spread (Premium Non-Veg)')}
                    className="font-medium text-[#193C3B] dark:text-[#D6B56F] hover:text-[#D66D59] inline-flex items-center gap-1.5 group/btn transition-colors"
                  >
                    <span>Inquire for this service</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D6B56F] group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <span className="font-display italic text-[#8A7D7D] dark:text-[#A0B0AF] flex items-center gap-1">
                    <BotanicalBranch className="w-3.5 h-3.5 text-[#D6B56F]" />
                    Kitchen {item.num}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quiet Proposed Disclaimer Banner */}
          <div className="rounded-xl p-4 bg-[#FAF5ED]/80 dark:bg-[#143130]/80 border border-[#E8DFD3] dark:border-[#244C4A] text-center max-w-2xl mx-auto">
            <p className="text-xs text-[#665C5C] dark:text-[#C8D6D5] font-light leading-relaxed">
              <span className="font-medium text-[#193C3B] dark:text-[#D6B56F]">Proposed Catering Disciplines:</span> These listings reflect our specialized culinary and hospitality services. Custom banquet menus, live counter allocations, and special dietary arrangements are confirmed during one-on-one food tastings.
            </p>
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
        {/* 4.5 OFFICIAL ROYAL CATERING PACKAGES & COMPREHENSIVE RATE CHARTS */}
        {/* ========================================================================= */}
        <section id="rate-charts" className="space-y-10">
          <SectionHeader
            badge="Official Royal Banquet Packages"
            title="Official Catering Packages & Transparent Rates"
            subtitle="প্রামাণ্য রয়্যাল ক্যাটারিং মেনু ও রেট কার্ড — Five transparent, all-inclusive banquet packages from ₹720 to ₹1,250 with authentic course-by-course breakdowns, live cooking stalls, and ceremonial hospitality."
          />

          {/* 5-Package Tab Selector Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-sans pb-2">
            {ROYAL_CATERING_PACKAGES.map((pkg, idx) => {
              const isActive = activePackageTab === idx;
              return (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => setActivePackageTab(idx)}
                  className={`inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-medium border transition-all ${
                    isActive
                      ? 'bg-[#193C3B] text-[#D6B56F] border-[#D6B56F] shadow-md scale-[1.02]'
                      : 'border-[#E8DFD3] dark:border-[#244C4A] bg-[#FAF5ED] dark:bg-[#143130] text-[#193C3B] dark:text-[#F5EFE5] hover:border-[#D6B56F]/60'
                  }`}
                >
                  <Tag className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#D6B56F]' : 'text-[#D66D59]'}`} />
                  <span className="font-semibold">{pkg.price.split(' ')[0]}</span>
                  <span className="text-[11px] opacity-90 hidden sm:inline">• {pkg.code}</span>
                  {pkg.popular && (
                    <span className="ml-1 px-1.5 py-0.5 rounded text-[9.5px] font-bold uppercase tracking-wider bg-[#D66D59] text-white">
                      Popular
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Package Detailed Showcase Card */}
          {(() => {
            const currentPkg = ROYAL_CATERING_PACKAGES[activePackageTab] || ROYAL_CATERING_PACKAGES[0];
            return (
              <div className="rounded-2xl border-2 border-[#D6B56F]/40 bg-[#FAF5ED] dark:bg-[#143130] p-6 sm:p-10 shadow-xl space-y-8 relative overflow-hidden">
                {/* Background Botanical Accent */}
                <div className="absolute top-0 right-0 pointer-events-none opacity-10 text-[#193C3B] dark:text-[#D6B56F]">
                  <BotanicalBranch className="w-64 h-64" rotate={15} />
                </div>

                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 border-b border-[#E8DFD3] dark:border-[#244C4A] pb-6 relative z-10 font-sans">
                  <div className="space-y-2 max-w-2xl text-left">
                    <div className="inline-flex items-center space-x-2 bg-[#193C3B]/10 dark:bg-white/10 px-3 py-1 rounded-full border border-[#D6B56F]/30 text-xs font-semibold text-[#D66D59] dark:text-[#D6B56F]">
                      <Crown className="w-3.5 h-3.5 text-[#D6B56F]" />
                      <span>{currentPkg.badge}</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal text-[#292323] dark:text-[#F5EFE5] leading-tight">
                      {currentPkg.code}: {currentPkg.name}
                    </h3>

                    <p className="text-sm font-semibold text-[#D66D59] dark:text-[#D6B56F]">
                      {currentPkg.bengaliName}
                    </p>

                    <p className="text-xs text-[#665C5C] dark:text-[#C8D6D5] italic">
                      {currentPkg.guestRange}
                    </p>
                  </div>

                  <div className="md:text-right shrink-0 bg-white/60 dark:bg-[#102726] p-4 sm:p-5 rounded-2xl border border-[#E8DFD3] dark:border-[#244C4A]">
                    {currentPkg.originalPrice && (
                      <span className="line-through text-xs sm:text-sm text-[#8C8282] block">
                        Regular {currentPkg.originalPrice}
                      </span>
                    )}
                    <span className="font-display text-3xl sm:text-4xl font-bold text-[#193C3B] dark:text-[#D6B56F] block leading-none my-1">
                      {currentPkg.price}
                    </span>
                    <span className="text-[11px] text-[#665C5C] dark:text-[#C8D6D5] uppercase tracking-wider block font-semibold">
                      Transparent Royal Rate
                    </span>
                  </div>
                </div>

                {/* Free Day Meals / Bonus Offer Banner if present */}
                {currentPkg.bonusOffer && (
                  <div className="p-5 rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 dark:bg-[#25D366]/5 space-y-3 font-sans relative z-10 text-left">
                    <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#193C3B] dark:text-[#25D366]">
                      <Gift className="w-4 h-4 text-[#25D366]" />
                      <span>{currentPkg.bonusOffer.title}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#292323] dark:text-[#C8D6D5]">
                      <div className="bg-white/80 dark:bg-[#102726] p-3.5 rounded-lg border border-[#E8DFD3] dark:border-[#244C4A] shadow-xs">
                        <span className="font-semibold block text-[#193C3B] dark:text-[#D6B56F] mb-1">
                          {currentPkg.bonusOffer.breakfast.split(':')[0]}:
                        </span>
                        <span className="font-light">{currentPkg.bonusOffer.breakfast.split(':')[1] || currentPkg.bonusOffer.breakfast}</span>
                      </div>
                      <div className="bg-white/80 dark:bg-[#102726] p-3.5 rounded-lg border border-[#E8DFD3] dark:border-[#244C4A] shadow-xs">
                        <span className="font-semibold block text-[#193C3B] dark:text-[#D6B56F] mb-1">
                          {currentPkg.bonusOffer.lunch.split(':')[0]}:
                        </span>
                        <span className="font-light">{currentPkg.bonusOffer.lunch.split(':')[1] || currentPkg.bonusOffer.lunch}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Special Note / Offer Tag if present */}
                {currentPkg.note && (
                  <div className="p-3.5 rounded-xl border border-[#D6B56F]/40 bg-[#D6B56F]/10 text-xs text-[#193C3B] dark:text-[#D6B56F] font-sans flex items-center space-x-2 relative z-10 text-left">
                    <Sparkles className="w-4 h-4 text-[#D6B56F] shrink-0" />
                    <span className="font-medium">{currentPkg.note}</span>
                  </div>
                )}

                {/* Package Summary & 4 Key Feature Badges */}
                <div className="space-y-4 relative z-10 text-left font-sans">
                  <p className="text-sm text-[#665C5C] dark:text-[#C8D6D5] font-light leading-relaxed">
                    {currentPkg.summary}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {currentPkg.highlights.map((h, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start space-x-2 p-3 rounded-xl bg-white/70 dark:bg-[#102726] border border-[#E8DFD3] dark:border-[#244C4A] shadow-xs"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#D66D59] shrink-0 mt-0.5" />
                        <span className="text-xs font-medium text-[#292323] dark:text-[#F5EFE5] leading-snug">
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Multi-Course Course Breakdown Grid */}
                <div className="space-y-4 pt-2 relative z-10 text-left">
                  <div className="flex items-center justify-between border-b border-[#E8DFD3] dark:border-[#244C4A] pb-2">
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D66D59] dark:text-[#D6B56F] font-sans flex items-center space-x-2">
                      <Utensils className="w-3.5 h-3.5 text-[#D6B56F]" />
                      <span>Itemized Course Breakdown & Authentic Dishes</span>
                    </span>
                    <span className="text-xs text-[#8C8282] font-sans">
                      {currentPkg.sections.length} Course Stages
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {currentPkg.sections.map((section, sIdx) => (
                      <div
                        key={sIdx}
                        className="rounded-xl border border-[#E8DFD3] dark:border-[#244C4A] bg-white/80 dark:bg-[#102726] p-5 space-y-3 shadow-xs hover:border-[#D6B56F]/50 transition-colors"
                      >
                        <div className="flex items-center space-x-2.5 border-b border-[#E8DFD3] dark:border-[#244C4A] pb-2.5">
                          <ChefHat className="w-4 h-4 text-[#D6B56F] shrink-0" />
                          <h4 className="font-display text-base font-normal text-[#193C3B] dark:text-[#D6B56F]">
                            {section.heading}
                          </h4>
                        </div>

                        <ul className="space-y-2 text-xs text-[#292323] dark:text-[#C8D6D5] font-sans">
                          {section.items.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#D66D59] mr-2.5 mt-1.5 shrink-0" />
                              <span className="font-light leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Active Package Action CTA Bar */}
                <div className="pt-6 border-t border-[#E8DFD3] dark:border-[#244C4A] flex flex-wrap items-center justify-between gap-4 relative z-10 font-sans">
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleSelectPackage(`${currentPkg.code}: ${currentPkg.name} (${currentPkg.price})`)}
                      className="px-7 py-3 text-xs uppercase tracking-wider font-semibold rounded-lg bg-[#D66D59] hover:bg-[#BA5643] text-white shadow-md transition-all inline-flex items-center space-x-2"
                    >
                      <span>Select This Package ({currentPkg.price.split(' ')[0]})</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20am%20interested%20in%20${encodeURIComponent(currentPkg.code + ': ' + currentPkg.name + ' (' + currentPkg.price + ')')}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-3 text-xs uppercase tracking-wider font-semibold rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-sm inline-flex items-center space-x-2 transition-all"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>WhatsApp Inquiry</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById('live-stations');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs text-[#193C3B] dark:text-[#D6B56F] hover:underline inline-flex items-center space-x-1 font-medium font-sans"
                  >
                    <span>Explore Live In-House Machines</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })()}

          {/* 5 Packages Side-by-Side Comparison Grid */}
          <div className="space-y-6 pt-6">
            <div className="text-center space-y-1">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#D66D59] dark:text-[#D6B56F] font-sans">
                Quick Comparison Matrix
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-[#292323] dark:text-[#F5EFE5] font-normal">
                All 5 Official Royal Banquet Tiers
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {ROYAL_CATERING_PACKAGES.map((pkg, idx) => {
                const isSelected = activePackageTab === idx;
                return (
                  <div
                    key={pkg.id}
                    className={`rounded-2xl border p-5 flex flex-col justify-between transition-all duration-300 text-left ${
                      isSelected
                        ? 'border-[#D6B56F] bg-white dark:bg-[#102726] shadow-xl ring-2 ring-[#D6B56F]/40 scale-[1.01]'
                        : 'border-[#E8DFD3] dark:border-[#244C4A] bg-[#FAF5ED] dark:bg-[#143130] shadow-sm hover:shadow-lg'
                    }`}
                  >
                    <div className="space-y-3 font-sans">
                      <div className="flex items-center justify-between">
                        <span className="text-[10.5px] uppercase tracking-wider font-bold text-[#D66D59] dark:text-[#D6B56F]">
                          {pkg.code}
                        </span>
                        {pkg.popular && (
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#D66D59] text-white">
                            Best Value
                          </span>
                        )}
                      </div>

                      <div>
                        <h4 className="font-display text-lg font-normal text-[#292323] dark:text-[#F5EFE5] leading-snug">
                          {pkg.name}
                        </h4>
                        <span className="text-[11px] text-[#665C5C] dark:text-[#C8D6D5] block mt-0.5">
                          {pkg.bengaliName}
                        </span>
                      </div>

                      <div className="pt-1 pb-2 border-b border-[#E8DFD3] dark:border-[#244C4A]">
                        <span className="font-display text-2xl font-bold text-[#193C3B] dark:text-[#D6B56F] block">
                          {pkg.price.split(' ')[0]}
                        </span>
                        <span className="text-[10px] text-[#8C8282] uppercase tracking-wider">
                          {pkg.priceUnit}
                        </span>
                      </div>

                      <ul className="space-y-1.5 text-[11px] text-[#292323] dark:text-[#C8D6D5]">
                        {pkg.highlights.slice(0, 4).map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start">
                            <CheckCircle2 className="w-3 h-3 text-[#D66D59] mr-1.5 mt-0.5 shrink-0" />
                            <span className="font-light leading-tight line-clamp-2">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 mt-3 border-t border-[#E8DFD3] dark:border-[#244C4A] space-y-2 font-sans">
                      <button
                        type="button"
                        onClick={() => {
                          setActivePackageTab(idx);
                          const el = document.getElementById('rate-charts');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full py-2 px-2.5 rounded-lg border border-[#E8DFD3] dark:border-[#244C4A] hover:border-[#193C3B] dark:hover:border-[#D6B56F] text-[#193C3B] dark:text-[#F5EFE5] text-[11px] font-medium transition-colors bg-white/60 dark:bg-[#102726] inline-flex items-center justify-center space-x-1"
                      >
                        <Eye className="w-3 h-3 text-[#D6B56F]" />
                        <span>Inspect Full Menu</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleSelectPackage(`${pkg.code}: ${pkg.name} (${pkg.price})`)}
                        className="w-full py-2 px-2.5 rounded-lg bg-[#193C3B] hover:bg-[#102726] text-white text-[11px] font-semibold transition-colors shadow-sm inline-flex items-center justify-center space-x-1"
                      >
                        <span>Select Package</span>
                        <ArrowRight className="w-3 h-3 text-[#D6B56F]" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4.8 IN-HOUSE LIVE DESSERT THEATRES & BEVERAGE STATIONS */}
        {/* ========================================================================= */}
        <section id="live-stations" className="space-y-8">
          <SectionHeader
            badge="In-House Event & Culinary Equipment"
            title="Live Food Theatres, Beverage Stations & Digital Hospitality"
            subtitle="ইন-হাউস লাইভ ডেজার্ট, পপকর্ন, ফ্রোজেন মকটেল ও ডিজিটাল ওয়েলকাম কিওস্ক — We own and deploy our commercial softy dispensers, frozen slush machines, Korean bingsu snowmakers, live popcorn makers, and interactive digital welcome standees."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
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
                  <th className="p-4 border-r border-[#E8DFD3] dark:border-[#244C4A] text-[11px] w-1/4">Curated Banquet Concept</th>
                  <th className="p-4 border-r border-[#E8DFD3] dark:border-[#244C4A] text-[11px]">Verified Course Highlights & Inclusions</th>
                  <th className="p-4 text-[11px] text-right w-28">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8DFD3] dark:divide-[#244C4A] text-[#292323] dark:text-[#C8D6D5]">
                {pricingGuide.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/60 dark:hover:bg-[#193C3B]/40 transition-colors">
                    <td className="p-4 font-semibold text-[#193C3B] dark:text-[#D6B56F] border-r border-[#E8DFD3] dark:border-[#244C4A]">{row.category}</td>
                    <td className="p-4 font-medium text-[#292323] dark:text-[#F5EFE5] border-r border-[#E8DFD3] dark:border-[#244C4A]">{row.caterer}</td>
                    <td className="p-4 font-light text-[#665C5C] dark:text-[#C8D6D5] leading-relaxed border-r border-[#E8DFD3] dark:border-[#244C4A]">{row.highlights}</td>
                    <td className="p-4 text-right">
                      <button
                        type="button"
                        onClick={() => handleSelectPackage(row.packageRef || row.category)}
                        className="px-3 py-1.5 rounded-lg bg-[#193C3B] hover:bg-[#102726] text-white text-[11px] font-semibold transition-colors shadow-xs inline-flex items-center space-x-1"
                      >
                        <span>Select</span>
                        <ArrowRight className="w-3 h-3 text-[#D6B56F]" />
                      </button>
                    </td>
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
