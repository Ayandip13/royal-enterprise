import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';
import Logo from '../common/Logo';
import { WhatsAppIcon, InstagramIcon, FacebookIcon, YouTubeIcon, LinkedInIcon } from '../common/SocialIcons';
import {
  AntiqueStar,
  BotanicalBranch,
  OrnamentalDivider,
  FloatingPetal,
  GoldParticleCluster,
  BotanicalWatermark,
} from '../common/BotanicalDecor';

const Footer = ({ onOpenQuoteModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#102726] text-[#F5EFE5] pt-20 pb-12 border-t border-[#D6B56F]/20 transition-colors relative overflow-hidden font-sans">
      {/* Delicate Antique Gold Hairline with Center Diamond */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#D6B56F]/40 to-transparent absolute top-0 left-0 right-0" />

      {/* Decorative Botanical Flourish & Watermark */}
      <div className="absolute -bottom-12 -right-12 pointer-events-none opacity-10 text-[#D6B56F]">
        <BotanicalBranch className="w-64 h-64" rotate={-45} />
      </div>
      <div className="absolute -bottom-16 -left-12 pointer-events-none opacity-5 text-[#D6B56F]">
        <BotanicalWatermark className="w-72 h-72" rotate={20} />
      </div>

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 mb-16">
          
          {/* Column 1: Brand & Kolkata Heritage (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Logo iconSize="h-16 w-16 sm:h-20 sm:w-20" variant="stacked" onDark={true} />

            <p className="text-xs sm:text-[13px] text-[#F5EFE5]/75 font-light leading-relaxed max-w-sm pt-2">
              Kolkata wedding planning, event management, and in-house catering company serving Eastern India and destination celebrations. Planned, cooked, and run by one team since 2014.
            </p>

            {/* Social Channels with Authentic Brand Icons */}
            <div className="flex items-center space-x-2.5 pt-2 text-[#F5EFE5]/80">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20an%20event.`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="WhatsApp"
                title="WhatsApp: [WhatsApp Number]"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#E1306C] hover:bg-[#E1306C] hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
                title="Instagram: [Your_Instagram_ID]"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
                title="Facebook: [Your_Facebook_ID]"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#D6B56F] hover:text-[#D6B56F] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#FF0000] hover:bg-[#FF0000] hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="YouTube"
                title="YouTube"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6B56F]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#F5EFE5]/75 font-light">
              <li>
                <Link to="/" className="hover:text-[#D6B56F] transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/wedding-planner" className="hover:text-[#D6B56F] transition-colors">
                  Wedding Planning
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-[#D6B56F] transition-colors">
                  Event Management
                </Link>
              </li>
              <li>
                <Link to="/catering" className="hover:text-[#D6B56F] transition-colors">
                  In-House Catering
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D6B56F] transition-colors">
                  Our Story & Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D6B56F] transition-colors">
                  Contact & Venue Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Capabilities (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6B56F]">
              Specialties
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#F5EFE5]/75 font-light">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6B56F]" />
                <span>Heritage Rajbari Biye Bari</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6B56F]" />
                <span>Pure Vegetarian & Jain Kitchens</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6B56F]" />
                <span>Corporate Summits & Galas</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6B56F]" />
                <span>3D LED Stage Fabrication</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6B56F]" />
                <span>Live Tandoori & Bhetki Stations</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6B56F]" />
                <span>Single On-Site Floor Management</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Desk (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6B56F]">
              Direct Desk • Kolkata
            </h4>

            <div className="space-y-3 text-xs sm:text-[13px] text-[#F5EFE5]/75 font-light">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#D6B56F] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-[#D6B56F] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                    className="hover:text-[#D6B56F] font-semibold text-white block transition-colors"
                  >
                    {COMPANY_INFO.displayPhone}
                  </a>
                  <span className="text-[11px] text-[#F5EFE5]/50 block">Alt: {COMPANY_INFO.secondaryPhone}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-[#D6B56F] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-[#D6B56F] block transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-wider text-[#F5EFE5]/50 block font-mono">
                  Desk Hours: {COMPANY_INFO.officeHours}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Subtle Antique Ornamental Divider */}
        <OrnamentalDivider className="my-6 text-[#D6B56F]/25" />

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5EFE5]/60">
          <p>© {new Date().getFullYear()} Royal Enterprise. All rights reserved. Kolkata, West Bengal.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-[#D6B56F] hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 group-hover:border-[#D6B56F] flex items-center justify-center transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
