import { Code2, Monitor, Image, CheckCircle2 } from "lucide-react";

const levels = [
  {
    level: "01",
    title: "HTML, CSS & JavaScript",
    subtitle: "Level 1 — Foundations",
    icon: Code2,
    color: "#2563EB",
    glow: "rgba(37,99,235,0.15)",
    gradient: "linear-gradient(135deg, #1e3a8a, #1d4ed8)",
    tasks: [
      "Build semantic HTML document structures",
      "Style elements with modern CSS & Flexbox/Grid",
      "Implement JavaScript interactivity & DOM manipulation",
      "Create form validations and event handlers",
      "Build a complete static webpage from scratch",
    ],
    duration: "2 Weeks",
    badge: "Foundation",
  },
  {
    level: "02",
    title: "Bootstrap / Tailwind & Responsive Design",
    subtitle: "Level 2 — Frameworks",
    icon: Monitor,
    color: "#06B6D4",
    glow: "rgba(6,182,212,0.15)",
    gradient: "linear-gradient(135deg, #164e63, #0e7490)",
    tasks: [
      "Master Tailwind CSS utility-first approach",
      "Build mobile-first responsive layouts",
      "Create grid systems and breakpoint-based designs",
      "Implement Bootstrap components and utilities",
      "Develop a fully responsive multi-section website",
    ],
    duration: "2 Weeks",
    badge: "Intermediate",
  },
  {
    level: "03",
    title: "Image Gallery & Landing Page Development",
    subtitle: "Level 3 — Capstone",
    icon: Image,
    color: "#8B5CF6",
    glow: "rgba(139,92,246,0.15)",
    gradient: "linear-gradient(135deg, #3b0764, #6d28d9)",
    tasks: [
      "Build a dynamic image gallery with lightbox",
      "Implement slideshow with auto-play and navigation",
      "Design and develop a complete landing page",
      "Add smooth CSS animations and transitions",
      "Deploy and present your final capstone project",
    ],
    duration: "2 Weeks",
    badge: "Advanced",
  },
];

export function ProgramSection() {
  const handleApply = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="programs"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(37,99,235,0.04)" }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(6,182,212,0.04)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{ background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.2)" }}
          >
            <span style={{ fontSize: "12px", fontWeight: 600, color: "#2563EB", letterSpacing: "1px" }}>
              INTERNSHIP CURRICULUM
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "#0A1628",
              letterSpacing: "-0.8px",
              lineHeight: 1.15,
            }}
          >
            Structured Learning{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #2563EB, #06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Program
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto mt-4"
            style={{ fontSize: "17px", lineHeight: 1.7, color: "#475569" }}
          >
            A progressive 6-week curriculum designed to take you from web development fundamentals to
            deploying real-world projects.
          </p>
        </div>

        {/* Timeline connector — desktop */}
        <div className="hidden lg:flex items-center justify-center mb-10 px-20">
          <div className="flex-1 h-0.5" style={{ background: "linear-gradient(90deg, transparent, #2563EB)" }} />
          <div className="w-3 h-3 rounded-full mx-2" style={{ background: "#2563EB" }} />
          <div className="flex-1 h-0.5" style={{ background: "#2563EB" }} />
          <div className="w-3 h-3 rounded-full mx-2" style={{ background: "#06B6D4" }} />
          <div className="flex-1 h-0.5" style={{ background: "linear-gradient(90deg, #06B6D4, #8B5CF6)" }} />
          <div className="w-3 h-3 rounded-full mx-2" style={{ background: "#8B5CF6" }} />
          <div className="flex-1 h-0.5" style={{ background: "linear-gradient(90deg, #8B5CF6, transparent)" }} />
        </div>

        {/* Levels Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {levels.map((lvl) => (
            <div
              key={lvl.level}
              className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 group"
              style={{
                background: "#FFFFFF",
                border: "1.5px solid rgba(10,22,40,0.08)",
                boxShadow: "0 4px 20px rgba(10,22,40,0.06)",
              }}
            >
              {/* Card top banner */}
              <div
                className="p-6 text-white relative overflow-hidden"
                style={{ background: lvl.gradient }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-mono font-black"
                    style={{ fontSize: "36px", opacity: 0.4 }}
                  >
                    {lvl.level}
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)" }}
                  >
                    {lvl.duration}
                  </span>
                </div>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  <lvl.icon size={20} className="text-white" />
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, lineHeight: 1.3, marginBottom: "4px" }}>
                  {lvl.title}
                </h3>
                <p style={{ fontSize: "13px", opacity: 0.8 }}>{lvl.subtitle}</p>
              </div>

              {/* Tasks list */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "#94a3b8", letterSpacing: "1px", marginBottom: "16px" }}>
                    CURRICULUM MODULES
                  </div>
                  <ul className="space-y-3 mb-6">
                    {lvl.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={16}
                          style={{ color: lvl.color, flexShrink: 0, marginTop: "2px" }}
                        />
                        <span style={{ fontSize: "14px", color: "#334155", lineHeight: 1.5 }}>
                          {task}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={handleApply}
                  className="w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 group-hover:shadow-md cursor-pointer"
                  style={{
                    background: lvl.glow,
                    color: lvl.color,
                    border: `1px solid ${lvl.color}40`,
                  }}
                >
                  Apply for this Level &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

