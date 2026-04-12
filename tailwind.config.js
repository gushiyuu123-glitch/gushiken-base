/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      /* ============================
         COLORS – Quiet Black / Soft White / Accent
      ============================ */
      colors: {
        blackDeep: "#0b0b0b",
        blackSoft: "rgba(15,15,15,0.92)",
        whiteSoft: "rgba(255,255,255,0.85)",
        whiteMuted: "rgba(255,255,255,0.6)",
        whiteFaint: "rgba(255,255,255,0.38)",
        accentSoft: "rgba(255,255,255,0.14)",

        /* 補助用。主役にはしない */
        gold: "#d9b98a",
      },

      /* ============================
         FONT FAMILY
      ============================ */
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
      },

      /* ============================
         TRACKING
      ============================ */
      letterSpacing: {
        wide18: "0.18em",
        wide22: "0.22em",
        wide28: "0.28em",
        mid12: "0.12em",
      },

      /* ============================
         BORDER
      ============================ */
      borderWidth: {
        hairline: "0.5px",
      },

      /* ============================
         SHADOW
      ============================ */
      boxShadow: {
        softDepth: "0 14px 36px rgba(0,0,0,0.22)",
        mediumDepth: "0 18px 48px rgba(0,0,0,0.28)",
        imageFloat: "0 32px 80px rgba(0,0,0,0.16)",
      },

      /* ============================
         MOTION
      ============================ */
      transitionTimingFunction: {
        silent: "cubic-bezier(.22,.56,.18,1)",
      },

      keyframes: {
        fadeUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(16px) scale(0.996)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0) scale(1)",
          },
        },
        breatheSoft: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.008)" },
          "100%": { transform: "scale(1)" },
        },
      },

      animation: {
        fadeUp: "fadeUp 1.02s cubic-bezier(.22,.56,.18,1) forwards",
        breatheSoft: "breatheSoft 5.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};