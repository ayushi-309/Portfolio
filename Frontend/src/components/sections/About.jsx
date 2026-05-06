import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../ui/Section';

export const About = () => {
  return (
    <Section id="about" className="bg-slate-900/30">
      <SectionHeader 
        title="About Me" 
        subtitle="Get to know me and what drives my passion for web development."
      />
      
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <motion.div 
          className="flex-1 w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-video rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center overflow-hidden">
             {/* Placeholder for workspace/about image */}
             <span className="text-slate-500 text-lg">Workspace Image Here</span>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 space-y-6 text-slate-300 text-lg leading-relaxed"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            Hello! I'm a passionate web developer with a keen eye for design and a strong foundation in modern frontend technologies. I love creating beautiful, performant, and accessible user interfaces.
          </p>
          <p>
            My journey in web development started with tweaking CSS on custom blogs and evolved into building complex single-page applications. I believe that good design is not just about aesthetics, but about how it works and feels.
          </p>
          <p>
            When I'm not coding, you can find me exploring new design trends, contributing to open-source, or enjoying a good cup of coffee while reading about the latest tech.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};
