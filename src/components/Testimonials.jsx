import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials({ data }) {
  const testimonials = data.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F3EFE6] text-[#1A211E] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1A211E]/15 pb-8">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C26D47]">
              Professional Endorsements
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-editorial text-[#1A211E]">
              WHAT IT'S LIKE TO WORK WITH ME
            </h2>
          </div>
          <p className="text-base text-[#1A211E]/70 max-w-md">
            Direct feedback from education administrators, state coordinators, and project leaders who have worked alongside Esther.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-14 rounded-3xl border border-[#1A211E]/10 shadow-lg space-y-8 relative overflow-hidden">
          
          <div className="flex justify-between items-center">
            <div className="p-3 rounded-full bg-[#16382B] text-[#D49B4B]">
              <Quote className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-1 text-[#D49B4B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
          </div>

          <p className="text-xl md:text-2xl font-serif-editorial text-[#16382B] leading-relaxed italic">
            "{testimonials[currentIndex].quote}"
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#1A211E]/10">
            <div>
              <h3 className="text-lg font-bold text-[#16382B]">
                {testimonials[currentIndex].author}
              </h3>
              <p className="text-xs text-[#C26D47] font-semibold">
                {testimonials[currentIndex].role} — {testimonials[currentIndex].organization}
              </p>
            </div>

            {/* Slider Navigation Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-[#F3EFE6] hover:bg-[#16382B] hover:text-[#FBF9F5] transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-[#1A211E]/60 font-bold">
                0{currentIndex + 1} / 0{testimonials.length}
              </span>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-[#F3EFE6] hover:bg-[#16382B] hover:text-[#FBF9F5] transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
