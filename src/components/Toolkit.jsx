import React, { useState } from 'react';
import { Briefcase, Target, Database, Monitor, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function Toolkit({ data }) {
  const { title, categories } = data.toolkit;
  const [activeTab, setActiveTab] = useState(0);

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'projects':
        return <Briefcase className="w-5 h-5" />;
      case 'strategy':
        return <Target className="w-5 h-5" />;
      case 'data-ops':
        return <Database className="w-5 h-5" />;
      case 'digital':
        return <Monitor className="w-5 h-5" />;
      case 'people':
        return <HeartHandshake className="w-5 h-5" />;
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  return (
    <section id="toolkit" className="py-24 px-6 md:px-12 bg-[#FBF9F5] text-[#1A211E] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1A211E]/15 pb-8">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C26D47]">
              Core Capabilities & Expertise
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-editorial text-[#1A211E]">
              {title}
            </h2>
          </div>
          <p className="text-base text-[#1A211E]/70 max-w-md">
            Capabilities organized by practical operational value rather than decorative skill badges.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3">
          {categories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === idx
                  ? 'bg-[#16382B] text-[#FBF9F5] shadow-md scale-105'
                  : 'bg-[#F3EFE6] text-[#1A211E]/80 hover:bg-[#16382B]/10 hover:text-[#16382B]'
              }`}
            >
              <span>{getCategoryIcon(cat.id)}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display Panel */}
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-[#1A211E]/10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-4 border-b lg:border-b-0 lg:border-r border-[#1A211E]/10 pb-6 lg:pb-0 lg:pr-8">
            <span className="text-xs font-mono font-bold uppercase text-[#C26D47]">
              Capability Group 0{activeTab + 1}
            </span>
            <h3 className="text-3xl font-serif-editorial text-[#16382B]">
              {categories[activeTab].name}
            </h3>
            <p className="text-sm text-[#1A211E]/80 font-serif-editorial italic leading-relaxed">
              "{categories[activeTab].highlight}"
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#16382B]">
              Key Applied Competencies:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {categories[activeTab].skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#F3EFE6] border border-[#1A211E]/5 flex items-center gap-3 hover:bg-[#16382B] hover:text-[#FBF9F5] transition-all group"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C26D47] group-hover:text-[#D49B4B] shrink-0" />
                  <span className="text-xs font-semibold">{skill}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
