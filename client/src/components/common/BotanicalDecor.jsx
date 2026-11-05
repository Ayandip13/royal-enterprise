import React from 'react';

/**
 * Botanical & Architectural Luxury Decorative Elements
 * Inspired by botanical editorial wedding monographs, antique gold line art,
 * fine curved ornamental flourishes, delicate petals, and subtle organic accents.
 */

// 1. Classical Botanical Leaf Branch
export const BotanicalBranch = ({ className = 'w-24 h-24 text-[#193C3B]/30 dark:text-[#D6B56F]/20', rotate = 0 }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ transform: `rotate(${rotate}deg)` }}
    aria-hidden="true"
  >
    <path
      d="M10 90C25 75 40 55 55 25C62 12 75 10 90 10"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
    <path
      d="M32 68C26 62 26 50 36 52C42 53 40 65 32 68Z"
      fill="currentColor"
      fillOpacity="0.14"
      stroke="currentColor"
      strokeWidth="0.9"
    />
    <path
      d="M45 54C42 45 48 37 56 42C60 45 54 55 45 54Z"
      fill="currentColor"
      fillOpacity="0.14"
      stroke="currentColor"
      strokeWidth="0.9"
    />
    <path
      d="M58 38C58 28 69 25 72 34C73 39 67 44 58 38Z"
      fill="currentColor"
      fillOpacity="0.14"
      stroke="currentColor"
      strokeWidth="0.9"
    />
    <path
      d="M74 24C78 15 88 17 86 26C85 30 79 30 74 24Z"
      fill="currentColor"
      fillOpacity="0.14"
      stroke="currentColor"
      strokeWidth="0.9"
    />
    <path
      d="M24 78C16 75 18 64 26 68C31 71 29 80 24 78Z"
      fill="currentColor"
      fillOpacity="0.14"
      stroke="currentColor"
      strokeWidth="0.9"
    />
    <circle cx="88" cy="12" r="2.2" fill="#D6B56F" />
  </svg>
);

// 2. Floating Flower Petal (Individual or Pair, Soft & Romantic)
export const FloatingPetal = ({
  className = 'w-6 h-6 text-[#D66D59]',
  rotate = 15,
  variant = 'single',
  animated = true,
}) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${animated ? 'animate-petal-float' : ''}`}
    style={{ transform: `rotate(${rotate}deg)` }}
    aria-hidden="true"
  >
    {/* Main Petal Contour */}
    <path
      d="M14 34C9 24 14 11 25 5C30 11 32 23 23 32C19 35 16 35 14 34Z"
      fill="currentColor"
      fillOpacity="0.42"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
    {/* Delicate Central Vein */}
    <path
      d="M17 31C18 23 21 15 24 7"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeLinecap="round"
      opacity="0.75"
    />
    {variant === 'pair' && (
      <>
        <path
          d="M8 20C5 14 9 7 15 4C18 8 19 15 14 19C11 21 9 21 8 20Z"
          fill="currentColor"
          fillOpacity="0.32"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
        />
        <circle cx="6" cy="24" r="1.2" fill="#D6B56F" opacity="0.8" />
      </>
    )}
  </svg>
);

// 3. Delicate Floral Line Art (Jasmine / Bakul Flower Bud)
export const FloralLineArt = ({ className = 'w-10 h-10 text-[#D6B56F]', rotate = 0 }) => (
  <svg
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ transform: `rotate(${rotate}deg)` }}
    aria-hidden="true"
  >
    {/* Central Flower Core */}
    <circle cx="25" cy="25" r="2.5" fill="currentColor" fillOpacity="0.6" stroke="currentColor" strokeWidth="0.9" />
    
    {/* 5 Delicate Contoured Petals */}
    <path
      d="M25 22C24 14 26 10 25 8C24 10 26 14 25 22"
      stroke="currentColor"
      strokeWidth="1.0"
      strokeLinecap="round"
    />
    <path
      d="M22 23C15 20 11 21 9 19C11 18 15 20 22 23"
      stroke="currentColor"
      strokeWidth="1.0"
      strokeLinecap="round"
    />
    <path
      d="M23 27C17 31 14 34 13 36C15 35 18 32 23 27"
      stroke="currentColor"
      strokeWidth="1.0"
      strokeLinecap="round"
    />
    <path
      d="M27 27C33 31 36 34 37 36C35 35 32 32 27 27"
      stroke="currentColor"
      strokeWidth="1.0"
      strokeLinecap="round"
    />
    <path
      d="M28 23C35 20 39 21 41 19C39 18 35 20 28 23"
      stroke="currentColor"
      strokeWidth="1.0"
      strokeLinecap="round"
    />
    {/* Soft Petal Fills */}
    <ellipse cx="25" cy="15" rx="3.5" ry="6" fill="currentColor" fillOpacity="0.22" stroke="currentColor" strokeWidth="0.8" />
    <ellipse cx="16" cy="20" rx="6" ry="3.5" transform="rotate(-30 16 20)" fill="currentColor" fillOpacity="0.22" stroke="currentColor" strokeWidth="0.8" />
    <ellipse cx="34" cy="20" rx="6" ry="3.5" transform="rotate(30 34 20)" fill="currentColor" fillOpacity="0.22" stroke="currentColor" strokeWidth="0.8" />
  </svg>
);

// 4. Miniature Fine-Line Butterfly (Symbol of Metamorphosis & Celebration)
export const MiniatureButterfly = ({
  className = 'w-7 h-7 text-[#D6B56F]',
  rotate = -12,
  animated = true,
}) => (
  <svg
    viewBox="0 0 50 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${animated ? 'animate-butterfly-flutter' : ''}`}
    style={{ transform: `rotate(${rotate}deg)` }}
    aria-hidden="true"
  >
    {/* Body */}
    <ellipse cx="25" cy="22" rx="1.6" ry="7" fill="currentColor" opacity="0.85" />
    {/* Antennae */}
    <path d="M24 16C22 11 18 10 16 11" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    <path d="M26 16C28 11 32 10 34 11" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    {/* Right Wings */}
    <path
      d="M26 18C31 10 41 7 45 11C48 16 43 25 31 24C27 24 26 21 26 18Z"
      fill="currentColor"
      fillOpacity="0.28"
      stroke="currentColor"
      strokeWidth="1.0"
      strokeLinecap="round"
    />
    <path
      d="M26 23C31 25 38 29 36 34C34 38 28 35 26 27Z"
      fill="currentColor"
      fillOpacity="0.24"
      stroke="currentColor"
      strokeWidth="1.0"
      strokeLinecap="round"
    />
    {/* Left Wings */}
    <path
      d="M24 18C19 10 9 7 5 11C2 16 7 25 19 24C23 24 24 21 24 18Z"
      fill="currentColor"
      fillOpacity="0.28"
      stroke="currentColor"
      strokeWidth="1.0"
      strokeLinecap="round"
    />
    <path
      d="M24 23C19 25 12 29 14 34C16 38 22 35 24 27Z"
      fill="currentColor"
      fillOpacity="0.24"
      stroke="currentColor"
      strokeWidth="1.0"
      strokeLinecap="round"
    />
    {/* Tiny wing vein detail */}
    <path d="M26 19C33 16 39 14 42 15" stroke="currentColor" strokeWidth="0.65" opacity="0.75" strokeLinecap="round" />
    <path d="M24 19C17 16 11 14 8 15" stroke="currentColor" strokeWidth="0.65" opacity="0.75" strokeLinecap="round" />
  </svg>
);

// 5. Ornamental Calligraphic Flourish Curve
export const OrnamentalFlourish = ({ className = 'w-24 h-8 text-[#D6B56F]/40', rotate = 0 }) => (
  <svg
    viewBox="0 0 100 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ transform: `rotate(${rotate}deg)` }}
    aria-hidden="true"
  >
    <path
      d="M4 16C16 8 24 26 38 20C50 14 58 24 72 16C82 10 90 14 96 18"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinecap="round"
    />
    <circle cx="4" cy="16" r="1.6" fill="currentColor" />
    <circle cx="96" cy="18" r="1.6" fill="currentColor" />
    {/* Small center leafy accent */}
    <path
      d="M55 18C57 12 62 13 60 18Z"
      fill="currentColor"
      fillOpacity="0.25"
      stroke="currentColor"
      strokeWidth="0.6"
    />
  </svg>
);

// 6. Gold Decorative Particle Cluster (Subtle Micro Stardust)
export const GoldParticleCluster = ({ className = 'w-8 h-8 text-[#D6B56F]', animated = true }) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${animated ? 'animate-stardust-pulse' : ''}`}
    aria-hidden="true"
  >
    {/* Primary 4-point micro star */}
    <path d="M12 2L13.5 7.5L19 9L13.5 10.5L12 16L10.5 10.5L5 9L10.5 7.5L12 2Z" opacity="0.85" />
    {/* Secondary smaller star */}
    <path d="M24 16L24.8 19.2L28 20L24.8 20.8L24 24L23.2 20.8L20 20L23.2 19.2L24 16Z" opacity="0.65" />
    {/* Delicate stardust dots */}
    <circle cx="8" cy="22" r="1" opacity="0.45" />
    <circle cx="21" cy="7" r="1.2" opacity="0.5" />
  </svg>
);

// 7. Large Ultra-Faint Botanical Watermark (For Background Depth)
export const BotanicalWatermark = ({ className = 'w-80 h-80 text-[#193C3B]/10 dark:text-[#D6B56F]/5', rotate = 0 }) => (
  <svg
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ transform: `rotate(${rotate}deg)` }}
    aria-hidden="true"
  >
    <path
      d="M15 145C40 120 60 85 85 40C98 18 120 15 145 15"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path
      d="M48 112C38 102 38 84 54 87C64 89 61 107 48 112Z"
      fill="currentColor"
      fillOpacity="0.08"
      stroke="currentColor"
      strokeWidth="0.8"
    />
    <path
      d="M68 90C64 76 73 63 86 71C92 76 83 92 68 90Z"
      fill="currentColor"
      fillOpacity="0.08"
      stroke="currentColor"
      strokeWidth="0.8"
    />
    <path
      d="M89 64C89 48 106 43 111 58C113 66 103 74 89 64Z"
      fill="currentColor"
      fillOpacity="0.08"
      stroke="currentColor"
      strokeWidth="0.8"
    />
    <path
      d="M114 42C120 28 136 31 133 46C131 52 122 52 114 42Z"
      fill="currentColor"
      fillOpacity="0.08"
      stroke="currentColor"
      strokeWidth="0.8"
    />
    <circle cx="138" cy="18" r="3" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

// 8. Classical Floral Corner Border (Existing)
export const FloralCorner = ({ className = 'w-16 h-16 text-gold', position = 'top-left' }) => {
  const getTransform = () => {
    switch (position) {
      case 'top-right':
        return 'scaleX(-1)';
      case 'bottom-left':
        return 'scaleY(-1)';
      case 'bottom-right':
        return 'scale(-1, -1)';
      default:
        return 'none';
    }
  };

  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: getTransform() }}
      aria-hidden="true"
    >
      <path
        d="M2 58V14C2 7.37 7.37 2 14 2H58"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M2 14C10 14 14 10 14 2"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="2 2"
      />
      <circle cx="14" cy="14" r="2" fill="#D66D59" />
      <path
        d="M20 2C20 8 16 12 10 12"
        stroke="currentColor"
        strokeWidth="0.8"
      />
    </svg>
  );
};

// 9. Classical Antique 8-Point Star (Existing)
export const AntiqueStar = ({ className = 'w-4 h-4 text-gold' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 0L13.8 8.8L22 12L13.8 15.2L12 24L10.2 15.2L2 12L10.2 8.8L12 0Z" />
  </svg>
);

// 10. Ornamental Divider with Gold Star (Existing)
export const OrnamentalDivider = ({ className = 'my-8 text-gold' }) => (
  <div className={`flex items-center justify-center space-x-3 ${className}`}>
    <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-current opacity-40" />
    <span className="inline-block transform rotate-45 w-1.5 h-1.5 bg-current" />
    <AntiqueStar className="w-3.5 h-3.5 text-current opacity-80" />
    <span className="inline-block transform rotate-45 w-1.5 h-1.5 bg-current" />
    <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-current opacity-40" />
  </div>
);

// 11. Editorial Heritage Pill Stamp (Existing)
export const EditorialStamp = ({ text = "Kolkata • Est. 2014", className = "" }) => (
  <div className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm text-charcoal dark:text-ivory ${className}`}>
    <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
    <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] font-semibold font-sans">
      {text}
    </span>
  </div>
);
