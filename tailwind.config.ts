import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#059669",
          foreground: "#ffffff",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 22px 48px -12px rgba(15, 23, 42, 0.12)",
        card: "0 1px 0 0 rgba(15, 23, 42, 0.04), 0 18px 40px -24px rgba(15, 23, 42, 0.14)",
        "card-hover":
          "0 1px 0 0 rgba(15, 23, 42, 0.05), 0 24px 48px -20px rgba(5, 150, 105, 0.12)",
        glow: "0 0 0 1px rgba(5, 150, 105, 0.08), 0 20px 50px -20px rgba(5, 150, 105, 0.25)",
      },
      fontSize: {
        display: [
          "3.25rem",
          { lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        "display-sm": [
          "2.5rem",
          { lineHeight: "1.12", letterSpacing: "-0.025em", fontWeight: "700" },
        ],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
