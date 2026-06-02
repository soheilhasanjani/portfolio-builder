import { Document, Page, Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import type { Portfolio, Experience } from "@/app/data/types";
import { ContactType } from "@/app/data/types";
import {
  collectStacksFromExperience,
  getStack,
  groupStacksByCategory,
} from "@/lib/stacks";
import { deriveFeaturedProjects } from "@/lib/projects";
import { sortExperienceByTime } from "@/lib/sort";
import { formatPeriod } from "@/lib/format";

const COLORS = {
  text: "#1a1a1a",
  muted: "#555555",
  accent: "#1d4ed8",
  accentSoft: "#3b82f6",
  rule: "#cccccc",
};

// A4 width = 595.28pt. Use a tall custom page so the CV renders as one
// continuous page instead of paginating across multiple A4 sheets.
const PAGE_SIZE: [number, number] = [595.28, 2700];

const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 36,
    paddingHorizontal: 40,
    fontFamily: "Helvetica",
    fontSize: 9.5,
    color: COLORS.text,
    lineHeight: 1.4,
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    marginBottom: 8,
  },
  headline: {
    fontSize: 11.5,
    color: COLORS.accent,
    fontFamily: "Helvetica-Bold",
    marginBottom: 8,
  },
  contactLine: {
    fontSize: 9,
    color: COLORS.muted,
    marginBottom: 10,
  },
  contactLink: {
    color: COLORS.accentSoft,
    textDecoration: "none",
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1.2,
    color: COLORS.accent,
    marginTop: 12,
    marginBottom: 4,
    paddingBottom: 2,
    borderBottomWidth: 0.75,
    borderBottomColor: COLORS.rule,
    textTransform: "uppercase",
  },
  summary: {
    marginBottom: 2,
  },
  skillRow: {
    flexDirection: "row",
    marginBottom: 2,
  },
  skillLabel: {
    fontFamily: "Helvetica-Bold",
    width: 78,
  },
  skillItems: {
    flex: 1,
  },
  expHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
  },
  expCompany: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10.5,
    color: COLORS.accent,
  },
  expPeriod: {
    fontSize: 9,
    color: COLORS.muted,
  },
  expRole: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Oblique",
    color: COLORS.muted,
    marginBottom: 2,
  },
  expDescription: {
    color: COLORS.muted,
    marginBottom: 3,
  },
  bullet: {
    flexDirection: "row",
    marginBottom: 1.5,
  },
  bulletDot: {
    width: 10,
    textAlign: "center",
  },
  bulletText: {
    flex: 1,
  },
  projectBlock: {
    marginBottom: 5,
  },
  projectName: {
    fontFamily: "Helvetica-Bold",
    color: COLORS.accent,
  },
  projectMeta: {
    fontSize: 8.5,
    color: COLORS.muted,
    marginBottom: 1,
  },
  industriesLine: {
    color: COLORS.muted,
  },
});

function ContactLine({ portfolio }: { portfolio: Portfolio }) {
  const { profile } = portfolio;
  const parts: { text: string; href?: string }[] = [];

  parts.push({ text: profile.location });

  for (const c of profile.contacts) {
    if (c.type === ContactType.Email) parts.push({ text: c.value, href: c.href });
    else if (c.type === ContactType.Phone) parts.push({ text: c.value, href: c.href });
    else if (c.type === ContactType.LinkedIn) parts.push({ text: c.value, href: c.href });
    else if (c.type === ContactType.GitHub) parts.push({ text: c.value, href: c.href });
  }

  if (profile.website) parts.push({ text: profile.website, href: profile.website });

  return (
    <Text style={styles.contactLine}>
      {parts.map((p, i) => (
        <Text key={i}>
          {i > 0 ? "  •  " : ""}
          {p.href ? (
            <Link src={p.href} style={styles.contactLink}>
              {p.text}
            </Link>
          ) : (
            p.text
          )}
        </Text>
      ))}
    </Text>
  );
}

function Skills({ portfolio }: { portfolio: Portfolio }) {
  const codes = collectStacksFromExperience(portfolio.experience);
  const groups = groupStacksByCategory(codes);
  if (groups.length === 0) return null;

  return (
    <View>
      <Text style={styles.sectionTitle}>Technical Skills</Text>
      {groups.map((g) => (
        <View key={g.category} style={styles.skillRow}>
          <Text style={styles.skillLabel}>{g.label}</Text>
          <Text style={styles.skillItems}>
            {g.codes.map((c) => titleCase(getStack(c).label)).join(", ")}
          </Text>
        </View>
      ))}
    </View>
  );
}

function titleCase(label: string): string {
  return label
    .toLowerCase()
    .split(/(\s+|-|\.)/)
    .map((part) => {
      if (/^\s+$/.test(part) || part === "-" || part === ".") return part;
      if (part.length === 0) return part;
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join("")
    .replace(/Css/g, "CSS")
    .replace(/Html5/g, "HTML5")
    .replace(/Pwa/g, "PWA")
    .replace(/Jwt/g, "JWT")
    .replace(/Aws/g, "AWS")
    .replace(/Ui/g, "UI")
    .replace(/Sql/g, "SQL");
}

function Experiences({ experience }: { experience: Experience[] }) {
  const sorted = sortExperienceByTime(experience);

  return (
    <View>
      <Text style={styles.sectionTitle}>Professional Experience</Text>
      {sorted.map((exp, i) => (
        <View key={i} wrap={false}>
          <View style={styles.expHeaderRow}>
            <Text style={styles.expCompany}>
              {exp.title}
              {exp.location ? ` — ${exp.location.city}, ${exp.location.country}` : ""}
            </Text>
            <Text style={styles.expPeriod}>{formatPeriod(exp.period)}</Text>
          </View>
          {exp.role && <Text style={styles.expRole}>{exp.role}</Text>}
          {exp.description && (
            <Text style={styles.expDescription}>{exp.description}</Text>
          )}
          {exp.responsibilities?.map((r, j) => (
            <View key={j} style={styles.bullet}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.bulletText}>{r}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

function FeaturedProjects({ experience }: { experience: Experience[] }) {
  const featured = deriveFeaturedProjects(experience, 4);
  if (featured.length === 0) return null;

  return (
    <View>
      <Text style={styles.sectionTitle}>Featured Projects</Text>
      {featured.map((p, i) => (
        <View key={i} style={styles.projectBlock} wrap={false}>
          <Text style={styles.projectName}>{p.name}</Text>
          <Text style={styles.projectMeta}>
            {p.tech_stack
              .map((code) => titleCase(getStack(code).label))
              .join(", ")}
          </Text>
          <Text>{p.description}</Text>
        </View>
      ))}
    </View>
  );
}

function Education({ portfolio }: { portfolio: Portfolio }) {
  if (portfolio.education.length === 0) return null;

  return (
    <View>
      <Text style={styles.sectionTitle}>Education</Text>
      {portfolio.education.map((e, i) => (
        <View key={i} wrap={false}>
          <View style={styles.expHeaderRow}>
            <Text style={styles.expCompany}>{e.school}</Text>
            <Text style={styles.expPeriod}>{formatPeriod(e.period)}</Text>
          </View>
          {(e.degree || e.field_of_study) && (
            <Text style={styles.expRole}>
              {[e.degree, e.field_of_study].filter(Boolean).join(", ")}
            </Text>
          )}
        </View>
      ))}
    </View>
  );
}

function ImpactHighlights({ portfolio }: { portfolio: Portfolio }) {
  const items = portfolio.impact_highlights;
  if (!items || items.length === 0) return null;
  return (
    <View>
      <Text style={styles.sectionTitle}>Impact Highlights</Text>
      {items.map((h, i) => (
        <View key={i} style={styles.projectBlock} wrap={false}>
          <Text style={styles.projectName}>{h.title}</Text>
          <Text>{h.description}</Text>
        </View>
      ))}
    </View>
  );
}

function AdditionalInformation({ portfolio }: { portfolio: Portfolio }) {
  const items = portfolio.additional_information;
  if (!items || items.length === 0) return null;
  return (
    <View>
      <Text style={styles.sectionTitle}>Additional Information</Text>
      {items.map((item, i) => (
        <View key={i} style={styles.bullet}>
          <Text style={[styles.bulletText, { fontFamily: "Helvetica-Bold" }]}>
            {item.label}:{" "}
            <Text style={{ fontFamily: "Helvetica" }}>{item.value}</Text>
          </Text>
        </View>
      ))}
    </View>
  );
}

export function CVDocument({ portfolio }: { portfolio: Portfolio }) {
  return (
    <Document
      title={`${portfolio.profile.first_name} ${portfolio.profile.last_name} — CV`}
      author={`${portfolio.profile.first_name} ${portfolio.profile.last_name}`}
    >
      <Page size={PAGE_SIZE} style={styles.page}>
        <Text style={styles.name}>
          {portfolio.profile.first_name} {portfolio.profile.last_name}
        </Text>
        <Text style={styles.headline}>{portfolio.profile.headline}</Text>
        <ContactLine portfolio={portfolio} />

        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.summary}>{portfolio.about.summary}</Text>

        <Skills portfolio={portfolio} />

        <Experiences experience={portfolio.experience} />

        <FeaturedProjects experience={portfolio.experience} />

        <ImpactHighlights portfolio={portfolio} />

        <Education portfolio={portfolio} />

        <AdditionalInformation portfolio={portfolio} />
      </Page>
    </Document>
  );
}
