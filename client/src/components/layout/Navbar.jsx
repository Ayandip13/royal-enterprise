import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';
import Logo from '../common/Logo';
import ThemeToggle from '../common/ThemeToggle';
import { AntiqueStar } from '../common/BotanicalDecor';

const Navbar = ({ onOpenQuoteModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Weddings', path: '/wedding-planner' },
    { name: 'Events', path: '/events' },
    { name: 'Catering', path: '/catering' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar: Delicate Heritage Bar */}
      <div className="text-[11px] py-1.5 px-4 sm:px-6 border-b hidden md:block bg-[#193C3B] text-[#F5EFE5] border-[#D6B56F]/20 transition-colors">
        <div className="max-w-[1320px] mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 text-[#F5EFE5]/90 font-sans">
            <span className="font-semibold text-[#D6B56F] uppercase tracking-[0.16em]">
              Kolkata & Eastern India
            </span>
            <span className="text-[#D6B56F]/40">•</span>
            <span className="font-light tracking-wide">
              Weddings, Corporate Galas & In-House Catering
            </span>
          </div>

          <div className="flex items-center space-x-5 font-sans">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20an%20event.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 text-emerald-300 hover:text-white transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp: {COMPANY_INFO.displayPhone}</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center space-x-1.5 text-[#F5EFE5]/90 hover:text-[#D6B56F] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D6B56F]" />
              <span>Call: {COMPANY_INFO.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Editorial Navbar */}
      <div
        className={`transition-all duration-300 border-b ${
          scrolled
            ? 'bg-[#F5EFE5]/95 dark:bg-[#102726]/95 backdrop-blur-md shadow-sm py-2.5 sm:py-3 border-[#E8DFD3] dark:border-[#244C4A]'
            : 'bg-[#F5EFE5]/90 dark:bg-[#102726]/90 backdrop-blur-md py-3 sm:py-3.5 border-[#E8DFD3]/80 dark:border-[#244C4A]/60'
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo Crest Component */}
            <Logo iconSize="h-10 w-10 sm:h-11 sm:w-11" />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-[12.5px] uppercase tracking-[0.18em] font-medium whitespace-nowrap py-1 transition-all duration-200 relative group font-sans ${
                      isActive
                        ? 'text-[#193C3B] dark:text-[#D6B56F] font-semibold'
                        : 'text-[#665C5C] dark:text-[#C8D6D5] hover:text-[#193C3B] dark:hover:text-[#D6B56F]'
                    }`}
                  >
                    {link.name}
                    {isActive ? (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#D66D59] rounded-full" />
                    ) : (
                      <span className="absolute -bottom-1 left-1/2 right-1/2 h-[1.5px] bg-[#D6B56F] rounded-full transition-all duration-300 group-hover:left-0 group-hover:right-0 opacity-0 group-hover:opacity-100" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Triggers */}
            <div className="hidden lg:flex items-center space-x-3.5">
              <ThemeToggle size="md" />

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20an%20event.`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp px-3.5 py-2 text-xs font-semibold inline-flex items-center space-x-1.5 shadow-sm rounded-lg"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="px-5 py-2.5 text-xs uppercase tracking-wider font-semibold whitespace-nowrap rounded-lg bg-[#D66D59] hover:bg-[#BA5643] text-white shadow-sm transition-all duration-200"
              >
                Plan Your Event
              </button>
            </div>

            {/* Mobile Actions: Theme + Quote + Hamburger */}
            <div className="flex lg:hidden items-center space-x-2">
              <ThemeToggle size="sm" />

              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg bg-[#D66D59] text-white"
              >
                Quote
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg transition-colors text-[#292323] dark:text-[#F5EFE5] hover:bg-[#ECE3D5] dark:hover:bg-[#193C3B]"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Distinctive Editorial Styling) */}
      {isOpen && (
        <div className="lg:hidden bg-[#F5EFE5] dark:bg-[#102726] border-b border-[#E8DFD3] dark:border-[#244C4A] px-6 pt-4 pb-6 space-y-4 shadow-2xl text-[#292323] dark:text-[#F5EFE5]">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-xs uppercase tracking-[0.16em] font-medium transition-colors font-sans ${
                    isActive
                      ? 'bg-[#193C3B] text-white dark:bg-[#193C3B] dark:text-[#D6B56F] font-semibold'
                      : 'hover:bg-[#ECE3D5] dark:hover:bg-[#143130]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <AntiqueStar className="w-3 h-3 text-[#D6B56F]" />}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-[#E8DFD3] dark:border-[#244C4A] space-y-2">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20an%20event.`}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp w-full py-2.5 px-4 text-xs font-semibold flex items-center justify-center space-x-2 rounded-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct Desk</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full py-2.5 px-4 text-xs font-semibold border border-[#CBBFB0] dark:border-[#2B5755] flex items-center justify-center space-x-2 rounded-lg text-[#292323] dark:text-[#F5EFE5]"
            >
              <Phone className="w-3.5 h-3.5 text-[#D6B56F]" />
              <span>Call: {COMPANY_INFO.displayPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
