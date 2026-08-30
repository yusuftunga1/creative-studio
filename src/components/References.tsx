import MagneticButton from "./MagneticButton";
import { Sparkles } from "lucide-react";

interface ReferencesProps {
  onContactClick: () => void;
}

const BRANDS = [
  "MCLAREN", "NORTH FACE", "HASSELBLAD", "CYBERTECH", "YVES SAINT LAURENT",
  "SAMSUNG", "ROLEX", "EMAAR", "PRADA", "VIMEO"
];

export default function References({ onContactClick }: ReferencesProps) {
  return (
    <section id="studio" className="py-24 px-6 md:px-12 bg-[#0c0d14] border-t border-white/5 relative overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-xs font-mono text-[#8b92a5] uppercase tracking-widest block mb-4">
          // Trusted By Global Pioneers
        </span>
        <h2
          className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#f4f5f8] mb-16"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Selected Collaborations
        </h2>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-20">
          {BRANDS.map((brand, idx) => (
            <div
              key={idx}
              className="h-24 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#ff5533]/40 flex items-center justify-center text-sm sm:text-base font-bold font-mono tracking-widest text-[#8b92a5] hover:text-white hover:bg-white/[0.05] transition-all duration-300"
            >
              {brand}
            </div>
          ))}
        </div>

        {/* Big Magnetic Contact Trigger Banner */}
        <div className="relative rounded-3xl p-12 md:p-16 bg-gradient-to-b from-[#161822] to-[#0d0e15] border border-white/10 overflow-hidden flex flex-col items-center">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#ff5533]/20 rounded-full blur-3xl pointer-events-none" />

          <Sparkles className="w-8 h-8 text-[#ff5533] mb-6 animate-spin" style={{ animationDuration: "12s" }} />
          <h3
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white max-w-2xl leading-tight mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Have a bold project in mind?
          </h3>
          <p className="text-[#8b92a5] max-w-lg mb-10 text-sm sm:text-base">
            Let’s discuss your vision, from aerial drone cinematography to interactive digital platforms.
          </p>

          <MagneticButton strength={45} onClick={onContactClick}>
            <div className="px-10 py-5 rounded-full bg-[#ff5533] hover:bg-[#ff6f52] text-white font-extrabold text-sm uppercase tracking-widest transition-all duration-300 shadow-2xl shadow-[#ff5533]/40">
              Start a Conversation
            </div>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
