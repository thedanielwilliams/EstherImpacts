import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Edit3, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenEditor, data }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Approach', href: '#approach' },
    { label: 'Impact', href: '#impact' },
    { label: 'Selected Work', href: '#projects' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Resourcefulness', href: '#resourcefulness' },
    { label: 'Toolkit', href: '#toolkit' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FBF9F5]/90 backdrop-blur-md shadow-sm border-b border-[#1A211E]/10 py-3.5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Name */}
        <a
          href="#"
          className="group flex items-center gap-2 text-xl font-bold tracking-tight text-[#16382B]"
        >
          <span className="font-display tracking-wider text-xl uppercase font-extrabold text-[#16382B]">
            Esther Onyendu
          </span>
          <span className="h-2 w-2 rounded-full bg-[#C26D47] group-hover:scale-150 transition-transform duration-300"></span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-[#1A211E]/80">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#16382B] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#C26D47] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenEditor}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#16382B] border border-[#16382B]/20 rounded-full hover:bg-[#16382B]/5 transition-all"
            title="Customize Portfolio Data Live"
          >
            <Edit3 className="w-3.5 h-3.5 text-[#C26D47]" />
            <span>Edit Content</span>
          </button>

          <a
            href={data.personalInfo.cvUrl || "#contact"}
            className="flex items-center gap-2 bg-[#16382B] text-[#FBF9F5] px-4 py-2 rounded-full text-xs font-semibold tracking-wide hover:bg-[#0D261C] transition-all shadow-sm hover:shadow"
          >
            <span>Download CV</span>
            <Download className="w-3.5 h-3.5 text-[#D49B4B]" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenEditor}
            className="p-2 text-[#16382B] border border-[#16382B]/20 rounded-full"
            title="Edit Content"
          >
            <Edit3 className="w-4 h-4 text-[#C26D47]" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1A211E] hover:text-[#16382B] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Over Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#FBF9F5] border-b border-[#1A211E]/10 p-6 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4 text-sm font-semibold tracking-wider uppercase text-[#1A211E]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#1A211E]/5 hover:text-[#16382B] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#C26D47]" />
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={data.personalInfo.cvUrl || "#contact"}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#16382B] text-[#FBF9F5] py-3 rounded-full text-xs font-bold uppercase tracking-wider"
              >
                <Download className="w-4 h-4 text-[#D49B4B]" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
