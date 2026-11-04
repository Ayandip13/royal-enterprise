import React from 'react';

/**
 * Botanical & Architectural Luxury Decorative Elements
 * Inspired by botanical editorial wedding monographs, antique gold line art,
 * fine curved ornamental flourishes, and delicate petals.
 */

export const BotanicalBranch = ({ className = 'w-24 h-24 text-forest/40', rotate = 0 }) => (
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
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    {/* Delicate botanical leaves */}
    <path
      d="M32 68C26 62 26 50 36 52C42 53 40 65 32 68Z"
      fill="currentColor"
      fillOpacity="0.15"
      stroke="currentColor"
      strokeWidth="1"
    />
    <path
      d="M45 54C42 45 48 37 56 42C60 45 54 55 45 54Z"
      fill="currentColor"
      fillOpacity="0.15"
      stroke="currentColor"
      strokeWidth="1"
    />
    <path
      d="M58 38C58 28 69 25 72 34C73 39 67 44 58 38Z"
      fill="currentColor"
      fillOpacity="0.15"
      stroke="currentColor"
      strokeWidth="1"
    />
    <path
      d="M74 24C78 15 88 17 86 26C85 30 79 30 74 24Z"
      fill="currentColor"
      fillOpacity="0.15"
      stroke="currentColor"
      strokeWidth="1"
    />
    <path
      d="M24 78C16 75 18 64 26 68C31 71 29 80 24 78Z"
      fill="currentColor"
      fillOpacity="0.15"
      stroke="currentColor"
      strokeWidth="1"
    />
    {/* Small flower bud */}
    <circle cx="88" cy="12" r="2.5" fill="#D6B56F" />
  </svg>
);

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

export const OrnamentalDivider = ({ className = 'my-8 text-gold' }) => (
  <div className={`flex items-center justify-center space-x-3 ${className}`}>
    <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-current opacity-40" />
    <span className="inline-block transform rotate-45 w-1.5 h-1.5 bg-current" />
    <AntiqueStar className="w-3.5 h-3.5 text-current opacity-80" />
    <span className="inline-block transform rotate-45 w-1.5 h-1.5 bg-current" />
    <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-current opacity-40" />
  </div>
);

export const EditorialStamp = ({ text = "Kolkata • Est. 2014", className = "" }) => (
  <div className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm text-charcoal dark:text-ivory ${className}`}>
    <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
    <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] font-semibold font-sans">
      {text}
    </span>
  </div>
);

