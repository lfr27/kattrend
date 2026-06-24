import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // — Luxury monochrome system —
        noir: "#0A0A0A", // near-black: primary ink, dark sections
        ink: "#161616", // body text on light
        charcoal: "#2A2A2A", // charcoal surfaces
        graphite: "#4A4A4A", // secondary text
        ash: "#8A8A8A", // tertiary / captions
        silver: "#B8B6B1", // disabled / faint
        mist: "#ECEAE6", // hairlines, dividers, soft fills
        pearl: "#F6F5F3", // warm off-white page base
        ivory: "#FBFAF8", // lightest surface
        paper: "#FFFFFF", // pure white lift
        // — The single metallic accent —
        champagne: "#C9BBA0",
        "champagne-deep": "#A6926E",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        // editorial type scale
        "display-2xl": ["clamp(3.4rem, 9vw, 9.5rem)", { lineHeight: "0.92", letterSpacing: "-0.02em" }],
        "display-xl": ["clamp(2.6rem, 6vw, 5.5rem)", { lineHeight: "0.96", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.2rem, 4.6vw, 4rem)", { lineHeight: "1.04" }],
        "display-md": ["clamp(1.9rem, 3.6vw, 3rem)", { lineHeight: "1.08" }],
        "display-sm": ["clamp(1.5rem, 2.6vw, 2rem)", { lineHeight: "1.15" }],
      },
      letterSpacing: {
        luxe: "0.22em",
        wide: "0.34em",
        wider: "0.42em",
      },
      spacing: {
        // 8pt-based premium scale
        s1: "8px",
        s2: "16px",
        s3: "24px",
        s4: "40px",
        s5: "64px",
        s6: "96px",
        s7: "140px",
        s8: "200px",
        gutter: "clamp(24px, 5vw, 96px)",
      },
      maxWidth: {
        site: "1480px",
        prose: "68ch",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        slow: "900ms",
        med: "600ms",
      },
      boxShadow: {
        lift: "0 30px 60px -30px rgba(10,10,10,0.18)",
        "lift-lg": "0 40px 90px -40px rgba(10,10,10,0.28)",
      },
      keyframes: {
        "hero-zoom": {
          "0%": { transform: "scale(1.12)" },
          "100%": { transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "hero-zoom": "hero-zoom 18s cubic-bezier(0.22,1,0.36,1) forwards",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
