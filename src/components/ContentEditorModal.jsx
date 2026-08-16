import React, { useState } from 'react';
import { X, Save, RotateCcw, Check, Download, Upload } from 'lucide-react';

export default function ContentEditorModal({ data, onSave, onReset, onClose }) {
  const [editedData, setEditedData] = useState(JSON.parse(JSON.stringify(data)));
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleTextChange = (path, value) => {
    const keys = path.split('.');
    const updated = { ...editedData };
    let current = updated;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    setEditedData(updated);
  };

  const handleMetricChange = (idx, field, value) => {
    const updatedMetrics = [...editedData.impactMetrics];
    updatedMetrics[idx][field] = value;
    setEditedData({ ...editedData, impactMetrics: updatedMetrics });
  };

  const handleSave = () => {
    onSave(editedData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(editedData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "esther_portfolio_data.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#0D261C]/80 backdrop-blur-md animate-in fade-in duration-300">
      
      {/* Modal Box */}
      <div className="bg-[#FBF9F5] text-[#1A211E] w-full max-w-3xl rounded-2xl shadow-2xl border border-[#16382B]/20 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 bg-[#16382B] text-[#FBF9F5] flex justify-between items-center sticky top-0 z-10">
          <div>
            <h2 className="text-2xl font-serif-editorial text-[#FBF9F5]">
              Live Portfolio Content Editor
            </h2>
            <p className="text-xs text-[#D49B4B]">
              Customize Esther's text, metrics, contact info & project copy live in browser.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#0D261C] hover:bg-[#C26D47] text-[#FBF9F5] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-8 text-xs">
          
          {/* Section 1: Hero & Tagline */}
          <div className="space-y-4 border-b border-[#1A211E]/10 pb-6">
            <h3 className="text-sm font-bold uppercase text-[#16382B] tracking-wider">
              1. Hero & Branding Copy
            </h3>
            
            <div className="space-y-2">
              <label className="font-semibold text-[#1A211E]">Hero Headline</label>
              <textarea
                rows="2"
                value={editedData.hero.headline}
                onChange={(e) => handleTextChange('hero.headline', e.target.value)}
                className="w-full p-2.5 rounded-lg bg-white border border-[#1A211E]/15 font-serif-editorial text-base text-[#16382B]"
              />
            </div>

            <div className="space-y-2">
              <label className="font-semibold text-[#1A211E]">Subheadline</label>
              <textarea
                rows="2"
                value={editedData.hero.subheadline}
                onChange={(e) => handleTextChange('hero.subheadline', e.target.value)}
                className="w-full p-2.5 rounded-lg bg-white border border-[#1A211E]/15 text-xs text-[#1A211E]"
              />
            </div>
          </div>

          {/* Section 2: Key Metrics */}
          <div className="space-y-4 border-b border-[#1A211E]/10 pb-6">
            <h3 className="text-sm font-bold uppercase text-[#16382B] tracking-wider">
              2. Impact Metrics at a Glance
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {editedData.impactMetrics.map((m, idx) => (
                <div key={m.id} className="p-3 rounded-lg bg-white border border-[#1A211E]/10 space-y-2">
                  <span className="font-bold text-[#C26D47]">Metric 0{idx + 1}</span>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={m.value}
                      onChange={(e) => handleMetricChange(idx, 'value', Number(e.target.value))}
                      className="w-20 p-1.5 rounded bg-[#F3EFE6] border font-bold text-center"
                    />
                    <input
                      type="text"
                      value={m.suffix}
                      onChange={(e) => handleMetricChange(idx, 'suffix', e.target.value)}
                      className="w-16 p-1.5 rounded bg-[#F3EFE6] border text-center font-bold text-[#C26D47]"
                    />
                  </div>
                  <input
                    type="text"
                    value={m.label}
                    onChange={(e) => handleMetricChange(idx, 'label', e.target.value)}
                    className="w-full p-1.5 rounded bg-[#F3EFE6] border text-[11px]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Contact & Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase text-[#16382B] tracking-wider">
              3. Personal & Contact Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-semibold">Email</label>
                <input
                  type="email"
                  value={editedData.personalInfo.email}
                  onChange={(e) => handleTextChange('personalInfo.email', e.target.value)}
                  className="w-full p-2 rounded bg-white border"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold">Phone</label>
                <input
                  type="text"
                  value={editedData.personalInfo.phone}
                  onChange={(e) => handleTextChange('personalInfo.phone', e.target.value)}
                  className="w-full p-2 rounded bg-white border"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-[#F3EFE6] border-t border-[#1A211E]/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-2">
            <button
              onClick={handleExportJSON}
              className="px-3 py-2 rounded-lg bg-white border border-[#1A211E]/20 text-[#16382B] hover:bg-[#16382B] hover:text-white transition-colors flex items-center gap-1.5 font-semibold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export JSON</span>
            </button>

            <button
              onClick={onReset}
              className="px-3 py-2 rounded-lg bg-white border border-red-200 text-red-700 hover:bg-red-50 transition-colors flex items-center gap-1.5 font-semibold"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            {savedSuccess && (
              <span className="text-green-700 font-bold flex items-center gap-1">
                <Check className="w-4 h-4" /> Saved!
              </span>
            )}
            <button
              onClick={handleSave}
              className="px-6 py-2.5 rounded-full bg-[#16382B] text-[#FBF9F5] font-bold uppercase tracking-wider hover:bg-[#0D261C] transition-colors flex items-center gap-2"
            >
              <Save className="w-4 h-4 text-[#D49B4B]" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
