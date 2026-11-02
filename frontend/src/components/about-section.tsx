import { Briefcase, Layout, Code, Layers, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: Briefcase,
    title: "Real-World Experience",
    description:
      "Work on actual client projects and industry-standard tasks that mirror professional web development workflows.",
    color: "#3B82F6",
    glow: "rgba(59,130,246,0.15)",
  },
  {
    icon: Layout,
    title: "Portfolio Development",
    description:
      "Build a strong, impressive portfolio with real projects you've created during your internship.",
    color: "#06B6D4",
    glow: "rgba(6,182,212,0.15)",
  },
  {
    icon: Code,
    title: "Practical Frontend Exposure",
    description:
      "Gain hands-on expertise in HTML, CSS, JavaScript, Tailwind, and modern frontend frameworks.",
    color: "#8B5CF6",
    glow: "rgba(139,92,246,0.15)",
  },
  {
    icon: Layers,
    title: "Hands-on Projects",
    description:
      "Complete real deliverables — landing pages, UI components, and full websites from day one.",
    color: "#10B981",
    glow: "rgba(16,185,129,0.15)",
  },
];

const highlights = [
  "Expert mentorship from industry professionals",
  "Certificate of completion upon finishing all levels",
  "Flexible remote internship structure",
  "Community of like-minded learners",
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 relative overflow-hidden" style={{ background: "#F0F7FF" }}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(37,99,235,0.06)" }} />
      <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(6,182,212,0.06)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-6"
            style={{
              background: "rgba(37,99,235,0.08)",
              border: "1px solid rgba(37,99,235,0.2)",
            }}
          >
            <span className="text-xs font-semibold text-blue-600 tracking-wider">
              ABOUT THE PROGRAM
            </span>
          </div>
          <h2
            className="font-extrabold text-slate-900 leading-tight"
            style={{
              fontSize: "clamp(24px, 4vw, 42px)",
              letterSpacing: "-0.5px",
            }}
          >
            Why Choose Primeor Solutions
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #2563EB, #06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Internship Program?
            </span>
          </h2>
          <p
            className="max-w-2xl mx-auto mt-4 text-slate-600 text-sm sm:text-base leading-relaxed"
          >
            We bridge the gap between classroom theory and real industry practice. Our structured internship
            gives aspiring developers the tools, experience, and confidence to thrive in the tech industry.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 group cursor-pointer"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(37,99,235,0.1)",
                boxShadow: "0 2px 12px rgba(10,22,40,0.05)",
              }}
            >
              <div
                className="w-11 sm:w-12 h-11 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: b.glow }}
              >
                <b.icon size={20} className="sm:w-[22px] sm:h-[22px]" style={{ color: b.color }} />
              </div>
              <h3
                className="mb-2 text-base sm:text-lg font-bold text-slate-900"
              >
                {b.title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlights banner */}
        <div
          className="rounded-2xl p-6 sm:p-8 lg:p-10"
          style={{
            background: "linear-gradient(135deg, #0A1628 0%, #0f2252 100%)",
            boxShadow: "0 16px 48px rgba(10,22,40,0.2)",
          }}
        >
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <span className="text-xs font-semibold text-cyan-300 tracking-wider">
                KEY HIGHLIGHTS
              </span>
              <h3
                className="text-white mt-1 mb-3 text-xl sm:text-2xl font-bold"
              >
                Everything You Need to Succeed
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                From weekly 1-on-1 code reviews to verifiable portfolio artifacts, our program is designed
                to build confident, job-ready engineers.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-2.5 sm:gap-3 bg-white/5 sm:bg-transparent p-2 sm:p-0 rounded-lg">
                  <CheckCircle2 size={18} className="text-cyan-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">
                    {h}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
