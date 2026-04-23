"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AboutPageProps {
  onBack: () => void;
}

export default function AboutPage({ onBack }: AboutPageProps) {
  return (
    <motion.div
      key="about-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -26, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }}
      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "relative",
        flex: 1,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        paddingTop: "clamp(140px, 16vw, 220px)",
        paddingLeft: "clamp(1rem, 6vw, 10%)",
        paddingRight: "clamp(1rem, 6vw, 10%)",
        paddingBottom: "clamp(3rem, 6vw, 5rem)",
        overflowY: "auto",
        scrollbarWidth: "none",
      }}
    >
      <div 
        className="about-grid"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(2rem, 4vw, 4rem)",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {/* Portrait Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.05, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "relative",
            width: "clamp(240px, 26vw, 360px)",
            aspectRatio: "1/1",
            background: "#D1D1D1",
            borderRadius: "40% 10% 40% 10%", 
            overflow: "hidden",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            flexShrink: 0,
          }}
        >
          <Image 
            src="/images/photo-main.webp" 
            alt="Ridho Zen"
            fill
            sizes="(max-width: 768px) 100vw, 450px"
            priority
            style={{
              objectFit: "cover",
            }}
          />
        </motion.div>

        {/* Text Content */}
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "clamp(1.25rem, 2.5vw, 2rem)",
          flex: "1 1 360px",
          minWidth: "min(100%, 340px)",
        }}>
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
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
                transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: "absolute",
                  bottom: "2px",
                  left: 0,
                  right: "-20%",
                  height: "2px",
                  background: "var(--text)",
                  transformOrigin: "left",
                }}
              />
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              maxWidth: "700px",
            }}
          >
            <p style={{
              fontSize: "clamp(1rem, 1.25vw, 1.15rem)",
              lineHeight: 1.5,
              margin: 0,
              fontWeight: 500,
              opacity: 0.9,
            }}>
              I'm <span style={{ fontWeight: 700 }}>Ridho Zen</span>, a frontend developer passionate about building interactive and highly functional digital experiences. I focus my work on crafting seamless web applications, constantly exploring modern frameworks like Next.js and React to bring complex ideas to the browser and app.
            </p>
            <p style={{
              fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)",
              lineHeight: 1.6,
              margin: 0,
              fontWeight: 500,
              opacity: 0.6,
            }}>
              Outside of my main projects, I love keeping my brain engaged with hands-on technical challenges. Whether it's developing pixel-art games, tinkering with Linux systems and hardware, or building digital reading platforms, I'm always looking for ways to stay creative and push my technical boundaries.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
