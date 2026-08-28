import React, { useState } from "react";
import MagneticButton from "./MagneticButton";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Audiovisual Production",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-12 bg-[#090a0f] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-[#ff5533]" />
                <span className="text-xs font-mono tracking-widest text-[#ff5533] uppercase">
                  // Direct Line
                </span>
              </div>
              <h2
                className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Let’s create together.
              </h2>
              <p className="text-[#8b92a5] text-base leading-relaxed mb-12">
                We take on a limited number of select productions and digital projects each quarter to ensure uncompromising craftsmanship.
              </p>

              <div className="space-y-6 text-sm font-mono">
                <div className="flex items-center gap-4 text-[#f4f5f8]">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#ff5533]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#8b92a5] block uppercase">General Inquiries</span>
                    <span>hello@lab.studio</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-[#f4f5f8]">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#00e5ff]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#8b92a5] block uppercase">Headquarters</span>
                    <span>Istanbul, TR & Bordeaux, FR</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-[#f4f5f8]">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#ccff00]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#8b92a5] block uppercase">Studio Phone</span>
                    <span>+90 (555) 000-LABS</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 text-xs font-mono text-[#8b92a5]">
              STATUS: <span className="text-[#00e5ff] font-bold">ACCEPTING Q3/Q4 COMMISSIONS</span>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-[#12141c] border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            {submitted ? (
              <div className="min-h-[400px] flex flex-col items-center justify-center text-center">
                <CheckCircle2 className="w-16 h-16 text-[#ff5533] mb-6 animate-bounce" />
                <h3
                  className="text-3xl font-bold uppercase tracking-tight text-white mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Message Received
                </h3>
                <p className="text-[#8b92a5] max-w-md text-sm mb-8">
                  Thank you, <span className="text-white font-semibold">{form.name}</span>. A producer will reach out within 24 hours.
                </p>
                <MagneticButton strength={20} onClick={() => setSubmitted(false)}>
                  <div className="px-6 py-3 rounded-full bg-white/10 text-white text-xs font-mono uppercase tracking-wider">
                    Send another inquiry
                  </div>
                </MagneticButton>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#8b92a5] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Elena Rostova"
                      className="w-full bg-[#0a0b10] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#4b5266] focus:outline-none focus:border-[#ff5533] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#8b92a5] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="elena@company.com"
                      className="w-full bg-[#0a0b10] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#4b5266] focus:outline-none focus:border-[#ff5533] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8b92a5] mb-2">
                    Primary Interest
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-[#0a0b10] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff5533] transition-colors"
                  >
                    <option value="Audiovisual Production">01. Audiovisual & Commercial Film</option>
                    <option value="FPV Drone Cinematography">02. FPV & Aerial Drone Flight</option>
                    <option value="Digital 3D Design">03. Digital Product & 3D WebGL</option>
                    <option value="Full Studio Retainer">04. Full Creative Direction & Retainer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#8b92a5] mb-2">
                    Brief Project Details
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about the timeline, scope, and goals..."
                    className="w-full bg-[#0a0b10] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#4b5266] focus:outline-none focus:border-[#ff5533] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <MagneticButton strength={30}>
                    <button
                      type="submit"
                      className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#ff5533] hover:bg-[#ff6f52] text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl shadow-[#ff5533]/30"
                    >
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </MagneticButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
