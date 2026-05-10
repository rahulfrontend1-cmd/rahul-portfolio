export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2.5rem 5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-serif), Georgia, serif",
          fontSize: "1rem",
          color: "var(--gold)",
        }}
      >
        Rahul Kumar
      </span>

      <span
        style={{
          fontSize: "0.75rem",
          color: "var(--muted)",
          letterSpacing: "0.06em",
        }}
      >
        © {new Date().getFullYear()} All rights reserved.
      </span>

      <span
        style={{
          fontSize: "0.72rem",
          color: "var(--muted)",
          fontFamily: "var(--font-mono), monospace",
        }}
      >
        Next.js · TypeScript · Tailwind
      </span>
    </footer>
  );
}
