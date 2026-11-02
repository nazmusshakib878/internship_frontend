import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./image-with-fallback";

const heroImage = "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBtb2Rlcm4lMjBjb2RpbmclMjBzZXR1cHxlbnwxfHx8fDE3OTM2MjczNzN8MA&ixlib=rb-4.1.0&q=80&w=1080";

const stats = [
  { value: "50+", label: "Projects Built" },
  { value: "3", label: "Learning Levels" },
  { value: "100%", label: "Hands-on" },
  { value: "Real", label: "Experience" },
];

export function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0A1628 0%, #0f2252 40%, #0e4f6b 100%)",
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(37,99,235,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Gradient orbs */}
        <div
          className="absolute top-1/4 -right-32 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "rgba(6,182,212,0.12)" }}
        />
        <div
          className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "rgba(37,99,235,0.15)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "rgba(14,79,107,0.2)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: "rgba(37,99,235,0.15)",
                border: "1px solid rgba(37,99,235,0.3)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span style={{ fontSize: "13px", fontWeight: 500, color: "#67e8f9" }}>
                Now Accepting Interns — Batch 2026
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-white mb-6"
              style={{
                fontSize: "clamp(36px, 5vw, 62px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-1.5px",
              }}
            >
              Build Your{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #3B82F6, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Future
              </span>{" "}
              in Web Development
            </h1>

            {/* Subtitle */}
            <p
              className="mb-8 max-w-lg mx-auto lg:mx-0"
              style={{
                fontSize: "clamp(15px, 2vw, 18px)",
                fontWeight: 400,
                lineHeight: 1.7,
                color: "#94a3b8",
              }}
            >
              Join the <strong style={{ color: "#e2e8f0", fontWeight: 600 }}>Primeor Solutions Internship Program</strong> and
              gain real-world web development experience. Work on live projects, build your portfolio,
              and launch your tech career with expert mentorship.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={() => handleScroll("#programs")}
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #2563EB, #06B6D4)",
                  fontSize: "15px",
                  fontWeight: 600,
                  boxShadow: "0 8px 30px rgba(37,99,235,0.4)",
                }}
              >
                Explore Program
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => handleScroll("#interactive")}
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-white transition-all duration-300 hover:bg-white/10 cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  fontSize: "15px",
                  fontWeight: 500,
                }}
              >
                <Play size={16} className="text-cyan-400" />
                Try Live Demos
              </button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div
                    className="text-white font-bold"
                    style={{ fontSize: "28px", letterSpacing: "-0.5px" }}
                  >
                    <span
                      style={{
                        background: "linear-gradient(90deg, #60a5fa, #22d3ee)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {stat.value}
                    </span>
                  </div>
                  <div style={{ fontSize: "13px", color: "#64748b", fontWeight: 500 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Code/Image showcase */}
          <div className="relative">
            {/* Outer glow */}
            <div
              className="absolute -inset-4 rounded-3xl blur-2xl opacity-40"
              style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)" }}
            />

            {/* Main card */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl border"
              style={{
                background: "rgba(10, 22, 40, 0.8)",
                borderColor: "rgba(37, 99, 235, 0.3)",
                backdropFilter: "blur(16px)",
              }}
            >
              {/* Window header */}
              <div
                className="flex items-center justify-between px-4 py-3 border-b"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div style={{ fontSize: "12px", color: "#64748b", fontFamily: "monospace" }}>
                  PrimeorInternship.jsx
                </div>
                <div className="w-12" />
              </div>

              {/* Image with overlay */}
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <ImageWithFallback
                  src={heroImage}
                  alt="Modern developer workspace with clean coding setup"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.3) 60%, transparent 100%)",
                  }}
                />

                {/* Floating pill badge */}
                <div
                  className="absolute bottom-4 left-4 right-4 p-4 rounded-xl flex items-center justify-between"
                  style={{
                    background: "rgba(10, 22, 40, 0.9)",
                    border: "1px solid rgba(37, 99, 235, 0.4)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <div>
                      <div className="text-white text-xs font-semibold">Web Development Track</div>
                      <div className="text-slate-400 text-[11px]">Bhopal, MP &bull; Online / Hybrid</div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleScroll("#contact")}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors cursor-pointer"
                  >
                    Join Now
                  </button>
                </div>
              </div>

              {/* Code snippet display */}
              <div className="p-4 font-mono text-xs text-slate-300 space-y-1 bg-black/40">
                <div><span className="text-blue-400">const</span> intern = <span className="text-yellow-300">&#123;</span></div>
                <div className="pl-4">role: <span className="text-emerald-400">"Web Developer"</span>,</div>
                <div className="pl-4">skills: [<span className="text-cyan-300">"HTML"</span>, <span className="text-cyan-300">"CSS"</span>, <span className="text-cyan-300">"React"</span>, <span className="text-cyan-300">"Node"</span>],</div>
                <div className="pl-4">status: <span className="text-emerald-400">"Ready for Industry"</span></div>
                <div><span className="text-yellow-300">&#125;</span>;</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
        <button
          onClick={() => handleScroll("#about")}
          className="text-xs text-slate-400 flex flex-col items-center gap-1 cursor-pointer"
        >
          <span>Scroll to explore</span>
          <ChevronDown size={16} className="animate-bounce text-cyan-400" />
        </button>
      </div>
    </section>
  );
}

