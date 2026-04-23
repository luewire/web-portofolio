"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    name: "RiseFarm",
    category: "Agricultural Platform",
    year: "2026",
    link: "https://risefarm.asia",
    linkLabel: "risefarm.asia",
    roles: ["Frontend Development", "SEO Optimization"],
    tech: ["Next.js", "Tailwind CSS", "SEO Optimization"],
    description:
      "Platform digital untuk industri pertanian dengan arsitektur kompleks dan optimasi SEO tinggi. Menampilkan manajemen konten, performa tinggi, dan desain bersih untuk solusi nyata di sektor pertanian.",
    accent: "#4A7C59",
    preview: "RF",
    image: "/image/projects/risefarm.webp",
  },
  {
    name: "Ebookin Aja",
    category: "Digital Reading Platform",
    year: "2026",
    link: "https://ebookin-aja.vercel.app",
    linkLabel: "ebookin-aja.vercel.app",
    roles: ["UI/UX Design", "Frontend Development"],
    tech: ["Next.js", "Vercel", "Framer Motion"],
    description:
      "Platform baca digital dengan antarmuka modern yang dirancang ulang. Menampilkan navigasi intuitif dan transisi halaman halus untuk pengalaman membaca yang menyenangkan.",
    accent: "#6B5B9E",
    preview: "EA",
    image: "/image/projects/ebookinaja.webp",
  },
  {
    name: "THE LOUIS",
    category: "Pixel-Art Defense Game",
    year: "2023",
    link: "https://luewire.github.io/thelouis-inspirated-by-pvz/",
    linkLabel: "View Demo",
    roles: ["Game Development", "Pixel Art"],
    tech: ["GDevelop", "JavaScript", "Pixel Art"],
    description:
      "Game pertahanan berbasis pixel art yang dikembangkan saat kelas 10. Menampilkan logika pertahanan, aset pixel art original, dan mekanik game yang solid.",
    accent: "#C0392B",
    preview: "TL",
    image: "/image/projects/thelouis.webp",
  },
  {
    name: "Kampung Inggris Indonesia",
    category: "English Education Platform",
    year: "2026",
    link: "https://kampunginggrisindonesia.com",
    linkLabel: "kampunginggrisindonesia.com",
    roles: ["Frontend Development", "SEO Optimization"],
    tech: ["Next.js", "Tailwind CSS", "SEO Optimization"],
    description:
      "Platform edukasi bahasa Inggris terpadu untuk pembelajaran intensif. Dirancang dengan fokus pada user experience dan aksesibilitas untuk membantu siswa menguasai bahasa Inggris dengan lebih efektif.",
    accent: "#E67E22",
    preview: "KI",
    image: "/image/projects/kampunginggrisindonesia.webp",
  },
];

type Project = (typeof projects)[0];

export default function WorkPage({ onBack }: { onBack: () => void }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  return (
    <motion.div
      key="work-page"
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 34, scale: 0.985, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AnimatePresence mode="wait">
        {!selectedProject ? (
          /* ── WORK LIST ── */
          <motion.div
            key="list"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              paddingTop: "180px",
              paddingLeft: "10%",
              paddingRight: "10%",
              overflowY: "auto",
            }}
          >


            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "relative",
                zIndex: 1,
                marginBottom: "0",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
                <h1
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    margin: 0,
                    color: "var(--text)",
                  }}
                >
                  Selected Works
                </h1>
              </div>
              <div style={{ height: "2px", background: "var(--text)", width: "100%", maxWidth: "800px" }} />
            </motion.div>

            {/* Project rows */}
            <div style={{ position: "relative", zIndex: 1, maxWidth: "800px" }}>
              {projects.map((project, index) => {
                const isHov = hovered === project.name;
                return (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -24, transition: { duration: 0.55, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] } }}
                    transition={{ duration: 0.75, delay: 0.08 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    onMouseEnter={() => setHovered(project.name)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setSelectedProject(project)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "18px 0",
                      borderBottom: "1px solid var(--text)",
                      cursor: "pointer",
                      transition: "opacity 0.3s",
                      opacity: hovered && !isHov ? 0.3 : 1,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                      {/* Brand shape icon */}
                      <motion.div
                        animate={{
                          width: isHov ? 52 : 16,
                          height: isHov ? 52 : 44,
                          borderTopRightRadius: isHov ? 16 : 0,
                          borderBottomRightRadius: isHov ? 16 : 16,
                          background: isHov ? "#E6CDCD" : "var(--text)",
                        }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        style={{ 
                          borderTopLeftRadius: 0,
                          borderBottomLeftRadius: 0,
                          flexShrink: 0 
                        }}
                      />
                      <motion.h2
                        animate={{ color: isHov ? "#E6CDCD" : "var(--text)" }}
                        transition={{ duration: 0.3 }}
                        style={{
                          fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
                          fontWeight: 700,
                          margin: 0,
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {project.name}
                      </motion.h2>
                    </div>
                    <motion.span
                      animate={{ color: isHov ? "#E6CDCD" : "var(--text)" }}
                      transition={{ duration: 0.3 }}
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        opacity: 0.7,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {project.category}
                    </motion.span>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>

        ) : (
          /* ── DETAIL VIEW ── */
          <motion.div
            key="detail"
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
            exit={{ opacity: 0, transition: { duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] } }}
            style={{
              width: "100%",
              flex: 1,
              minHeight: 0,
              position: "relative",
            }}
          >

            {/* Scrollable Container */}
            <div
              style={{
                width: "100%",
                height: "100%",
                overflowY: "auto",
                paddingTop: "140px",
                paddingLeft: "max(120px, 10%)",
                paddingRight: "10%",
                paddingBottom: "100px",
              }}
            >
              <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative" }}>
                {/* Hero image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 40, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ y: 800, rotate: -3, opacity: 0, transition: { duration: 0.6, ease: [0.6, -0.05, 0.9, 0.5] } }}
                  transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    width: "100%",
                    marginBottom: "40px",
                  }}
                >
                  {selectedProject.image ? (
                    <div style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "16/9",
                      borderRadius: "16px",
                      overflow: "hidden",
                      border: "1px solid rgba(128,128,128,0.15)",
                    }}>
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.name}
                        fill
                        sizes="(max-width: 1200px) 100vw, 1000px"
                        style={{
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </div>
                  ) : (
                    <div style={{
                      height: "55vh",
                      minHeight: "400px",
                      borderRadius: "16px",
                      background: selectedProject.accent,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                      <span style={{ color: "white", fontSize: "8rem", fontWeight: 900, opacity: 0.15, letterSpacing: "-0.05em" }}>
                        {selectedProject.preview}
                      </span>
                    </div>
                  )}
                </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ y: 800, rotate: 6, opacity: 0, transition: { duration: 0.6, delay: 0.05, ease: [0.6, -0.05, 0.9, 0.5] } }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                style={{ 
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)", 
                  fontWeight: 600, 
                  letterSpacing: "-0.02em", 
                  margin: "0 0 16px" 
                }}
              >
                {selectedProject.name}
              </motion.h2>

              {/* Separator Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ y: 800, rotate: -4, opacity: 0, transition: { duration: 0.6, delay: 0.1, ease: [0.6, -0.05, 0.9, 0.5] } }}
                transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  height: "2px",
                  background: "var(--text)",
                  width: "100%",
                  transformOrigin: "left",
                  marginBottom: "40px",
                }}
              />

              {/* Info grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ y: 800, rotate: -5, opacity: 0, transition: { duration: 0.6, delay: 0.15, ease: [0.6, -0.05, 0.9, 0.5] } }}
                transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "60px",
                  justifyContent: "space-between",
                }}
              >
                {/* Meta left */}
                <div style={{ display: "flex", flexDirection: "column", gap: "24px", minWidth: "280px" }}>
                  {[
                    { label: "Link", value: <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, color: "var(--text)", textDecoration: "underline", textUnderlineOffset: "4px" }}>{selectedProject.linkLabel}</a> },
                    { label: "Date", value: <span style={{ fontWeight: 600 }}>{selectedProject.year}</span> },
                    { label: "Roles", value: <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>{selectedProject.roles.map(r => <span key={r} style={{ fontWeight: 600 }}>{r}</span>)}</div> },
                    { label: "Tech", value: <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>{selectedProject.tech.map(t => <span key={t} style={{ fontWeight: 600 }}>{t}</span>)}</div> },
                  ].map(({ label, value }) => (
                    <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: "24px" }}>
                      <span style={{
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        border: "2px solid var(--text)",
                        borderRadius: "99px",
                        padding: "6px 16px",
                        width: "90px",
                        textAlign: "center",
                        display: "inline-block",
                      }}>{label}</span>
                      <div style={{ fontSize: "1rem", marginTop: "6px" }}>{value}</div>
                    </div>
                  ))}
                </div>

                {/* Description right */}
                <p style={{ 
                  margin: 0, 
                  lineHeight: 1.6, 
                  fontSize: "1.1rem", 
                  fontWeight: 500,
                  maxWidth: "500px",
                }}>
                  {selectedProject.description}
                </p>
              </motion.div>
            </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
