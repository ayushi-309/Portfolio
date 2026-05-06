import React from 'react';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-2">Portfolio.</h3>
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          {[
            { icon: <FiGithub size={20} />, href: "#" },
            { icon: <FiTwitter size={20} />, href: "#" },
            { icon: <FiLinkedin size={20} />, href: "#" },
            { icon: <FiMail size={20} />, href: "#" },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              className="p-2 rounded-full bg-slate-900 text-slate-400 hover:bg-blue-600 hover:text-white transition-all"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
