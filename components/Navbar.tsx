"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
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
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 border-b border-[var(--border)] backdrop-blur-lg transition-colors ${
        scrolled ? "bg-[rgba(10,15,30,0.95)]" : "bg-[rgba(10,15,30,0.75)]"
      }`}
    >
      {/* Logo */}
      <Link
        href="#home"
        className="font-serif text-lg text-[var(--gold)] tracking-wide"
      >
        Rahul Kumar
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-xs uppercase tracking-widest text-[var(--cream-dim)] hover:text-[var(--gold)] transition"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Resume CTA (desktop only) */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-block text-xs uppercase tracking-wide font-medium text-[var(--navy)] bg-[var(--gold)] px-5 py-2 rounded hover:bg-[var(--gold-light)] transition"
      >
        Resume ↗
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-xl text-[var(--cream)]"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[var(--navy-2)] border-b border-[var(--border)] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm uppercase tracking-wide text-[var(--cream-dim)] hover:text-[var(--gold)] transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-wide font-medium text-[var(--navy)] bg-[var(--gold)] px-4 py-2 rounded hover:bg-[var(--gold-light)] transition"
          >
            Resume ↗
          </a>
        </div>
      )}
    </nav>
  );
}
