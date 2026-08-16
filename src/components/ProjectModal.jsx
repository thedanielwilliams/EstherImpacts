import React, { useEffect } from 'react';
import { X, CheckCircle, Target, Lightbulb, AlertTriangle, Award, Wrench, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#0D261C]/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300">
      
      {/* Modal Container */}
      <div className="bg-[#FBF9F5] text-[#1A211E] w-full max-w-4xl rounded-2xl shadow-2xl border border-[#16382B]/20 my-auto overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header Bar */}
        <div className="p-6 md:p-8 bg-[#16382B] text-[#FBF9F5] flex justify-between items-start sticky top-0 z-20 shadow-md">
          <div className="space-y-2 pr-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#D49B4B]">
              Case Study Deep-Dive • {project.category}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif-editorial text-[#FBF9F5]">
              {project.title}
            </h2>
            <p className="text-xs text-[#FBF9F5]/70 flex items-center gap-2">
              <span>{project.context}</span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-[#0D261C] hover:bg-[#C26D47] text-[#FBF9F5] transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 md:p-10 space-y-10 overflow-y-auto">
          
          {/* Hero Image & Metrics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 rounded-xl overflow-hidden shadow-md border border-[#16382B]/10 max-h-72">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-5 bg-[#F3EFE6] p-6 rounded-xl border border-[#1A211E]/10 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#16382B] flex items-center gap-1.5">
                <Target className="w-4 h-4 text-[#C26D47]" /> Key Impact Numbers
              </span>
              <div className="space-y-3 divide-y divide-[#1A211E]/10">
                {project.keyMetrics?.map((m, i) => (
                  <div key={i} className="pt-2 flex justify-between items-center">
                    <span className="text-xs text-[#1A211E]/70 font-medium">{m.label}</span>
                    <span className="text-sm font-bold text-[#16382B]">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Structured Framework: CHALLENGE -> APPROACH -> ACTION -> RESULT -> LESSON */}
          <div className="space-y-8">
            
            {/* 1. Challenge */}
            <div className="p-6 rounded-xl bg-white border border-[#1A211E]/10 space-y-2 border-l-4 border-l-[#C26D47]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C26D47]">
                <AlertTriangle className="w-4 h-4" /> 1. The Challenge
              </div>
              <p className="text-sm md:text-base text-[#1A211E]/90 leading-relaxed font-normal">
                {project.challenge}
              </p>
            </div>

            {/* 2. Approach */}
            <div className="p-6 rounded-xl bg-white border border-[#1A211E]/10 space-y-2 border-l-4 border-l-[#D49B4B]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D49B4B]">
                <Lightbulb className="w-4 h-4" /> 2. Strategic Approach
              </div>
              <p className="text-sm md:text-base text-[#1A211E]/90 leading-relaxed font-normal">
                {project.approach}
              </p>
            </div>

            {/* 3. Action */}
            <div className="p-6 rounded-xl bg-white border border-[#1A211E]/10 space-y-2 border-l-4 border-l-[#16382B]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#16382B]">
                <Layers className="w-4 h-4" /> 3. What We Executed
              </div>
              <p className="text-sm md:text-base text-[#1A211E]/90 leading-relaxed font-normal">
                {project.action}
              </p>
            </div>

            {/* 4. Result */}
            <div className="p-6 rounded-xl bg-[#16382B] text-[#FBF9F5] space-y-2 border-l-4 border-l-[#D49B4B]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D49B4B]">
                <Award className="w-4 h-4" /> 4. Measurable Result
              </div>
              <p className="text-sm md:text-base text-[#FBF9F5]/90 leading-relaxed font-normal">
                {project.result}
              </p>
            </div>

            {/* 5. Key Lesson */}
            <div className="p-6 rounded-xl bg-[#F3EFE6] border border-[#1A211E]/10 space-y-2 border-l-4 border-l-[#16382B]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#16382B]">
                <CheckCircle className="w-4 h-4 text-[#C26D47]" /> 5. Operational Lesson
              </div>
              <p className="text-sm md:text-base text-[#1A211E] font-serif-editorial italic leading-relaxed">
                "{project.lesson}"
              </p>
            </div>

          </div>

          {/* Tools & Skills Applied */}
          <div className="space-y-3 pt-4 border-t border-[#1A211E]/10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#16382B] flex items-center gap-1.5">
              <Wrench className="w-4 h-4 text-[#C26D47]" /> Capabilities & Tools Leveraged:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.toolsUsed?.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-[#16382B]/10 text-[#16382B] rounded-full text-xs font-semibold"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-[#F3EFE6] border-t border-[#1A211E]/10 flex justify-between items-center">
          <span className="text-xs text-[#1A211E]/60 italic">
            Esther Onyendu • Selected Impact Case Studies
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#16382B] text-[#FBF9F5] rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#0D261C] transition-colors"
          >
            Close Story
          </button>
        </div>

      </div>
    </div>
  );
}
