import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let posX = mouseX;
    let posY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    let animId: number;
    const render = () => {
      // Linear interpolation (LERP) for smooth dragging trail
      posX += (mouseX - posX) * 0.15;
      posY += (mouseY - posY) * 0.15;

      if (followerRef.current) {
        followerRef.current.style.left = `${posX}px`;
        followerRef.current.style.top = `${posY}px`;
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animId = requestAnimationFrame(render);

    // Hover detection for clickable items
    const handleElementHover = () => {
      followerRef.current?.classList.add("cursor-hover");
    };
    const handleElementLeave = () => {
      followerRef.current?.classList.remove("cursor-hover");
    };

    const attachHoverListeners = () => {
      const interactables = document.querySelectorAll("a, button, input, textarea, [data-cursor-hover]");
      interactables.forEach((el) => {
        el.addEventListener("mouseenter", handleElementHover);
        el.addEventListener("mouseleave", handleElementLeave);
      });
    };

    attachHoverListeners();

    // Re-attach on DOM changes (e.g. view changes)
    const observer = new MutationObserver(attachHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot hidden md:block" />
      <div ref={followerRef} className="custom-cursor-follower hidden md:block" />
    </>
  );
}
