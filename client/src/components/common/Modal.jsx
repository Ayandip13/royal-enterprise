import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { AntiqueStar } from './BotanicalDecor';

const Modal = ({ isOpen, onClose, title, subtitle, children, maxWidth = 'max-w-2xl' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div
        className={`relative w-full ${maxWidth} bg-[#FAF5ED] dark:bg-[#143130] border border-[#E8DFD3] dark:border-[#244C4A] rounded-2xl shadow-2xl z-10 my-8 overflow-hidden`}
      >
        {/* Top Antique Gold Line Accent */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#D6B56F] to-transparent" />

        {/* Header */}
        <div className="flex items-start justify-between p-6 sm:p-8 border-b border-[#E8DFD3] dark:border-[#244C4A] bg-[#F5EFE5] dark:bg-[#102726]">
          <div className="space-y-1 text-left">
            <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#292323] dark:text-[#F5EFE5] tracking-tight">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs sm:text-sm text-[#665C5C] dark:text-[#C8D6D5] font-light leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-[#665C5C] dark:text-[#C8D6D5] hover:text-[#193C3B] dark:hover:text-[#D6B56F] transition-colors p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
