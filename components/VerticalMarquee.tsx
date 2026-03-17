"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

export default function VerticalMarquee() {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useMotionValue(0);

  const directionFactor = useRef<number>(1);
  const baseVelocity = 2; // base speed

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Increase speed based on scroll velocity
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    x.set(x.get() + moveBy * 50);
  });

  // Calculate rotation modulo
  const rotateTransform = useTransform(x, (v) => `${(v % 100)}%`);

  return (
    <div className="fixed right-0 top-0 h-screen w-12 border-l border-bone/10 hidden md:flex flex-col justify-center items-center overflow-hidden z-50 pointer-events-none bg-gradient-to-b from-transparent via-void/40 to-transparent">
      <motion.div
        className="flex whitespace-nowrap -rotate-90 origin-center text-electric-lime/85 font-mono text-[10px] uppercase tracking-[0.24em]"
        style={{ x: rotateTransform }}
      >
        <span className="block px-4">NEXT.JS — FIREBASE — TAILWIND — UI/UX — </span>
        <span className="block px-4">NEXT.JS — FIREBASE — TAILWIND — UI/UX — </span>
        <span className="block px-4">NEXT.JS — FIREBASE — TAILWIND — UI/UX — </span>
        <span className="block px-4">NEXT.JS — FIREBASE — TAILWIND — UI/UX — </span>
      </motion.div>
    </div>
  );
}
