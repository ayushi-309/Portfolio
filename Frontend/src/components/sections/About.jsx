import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../ui/Section';
import { DeveloperIllustration } from '../illustrations/DeveloperIllustration';

export const About = () => {
  return (
    <Section id="about" className="bg-slate-900/30">
      <SectionHeader 
        title="About Me" 
        subtitle="Get to know me and what drives my passion for web development."
      />
      
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <motion.div 
          className="flex-1 w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <DeveloperIllustration />
        </motion.div>

        <motion.div 
          className="flex-1 space-y-6 text-slate-300 text-lg leading-relaxed"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            Hello! I'm Ayushi Tiwari, a Computer Science and Engineering student at Sarala Birla University, Ranchi. I have a passion for building responsive and meaningful web applications using modern technologies like React, Node.js, and MongoDB.
          </p>
          <p>
            My journey in web development has taken me from crafting simple HTML pages to building full-stack platforms with CMS, authentication, and real-time features. I interned as a Web Developer at CodeZoner, where I built InkFlow — a full-featured blogging platform with a rich text editor and Cloudinary-powered media uploads.
          </p>
          <p>
            When I'm not coding, you'll find me sketching, cooking, or traveling to explore new places and perspectives.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};
