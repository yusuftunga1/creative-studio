import React, { useRef } from "react";
import gsap from "gsap";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
}

export default function MagneticButton({
  children,
  className = "",
  strength = 35,
  onClick,
  href,
  target,
  rel,
  type,
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const btn = btnRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * strength;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * strength;

    gsap.to(btn, {
      x: x,
      y: y,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    if (!btn) return;

    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.4)",
    });
  };

  const content = (
    <div
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`magnetic-btn ${className}`}
    >
      {children}
    </div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} target={target} rel={rel} className="inline-block">
        {content}
      </a>
    );
  }

  if (type) {
    return (
      <button type={type} onClick={onClick} className="inline-block border-none bg-transparent p-0 cursor-pointer">
        {content}
      </button>
    );
  }

  return (
    <div
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick();
        }
      }}
      className={`inline-block border-none bg-transparent p-0 ${onClick ? "cursor-pointer" : ""}`}
    >
      {content}
    </div>
  );
}
