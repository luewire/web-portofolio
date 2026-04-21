"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const menuItems = [
  { name: "Home", id: "home" },
  { name: "Work", id: "work" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

export default function MenuOverlay({
  currentPage,
  onNavigate,
}: {
  currentPage: "home" | "work" | "about" | "contact";
  onNavigate: (page: "home" | "work" | "about" | "contact") => void;
}) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <motion.div
      key="menu-overlay"
      initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -30, filter: "blur(10px)", transition: { duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] } }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 40,
        background: "var(--bg)",
        color: "var(--text)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          padding: "0 10%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          paddingTop: "80px",
        }}
      >
        {/* Nav links */}
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
          {menuItems.map((item, index) => {
            const isActive = currentPage === item.id;
            const isHovered = hoveredItem === item.id;
            const otherHovered = hoveredItem !== null && !isHovered;

            return (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20, transition: { duration: 0.35, delay: (menuItems.length - index) * 0.04 } }}
                transition={{ duration: 0.85, delay: 0.1 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => !isActive && onNavigate(item.id as "home" | "work" | "about" | "contact")}
                onMouseEnter={() => !isActive && setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  cursor: isActive ? "default" : "pointer",
                  transition: "opacity 0.45s ease, filter 0.45s ease",
                  opacity: isActive ? 0.45 : otherHovered ? 0.4 : 1,
                  filter: isActive ? "blur(2px)" : "blur(0px)",
                }}
              >
                {/* Icon: square with only top-left corner rounded */}
                <div
                  style={{
                    width: "clamp(24px, 5vw, 32px)",
                    height: "clamp(24px, 5vw, 32px)",
                    background: isHovered ? "#E6CDCD" : isActive ? "#E6CDCD" : "var(--text)",
                    flexShrink: 0,
                    borderRadius: "clamp(8px, 1.5vw, 10px) 2px 2px 2px",
                    transition: "background 0.35s ease",
                  }}
                />
                <span
                  style={{
                    fontSize: "clamp(2.8rem, 10vw, 5rem)",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em",
                    color: isHovered ? "#E6CDCD" : isActive ? "#E6CDCD" : "var(--text)",
                    transition: "color 0.35s ease",
                  }}
                >
                  {item.name}
                </span>
              </motion.li>
            );
          })}
        </ul>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", gap: "32px", marginTop: "40px", marginLeft: "clamp(34px, 8vw, 44px)" }}
        >
          <a href="https://github.com/luewire" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            style={{ color: "var(--text)", opacity: 0.6, transition: "opacity 0.3s, color 0.3s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#E6CDCD", e.currentTarget.style.opacity = "1")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text)", e.currentTarget.style.opacity = "0.6")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/muhammad-ridho-zen-4665a22bb" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            style={{ color: "var(--text)", opacity: 0.6, transition: "opacity 0.3s, color 0.3s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#E6CDCD", e.currentTarget.style.opacity = "1")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text)", e.currentTarget.style.opacity = "0.6")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="https://www.behance.net/muhzen" target="_blank" rel="noopener noreferrer" aria-label="Behance"
            style={{ color: "var(--text)", opacity: 0.6, transition: "opacity 0.3s, color 0.3s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#E6CDCD", e.currentTarget.style.opacity = "1")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text)", e.currentTarget.style.opacity = "0.6")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h2.097c2.32 0 2.56-2.733.681-3.322-.499-.155-1.563-.163-2.778-.163v3.485zm0 5.864h2.723c2.536 0 2.734-3.121.731-3.608-.541-.132-1.768-.153-3.454-.153v3.761z"/>
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        style={{
          position: "absolute",
          bottom: "24px",
          right: "5%",
          fontSize: "0.8rem",
          fontWeight: 600,
          color: "var(--text)",
        }}
      >
        Designed &amp; Developed by Luewire © 2026
      </motion.div>
    </motion.div>
  );
}
