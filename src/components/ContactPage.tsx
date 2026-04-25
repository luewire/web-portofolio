"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";

const Eye = ({ isHovered }: { isHovered: boolean }) => {
  const eyeRef = useRef<HTMLDivElement>(null);
  const pupilX = useSpring(0, { stiffness: 170, damping: 24, mass: 0.55 });
  const pupilY = useSpring(0, { stiffness: 170, damping: 24, mass: 0.55 });

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!eyeRef.current) {
        return;
      }

      const rect = eyeRef.current.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      const dx = e.clientX - eyeCenterX;
      const dy = e.clientY - eyeCenterY;
      const angle = Math.atan2(dy, dx);
      const distance = Math.min(Math.hypot(dx, dy), Math.min(rect.width, rect.height) * 0.2);

      pupilX.set(Math.cos(angle) * distance);
      pupilY.set(Math.sin(angle) * distance);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [pupilX, pupilY]);

  return (
    <div
      ref={eyeRef}
      style={{
        width: "clamp(110px, 12vw, 170px)",
        height: "clamp(150px, 17vw, 230px)",
        background: "white",
        borderRadius: "999px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
        position: "relative",
        border: "3px solid #1F1F1F",
        overflow: "hidden",
      }}
    >
      <motion.div
        animate={{ 
          scale: isHovered ? 1.45 : 1,
        }}
        transition={{ 
          type: "spring",
          stiffness: 80,
          damping: 15,
          mass: 1
        }}
        style={{
          width: "68%",
          height: "56%",
          background: "#1F1F1F",
          borderRadius: "50%",
          x: pupilX,
          y: pupilY,
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingBottom: "16%",
        }}
      >
        <div style={{
          width: "24%",
          height: "24%",
          background: "white",
          borderRadius: "50%",
          opacity: 1,
        }} />
      </motion.div>
    </div>
  );
};

const InteractiveEyes = ({ isHovered = false }: { isHovered?: boolean }) => {
  return (
    <div style={{
      display: "flex",
      gap: "18px",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
    }}>
      <Eye isHovered={isHovered} />
      <Eye isHovered={isHovered} />
    </div>
  );
};

export default function ContactPage() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isHoveringSend, setIsHoveringSend] = useState(false);

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

  return (
    <motion.div
      className="contact-page"
      key="contact-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }}
      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "relative",
        flex: 1,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        paddingTop: "clamp(88px, 10vw, 130px)",
        paddingLeft: "clamp(1rem, 6vw, 10%)",
        paddingRight: "clamp(1rem, 6vw, 10%)",
        paddingBottom: "1.25rem",
        overflowY: "auto",
        overscrollBehavior: "contain",
        scrollbarWidth: "none",
      }}
    >
      <style>{`
        input:focus, textarea:focus {
          background: #E6CDCD !important;
          color: #1F1F1F !important;
          border-color: #1F1F1F !important;
          box-shadow: 0 0 20px rgba(230, 205, 205, 0.4);
        }
        input:focus::placeholder, textarea:focus::placeholder {
          color: rgba(31, 31, 31, 0.4);
        }

        .contact-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: clamp(1.25rem, 2.4vw, 2.5rem);
          align-items: center;
          width: 100%;
          min-height: min(520px, calc(100vh - 150px));
        }

        .contact-eyes-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: stretch;
          justify-content: center;
          width: 100%;
        }

        .contact-bubble {
          position: relative;
          align-self: flex-end;
          width: min(100%, 470px);
          height: clamp(128px, 14vw, 150px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-bubble-text {
          margin: 0;
          width: 100%;
          box-sizing: border-box;
          padding: 0 72px 24px 88px;
          font-size: clamp(0.9rem, 0.95vw, 1rem);
          font-weight: 600;
          letter-spacing: 0;
          text-align: center;
          line-height: 1.35;
          color: #111111;
          z-index: 1;
          overflow-wrap: anywhere;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
        }

        @media (max-width: 1024px) {
          .contact-page {
            padding: 6rem 1.25rem 2.25rem;
          }

          .contact-layout {
            grid-template-columns: 1fr;
            align-items: start;
            gap: 2rem;
            min-height: auto;
          }

          .contact-eyes-col {
            align-items: center;
          }

          .contact-bubble {
            align-self: center;
            width: min(100%, 560px);
          }
        }

        @media (max-width: 768px) {
          .contact-page {
            padding: 0 1rem 0.75rem !important;
            padding-top: 115px !important;
            height: 100dvh !important;
            overflow: hidden !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: flex-start !important;
          }

          .contact-header {
            margin-bottom: 12px !important;
            flex-shrink: 0;
          }

          .contact-layout {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
            min-height: 0 !important;
            flex: 1;
          }

          .contact-eyes-col {
            display: none !important;
          }

          .contact-form-fields {
            gap: 8px !important;
          }

          .contact-form-fields input {
            padding: 10px 16px !important;
            font-size: 0.9rem !important;
          }

          .contact-form-fields textarea {
            padding: 10px 16px !important;
            font-size: 0.9rem !important;
          }

          .contact-field-label {
            font-size: 0.75rem !important;
            margin-bottom: 2px !important;
          }
        }
      `}</style>
      <div className="contact-header" style={{ marginBottom: "32px" }}>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
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
              bottom: "2px",
              left: 0,
              right: "-80%",
              height: "2px",
              background: "var(--text)",
              transformOrigin: "left",
            }}
          />
        </motion.h2>

      </div>

      <div className="contact-layout">
        {/* Form Column */}
        <div style={{
          position: "relative",
          width: "100%",
        }}>
          <AnimatePresence mode="wait">
            {!isSent ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.4 }}
                className="contact-form-fields"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  width: "100%",
                  paddingBottom: "6px",
                }}
                onSubmit={handleSubmit}
              >
                {[
                  { label: "Name", placeholder: "...", type: "text", required: true, name: "name" },
                  { label: "Company (optional)", placeholder: "...", type: "text", required: false, name: "company" },
                  { label: "Email", placeholder: "...", type: "email", required: true, name: "email" },
                ].map((field) => (
                  <div key={field.label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span className="contact-field-label" style={{ fontSize: "0.9rem", fontWeight: 700, opacity: 0.5, marginLeft: "12px" }}>{field.label}</span>
                    <input
                      type={field.type}
                      name={field.name}
                      required={field.required}
                      placeholder={field.placeholder}
                      style={{
                        width: "100%",
                        padding: "14px 20px",
                        background: "rgba(0,0,0,0.04)",
                        border: "1px solid rgba(0,0,0,0.05)",
                        borderRadius: "24px 24px 24px 6px",
                        fontSize: "1rem",
                        fontWeight: 500,
                        color: "var(--text)",
                        outline: "none",
                        transition: "all 0.3s ease",
                      }}
                    />
                  </div>
                ))}

                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span className="contact-field-label" style={{ fontSize: "0.9rem", fontWeight: 700, opacity: 0.5, marginLeft: "12px" }}>Message</span>
                  <textarea
                    name="message"
                    placeholder="..."
                    required
                    rows={3}
                    style={{
                      width: "100%",
                      padding: "14px 20px",
                      background: "rgba(0,0,0,0.04)",
                      border: "1px solid rgba(0,0,0,0.05)",
                      borderRadius: "24px 24px 24px 6px",
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: "var(--text)",
                      outline: "none",
                      resize: "none",
                      transition: "all 0.3s ease",
                    }}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#000" }}
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => setIsHoveringSend(true)}
                  onMouseLeave={() => setIsHoveringSend(false)}
                  disabled={isSending}
                  style={{
                    marginTop: "8px",
                    padding: "16px 38px",
                    background: "var(--text)",
                    color: "var(--bg)",
                    border: "none",
                    borderRadius: "99px",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    cursor: isSending ? "default" : "pointer",
                    alignSelf: "flex-start",
                    opacity: isSending ? 0.7 : 1,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </motion.button>

                <div style={{ marginTop: "14px" }}>
                  <span style={{ fontSize: "1rem", fontWeight: 500, opacity: 0.4 }}>or </span>
                  <a href="mailto:luewire@gmail.com" style={{ fontSize: "1.1rem", fontWeight: 700, color: "#6B5B9E", textDecoration: "none", borderBottom: "2px solid rgba(107, 91, 158, 0.2)" }}>email me directly</a>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "24px",
                  padding: "60px 40px",
                  background: "rgba(107, 91, 158, 0.03)",
                  borderRadius: "40px",
                  border: "2px dashed rgba(107, 91, 158, 0.15)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "5rem" }}>✉️</div>
                <h3 style={{ fontSize: "2.5rem", fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>Message Sent!</h3>
                <p style={{ fontSize: "1.2rem", fontWeight: 500, opacity: 0.6, margin: 0, lineHeight: 1.5 }}>
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  style={{
                    marginTop: "20px",
                    background: "none",
                    border: "none",
                    color: "#6B5B9E",
                    fontWeight: 800,
                    fontSize: "1.1rem",
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

        {/* Right Column: Interactive Eyes */}
        <motion.div className="contact-eyes-col">
          <motion.div
            className="contact-bubble"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          >
            <svg
              viewBox="0 0 560 190"
              width="100%"
              height="100%"
              aria-hidden="true"
              style={{ position: "absolute", inset: 0 }}
            >
              <motion.path
                d="M72 24 H496 Q534 24 534 64 V112 Q534 150 496 150 H170 Q156 168 118 176 Q138 156 138 142 Q90 138 72 126 Q52 112 52 84 V64 Q52 24 72 24 Z"
                fill="#FFFFFF"
                stroke="#101010"
                strokeWidth="3"
                strokeLinejoin="round"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
              />
            </svg>
            <motion.p
              key={isSent ? "sent" : "initial"}
              className="contact-bubble-text"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              {isSent 
                ? "I see you! Your message has been safely delivered."
                : "Hello there! It's a pleasure to connect with you."
              }
            </motion.p>
          </motion.div>
          <div className="contact-eyes-wrap" style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <InteractiveEyes isHovered={isHoveringSend} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
