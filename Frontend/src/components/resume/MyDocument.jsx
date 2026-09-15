import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Link,
} from "@react-pdf/renderer";
import { resumeData } from "../../data/resumeData.js";

const PRIMARY_COLOR = "#1e293b"; // Slate-800
const SECONDARY_COLOR = "#475569"; // Slate-600
const ACCENT_COLOR = "#2563eb"; // Blue-600

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: "#ffffff",
        padding: 24,
        fontFamily: "Helvetica",
    },
    headerContainer: {
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 12,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        color: PRIMARY_COLOR,
        marginBottom: 4,
        textTransform: "uppercase",
        letterSpacing: 1,
    },
    contactText: {
        fontSize: 9,
        color: SECONDARY_COLOR,
        textAlign: "center",
        marginBottom: 3,
    },
    link: {
        color: ACCENT_COLOR,
        textDecoration: "none",
    },
    section: {
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: "bold",
        color: PRIMARY_COLOR,
        borderBottomWidth: 1.2,
        borderBottomColor: PRIMARY_COLOR,
        paddingBottom: 2,
        marginBottom: 6,
    },
    // Education
    educationItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 2,
    },
    schoolName: {
        fontSize: 11,
        fontWeight: "bold",
        color: PRIMARY_COLOR,
    },
    degree: {
        fontSize: 10,
        color: SECONDARY_COLOR,
        fontStyle: "italic",
        marginTop: 1,
    },
    dateLocation: {
        fontSize: 9,
        color: SECONDARY_COLOR,
        textAlign: "right",
    },
    coursework: {
        fontSize: 9,
        color: SECONDARY_COLOR,
        marginTop: 2,
        lineHeight: 1.3,
    },
    boldText: {
        fontWeight: "bold",
        color: PRIMARY_COLOR,
    },

    // Skills
    skillsContainer: {
        flexDirection: "column",
        gap: 3,
    },
    skillRow: {
        flexDirection: "row",
        alignItems: "flex-start",
    },
    skillCategory: {
        width: "20%",
        fontSize: 10,
        fontWeight: "bold",
        color: PRIMARY_COLOR,
    },
    skillList: {
        width: "80%",
        fontSize: 10,
        color: SECONDARY_COLOR,
        lineHeight: 1.3,
    },

    // Projects
    projectItem: {
        marginBottom: 8,
    },
    projectHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: 2,
    },
    projectName: {
        fontSize: 11,
        fontWeight: "bold",
        color: PRIMARY_COLOR,
    },
    projectLinks: {
        fontSize: 9,
        flexDirection: "row",
        gap: 8,
    },
    techStack: {
        fontSize: 9,
        color: SECONDARY_COLOR,
        fontStyle: "italic",
        marginBottom: 3,
    },
    bulletPoint: {
        marginBottom: 1,
        paddingLeft: 8,
    },
    bulletText: {
        fontSize: 9,
        color: SECONDARY_COLOR,
        lineHeight: 1.3,
    }
});

const Bullet = ({ children }) => (
    <View style={styles.bulletPoint}>
        <Text style={styles.bulletText}>• {children}</Text>
    </View>
);

const MyDocument = () => {
    const { personalInfo, education, experience, skills, projects } = resumeData;

    return (
        <Document>
            <Page size="A4" style={styles.page}>

                {/* HEADER */}
                <View style={styles.headerContainer}>
                    <Text style={styles.name}>{personalInfo.name}</Text>
                    <Text style={styles.contactText}>
                        <Link style={styles.link} href={`mailto:${personalInfo.email}`}>{personalInfo.email}</Link>
                        {" | "}
                        <Link style={styles.link} href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}>{personalInfo.phone}</Link>
                        {" | "}
                        <Link style={styles.link} href={personalInfo.portfolio}>Portfolio</Link>
                    </Text>
                    <Text style={styles.contactText}>
                        <Link style={styles.link} href={personalInfo.linkedin}>LinkedIn</Link>
                        {" | "}
                        <Link style={styles.link} href={personalInfo.github}>GitHub</Link>
                    </Text>
                </View>

                {/* EDUCATION */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>EDUCATION</Text>
                    {education.map((edu, index) => (
                        <View key={index} style={{ marginBottom: index !== education.length - 1 ? 10 : 0 }}>
                            <View style={styles.educationItem}>
                                <View>
                                    <Text style={styles.schoolName}>{edu.schoolName}</Text>
                                    <Text style={styles.degree}>{edu.degree}</Text>
                                </View>
                                <View>
                                    <Text style={styles.dateLocation}>{edu.location}</Text>
                                    <Text style={styles.dateLocation}>{edu.date}</Text>
                                </View>
                            </View>
                            {edu.coursework && (
                                <Text style={styles.coursework}>
                                    <Text style={styles.boldText}>Relevant Coursework: </Text>
                                    {edu.coursework}
                                </Text>
                            )}
                        </View>
                    ))}
                </View>

                {/* EXPERIENCE */}
                {experience && experience.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>EXPERIENCE</Text>
                        {experience.map((exp, index) => (
                            <View key={index} style={styles.projectItem}>
                                <View style={styles.educationItem}>
                                    <View>
                                        <Text style={styles.schoolName}>{exp.company}</Text>
                                        <Text style={styles.degree}>{exp.role}</Text>
                                        {(exp.github || exp.liveDemo) && (
                                            <View style={[styles.projectLinks, { marginTop: 4 }]}>
                                                {exp.github && (
                                                    <>
                                                        <Link style={styles.link} href={exp.github}>GitHub</Link>
                                                        {exp.liveDemo && <Text style={{ color: SECONDARY_COLOR }}> | </Text>}
                                                    </>
                                                )}
                                                {exp.liveDemo && (
                                                    <Link style={styles.link} href={exp.liveDemo}>Live Demo</Link>
                                                )}
                                            </View>
                                        )}
                                    </View>
                                    <View>
                                        <Text style={styles.dateLocation}>{exp.location}</Text>
                                        <Text style={styles.dateLocation}>{exp.date}</Text>
                                    </View>
                                </View>
                                {exp.projectName && (
                                    <Text style={[styles.techStack, { color: PRIMARY_COLOR, fontWeight: "bold", fontStyle: "normal", marginTop: 2, marginBottom: 1 }]}>
                                        Project: <Text style={{ fontWeight: "normal", color: SECONDARY_COLOR }}>{exp.projectName}</Text>
                                    </Text>
                                )}
                                {exp.techStack && (
                                    <Text style={styles.techStack}>Technologies Used: {exp.techStack}</Text>
                                )}
                                {exp.bullets.map((bullet, idx) => (
                                    <Bullet key={idx}>{bullet}</Bullet>
                                ))}
                            </View>
                        ))}
                    </View>
                )}

                {/* SKILLS */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>SKILLS</Text>
                    <View style={styles.skillsContainer}>
                        {skills.map((skill, index) => (
                            <View key={index} style={styles.skillRow}>
                                <Text style={styles.skillCategory}>{skill.category}</Text>
                                <Text style={styles.skillList}>{skill.list}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* PROJECTS */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>PROJECTS</Text>
                    {projects.map((project, index) => (
                        <View key={index} style={styles.projectItem}>
                            <View style={styles.projectHeader}>
                                <Text style={styles.projectName}>{project.name}</Text>
                                <View style={styles.projectLinks}>
                                    {project.github && (
                                        <>
                                            <Link style={styles.link} href={project.github}>GitHub</Link>
                                            {project.liveDemo && <Text style={{ color: SECONDARY_COLOR }}> | </Text>}
                                        </>
                                    )}
                                    {project.liveDemo && (
                                        <Link style={styles.link} href={project.liveDemo}>Live Demo</Link>
                                    )}
                                </View>
                            </View>
                            {project.techStack && (
                                <Text style={styles.techStack}>Technologies Used: {project.techStack}</Text>
                            )}
                            {project.bullets.map((bullet, idx) => (
                                <Bullet key={idx}>{bullet}</Bullet>
                            ))}
                        </View>
                    ))}
                </View>
            </Page>
        </Document>
    );
};

export default MyDocument;