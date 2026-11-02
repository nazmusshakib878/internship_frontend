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

  // Close menu when window resizes to desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10, 22, 40, 0.96)"
          : "rgba(10, 22, 40, 0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid rgba(37, 99, 235, 0.2)" : "1px solid rgba(255, 255, 255, 0.05)",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav("#home")}
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
            aria-label="Primeor Solutions Home"
          >
            <div
              className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl shadow-md transition-transform group-hover:scale-105"
              style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)" }}
            >
              <Code2 size={18} className="text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-white tracking-tight"
                style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "-0.3px" }}
              >
                Primeor
              </span>
              <span
                style={{ fontSize: "9px", fontWeight: 600, color: "#06B6D4", letterSpacing: "1.5px" }}
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
                className="px-3.5 py-2 rounded-lg text-slate-300 hover:text-white transition-all duration-200 hover:bg-white/10 cursor-pointer text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => handleNav("#contact")}
              className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer text-xs sm:text-sm font-semibold shadow-sm"
              style={{
                background: "linear-gradient(135deg, #2563EB, #06B6D4)",
                boxShadow: "0 4px 15px rgba(37,99,235,0.4)",
              }}
            >
              <Zap size={14} />
              <span>Apply Now</span>
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div
            className="lg:hidden py-4 border-t border-white/10 max-h-[calc(100vh-4.5rem)] overflow-y-auto"
            style={{ background: "#0A1628" }}
          >
            <div className="flex flex-col gap-1 px-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="px-4 py-3 rounded-xl text-left text-slate-300 hover:text-white hover:bg-white/10 active:bg-blue-600/20 transition-all text-base font-medium flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-slate-500 text-xs">&rarr;</span>
                </button>
              ))}
              <div className="pt-3 px-2">
                <button
                  onClick={() => handleNav("#contact")}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-semibold text-sm shadow-lg"
                  style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)" }}
                >
                  <Zap size={16} />
                  Start Internship Application
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
