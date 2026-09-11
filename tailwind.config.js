/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#EEEBE2",
        "paper-raised": "#F4F2EA",
        ink: "#1A1D1A",
        muted: "#615D52",
        forest: "#3F6B4F",
        clay: "#B85C38",
        line: "#C7C2AF",
        "line-soft": "#D9D5C6",
      },
      fontFamily: {
        display: ['"Fraunces"', "serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
        sans: ['"IBM Plex Sans"', "sans-serif"],
      },
      keyframes: {
        drawLine: {
          "0%": { strokeDashoffset: "520" },
          "100%": { strokeDashoffset: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(63,107,79,0.35)" },
          "70%": { boxShadow: "0 0 0 8px rgba(63,107,79,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(63,107,79,0)" },
        },
      },
      animation: {
        "draw-line": "drawLine 1.6s ease forwards 0.3s",
        "fade-in": "fadeIn 0.4s ease forwards 1.7s",
        "pulse-ring": "pulseRing 2.4s ease-out infinite",
      },
    },
  },
  plugins: [],
};
