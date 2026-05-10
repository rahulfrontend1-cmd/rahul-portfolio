"use client";

import { useState } from "react";

const EMAIL = "rahul.javascript1@gmail.com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Rahul,\n\nMy name is ${form.name} (${form.email}).\n\n${form.message}`
    );
    window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  const contactLinks = [
    {
      icon: "✉",
      label: "Email",
      value: EMAIL,
      href: `mailto:${EMAIL}`,
    },
    {
      icon: "in",
      label: "LinkedIn",
      value: "devmantrarahulkumar",
      href: "https://www.linkedin.com/in/devmantrarahulkumar/",
    },
    {
      icon: "gh",
      label: "GitHub",
      value: "rahulfrontend1-cmd",
      href: "https://github.com/rahulfrontend1-cmd",
    },
  ];

  return (
    <section
      id="contact"
      style={{ padding: "6rem 5%", background: "var(--navy-2)", position: "relative" }}
    >
      <p className="section-label">Get in touch</p>
      <h2 className="section-title">Let&apos;s build something</h2>
      <div className="divider" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "start",
        }}
        className="contact-grid"
      >
        {/* Left — info */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "1.5rem",
              fontWeight: 400,
              fontStyle: "italic",
              color: "var(--cream-dim)",
              lineHeight: 1.5,
              marginBottom: "2rem",
            }}
          >
            &ldquo;Open to full-stack roles, enterprise consulting, and
            international opportunities.&rdquo;
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.label !== "Email" ? "_blank" : undefined}
                rel={c.label !== "Email" ? "noopener noreferrer" : undefined}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  color: "var(--cream-dim)",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  padding: "1rem 1.2rem",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.45)";
                  e.currentTarget.style.color = "var(--gold)";
                  e.currentTarget.style.background = "rgba(201,168,76,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--cream-dim)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    background: "rgba(201,168,76,0.1)",
                    borderRadius: "2px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1rem",
                    flexShrink: 0,
                    fontWeight: 500,
                    color: "var(--gold)",
                  }}
                >
                  {c.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      marginBottom: "2px",
                    }}
                  >
                    {c.label}
                  </div>
                  <div>{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div>
          {submitted ? (
            <div
              style={{
                border: "1px solid rgba(201,168,76,0.3)",
                borderRadius: "4px",
                padding: "3rem 2rem",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "1.4rem",
                  color: "var(--gold)",
                  marginBottom: "0.8rem",
                }}
              >
                Message sent!
              </p>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
                Your email client should have opened. Looking forward to
                connecting.
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { label: "Name", key: "name", type: "text", placeholder: "Your name" },
                { label: "Email", key: "email", type: "email", placeholder: "your@email.com" },
              ].map((field) => (
                <div key={field.key} style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <label
                    style={{
                      fontSize: "0.72rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, [field.key]: e.target.value }))
                    }
                    style={{
                      background: "var(--navy)",
                      border: "1px solid var(--border)",
                      color: "var(--cream)",
                      padding: "0.8rem 1rem",
                      borderRadius: "2px",
                      fontFamily: "var(--font-sans), sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 300,
                      outline: "none",
                      transition: "border-color 0.2s",
                      width: "100%",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "var(--border)")
                    }
                  />
                </div>
              ))}

              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <label
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                  }}
                >
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  style={{
                    background: "var(--navy)",
                    border: "1px solid var(--border)",
                    color: "var(--cream)",
                    padding: "0.8rem 1rem",
                    borderRadius: "2px",
                    fontFamily: "var(--font-sans), sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 300,
                    outline: "none",
                    transition: "border-color 0.2s",
                    resize: "vertical",
                    minHeight: "120px",
                    width: "100%",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--border)")
                  }
                />
              </div>

              <button
                onClick={handleSubmit}
                style={{
                  background: "var(--gold)",
                  color: "var(--navy)",
                  border: "none",
                  padding: "0.9rem 2rem",
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "0.78rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  cursor: "pointer",
                  borderRadius: "2px",
                  transition: "background 0.2s",
                  alignSelf: "flex-start",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "var(--gold-light)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "var(--gold)")
                }
              >
                Send message →
              </button>
            </div>
          )}
        </div>
      </div>

    </section>
  );
}
