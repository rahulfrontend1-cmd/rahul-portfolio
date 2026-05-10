const experiences = [
  {
    period: "Dec 2022 — Present",
    current: true,
    role: "Senior Technical Consultant",
    company: "Ernst & Young (EY)",
    description:
      "Leading frontend architecture and full-stack development for enterprise clients. Delivering scalable web applications with React.js, Next.js, and GraphQL. Driving technical consulting engagements and code quality standards across teams.",
    tags: ["React.js", "Next.js", "GraphQL", "TypeScript", "NestJS"],
  },
  {
    period: "Apr 2021 — Dec 2022",
    current: false,
    role: "Lead Engineer",
    company: "HCL Technologies",
    description:
      "Led a team of engineers building high-performance web applications. Architected frontend systems and collaborated closely with product and design to ship customer-facing features at scale.",
    tags: ["React.js", "Node.js", "Redux", "REST APIs"],
  },
  {
    period: "Jan 2020 — Apr 2021",
    current: false,
    role: "Software Developer",
    company: "IIFL Wealth",
    description:
      "Built fintech web applications for wealth management. Developed responsive dashboards and data-heavy interfaces handling real-time financial data and complex user workflows.",
    tags: ["JavaScript", "React.js", "REST APIs", "Fintech"],
  },
  {
    period: "Mar 2018 — Dec 2019",
    current: false,
    role: "Software Developer",
    company: "CrewKarma Networks",
    description:
      "Developed full-stack features for a startup product. Shipped across both frontend and backend, contributing to core product architecture from early-stage through growth.",
    tags: ["JavaScript", "Node.js", "React.js"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ padding: "6rem 5%", background: "var(--navy-2)", position: "relative" }}
    >
      <p className="section-label">Career</p>
      <h2 className="section-title">Where I&apos;ve worked</h2>
      <div className="divider" />

      <div style={{ display: "flex", flexDirection: "column" }}>
        {experiences.map((exp, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "220px 1fr",
              gap: "3rem",
              padding: "2.5rem 0",
              borderBottom: "1px solid var(--border)",
              borderTop: i === 0 ? "1px solid var(--border)" : "none",
              alignItems: "start",
            }}
            className="exp-item"
          >
            {/* Period column */}
            <div>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "var(--muted)",
                  letterSpacing: "0.1em",
                  paddingTop: "4px",
                  fontFamily: "var(--font-mono), monospace",
                }}
              >
                {exp.period}
              </p>
              {exp.current && (
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.65rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    background: "rgba(201,168,76,0.1)",
                    border: "1px solid rgba(201,168,76,0.3)",
                    color: "var(--gold)",
                    padding: "2px 8px",
                    borderRadius: "2px",
                    marginTop: "0.5rem",
                  }}
                >
                  Current
                </span>
              )}
            </div>

            {/* Content column */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "1.35rem",
                  fontWeight: 400,
                  color: "var(--cream)",
                  marginBottom: "0.3rem",
                }}
              >
                {exp.role}
              </p>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--gold)",
                  letterSpacing: "0.08em",
                  marginBottom: "0.8rem",
                }}
              >
                {exp.company}
              </p>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "0.9rem",
                  lineHeight: 1.75,
                }}
              >
                {exp.description}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginTop: "1rem",
                }}
              >
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.68rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      border: "1px solid var(--border)",
                      color: "var(--cream-dim)",
                      padding: "3px 10px",
                      borderRadius: "2px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
