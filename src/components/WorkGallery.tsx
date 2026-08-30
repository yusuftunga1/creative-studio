import { useState } from "react";
import MagneticButton from "./MagneticButton";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: "01",
    title: "Neon Drift 8K",
    category: "fpv",
    categoryLabel: "Aerial Dynamics",
    client: "McLaren Automotive",
    year: "2026",
    img: "/images/work_drift.jpg",
  },
  {
    id: "02",
    title: "Whispers of the Wild",
    category: "cinema",
    categoryLabel: "Nature Documentary",
    client: "The North Face",
    year: "2026",
    img: "/images/work_nature.jpg",
  },
  {
    id: "03",
    title: "Quantum Interface",
    category: "design",
    categoryLabel: "Web3 Experience",
    client: "CyberTech Global",
    year: "2025",
    img: "/images/work_web3.jpg",
  },
  {
    id: "04",
    title: "Vertical City",
    category: "fpv",
    categoryLabel: "Drone Architecture",
    client: "Emaar Properties",
    year: "2025",
    img: "/images/work_architecture.jpg",
  },
];

export default function WorkGallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-28 px-6 md:px-12 bg-[#0a0b10] border-t border-white/5 relative scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#00e5ff]" />
              <span className="text-xs font-mono tracking-widest text-[#00e5ff] uppercase">
                // Selected Archive
              </span>
            </div>
            <h2
              className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-[#f4f5f8]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Featured Works.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Projects" },
              { id: "cinema", label: "Film & Video" },
              { id: "fpv", label: "FPV Drone" },
              { id: "design", label: "3D & Design" },
            ].map((f) => (
              <MagneticButton key={f.id} strength={10} onClick={() => setActiveFilter(f.id)}>
                <span
                  className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                    activeFilter === f.id
                      ? "bg-[#00e5ff] text-[#0a0b10] font-bold"
                      : "bg-white/5 text-[#8b92a5] hover:text-white hover:bg-white/10"
                  }`}
                >
                  {f.label}
                </span>
              </MagneticButton>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden bg-[#12141c] border border-white/10 flex flex-col justify-between cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141c] via-transparent to-transparent opacity-80" />

                {/* Floating Top Info */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#0a0b10]/80 backdrop-blur-md border border-white/10 text-[#00e5ff]">
                    {item.categoryLabel}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#ff5533] text-white flex items-center justify-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-xl shadow-[#ff5533]/40">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="p-8 pt-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#8b92a5] mb-2">
                  <span>CLIENT: {item.client}</span>
                  <span>{item.year}</span>
                </div>
                <h3
                  className="text-2xl font-bold uppercase tracking-tight text-[#f4f5f8] group-hover:text-[#ff5533] transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
