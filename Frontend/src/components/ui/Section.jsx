import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

export const Section = ({ id, className, children, ...props }) => {
  return (
    <section
      id={id}
      className={cn(
        "relative py-16 md:py-24 lg:py-32 w-full flex justify-center items-center overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
};

export const SectionHeader = ({ title, subtitle, className }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn("mb-12 md:mb-16 text-center max-w-3xl mx-auto", className)}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg md:text-xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
