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
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "#0A1628" }}
    >
      {/* Decorative bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(37,99,235,0.08) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(6,182,212,0.06)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-6"
            style={{ background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.3)" }}
          >
            <span className="text-xs font-semibold text-blue-400 tracking-wider">
              PROJECT GALLERY
            </span>
          </div>
          <h2
            className="text-white font-extrabold leading-tight"
            style={{ fontSize: "clamp(24px, 4vw, 42px)", letterSpacing: "-0.5px" }}
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
          <p className="max-w-xl mx-auto mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Projects built by our interns as part of their structured learning journey.
          </p>
        </div>

        {/* Slideshow */}
        <div className="relative mb-6 sm:mb-8">
          {/* Main slide */}
          <div
            className="relative rounded-2xl overflow-hidden h-[340px] xs:h-[380px] sm:h-[450px] md:h-[500px]"
            style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.5)" }}
          >
            <ImageWithFallback
              src={projects[current].image}
              alt={projects[current].title}
              className="w-full h-full object-cover transition-all duration-700"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.4) 50%, rgba(10,22,40,0.1) 100%)" }}
            />

            {/* Slide info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
                <div className="max-w-xl">
                  <span
                    className="inline-block px-2.5 sm:px-3 py-1 rounded-full mb-2 sm:mb-3 text-[11px] font-semibold text-blue-200"
                    style={{ background: "rgba(37,99,235,0.7)", backdropFilter: "blur(8px)" }}
                  >
                    {projects[current].category}
                  </span>
                  <h3 className="text-white text-lg sm:text-2xl md:text-3xl font-bold mb-1.5 sm:mb-2">
                    {projects[current].title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm line-clamp-2 sm:line-clamp-none">
                    {projects[current].description}
                  </p>
                </div>
                <button
                  onClick={() => setLightbox(current)}
                  className="self-start sm:self-auto flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-white transition-all hover:bg-white/20 cursor-pointer text-xs sm:text-sm font-semibold"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(8px)" }}
                >
                  <ZoomIn size={15} />
                  <span>Expand</span>
                </button>
              </div>
            </div>

            {/* Nav arrows */}
            <button
              onClick={prev}
              className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center text-white transition-all hover:bg-white/25 active:scale-95 cursor-pointer"
              style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}
              aria-label="Previous project"
            >
              <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center text-white transition-all hover:bg-white/25 active:scale-95 cursor-pointer"
              style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}
              aria-label="Next project"
            >
              <ChevronRight size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Controls bar */}
          <div className="flex items-center justify-between mt-3 sm:mt-4 px-1">
            <div className="flex gap-1.5 sm:gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="transition-all duration-300 cursor-pointer"
                  style={{
                    width: i === current ? "24px" : "7px",
                    height: "7px",
                    borderRadius: "999px",
                    background: i === current ? "#2563EB" : "rgba(255,255,255,0.25)",
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-slate-400 font-medium">
                {current + 1} / {projects.length}
              </span>
              <button
                onClick={() => setPlaying(!playing)}
                className="w-7 sm:w-8 h-7 sm:h-8 rounded-full flex items-center justify-center transition-all hover:bg-white/10 cursor-pointer border border-white/20"
                aria-label={playing ? "Pause autoplay" : "Play autoplay"}
              >
                {playing ? <Pause size={12} className="text-slate-300" /> : <Play size={12} className="text-slate-300" />}
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex sm:grid sm:grid-cols-5 gap-2 sm:gap-3 overflow-x-auto pb-2 sm:pb-0">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setCurrent(i)}
              className="relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer flex-shrink-0 w-20 sm:w-full h-14 sm:h-20"
              style={{
                outline: i === current ? "2px solid #2563EB" : "2px solid transparent",
                outlineOffset: "2px",
                opacity: i === current ? 1 : 0.55,
              }}
              aria-label={`View ${p.title}`}
            >
              <ImageWithFallback src={p.image} alt={p.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 cursor-pointer"
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
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white cursor-pointer"
              style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}
              aria-label="Close fullscreen"
            >
              <X size={18} />
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5"
              style={{ background: "linear-gradient(to top, rgba(10,22,40,0.95), transparent)" }}>
              <h3 className="text-white text-base sm:text-xl font-bold">
                {projects[lightbox].title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                {projects[lightbox].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
