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
    <section
      id="programs"
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      <div className="absolute top-0 left-0 w-64 sm:w-80 h-64 sm:h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(37,99,235,0.04)" }} />
      <div className="absolute bottom-0 right-0 w-64 sm:w-80 h-64 sm:h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(6,182,212,0.04)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-6"
            style={{ background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.2)" }}
          >
            <span className="text-xs font-semibold text-blue-600 tracking-wider">
              INTERNSHIP CURRICULUM
            </span>
          </div>
          <h2
            className="font-extrabold text-slate-900 leading-tight"
            style={{
              fontSize: "clamp(24px, 4vw, 42px)",
              letterSpacing: "-0.5px",
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
            className="max-w-xl mx-auto mt-4 text-slate-600 text-sm sm:text-base leading-relaxed"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {levels.map((lvl) => (
            <div
              key={lvl.level}
              className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 group shadow-sm hover:shadow-lg"
              style={{
                background: "#FFFFFF",
                border: "1.5px solid rgba(10,22,40,0.08)",
              }}
            >
              {/* Card top banner */}
              <div
                className="p-5 sm:p-6 text-white relative overflow-hidden"
                style={{ background: lvl.gradient }}
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span
                    className="font-mono font-black text-3xl sm:text-4xl opacity-40"
                  >
                    {lvl.level}
                  </span>
                  <span
                    className="px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold"
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
                <h3 className="text-base sm:text-lg font-bold leading-snug mb-1">
                  {lvl.title}
                </h3>
                <p className="text-xs sm:text-sm opacity-85">{lvl.subtitle}</p>
              </div>

              {/* Tasks list */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold text-slate-400 tracking-wider mb-4 uppercase">
                    CURRICULUM MODULES
                  </div>
                  <ul className="space-y-2.5 sm:space-y-3 mb-6">
                    {lvl.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={16}
                          style={{ color: lvl.color, flexShrink: 0, marginTop: "2px" }}
                        />
                        <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                          {task}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={handleApply}
                  className="w-full py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 group-hover:shadow-md cursor-pointer"
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
