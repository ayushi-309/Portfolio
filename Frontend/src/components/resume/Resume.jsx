import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./MyDocument.jsx";
import { resumeData } from "../../data/resumeData.js";
import { motion, AnimatePresence } from "framer-motion";

const {
  personalInfo,
  education = [],
  experience = [],
  skills = [],
  projects = [],
  certifications = [],
  seminars = []
} = resumeData;

const TABS = ["About", "Education", "Experience", "Skills", "Projects", "Certs"];

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.28 },
};

/* ── Pill badge ── */
const Badge = ({ text }) => (
  <span className="inline-block px-2.5 py-0.5 text-[11px] rounded-full bg-teal-500/10 text-teal-600 border border-teal-400/25 font-medium whitespace-nowrap">
    {text}
  </span>
);

/* ── Section card ── */
const Card = ({ children, className = "" }) => (
  <div className={`bg-white/80 backdrop-blur-sm border border-black/6 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-teal-400/30 transition-all duration-200 ${className}`}>
    {children}
  </div>
);

/* ──────────────── TAB PANELS ──────────────── */

const AboutPanel = () => (
  <motion.div {...fadeUp} className="space-y-4">
    <Card>
      <p className="text-sm text-zinc-600 leading-relaxed">{personalInfo.summary}</p>
    </Card>

    <div className="grid grid-cols-2 gap-3">
      {[
        ["📅 DOB", personalInfo.dob],
        ["⚥ Gender", personalInfo.gender],
        ["💍 Status", personalInfo.maritalStatus],
        ["🗣 Languages", personalInfo.languages],
      ].map(([label, val]) => (
        <Card key={label} className="flex flex-col gap-0.5">
          <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">{label}</span>
          <span className="text-sm text-zinc-700 font-medium">{val}</span>
        </Card>
      ))}
    </div>

    <Card>
      <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold block mb-1">📍 Address</span>
      <span className="text-sm text-zinc-700">{personalInfo.address}</span>
    </Card>

    <Card>
      <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold block mb-2">🎯 Interests</span>
      <div className="flex flex-wrap gap-2">
        {personalInfo.interests.map((i) => <Badge key={i} text={i} />)}
      </div>
    </Card>
  </motion.div>
);

const EducationPanel = () => (
  <motion.div {...fadeUp} className="space-y-3">
    {education.map((edu, i) => (
      <Card key={i}>
        <div className="flex justify-between items-start gap-2 flex-wrap">
          <div>
            <h3 className="font-semibold text-black text-sm">{edu.schoolName}</h3>
            <p className="text-xs text-teal-600 font-medium mt-0.5 italic">{edu.degree}</p>
            <p className="text-xs text-zinc-400 mt-0.5">{edu.location}</p>
          </div>
          <div className="text-right flex-shrink-0">
            <span className="text-xs font-mono text-teal-600 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-full">{edu.date}</span>
            <p className="text-xs font-semibold text-zinc-700 mt-1">{edu.grade}</p>
          </div>
        </div>
        {edu.coursework && (
          <p className="mt-2 text-[11px] text-zinc-500 leading-relaxed border-t border-black/5 pt-2">
            <span className="font-semibold text-zinc-600">Coursework: </span>{edu.coursework}
          </p>
        )}
      </Card>
    ))}
  </motion.div>
);

const ExperiencePanel = () => (
  <motion.div {...fadeUp} className="space-y-3">
    {experience.length === 0 ? (
      <p className="text-sm text-zinc-400 text-center py-8">No experience entries yet.</p>
    ) : experience.map((exp, i) => (
      <Card key={i}>
        <div className="flex justify-between items-start gap-2 flex-wrap mb-2">
          <div>
            <h3 className="font-semibold text-black text-sm">{exp.role}</h3>
            <p className="text-xs text-teal-600 italic">{exp.company} · {exp.location}</p>
          </div>
          <span className="text-xs font-mono text-teal-600 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-full flex-shrink-0">{exp.date}</span>
        </div>
        {exp.projectName && (
          <p className="text-xs font-semibold text-zinc-700 mb-1">
            Project: <span className="font-normal text-zinc-500">{exp.projectName}</span>
          </p>
        )}
        {exp.techStack && (
          <p className="text-[11px] text-zinc-500 font-mono mb-2">
            <span className="text-zinc-400">Tech:</span> {exp.techStack}
          </p>
        )}
        <ul className="space-y-1 mt-2">
          {exp.bullets.map((b, j) => (
            <li key={j} className="flex gap-2 text-xs text-zinc-600 leading-relaxed">
              <span className="text-teal-500 mt-0.5 flex-shrink-0">▸</span>{b}
            </li>
          ))}
        </ul>
        {(exp.github || exp.liveDemo) && (
          <div className="flex gap-2 mt-3 pt-2 border-t border-black/5">
            {exp.github && <a href={exp.github} target="_blank" rel="noreferrer" className="text-[11px] px-2.5 py-1 bg-black/5 hover:bg-black/10 rounded-lg text-zinc-600 hover:text-black transition-colors font-medium flex items-center gap-1">⌥ GitHub</a>}
            {exp.liveDemo && <a href={exp.liveDemo} target="_blank" rel="noreferrer" className="text-[11px] px-2.5 py-1 bg-teal-600 hover:bg-teal-700 rounded-lg text-white transition-colors font-medium flex items-center gap-1">↗ Live Demo</a>}
          </div>
        )}
      </Card>
    ))}
  </motion.div>
);

const SkillsPanel = () => (
  <motion.div {...fadeUp} className="space-y-3">
    {skills.map((s, i) => (
      <Card key={i}>
        <h3 className="text-[10px] uppercase tracking-wider font-bold text-zinc-400 mb-2">{s.category}</h3>
        <div className="flex flex-wrap gap-1.5">
          {s.list.split(",").map((item) => <Badge key={item} text={item.trim()} />)}
        </div>
      </Card>
    ))}
  </motion.div>
);

const ProjectsPanel = () => (
  <motion.div {...fadeUp} className="space-y-3">
    {projects.map((p, i) => (
      <Card key={i}>
        <div className="flex justify-between items-start gap-2 flex-wrap mb-1">
          <h3 className="font-semibold text-black text-sm">{p.name}</h3>
          <div className="flex gap-1.5 flex-shrink-0">
            {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="text-[11px] px-2 py-0.5 bg-black/5 hover:bg-black/10 rounded-lg text-zinc-600 font-medium transition-colors">GitHub</a>}
            {p.liveDemo && <a href={p.liveDemo} target="_blank" rel="noreferrer" className="text-[11px] px-2 py-0.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition-colors">Live</a>}
          </div>
        </div>
        {p.techStack && (
          <p className="text-[11px] font-mono text-zinc-500 mb-2">
            <span className="text-zinc-400">Tech:</span> {p.techStack}
          </p>
        )}
        <ul className="space-y-1">
          {p.bullets.map((b, j) => (
            <li key={j} className="flex gap-2 text-xs text-zinc-600 leading-relaxed">
              <span className="text-teal-500 mt-0.5 flex-shrink-0">▸</span>{b}
            </li>
          ))}
        </ul>
      </Card>
    ))}
  </motion.div>
);

const CertsPanel = () => (
  <motion.div {...fadeUp} className="space-y-3">
    {certifications.length > 0 && (
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 pl-1">Certifications</h3>
        <div className="space-y-2">
          {certifications.map((c, i) => (
            <Card key={i} className="flex items-start gap-3">
              <span className="text-teal-500 mt-0.5 flex-shrink-0 text-base">🏅</span>
              <div>
                <p className="text-sm font-semibold text-black">{c.title}</p>
                {c.issuer && <p className="text-xs text-zinc-500 mt-0.5">{c.issuer}</p>}
                {c.keywords && (
                  <p className="text-xs text-teal-600/90 font-medium mt-1">
                    <span className="text-zinc-400">Key Skills: </span>{c.keywords}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    )}

  </motion.div>
);

const PANELS = {
  About: <AboutPanel />,
  Education: <EducationPanel />,
  Experience: <ExperiencePanel />,
  Skills: <SkillsPanel />,
  Projects: <ProjectsPanel />,
  Certs: <CertsPanel />,
};

/* ──────────────── MAIN COMPONENT ──────────────── */

const Resume = () => {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50/40 font-sans">
      {/* Ambient glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-teal-400/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 pt-16 pb-28">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          {/* Avatar initials */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mx-auto mb-3 shadow-lg shadow-teal-200">
            <span className="text-white text-xl font-bold tracking-wide">
              {personalInfo.name.split(" ").map(n => n[0]).join("")}
            </span>
          </div>

          <h1 className="text-3xl font-black text-black tracking-tight">{personalInfo.name}</h1>
          <p className="text-sm text-teal-600 font-medium mt-1">B.Tech CSE · Full-Stack Developer</p>
          <p className="text-xs text-zinc-400 mt-1">{personalInfo.location}</p>

          {/* Contact pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white border border-black/8 text-zinc-600 hover:text-black hover:border-teal-400/50 hover:shadow-sm transition-all">
              ✉ {personalInfo.email}
            </a>
            <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white border border-black/8 text-zinc-600 hover:text-black hover:border-teal-400/50 hover:shadow-sm transition-all">
              📞 {personalInfo.phone}
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white border border-black/8 text-zinc-600 hover:text-black hover:border-teal-400/50 hover:shadow-sm transition-all">
              in LinkedIn
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white border border-black/8 text-zinc-600 hover:text-black hover:border-teal-400/50 hover:shadow-sm transition-all">
              ⌥ GitHub
            </a>
            <a href={personalInfo.portfolio} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-teal-600 text-white hover:bg-teal-700 hover:shadow-md transition-all">
              ↗ Portfolio
            </a>
          </div>
        </motion.div>

        {/* ── Tab bar ── */}
        <div className="flex gap-1 bg-black/5 rounded-2xl p-1 mb-6 overflow-x-auto no-scrollbar">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative flex-1 min-w-fit text-xs font-semibold py-2 px-3 rounded-xl transition-all duration-200 whitespace-nowrap ${
                activeTab === tab
                  ? "text-teal-700"
                  : "text-zinc-500 hover:text-zinc-700"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="tab-pill"
                  className="absolute inset-0 bg-white rounded-xl shadow-sm border border-teal-200/60"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        {/* ── Panel ── */}
        <AnimatePresence mode="wait">
          <div key={activeTab}>
            {PANELS[activeTab]}
          </div>
        </AnimatePresence>
      </div>

      {/* ── Floating download button ── */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <PDFDownloadLink
          document={<MyDocument />}
          fileName="Ayushi_Tiwari_Resume.pdf"
          className="group flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-full shadow-[0_4px_24px_rgba(13,148,136,0.4)] hover:shadow-[0_6px_28px_rgba(13,148,136,0.55)] transition-all duration-200"
        >
          {({ loading }) => (
            <>
              <span>{loading ? "Generating…" : "Download PDF"}</span>
              <span className={`text-base ${loading ? "animate-spin" : "group-hover:translate-y-0.5 transition-transform"}`}>
                {loading ? "⟳" : "↓"}
              </span>
            </>
          )}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Resume;
