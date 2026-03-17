"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const easing = [0.16, 1, 0.3, 1];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  return (
    <footer className="w-full bg-bone py-24 md:py-40 flex flex-col items-center justify-center relative overflow-hidden section-glow">
      <motion.div animate={{ opacity: [0.8, 1, 0.8] }} transition={{ duration: 5, repeat: Infinity }} className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(8,8,8,0.15),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(8,8,8,0.1),transparent_42%)]" />
      {/* Tiny decorative elements */}
      <div className="absolute top-9 left-4 md:left-12 z-10">
        <span className="font-mono text-void/40 text-[10px] uppercase tracking-[0.2em]">[ END OF DOCUMENT ]</span>
      </div>

      <div className="absolute top-9 right-4 md:right-12 z-10">
        <span className="font-mono text-void/40 text-[10px] uppercase tracking-[0.2em]">{new Date().getFullYear()} ©</span>
      </div>

      <div ref={ref} className="relative z-10 flex flex-col items-center group cursor-pointer mt-10">
        <motion.span
          className="font-mono text-void/75 text-xs uppercase tracking-[0.24em] mb-6 transition-colors duration-500 group-hover:text-void"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: easing }}
        >
          Initiate Contact
        </motion.span>

        <div className="overflow-hidden">
          <motion.a
            href="mailto:luewire@gmail.com"
            className="font-bebas text-[12vw] leading-[0.8] text-void tracking-tighter hover:text-electric-lime hover:drop-shadow-[0_0_25px_rgba(200,255,0,0.6)] transition-all duration-500 hover:scale-[1.02] transform inline-block"
            initial={{ y: "100%" }}
            animate={isInView ? { y: "0%" } : {}}
            transition={{ duration: 1.2, ease: easing, delay: 0.1 }}
          >
            LUEWIRE@GMAIL.COM
          </motion.a>
        </div>

        <motion.div
          className="mt-5 h-px w-52 bg-void/40"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: easing, delay: 0.35 }}
        />
      </div>

    </footer>
  );
}
