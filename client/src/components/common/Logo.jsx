import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Royal Enterprise Official Monogram Crest Logo Component
 * Incorporates the royal crowned monogram crest with interlocking R & E,
 * Forest Teal, Deep Wine accents, Antique Gold filigree, and Instrument Serif typography.
 */
const Logo = ({
  variant = 'full', // 'full' | 'icon' | 'stacked' | 'crest'
  className = '',
  iconSize = 'h-11 w-11 sm:h-13 sm:w-13',
  onDark = false, // Set to true when placed over dark backgrounds (e.g. Footer)
  linkToHome = true,
}) => {
  const Emblem = (
    <div className={`relative shrink-0 ${iconSize} flex items-center justify-center`}>
      <img
        src="/logo-crest.png"
        alt="Royal Enterprise Monogram Crest"
        className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );

  const Content = (
    <div className={`inline-flex items-center space-x-3.5 group ${className}`}>
      {Emblem}

      {variant !== 'icon' && (
        <div className="flex flex-col text-left">
          {/* Main Brand Title: High contrast on both light and dark backgrounds */}
          <span
            className={`font-display text-2xl sm:text-[27px] font-normal tracking-tight leading-tight transition-colors ${
              onDark
                ? 'text-[#F5EFE5]'
                : 'text-[#292323] dark:text-[#F5EFE5]'
            }`}
          >
            Royal{' '}
            <span
              className={`font-display italic ${
                onDark
                  ? 'text-[#D6B56F]'
                  : 'text-[#193C3B] dark:text-[#D6B56F]'
              }`}
            >
              Enterprise
            </span>
          </span>

          {/* Subtitle / Disciplines */}
          <div className="flex items-center space-x-1.5 mt-0.5">
            <span
              className={`text-[9.5px] sm:text-[10px] uppercase tracking-[0.22em] font-medium font-sans ${
                onDark
                  ? 'text-[#D66D59]'
                  : 'text-[#D66D59] dark:text-[#D6B56F]'
              }`}
            >
              Weddings • In-House Kitchen • Events
            </span>
          </div>

          {variant === 'stacked' && (
            <span
              className={`text-[9.5px] uppercase tracking-[0.18em] font-medium font-sans mt-0.5 ${
                onDark
                  ? 'text-[#D6B56F]/80'
                  : 'text-[#8C8282] dark:text-[#8FA4A3]'
              }`}
            >
              Kolkata • Est. 2014
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <Link
        to="/"
        className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#193C3B] rounded"
      >
        {Content}
      </Link>
    );
  }

  return Content;
};

export default Logo;
