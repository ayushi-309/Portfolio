import {
  Page, Text, View, Document, StyleSheet, Link,
} from "@react-pdf/renderer";
import { resumeData } from "../../data/resumeData.js";

const DARK_NAVY = "#1e293b";
const LINK_BLUE = "#2563eb";
const SLATE_MUTED = "#475569";
const SLATE_BODY = "#334155";

const s = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    paddingTop: 18,
    paddingBottom: 18,
    paddingHorizontal: 22,
    fontFamily: "Helvetica",
    color: DARK_NAVY,
  },

  /* ── Header ── */
  header: {
    alignItems: "center",
    marginBottom: 5,
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: DARK_NAVY,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 3,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    marginBottom: 1.5,
  },
  link: {
    fontSize: 8.5,
    fontFamily: "Helvetica",
    color: LINK_BLUE,
    textDecoration: "none",
  },
  pipe: {
    fontSize: 8.5,
    fontFamily: "Helvetica",
    color: SLATE_MUTED,
  },

  /* ── Section Title ── */
  section: {
    marginTop: 4,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    color: DARK_NAVY,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    borderBottomWidth: 1,
    borderBottomColor: DARK_NAVY,
    paddingBottom: 1,
    marginBottom: 4,
  },

  /* ── Rows ── */
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  itemTitle: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: DARK_NAVY,
  },
  itemSub: {
    fontSize: 9,
    fontFamily: "Helvetica-Oblique",
    color: DARK_NAVY,
  },
  itemMeta: {
    fontSize: 8.5,
    fontFamily: "Helvetica",
    color: SLATE_MUTED,
    textAlign: "right",
  },

  /* ── Coursework / Tech / Details ── */
  courseworkLine: {
    marginTop: 1.5,
    fontSize: 8,
    lineHeight: 1.2,
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
    marginTop: 1,
    marginBottom: 1,
  },
  projectLabelLine: {
    fontSize: 8.5,
    marginTop: 1,
  },
  techUsedLine: {
    fontSize: 8,
    fontFamily: "Helvetica-Oblique",
    color: SLATE_MUTED,
    marginTop: 1,
    marginBottom: 1,
  },

  /* ── Bullets ── */
  bulletRow: {
    flexDirection: "row",
    paddingLeft: 6,
    marginTop: 1,
  },
  bulletDot: {
    fontSize: 8.5,
    fontFamily: "Helvetica",
    color: SLATE_BODY,
    marginRight: 3,
  },
  bulletContent: {
    fontSize: 8.5,
    fontFamily: "Helvetica",
    color: SLATE_BODY,
    flex: 1,
    lineHeight: 1.2,
  },

  /* ── Skills Grid ── */
  skillsContainer: {
    marginTop: 1,
  },
  skillRow: {
    flexDirection: "row",
    marginBottom: 1.5,
    alignItems: "flex-start",
  },
  skillCategory: {
    width: 78,
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: DARK_NAVY,
  },
  skillList: {
    flex: 1,
    fontSize: 9,
    fontFamily: "Helvetica",
    color: SLATE_BODY,
    lineHeight: 1.2,
  },

  /* ── Projects ── */
  projectItem: {
    marginBottom: 3.5,
  },

  /* ── Certifications ── */
  certItem: {
    marginBottom: 2.5,
  },
  certKeywordsLine: {
    fontSize: 8,
    fontFamily: "Helvetica-Oblique",
    color: SLATE_MUTED,
    marginTop: 0.5,
    paddingLeft: 6,
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
            <View style={[s.rowBetween, { marginTop: 1 }]}>
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
            <View style={[s.rowBetween, { marginTop: 1 }]}>
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
        {projects && projects.length > 0 && (
          <View style={s.section}>
            <Text style={s.sectionTitle}>PROJECTS</Text>
            {projects.map((proj, idx) => (
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
        {certifications && certifications.length > 0 && (
          <View style={s.section}>
            <Text style={s.sectionTitle}>CERTIFICATIONS</Text>
            {certifications.map((c, idx) => (
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
