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
      id="home"
      className="relative min-h-[92vh] flex items-center overflow-hidden"
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
            backgroundSize: "32px 32px",
          }}
        />
        {/* Gradient orbs */}
        <div
          className="absolute top-1/4 -right-24 sm:-right-32 w-72 sm:w-96 h-72 sm:h-96 rounded-full blur-3xl"
          style={{ background: "rgba(6,182,212,0.12)" }}
        />
        <div
          className="absolute bottom-1/4 -left-24 sm:-left-32 w-64 sm:w-80 h-64 sm:h-80 rounded-full blur-3xl"
          style={{ background: "rgba(37,99,235,0.15)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-14 sm:pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8"
              style={{
                background: "rgba(37,99,235,0.15)",
                border: "1px solid rgba(37,99,235,0.3)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-cyan-200">
                Now Accepting Interns — Batch 2026
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-white mb-5 sm:mb-6 leading-tight tracking-tight font-extrabold"
              style={{
                fontSize: "clamp(28px, 5.5vw, 56px)",
                letterSpacing: "-0.8px",
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
              className="mb-8 max-w-lg mx-auto lg:mx-0 text-slate-300 leading-relaxed"
              style={{
                fontSize: "clamp(14px, 2vw, 17px)",
              }}
            >
              Join the <strong className="text-white font-semibold">Primeor Solutions Internship Program</strong> and
              gain real-world web development experience. Work on live projects, build your portfolio,
              and launch your tech career with expert mentorship.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 justify-center lg:justify-start mb-10 sm:mb-12">
              <button
                onClick={() => handleScroll("#programs")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer text-sm sm:text-base font-semibold"
                style={{
                  background: "linear-gradient(135deg, #2563EB, #06B6D4)",
                  boxShadow: "0 8px 30px rgba(37,99,235,0.4)",
                }}
              >
                <span>Explore Program</span>
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => handleScroll("#interactive")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-white transition-all duration-300 hover:bg-white/10 cursor-pointer text-sm sm:text-base font-medium"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Play size={16} className="text-cyan-400" />
                <span>Try Live Demos</span>
              </button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left p-2 rounded-lg">
                  <div
                    className="text-white font-bold text-2xl sm:text-3xl"
                    style={{ letterSpacing: "-0.5px" }}
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
                  <div className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Code/Image showcase */}
          <div className="relative mt-2 lg:mt-0">
            {/* Outer glow */}
            <div
              className="absolute -inset-2 sm:-inset-4 rounded-3xl blur-2xl opacity-30"
              style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)" }}
            />

            {/* Main card */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl border"
              style={{
                background: "rgba(10, 22, 40, 0.85)",
                borderColor: "rgba(37, 99, 235, 0.3)",
                backdropFilter: "blur(16px)",
              }}
            >
              {/* Window header */}
              <div
                className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 border-b"
                style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-500/80" />
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 font-mono">
                  PrimeorInternship.jsx
                </div>
                <div className="w-8 sm:w-12" />
              </div>

              {/* Image with overlay */}
              <div className="relative h-56 xs:h-64 sm:h-76 md:h-80 overflow-hidden">
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
                  className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-2.5 sm:p-3.5 rounded-xl flex items-center justify-between gap-2"
                  style={{
                    background: "rgba(10, 22, 40, 0.92)",
                    border: "1px solid rgba(37, 99, 235, 0.4)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-white text-[11px] sm:text-xs font-semibold truncate">Web Development Track</div>
                      <div className="text-slate-400 text-[10px] sm:text-[11px] truncate">Bhopal, MP &bull; Online / Hybrid</div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleScroll("#contact")}
                    className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors cursor-pointer flex-shrink-0"
                  >
                    Join
                  </button>
                </div>
              </div>

              {/* Code snippet display */}
              <div className="p-3 sm:p-4 font-mono text-[11px] sm:text-xs text-slate-300 space-y-1 bg-black/50 overflow-x-auto">
                <div><span className="text-blue-400">const</span> intern = <span className="text-yellow-300">&#123;</span></div>
                <div className="pl-4">role: <span className="text-emerald-400">"Web Developer"</span>,</div>
                <div className="pl-4">skills: [<span className="text-cyan-300">"HTML"</span>, <span className="text-cyan-300">"CSS"</span>, <span className="text-cyan-300">"React"</span>, <span className="text-cyan-300">"Laravel"</span>],</div>
                <div className="pl-4">status: <span className="text-emerald-400">"Ready for Industry"</span></div>
                <div><span className="text-yellow-300">&#125;</span>;</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden sm:flex absolute bottom-3 left-1/2 -translate-x-1/2 flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
        <button
          onClick={() => handleScroll("#about")}
          className="text-xs text-slate-400 flex flex-col items-center gap-1 cursor-pointer focus:outline-none"
        >
          <span>Scroll to explore</span>
          <ChevronDown size={14} className="animate-bounce text-cyan-400" />
        </button>
      </div>
    </section>
  );
}
