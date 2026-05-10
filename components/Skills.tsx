const skills = [
  { icon: "⚛️", name: "React.js", level: "Expert", pct: 95 },
  { icon: "▲", name: "Next.js", level: "Expert", pct: 92 },
  { icon: "🔷", name: "TypeScript", level: "Expert", pct: 90 },
  { icon: "◉", name: "GraphQL", level: "Expert", pct: 88 },
  { icon: "🟢", name: "Node.js", level: "Advanced", pct: 85 },
  { icon: "🐈", name: "NestJS", level: "Advanced", pct: 83 },
  { icon: "🏪", name: "Redux", level: "Advanced", pct: 85 },
  { icon: "🎨", name: "Tailwind CSS", level: "Advanced", pct: 88 },
  { icon: "🔁", name: "REST APIs", level: "Expert", pct: 93 },
  { icon: "🏗️", name: "System Design", level: "Advanced", pct: 80 },
  { icon: "📦", name: "JavaScript", level: "Expert", pct: 95 },
  { icon: "🏛️", name: "Architecture", level: "Advanced", pct: 78 },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "6rem 5%", position: "relative" }}>
      <p className="section-label">Expertise</p>
      <h2 className="section-title">Technical skills</h2>
      <div className="divider" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1px",
          background: "var(--border)",
        }}
        className="skills-grid"
      >
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <span style={{ fontSize: "1.5rem", marginBottom: "0.8rem", display: "block" }}>
              {skill.icon}
            </span>
            <p style={{ fontSize: "0.9rem", fontWeight: 400, color: "var(--cream)", marginBottom: "0.3rem" }}>
              {skill.name}
            </p>
            <p style={{ fontSize: "0.7rem", color: "var(--gold-dim)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {skill.level}
            </p>
            <div
              style={{
                height: "2px",
                background: "var(--navy-4)",
                marginTop: "0.8rem",
                borderRadius: "1px",
                overflow: "hidden",
              }}
            >
              <div
                className="skill-bar-fill"
                style={{
                  height: "100%",
                  background: "var(--gold)",
                  borderRadius: "1px",
                  width: `${skill.pct}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
