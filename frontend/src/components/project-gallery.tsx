import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn, Play, Pause } from "lucide-react";
import { ImageWithFallback } from "./image-with-fallback";

const projects = [
  {
    id: 1,
    title: "Portfolio Landing Page",
    category: "Landing Page",
    description: "A sleek, conversion-optimized portfolio landing page built with HTML, CSS and JavaScript.",
    image: "https://images.unsplash.com/photo-1648134859177-66e35b61e106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kaW5nJTIwcGFnZSUyMHdlYiUyMHByb2plY3QlMjBwb3J0Zm9saW8lMjBzaG93Y2FzZXxlbnwxfHx8fDE3OTM2MjczNzl8MA&ixlib=rb-4.1.0&q=80&w=800",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    category: "Full Website",
    description: "A fully responsive e-commerce frontend with product listings, filters and cart UI.",
    image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWduJTIwbW9kZXJufGVufDF8fHx8MTc5MzYyNzM4MHww&ixlib=rb-4.1.0&q=80&w=800",
  },
  {
    id: 3,
    title: "Mobile App UI",
    category: "UI/UX Design",
    description: "Modern mobile app interface with clean typography, intuitive navigation, and smooth transitions.",
    image: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBVSSUyMGRlc2lnbiUyMGNsZWFufGVufDF8fHx8MTc5MzYyNzM4MHww&ixlib=rb-4.1.0&q=80&w=800",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    category: "Dashboard",
    description: "Data-rich analytics dashboard with interactive charts, KPI cards and real-time metrics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc5MzYyNzM4MHww&ixlib=rb-4.1.0&q=80&w=800",
  },
  {
    id: 5,
    title: "Developer Workspace",
    category: "Web App",
    description: "A full-featured developer productivity workspace with a clean, dark-mode interface.",
    image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBtb2Rlcm4lMjBjb2RpbmclMjBzZXR1cHxlbnwxfHx8fDE3OTM2MjczNzN8MA&ixlib=rb-4.1.0&q=80&w=800",
  },
];

export function ProjectGallery() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [playing, setPlaying] = useState(true);

  const next = useCallback(() => setCurrent((c) => (c + 1) % projects.length), []);
  const prev = () => setCurrent((c) => (c - 1 + projects.length) % projects.length);

  useEffect(() => {
    if (!playing || lightbox !== null) return;
    const t = setInterval(next, 3500);
    return () => clearInterval(t);
  }, [playing, lightbox, next]);

  return (
    <section
      id="projects"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "#0A1628" }}
    >
      {/* Decorative bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(37,99,235,0.08) 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(6,182,212,0.06)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{ background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.3)" }}
          >
            <span style={{ fontSize: "12px", fontWeight: 600, color: "#60a5fa", letterSpacing: "1px" }}>
              PROJECT GALLERY
            </span>
          </div>
          <h2
            className="text-white"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.8px", lineHeight: 1.15 }}
          >
            Our{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #60a5fa, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Featured Work
            </span>
          </h2>
          <p className="max-w-xl mx-auto mt-4" style={{ fontSize: "17px", lineHeight: 1.7, color: "#64748b" }}>
            Projects built by our interns as part of their structured learning journey.
          </p>
        </div>

        {/* Slideshow */}
        <div className="relative mb-8">
          {/* Main slide */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ height: "clamp(280px, 50vw, 520px)", boxShadow: "0 30px 80px rgba(0,0,0,0.5)" }}
          >
            <ImageWithFallback
              src={projects[current].image}
              alt={projects[current].title}
              className="w-full h-full object-cover transition-all duration-700"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(10,22,40,0.9) 0%, rgba(10,22,40,0.1) 60%)" }}
            />

            {/* Slide info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <div className="flex items-end justify-between">
                <div>
                  <span
                    className="inline-block px-3 py-1 rounded-full mb-3"
                    style={{ background: "rgba(37,99,235,0.7)", fontSize: "11px", fontWeight: 600, color: "#93c5fd", backdropFilter: "blur(8px)" }}
                  >
                    {projects[current].category}
                  </span>
                  <h3 className="text-white mb-2" style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 700 }}>
                    {projects[current].title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#94a3b8", maxWidth: "560px" }}>
                    {projects[current].description}
                  </p>
                </div>
                <button
                  onClick={() => setLightbox(current)}
                  className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl text-white transition-all hover:bg-white/20 cursor-pointer"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", fontSize: "13px", fontWeight: 600, backdropFilter: "blur(8px)" }}
                >
                  <ZoomIn size={16} />
                  Expand
                </button>
              </div>
            </div>

            {/* Nav arrows */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:bg-white/20 cursor-pointer"
              style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:bg-white/20 cursor-pointer"
              style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Controls bar */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="transition-all duration-300 cursor-pointer"
                  style={{
                    width: i === current ? "28px" : "8px",
                    height: "8px",
                    borderRadius: "999px",
                    background: i === current ? "#2563EB" : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span style={{ fontSize: "13px", color: "#475569" }}>
                {current + 1} / {projects.length}
              </span>
              <button
                onClick={() => setPlaying(!playing)}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:bg-white/10 cursor-pointer"
                style={{ border: "1px solid rgba(255,255,255,0.15)" }}
              >
                {playing ? <Pause size={14} className="text-slate-400" /> : <Play size={14} className="text-slate-400" />}
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-5 gap-3">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setCurrent(i)}
              className="relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                height: "70px",
                outline: i === current ? "2px solid #2563EB" : "2px solid transparent",
                outlineOffset: "2px",
                opacity: i === current ? 1 : 0.6,
              }}
            >
              <ImageWithFallback src={p.image} alt={p.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-pointer"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.8)" }}
          >
            <ImageWithFallback
              src={projects[lightbox].image}
              alt={projects[lightbox].title}
              className="w-full object-cover"
              style={{ maxHeight: "80vh" }}
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white cursor-pointer"
              style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}
            >
              <X size={18} />
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-5"
              style={{ background: "linear-gradient(to top, rgba(10,22,40,0.95), transparent)" }}>
              <h3 className="text-white" style={{ fontSize: "20px", fontWeight: 700 }}>
                {projects[lightbox].title}
              </h3>
              <p style={{ fontSize: "14px", color: "#94a3b8", marginTop: "4px" }}>
                {projects[lightbox].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

