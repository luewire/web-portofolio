"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const customEase = [0.16, 1, 0.3, 1];

const experiences = [
  {
    num: "01",
    role: "Freelance",
    title: "UI/UX DESIGNER",
    desc: "Designing intentional and brutalist interfaces that focus on typographic hierarchy and raw aesthetic form over convention.",
  },
  {
    num: "02",
    role: "Kampung Inggris",
    title: "FRONTEND DEV (PKL)",
    desc: "Redesigning and developing responsive landing pages for educational platforms with heavy focus on load-time performance.",
  },
  {
    num: "03",
    role: "Project Base",
    title: "INTERACTION ENGINEER",
    desc: "Creating web experiences heavily focused on WebGL, Framer Motion physics, and non-standard grid layouts.",
  },
];

type ExperienceData = (typeof experiences)[number];

export default function Experience() {
  const sectionRef = useRef(null);
  
  // Title Double Mask Scroll Logic
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // The solid fill mask reveals from 0% width to 100% width based on scroll
  const solidMaskClip = useTransform(scrollYProgress, [0.3, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-void text-bone flex flex-col justify-center py-40 overflow-hidden cursor-default selection:bg-electric-lime selection:text-void">
      
      {/* Ghost Guides (Architectural Lines at 10% and 90%) */}
      <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-bone/5 pointer-events-none z-0" />
      <div className="absolute top-0 bottom-0 right-[10%] w-[1px] bg-bone/5 pointer-events-none z-0" />

      {/* Extreme Typography: 18vw Double-Layer Mask Title */}
      <div className="relative w-full overflow-hidden flex justify-center mb-24 z-10 pointer-events-none select-none">
        
        {/* Layer 1: Hollow Outline (Always visible) */}
        <h2 className="font-bebas text-[18vw] leading-[0.8] tracking-tighter text-outline-bone opacity-30 w-fit">
          EXPERIENCE
        </h2>
        
        {/* Layer 2: Solid Fill (Revealed on Scroll) */}
        <motion.h2 
          className="font-bebas text-[18vw] leading-[0.8] tracking-tighter text-bone absolute top-0 w-fit"
          style={{ clipPath: solidMaskClip }}
        >
          EXPERIENCE
        </motion.h2>
      </div>

      {/* 12-Column Grid Item Container (Restricted to inner 80% between guides) */}
      <div className="relative z-20 w-[80%] mx-auto flex flex-col gap-10">
        {experiences.map((exp, i) => (
          <ExperienceRow key={i} exp={exp} index={i} />
        ))}
      </div>

    </section>
  );
}

function ExperienceRow({ exp, index }: { exp: ExperienceData; index: number }) {
  const rowRef = useRef(null);
  const isInView = useInView(rowRef, { amount: 0.5, once: true });

  return (
    <motion.div 
      ref={rowRef}
      className="group relative grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-y-0 w-full py-16 px-4 md:px-8 transition-colors duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#F5F5F0]/[0.02] border-t border-transparent"
    >
      {/* Col 1: Item Number */}
      <div className="col-span-1 md:col-span-1 pt-2">
        <motion.span 
          className="font-mono text-sm text-bone/60"
          initial={{ y: -30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: customEase, delay: index * 0.1 }}
        >
          {exp.num}
        </motion.span>
      </div>

      {/* Col 2-4: Role / Company */}
      <div className="col-span-1 md:col-span-3 pt-2">
        <motion.span 
          className="font-mono text-xs uppercase tracking-[0.15em] text-bone/60 block"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 + (index * 0.1) }}
        >
          {exp.role}
        </motion.span>
      </div>

      {/* Col 5-12: Giant Title + Italic Desc */}
      <div className="col-span-1 md:col-span-8 flex flex-col items-start md:items-end md:text-right">
        
        {/* Horizontal Clip-Path Reveal for Title */}
        <motion.h3 
          className="font-bebas text-[12vw] md:text-[6vw] leading-[0.8] tracking-tighter text-bone group-hover:text-electric-lime transition-colors duration-500"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{ duration: 1.4, ease: customEase, delay: 0.2 + (index * 0.1) }}
        >
          {exp.title}
        </motion.h3>

        {/* Desc fading in from right */}
        <motion.p 
          className="font-serif italic text-lg md:text-2xl text-bone/70 max-w-[400px] leading-[1.6] mt-6 group-hover:text-bone transition-colors duration-500"
          initial={{ x: 30, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: customEase, delay: 0.5 + (index * 0.1) }}
        >
          {exp.desc}
        </motion.p>
      </div>

      {/* Hover Line Interaction (Bottom) */}
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-bone/10">
        <span className="absolute top-0 left-0 h-full w-0 bg-electric-lime group-hover:w-full transition-all duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)] origin-left" />
      </div>

    </motion.div>
  );
}
