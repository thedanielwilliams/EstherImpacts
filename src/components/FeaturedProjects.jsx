import React, { useState } from 'react';
import { ArrowRight, FolderKanban, Sparkles } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function FeaturedProjects({ data }) {
  const projects = data.projects;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-[#F3EFE6] text-[#1A211E] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1A211E]/15 pb-8">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C26D47]">
              Impact Case Studies
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif-editorial text-[#1A211E]">
              SELECTED WORK
            </h2>
          </div>
          <p className="text-base text-[#1A211E]/70 max-w-md font-normal">
            A few problems I have had the opportunity to help solve. Each project represents an end-to-end operational journey from raw friction to sustainable outcomes.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-[#FBF9F5] rounded-2xl border border-[#1A211E]/10 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#16382B]/30 transition-all duration-500 flex flex-col justify-between group"
            >
              {/* Image & Category Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#16382B]">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D261C]/80 via-transparent to-transparent opacity-80" />

                <span className="absolute top-4 left-4 px-3 py-1 bg-[#16382B]/90 backdrop-blur-md text-[#FBF9F5] text-[10px] font-bold uppercase tracking-wider rounded-full border border-[#FBF9F5]/20">
                  {project.category.split('/')[0]}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags?.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-semibold text-[#C26D47] bg-[#C26D47]/10 px-2.5 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-serif-editorial font-bold text-[#16382B] group-hover:text-[#C26D47] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#1A211E]/80 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Key Numbers Teaser */}
                <div className="pt-4 border-t border-[#1A211E]/10 space-y-2">
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    {project.keyMetrics?.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="bg-[#F3EFE6] p-2 rounded border border-[#1A211E]/5">
                        <span className="text-[#1A211E]/60 block text-[9px] uppercase font-bold">{m.label}</span>
                        <span className="font-bold text-[#16382B]">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Trigger Modal Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full mt-2 py-3 px-4 rounded-xl bg-[#16382B] text-[#FBF9F5] hover:bg-[#C26D47] transition-colors text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 group/btn"
                  >
                    <span>View Project Story</span>
                    <ArrowRight className="w-4 h-4 text-[#D49B4B] group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Deep-Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
