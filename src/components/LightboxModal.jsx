import React, { useEffect } from 'react';
import { X, MapPin, Calendar, HelpCircle, CheckCircle2, AlertCircle } from 'lucide-react';

export default function LightboxModal({ item, onClose, onNext, onPrev }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onNext, onPrev]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#0D261C]/90 backdrop-blur-lg animate-in fade-in duration-300">
      
      {/* Lightbox Container */}
      <div className="bg-[#FBF9F5] text-[#1A211E] w-full max-w-5xl rounded-2xl shadow-2xl border border-[#16382B]/20 overflow-hidden flex flex-col lg:flex-row max-h-[90vh]">
        
        {/* Left Image View */}
        <div className="lg:w-7/12 bg-[#0D261C] relative flex items-center justify-center p-4 overflow-hidden min-h-[300px]">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-contain max-h-[70vh] rounded-lg"
          />

          {/* Category Overlay Tag */}
          <span className="absolute top-4 left-4 px-3 py-1 bg-[#16382B]/90 text-[#D49B4B] text-[10px] font-bold uppercase tracking-wider rounded-full border border-[#FBF9F5]/20">
            {item.category}
          </span>

          {/* Close button inside image on mobile */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#16382B] text-[#FBF9F5] hover:bg-[#C26D47] transition-colors lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Right Story Panel */}
        <div className="lg:w-5/12 p-6 md:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h3 className="text-2xl md:text-3xl font-serif-editorial text-[#16382B]">
                  {item.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-[#1A211E]/70 font-semibold pt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C26D47]" /> {item.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#D49B4B]" /> {item.year}
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-[#F3EFE6] text-[#16382B] hover:bg-[#C26D47] hover:text-[#FBF9F5] transition-colors hidden lg:block"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Story Breakdown */}
            <div className="space-y-4 pt-2">
              
              {/* 1. What was happening? */}
              <div className="p-4 rounded-xl bg-white border border-[#1A211E]/10 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#16382B] flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-[#C26D47]" /> What was happening here?
                </span>
                <p className="text-xs text-[#1A211E]/80 leading-relaxed">
                  {item.story?.what}
                </p>
              </div>

              {/* 2. What problem were we solving? */}
              <div className="p-4 rounded-xl bg-white border border-[#1A211E]/10 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C26D47] flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" /> What problem were we solving?
                </span>
                <p className="text-xs text-[#1A211E]/80 leading-relaxed">
                  {item.story?.problem}
                </p>
              </div>

              {/* 3. What changed afterwards? */}
              <div className="p-4 rounded-xl bg-[#16382B] text-[#FBF9F5] space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D49B4B] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D49B4B]" /> What changed afterwards?
                </span>
                <p className="text-xs text-[#FBF9F5]/90 leading-relaxed font-light">
                  {item.story?.outcome}
                </p>
              </div>

            </div>
          </div>

          {/* Navigation Controls */}
          <div className="pt-4 border-t border-[#1A211E]/10 flex justify-between items-center text-xs font-bold text-[#1A211E]">
            <button
              onClick={onPrev}
              className="px-4 py-2 rounded-full bg-[#F3EFE6] hover:bg-[#16382B] hover:text-[#FBF9F5] transition-colors"
            >
              ← Previous Photo
            </button>
            <button
              onClick={onNext}
              className="px-4 py-2 rounded-full bg-[#F3EFE6] hover:bg-[#16382B] hover:text-[#FBF9F5] transition-colors"
            >
              Next Photo →
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
