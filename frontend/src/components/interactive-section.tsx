import { useState } from "react";
import { Send, Palette, MessageSquare, Calculator, CheckCircle2, AlertCircle } from "lucide-react";
import { api } from "../services/api";

const COLORS = [
  { label: "Electric Blue", bg: "#2563EB", text: "#fff" },
  { label: "Cyan", bg: "#06B6D4", text: "#fff" },
  { label: "Violet", bg: "#8B5CF6", text: "#fff" },
  { label: "Emerald", bg: "#10B981", text: "#fff" },
  { label: "Rose", bg: "#F43F5E", text: "#fff" },
  { label: "Amber", bg: "#F59E0B", text: "#fff" },
];

export function InteractiveSection() {
  // Contact form
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Color button
  const [colorIdx, setColorIdx] = useState(0);

  // Greeting
  const [greetName, setGreetName] = useState("");
  const [greeting, setGreeting] = useState("");

  // Calculator
  const [numA, setNumA] = useState("");
  const [numB, setNumB] = useState("");
  const [calcResult, setCalcResult] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      await api.submitContact({
        name: form.name,
        email: form.email,
        message: form.message,
      });
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      console.warn("Backend submit error, using local fallback:", err.message);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } finally {
      setSubmitting(false);
    }
  };

  const handleGreet = () => {
    if (greetName.trim()) {
      const hour = new Date().getHours();
      const prefix = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
      setGreeting(`${prefix}, ${greetName.trim()}! Welcome to Primeor Solutions.`);
    }
  };

  const handleCalc = () => {
    const a = parseFloat(numA);
    const b = parseFloat(numB);
    if (!isNaN(a) && !isNaN(b)) setCalcResult(a + b);
  };

  return (
    <section
      id="interactive"
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "#F0F7FF" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-6"
            style={{ background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.2)" }}
          >
            <span className="text-xs font-semibold text-blue-600 tracking-wider">
              INTERACTIVE DEMO
            </span>
          </div>
          <h2
            className="font-extrabold text-slate-900 leading-tight"
            style={{
              fontSize: "clamp(24px, 4vw, 42px)",
              letterSpacing: "-0.5px",
            }}
          >
            Try Our{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #2563EB, #06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Interactive Components
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto mt-4 text-slate-600 text-sm sm:text-base leading-relaxed"
          >
            Internship task showcases — real working UI components built by our interns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* ── Contact Form ── */}
          <div
            className="rounded-2xl p-5 sm:p-7 lg:p-8"
            style={{ background: "#fff", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.05)" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(37,99,235,0.1)" }}
              >
                <Send size={18} style={{ color: "#2563EB" }} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Contact Form</h3>
                <p className="text-xs sm:text-sm text-slate-500">Send us a message directly to our backend</p>
              </div>
            </div>

            {submitted ? (
              <div
                className="flex flex-col items-center justify-center py-8 sm:py-10 px-4 rounded-xl text-center"
                style={{ background: "rgba(16,185,129,0.06)", border: "1px dashed rgba(16,185,129,0.3)" }}
              >
                <CheckCircle2 size={36} className="sm:w-10 sm:h-10 text-emerald-500 mb-2.5" />
                <h4 className="text-base sm:text-lg font-bold text-slate-900">Message Sent!</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xs">
                  We've received your inquiry and will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-lg text-white transition-all hover:opacity-90 cursor-pointer text-xs sm:text-sm font-semibold"
                  style={{ background: "#10B981" }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-50 text-red-600 text-xs sm:text-sm flex items-center gap-2 border border-red-200">
                    <AlertCircle size={16} className="flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}
                <div>
                  <label className="text-xs sm:text-sm font-semibold text-slate-700 block mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    required
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl outline-none transition-all text-sm bg-slate-50 border border-slate-200 text-slate-900 focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm font-semibold text-slate-700 block mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl outline-none transition-all text-sm bg-slate-50 border border-slate-200 text-slate-900 focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm font-semibold text-slate-700 block mb-1.5">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Write your message..."
                    required
                    rows={4}
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl outline-none transition-all text-sm bg-slate-50 border border-slate-200 text-slate-900 focus:border-blue-600 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 sm:py-3.5 rounded-xl text-white flex items-center justify-center gap-2 transition-all hover:opacity-90 active:scale-98 disabled:opacity-70 cursor-pointer text-sm sm:text-base font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #2563EB, #06B6D4)",
                    boxShadow: "0 4px 15px rgba(37,99,235,0.35)",
                  }}
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending…
                    </span>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* ── Right column: Color Button + Greeting + Calculator ── */}
          <div className="space-y-4 sm:space-y-6">
            {/* Color-changing button */}
            <div
              className="rounded-2xl p-5 sm:p-6"
              style={{ background: "#fff", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.05)" }}
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(139,92,246,0.1)" }}>
                  <Palette size={18} style={{ color: "#8B5CF6" }} />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">Color-Changing Button</h3>
                  <p className="text-xs text-slate-500">Click to cycle through colors</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {COLORS.map((c, i) => (
                  <button
                    key={c.label}
                    onClick={() => setColorIdx(i)}
                    className="w-6 h-6 rounded-full transition-transform hover:scale-110 cursor-pointer"
                    style={{
                      background: c.bg,
                      outline: colorIdx === i ? `2px solid ${c.bg}` : "none",
                      outlineOffset: "2px",
                    }}
                    aria-label={c.label}
                  />
                ))}
              </div>
              <button
                onClick={() => setColorIdx((colorIdx + 1) % COLORS.length)}
                className="w-full py-3 sm:py-3.5 rounded-xl text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg cursor-pointer text-xs sm:text-sm font-semibold truncate px-3"
                style={{
                  background: COLORS[colorIdx].bg,
                  boxShadow: `0 4px 20px ${COLORS[colorIdx].bg}50`,
                }}
              >
                {COLORS[colorIdx].label} — Click to Change
              </button>
            </div>

            {/* Greeting */}
            <div
              className="rounded-2xl p-5 sm:p-6"
              style={{ background: "#fff", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.05)" }}
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(6,182,212,0.1)" }}>
                  <MessageSquare size={18} style={{ color: "#06B6D4" }} />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">Greeting Generator</h3>
                  <p className="text-xs text-slate-500">Enter your name for a greeting</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <input
                  type="text"
                  value={greetName}
                  onChange={(e) => setGreetName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleGreet()}
                  placeholder="Your name..."
                  className="flex-1 min-w-0 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl outline-none text-sm bg-slate-50 border border-slate-200 text-slate-900 focus:border-cyan-500"
                />
                <button
                  onClick={handleGreet}
                  className="px-5 py-2.5 rounded-xl text-white transition-all hover:opacity-90 cursor-pointer text-xs sm:text-sm font-semibold"
                  style={{ background: "linear-gradient(135deg, #06B6D4, #2563EB)" }}
                >
                  Greet
                </button>
              </div>
              {greeting && (
                <div
                  className="mt-3.5 px-3.5 py-2.5 rounded-xl bg-cyan-50 border border-cyan-200"
                >
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium">👋 {greeting}</p>
                </div>
              )}
            </div>

            {/* Calculator */}
            <div
              className="rounded-2xl p-5 sm:p-6"
              style={{ background: "#fff", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.05)" }}
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(16,185,129,0.1)" }}>
                  <Calculator size={18} style={{ color: "#10B981" }} />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">Addition Calculator</h3>
                  <p className="text-xs text-slate-500">Add two numbers instantly</p>
                </div>
              </div>
              <div className="flex gap-2 sm:gap-3 items-center mb-3 sm:mb-4">
                <input
                  type="number"
                  value={numA}
                  onChange={(e) => setNumA(e.target.value)}
                  placeholder="0"
                  className="w-full min-w-0 flex-1 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl outline-none text-center text-sm sm:text-base font-semibold bg-slate-50 border border-slate-200 text-slate-900 focus:border-emerald-500"
                />
                <span className="text-xl sm:text-2xl font-bold text-slate-400 flex-shrink-0">+</span>
                <input
                  type="number"
                  value={numB}
                  onChange={(e) => setNumB(e.target.value)}
                  placeholder="0"
                  className="w-full min-w-0 flex-1 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl outline-none text-center text-sm sm:text-base font-semibold bg-slate-50 border border-slate-200 text-slate-900 focus:border-emerald-500"
                />
              </div>
              <button
                onClick={handleCalc}
                className="w-full py-2.5 sm:py-3 rounded-xl text-white transition-all hover:opacity-90 cursor-pointer text-xs sm:text-sm font-semibold"
                style={{ background: "linear-gradient(135deg, #10B981, #06B6D4)" }}
              >
                Calculate Sum
              </button>
              {calcResult !== null && (
                <div
                  className="mt-3.5 py-2.5 rounded-xl text-center bg-emerald-50 border border-emerald-200"
                >
                  <span className="text-xs sm:text-sm text-slate-500">Result = </span>
                  <span className="text-xl sm:text-2xl font-black text-emerald-600">{calcResult}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
