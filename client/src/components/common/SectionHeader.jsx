import React from 'react';
import { AntiqueStar } from './BotanicalDecor';

const SectionHeader = ({
  badge,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  const isLight = theme === 'light';

  return (
    <div className={`flex flex-col max-w-3xl mb-10 md:mb-12 ${alignmentClasses} ${className}`}>
      {badge && (
        <div className="inline-flex items-center space-x-2 mb-3">
          <AntiqueStar className="w-3.5 h-3.5 text-[#D6B56F]" />
          <span
            className={`text-xs font-semibold tracking-[0.24em] uppercase font-sans ${
              isLight ? 'text-[#D66D59] dark:text-[#D6B56F]' : 'text-[#D6B56F]'
            }`}
          >
            {badge}
          </span>
        </div>
      )}

      <h2
        className={`font-display text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-[1.08] ${
          isLight ? 'text-[#292323] dark:text-[#F5EFE5]' : 'text-[#F5EFE5]'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-base sm:text-lg font-light leading-relaxed max-w-2xl mt-3.5 font-sans ${
            isLight ? 'text-[#665C5C] dark:text-[#C8D6D5]' : 'text-[#F5EFE5]/85'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
