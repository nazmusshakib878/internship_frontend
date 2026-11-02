import { useState, useEffect } from "react";
import { Menu, X, Code2, Zap } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10, 22, 40, 0.96)"
          : "rgba(10, 22, 40, 0.75)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid rgba(37, 99, 235, 0.2)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav("#home")}
            className="flex items-center gap-2 group text-left cursor-pointer"
          >
            <div
              className="flex items-center justify-center w-9 h-9 rounded-xl"
              style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)" }}
            >
              <Code2 size={18} className="text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-white tracking-tight"
                style={{ fontSize: "17px", fontWeight: 700, letterSpacing: "-0.3px" }}
              >
                Primeor
              </span>
              <span
                style={{ fontSize: "10px", fontWeight: 500, color: "#06B6D4", letterSpacing: "1.5px" }}
              >
                SOLUTIONS
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 rounded-lg text-slate-300 hover:text-white transition-all duration-200 hover:bg-white/10 cursor-pointer"
                style={{ fontSize: "14px", fontWeight: 500 }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav("#contact")}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #2563EB, #06B6D4)",
                fontSize: "14px",
                fontWeight: 600,
                boxShadow: "0 4px 15px rgba(37,99,235,0.4)",
              }}
            >
              <Zap size={14} />
              Apply Now
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div
            className="lg:hidden py-4 border-t border-white/10"
            style={{ background: "#0A1628" }}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="px-4 py-3 rounded-lg text-left text-slate-300 hover:text-white hover:bg-white/10 transition-all"
                  style={{ fontSize: "15px", fontWeight: 500 }}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 px-4">
                <button
                  onClick={() => handleNav("#contact")}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold"
                  style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)" }}
                >
                  <Zap size={14} />
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

