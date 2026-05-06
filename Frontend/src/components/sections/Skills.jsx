import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../ui/Section';
import { Card } from '../ui/Card';

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "Vue", "Tailwind CSS", "Framer Motion", "TypeScript"] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"] },
  { category: "Tools", items: ["Git", "Docker", "Figma", "AWS", "Vercel", "Linux"] }
];

export const Skills = () => {
  return (
    <Section id="skills">
      <SectionHeader 
        title="My Skills" 
        subtitle="Technologies and tools I use to bring ideas to life."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skillGroup, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, itemIdx) => (
                  <span 
                    key={itemIdx}
                    className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm font-medium border border-slate-700 hover:border-blue-500 hover:text-white transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
