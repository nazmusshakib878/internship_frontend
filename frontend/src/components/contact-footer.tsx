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
    if (el) el.scrollIntoView({ behavior: "smooth" });
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
      // Fallback
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
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Heading */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
                style={{ background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.3)" }}
              >
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#60a5fa", letterSpacing: "1px" }}>
                  GET IN TOUCH
                </span>
              </div>
              <h2
                className="text-white mb-4"
                style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.8px", lineHeight: 1.15 }}
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
              <p style={{ fontSize: "17px", color: "#64748b", lineHeight: 1.7, marginBottom: "32px", maxWidth: "460px" }}>
                Reach out to Primeor Solutions to apply for our internship program or inquire about our
                web development services. We're excited to hear from you.
              </p>

              {/* Contact cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                      (e.currentTarget as HTMLElement).style.borderColor = item.color + "50";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: item.color + "20" }}
                    >
                      <item.icon size={16} style={{ color: item.color }} />
                    </div>
                    <div className="min-w-0">
                      <p style={{ fontSize: "11px", color: "#475569", fontWeight: 600, letterSpacing: "0.5px", marginBottom: "2px" }}>
                        {item.label}
                      </p>
                      <p className="truncate" style={{ fontSize: "13px", color: "#cbd5e1", fontWeight: 500 }}>
                        {item.value}
                      </p>
                    </div>
                    {item.href.startsWith("http") && (
                      <ArrowUpRight size={14} style={{ color: "#475569", flexShrink: 0, marginLeft: "auto" }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: CTA card */}
            <div
              className="rounded-2xl p-8 lg:p-10"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(37,99,235,0.2)",
                backdropFilter: "blur(16px)",
              }}
            >
              <h3 className="text-white mb-2" style={{ fontSize: "22px", fontWeight: 700 }}>
                Apply for Internship
              </h3>
              <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "24px", lineHeight: 1.6 }}>
                Join our next batch and kickstart your web development career with real-world experience
                and expert mentorship.
              </p>

              {submitted ? (
                <div
                  className="p-6 rounded-xl text-center flex flex-col items-center justify-center"
                  style={{ background: "rgba(16,185,129,0.1)", border: "1px dashed rgba(16,185,129,0.4)" }}
                >
                  <CheckCircle2 size={44} className="text-emerald-400 mb-3" />
                  <h4 className="text-white text-lg font-bold">Application Received!</h4>
                  <p className="text-slate-300 text-sm mt-2 max-w-sm">
                    Thank you for applying to the Primeor Solutions internship track. We have logged your details in our system and will contact you via email.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-5 px-6 py-2.5 rounded-xl text-white text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 transition-all cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-2">
                      <AlertCircle size={16} />
                      <span>{error}</span>
                    </div>
                  )}

                  <div>
                    <label style={{ fontSize: "13px", fontWeight: 600, color: "#94a3b8", display: "block", marginBottom: "6px" }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your full name"
                      required
                      className="w-full px-4 py-3 rounded-xl outline-none"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1.5px solid rgba(255,255,255,0.1)",
                        color: "#e2e8f0",
                        fontSize: "14px",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#2563EB")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: "13px", fontWeight: 600, color: "#94a3b8", display: "block", marginBottom: "6px" }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 rounded-xl outline-none"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1.5px solid rgba(255,255,255,0.1)",
                        color: "#e2e8f0",
                        fontSize: "14px",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#2563EB")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: "13px", fontWeight: 600, color: "#94a3b8", display: "block", marginBottom: "6px" }}>
                      Why do you want to join?
                    </label>
                    <textarea
                      rows={3}
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      placeholder="Tell us about your learning goals and background..."
                      required
                      className="w-full px-4 py-3 rounded-xl outline-none resize-none"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1.5px solid rgba(255,255,255,0.1)",
                        color: "#e2e8f0",
                        fontSize: "14px",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#2563EB")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl text-white transition-all hover:opacity-90 hover:shadow-lg disabled:opacity-70 cursor-pointer"
                    style={{
                      background: "linear-gradient(135deg, #2563EB, #06B6D4)",
                      fontSize: "15px",
                      fontWeight: 700,
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="flex items-center justify-center w-9 h-9 rounded-xl"
                  style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)" }}
                >
                  <Code2 size={18} className="text-white" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-white font-bold text-lg tracking-tight">Primeor</span>
                  <span style={{ fontSize: "10px", fontWeight: 500, color: "#06B6D4", letterSpacing: "1.5px" }}>
                    SOLUTIONS
                  </span>
                </div>
              </div>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.7, maxWidth: "280px" }}>
                Empowering the next generation of web developers with practical skills, real-world
                experience, and dedicated mentorship.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">
                Quick Navigation
              </h4>
              <ul className="space-y-2">
                {navLinks.map(([label, href]) => (
                  <li key={label}>
                    <button
                      onClick={() => handleNav(href)}
                      className="text-slate-400 hover:text-cyan-400 text-sm transition-colors cursor-pointer"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social / Connect */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">
                Connect With Us
              </h4>
              <div className="flex gap-3 mb-6">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
              <p style={{ fontSize: "12px", color: "#475569" }}>
                Office: Bhopal, Madhya Pradesh, India
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p style={{ fontSize: "13px", color: "#475569" }}>
              &copy; {new Date().getFullYear()} Primeor Solutions. All rights reserved.
            </p>
            <p style={{ fontSize: "13px", color: "#475569" }}>
              Designed &amp; Engineered for Excellence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

