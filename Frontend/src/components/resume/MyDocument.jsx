import {
  Page, Text, View, Document, StyleSheet, Link,
} from "@react-pdf/renderer";
import { resumeData } from "../../data/resumeData.js";

const DARK_NAVY   = "#1e293b";
const LINK_BLUE   = "#2563eb";
const SLATE_MUTED = "#475569";
const SLATE_BODY  = "#334155";

const s = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    paddingTop: 22,
    paddingBottom: 22,
    paddingHorizontal: 26,
    fontFamily: "Helvetica",
    color: DARK_NAVY,
  },

  /* ── Header ── */
  header: {
    alignItems: "center",
    marginBottom: 8,
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: DARK_NAVY,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    marginBottom: 2,
  },
  link: {
    fontSize: 9,
    fontFamily: "Helvetica",
    color: LINK_BLUE,
    textDecoration: "none",
  },
  pipe: {
    fontSize: 9,
    fontFamily: "Helvetica",
    color: SLATE_MUTED,
  },

  /* ── Section Title ── */
  section: {
    marginTop: 6,
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: DARK_NAVY,
    textTransform: "uppercase",
    letterSpacing: 0.6,
    borderBottomWidth: 1.2,
    borderBottomColor: DARK_NAVY,
    paddingBottom: 2,
    marginBottom: 5,
  },

  /* ── Rows ── */
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  itemTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: DARK_NAVY,
  },
  itemSub: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Oblique",
    color: DARK_NAVY,
  },
  itemMeta: {
    fontSize: 9,
    fontFamily: "Helvetica",
    color: SLATE_MUTED,
    textAlign: "right",
  },

  /* ── Coursework / Tech / Details ── */
  courseworkLine: {
    marginTop: 2,
    fontSize: 8.5,
    lineHeight: 1.3,
  },
  boldLabel: {
    fontFamily: "Helvetica-Bold",
    color: DARK_NAVY,
  },
  regularText: {
    fontFamily: "Helvetica",
    color: SLATE_BODY,
  },

  /* ── Experience ── */
  expLinksRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 1.5,
    marginBottom: 1.5,
  },
  projectLabelLine: {
    fontSize: 9,
    marginTop: 1.5,
  },
  techUsedLine: {
    fontSize: 8.5,
    fontFamily: "Helvetica-Oblique",
    color: SLATE_MUTED,
    marginTop: 1.5,
    marginBottom: 2,
  },

  /* ── Bullets ── */
  bulletRow: {
    flexDirection: "row",
    paddingLeft: 8,
    marginTop: 1.5,
  },
  bulletDot: {
    fontSize: 9,
    fontFamily: "Helvetica",
    color: SLATE_BODY,
    marginRight: 4,
  },
  bulletContent: {
    fontSize: 8.5,
    fontFamily: "Helvetica",
    color: SLATE_BODY,
    flex: 1,
    lineHeight: 1.3,
  },

  /* ── Skills Grid ── */
  skillsContainer: {
    marginTop: 2,
  },
  skillRow: {
    flexDirection: "row",
    marginBottom: 2.5,
    alignItems: "flex-start",
  },
  skillCategory: {
    width: 82,
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: DARK_NAVY,
  },
  skillList: {
    flex: 1,
    fontSize: 9.5,
    fontFamily: "Helvetica",
    color: SLATE_BODY,
    lineHeight: 1.25,
  },

  /* ── Projects ── */
  projectItem: {
    marginBottom: 5,
  },

  /* ── Certifications ── */
  certItem: {
    marginBottom: 3.5,
  },
  certKeywordsLine: {
    fontSize: 8,
    fontFamily: "Helvetica-Oblique",
    color: SLATE_MUTED,
    marginTop: 1,
    paddingLeft: 8,
  },
});

const Bullet = ({ text }) => (
  <View style={s.bulletRow}>
    <Text style={s.bulletDot}>•</Text>
    <Text style={s.bulletContent}>{text}</Text>
  </View>
);

const GitHubLiveLinks = ({ github, liveDemo }) => (
  <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
    <Link style={s.link} href={github || "https://github.com/ayushi-309"}>GitHub</Link>
    <Text style={s.pipe}> | </Text>
    <Link style={s.link} href={liveDemo || "https://portfolio-seven-livid-w4rhaglerv.vercel.app/"}>Live Demo</Link>
  </View>
);

const MyDocument = () => {
  const { personalInfo, education, experience, skills, projects, certifications = [] } = resumeData;
  const edu = education && education[0] ? education[0] : null;
  const exp = experience && experience[0] ? experience[0] : null;

  // Curate top 4 high-impact projects for a clean, spacious, un-congested 1-page layout
  const featuredProjects = projects && projects.length > 4 ? projects.slice(0, 4) : projects;

  // Curate top 4 certifications for balanced visual breathing room
  const featuredCerts = certifications && certifications.length > 4 ? certifications.slice(0, 4) : certifications;

  return (
    <Document>
      <Page size="A4" style={s.page}>

        {/* ══ HEADER ══ */}
        <View style={s.header}>
          <Text style={s.name}>{personalInfo.name}</Text>
          <View style={s.contactRow}>
            <Link style={s.link} href={`mailto:${personalInfo.email}`}>{personalInfo.email}</Link>
            <Text style={s.pipe}> | </Text>
            <Link style={s.link} href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}>{personalInfo.phone}</Link>
            <Text style={s.pipe}> | </Text>
            <Link style={s.link} href={personalInfo.portfolio}>{personalInfo.portfolioDisplay}</Link>
          </View>
          <View style={s.contactRow}>
            <Link style={s.link} href={personalInfo.linkedin}>{personalInfo.linkedinDisplay}</Link>
            <Text style={s.pipe}> | </Text>
            <Link style={s.link} href={personalInfo.github}>{personalInfo.githubDisplay}</Link>
          </View>
        </View>

        {/* ══ EDUCATION ══ */}
        {edu && (
          <View style={s.section}>
            <Text style={s.sectionTitle}>EDUCATION</Text>
            <View style={s.rowBetween}>
              <Text style={s.itemTitle}>{edu.schoolName}</Text>
              <Text style={s.itemMeta}>{edu.location}</Text>
            </View>
            <View style={[s.rowBetween, { marginTop: 1.5 }]}>
              <Text style={s.itemSub}>{edu.degree}</Text>
              <Text style={s.itemMeta}>{edu.date}</Text>
            </View>
            {edu.coursework && (
              <Text style={s.courseworkLine}>
                <Text style={s.boldLabel}>Relevant Coursework: </Text>
                <Text style={s.regularText}>{edu.coursework}</Text>
              </Text>
            )}
          </View>
        )}

        {/* ══ EXPERIENCE ══ */}
        {exp && (
          <View style={s.section}>
            <Text style={s.sectionTitle}>EXPERIENCE</Text>
            <View style={s.rowBetween}>
              <Text style={s.itemTitle}>{exp.company}</Text>
              <Text style={s.itemMeta}>{exp.location}</Text>
            </View>
            <View style={[s.rowBetween, { marginTop: 1.5 }]}>
              <Text style={s.itemSub}>{exp.role}</Text>
              <Text style={s.itemMeta}>{exp.date}</Text>
            </View>
            <View style={s.expLinksRow}>
              <GitHubLiveLinks github={exp.github} liveDemo={exp.liveDemo} />
            </View>
            {exp.projectName && (
              <Text style={s.projectLabelLine}>
                <Text style={s.boldLabel}>Project: </Text>
                <Text style={s.regularText}>{exp.projectName}</Text>
              </Text>
            )}
            {exp.techStack && (
              <Text style={s.techUsedLine}>
                Technologies Used: {exp.techStack}
              </Text>
            )}
            {exp.bullets && exp.bullets.map((b, idx) => (
              <Bullet key={idx} text={b} />
            ))}
          </View>
        )}

        {/* ══ SKILLS ══ */}
        {skills && skills.length > 0 && (
          <View style={s.section}>
            <Text style={s.sectionTitle}>SKILLS</Text>
            <View style={s.skillsContainer}>
              {skills.map((sk, idx) => (
                <View key={idx} style={s.skillRow}>
                  <Text style={s.skillCategory}>{sk.category}</Text>
                  <Text style={s.skillList}>{sk.list}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* ══ PROJECTS ══ */}
        {featuredProjects && featuredProjects.length > 0 && (
          <View style={s.section}>
            <Text style={s.sectionTitle}>PROJECTS</Text>
            {featuredProjects.map((proj, idx) => (
              <View key={idx} style={s.projectItem} wrap={false}>
                <View style={s.rowBetween}>
                  <Text style={s.itemTitle}>{proj.name}</Text>
                  <GitHubLiveLinks github={proj.github} liveDemo={proj.liveDemo} />
                </View>
                {proj.techStack && (
                  <Text style={s.techUsedLine}>
                    Technologies Used: {proj.techStack}
                  </Text>
                )}
                {proj.bullets && proj.bullets.map((b, bIdx) => (
                  <Bullet key={bIdx} text={b} />
                ))}
              </View>
            ))}
          </View>
        )}

        {/* ══ CERTIFICATIONS ══ */}
        {featuredCerts && featuredCerts.length > 0 && (
          <View style={s.section}>
            <Text style={s.sectionTitle}>CERTIFICATIONS</Text>
            {featuredCerts.map((c, idx) => (
              <View key={idx} style={s.certItem} wrap={false}>
                <View style={s.rowBetween}>
                  <Text style={s.itemTitle}>{c.title}</Text>
                  <Text style={s.itemMeta}>{c.issuer}</Text>
                </View>
                {c.keywords && (
                  <Text style={s.certKeywordsLine}>
                    <Text style={s.boldLabel}>Key Skills: </Text>
                    {c.keywords}
                  </Text>
                )}
              </View>
            ))}
          </View>
        )}

      </Page>
    </Document>
  );
};

export default MyDocument;
