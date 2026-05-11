import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        padding: "0 5%",
        paddingTop: "80px",
        gap: "4rem",
        position: "relative",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: "20%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Left — Text */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <p className="fade-up" style={{ fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.2rem", display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <span style={{ display: "inline-block", width: "32px", height: "1px", background: "var(--gold)" }} />
          Available for global opportunities
        </p>

        <h1
          className="fade-up delay-1"
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "clamp(3rem, 5.5vw, 5.2rem)",
            fontWeight: 400,
            lineHeight: 1.08,
            color: "var(--cream)",
            marginBottom: "1.5rem",
          }}
        >
          Rahul
          <br />
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Kumar</em>
        </h1>

        <p
          className="fade-up delay-2"
          style={{
            color: "var(--muted)",
            fontSize: "1rem",
            maxWidth: "440px",
            marginBottom: "2.5rem",
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          Senior Full Stack Developer crafting scalable enterprise applications.
          8+ years building with React.js, Next.js, NestJS, and GraphQL.
        </p>

        <div className="fade-up delay-3" style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-ghost">
            Let&apos;s talk →
          </a>
        </div>
      </div>

      {/* Right — Visual */}
      <div
        className="fade-up delay-2 hidden md:flex"
        style={{
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        {/* Image frame */}
        <div
          style={{
            width: "380px",
            height: "460px",
            border: "1px solid var(--border)",
            borderRadius: "4px",
            overflow: "hidden",
            position: "relative",
            background: "var(--navy-3)",
          }}
        >
          <Image
            src="/profile.jpg"
            alt="Rahul Kumar"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center top",
              filter: "grayscale(20%) contrast(1.05)",
              opacity: 0.88,
            }}
            priority
          />
          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, transparent 50%, rgba(10,15,30,0.7) 100%)",
            }}
          />
        </div>

        {/* Badge — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: "-1.5rem",
            left: "-2rem",
            background: "var(--navy-2)",
            border: "1px solid var(--border)",
            padding: "1rem 1.4rem",
            borderRadius: "4px",
            fontSize: "0.75rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "2.2rem",
              color: "var(--gold)",
              lineHeight: 1,
              display: "block",
              fontWeight: 400,
            }}
          >
            8+
          </span>
          <span style={{ color: "var(--muted)", letterSpacing: "0.06em", marginTop: "4px", display: "block" }}>
            Years of Experience
          </span>
        </div>

        {/* Badge — top right */}
        <div
          style={{
            position: "absolute",
            top: "-1.5rem",
            right: "-2rem",
            background: "var(--gold)",
            color: "var(--navy)",
            padding: "0.7rem 1rem",
            borderRadius: "2px",
            fontSize: "0.7rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          Currently @ EY
        </div>
      </div>
    </section>
  );
}
