"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Marquee from "../components/Marquee";
import WorkPage from "../components/WorkPage";
import AboutPage from "../components/AboutPage";
import ContactPage from "../components/ContactPage";
import MenuOverlay from "../components/MenuOverlay";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"home" | "work" | "about" | "contact">("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIntroDone] = useState(true);

  const handleNavigate = (page: "home" | "work" | "about" | "contact") => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <main
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "#F1F1F1",
        color: "#1F1F1F",
      }}
    >
      <AnimatePresence mode="wait">
        {!isIntroDone ? (
          /* ── INTRO ── */
          <motion.div
            key="intro"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#F1F1F1",
            }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }}
          >
            <motion.h1
              style={{
                fontFamily: "var(--font-graffiti)",
                fontSize: "clamp(6rem, 14vw, 12rem)",
                color: "#E6CDCD",
                textShadow: "-1px -1px 0 #1F1F1F, 1px -1px 0 #1F1F1F, -1px 1px 0 #1F1F1F, 1px 1px 0 #1F1F1F",
                lineHeight: 1,
                margin: 0,
                textAlign: "center",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              onAnimationComplete={() => { }}
            >
              LUEWIRE
            </motion.h1>
          </motion.div>
        ) : (
          /* ── MAIN ── */
          <motion.div
            key="main"
            style={{
              position: "relative",
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Navbar
              isMenuOpen={isMenuOpen}
              toggleMenu={() => setIsMenuOpen((v) => !v)}
              goHome={() => handleNavigate("home")}
            />

            {/* Background removed as requested */}

            {/* Content area */}
            <motion.div
              animate={{
                scale: isMenuOpen ? 0.95 : 1,
                filter: isMenuOpen ? "blur(6px)" : "blur(0px)",
                opacity: isMenuOpen ? 0.4 : 1,
              }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                flex: 1,
                minHeight: 0, /* FIX SCROLLING */
                display: "flex",
                flexDirection: "column",
                position: "relative",
                zIndex: 10,
              }}
            >
              <AnimatePresence mode="wait">
                {currentPage === "home" ? (
                  <motion.div
                    key="home"
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    initial={{ opacity: 0, y: -40, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -28, scale: 0.985, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Hero title */}
                    <motion.h2
                      style={{
                        fontFamily: "var(--font-graffiti)",
                        fontSize: "clamp(6rem, 13vw, 10rem)",
                        color: "#E6CDCD",
                        textShadow: "-1px -1px 0 #1F1F1F, 1px -1px 0 #1F1F1F, -1px 1px 0 #1F1F1F, 1px 1px 0 #1F1F1F",
                        lineHeight: 1,
                        margin: 0,
                        textAlign: "center",
                        userSelect: "none",
                      }}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                      LUEWIRE
                    </motion.h2>

                    {/* Sub-links */}
                    <motion.div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        gap: "clamp(80px, 15vw, 200px)",
                        marginTop: "24px",
                      }}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.7 }}
                    >
                      <button
                        onClick={() => setCurrentPage("work")}
                        className="link-effect"
                        style={{
                          background: "none",
                          border: "none",
                          fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)",
                          fontWeight: 500,
                          letterSpacing: "0",
                          color: "#1F1F1F",
                          cursor: "pointer",
                        }}
                      >
                        see my work
                      </button>
                      <button
                        onClick={() => setCurrentPage("contact")}
                        className="link-effect"
                        style={{
                          background: "none",
                          border: "none",
                          fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)",
                          fontWeight: 500,
                          letterSpacing: "0",
                          color: "#1F1F1F",
                          cursor: "pointer",
                        }}
                      >
                        get in touch
                      </button>
                    </motion.div>
                  </motion.div>
                ) : currentPage === "work" ? (
                  <WorkPage key="work" onBack={() => setCurrentPage("home")} />
                ) : currentPage === "about" ? (
                  <AboutPage key="about" onBack={() => setCurrentPage("home")} />
                ) : (
                  <ContactPage key="contact" />
                )}
              </AnimatePresence>
            </motion.div>

            {/* Marquee at bottom */}
            <AnimatePresence>
              {currentPage === "home" && (
                <motion.div
                  key="marquee"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: 40, transition: { duration: 0.4 } }}
                  style={{ position: "absolute", bottom: "3.5vh", left: 0, right: 0, zIndex: 20 }}
                >
                  <Marquee />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Menu overlay */}
            <AnimatePresence>
              {isMenuOpen && (
                <MenuOverlay
                  currentPage={currentPage}
                  onNavigate={handleNavigate}
                />
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
