export default function About() {
  const stats = [
    { num: "8+", label: "Years Experience" },
    { num: "4", label: "Companies" },
    { num: "12+", label: "Tech Skills" },
    { num: "∞", label: "Cups of Coffee" },
  ];

  return (
    <section
      id="about"
      style={{ padding: "6rem 5%", position: "relative" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "start",
        }}
        className="about-grid"
      >
        {/* Left — text */}
        <div>
          <p className="section-label">About me</p>
          <h2 className="section-title">Engineering at enterprise scale</h2>
          <div className="divider" />
          <div
            style={{
              color: "var(--cream-dim)",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              fontWeight: 300,
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            <p>
              I&apos;m a Senior Full Stack Developer and Technical Consultant at
              EY with over 8 years of experience building production-grade
              applications across the full stack. My work sits at the
              intersection of frontend craft and backend architecture.
            </p>
            <p>
              I specialize in React.js, Next.js, NestJS, TypeScript, and
              GraphQL — building systems that are performant, maintainable, and
              designed to scale. I&apos;ve worked across fintech, HR-tech, and
              enterprise consulting.
            </p>
            <p>
              Currently based in Bengaluru, open to international opportunities
              across the USA, Canada, UK, Australia, and Germany.
            </p>
          </div>
        </div>

        {/* Right — stats grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5px",
            background: "var(--border)",
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                background: "var(--navy)",
                padding: "2rem 1.5rem",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "2.8rem",
                  color: "var(--gold)",
                  fontWeight: 400,
                  display: "block",
                  lineHeight: 1,
                }}
              >
                {s.num}
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginTop: "0.6rem",
                  display: "block",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
