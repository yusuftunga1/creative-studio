import { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import CustomCursor from "./components/CustomCursor";
import PageTransition from "./components/PageTransition";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WorkGallery from "./components/WorkGallery";
import References from "./components/References";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { X } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionTitle, setTransitionTitle] = useState("STUDIO");
  const [showVideoModal, setShowVideoModal] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleNavigate = (tab: string) => {
    if (tab === activeTab) return;

    const titles: Record<string, string> = {
      home: "LAB STUDIO",
      cinema: "FILM & DIRECTION",
      fpv: "FPV & 3D DRONE",
      design: "DIGITAL DESIGN",
      studio: "THE STUDIO",
      contact: "START PROJECT",
    };

    setTransitionTitle(titles[tab] || "STUDIO");
    setIsTransitioning(true);

    setTimeout(() => {
      setActiveTab(tab);
      if (tab === "home") {
        lenisRef.current?.scrollTo(0, { duration: 1.2 });
      } else if (tab === "cinema" || tab === "fpv" || tab === "design") {
        const servicesEl = document.getElementById("services");
        if (servicesEl) lenisRef.current?.scrollTo(servicesEl, { duration: 1.2 });
      } else if (tab === "contact") {
        const contactEl = document.getElementById("contact");
        if (contactEl) lenisRef.current?.scrollTo(contactEl, { duration: 1.2 });
      }
    }, 600);
  };

  const handleExplore = () => {
    const servicesEl = document.getElementById("services");
    if (servicesEl) {
      lenisRef.current?.scrollTo(servicesEl, { duration: 1.2 });
    }
  };

  const handleScrollToTop = () => {
    lenisRef.current?.scrollTo(0, { duration: 1.5 });
  };

  return (
    <div className="relative min-h-screen bg-[#0a0b10] text-[#f4f5f8] overflow-hidden">
      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Custom Lerp Cursor */}
      <CustomCursor />

      {/* Le-Lab Style Curtain Wipe Transition */}
      <PageTransition
        isTransitioning={isTransitioning}
        onTransitionComplete={() => setIsTransitioning(false)}
        pageTitle={transitionTitle}
      />

      {/* Fixed Navbar with Magnetic CTAs */}
      <Navbar activeTab={activeTab} onNavigate={handleNavigate} />

      {/* Main Content Sections */}
      <main>
        <Hero
          onExplore={handleExplore}
          onOpenVideo={() => setShowVideoModal(true)}
        />
        <Services onSelectService={handleNavigate} />
        <WorkGallery />
        <References onContactClick={() => handleNavigate("contact")} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onScrollToTop={handleScrollToTop} />

      {/* Showreel Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300">
          <button
            onClick={() => setShowVideoModal(false)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#ff5533] transition-colors"
            aria-label="Close Showreel"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden bg-[#12141c] border border-white/10 shadow-2xl">
            <iframe
              src="https://player.vimeo.com/video/435165842?autoplay=1&color=ff5533&title=0&byline=0&portrait=0"
              className="w-full h-full border-0"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Studio Reel"
            />
          </div>
        </div>
      )}
    </div>
  );
}
