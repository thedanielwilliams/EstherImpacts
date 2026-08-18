import React, { useState } from 'react';
import { Search, Cpu, Users, BarChart3, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function HowIWork({ data }) {
  const { title, intro, description, principles } = data.howIWork;
  const [activePrinciple, setActivePrinciple] = useState(0);

  const getPrincipleIcon = (idx) => {
    switch (idx) {
      case 0:
        return <Search className="w-6 h-6 text-[#C26D47]" />;
      case 1:
        return <Cpu className="w-6 h-6 text-[#16382B]" />;
      case 2:
        return <Users className="w-6 h-6 text-[#D49B4B]" />;
      case 3:
        return <BarChart3 className="w-6 h-6 text-[#C26D47]" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#16382B]" />;
    }
  };

  return (
    <section id="approach" className="py-24 px-6 md:px-12 bg-[#FBF9F5] text-[#1A211E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C26D47]">
            Operating Philosophy & Methodology
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-editorial text-[#1A211E]">
            {title}
          </h2>
          <p className="text-xl md:text-2xl font-serif-editorial italic text-[#16382B] leading-relaxed">
            "{intro}"
          </p>
          <p className="text-base text-[#1A211E]/70 font-normal leading-relaxed pt-2">
            {description}
          </p>
        </div>

        {/* Interactive 4 Principles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Navigation Cards (4 Principles) */}
          <div className="lg:col-span-5 space-y-4">
            {principles.map((item, idx) => (
              <div
                key={item.num}
                onClick={() => setActivePrinciple(idx)}
                className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer flex items-start justify-between gap-4 ${
                  activePrinciple === idx
                    ? 'bg-[#16382B] text-[#FBF9F5] border-[#16382B] shadow-lg translate-x-2'
                    : 'bg-[#FFFFFF] text-[#1A211E] border-[#1A211E]/10 hover:border-[#16382B]/30 hover:bg-[#F3EFE6]'
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className={`p-2.5 rounded-lg shrink-0 ${
                    activePrinciple === idx ? 'bg-[#0D261C]' : 'bg-[#F3EFE6]'
                  }`}>
                    {getPrincipleIcon(idx)}
                  </span>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-mono font-bold ${
                        activePrinciple === idx ? 'text-[#D49B4B]' : 'text-[#C26D47]'
                      }`}>
                        {item.num}
                      </span>
                      <h3 className="text-lg font-serif-editorial font-bold">
                        {item.title}
                      </h3>
                    </div>
                    <p className={`text-xs ${
                      activePrinciple === idx ? 'text-[#FBF9F5]/70' : 'text-[#1A211E]/60'
                    }`}>
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <ChevronRight className={`w-5 h-5 shrink-0 mt-2 transition-transform ${
                  activePrinciple === idx ? 'translate-x-1 text-[#D49B4B]' : 'text-[#1A211E]/30'
                }`} />
              </div>
            ))}
          </div>

          {/* Right Deep Dive Panel */}
          <div className="lg:col-span-7 bg-[#FFFFFF] p-8 md:p-12 rounded-2xl border border-[#1A211E]/10 shadow-sm flex flex-col justify-between space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <span className="font-serif-editorial text-9xl text-[#16382B]">
                {principles[activePrinciple].num}
              </span>
            </div>

            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16382B]/10 text-[#16382B] text-xs font-bold uppercase tracking-wider">
                <span>Principle {principles[activePrinciple].num} of 04</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-serif-editorial text-[#16382B]">
                {principles[activePrinciple].title}
              </h3>

              <p className="text-lg font-serif-editorial italic text-[#C26D47]">
                "{principles[activePrinciple].subtitle}"
              </p>

              <p className="text-base text-[#1A211E]/80 leading-relaxed pt-2">
                {principles[activePrinciple].description}
              </p>
            </div>

            {/* Practical execution example for selected principle */}
            <div className="p-6 rounded-xl bg-[#F3EFE6] border border-[#1A211E]/10 space-y-2 relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#16382B]">
                Application:
              </span>
              <p className="text-xs text-[#1A211E]/80 leading-relaxed">
                {activePrinciple === 0 && "Conducting baseline student assessments and field stakeholder interviews before authoring any intervention framework."}
                {activePrinciple === 1 && "Mapping clear roles, weekly milestone checklists, transparent budget tracking sheets, and escalation protocols."}
                {activePrinciple === 2 && "Securing local venue partnerships, open-source EdTech tools, and volunteer teacher mentors without waiting for big budgets."}
                {activePrinciple === 3 && "Tracking national examination success benchmarks, retention rates, and long-term community alumni engagement."}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
