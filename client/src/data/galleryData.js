/**
 * GALLERY SECTION DATA CONFIGURATION
 * 
 * Easily add or edit your photographs here.
 * Initially, all items are configured as placeholders so you can paste your actual image paths later.
 * 
 * Each item has:
 * - id: Unique identifier
 * - category: 'Weddings' | 'Events' | 'Catering'
 * - title: Title shown in gallery and lightbox
 * - subtitle: Short editorial description
 * - location: Venue or city label
 * - image: Path to your photograph (e.g. '/images/gallery/wedding-01.jpg' or external URL). Leave empty string '' to show the elegant placeholder.
 * - aspect: Aspect ratio class for responsive editorial masonry
 * - colSpan: Tailwind column span for desktop grid
 */

export const GALLERY_CATEGORIES = ['All', 'Weddings', 'Events', 'Catering'];

export const GALLERY_ITEMS = [
  // --------------------------------------------------------------------------
  // WEDDINGS PHOTOGRAPHY
  // --------------------------------------------------------------------------
  {
    id: 'wedding-01',
    category: 'Weddings',
    title: 'Heritage Rajbari Vedic Mandap',
    subtitle: 'Sacred Floral Architecture, Hand-Carved Pillars & Marigold Chhatra',
    location: 'Sovabazar Heritage Rajbari, Kolkata',
    image: '/wedding-gallary/20241129_183629.jpg',
    placeholderNote: 'Wedding Photography 01 • Recommended: 1600 * 1000px',
    aspect: 'aspect-[16/10]',
    colSpan: 'lg:col-span-8',
    featured: true,
  },
  {
    id: 'wedding-02',
    category: 'Weddings',
    title: 'Traditional Shubho Drishti & Bridal Grace',
    subtitle: 'Classic Bengali Bridal Styling, Betel Leaf Ritual & Quiet Grandeur',
    location: 'North Kolkata Biye Bari',
    image: '/wedding-gallary/20240407_171722.jpg',
    placeholderNote: 'Wedding Photography 02 • Recommended: 1200 * 1500px (Portrait)',
    aspect: 'aspect-[4/5]',
    colSpan: 'lg:col-span-4',
    featured: false,
  },
  {
    id: 'wedding-03',
    category: 'Weddings',
    title: 'Sacred Vedic Sindoor Daan Ritual',
    subtitle: 'Holy Fire, Sindoor Offering & Lifelong Sacred Vows',
    location: 'Kolkata Vedic Biye Bari',
    image: '/wedding-gallary/bengali-sindoor-daan.jpg',
    placeholderNote: 'Wedding Photography 03 • Recommended: 1200 * 900px',
    aspect: 'aspect-[4/3]',
    colSpan: 'lg:col-span-4',
    featured: false,
  },
  {
    id: 'wedding-04',
    category: 'Weddings',
    title: 'Bengali Bride & Groom Couple Portrait',
    subtitle: 'Traditional Mukut, Topor, Garland Exchange & Warm Elegance',
    location: 'Heritage Reception Lawn, Kolkata',
    image: '/wedding-gallary/bengali-wedding-couple.jpg',
    placeholderNote: 'Wedding Photography 04 • Recommended: 1600 * 1000px',
    aspect: 'aspect-[4/3]',
    colSpan: 'lg:col-span-4',
    featured: false,
  },
  {
    id: 'wedding-05',
    category: 'Weddings',
    title: 'Classic Bengali Bridal Adornment',
    subtitle: 'Traditional Alta, Polki Nose Ring & Handcrafted Wedding Gold',
    location: 'North Kolkata Biye Bari',
    image: '/wedding-gallary/bengali-wedding-2.jpg',
    placeholderNote: 'Wedding Photography 05 • Recommended: 1200 * 1500px',
    aspect: 'aspect-[4/3]',
    colSpan: 'lg:col-span-4',
    featured: false,
  },

  // --------------------------------------------------------------------------
  // EVENTS & STAGECRAFT
  // --------------------------------------------------------------------------
  {
    id: 'event-01',
    category: 'Events',
    title: '3D LED Stage Architecture & Summit Runway',
    subtitle: 'Bespoke Curved LED Backdrops, Structural Trusses & Acoustic Sound',
    location: 'Biswa Bangla Convention Centre, Kolkata',
    image: '', // PLACEHOLDER: Put your event photo path here
    placeholderNote: 'Event Photography 01 • Recommended: 1600 * 1000px',
    aspect: 'aspect-[16/10]',
    colSpan: 'lg:col-span-8',
    featured: true,
  },
  {
    id: 'event-02',
    category: 'Events',
    title: 'Acoustic Concert Sound & Moving Heads Light Show',
    subtitle: 'High-Impact Synchronized Intelligent Lighting & Immersive Audio',
    location: 'Indoor Sports Complex & Arena',
    image: '', // PLACEHOLDER: Put your event photo path here
    placeholderNote: 'Event Photography 02 • Recommended: 1200 * 1500px (Portrait)',
    aspect: 'aspect-[4/5]',
    colSpan: 'lg:col-span-4',
    featured: false,
  },
  {
    id: 'event-03',
    category: 'Events',
    title: 'Annual Corporate Awards Gala & Banquet Setup',
    subtitle: 'VIP Table Scenography, Custom Centerpieces & Presentation Stages',
    location: 'ITC Sonar Ballroom, Kolkata',
    image: '', // PLACEHOLDER: Put your event photo path here
    placeholderNote: 'Event Photography 03 • Recommended: 1400 * 950px',
    aspect: 'aspect-[16/10]',
    colSpan: 'lg:col-span-6',
    featured: false,
  },
  {
    id: 'event-04',
    category: 'Events',
    title: 'Executive Media Lounge & Conference Plenary',
    subtitle: 'Seamless Audio-Visual Broadcasting, Media Walls & Delegate Stations',
    location: 'Hyatt Regency Convention, Kolkata',
    image: '', // PLACEHOLDER: Put your event photo path here
    placeholderNote: 'Event Photography 04 • Recommended: 1400 * 950px',
    aspect: 'aspect-[16/10]',
    colSpan: 'lg:col-span-6',
    featured: false,
  },

  // --------------------------------------------------------------------------
  // CATERING & LIVE KITCHEN
  // --------------------------------------------------------------------------
  {
    id: 'catering-01',
    category: 'Catering',
    title: 'The Grand Imperial Live Banquet Feast',
    subtitle: 'Multi-Station Live Feasts with Bengali, Awadhi & Continental Menus',
    location: 'Heritage Banquet Pavilion, Kolkata',
    image: '', // PLACEHOLDER: Put your catering photo path here
    placeholderNote: 'Catering Photography 01 • Recommended: 1600 * 1000px',
    aspect: 'aspect-[16/10]',
    colSpan: 'lg:col-span-8',
    featured: true,
  },
  {
    id: 'catering-02',
    category: 'Catering',
    title: 'Pure Kolkata Bhetki Fry & Kasundi Counter',
    subtitle: 'Golden-Crumbed Pure Bhetki Fillets Fried Fresh on Order',
    location: 'Live Culinary Counter',
    image: '', // PLACEHOLDER: Put your catering photo path here
    placeholderNote: 'Catering Photography 02 • Recommended: 1200 * 1500px (Portrait)',
    aspect: 'aspect-[4/5]',
    colSpan: 'lg:col-span-4',
    featured: false,
  },
  {
    id: 'catering-03',
    category: 'Catering',
    title: 'Slow-Simmered Kosha Mangsho & Traditional Feasts',
    subtitle: 'Authentic Mustard Gravy, Steaming Basmati Pulao & Kacha Lonka',
    location: 'Biye Bari Kitchen Floor',
    image: '', // PLACEHOLDER: Put your catering photo path here
    placeholderNote: 'Catering Photography 03 • Recommended: 1400 * 950px',
    aspect: 'aspect-[16/10]',
    colSpan: 'lg:col-span-6',
    featured: false,
  },
  {
    id: 'catering-04',
    category: 'Catering',
    title: 'Kesariya Jalebi & Rabdi Live Sweet Station',
    subtitle: 'Artisanal Bengali Mishti, Hot Syrupy Jalebis & Rich Shahi Phirni',
    location: 'Dessert Courtyard',
    image: '', // PLACEHOLDER: Put your catering photo path here
    placeholderNote: 'Catering Photography 04 • Recommended: 1400 * 950px',
    aspect: 'aspect-[16/10]',
    colSpan: 'lg:col-span-6',
    featured: false,
  },
];

