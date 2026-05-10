"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.4rem 5%",
        background: scrolled
          ? "rgba(10,15,30,0.95)"
          : "rgba(10,15,30,0.75)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
        transition: "background 0.3s",
      }}
    >
      {/* Logo */}
      <Link
        href="#home"
        style={{
          fontFamily: "var(--font-serif), Georgia, serif",
          fontSize: "1.15rem",
          color: "var(--gold)",
          letterSpacing: "0.04em",
          textDecoration: "none",
        }}
      >
        Rahul Kumar
      </Link>

      {/* Desktop links */}
      <ul
        style={{
          display: "flex",
          gap: "2.5rem",
          listStyle: "none",
        }}
        className="hidden md:flex"
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                fontSize: "0.78rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--cream-dim)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--gold)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--cream-dim)")
              }
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Resume CTA */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: "0.75rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--navy)",
          background: "var(--gold)",
          padding: "0.55rem 1.4rem",
          borderRadius: "2px",
          textDecoration: "none",
          fontWeight: 500,
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "var(--gold-light)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "var(--gold)")
        }
        className="hidden md:inline-block"
      >
        Resume ↗
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "none",
          border: "none",
          color: "var(--cream)",
          fontSize: "1.4rem",
          cursor: "pointer",
        }}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "var(--navy-2)",
            borderBottom: "1px solid var(--border)",
            padding: "1.5rem 5%",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--cream-dim)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--navy)",
              background: "var(--gold)",
              padding: "0.6rem 1.2rem",
              borderRadius: "2px",
              textDecoration: "none",
              fontWeight: 500,
              display: "inline-block",
              alignSelf: "flex-start",
            }}
          >
            Resume ↗
          </a>
        </div>
      )}
    </nav>
  );
}
