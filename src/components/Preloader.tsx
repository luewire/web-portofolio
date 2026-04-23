"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type PreloaderProps = {
  onComplete?: () => void;
};

export default function Preloader({ onComplete }: PreloaderProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      // The "Ombak" pull up animation
      // We start with a full screen black box
      // Then we animate the bottom edge into a curve while moving the whole thing up
      
      tl.to(pathRef.current, {
        duration: 0.8,
        attr: { d: "M0 0 L100 0 L100 100 Q50 50 0 100 Z" },
        ease: "power2.in"
      });

      tl.to(pathRef.current, {
        duration: 0.6,
        attr: { d: "M0 0 L100 0 L100 0 Q50 0 0 0 Z" },
        ease: "power2.out"
      });

      // Also fade out the background container to be safe
      tl.to(svgRef.current, {
        opacity: 0,
        duration: 0.1
      }, "-=0.1");

    });

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <path
          ref={pathRef}
          d="M0 0 L100 0 L100 100 Q50 100 0 100 Z"
          fill="#0E0E0E"
        />
      </svg>
    </div>
  );
}
