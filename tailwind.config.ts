import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        black: "#050508",
        "dark-bg": "#07070f",
        "dark-card": "#0d0d1a",
        "dark-border": "#1a1a2e",
        violet: {
          DEFAULT: "#7c3aed",
          light: "#8b5cf6",
          glow: "#a78bfa",
          dim: "#4c1d95",
        },
        cyan: {
          DEFAULT: "#06b6d4",
          light: "#67e8f9",
          glow: "#22d3ee",
        },
        gold: {
          DEFAULT: "#f59e0b",
          light: "#fcd34d",
        },
        "text-primary": "#f0f0f8",
        "text-secondary": "#a0a0b8",
        "text-muted": "#606078",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "radial-gradient(ellipse at 20% 50%, rgba(124,58,237,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(6,182,212,0.1) 0%, transparent 60%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(6,182,212,0.05) 100%)",
        "violet-cyan":
          "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "glow-violet": "0 0 30px rgba(124,58,237,0.4)",
        "glow-cyan": "0 0 30px rgba(6,182,212,0.4)",
        "glow-sm": "0 0 15px rgba(124,58,237,0.25)",
        "card": "0 4px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
