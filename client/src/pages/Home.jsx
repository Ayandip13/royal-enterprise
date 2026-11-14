import React, { useState } from 'react';
import HeroSection from '../components/home/HeroSection';
import BrandIntroduction from '../components/home/BrandIntroduction';
import ServiceDirectory from '../components/home/ServiceDirectory';
import WhyChooseUs from '../components/home/WhyChooseUs';
import FounderNote from '../components/home/FounderNote';
import ClientReviews from '../components/home/ClientReviews';
import CallToAction from '../components/home/CallToAction';
import QuickQuoteModal from '../components/layout/QuickQuoteModal';

const Home = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="bg-[#F5EFE5] dark:bg-[#102726] min-h-screen text-[#292323] dark:text-[#F5EFE5] transition-colors">
      {/* 01. Hero Section: Asymmetric Editorial Split with Arched Floral Frame */}
      <HeroSection onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 02. Introduction: Oversized Typography & Full-Bleed Scenography */}
      <BrandIntroduction />

      {/* 03. Services: Visual Service Directory (Distinct Layouts per Discipline) */}
      <ServiceDirectory onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 04. Process: Continuous Visual Editorial Timeline */}
      <WhyChooseUs onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 06. Founder's Note: Literary Stationery & Authentic Backstage */}
      <FounderNote />

      {/* 07. Client Reviews & Real Celebrations Catalog */}
      <ClientReviews />

      {/* 08. Dark Dramatic Final Consultation Section */}
      <CallToAction onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Proposal & Quote Modal */}
      <QuickQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </div>
  );
};

export default Home;
