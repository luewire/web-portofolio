"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";

// Using placeholder constants instead of image imports since this was just reset
const imgEbookin = { src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop' };
const imgKamar = { src: 'https://images.unsplash.com/photo-1541888046487-eb89286ebc16?q=80&w=2564&auto=format&fit=crop' };
const imgLouis = { src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2564&auto=format&fit=crop' };

const easing = [0.16, 1, 0.3, 1];

const projects = [
  {
    title: "EBOOKIN-AJA",
    desc: "A digital reading platform built with Next.js and Firebase. Focusing on typography and minimal interfaces.",
    image: imgEbookin.src, // Normally we'd use next/image but since we wiped Vite we will use standard img or require
    category: "Fullstack / UI",
    rotation: "-2deg",
  },
  {
    title: "KAMAR TAMU",
    desc: "Property brand identity and website section development during PKL.",
    image: imgKamar.src,
    category: "Frontend",
    rotation: "1deg",
  },
  {
    title: "THE LOUIS",
    desc: "Pixel art defense game project combining retro aesthetics with modern mechanics.",
    image: imgLouis.src,
    category: "Game Dev",
    rotation: "-1deg",
  },
];

type Project = (typeof projects)[number];

export default function ProjectsHorizontal() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Translate container horizontally
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]); // 3 items = -66.66%

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-bone text-void section-glow">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_15%,rgba(8,8,8,0.06),transparent_38%),radial-gradient(circle_at_85%_75%,rgba(8,8,8,0.09),transparent_42%)]" />
      {/* Sticky container tracking the 300vh height */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">

        {/* Horizontal moving wrapper */}
        <motion.div style={{ x }} className="flex h-full w-[300vw]">

          {projects.map((project, i) => {
            return (
              <ProjectPane
                key={i}
                project={project}
                index={i}
                progress={scrollYProgress}
              />
            );
          })}

        </motion.div>

        {/* Section Title Overlay */}
        <div className="absolute top-12 left-12 mix-blend-difference z-50 pointer-events-none text-bone">
          <span className="font-mono text-xs">// FEATURED PROJECTS</span>
        </div>
      </div>
    </section>
  );
}

function ProjectPane({ project, index, progress }: { project: Project; index: number; progress: MotionValue<number> }) {
  const imgRef = useRef<HTMLDivElement>(null);

  // Subtle Parallax effect on the image Y axis relative to scroll progress
  // We use the overall progress to drive subtle movements.
  // A better way is using a local useScroll, but since it's horizontally scrolling, 
  // we tie the Y parallax to the global section progress.
  const yParallax = useTransform(progress, [0, 1], ["-10%", "10%"]);

  return (
    <div className="group h-full w-screen flex-shrink-0 flex flex-col md:flex-row items-center justify-center p-6 md:p-20 gap-10 md:gap-14 relative">

      {/* Huge Image (60% width) */}
      <div className="w-full md:w-[60%] h-[45vh] md:h-[78vh] overflow-hidden bg-void relative panel-soft rounded-2xl group-hover:border-electric-lime/30 group-hover:shadow-[0_0_40px_-15px_rgba(200,255,0,0.25)] transition-all duration-700">
        <span className="absolute left-4 top-4 z-20 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/70 group-hover:text-electric-lime transition-colors duration-500">0{index + 1}</span>
        <span className="absolute right-4 bottom-4 z-20 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/70 group-hover:text-electric-lime transition-colors duration-500">Case Study</span>
        <motion.div ref={imgRef} className="w-full h-[120%]" style={{ y: yParallax }}>
          {/* Fallback to normal img or a solid color since we don't have the exact next/image imports locally tested */}
          <div
            className="w-full h-full bg-cover bg-center opacity-70 scale-[1.08] transition-all duration-[1.5s] ease-out group-hover:opacity-100 group-hover:scale-100"
            style={{ backgroundImage: `url(${project.image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop'})` }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-void/10 to-transparent group-hover:from-void/40 transition-colors duration-700" />
      </div>

      {/* Title & Desc */}
      <div className="w-full md:w-[40%] flex flex-col justify-center">
        <span className="font-mono text-xs text-void/60 mb-4 uppercase tracking-[0.12em] group-hover:text-void transition-colors duration-500">{project.category}</span>

        {/* Distorted Title */}
        <motion.h2
          className="font-bebas text-6xl md:text-8xl leading-[0.8] mb-6 text-void tracking-tighter"
          style={{ rotate: project.rotation }}
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1, ease: easing }}
          viewport={{ amount: 0.3 }}
        >
          {project.title}
        </motion.h2>

        <motion.p
          className="font-serif text-xl md:text-2xl leading-[1.8] text-void/80 max-w-md normal-case tracking-normal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: easing }}
          viewport={{ amount: 0.3 }}
        >
          {project.desc}
        </motion.p>

        <motion.span
          className="mt-8 inline-flex w-fit items-center border border-void/20 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-void/70"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: easing }}
          viewport={{ amount: 0.3 }}
        >
          Scroll for next work
        </motion.span>
      </div>

    </div>
  );
}
