import React, { useState, useEffect } from "react";
import MyDocument from "./MyDocument.jsx";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { resumeData } from "../../data/resumeData.js";

const MobileResume = () => {
    const { personalInfo, education, experience, skills, projects } = resumeData;

    return (
        <div className="w-full min-h-screen bg-[#fafafa] text-zinc-600 font-sans pb-32 pt-20 px-4 relative">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-[#00b8b8]/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-12">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold text-black tracking-wide uppercase">{personalInfo.name}</h1>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-[#00b8b8]">
                        <a href={`mailto:${personalInfo.email}`} className="hover:text-[#008080] transition-colors">{personalInfo.email}</a>
                        <span className="text-black/20">|</span>
                        <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="hover:text-[#008080] transition-colors">{personalInfo.phone}</a>
                        <span className="text-black/20">|</span>
                        <a href={personalInfo.portfolio} target="_blank" rel="noreferrer" className="hover:text-[#008080] transition-colors">Portfolio</a>
                    </div>
                    <div className="flex justify-center gap-x-4 text-sm text-zinc-500">
                        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
                        <span className="text-black/20">|</span>
                        <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-black transition-colors">GitHub</a>
                    </div>
                </div>

                {/* Education */}
                <section>
                    <h2 className="text-xl font-bold text-black mb-6 border-b border-[#00b8b8]/20 pb-2 flex items-center gap-2">
                        <i className="ri-graduation-cap-line text-[#00b8b8]"></i> Education
                    </h2>
                    <div className="space-y-6">
                        {education.map((item, idx) => (
                            <div key={idx} className="bg-white border border-black/5 p-5 rounded-2xl hover:border-[#00b8b8]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all">
                                <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                                    <h3 className="text-lg font-semibold text-black">{item.schoolName}</h3>
                                    <span className="text-sm text-[#00b8b8] font-mono">{item.date}</span>
                                </div>
                                <p className="text-sm text-zinc-600 italic mb-1">{item.degree}</p>
                                <p className="text-xs text-zinc-400 mb-3">{item.location}</p>
                                {item.coursework && (
                                    <p className="text-sm leading-relaxed"><span className="text-black font-medium">Relevant Coursework:</span> {item.coursework}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experience */}
                {experience && experience.length > 0 && (
                    <section>
                        <h2 className="text-xl font-bold text-black mb-6 border-b border-[#00b8b8]/20 pb-2 flex items-center gap-2">
                            <i className="ri-briefcase-4-line text-[#00b8b8]"></i> Experience
                        </h2>
                        <div className="space-y-6">
                            {experience.map((exp, idx) => (
                                <div key={idx} className="bg-white border border-black/5 p-5 rounded-2xl hover:border-[#00b8b8]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all">
                                    <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                                        <h3 className="text-lg font-semibold text-black">{exp.company}</h3>
                                        <span className="text-sm text-[#00b8b8] font-mono">{exp.date}</span>
                                    </div>
                                    <div className="flex flex-col mb-4">
                                        <p className="text-sm text-[#008080] font-medium">{exp.role}</p>
                                        <p className="text-xs text-zinc-400">{exp.location}</p>
                                    </div>

                                    {(exp.github || exp.liveDemo) && (
                                        <div className="flex gap-4 mb-4">
                                            {exp.github && (
                                                <a href={exp.github} target="_blank" rel="noreferrer" className="text-xs flex items-center gap-1 text-zinc-500 hover:text-black transition-colors">
                                                    <i className="ri-github-fill"></i> Source
                                                </a>
                                            )}
                                            {exp.liveDemo && (
                                                <a href={exp.liveDemo} target="_blank" rel="noreferrer" className="text-xs flex items-center gap-1 text-[#00b8b8] hover:text-[#008080] transition-colors">
                                                    <i className="ri-external-link-line"></i> Live Demo
                                                </a>
                                            )}
                                        </div>
                                    )}

                                    {exp.projectName && (
                                        <div className="mb-1 text-sm font-semibold text-black">
                                            Project: <span className="font-normal text-zinc-600">{exp.projectName}</span>
                                        </div>
                                    )}

                                    {exp.techStack && (
                                        <div className="mb-4 text-xs font-mono text-[#008080]">
                                            <span className="text-zinc-400">Tech:</span> {exp.techStack}
                                        </div>
                                    )}

                                    <ul className="space-y-2 mt-4">
                                        {exp.bullets.map((bullet, i) => (
                                            <li key={i} className="text-sm flex gap-3 text-zinc-600 leading-relaxed">
                                                <span className="text-[#00b8b8] mt-1 flex-shrink-0">•</span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Skills */}
                <section>
                    <h2 className="text-xl font-bold text-black mb-6 border-b border-[#00b8b8]/20 pb-2 flex items-center gap-2">
                        <i className="ri-tools-line text-[#00b8b8]"></i> Skills
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {skills.map((skill, idx) => (
                            <div key={idx} className="bg-white border border-black/5 p-4 rounded-xl hover:border-[#00b8b8]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all">
                                <h3 className="text-sm font-semibold text-black mb-3 uppercase tracking-wider">{skill.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skill.list.split(',').map((s, i) => (
                                        <span key={i} className="px-3 py-1 bg-[#00b8b8]/10 text-[#008080] text-xs rounded-full border border-[#00b8b8]/20">
                                            {s.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects */}
                <section>
                    <h2 className="text-xl font-bold text-black mb-6 border-b border-[#00b8b8]/20 pb-2 flex items-center gap-2">
                        <i className="ri-code-s-slash-line text-[#00b8b8]"></i> Projects
                    </h2>
                    <div className="space-y-6">
                        {projects.map((project, idx) => (
                            <div key={idx} className="bg-white border border-black/5 p-5 rounded-2xl hover:border-[#00b8b8]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                                    <h3 className="text-lg font-semibold text-black mb-3 sm:mb-0">{project.name}</h3>
                                    <div className="flex gap-3">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noreferrer" className="text-xs px-3 py-1.5 bg-black/5 hover:bg-black/10 rounded-lg text-zinc-600 hover:text-black transition-colors flex items-center gap-1">
                                                <i className="ri-github-fill"></i> GitHub
                                            </a>
                                        )}
                                        {project.liveDemo && (
                                            <a href={project.liveDemo} target="_blank" rel="noreferrer" className="text-xs px-3 py-1.5 bg-[#008080] hover:bg-[#006666] rounded-lg text-white transition-colors flex items-center gap-1 shadow-[0_4px_14px_rgba(0,128,128,0.3)] hover:shadow-[0_6px_20px_rgba(0,128,128,0.5)]">
                                                <i className="ri-external-link-line"></i> Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {project.techStack && (
                                    <div className="mb-4 text-xs font-mono text-[#008080]">
                                        <span className="text-zinc-400">Tech:</span> {project.techStack}
                                    </div>
                                )}

                                <ul className="space-y-2">
                                    {project.bullets.map((bullet, i) => (
                                        <li key={i} className="text-sm flex gap-3 text-zinc-600 leading-relaxed">
                                            <span className="text-[#00b8b8] mt-1 flex-shrink-0">•</span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Floating Download Button */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
                <PDFDownloadLink
                    document={<MyDocument />}
                    fileName="Ayushi_Tiwari_Resume.pdf"
                    className="group flex items-center justify-center w-full px-6 py-4 text-sm font-semibold text-white transition-all duration-300 bg-[#008080] rounded-2xl hover:bg-[#006666] shadow-[0_8px_30px_rgba(0,128,128,0.4)] hover:shadow-[0_8px_40px_rgba(0,128,128,0.6)] backdrop-blur-md"
                >
                    {({ loading }) => (
                        <>
                            <span className="mr-2">{loading ? "Generating PDF..." : "Download ATS Resume PDF"}</span>
                            {!loading && <i className="ri-download-2-line text-lg group-hover:translate-y-1 transition-transform"></i>}
                            {loading && <i className="ri-loader-4-line text-lg animate-spin"></i>}
                        </>
                    )}
                </PDFDownloadLink>
            </div>
        </div>
    );
};

const Resume = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    if (isMobile) {
        return <MobileResume />;
    }

    return (
        <div className="w-full h-screen bg-[#fafafa]">
            <PDFViewer className="w-full h-full border-none">
                <MyDocument />
            </PDFViewer>
        </div>
    );
};

export default Resume;