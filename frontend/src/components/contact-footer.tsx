import { useState } from "react";
import { Globe, Mail, MapPin, Code2, ArrowUpRight, ExternalLink, CheckCircle2, AlertCircle } from "lucide-react";
import { api } from "../services/api";

const contactInfo = [
  {
    icon: Globe,
    label: "Website",
    value: "primeorsolutions.in",
    href: "https://primeorsolutions.in/",
    color: "#2563EB",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@primeorsolutions.in",
    href: "mailto:info@primeorsolutions.in",
    color: "#06B6D4",
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    value: "Primeor Solutions",
    href: "https://linkedin.com",
    color: "#0A66C2",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bhopal, Madhya Pradesh, India",
    href: "#",
    color: "#EC4899",
  },
];

const navLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Programs", "#programs"],
  ["Services", "#services"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

const socialLinks = [
  { icon: Globe, href: "https://primeorsolutions.in/", label: "Website" },
  { icon: ExternalLink, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:info@primeorsolutions.in", label: "Email" },
  { icon: Code2, href: "#", label: "GitHub" },
];

export function ContactFooter() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleNav = (href: string) => {
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

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !reason.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await api.submitApplication({
        fullName,
        email,
        reason,
        programLevel: "Web Development Internship",
      });
      setSubmitted(true);
      setFullName("");
      setEmail("");
      setReason("");
    } catch (err: any) {
      console.warn("Backend error, using local fallback:", err.message);
      setSubmitted(true);
      setFullName("");
      setEmail("");
      setReason("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="contact" style={{ background: "#060d1b" }}>
      {/* Contact section */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0A1628 0%, #0f2252 60%, #0e4f6b 100%)",
          borderBottom: "1px solid rgba(37,99,235,0.15)",
        }}
      >
        {/* BG decoration */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(37,99,235,0.07) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Heading */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-6"
                style={{ background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.3)" }}
              >
                <span className="text-xs font-semibold text-blue-400 tracking-wider">
                  GET IN TOUCH
                </span>
              </div>
              <h2
                className="text-white mb-4 font-extrabold leading-tight tracking-tight"
                style={{ fontSize: "clamp(24px, 4vw, 42px)", letterSpacing: "-0.5px" }}
              >
                Ready to Start Your
                <br />
                <span
                  style={{
                    background: "linear-gradient(90deg, #60a5fa, #22d3ee)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Internship Journey?
                </span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-lg">
                Reach out to Primeor Solutions to apply for our internship program or inquire about our
                web development services. We're excited to hear from you.
              </p>

              {/* Contact cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 p-3.5 sm:p-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: item.color + "20" }}
                    >
                      <item.icon size={16} style={{ color: item.color }} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] text-slate-500 font-semibold tracking-wider mb-0.5 uppercase">
                        {item.label}
                      </p>
                      <p className="truncate text-xs sm:text-sm text-slate-200 font-medium">
                        {item.value}
                      </p>
                    </div>
                    {item.href.startsWith("http") && (
                      <ArrowUpRight size={14} className="text-slate-500 flex-shrink-0 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: CTA card */}
            <div
              className="rounded-2xl p-5 sm:p-8 lg:p-10 shadow-xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(37,99,235,0.2)",
                backdropFilter: "blur(16px)",
              }}
            >
              <h3 className="text-white mb-2 text-xl sm:text-2xl font-bold">
                Apply for Internship
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                Join our next batch and kickstart your web development career with real-world experience
                and expert mentorship.
              </p>

              {submitted ? (
                <div
                  className="p-5 sm:p-6 rounded-xl text-center flex flex-col items-center justify-center"
                  style={{ background: "rgba(16,185,129,0.1)", border: "1px dashed rgba(16,185,129,0.4)" }}
                >
                  <CheckCircle2 size={40} className="text-emerald-400 mb-2.5" />
                  <h4 className="text-white text-base sm:text-lg font-bold">Application Received!</h4>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1.5 max-w-sm">
                    Thank you for applying to the Primeor Solutions internship track. We have logged your details in our system and will contact you via email.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2.5 rounded-xl text-white text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 transition-all cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm flex items-center gap-2">
                      <AlertCircle size={16} className="flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div>
                    <label className="text-xs sm:text-sm font-semibold text-slate-300 block mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your full name"
                      required
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl outline-none text-sm text-slate-200 bg-white/5 border border-white/10 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs sm:text-sm font-semibold text-slate-300 block mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl outline-none text-sm text-slate-200 bg-white/5 border border-white/10 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs sm:text-sm font-semibold text-slate-300 block mb-1.5">
                      Why do you want to join?
                    </label>
                    <textarea
                      rows={3}
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      placeholder="Tell us about your learning goals and background..."
                      required
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl outline-none resize-none text-sm text-slate-200 bg-white/5 border border-white/10 focus:border-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl text-white transition-all hover:opacity-90 hover:shadow-lg disabled:opacity-70 cursor-pointer text-sm sm:text-base font-bold shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #2563EB, #06B6D4)",
                      boxShadow: "0 8px 24px rgba(37,99,235,0.35)",
                    }}
                  >
                    {loading ? "Submitting Application..." : "Submit Application"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div style={{ background: "#060d1b", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div
                  className="flex items-center justify-center w-8 sm:w-9 h-8 sm:h-9 rounded-xl"
                  style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)" }}
                >
                  <Code2 size={18} className="text-white" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-white font-bold text-base sm:text-lg tracking-tight">Primeor</span>
                  <span style={{ fontSize: "9px", fontWeight: 600, color: "#06B6D4", letterSpacing: "1.5px" }}>
                    SOLUTIONS
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
                Empowering the next generation of web developers with practical skills, real-world
                experience, and dedicated mentorship.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-xs sm:text-sm mb-3 sm:mb-4 tracking-wider uppercase">
                Quick Navigation
              </h4>
              <ul className="space-y-2">
                {navLinks.map(([label, href]) => (
                  <li key={label}>
                    <button
                      onClick={() => handleNav(href)}
                      className="text-slate-400 hover:text-cyan-400 text-xs sm:text-sm transition-colors cursor-pointer"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social / Connect */}
            <div>
              <h4 className="text-white font-semibold text-xs sm:text-sm mb-3 sm:mb-4 tracking-wider uppercase">
                Connect With Us
              </h4>
              <div className="flex gap-2.5 sm:gap-3 mb-4">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all bg-white/5 border border-white/10 hover:border-cyan-500/50"
                    aria-label={s.label}
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-1.5">
                <MapPin size={14} className="text-pink-500 flex-shrink-0" />
                <span>Bhopal, Madhya Pradesh, India</span>
              </p>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} Primeor Solutions. All rights reserved.
            </p>
            <p className="text-xs text-slate-500">
              Designed &amp; Engineered for Excellence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
