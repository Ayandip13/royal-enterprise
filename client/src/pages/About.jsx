import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/mockData';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { BotanicalBranch, AntiqueStar } from '../components/common/BotanicalDecor';

const About = () => {
  return (
    <div className="bg-[#F5EFE5] dark:bg-[#102726] min-h-screen text-[#292323] dark:text-[#F5EFE5] transition-colors font-sans relative overflow-hidden">
      
      {/* Decorative Botanical Flourish */}
      <div className="absolute top-24 -right-12 pointer-events-none opacity-20 dark:opacity-10 text-[#193C3B] dark:text-[#D6B56F]">
        <BotanicalBranch className="w-64 h-64" rotate={-30} />
      </div>

      {/* Header Banner */}
      <section className="pt-36 sm:pt-44 pb-14 sm:pb-20 border-b border-[#E8DFD3] dark:border-[#244C4A] bg-[#FAF5ED] dark:bg-[#143130] transition-colors relative z-10">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.24em] font-semibold text-[#D66D59] dark:text-[#D6B56F]">
              <AntiqueStar className="w-3.5 h-3.5 text-[#D6B56F]" />
              <span>Our Story • Kolkata & Eastern India</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-normal tracking-tight text-[#292323] dark:text-[#F5EFE5] leading-[1.08]">
              A Kolkata event and catering company built on trust, honest food, and <span className="italic font-display text-[#193C3B] dark:text-[#D6B56F]">calm execution.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#665C5C] dark:text-[#C8D6D5] font-light leading-relaxed">
              If our name is on your celebration, our own team cooks the feast, sets up the venue, and stays on the floor until the last guest leaves.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative & Philosophy */}
      <section className="py-12 sm:py-20 max-w-[1320px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Official Shield & Credentials Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-[#E8DFD3] dark:border-[#244C4A] bg-[#FAF5ED] dark:bg-[#143130] p-8 shadow-sm transition-colors text-center">
              <img
                src="/logo-crest.png"
                alt="Royal Enterprise Official Crest"
                className="w-28 h-28 object-contain mx-auto filter drop-shadow-md mb-4"
              />
              <span className="font-display text-3xl font-normal text-[#292323] dark:text-[#F5EFE5] block tracking-wide">
                Royal Enterprise
              </span>
              <span className="text-[11px] text-[#D66D59] dark:text-[#D6B56F] font-semibold block mt-1 uppercase tracking-widest">
                Wedding Planning | In-House Catering | Event Management
              </span>
              <p className="text-xs text-[#665C5C] dark:text-[#C8D6D5] mt-4 leading-relaxed font-light">
                Serving traditional Bengali biye baris, Marwari celebrations, corporate meets, and milestone family anniversaries across Kolkata and Eastern India.
              </p>
            </div>

            {/* Official Credentials Box (Contact Info Preserved) */}
            <div className="p-6 sm:p-7 bg-[#FAF5ED] dark:bg-[#143130] border border-[#E8DFD3] dark:border-[#244C4A] rounded-2xl text-xs space-y-3.5 transition-colors shadow-sm">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#193C3B] dark:text-[#D6B56F] pb-2 border-b border-[#E8DFD3] dark:border-[#244C4A]">
                Official Contact & Registered Details
              </h4>
              <div className="flex justify-between py-1 border-b border-[#E8DFD3] dark:border-[#244C4A]">
                <span className="text-[#8C8282] dark:text-[#8FA4A3]">Office Address:</span>
                <span className="font-semibold text-right text-[#292323] dark:text-[#F5EFE5] max-w-[200px]">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E8DFD3] dark:border-[#244C4A]">
                <span className="text-[#8C8282] dark:text-[#8FA4A3]">Official Phone:</span>
                <span className="font-semibold text-[#292323] dark:text-[#F5EFE5]">{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#E8DFD3] dark:border-[#244C4A]">
                <span className="text-[#8C8282] dark:text-[#8FA4A3]">Official Email:</span>
                <span className="font-semibold text-[#292323] dark:text-[#F5EFE5]">{COMPANY_INFO.email}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#8C8282] dark:text-[#8FA4A3]">Official Website:</span>
                <span className="font-semibold text-[#292323] dark:text-[#F5EFE5]">{COMPANY_INFO.website}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Operational Philosophy & 4 Promises */}
          <div className="lg:col-span-7 space-y-7 text-left">
            <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#D66D59] dark:text-[#D6B56F] block">
              Why We Work Differently
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#292323] dark:text-[#F5EFE5] leading-tight">
              One local team taking full care of your event, so you can actually enjoy it.
            </h2>

            <div className="space-y-4 text-base text-[#665C5C] dark:text-[#C8D6D5] font-light leading-relaxed">
              <p>
                When organizing a wedding or corporate conference, families and organizers often end up running around chasing disconnected contractors—the decorator blames the sound guy, the caterer arrives late, and you spend your own special evening stressed about logistics.
              </p>
              <p>
                We started Royal Enterprise to fix that. When you work with us, you deal with one accountable team that takes care of everything from start to finish: venue scouting, 3D stage layouts, guest welcomes, ritual timings, and live cooking.
              </p>
              <p>
                Our own in-house kitchen team cooks every meal fresh at the venue, our technical crew sets up the sound and lighting, and our experienced on-ground managers stay by your side until the very last guest leaves.
              </p>
            </div>

            {/* Our 4 Commitments */}
            <div className="pt-6 border-t border-[#E8DFD3] dark:border-[#244C4A] space-y-4">
              <h3 className="font-display text-2xl text-[#292323] dark:text-[#F5EFE5]">
                Our 4 Promises to Every Host
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-[#292323] dark:text-[#C8D6D5]">
                <div className="p-5 bg-white/70 dark:bg-[#143130] rounded-xl border border-[#E8DFD3] dark:border-[#244C4A] space-y-1.5 shadow-sm">
                  <span className="font-semibold text-[#193C3B] dark:text-[#D6B56F] block text-sm">1. Live, Fresh Cooking</span>
                  <span className="font-light leading-relaxed">Pure mustard oil, morning-fresh Kolkata fish, and sanitized live counters.</span>
                </div>
                <div className="p-5 bg-white/70 dark:bg-[#143130] rounded-xl border border-[#E8DFD3] dark:border-[#244C4A] space-y-1.5 shadow-sm">
                  <span className="font-semibold text-[#193C3B] dark:text-[#D6B56F] block text-sm">2. Dedicated Pure Veg Kitchens</span>
                  <span className="font-light leading-relaxed">Separate cookware and specialized staff for Marwari & Jain events.</span>
                </div>
                <div className="p-5 bg-white/70 dark:bg-[#143130] rounded-xl border border-[#E8DFD3] dark:border-[#244C4A] space-y-1.5 shadow-sm">
                  <span className="font-semibold text-[#193C3B] dark:text-[#D6B56F] block text-sm">3. Transparent Line-Item Estimates</span>
                  <span className="font-light leading-relaxed">Clear pricing shared upfront with zero surprise additions on the bill.</span>
                </div>
                <div className="p-5 bg-white/70 dark:bg-[#143130] rounded-xl border border-[#E8DFD3] dark:border-[#244C4A] space-y-1.5 shadow-sm">
                  <span className="font-semibold text-[#193C3B] dark:text-[#D6B56F] block text-sm">4. On-Ground Presence</span>
                  <span className="font-light leading-relaxed">Our floor managers stay active on site from the morning setup to the final goodbye.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Bottom Consultation Banner (Dramatic Forest Teal Contrast) */}
      <section className="pb-20 max-w-[1320px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="p-8 sm:p-12 bg-[#193C3B] text-[#F5EFE5] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#D6B56F]/30 shadow-2xl">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal text-white">
              Planning an upcoming celebration or corporate meet?
            </h3>
            <p className="text-xs sm:text-sm text-[#F5EFE5]/80 font-light">
              Speak directly with our team to check dates and discuss customized arrangements.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Royal%20Enterprise,%20I%20would%20like%20to%20discuss%20an%20event.`}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp px-5 py-3 text-xs font-semibold inline-flex items-center space-x-1.5 shadow-md rounded-lg"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp us</span>
            </a>
            <Link
              to="/contact"
              className="px-6 py-3 text-xs uppercase tracking-wider font-semibold rounded-lg bg-[#D66D59] hover:bg-[#BA5643] text-white inline-flex items-center space-x-1.5 shadow-md transition-all"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
