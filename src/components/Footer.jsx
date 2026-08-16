import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

export default function Footer({ data }) {
  const { name, tagline, linkedin } = data.personalInfo;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D261C] text-[#FBF9F5] py-12 px-6 md:px-12 border-t border-[#FBF9F5]/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#FBF9F5]/70">
        
        <div className="space-y-1 text-center md:text-left">
          <p className="font-display font-bold text-sm tracking-wider uppercase text-[#FBF9F5]">
            {name}
          </p>
          <p className="text-[11px] text-[#D49B4B] font-serif-editorial italic">
            "{tagline}"
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D49B4B] transition-colors"
          >
            LinkedIn Profile
          </a>
          <span>•</span>
          <a href="#contact" className="hover:text-[#D49B4B] transition-colors">
            Contact Esther
          </a>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-[11px]">
            © {new Date().getFullYear()} Esther Onyendu. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-[#16382B] hover:bg-[#C26D47] text-[#FBF9F5] transition-colors"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
