import React from 'react';
import { Sparkles } from 'lucide-react';

export default function PersonalPhilosophy({ data }) {
  const { headline, subtext } = data.philosophy;

  return (
    <section className="py-28 px-6 md:px-12 bg-[#16382B] text-[#FBF9F5] text-center relative overflow-hidden">
      {/* Background Graphic Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-[#FBF9F5]/10 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#D49B4B]/20 rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D261C] border border-[#D49B4B]/30 text-[#D49B4B] text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-4 h-4 text-[#C26D47]" /> Personal Statement
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif-editorial text-[#FBF9F5] leading-tight max-w-3xl mx-auto">
          "{headline}"
        </h2>

        <p className="text-base md:text-xl font-serif-editorial italic text-[#D49B4B]">
          {subtext}
        </p>

        <div className="pt-6">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C26D47] text-[#FBF9F5] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#A85A36] transition-all shadow-lg hover:shadow-xl"
          >
            <span>Let's Build Something Meaningful Together</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
