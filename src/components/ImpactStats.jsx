import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Award, BookOpen, Clock, Quote } from 'lucide-react';

export default function ImpactStats({ data }) {
  const metrics = data.impactMetrics;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getMetricIcon = (id) => {
    switch (id) {
      case 'years-lead':
        return <Clock className="w-5 h-5 text-[#C26D47]" />;
      case 'membership-growth':
        return <TrendingUp className="w-5 h-5 text-[#16382B]" />;
      case 'exam-benchmark':
        return <Award className="w-5 h-5 text-[#D49B4B]" />;
      case 'alumni-network':
        return <Users className="w-5 h-5 text-[#C26D47]" />;
      case 'learners-managed':
        return <BookOpen className="w-5 h-5 text-[#16382B]" />;
      default:
        return <TrendingUp className="w-5 h-5 text-[#16382B]" />;
    }
  };

  return (
    <section id="impact" ref={sectionRef} className="py-24 px-6 md:px-12 bg-[#16382B] text-[#FBF9F5] relative overflow-hidden">
      {/* Background Accent Graphics */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-[#234E3C] rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-[#C26D47] rounded-full blur-3xl opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#FBF9F5]/15 pb-8">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D49B4B]">
              Measurable Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-editorial text-[#FBF9F5]">
              IMPACT AT A GLANCE
            </h2>
          </div>
          <p className="text-sm text-[#FBF9F5]/70 max-w-md">
            Good intentions don't fix broken systems; execution does. Here is evidence of what happens when strategy, structure, and persistence meet.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={metric.id}
              className={`p-6 rounded-xl bg-[#0D261C] border border-[#FBF9F5]/10 hover:border-[#D49B4B]/40 transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between space-y-4 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="flex justify-between items-start">
                <span className="p-2.5 rounded-lg bg-[#16382B] border border-[#FBF9F5]/10">
                  {getMetricIcon(metric.id)}
                </span>
                <span className="text-[10px] font-mono text-[#FBF9F5]/40 font-bold uppercase">
                  Metric 0{index + 1}
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-4xl md:text-5xl font-serif-editorial font-bold text-[#FBF9F5] flex items-baseline">
                  <span>{metric.value}</span>
                  <span className="text-[#C26D47] text-3xl ml-0.5">{metric.suffix}</span>
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#D49B4B]">
                  {metric.label}
                </p>
              </div>

              <p className="text-xs text-[#FBF9F5]/60 pt-2 border-t border-[#FBF9F5]/10 font-light leading-relaxed">
                {metric.context}
              </p>
            </div>
          ))}
        </div>

        {/* Signature Statement Banner */}
        <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-r from-[#0D261C] via-[#16382B] to-[#0D261C] border border-[#D49B4B]/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-[#C26D47]/20 border border-[#C26D47]/40 shrink-0 hidden sm:block">
              <Quote className="w-6 h-6 text-[#C26D47]" />
            </div>
            <div>
              <p className="text-xl md:text-2xl font-serif-editorial text-[#FBF9F5] italic leading-snug">
                "I measure good work by what changed because we showed up."
              </p>
              <span className="text-xs uppercase tracking-widest text-[#D49B4B] font-bold mt-1 block">
                Esther Onyendu Operating Philosophy
              </span>
            </div>
          </div>

          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-[#FBF9F5] text-[#16382B] hover:bg-[#D49B4B] hover:text-[#0D261C] transition-colors text-xs font-bold uppercase tracking-wider shrink-0"
          >
            See Case Studies →
          </a>
        </div>

      </div>
    </section>
  );
}
