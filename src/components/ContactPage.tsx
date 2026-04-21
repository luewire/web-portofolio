"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Marquee as ShadcnMarquee } from "@/src/components/shadcn-space/animations/marquee";

const exampleImages = [
  "https://cdn.cosmos.so/4b771c5c-d1eb-4948-b839-255dbeb931ba?format=jpeg",
  "https://cdn.cosmos.so/a8d82afd-2293-43ad-bac3-887683d85b44?format=jpeg",
  "https://cdn.cosmos.so/49206ba5-c174-4cd5-aee8-5b744842e6c2?format=jpeg",
  "https://cdn.cosmos.so/b29bd150-6477-420f-8efb-65ed99694421?format=jpeg",
  "https://cdn.cosmos.so/e1a0313e-7617-431d-b7f1-f1b169e6bcb4?format=jpeg",
  "https://cdn.cosmos.so/ad640c12-69fb-4186-bc3d-b1cc93986a37?format=jpeg",
  "https://cdn.cosmos.so/5cf0c3d2-e785-41a3-b0c8-a073ee2f2862?format=jpeg",
  "https://cdn.cosmos.so/938ab21c-a975-41b3-b303-418290343b09?format=jpeg",
  "https://cdn.cosmos.so/2e14a9bb-27e3-40fd-b940-cfb797a1224c?format=jpeg",
  "https://cdn.cosmos.so/81841d9f-e164-4770-aebc-cfc97d72f3ab?format=jpeg",
  "https://cdn.cosmos.so/49b81db0-37ea-4569-b0d6-04afa5115a10?format=jpeg",
  "https://cdn.cosmos.so/ade1834b-9317-44fb-8dc3-b43d29acd409?format=jpeg",
  "https://cdn.cosmos.so/621c250c-3833-45f9-862a-3f400aaf8f28?format=jpeg",
  "https://cdn.cosmos.so/f9b7eae8-e5a6-4ce6-b6e1-9ef125ba7f8e?format=jpeg",
  "https://cdn.cosmos.so/bd56ed6d-1bbd-44a4-b1a1-79b7199bbebb?format=jpeg",
];

const MarqueeItem = ({ src, index }: { src: string; index: number }) => (
  <div className="mb-4 hover:scale-105 cursor-pointer duration-300 ease-in-out rounded-xl overflow-hidden shadow-lg border border-white/10">
    <img
      src={src}
      alt={`Image ${index}`}
      draggable={false}
      className="w-full h-auto object-cover"
    />
  </div>
);

export default function ContactPage() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/xdayweqp", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSent(true);
      } else {
        alert("Oops! There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please check your connection and try again.");
    } finally {
      setIsSending(false);
    }
  };

  const firstThird = exampleImages.slice(0, 5);
  const secondThird = exampleImages.slice(5, 10);
  const lastThird = exampleImages.slice(10, 15);

  return (
    <motion.div
      key="contact-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40, filter: "blur(10px)", transition: { duration: 0.4 } }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: "clamp(4rem, 10vw, 6rem) clamp(1.5rem, 8vw, 6rem) 4rem",
        maxWidth: "1400px",
        margin: "0 auto",
        width: "100%",
        overflowY: "auto",
        scrollbarWidth: "none",
      }}
    >
      <div style={{ marginBottom: "40px" }}>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 700,
            margin: 0,
            letterSpacing: "-0.02em",
            position: "relative",
            display: "inline-block",
          }}
        >
          Contact
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "circOut" }}
            style={{
              position: "absolute",
              bottom: "8px",
              left: 0,
              right: "-80%",
              height: "4px",
              background: "var(--text)",
              transformOrigin: "left",
            }}
          />
        </motion.h2>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "minmax(300px, 1.2fr) minmax(300px, 1fr)",
        gap: "clamp(2rem, 5vw, 8rem)",
        alignItems: "stretch",
        height: "clamp(400px, 60vh, 700px)",
      }}>
        {/* Form Column */}
        <div style={{ position: "relative" }}>
          <AnimatePresence mode="wait">
            {!isSent ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.4 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  width: "100%",
                  paddingBottom: "20px",
                }}
                onSubmit={handleSubmit}
              >
                {[
                  { label: "Name", placeholder: "...", type: "text", required: true, name: "name" },
                  { label: "Company (optional)", placeholder: "...", type: "text", required: false, name: "company" },
                  { label: "Email", placeholder: "...", type: "email", required: true, name: "email" },
                ].map((field) => (
                  <div key={field.label} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontSize: "0.85rem", fontWeight: 700, opacity: 0.5, marginLeft: "12px" }}>{field.label}</span>
                    <input
                      type={field.type}
                      name={field.name}
                      required={field.required}
                      placeholder={field.placeholder}
                      style={{
                        width: "100%",
                        padding: "16px 20px",
                        background: "rgba(0,0,0,0.05)",
                        border: "none",
                        borderRadius: "20px 20px 20px 4px",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        color: "var(--text)",
                        outline: "none",
                      }}
                    />
                  </div>
                ))}

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, opacity: 0.5, marginLeft: "12px" }}>Message</span>
                  <textarea
                    name="message"
                    placeholder="..."
                    required
                    rows={4}
                    style={{
                      width: "100%",
                      padding: "16px 20px",
                      background: "rgba(0,0,0,0.05)",
                      border: "none",
                      borderRadius: "20px 20px 20px 4px",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      color: "var(--text)",
                      outline: "none",
                      resize: "none",
                    }}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSending}
                  style={{
                    marginTop: "8px",
                    padding: "16px 36px",
                    background: "var(--text)",
                    color: "var(--bg)",
                    border: "none",
                    borderRadius: "99px",
                    fontSize: "1rem",
                    fontWeight: 600,
                    cursor: isSending ? "default" : "pointer",
                    alignSelf: "flex-start",
                    opacity: isSending ? 0.7 : 1,
                  }}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </motion.button>
                
                <div style={{ marginTop: "24px" }}>
                  <span style={{ fontSize: "0.9rem", fontWeight: 500, opacity: 0.4 }}>or </span>
                  <a href="mailto:luewire@gmail.com" style={{ fontSize: "1.1rem", fontWeight: 700, color: "#6B5B9E", textDecoration: "none" }}>email me</a>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "16px",
                  padding: "40px",
                  background: "rgba(107, 91, 158, 0.05)",
                  borderRadius: "32px",
                  border: "2px dashed rgba(107, 91, 158, 0.2)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "4rem" }}>✉️</div>
                <h3 style={{ fontSize: "2rem", fontWeight: 700, margin: 0 }}>Message Sent!</h3>
                <p style={{ fontSize: "1.1rem", fontWeight: 500, opacity: 0.6, margin: 0 }}>
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setIsSent(false)}
                  style={{
                    marginTop: "20px",
                    background: "none",
                    border: "none",
                    color: "#6B5B9E",
                    fontWeight: 700,
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Triple Vertical Marquee */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            position: "relative",
            height: "100%",
            display: "flex",
            gap: "12px",
            overflow: "hidden",
            maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          }}
        >
          <ShadcnMarquee vertical className="[--duration:25s]" pauseOnHover>
            {firstThird.map((src, i) => <MarqueeItem key={i} src={src} index={i} />)}
          </ShadcnMarquee>
          
          <ShadcnMarquee vertical reverse className="[--duration:30s]" pauseOnHover>
            {secondThird.map((src, i) => <MarqueeItem key={i} src={src} index={i + 5} />)}
          </ShadcnMarquee>
          
          <ShadcnMarquee vertical className="[--duration:28s]" pauseOnHover>
            {lastThird.map((src, i) => <MarqueeItem key={i} src={src} index={i + 10} />)}
          </ShadcnMarquee>
        </motion.div>
      </div>
    </motion.div>
  );
}
