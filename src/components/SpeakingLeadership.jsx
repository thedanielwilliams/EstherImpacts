import React from 'react';
import { Mic, Presentation, Users } from 'lucide-react';

export default function SpeakingLeadership({ data }) {
  const { title, subtitle, sessions } = data.speakingAndLeadership;

  return (
    <section className="py-24 px-6 md:px-12 bg-[#16382B] text-[#FBF9F5] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C26D47] rounded-full blur-[120px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D49B4B]">
            Facilitation & Public Convenings
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-editorial text-[#FBF9F5]">
            {title}
          </h2>
          <p className="text-base text-[#FBF9F5]/70 font-light leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Sessions Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sessions.map((session, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#0D261C] border border-[#FBF9F5]/10 hover:border-[#D49B4B]/40 transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="p-3 rounded-xl bg-[#16382B] text-[#D49B4B] border border-[#FBF9F5]/10">
                    {idx === 0 ? <Mic className="w-5 h-5" /> : idx === 1 ? <Presentation className="w-5 h-5" /> : <Users className="w-5 h-5" />}
                  </span>
                  <span className="text-xs font-mono text-[#D49B4B] font-bold">
                    {session.year}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C26D47]">
                    {session.role} • {session.event}
                  </span>
                  <h3 className="text-xl font-serif-editorial font-bold text-[#FBF9F5] group-hover:text-[#D49B4B] transition-colors">
                    {session.title}
                  </h3>
                </div>

                <p className="text-xs text-[#FBF9F5]/70 font-light leading-relaxed">
                  {session.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
