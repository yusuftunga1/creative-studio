import MagneticButton from "./MagneticButton";
import { Play, Instagram, Youtube, Linkedin, Globe } from "lucide-react";

interface HeroProps {
  onExplore: () => void;
  onOpenVideo: () => void;
}

export default function Hero({ onExplore, onOpenVideo }: HeroProps) {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 overflow-hidden">
      {/* Background Ambient Glows & Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#ff5533]/20 via-[#00e5ff]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Top Tagline */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#ff5533]">
          <span className="w-2 h-2 rounded-full bg-[#ff5533] animate-ping" />
          <span>CREATIVE PRODUCTION & INTERACTIVE DESIGN</span>
        </div>
        <span className="hidden md:inline-block text-xs font-mono text-[#8b92a5] uppercase tracking-widest">
          Available Worldwide · 2026
        </span>
      </div>

      {/* Center Hero Heading */}
      <div className="relative z-10 max-w-6xl mx-auto w-full my-auto text-center md:text-left py-12">
        <h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tighter leading-[0.9] text-[#f4f5f8] mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Visual<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5533] via-[#ff7a5c] to-[#00e5ff]">
            Alchemy.
          </span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
          <p className="text-base sm:text-lg md:text-xl text-[#8b92a5] max-w-xl text-center md:text-left leading-relaxed">
            We craft high-octane films, immersive FPV drone flights, and state-of-the-art interactive digital experiences that redefine brand identities.
          </p>

          {/* Magnetic Showreel Play Button */}
          <div className="flex items-center gap-4">
            <MagneticButton strength={40} onClick={onOpenVideo}>
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#ff5533] to-[#ff7a5c] p-[2px] shadow-2xl shadow-[#ff5533]/40 cursor-pointer group">
                <div className="w-full h-full rounded-full bg-[#0a0b10] flex flex-col items-center justify-center text-white group-hover:bg-transparent transition-colors duration-300">
                  <Play className="w-6 h-6 text-[#ff5533] group-hover:text-white fill-current group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono tracking-widest uppercase mt-1">Reel '26</span>
                </div>
              </div>
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Bottom Row: City, Mouse Scroll & Social Links */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-6">
        <div className="flex items-center gap-2 text-xs font-mono text-[#8b92a5]">
          <Globe className="w-4 h-4 text-[#ff5533]" />
          <span>Istanbul & Bordeaux, FR</span>
        </div>

        {/* Mouse Scroll Widget */}
        <button
          onClick={onExplore}
          className="flex flex-col items-center gap-2 group cursor-pointer text-[#8b92a5] hover:text-[#ff5533] transition-colors"
        >
          <span className="text-[11px] font-mono uppercase tracking-widest">Scroll to Explore</span>
          <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1 group-hover:border-[#ff5533] transition-colors">
            <div className="w-1 h-2 rounded-full bg-[#ff5533] animate-bounce" />
          </div>
        </button>

        {/* Social Icons with Magnetic Hover */}
        <div className="flex items-center gap-4">
          {[
            { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
            { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
          ].map((s, idx) => (
            <MagneticButton key={idx} strength={15} href={s.href} target="_blank" rel="noreferrer">
              <div className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#ff5533] text-[#8b92a5] hover:text-white flex items-center justify-center transition-all duration-200">
                <s.icon className="w-4 h-4" />
              </div>
            </MagneticButton>
          ))}
        </div>
      </div>
    </section>
  );
}
