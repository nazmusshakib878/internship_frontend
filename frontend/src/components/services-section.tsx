import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./image-with-fallback";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Full-stack web solutions built with modern technologies, clean code and scalable architecture.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2dyYW1taW5nJTIwbGFwdG9wfGVufDF8fHx8MTc5MzYyNzM3NHww&ixlib=rb-4.1.0&q=80&w=400",
    tag: "Core Service",
    color: "#2563EB",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Pixel-perfect, performant frontend interfaces crafted with React, Tailwind and modern CSS.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcm9udGVuZCUyMFVJJTIwZGVzaWduJTIwY29kZSUyMHNjcmVlbnxlbnwxfHx8fDE3OTM2MjczNzR8MA&ixlib=rb-4.1.0&q=80&w=400",
    tag: "Specialty",
    color: "#06B6D4",
  },
  {
    id: 3,
    title: "Responsive Design",
    description: "Seamless experiences across all devices — mobile, tablet and desktop with fluid, adaptive layouts.",
    image: "https://images.unsplash.com/photo-1426024084828-5da21e13f5dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNwb25zaXZlJTIwZGVzaWduJTIwbW9iaWxlJTIwdGFibGV0JTIwZGV2aWNlc3xlbnwxfHx8fDE3OTM2MjczNzR8MA&ixlib=rb-4.1.0&q=80&w=400",
    tag: "Essential",
    color: "#8B5CF6",
  },
  {
    id: 4,
    title: "UI/UX Development",
    description: "User-centered design principles applied to create intuitive, beautiful and effective interfaces.",
    image: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVSSUyMFVYJTIwZGVzaWduJTIwd2lyZWZyYW1lJTIwcHJvdG90eXBlfGVufDF8fHx8MTc5MzYyNzM3NXww&ixlib=rb-4.1.0&q=80&w=400",
    tag: "Design",
    color: "#EC4899",
  },
  {
    id: 5,
    title: "JavaScript Development",
    description: "Dynamic, interactive web experiences powered by modern JavaScript, ES6+ features and frameworks.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc5MzYyNzM4MHww&ixlib=rb-4.1.0&q=80&w=400",
    tag: "Core Tech",
    color: "#F59E0B",
  },
  {
    id: 6,
    title: "Website Optimization",
    description: "Speed, SEO and performance audits to ensure your website loads fast and ranks high.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwc3BlZWQlMjBwZXJmb3JtYW5jZSUyMG9wdGltaXphdGlvbnxlbnwxfHx8fDE3OTM2MjczNzZ8MA&ixlib=rb-4.1.0&q=80&w=400",
    tag: "Performance",
    color: "#10B981",
  },
];

export function ServicesSection() {
  const handleScroll = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 lg:py-32 relative" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{
              background: "rgba(37,99,235,0.08)",
              border: "1px solid rgba(37,99,235,0.2)",
            }}
          >
            <span style={{ fontSize: "12px", fontWeight: 600, color: "#2563EB", letterSpacing: "1px" }}>
              WHAT WE OFFER
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
            Expert Services &amp;{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #2563EB, #06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Solutions
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto mt-4"
            style={{ fontSize: "17px", lineHeight: 1.7, color: "#475569" }}
          >
            Beyond our training program, Primeor Solutions delivers top-tier web design and development
            services to clients across industries.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(10,22,40,0.08)",
                boxShadow: "0 2px 16px rgba(10,22,40,0.05)",
              }}
              onClick={handleScroll}
            >
              {/* Image container */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(10,22,40,0.7) 0%, transparent 60%)",
                  }}
                />
                <span
                  className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ background: svc.color }}
                >
                  {svc.tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between"
                    style={{ fontSize: "18px", fontWeight: 700, color: "#0A1628" }}
                  >
                    <span>{svc.title}</span>
                    <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#64748b" }}>
                    {svc.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                  <span>Learn more</span>
                  <span>&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

