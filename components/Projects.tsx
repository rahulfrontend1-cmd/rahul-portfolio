const projects = [
  {
    num: "01",
    tag: "Travel Tech",
    title: "iTrip.pro",
    description:
      "A modern travel and trip management platform focused on scalable architecture, responsive UI, premium user experience, and high-performance frontend engineering.",
    stack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
    url: "https://itrip.pro",
    urlLabel: "Visit itrip.pro ↗",
  },
  {
    num: "02",
    tag: "HR Tech",
    title: "TalentXO",
    description:
      "An enterprise HR-tech and recruitment platform enabling companies, recruiters, and candidates to streamline hiring workflows, job discovery, and talent acquisition at scale.",
    stack: ["React.js", "Next.js", "GraphQL", "TypeScript", "Enterprise UI"],
    url: "https://talentxo.com",
    urlLabel: "Visit talentxo.com ↗",
  },
  {
    num: "03",
    tag: "Fintech / Wealth Tech",
    title: "Altiore — 360 One Wealth",
    description:
      "An enterprise wealth management platform for 360 One Wealth — aggregating, analysing, and advising on investment portfolios for HNI clients. Built as a high-performance React SPA with real-time data dashboards, complex financial workflows, and a PWA-ready architecture.",
    stack: ["React.js", "TypeScript", "REST APIs", "PWA", "Fintech"],
    url: "https://altiore.360.one",
    urlLabel: "Visit altiore.360.one ↗",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: "6rem 5%", background: "var(--navy-2)", position: "relative" }}
    >
      <p className="section-label">Portfolio</p>
      <h2 className="section-title">Featured projects</h2>
      <div className="divider" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5px",
          background: "var(--border)",
        }}
        className="projects-grid"
      >
        {projects.map((p) => (
          <div
            key={p.num}
            className="project-card"
          >
            {/* Ghost number */}
            <span
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "2rem",
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "4rem",
                color: "rgba(201,168,76,0.06)",
                fontWeight: 400,
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              {p.num}
            </span>

            <span
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1rem",
                display: "block",
              }}
            >
              {p.tag}
            </span>

            <h3
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "1.6rem",
                fontWeight: 400,
                color: "var(--cream)",
                marginBottom: "0.8rem",
                lineHeight: 1.3,
              }}
            >
              {p.title}
            </h3>

            <p
              style={{
                color: "var(--muted)",
                fontSize: "0.9rem",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
              }}
            >
              {p.description}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "1.5rem",
              }}
            >
              {p.stack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontSize: "0.68rem",
                    fontFamily: "var(--font-mono), monospace",
                    color: "var(--cream-dim)",
                    background: "rgba(255,255,255,0.04)",
                    padding: "3px 10px",
                    borderRadius: "2px",
                    border: "1px solid var(--border)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              {p.urlLabel}
            </a>
          </div>
        ))}
      </div>

    </section>
  );
}
