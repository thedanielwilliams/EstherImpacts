import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';

export default function EducationCertifications({ data }) {
  const { academic, certifications } = data.educationAndDev;

  return (
    <section className="py-24 px-6 md:px-12 bg-[#FBF9F5] text-[#1A211E] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1A211E]/15 pb-8">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C26D47]">
              Continuous Learning & Qualifications
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-editorial text-[#1A211E]">
              EDUCATION & DEVELOPMENT
            </h2>
          </div>
          <p className="text-base text-[#1A211E]/70 max-w-md">
            Academic grounding combined with world-class professional acceleration programs in edtech, leadership, and social enterprise.
          </p>
        </div>

        {/* Grid for Academic vs Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Academic Degrees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#16382B]">
              <GraduationCap className="w-5 h-5 text-[#C26D47]" /> Academic Degrees
            </div>

            <div className="space-y-4">
              {academic.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#1A211E]/10 space-y-3 shadow-sm hover:border-[#16382B]/30 transition-all"
                >
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 bg-[#16382B]/10 text-[#16382B] text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {edu.badge}
                    </span>
                    <span className="text-xs font-mono text-[#1A211E]/60">{edu.period}</span>
                  </div>
                  <h3 className="text-xl font-serif-editorial font-bold text-[#16382B]">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-[#1A211E]/80 font-medium">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Professional Acceleration & Certifications */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#16382B]">
              <Award className="w-5 h-5 text-[#D49B4B]" /> Professional Development & Certifications
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#F3EFE6] border border-[#1A211E]/10 space-y-2 hover:bg-white transition-all shadow-xs"
                >
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C26D47] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#16382B]">
                        {cert.name}
                      </h4>
                      <p className="text-[11px] font-mono text-[#C26D47] font-semibold">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-[#1A211E]/70 pt-1 border-t border-[#1A211E]/5 font-light">
                    {cert.topic}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
