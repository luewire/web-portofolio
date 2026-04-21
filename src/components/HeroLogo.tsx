"use client";

import { motion } from "framer-motion";

export default function HeroLogo({
  onSeeWork,
  showTitle = true
}: {
  onSeeWork: () => void;
  showTitle?: boolean;
}) {
  return (
    <motion.div
      key="hero-logo"
      className={`flex flex-col items-center justify-center z-10 relative -mt-12 ${showTitle ? "gap-8" : "gap-0"}`}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, y: -50, transition: { duration: 0.5 } }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1 } }
      }}
    >
      {showTitle && (
        <motion.h1
          className="text-[5rem] md:text-[9rem] xl:text-[11rem] tracking-normal text-[#E6CDCD] leading-none m-0"
          style={{
            fontFamily: 'var(--font-graffiti)',
            textShadow: '-1px -1px 0 #1F1F1F, 1px -1px 0 #1F1F1F, -1px 1px 0 #1F1F1F, 1px 1px 0 #1F1F1F'
          }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            show: { opacity: 1, y: 0, transition: { type: "spring", damping: 15, stiffness: 100 } }
          }}
        >
          LUEWIRE
        </motion.h1>
      )}

      {/* Links below logo */}
      <motion.div
        className={`flex gap-12 md:gap-24 font-medium text-xl md:text-2xl tracking-wide text-[var(--text)] ${showTitle ? "mt-4" : "mt-0"}`}
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0, transition: { delay: 0.5 } }
        }}
      >
        <button onClick={onSeeWork} className="link-effect bg-transparent border-none text-xl md:text-2xl cursor-pointer">see my work</button>
        <button className="link-effect bg-transparent border-none text-xl md:text-2xl cursor-pointer">get in touch</button>
      </motion.div>
    </motion.div>
  );
}
