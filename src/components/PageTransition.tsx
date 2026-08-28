import { useEffect, useRef } from "react";
import gsap from "gsap";

interface PageTransitionProps {
  isTransitioning: boolean;
  onTransitionComplete: () => void;
  pageTitle?: string;
}

export default function PageTransition({
  isTransitioning,
  onTransitionComplete,
  pageTitle = "STUDIO",
}: PageTransitionProps) {
  const curtainRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isTransitioning || !curtainRef.current) return;

    const curtain = curtainRef.current;
    const text = textRef.current;

    const tl = gsap.timeline({
      onComplete: () => {
        onTransitionComplete();
      },
    });

    // Reset initial state
    tl.set(curtain, {
      yPercent: 100,
      display: "flex",
    });
    tl.set(text, {
      opacity: 0,
      y: 30,
    });

    // Wipe UP to cover screen
    tl.to(curtain, {
      yPercent: 0,
      duration: 0.6,
      ease: "power4.inOut",
    });

    // Reveal logo / text
    tl.to(text, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    }, "-=0.2");

    // Pause briefly
    tl.to({}, { duration: 0.3 });

    // Wipe UP to reveal new content
    tl.to(curtain, {
      yPercent: -100,
      duration: 0.7,
      ease: "power4.inOut",
    });

    tl.set(curtain, { display: "none" });

    return () => {
      tl.kill();
    };
  }, [isTransitioning, onTransitionComplete]);

  return (
    <div
      ref={curtainRef}
      className="fixed inset-0 z-[999999] hidden flex-col items-center justify-center bg-[#ff5533] text-[#0a0b10] pointer-events-auto"
      style={{ willChange: "transform" }}
    >
      <div ref={textRef} className="text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter" style={{ fontFamily: "var(--font-display)" }}>
          {pageTitle}
        </h2>
        <div className="w-12 h-1 bg-[#0a0b10] mx-auto mt-4 rounded-full" />
      </div>
    </div>
  );
}
