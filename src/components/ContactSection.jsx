import React, { useState } from 'react';
import { Mail, Phone, MapPin, Download, Send, CheckCircle2, Copy } from 'lucide-react';

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
  </svg>
);
import confetti from 'canvas-confetti';

export default function ContactSection({ data }) {
  const { title, subtext, primaryCta, linkedinCta, cvCta } = data.contact;
  const { email, phone, location, linkedin, cvUrl } = data.personalInfo;

  const [copiedField, setCopiedField] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    projectScope: 'Education & EdTech',
    message: ''
  });

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-[#FBF9F5] text-[#1A211E] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C26D47]">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-editorial text-[#1A211E]">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-[#1A211E]/80 font-normal leading-relaxed">
            {subtext}
          </p>
        </div>

        {/* Contact Grid: Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Quick Buttons */}
          <div className="lg:col-span-5 space-y-8 bg-white p-8 md:p-10 rounded-2xl border border-[#1A211E]/10 shadow-sm">
            <h3 className="text-2xl font-serif-editorial text-[#16382B]">
              Direct Contact & Networks
            </h3>

            <div className="space-y-4 text-xs md:text-sm">
              {/* Email */}
              <div className="p-4 rounded-xl bg-[#F3EFE6] border border-[#1A211E]/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-5 h-5 text-[#C26D47] shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#1A211E]/50 block">Email</span>
                    <a href={`mailto:${email}`} className="font-semibold text-[#16382B] hover:underline truncate block">
                      {email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(email, 'email')}
                  className="p-2 rounded-lg bg-white hover:bg-[#16382B] hover:text-[#FBF9F5] transition-colors shrink-0 text-xs font-medium"
                  title="Copy email"
                >
                  {copiedField === 'email' ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-[#F3EFE6] border border-[#1A211E]/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#16382B] shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#1A211E]/50 block">Phone</span>
                    <span className="font-semibold text-[#16382B]">{phone}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(phone, 'phone')}
                  className="p-2 rounded-lg bg-white hover:bg-[#16382B] hover:text-[#FBF9F5] transition-colors shrink-0 text-xs font-medium"
                  title="Copy phone"
                >
                  {copiedField === 'phone' ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-[#F3EFE6] border border-[#1A211E]/5 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#D49B4B] shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#1A211E]/50 block">Primary Location</span>
                  <span className="font-semibold text-[#16382B]">{location}</span>
                </div>
              </div>
            </div>

            {/* Quick Action Links */}
            <div className="space-y-3 pt-4 border-t border-[#1A211E]/10">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-full bg-[#16382B] text-[#FBF9F5] hover:bg-[#0D261C] transition-colors text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <LinkedinIcon className="w-4 h-4 text-[#D49B4B]" />
                <span>{linkedinCta}</span>
              </a>

              <a
                href={cvUrl}
                className="w-full py-3 px-6 rounded-full bg-[#F3EFE6] text-[#16382B] border border-[#16382B]/20 hover:bg-[#16382B]/10 transition-colors text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-[#C26D47]" />
                <span>{cvCta}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Conversation Inquiry Form */}
          <div className="lg:col-span-7 bg-[#16382B] text-[#FBF9F5] p-8 md:p-12 rounded-2xl shadow-xl space-y-6">
            <div className="space-y-2">
              <h3 className="text-3xl font-serif-editorial text-[#FBF9F5]">
                {primaryCta}
              </h3>
              <p className="text-xs text-[#FBF9F5]/70 font-light">
                Fill in the details below to share your project goals, capacity-building ideas, or operational inquiries.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-xl bg-[#0D261C] border border-[#D49B4B]/40 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-[#C26D47] text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-serif-editorial text-[#FBF9F5]">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs text-[#FBF9F5]/80 font-light max-w-md mx-auto">
                  Thank you for reaching out. Esther will review your message and get back to you shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2 rounded-full bg-[#FBF9F5] text-[#16382B] text-xs font-bold uppercase tracking-wider hover:bg-[#D49B4B]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#D49B4B]">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Jane Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0D261C] border border-[#FBF9F5]/15 text-xs text-[#FBF9F5] placeholder-[#FBF9F5]/40 focus:outline-none focus:border-[#D49B4B]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#D49B4B]">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@organization.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0D261C] border border-[#FBF9F5]/15 text-xs text-[#FBF9F5] placeholder-[#FBF9F5]/40 focus:outline-none focus:border-[#D49B4B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#D49B4B]">Organization / Initiative</label>
                    <input
                      type="text"
                      placeholder="e.g. Global Education Alliance"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0D261C] border border-[#FBF9F5]/15 text-xs text-[#FBF9F5] placeholder-[#FBF9F5]/40 focus:outline-none focus:border-[#D49B4B]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#D49B4B]">Focus Area</label>
                    <select
                      value={formData.projectScope}
                      onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0D261C] border border-[#FBF9F5]/15 text-xs text-[#FBF9F5] focus:outline-none focus:border-[#D49B4B]"
                    >
                      <option value="Education & EdTech">Education & EdTech</option>
                      <option value="Digital Inclusion">Digital Inclusion</option>
                      <option value="Community & Youth Development">Community & Youth Development</option>
                      <option value="Project Management & Operations">Project Management & Operations</option>
                      <option value="Speaking & Facilitation">Speaking & Facilitation</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#D49B4B]">Project / Challenge Details</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Tell Esther about the problem, goal, or opportunity you want to turn into progress..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0D261C] border border-[#FBF9F5]/15 text-xs text-[#FBF9F5] placeholder-[#FBF9F5]/40 focus:outline-none focus:border-[#D49B4B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#C26D47] text-[#FBF9F5] hover:bg-[#A85A36] transition-colors text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4 text-[#D49B4B]" />
                  <span>Send Proposal / Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
