import MagneticButton from "./MagneticButton";
import { ArrowUp } from "lucide-react";

interface FooterProps {
  onScrollToTop: () => void;
}

export default function Footer({ onScrollToTop }: FooterProps) {
  return (
    <footer className="py-12 px-6 md:px-12 bg-[#06070a] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5533]" />
          <span className="text-xl font-extrabold tracking-tight uppercase" style={{ fontFamily: "var(--font-display)" }}>
            LAB<span className="text-[#ff5533]">.</span>STUDIO
          </span>
          <span className="text-xs font-mono text-[#8b92a5] ml-4">
            © 2026 LAB STUDIO. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono text-[#8b92a5]">
          <a href="#services" className="hover:text-white transition-colors">DISCIPLINES</a>
          <a href="#work" className="hover:text-white transition-colors">ARCHIVE</a>
          <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
        </div>

        <MagneticButton strength={25} onClick={onScrollToTop}>
          <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#ff5533] border border-white/10 flex items-center justify-center text-white transition-all duration-300">
            <ArrowUp className="w-4 h-4" />
          </div>
        </MagneticButton>
      </div>
    </footer>
  );
}
