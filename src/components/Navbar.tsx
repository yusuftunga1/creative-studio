import { useState } from "react";
import MagneticButton from "./MagneticButton";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  onNavigate: (tab: string) => void;
}

const NAV_ITEMS = [
  { id: "home", label: "Overview" },
  { id: "cinema", label: "Film & Video" },
  { id: "fpv", label: "FPV & 3D Drone" },
  { id: "design", label: "Digital Design" },
  { id: "studio", label: "The Studio" },
];

export default function Navbar({ activeTab, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between pointer-events-none">
        {/* Left: Studio Logo */}
        <div className="pointer-events-auto">
          <MagneticButton strength={20} onClick={() => handleNavClick("home")}>
            <div className="flex items-center gap-2 group cursor-pointer">
              <span className="w-3 h-3 rounded-full bg-[#ff5533] animate-pulse" />
              <span className="text-xl md:text-2xl font-extrabold tracking-tight uppercase" style={{ fontFamily: "var(--font-display)" }}>
                LAB<span className="text-[#ff5533]">.</span>STUDIO
              </span>
            </div>
          </MagneticButton>
        </div>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#12141c]/80 backdrop-blur-md border border-white/10 px-3 py-2 rounded-full pointer-events-auto shadow-2xl">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <MagneticButton key={item.id} strength={15} onClick={() => handleNavClick(item.id)}>
                <span
                  className={`px-5 py-2 text-xs font-medium uppercase tracking-wider rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-[#ff5533] text-white font-semibold shadow-lg shadow-[#ff5533]/30"
                      : "text-[#8b92a5] hover:text-white hover:bg-white/5"
                  }`}
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {item.label}
                </span>
              </MagneticButton>
            );
          })}
        </nav>

        {/* Right: Magnetic Contact CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 pointer-events-auto">
          <div className="hidden sm:block">
            <MagneticButton strength={30} onClick={() => handleNavClick("contact")}>
              <div className="flex items-center gap-2 bg-[#ff5533] hover:bg-[#ff6f52] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl shadow-[#ff5533]/25 group">
                <span>Start Project</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </MagneticButton>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-12 h-12 rounded-full bg-[#12141c]/90 border border-white/10 flex items-center justify-center text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#ff5533]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0a0b10]/95 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 lg:hidden animate-in fade-in duration-300">
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase tracking-widest text-[#ff5533] font-mono">// Navigation</span>
            {NAV_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left text-3xl font-bold uppercase tracking-tight flex items-center justify-between text-[#f4f5f8] hover:text-[#ff5533] transition-colors group"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-[#8b92a5] opacity-50 group-hover:opacity-100">
                  0{idx + 1}
                </span>
              </button>
            ))}
            <button
              onClick={() => handleNavClick("contact")}
              className="mt-4 flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#ff5533] text-white font-bold text-sm tracking-widest uppercase"
            >
              <Sparkles className="w-4 h-4" />
              <span>Contact Studio</span>
            </button>
          </div>

          <div className="border-t border-white/10 pt-6 flex items-center justify-between text-xs text-[#8b92a5]" style={{ fontFamily: "var(--font-mono)" }}>
            <span>Istanbul / Bordeaux</span>
            <span>lab.studio © 2026</span>
          </div>
        </div>
      )}
    </>
  );
}
