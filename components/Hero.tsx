"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const NAME = "RIDHO".split("");
const easing = [0.16, 1, 0.3, 1]; // Magnetic feel

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  // Sticky scale down and fade out
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={container} className="relative h-[160vh] w-full bg-void noise-overlay section-glow">
      <div className="absolute left-0 top-0 z-0 h-[55vh] w-full bg-gradient-to-b from-bone/5 to-transparent mix-blend-overlay" />
      <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-24 top-1/3 z-0 h-72 w-72 rounded-full bg-electric-lime/15 blur-[100px]" />
      <motion.div animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -right-32 bottom-20 z-0 h-[500px] w-[500px] rounded-full bg-bone/10 blur-[120px]" />

      <motion.div
        className="sticky top-0 z-10 h-screen w-full flex flex-col items-center justify-center overflow-hidden"
        style={{ scale, opacity, y }}
      >
        {/* Horizontal Marquee Overlay (Slow, Behind Name or over it subtly) */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden pointer-events-none z-10 opacity-25">
          <motion.div
            className="flex whitespace-nowrap font-bebas text-[8vw] text-bone tracking-tighter"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            <span className="px-8">WEB DEVELOPER // UI/UX DESIGNER // SMK TELKOM //</span>
            <span className="px-8">WEB DEVELOPER // UI/UX DESIGNER // SMK TELKOM //</span>
          </motion.div>
        </div>

        {/* Giant Hollow Stroke Name */}
        <div className="relative z-20 flex overflow-hidden px-3">
          {NAME.map((char, i) => (
            <motion.h1
              key={i}
              className="font-bebas text-[22vw] md:text-[20vw] leading-[0.8] text-outline-bone select-none drop-shadow-[0_0_18px_rgba(240,237,230,0.2)]"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 1.2,
                ease: easing,
                delay: i * 0.05 + 0.2, // Stagger 0.05s
              }}
            >
              {char}
            </motion.h1>
          ))}
        </div>

        {/* Small intro text below */}
        <motion.div
          className="absolute bottom-8 left-4 right-4 md:right-auto md:bottom-12 md:left-12 flex flex-col gap-2 z-20 panel-soft px-5 py-4 md:px-6 md:py-5 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: easing }}
        >
          <p className="font-mono text-xs text-electric-lime">// PORTFOLIO Y2026</p>
          <h2 className="font-serif text-xl md:text-2xl text-bone/90 max-w-sm normal-case tracking-normal">
            Digital reading platforms, pixel art games, and brand identities.
          </h2>
        </motion.div>

        {/* Origin / Role Top Right */}
        <motion.div
          className="absolute top-7 right-4 md:right-12 md:top-10 flex flex-col text-right gap-1 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <span className="font-mono text-[10px] text-bone/70 uppercase">Student @ SMK Telkom Purwokerto</span>
          <span className="font-mono text-[10px] text-bone/70 uppercase">Web Dev & UI Architect</span>
        </motion.div>

        <div className="absolute bottom-7 right-4 md:bottom-10 md:right-12 z-20 hidden md:block">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60">Scroll to explore</span>
        </div>

      </motion.div>
    </section>
  );
}
