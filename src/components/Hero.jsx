import React from "react";
import heroRoom from "../assets/hero-room.png";

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden bg-[#0a0a0a] pb-[8rem] md:h-screen">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={heroRoom}
          alt="沖縄のWebデザイン / ホームページ制作｜GUSHIKEN DESIGN"
          className="
            hero-image
            h-full w-full object-cover
            object-[56%_center]
            md:object-center
          "
        />
      </div>

      {/* TOP VEIL */}
      <div
        className="
          pointer-events-none absolute inset-x-0 top-0 z-[1]
          h-[118px]
          bg-[linear-gradient(180deg,rgba(6,6,6,0.40)_0%,rgba(6,6,6,0.18)_46%,transparent_100%)]
        "
      />

      {/* GLOBAL DEPTH */}
      <div
        className="
          pointer-events-none absolute inset-0 z-[1]
          bg-[linear-gradient(180deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.06)_34%,rgba(0,0,0,0.18)_72%,rgba(0,0,0,0.34)_100%)]
        "
      />

      {/* LEFT SHADOW FOR TEXT */}
      <div
        className="
          pointer-events-none absolute inset-y-0 left-0 z-[1]
          w-[56%]
          bg-[linear-gradient(90deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.12)_42%,transparent_100%)]
        "
      />

      {/* RIGHT SUBTLE LINE */}
      <div
        className="
          pointer-events-none absolute right-[15.5%] top-[22%] z-[1]
          hidden h-[50%] w-px
          bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.08)_18%,rgba(255,255,255,0.06)_78%,transparent_100%)]
          lg:block
        "
      />

      {/* FILM NOISE */}
      <div
        className="
          pointer-events-none absolute inset-0 z-[1] opacity-[0.04]
          [background-image:radial-gradient(rgba(255,255,255,0.4)_0.42px,transparent_0.42px)]
          [background-size:4px_4px]
        "
      />

      {/* TEXT BLOCK */}
      <div
        className="
          absolute bottom-[4.25rem] left-7 right-6 z-[2]
          max-w-[620px]
          md:bottom-24 md:left-16
          lg:bottom-28 lg:left-20
        "
      >
        {/* LABEL */}
        <div className="hero-fade hero-fade-1">
          <p
            className="
              mb-5
              text-[0.72rem] tracking-[0.26em]
              text-white/52
              md:mb-6
            "
          >
            OKINAWA / WEB DESIGN / BRAND SITE
          </p>
        </div>

        {/* HOOK COPY : 少し右へ逃がす */}
        <div className="hero-fade hero-fade-2 md:pl-[10px]">
          <p
            className="
              mb-4
              text-[0.88rem] font-light leading-[1.7]
              tracking-[0.12em] text-white/82
              md:mb-5 md:text-[1rem]
            "
          >
            整えることで、価値は伝わる。
          </p>
        </div>

        {/* TITLE : わずかに右へ */}
        <h1
          className="
            hero-fade hero-fade-3
            mb-6
            text-[2.3rem] font-light leading-[1.04]
            tracking-[0.22em] text-white
            md:mb-7 md:pl-[6px] md:text-[4.1rem]
            lg:text-[4.6rem]
          "
        >
          GUSHIKEN
          <br />
          DESIGN
        </h1>

        {/* LINE : 少しだけ右 & 少し短め */}
        <div
          className="
            hero-fade hero-fade-4
            mb-7 h-px w-[78px] bg-white/46
            md:mb-8 md:ml-[6px]
          "
        />

        {/* BODY : さらに少し右へ逃がして、縦一直線感を崩す */}
        <div className="hero-fade hero-fade-5 md:ml-[18px]">
          <p
            className="
              max-w-[29rem]
              text-[0.95rem] leading-[2.08]
              tracking-[0.02em] text-white/84
              md:text-[1.05rem] md:leading-[2.12]
            "
          >
            <span className="mb-3 block text-[0.8rem] tracking-[0.12em] text-white/56 md:text-[0.84rem]">
              沖縄のWebデザイン / ホームページ制作
            </span>

            <span className="block">
              店舗・サロン・ブランドの価値を、
            </span>
            <span className="mt-1 block">
              上品に、伝わりやすく整えるWeb制作
            </span>

            <span className="mt-5 block text-[0.84em] leading-[1.9] tracking-[0.08em] text-white/54">
              見やすさと高級感を両立し、
              <br />
              信頼感のある印象へ整えます。
            </span>
          </p>
        </div>
      </div>

      {/* BOTTOM BREATH */}
      <div
        className="
          pointer-events-none absolute inset-x-0 bottom-0 z-[1]
          h-[180px]
          bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.10)_36%,rgba(0,0,0,0.28)_100%)]
        "
      />

      <style>{`
        .hero-image {
          filter: brightness(0.91) saturate(0.9) contrast(1.02);
          transform: scale(1.01);
          animation: heroStill 18s ease-in-out infinite;
          will-change: transform;
        }

        @keyframes heroStill {
          0% {
            transform: scale(1.01) translate3d(0, 0, 0);
          }
          50% {
            transform: scale(1.018) translate3d(-1px, 4px, 0);
          }
          100% {
            transform: scale(1.01) translate3d(0, 0, 0);
          }
        }

        .hero-fade {
          opacity: 0;
          transform: translate3d(0, 18px, 0) scale(0.995);
          animation: heroReveal 1.05s cubic-bezier(.22,.56,.18,1) forwards;
          will-change: transform, opacity;
          backface-visibility: hidden;
        }

        .hero-fade-1 { animation-delay: 0.06s; }
        .hero-fade-2 { animation-delay: 0.14s; }
        .hero-fade-3 { animation-delay: 0.22s; }
        .hero-fade-4 { animation-delay: 0.30s; }
        .hero-fade-5 { animation-delay: 0.38s; }

        @keyframes heroReveal {
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        @media (max-width: 768px) {
          .hero-image {
            animation-duration: 20s;
            filter: brightness(0.89) saturate(0.88) contrast(1.02);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-image,
          .hero-fade {
            animation: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}