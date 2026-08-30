import MagneticButton from "./MagneticButton";
import { Film, Eye, Box, ArrowRight, CheckCircle2 } from "lucide-react";

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

const SERVICES = [
  {
    num: "01",
    id: "cinema",
    title: "Motion & Cinematic Storytelling",
    category: "Narrative & Commercial",
    desc: "We bring high-end visions to life through global commercial campaigns and cinematic artistry. From pre-production to masterful color grading.",
    tags: ["Global Campaigns", "Creative Direction", "Color Mastery", "Original Sound"],
    icon: Film,
    accent: "#ff5533",
    img: "/images/service_cinema.jpg",
  },
  {
    num: "02",
    id: "fpv",
    title: "Aerial & Dynamic Motion",
    category: "Advanced Flight Ops",
    desc: "Unlocking impossible perspectives with state-of-the-art heavy-lift drones and precision FPV maneuvers tailored for high-speed tracking.",
    tags: ["Heavy-Lift Drones", "Precision FPV", "Vehicle Tracking", "8K Raw"],
    icon: Eye,
    accent: "#00e5ff",
    img: "/images/service_fpv.jpg",
  },
  {
    num: "03",
    id: "design",
    title: "Interactive Web & Virtual Spaces",
    category: "Creative Technology",
    desc: "Forging the future of digital presence through award-winning WebGL interfaces, robust design systems, and unparalleled user experiences.",
    tags: ["Creative Dev", "UI/UX Architecture", "Spatial Computing", "Immersive Web"],
    icon: Box,
    accent: "#ccff00",
    img: "/images/service_design.jpg",
  },
];

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section id="services" className="py-28 px-6 md:px-12 bg-[#0c0d14] relative overflow-hidden">
      {/* Background Decor */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-[#ff5533]" />
          <span className="text-xs font-mono tracking-widest text-[#ff5533] uppercase">
            // Core Expertise
          </span>
        </div>
        <h2
          className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-[#f4f5f8]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Disciplines &<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5533] to-[#00e5ff]">
            Creative Capabilities.
          </span>
        </h2>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto space-y-32">
        {SERVICES.map((srv, index) => {
          const isReversed = index % 2 === 1;
          const Icon = srv.icon;

          return (
            <div
              key={srv.id}
              id={srv.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group scroll-mt-28`}
            >
              {/* Image Container */}
              <div
                className={`lg:col-span-7 relative overflow-hidden rounded-3xl border border-white/10 bg-[#12141c] ${
                  isReversed ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={srv.img}
                    alt={srv.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out opacity-75 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d14] via-transparent to-transparent opacity-60" />
                </div>

                {/* Badge Overlay */}
                <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0b10]/80 backdrop-blur-md border border-white/10">
                  <Icon className="w-4 h-4" style={{ color: srv.accent }} />
                  <span className="text-xs font-mono uppercase tracking-wider text-white">
                    {srv.category}
                  </span>
                </div>
              </div>

              {/* Text Container */}
              <div
                className={`lg:col-span-5 flex flex-col justify-center relative ${
                  isReversed ? "lg:order-1" : "lg:order-2"
                }`}
              >
                {/* Big Number Watermark */}
                <span className="text-7xl sm:text-9xl number-outline select-none leading-none mb-2">
                  {srv.num}
                </span>

                <h3
                  className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#f4f5f8] mb-4 group-hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {srv.title}
                </h3>

                <p className="text-sm sm:text-base text-[#8b92a5] leading-relaxed mb-6">
                  {srv.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {srv.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-xs font-mono px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[#8b92a5]"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#ff5533]" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Explore Magnetic Button */}
                <div>
                  <MagneticButton strength={25} onClick={() => onSelectService(srv.id)}>
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 hover:bg-[#ff5533] border border-white/10 hover:border-transparent text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 group/btn">
                      <span>Explore Service</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </MagneticButton>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
