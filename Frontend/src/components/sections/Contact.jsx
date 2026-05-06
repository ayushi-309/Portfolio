import React from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../ui/Section';
import { Button } from '../ui/Button';
import { FiSend } from 'react-icons/fi';

export const Contact = () => {
  return (
    <Section id="contact">
      <SectionHeader 
        title="Get In Touch" 
        subtitle="Have a question or want to work together? Leave a message!"
      />
      
      <div className="max-w-2xl mx-auto w-full">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="space-y-6 bg-slate-900/50 p-8 rounded-2xl border border-slate-800 shadow-xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
            <input 
              type="text" 
              id="subject" 
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Project Inquiry"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
            <textarea 
              id="message" 
              rows={5}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>
          
          <Button size="lg" className="w-full gap-2">
            Send Message <FiSend size={18} />
          </Button>
        </motion.form>
      </div>
    </Section>
  );
};
