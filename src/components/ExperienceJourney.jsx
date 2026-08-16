import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function ExperienceJourney({ data }) {
  const experiences = data.experienceJourney;
  const [expandedId, setExpandedId] = useState(experiences[0]?.id || null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-[#F3EFE6] text-[#1A211E] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1A211E]/15 pb-8">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C26D47]">
              Career Trajectory & Track Record
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-editorial text-[#1A211E]">
              PLACES I'VE LEARNED, BUILT AND LED.
            </h2>
          </div>
          <p className="text-base text-[#1A211E]/70 max-w-md">
            Instead of a static CV, this journey reflects real-world operational ownership across edtech, community growth, and data analytics.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div
                key={exp.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#16382B] text-[#FBF9F5] border-[#16382B] shadow-xl'
                    : 'bg-white text-[#1A211E] border-[#1A211E]/10 hover:border-[#16382B]/30 hover:bg-[#FBF9F5]'
                }`}
              >
                {/* Accordion Header */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded ${
                        isExpanded ? 'bg-[#0D261C] text-[#D49B4B]' : 'bg-[#F3EFE6] text-[#C26D47]'
                      }`}>
                        0{idx + 1}
                      </span>
                      <h3 className="text-xl md:text-2xl font-serif-editorial font-bold">
                        {exp.role}
                      </h3>
                    </div>
                    <p className={`text-xs font-semibold ${
                      isExpanded ? 'text-[#D49B4B]' : 'text-[#16382B]'
                    }`}>
                      {exp.organization}
                    </p>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 text-xs opacity-80">
                    <div className="flex flex-col sm:items-end">
                      <span className="flex items-center gap-1 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-[#C26D47]" /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#D49B4B]" /> {exp.location}
                      </span>
                    </div>

                    <div className={`p-2 rounded-full transition-transform duration-300 ${
                      isExpanded ? 'rotate-180 bg-[#0D261C] text-[#D49B4B]' : 'bg-[#F3EFE6] text-[#1A211E]'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="px-6 pb-8 md:px-8 space-y-4 border-t border-white/10 pt-6 animate-in slide-in-from-top-2 duration-300">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D49B4B] block">
                      Key Deliverables & Measurable Impact:
                    </span>
                    <ul className="space-y-3">
                      {exp.impactPoints?.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3 text-xs md:text-sm text-[#FBF9F5]/90 font-light leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#C26D47] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
