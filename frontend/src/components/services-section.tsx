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
    <section id="services" className="py-16 sm:py-24 lg:py-32 relative" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              WHAT WE OFFER
            </span>
          </div>
          <h2
            className="font-extrabold text-slate-900 leading-tight"
            style={{
              fontSize: "clamp(24px, 4vw, 42px)",
              letterSpacing: "-0.5px",
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
            className="max-w-xl mx-auto mt-4 text-slate-600 text-sm sm:text-base leading-relaxed"
          >
            Beyond our training program, Primeor Solutions delivers top-tier web design and development
            services to clients across industries.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-2 cursor-pointer shadow-sm hover:shadow-lg"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(10,22,40,0.08)",
              }}
              onClick={handleScroll}
            >
              {/* Image container */}
              <div className="relative h-44 sm:h-48 overflow-hidden">
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
                  className="absolute top-3 right-3 px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold text-white shadow-sm"
                  style={{ background: svc.color }}
                >
                  {svc.tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="mb-2 group-hover:text-blue-600 transition-colors flex items-center justify-between text-base sm:text-lg font-bold text-slate-900"
                  >
                    <span>{svc.title}</span>
                    <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
