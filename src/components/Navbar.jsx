import React, { useState, useEffect } from 'react';
import { Menu, X, Edit3, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenEditor }) {
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
    { label: 'Work', href: '#projects' },
    { label: 'Gallery', href: '#gallery' },
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
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[#1A211E]/80">
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

        {/* Desktop Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenEditor}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#16382B] border border-[#16382B]/20 rounded-full hover:bg-[#16382B]/5 transition-all"
            title="Customize Portfolio Data Live"
          >
            <Edit3 className="w-3.5 h-3.5 text-[#C26D47]" />
            <span>Edit Content</span>
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
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
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#FBF9F5] border-b border-[#1A211E]/10 p-6 shadow-xl animate-in slide-in-from-top duration-300">
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
          </div>
        </div>
      )}
    </header>
  );
}
