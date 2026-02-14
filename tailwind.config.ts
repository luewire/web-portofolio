import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        // Add custom fonts if needed
        opsilon: ['Opsilon', 'sans-serif'],
      },
      fontSize: {
        // Clamp-based responsive typography
        'clamp-sm': 'clamp(0.8rem, 2vw, 1rem)',
        'clamp-md': 'clamp(1rem, 2.5vw, 1.25rem)',
        'clamp-lg': 'clamp(1.5rem, 4vw, 2.5rem)',
        'clamp-xl': 'clamp(2.5rem, 6vw, 4rem)',
        'clamp-2xl': 'clamp(4rem, 8vw, 9rem)', // For Section Titles
        'clamp-3xl': 'clamp(6rem, 12vw, 14rem)', // For Hero Title
        'clamp-number': 'clamp(12rem, 15vw, 22rem)', // For Background Numbers
      },
      colors: {
        background: "#050505", // Deep, rich black
        foreground: "#EAEAEA", // Soft white for text
        border: "#1F1F1F", // Subtle border
        input: "#1F1F1F",
        ring: "#333333",
        primary: {
          DEFAULT: "#EAEAEA",
          foreground: "#050505",
        },
        secondary: {
          DEFAULT: "#111111", // Slightly lighter black for cards/sections
          foreground: "#EAEAEA",
        },
        muted: {
          DEFAULT: "#222222",
          foreground: "#888888",
        },
        accent: {
          DEFAULT: "#3B82F6", // Electric Blue for key interactions
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#0A0A0A",
          foreground: "#EAEAEA",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
      },
    },
  },
  plugins: [animate],
} satisfies Config;

