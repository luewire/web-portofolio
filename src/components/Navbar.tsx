"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const rotateStyle = `
  .menu-dots:hover .menu-dots-grid {
    transform: rotate(90deg);
  }
  .menu-dots-grid {
    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  }
`;

export default function Navbar({
  isMenuOpen,
  toggleMenu,
  goHome,
}: {
  isMenuOpen?: boolean;
  toggleMenu?: () => void;
  goHome?: () => void;
}) {
  return (
    <>
      <style>{rotateStyle}</style>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          padding: "40px 6vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 50,
        }}
      >
        {/* Left: Logo + animated "luewire" name */}
        <motion.div
          onClick={goHome}
          whileHover={{ scale: 0.96 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            cursor: "pointer",
          }}
        >
          <img
            src="/images/logo/lofo.svg"
            alt="Luewire"
            style={{ height: "75px", width: "auto", objectFit: "contain" }}
          />

          <AnimatePresence>
            {isMenuOpen && (
              <motion.span
                key="brand-name"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontWeight: 700,
                  fontSize: "1.8rem",
                  letterSpacing: "-0.02em",
                  color: "var(--text)",
                  whiteSpace: "nowrap",
                }}
              >
                luewire
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Right: 4-dot menu */}
        <button
          onClick={toggleMenu}
          aria-label="Open menu"
          className="menu-dots"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
          }}
        >
          <div
            className="menu-dots-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px",
            }}
          >
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "var(--text)",
                  transition: "transform 0.3s, opacity 0.3s",
                  transform: isMenuOpen ? "scale(0.5)" : "scale(1)",
                  opacity: isMenuOpen ? 0.3 : 1,
                }}
              />
            ))}
          </div>
        </button>
      </nav>
    </>
  );
}
