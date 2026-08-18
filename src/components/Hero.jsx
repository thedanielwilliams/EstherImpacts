import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero({ data }) {
  const { headline, subheadline, alternativeLine, profileImage, ctaPrimary, ctaSecondary } = data.hero;

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col justify-between overflow-hidden bg-[#FBF9F5]">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#16382B_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
        
        {/* Left Column: Editorial Headline & Copy */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-8 z-10">

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-editorial leading-[1.05] tracking-tight text-[#1A211E]">
            {headline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[#1A211E]/80 font-normal leading-relaxed max-w-2xl">
            {subheadline}
          </p>

          {/* Creative Philosophy Line Callout */}
          <div className="pl-4 border-l-2 border-[#C26D47] py-1 text-sm md:text-base font-serif-editorial italic text-[#16382B]">
            "{alternativeLine}"
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-[#16382B] text-[#FBF9F5] rounded-full text-sm font-semibold tracking-wide hover:bg-[#0D261C] transition-all shadow-md hover:shadow-lg flex items-center gap-3 group"
            >
              <span>{ctaPrimary}</span>
              <span className="w-6 h-6 rounded-full bg-[#C26D47] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

            <a
              href="#approach"
              className="px-8 py-4 bg-transparent border border-[#1A211E]/20 text-[#1A211E] rounded-full text-sm font-semibold tracking-wide hover:bg-[#1A211E]/5 transition-all"
            >
              {ctaSecondary}
            </a>
          </div>
        </div>

        {/* Right Column: Editorial Asymmetric Portrait & Project Badges */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          
          {/* Back accent frame */}
          <div className="absolute -inset-4 bg-[#F3EFE6] rounded-2xl transform rotate-2 border border-[#16382B]/10 pointer-events-none" />
          <div className="absolute -inset-2 bg-[#16382B]/5 rounded-2xl transform -rotate-1 pointer-events-none" />

          {/* Editorial Portrait Container */}
          <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-[#16382B]/20 group">
            <img
              src={profileImage || "/esther-portrait.jpg"}
              alt="Esther Onyendu - Project & Operations Professional"
              className="w-full h-auto object-cover group-hover:scale-102 transition-all duration-700 block"
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D261C]/85 via-[#0D261C]/20 to-transparent opacity-90 pointer-events-none" />

            {/* Name and Profession Caption */}
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#D49B4B] block">
                Resourceful by Nature • Impactful by Design
              </span>
              <p className="font-serif-editorial text-2xl text-[#FBF9F5] leading-snug">
                Esther Onyendu
              </p>
              <p className="text-xs text-white/80">
                Education • Digital Inclusion • Capacity Building
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="max-w-7xl mx-auto w-full pt-12 flex justify-between items-center text-xs font-semibold text-[#1A211E]/50 tracking-widest uppercase">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#16382B] animate-ping" />
          <span>Based in Nigeria • Available Globally</span>
        </div>
        
        <a
          href="#impact"
          className="flex items-center gap-2 hover:text-[#16382B] transition-colors group"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-4 h-4 text-[#C26D47] group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
