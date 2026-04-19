import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-4 border-b border-border transition-all duration-300 ${
        scrolled ? "bg-bg/90 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="font-mono text-sm text-accent tracking-widest">
        SG
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <button
              onClick={() => handleNavClick(link.href)}
              className="font-mono text-[0.72rem] text-muted hover:text-accent tracking-widest uppercase transition-colors duration-200 bg-transparent border-none"
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-0.5 bg-accent transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-5 h-0.5 bg-accent transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-0.5 bg-accent transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-bg/95 backdrop-blur-xl border-b border-border flex flex-col items-center gap-6 py-8 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-mono text-xs text-muted hover:text-accent tracking-widest uppercase transition-colors duration-200 bg-transparent border-none"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
