import React, { useState } from 'react';
import { ArrowRight, Zap, Target, Users, Package, Settings, Play, Award } from 'lucide-react';

export default function ResourcefulnessFlow({ data }) {
  const { title, subtitle, copy, steps } = data.resourcefulnessDiagram;
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (id) => {
    switch (id) {
      case 'problem':
        return <Target className="w-5 h-5" />;
      case 'people':
        return <Users className="w-5 h-5" />;
      case 'resources':
        return <Package className="w-5 h-5" />;
      case 'systems':
        return <Settings className="w-5 h-5" />;
      case 'execution':
        return <Play className="w-5 h-5" />;
      case 'impact':
        return <Award className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <section id="resourcefulness" className="py-24 px-6 md:px-12 bg-[#16382B] text-[#FBF9F5] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#234E3C] rounded-full blur-[140px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D49B4B]">
            Operating Under Constraints
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-editorial text-[#FBF9F5] leading-tight">
            {title}
          </h2>
          <p className="text-lg font-serif-editorial italic text-[#FBF9F5]/90">
            "{subtitle}"
          </p>
          <p className="text-sm md:text-base text-[#FBF9F5]/70 font-light leading-relaxed pt-2">
            {copy}
          </p>
        </div>

        {/* Flow Stepper Bar (Horizontal Flow Diagram) */}
        <div className="space-y-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {steps.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl border transition-all text-left flex flex-col justify-between space-y-3 group ${
                  activeStep === idx
                    ? 'bg-[#C26D47] text-[#FBF9F5] border-[#C26D47] shadow-xl scale-105'
                    : 'bg-[#0D261C] text-[#FBF9F5]/80 border-[#FBF9F5]/10 hover:border-[#D49B4B]/40 hover:bg-[#16382B]'
                }`}
              >
                <div className="flex justify-between items-center w-full">
                  <span className={`p-2 rounded-lg ${
                    activeStep === idx ? 'bg-[#0D261C]' : 'bg-[#16382B]'
                  }`}>
                    {getStepIcon(step.id)}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#D49B4B]">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-0.5">
                  <h3 className="text-sm font-bold tracking-wide uppercase font-display">
                    {step.label}
                  </h3>
                  <span className="text-[10px] opacity-70 block">
                    Step 0{idx + 1} of 06
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Connected Flow Indicator Line */}
          <div className="hidden lg:flex items-center justify-between px-6 text-[#D49B4B]/40 text-xs font-mono">
            {steps.map((s, idx) => (
              <React.Fragment key={s.id}>
                <span className={activeStep === idx ? 'text-[#D49B4B] font-bold' : ''}>
                  {s.label}
                </span>
                {idx < steps.length - 1 && <span>→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Step Breakdown Card */}
        <div className="p-8 md:p-12 rounded-2xl bg-[#0D261C] border border-[#FBF9F5]/15 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-4 space-y-4 border-b lg:border-b-0 lg:border-r border-[#FBF9F5]/10 pb-6 lg:pb-0 lg:pr-8">
            <span className="text-xs font-mono font-bold uppercase text-[#D49B4B]">
              Phase 0{activeStep + 1} • {steps[activeStep].label}
            </span>
            <h3 className="text-3xl font-serif-editorial text-[#FBF9F5]">
              {steps[activeStep].label} Stage
            </h3>
            <p className="text-sm text-[#FBF9F5]/80 leading-relaxed font-light">
              {steps[activeStep].desc}
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C26D47]">
              Real-World Borderland Operational Practice:
            </span>
            <div className="p-6 rounded-xl bg-[#16382B] border border-[#FBF9F5]/10 space-y-3">
              <p className="text-sm text-[#FBF9F5]/90 leading-relaxed italic font-serif-editorial">
                {activeStep === 0 && "Instead of assuming why student exam pass rates dropped, we conducted topic-level diagnostic audits directly with Biology students."}
                {activeStep === 1 && "We mobilized existing NYSC corps members and volunteer teachers, empowering them as peer project leaders."}
                {activeStep === 2 && "Rather than waiting for high-end tech labs, we utilized open-source USB quiz platforms and under-utilized school hall spaces."}
                {activeStep === 3 && "Established clear weekly milestones: diagnostic tests on Mondays, group remediations on Wednesdays, practice reviews on Fridays."}
                {activeStep === 4 && "Iterated on feedback weekly, adapting lesson speed for struggling clusters without delaying advanced learners."}
                {activeStep === 5 && "Tracked concrete exam pass rate increases (40% → 65%) and institutional adoption by school principals."}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
