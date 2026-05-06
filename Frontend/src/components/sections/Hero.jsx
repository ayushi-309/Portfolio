import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import ProfileImage from "../../assets/Images/Image.jpeg"

export const Hero = () => {
  return (
    <Section id="home" className="min-h-screen pt-32 lg:pt-0">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          className="flex-1 space-y-8 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-sm text-blue-400 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for new opportunities
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Creative</span>
            <br /> Web Developer
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0">
            I build exceptional and accessible digital experiences for the web. Focusing on modern technologies and premium design.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Button size="lg" className="gap-2">
              View Projects <FiArrowRight size={20} />
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              Resume <FiDownload size={20} />
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 w-full max-w-md lg:max-w-full relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="aspect-square rounded-full bg-gradient-to-tr from-blue-600/20 to-emerald-500/20 blur-3xl absolute inset-0"></div>
          <div className="relative z-10 w-full aspect-[4/5] md:aspect-square bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-2xl flex items-center justify-center">
            {/* Placeholder for an actual image */}
            <span className="text-slate-500 text-lg">
              <img src={ProfileImage} alt="Profile Image" className="w-full h-full object-cover" />
            </span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
