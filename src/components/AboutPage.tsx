"use client";

import { motion } from "framer-motion";

interface AboutPageProps {
  onBack: () => void;
}

export default function AboutPage({ onBack }: AboutPageProps) {
  return (
    <motion.div
      key="about-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40, filter: "blur(10px)", transition: { duration: 0.4 } }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: "clamp(6rem, 15vw, 10rem) clamp(1.5rem, 8vw, 6rem) 4rem",
        maxWidth: "1400px",
        margin: "0 auto",
        width: "100%",
        overflowY: "auto",
        scrollbarWidth: "none",
      }}
    >
      <div 
        className="about-grid"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(3rem, 6vw, 6rem)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Portrait Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "relative",
            width: "clamp(280px, 35vw, 450px)",
            aspectRatio: "1/1",
            background: "#D1D1D1",
            borderRadius: "40% 10% 40% 10%", 
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            flexShrink: 0,
          }}
        >
          <img 
            src="/images/IMG-20240915-WA0228_Original.jpg" 
            alt="Ridho Zen"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </motion.div>

        {/* Text Content */}
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "clamp(1.5rem, 4vw, 2.5rem)",
          flex: "1 1 400px",
          minWidth: "min(100%, 400px)",
        }}>
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                fontSize: "clamp(3.5rem, 8vw, 5.5rem)",
                fontWeight: 700,
                margin: 0,
                letterSpacing: "-0.03em",
                position: "relative",
                display: "inline-block",
                lineHeight: 1,
              }}
            >
              About Me
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "circOut" }}
                style={{
                  position: "absolute",
                  bottom: "4px",
                  left: 0,
                  right: "-20%",
                  height: "clamp(4px, 1vw, 6px)",
                  background: "var(--text)",
                  transformOrigin: "left",
                }}
              />
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              maxWidth: "700px",
            }}
          >
            <p style={{
              fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
              lineHeight: 1.5,
              margin: 0,
              fontWeight: 500,
              opacity: 0.9,
            }}>
              I'm <span style={{ fontWeight: 700 }}>Ridho Zen</span>, a frontend developer passionate about building interactive and highly functional digital experiences. I focus my work on crafting seamless web applications, constantly exploring modern frameworks like Next.js and React to bring complex ideas to the browser.
            </p>
            <p style={{
              fontSize: "clamp(1.2rem, 1.8vw, 1.4rem)",
              lineHeight: 1.6,
              margin: 0,
              fontWeight: 500,
              opacity: 0.6,
            }}>
              Outside of my main projects, I love keeping my brain engaged with hands-on technical challenges. Whether it's developing pixel-art games, tinkering with Linux systems and hardware, or building digital reading platforms, I'm always looking for ways to stay creative and push my technical boundaries.
            </p>

            <motion.a
              href="#"
              whileHover={{ x: 10 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "14px",
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "#6B5B9E",
                textDecoration: "none",
                marginTop: "1.5rem",
                borderBottom: "2px solid rgba(107, 91, 158, 0.3)",
                alignSelf: "flex-start",
                paddingBottom: "4px",
              }}
            >
              see my resume
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
