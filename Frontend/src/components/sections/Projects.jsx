import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../ui/Section';
import { Card } from '../ui/Card';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import { resumeData } from '../../data/resumeData';

export const Projects = () => {
  const { projects } = resumeData;

  const parseTechStack = (techStack) => {
    if (Array.isArray(techStack)) return techStack;
    if (!techStack) return [];
    return techStack
      .split(/[,]/)
      .map((t) => t.replace(/\band\b/gi, '').trim())
      .filter(Boolean);
  };

  return (
    <Section id="projects" className="bg-slate-900/30">
      <SectionHeader
        title="Featured Projects"
        subtitle="Some of my recent work that I'm proud of."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => {
          const techList = parseTechStack(project.techStack || project.tech);

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full flex flex-col group hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                {/* Project Image / Header */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-950 border-b border-slate-800/80">
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.name || project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      {/* Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-800/80 via-slate-900/90 to-slate-950 p-5 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                        <FiFolder size={24} />
                      </div>
                    </div>
                  )}

                  {/* Top Overlay Badge & Action Links */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                    <span className="px-2.5 py-1 text-xs font-mono font-medium text-blue-300 bg-slate-900/80 backdrop-blur-md rounded-md border border-blue-500/30 shadow-md">
                      #{String(idx + 1).padStart(2, '0')}
                    </span>

                    <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-2 py-1 rounded-lg border border-slate-700/60 shadow-md">
                      {project.github && (
                        <a
                          href={project.github.trim()}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Repository"
                          className="p-1 text-slate-300 hover:text-white transition-colors"
                        >
                          <FiGithub size={16} />
                        </a>
                      )}
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo.trim()}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live Demo"
                          className="p-1 text-slate-300 hover:text-emerald-400 transition-colors"
                        >
                          <FiExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3">
                    {project.name || project.title}
                  </h3>

                  {/* Bullet points */}
                  {project.bullets && project.bullets.length > 0 ? (
                    <ul className="space-y-2 mb-6 flex-1 text-sm text-slate-400">
                      {project.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <span className="text-blue-400 mt-1 flex-shrink-0 text-xs">▹</span>
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : project.description ? (
                    <p className="text-slate-400 mb-6 flex-1 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  ) : null}

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/60">
                    {techList.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
