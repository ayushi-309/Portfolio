import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../ui/Section';
import { Card } from '../ui/Card';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with React, Next.js, and Stripe integration. Features real-time inventory and a custom admin dashboard.",
    tech: ["Next.js", "Tailwind", "Stripe", "Prisma"],
    github: "#",
    live: "#"
  },
  {
    title: "Task Management App",
    description: "A beautifully designed Kanban board application with drag-and-drop functionality, real-time updates, and team collaboration features.",
    tech: ["React", "Firebase", "Framer Motion"],
    github: "#",
    live: "#"
  },
  {
    title: "Weather Dashboard",
    description: "A dynamic weather application providing detailed forecasts, interactive maps, and historical data visualizations using open APIs.",
    tech: ["Vue", "Chart.js", "OpenWeather API"],
    github: "#",
    live: "#"
  }
];

export const Projects = () => {
  return (
    <Section id="projects" className="bg-slate-900/30">
      <SectionHeader 
        title="Featured Projects" 
        subtitle="Some of my recent work that I'm proud of."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card className="h-full flex flex-col group">
              <div className="h-48 bg-slate-800 relative overflow-hidden border-b border-slate-800">
                <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                  Project Image
                </div>
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-slate-400">
                    <a href={project.github} className="hover:text-white transition-colors"><FiGithub size={20} /></a>
                    <a href={project.live} className="hover:text-white transition-colors"><FiExternalLink size={20} /></a>
                  </div>
                </div>
                
                <p className="text-slate-400 mb-6 flex-1 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, techIdx) => (
                    <span key={techIdx} className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
