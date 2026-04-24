/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      /* ============================
         COLORS — GUSHIKEN DESIGN OS
         黒 / 生成り白 / シャンパンゴールド / 銀線
      ============================ */
      colors: {
        /* ----------------------------
           Core
        ---------------------------- */
        main: "#0b0b0b",
        mainDeep: "#070707",
        mainSoft: "rgba(15,15,15,0.92)",
        mainPanel: "rgba(12,12,12,0.965)",

        assort: "rgba(255,255,255,0.86)",
        assortSoft: "rgba(238,234,224,0.86)",
        assortMuted: "rgba(255,255,255,0.60)",
        assortFaint: "rgba(255,255,255,0.38)",
        assortGhost: "rgba(255,255,255,0.22)",
        assortLine: "rgba(255,255,255,0.12)",

        /* 少し黄みを抑えた“馴染む金” */
        accent: "#c9b18a",
        accentBright: "#d9c29a",
        accentDeep: "#8f7650",
        accentDim: "rgba(201,177,138,0.24)",
        accentSoft: "rgba(201,177,138,0.14)",
        accentBorder: "rgba(201,177,138,0.32)",
        accentGlow: "rgba(201,177,138,0.075)",

        /* 細線・アクティブ・金属感用 */
        subaccent: "#dce2eb",
        subaccentDim: "rgba(220,226,235,0.22)",
        subaccentBorder: "rgba(220,226,235,0.32)",
        subaccentGlow: "rgba(220,226,235,0.06)",

        /* ----------------------------
           Legacy aliases
           既存コードを壊さないため残す
        ---------------------------- */
        blackDeep: "#0b0b0b",
        blackSoft: "rgba(15,15,15,0.92)",
        whiteSoft: "rgba(255,255,255,0.85)",
        whiteMuted: "rgba(255,255,255,0.60)",
        whiteFaint: "rgba(255,255,255,0.38)",

        gold: "#d9b98a",
        goldMuted: "#c9b18a",
        silver: "#dce2eb",
      },

      /* ============================
         FONT FAMILY
      ============================ */
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
        jp: ["Noto Sans JP", "system-ui", "sans-serif"],
      },

      /* ============================
         LETTER SPACING
      ============================ */
      letterSpacing: {
        mid08: "0.08em",
        mid10: "0.10em",
        mid12: "0.12em",
        wide16: "0.16em",
        wide18: "0.18em",
        wide22: "0.22em",
        wide24: "0.24em",
        wide28: "0.28em",
      },

      /* ============================
         BORDER
      ============================ */
      borderWidth: {
        hairline: "0.5px",
      },

      /* ============================
         BOX SHADOW
      ============================ */
      boxShadow: {
        softDepth: "0 14px 36px rgba(0,0,0,0.22)",
        mediumDepth: "0 18px 48px rgba(0,0,0,0.28)",
        heavyDepth: "0 24px 70px rgba(0,0,0,0.54)",
        imageFloat: "0 32px 80px rgba(0,0,0,0.16)",

        goldHair:
          "0 0 0 0.5px rgba(201,177,138,0.075), 0 18px 48px rgba(0,0,0,0.28)",
        silverHair:
          "0 0 0 0.5px rgba(220,226,235,0.10), 0 0 18px rgba(220,226,235,0.05)",
      },

      /* ============================
         BACKGROUND IMAGE
      ============================ */
      backgroundImage: {
        "gold-line":
          "linear-gradient(90deg, transparent, rgba(201,177,138,0.70), rgba(255,255,255,0.18), transparent)",

        "silver-line":
          "linear-gradient(90deg, transparent, rgba(220,226,235,0.70), transparent)",

        "nav-frame":
          "linear-gradient(180deg, rgba(12,12,12,0.985), rgba(7,7,7,0.965))",

        "panel-depth":
          "radial-gradient(circle at 14% 0%, rgba(201,177,138,0.055), transparent 32%), linear-gradient(180deg, rgba(12,12,12,0.985), rgba(7,7,7,0.965))",

        "champagne-metal":
          "linear-gradient(145deg, rgba(225,216,196,0.92) 0%, rgba(196,177,143,0.90) 24%, rgba(149,126,91,0.88) 50%, rgba(218,207,186,0.92) 73%, rgba(130,109,79,0.88) 100%)",
      },

      /* ============================
         TRANSITION / EASING
      ============================ */
      transitionTimingFunction: {
        silent: "cubic-bezier(.22,.56,.18,1)",
        sharp: "cubic-bezier(.22,.61,.36,1)",
        settle: "cubic-bezier(.22,.1,.28,1)",
      },

      /* ============================
         KEYFRAMES
      ============================ */
      keyframes: {
        fadeUp: {
          "0%": {
            opacity: 0,
            transform: "translate3d(0,16px,0) scale(0.996)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0,0,0) scale(1)",
          },
        },

        aqFade: {
          "0%": {
            opacity: 0,
            transform: "translate3d(0,18px,0) scale(0.995)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0,0,0) scale(1)",
          },
        },

        sharpIn: {
          "0%": {
            opacity: 0,
            transform: "translate3d(-10px,0,0) scale(0.985)",
            filter: "brightness(0.88)",
            clipPath: "inset(0 100% 0 0)",
          },
          "68%": {
            opacity: 1,
            filter: "brightness(1.06)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0,0,0) scale(1)",
            filter: "brightness(1)",
            clipPath: "inset(0 0 0 0)",
          },
        },

        lineDraw: {
          "0%": {
            transform: "scaleX(0)",
            opacity: 0,
          },
          "100%": {
            transform: "scaleX(1)",
            opacity: 1,
          },
        },

        breatheSoft: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.008)" },
          "100%": { transform: "scale(1)" },
        },

        scrollLineBreath: {
          "0%": { opacity: 0.22, transform: "scaleY(0.96)" },
          "50%": { opacity: 0.38, transform: "scaleY(1)" },
          "100%": { opacity: 0.22, transform: "scaleY(0.96)" },
        },
      },

      /* ============================
         ANIMATION
      ============================ */
      animation: {
        fadeUp: "fadeUp 1.02s cubic-bezier(.22,.56,.18,1) forwards",
        aqFade: "aqFade 1.05s cubic-bezier(.22,.56,.18,1) forwards",
        sharpIn: "sharpIn 0.72s cubic-bezier(.22,.56,.18,1) forwards",
        lineDraw: "lineDraw 0.72s cubic-bezier(.22,.56,.18,1) forwards",
        breatheSoft: "breatheSoft 5.8s ease-in-out infinite",
        scrollLineBreath: "scrollLineBreath 4.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};