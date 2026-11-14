import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';
import Logo from '../common/Logo';
import ThemeToggle from '../common/ThemeToggle';
import { AntiqueStar } from '../common/BotanicalDecor';
import { WhatsAppIcon, InstagramIcon, FacebookIcon } from '../common/SocialIcons';

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
              <WhatsAppIcon className="w-3.5 h-3.5" />
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

            {/* Desktop Action Triggers: Real WhatsApp, Facebook, Instagram Icons & CTAs */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
              <ThemeToggle size="md" />

              {/* Real Social Icon Quick Links */}
              <div className="flex items-center space-x-1.5 pl-1 border-l border-[#E8DFD3] dark:border-[#244C4A]">
                {/* Real Instagram Icon */}
                <a
                  href={COMPANY_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  title="Instagram: [Your_Instagram_ID]"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-lg border border-[#E8DFD3] dark:border-[#244C4A] bg-white/70 dark:bg-[#143130] text-[#E1306C] hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C] shadow-sm transition-all duration-200 flex items-center justify-center group"
                >
                  <InstagramIcon className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                </a>

                {/* Real Facebook Icon */}
                <a
                  href={COMPANY_INFO.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  title="Facebook: [Your_Facebook_ID]"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-lg border border-[#E8DFD3] dark:border-[#244C4A] bg-white/70 dark:bg-[#143130] text-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] shadow-sm transition-all duration-200 flex items-center justify-center group"
                >
                  <FacebookIcon className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                </a>
              </div>

              {/* Real WhatsApp CTA Button */}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20an%20event.`}
                target="_blank"
                rel="noreferrer"
                title="WhatsApp Direct Desk"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 py-2 text-xs font-semibold inline-flex items-center space-x-1.5 shadow-sm rounded-lg transition-all duration-200 hover:shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>WhatsApp</span>
              </a>

              {/* Plan Your Event CTA Button */}
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

          <div className="pt-3 border-t border-[#E8DFD3] dark:border-[#244C4A] space-y-3">
            {/* Real Social Channels Row for Mobile */}
            <div className="flex items-center justify-between px-1 py-1">
              <span className="text-[11px] uppercase tracking-wider text-[#665C5C] dark:text-[#C8D6D5] font-medium font-sans">
                Connect With Us
              </span>
              <div className="flex items-center space-x-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20an%20event.`}
                  target="_blank"
                  rel="noreferrer"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                  className="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  title="Instagram"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-lg bg-[#E1306C] text-white flex items-center justify-center shadow-sm"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  title="Facebook"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-lg bg-[#1877F2] text-white flex items-center justify-center shadow-sm"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20an%20event.`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white w-full py-2.5 px-4 text-xs font-semibold flex items-center justify-center space-x-2 rounded-lg shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
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
