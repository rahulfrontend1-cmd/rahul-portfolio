const services = [
  {
    num: "01",
    title: "Full Stack Web Development",
    desc: "End-to-end application development from database to UI, with clean architecture and production-ready code.",
  },
  {
    num: "02",
    title: "Enterprise Application Engineering",
    desc: "Scalable, maintainable systems built for large teams and complex domains, following industry best practices.",
  },
  {
    num: "03",
    title: "Startup MVP Development",
    desc: "Fast, focused product development for early-stage startups looking to validate ideas and ship quickly.",
  },
  {
    num: "04",
    title: "Technical Consulting",
    desc: "Architecture reviews, tech stack decisions, code audits, and engineering strategy for growing teams.",
  },
  {
    num: "05",
    title: "Admin Dashboard Development",
    desc: "Data-rich dashboards and internal tools built for performance, usability, and complex data workflows.",
  },
  {
    num: "06",
    title: "Performance Optimization",
    desc: "Auditing and improving existing frontend and backend systems for speed, scalability, and reliability.",
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "6rem 5%", position: "relative" }}>
      <p className="section-label">What I do</p>
      <h2 className="section-title">Services</h2>
      <div className="divider" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
        }}
        className="services-grid"
      >
        {services.map((s) => (
          <div key={s.num} className="service-card">
            <span
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontSize: "0.85rem",
                color: "var(--gold-dim)",
                fontStyle: "italic",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              {s.num}
            </span>
            <p
              style={{
                fontSize: "0.95rem",
                fontWeight: 500,
                color: "var(--cream)",
                marginBottom: "0.6rem",
                lineHeight: 1.4,
              }}
            >
              {s.title}
            </p>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                lineHeight: 1.7,
              }}
            >
              {s.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
