import {
  Page, Text, View, Document, StyleSheet, Link,
} from "@react-pdf/renderer";
import { resumeData } from "../../data/resumeData.js";

const NAVY  = "#1e2938";
const WHITE = "#ffffff";
const BLUE  = "#2563eb";
const BLACK = "#0f172a";
const DARK  = "#1e293b";
const MID   = "#334155";
const LIGHT = "#64748b";

const s = StyleSheet.create({
  page: {
    backgroundColor: WHITE,
    paddingBottom: 16,
    fontFamily: "Times-Roman",
    fontSize: 8.5,
    color: MID,
  },

  /* ══ HEADER ══ */
  header: {
    backgroundColor: NAVY,
    paddingTop: 12,
    paddingBottom: 10,
    paddingHorizontal: 28,
    marginBottom: 7,
  },
  name: {
    fontFamily: "Times-Bold",
    fontSize: 20,
    color: WHITE,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 3,
  },
  contactLink: {
    fontFamily: "Times-Roman",
    fontSize: 8,
    color: BLUE,
    textDecoration: "none",
  },
  pipe: { fontFamily: "Times-Roman", fontSize: 8, color: "#475569" },

  /* ══ BODY ══ */
  body: { paddingHorizontal: 28 },

  /* ── Section ── */
  section: { marginBottom: 5 },
  sectionTitle: {
    fontFamily: "Times-Bold",
    fontSize: 9.5,
    color: BLACK,
    textTransform: "uppercase",
    letterSpacing: 0.7,
    borderBottomWidth: 0.75,
    borderBottomColor: NAVY,
    paddingBottom: 1.5,
    marginBottom: 3,
  },

  /* ── Rows ── */
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  flex1: { flex: 1 },

  /* ── Education ── */
  schoolName: { fontFamily: "Times-Bold",   fontSize: 9,   color: BLACK },
  degree:     { fontFamily: "Times-Italic", fontSize: 8.5, color: MID   },
  meta:       { fontFamily: "Times-Roman",  fontSize: 8,   color: LIGHT, textAlign: "right" },
  grade:      { fontFamily: "Times-Bold",   fontSize: 8,   color: DARK  },
  coursework: { fontFamily: "Times-Italic", fontSize: 7.5, color: LIGHT, marginTop: 0.5 },
  cwLabel:    { fontFamily: "Times-BoldItalic", fontSize: 7.5, color: MID },

  /* ── Skills ── */
  skillLine:  { fontFamily: "Times-Roman", fontSize: 8.5, color: MID, marginBottom: 1.2, lineHeight: 1.3 },
  skillLabel: { fontFamily: "Times-Bold",  fontSize: 8.5, color: BLACK },

  /* ── Experience / Projects ── */
  itemTitle: { fontFamily: "Times-Bold",   fontSize: 9,   color: BLACK, flex: 1 },
  itemSub:   { fontFamily: "Times-Italic", fontSize: 8.5, color: MID   },
  itemDate:  { fontFamily: "Times-Roman",  fontSize: 8,   color: LIGHT, textAlign: "right" },
  techLine:  { fontFamily: "Times-Italic", fontSize: 7.5, color: LIGHT, marginBottom: 1, marginTop: 0.5 },
  techLabel: { fontFamily: "Times-BoldItalic", fontSize: 7.5, color: MID },
  linkSmall: { fontFamily: "Times-Roman",  fontSize: 8,   color: BLUE,  textDecoration: "none" },
  linkSep:   { fontFamily: "Times-Roman",  fontSize: 8,   color: LIGHT },

  /* ── Bullet ── */
  bulletWrap: { flexDirection: "row", paddingLeft: 6, marginBottom: 1 },
  bulletDot:  { fontFamily: "Times-Roman", fontSize: 8.5, color: NAVY, marginRight: 3 },
  bulletText: { fontFamily: "Times-Roman", fontSize: 8.5, color: MID, flex: 1, lineHeight: 1.25 },

  /* ── Cert ── */
  certLine:  { fontFamily: "Times-Roman", fontSize: 8.5, color: MID, marginBottom: 1.2, lineHeight: 1.25 },
  certTitle: { fontFamily: "Times-Bold",  fontSize: 8.5, color: BLACK },

  gap2: { marginBottom: 2 },
  gap3: { marginBottom: 3 },
});

/* ── Helpers ── */
const ST = ({ children }) => <Text style={s.sectionTitle}>{children}</Text>;

const Bullet = ({ text }) => (
  <View style={s.bulletWrap}>
    <Text style={s.bulletDot}>•</Text>
    <Text style={s.bulletText}>{text}</Text>
  </View>
);

const Links = ({ github, liveDemo }) => {
  if (!github && !liveDemo) return null;
  return (
    <View style={{ flexDirection: "row", gap: 3 }}>
      {github   && <Link style={s.linkSmall} href={github}>GitHub</Link>}
      {github && liveDemo && <Text style={s.linkSep}> | </Text>}
      {liveDemo && <Link style={s.linkSmall} href={liveDemo}>Live Demo</Link>}
    </View>
  );
};

/* ── Document ── */
const MyDocument = () => {
  const { personalInfo, education, experience, skills, projects, certifications = [] } = resumeData;

  return (
    <Document>
      <Page size="A4" style={s.page}>

        {/* ══ HEADER ══ */}
        <View style={s.header}>
          <Text style={s.name}>{personalInfo.name}</Text>
          <View style={s.contactRow}>
            <Link style={s.contactLink} href={`mailto:${personalInfo.email}`}>{personalInfo.email}</Link>
            <Text style={s.pipe}> | </Text>
            <Link style={s.contactLink} href={`tel:${personalInfo.phone.replace(/\s+/g,"")}`}>{personalInfo.phone}</Link>
            <Text style={s.pipe}> | </Text>
            <Link style={s.contactLink} href={personalInfo.portfolio}>{personalInfo.portfolioDisplay}</Link>
            <Text style={s.pipe}> | </Text>
            <Link style={s.contactLink} href={personalInfo.linkedin}>{personalInfo.linkedinDisplay}</Link>
            <Text style={s.pipe}> | </Text>
            <Link style={s.contactLink} href={personalInfo.github}>{personalInfo.githubDisplay}</Link>
          </View>
        </View>

        <View style={s.body}>

          {/* ══ EDUCATION ══ */}
          <View style={s.section}>
            <ST>Education</ST>
            {education.map((edu, i) => (
              <View key={i} style={i < education.length - 1 ? s.gap2 : {}} wrap={false}>
                <View style={s.row}>
                  <Text style={s.schoolName}>{edu.schoolName}</Text>
                  <Text style={s.meta}>{edu.location}</Text>
                </View>
                <View style={s.row}>
                  <Text style={s.degree}>{edu.degree}</Text>
                  <Text style={s.meta}>{edu.date}</Text>
                </View>
                <Text style={s.grade}>{edu.grade}</Text>
                {edu.coursework && i === 0 && (
                  <Text style={s.coursework}>
                    <Text style={s.cwLabel}>Relevant Coursework: </Text>{edu.coursework}
                  </Text>
                )}
              </View>
            ))}
          </View>

          {/* ══ EXPERIENCE ══ */}
          {experience.length > 0 && (
            <View style={s.section}>
              <ST>Experience</ST>
              {experience.map((exp, i) => (
                <View key={i} wrap={false}>
                  <View style={s.row}>
                    <Text style={s.itemTitle}>{exp.company}</Text>
                    <Text style={s.itemDate}>{exp.date}</Text>
                  </View>
                  <View style={s.row}>
                    <Text style={s.itemSub}>{exp.role}</Text>
                    <Links github={exp.github} liveDemo={exp.liveDemo} />
                  </View>
                  {exp.projectName && (
                    <Text style={s.techLine}><Text style={s.techLabel}>Project: </Text>{exp.projectName}</Text>
                  )}
                  {exp.techStack && (
                    <Text style={s.techLine}><Text style={s.techLabel}>Technologies Used: </Text>{exp.techStack}</Text>
                  )}
                  {exp.bullets.map((b, j) => <Bullet key={j} text={b} />)}
                </View>
              ))}
            </View>
          )}

          {/* ══ SKILLS ══ */}
          <View style={s.section} wrap={false}>
            <ST>Skills</ST>
            {skills.map((sk, i) => (
              <Text key={i} style={s.skillLine}>
                <Text style={s.skillLabel}>{sk.category}: </Text>{sk.list}
              </Text>
            ))}
          </View>

          {/* ══ PROJECTS ══ */}
          <View style={s.section}>
            <ST>Projects</ST>
            {projects.map((p, i) => (
              <View key={i} style={i < projects.length - 1 ? s.gap2 : {}} wrap={false}>
                <View style={s.row}>
                  <Text style={s.itemTitle}>{p.name}</Text>
                  <Links github={p.github} liveDemo={p.liveDemo} />
                </View>
                {p.techStack && (
                  <Text style={s.techLine}><Text style={s.techLabel}>Technologies Used: </Text>{p.techStack}</Text>
                )}
                {p.bullets.map((b, j) => <Bullet key={j} text={b} />)}
              </View>
            ))}
          </View>

          {/* ══ CERTIFICATIONS ══ */}
          {certifications.length > 0 && (
            <View style={s.section} wrap={false}>
              <ST>Certifications</ST>
              {certifications.map((c, i) => (
                <Text key={i} style={s.certLine}>
                  {"• "}<Text style={s.certTitle}>{c.title}</Text>
                  {c.issuer ? `  |  ${c.issuer}` : ""}
                </Text>
              ))}
            </View>
          )}

        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
