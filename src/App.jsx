import React, { useState, useEffect } from 'react';
import { initialPortfolioData } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactStats from './components/ImpactStats';
import HowIWork from './components/HowIWork';
import FeaturedProjects from './components/FeaturedProjects';
import ImpactGallery from './components/ImpactGallery';
import ResourcefulnessFlow from './components/ResourcefulnessFlow';
import Toolkit from './components/Toolkit';
import ExperienceJourney from './components/ExperienceJourney';
import EducationCertifications from './components/EducationCertifications';
import SpeakingLeadership from './components/SpeakingLeadership';
import Testimonials from './components/Testimonials';
import PersonalPhilosophy from './components/PersonalPhilosophy';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ContentEditorModal from './components/ContentEditorModal';

export default function App() {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('esther_portfolio_data');
    return saved ? JSON.parse(saved) : initialPortfolioData;
  });

  const [editorOpen, setEditorOpen] = useState(false);

  const handleSaveData = (newData) => {
    setData(newData);
    localStorage.setItem('esther_portfolio_data', JSON.stringify(newData));
    setEditorOpen(false);
  };

  const handleResetData = () => {
    if (window.confirm("Reset all content to original defaults?")) {
      setData(initialPortfolioData);
      localStorage.removeItem('esther_portfolio_data');
      setEditorOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1A211E]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. HERO SECTION */}
        <Hero data={data} />

        {/* 2. IMPACT AT A GLANCE */}
        <ImpactStats data={data} />

        {/* 3. HOW I WORK (MY APPROACH) */}
        <HowIWork data={data} />

        {/* 4. FEATURED IMPACT PROJECTS (SELECTED WORK) */}
        <FeaturedProjects data={data} />

        {/* 5. IMPACT GALLERY (THE WORK, IN REAL LIFE) */}
        <ImpactGallery data={data} />

        {/* 6. RESOURCEFULNESS DIAGRAM SECTION */}
        <ResourcefulnessFlow data={data} />

        {/* 7. MY TOOLKIT */}
        <Toolkit data={data} />

        {/* 8. EXPERIENCE JOURNEY */}
        <ExperienceJourney data={data} />

        {/* 9. EDUCATION & DEVELOPMENT */}
        <EducationCertifications data={data} />

        {/* 10. SPEAKING & LEADERSHIP */}
        <SpeakingLeadership data={data} />

        {/* 11. TESTIMONIALS */}
        <Testimonials data={data} />

        {/* 12. PERSONAL PHILOSOPHY */}
        <PersonalPhilosophy data={data} />

        {/* 13. CONTACT SECTION */}
        <ContactSection data={data} />
      </main>

      {/* Footer */}
      <Footer data={data} />

      {/* In-Browser Live Content Editor Modal */}
      {editorOpen && (
        <ContentEditorModal
          data={data}
          onSave={handleSaveData}
          onReset={handleResetData}
          onClose={() => setEditorOpen(false)}
        />
      )}
    </div>
  );
}
