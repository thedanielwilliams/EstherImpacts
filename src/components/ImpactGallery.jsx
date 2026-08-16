import React, { useState } from 'react';
import { Camera, MapPin, Calendar, Maximize2 } from 'lucide-react';
import LightboxModal from './LightboxModal';

export default function ImpactGallery({ data }) {
  const galleryItems = data.gallery;
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Education', 'Community', 'Digital Inclusion', 'Leadership', 'Projects', 'Speaking'];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 bg-[#FBF9F5] text-[#1A211E] relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1A211E]/15 pb-8">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C26D47]">
              Field Evidence & Documentation
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-editorial text-[#1A211E]">
              THE WORK, IN REAL LIFE.
            </h2>
          </div>
          <p className="text-base text-[#1A211E]/70 max-w-md">
            Projects are more than reports, dashboards and deliverables. These are some of the people, places and moments behind the work.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-[#16382B] text-[#FBF9F5] shadow-md scale-105'
                  : 'bg-[#F3EFE6] text-[#1A211E]/80 hover:bg-[#1A211E]/10 hover:text-[#16382B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-xl overflow-hidden bg-[#16382B] cursor-pointer aspect-[4/3] border border-[#1A211E]/10 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-110 group-hover:brightness-100 transition-all duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D261C]/90 via-[#0D261C]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Top Category Badge */}
              <span className="absolute top-3 left-3 px-3 py-1 bg-[#16382B]/90 backdrop-blur-sm text-[#D49B4B] text-[10px] font-bold uppercase tracking-wider rounded-full border border-[#FBF9F5]/20">
                {item.category}
              </span>

              {/* Hover Trigger Icon */}
              <div className="absolute top-3 right-3 p-2 rounded-full bg-[#FBF9F5]/20 text-[#FBF9F5] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Content Metadata on Hover */}
              <div className="absolute bottom-4 left-4 right-4 text-[#FBF9F5] space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-serif-editorial font-bold leading-tight">
                  {item.title}
                </h3>
                <div className="flex items-center gap-3 text-[11px] text-[#FBF9F5]/80 font-medium pt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#C26D47]" /> {item.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#D49B4B]" /> {item.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <LightboxModal
          item={filteredItems[lightboxIndex]}
          onClose={() => setLightboxIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
}
