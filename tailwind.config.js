/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      /* ============================
         COLORS – 金 / 黒 / 白（3本柱）
      ============================ */
      colors: {
        gold: "#d9b98a",                // 上品な金
        blackDeep: "#0b0b0b",           // 本拠地の黒
        blackSoft: "rgba(15,15,15,0.92)",
        whiteSoft: "rgba(255,255,255,0.85)",
      },

      /* ============================
         FONT FAMILY（世界観固定）
      ============================ */
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
      },

      /* ============================
         TRACKING（GUSHIKEN専用）
      ============================ */
      letterSpacing: {
        wide18: "0.18em",
        wide22: "0.22em",
        wide28: "0.28em",
        mid12: "0.12em",
      },

      /* ============================
         BORDER / LINES（0.18線）
      ============================ */
      borderWidth: {
        thin18: "0.18px",
      },

      /* ============================
         SHADOW（高級感）
      ============================ */
      boxShadow: {
        softGlow: "0 0 28px rgba(0,0,0,0.45)",
        imageFloat: "0 40px 110px rgba(0,0,0,0.16)",
      },

      /* ============================
         BACKDROP
      ============================ */
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "6px",
        lg: "10px",
      },

      /* ============================
         KEYFRAMES（呼吸 × フェード）
      ============================ */
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(14px)", filter: "blur(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" },
        },
        breathe: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.012)" },
          "100%": { transform: "scale(1)" },
        },
        floatSoft: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
          "100%": { transform: "translateY(0)" },
        },
      },

      animation: {
        fadeUp: "fadeUp 0.85s cubic-bezier(.22,.61,.36,1) forwards",
        breathe: "breathe 5.6s ease-in-out infinite",
        floatSoft: "floatSoft 4.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
