// src/pages/works/LuminRoom.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LuminRoom() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const img = heroRef.current;
    const glow = glowRef.current;

    if (!img) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { scale: 1.02, y: 0 },
        {
          scale: 1.08,
          y: 24,
          ease: "none",
          scrollTrigger: {
            trigger: ".lumin-hero",
            start: "top top",
            end: "bottom+=900 top",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        img,
        { opacity: 0.86 },
        {
          opacity: 1,
          duration: 2.8,
          ease: "power2.out",
        }
      );

      if (glow) {
        gsap.fromTo(
          glow,
          { opacity: 0.18, scale: 1 },
          {
            opacity: 0.32,
            scale: 1.06,
            duration: 3.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          }
        );
      }

      gsap.fromTo(
        ".lumin-fade",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.12,
          ease: "power2.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="
        relative min-h-screen overflow-hidden
        bg-[#f4f7fa] text-[#0f1115]
      "
    >
      {/* 背景 */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0 pointer-events-none
          bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(239,243,247,0.88)_42%,rgba(231,236,240,0.92)_100%)]
        "
      />
      <div
        aria-hidden
        className="
          absolute inset-0 z-0 pointer-events-none
          bg-[radial-gradient(circle_at_50%_12%,rgba(255,255,255,0.88),transparent_42%)]
        "
      />
      <div
        ref={glowRef}
        aria-hidden
        className="
          absolute left-1/2 top-[10%] z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full
          bg-[radial-gradient(circle,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.18)_42%,transparent_72%)]
          blur-[28px] pointer-events-none
        "
      />

      {/* HERO */}
      <section
        className="
          lumin-hero
          relative z-10
          min-h-[82vh]
          flex items-center justify-center
          px-6 md:px-10
          pt-24 md:pt-28
        "
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            ref={heroRef}
            src="/works1/lumin-main.png"
            alt="LÜMIN — Entry Visual"
            className="
              absolute inset-0 h-full w-full
              object-cover object-[50%_46%]
              opacity-[0.9]
              select-none pointer-events-none
            "
          />

          <div
            className="
              absolute inset-0
              bg-[linear-gradient(180deg,rgba(255,255,255,0.68)_0%,rgba(244,247,250,0.28)_34%,rgba(244,247,250,0.82)_100%)]
            "
          />
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.30),transparent_52%)]
            "
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1120px]">
          <div className="lumin-fade max-w-[760px]">
            <p
              className="
                text-[0.68rem] md:text-[0.74rem]
                tracking-[0.34em]
                text-black/42
              "
            >
              WORKS — AUDIO / SILVER ATMOSPHERE
            </p>

            <h1
              className="
                mt-6
                text-[2.3rem] md:text-[4.2rem]
                tracking-[0.22em] md:tracking-[0.18em]
                font-light
                text-black/86
                leading-[1.02]
              "
            >
              LÜMIN
            </h1>

            <div className="mt-7 flex items-center gap-4 md:gap-5">
              <span className="h-[1px] w-10 md:w-14 bg-black/18" />
              <p
                className="
                  text-[0.72rem] md:text-[0.86rem]
                  tracking-[0.28em]
                  text-black/44
                "
              >
                ENTRY ROOM
              </p>
            </div>

            <p
              className="
                lumin-fade
                mt-8 md:mt-10
                max-w-[640px]
                text-[0.95rem] md:text-[1.08rem]
                leading-[2.05] md:leading-[2.15]
                tracking-[0.08em]
                text-black/58
              "
            >
              プロダクトの精度と静けさを、
              <br />
              白銀の空気の中で切り取った前室。
            </p>
          </div>
        </div>
      </section>

      {/* MIDDLE STRIP */}
      <section className="relative z-10 px-6 md:px-10">
        <div
          className="
            lumin-fade
            mx-auto max-w-[1120px]
            border-y border-black/8
            py-7 md:py-8
          "
        >
          <p
            className="
              text-center
              text-[0.66rem] md:text-[0.74rem]
              tracking-[0.34em]
              text-black/34
            "
          >
            PRECISION / SILENCE / METAL / LIGHT
          </p>
        </div>
      </section>

      {/* VISUAL PANEL */}
      <section className="relative z-10 px-6 md:px-10 pt-16 md:pt-24">
        <div
          className="
            lumin-fade
            mx-auto max-w-[1120px]
            grid md:grid-cols-[1.2fr_0.8fr]
            gap-8 md:gap-10
            items-stretch
          "
        >
          <div
            className="
              relative overflow-hidden
              rounded-[22px]
              border border-white/55
              bg-white/38
              shadow-[0_28px_90px_rgba(15,17,21,0.06)]
              backdrop-blur-[8px]
            "
          >
            <img
              src="/works1/lumin-main.png"
              alt="LÜMIN visual"
              className="h-[380px] md:h-[520px] w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.18))]" />
          </div>

          <div
            className="
              rounded-[22px]
              border border-black/7
              bg-white/52
              shadow-[0_28px_90px_rgba(15,17,21,0.05)]
              backdrop-blur-[8px]
              p-8 md:p-10
              flex flex-col justify-between
            "
          >
            <div>
              <p
                className="
                  text-[0.68rem] md:text-[0.74rem]
                  tracking-[0.30em]
                  text-black/35
                "
              >
                OVERVIEW
              </p>

              <p
                className="
                  mt-6
                  text-[0.95rem] md:text-[1.02rem]
                  leading-[2.15]
                  tracking-[0.06em]
                  text-black/58
                "
              >
                LÜMINのために制作した、
                静かな入口ページです。
                <br />
                商品そのものを強く語るのではなく、
                まずは質感と空気だけが残るように整えました。
              </p>
            </div>

            <div className="mt-10 md:mt-14">
     <a
  href="https://lumin-audio.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex w-full items-center justify-center
    rounded-full
    border border-[#ffffff]/40
    bg-[linear-gradient(180deg,rgba(70,76,84,0.78)_0%,rgba(42,47,54,0.74)_100%)]
    backdrop-blur-[12px]
    px-8 py-4
    text-[0.76rem] md:text-[0.82rem]
    tracking-[0.30em]
    text-white/90
    shadow-[0_18px_55px_rgba(15,17,21,0.14)]
    hover:bg-[linear-gradient(180deg,rgba(60,66,74,0.84)_0%,rgba(36,41,48,0.80)_100%)]
    hover:shadow-[0_24px_72px_rgba(15,17,21,0.18)]
    transition-all duration-500
  "
>
  ENTER LÜMIN →
</a>

              <p
                className="
                  mt-4
                  text-center
                  text-[0.62rem]
                  tracking-[0.22em]
                  text-black/26
                "
              >
                SILVER ATMOSPHERE × AUDIO OBJECT
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="relative z-10 px-6 md:px-10 pt-18 md:pt-24 pb-20 md:pb-24">
        <div className="lumin-fade mx-auto max-w-[1120px] text-center">
          <Link
            to="/works"
            className="
              text-[0.68rem] md:text-[0.74rem]
              tracking-[0.24em]
              text-black/26
              hover:text-black/46
              transition
            "
          >
            ← BACK TO WORKS
          </Link>
        </div>
      </section>

      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://gushikendesign.com/works/luminroom#webpage",
            url: "https://gushikendesign.com/works/LuminRoom",
            name: "LÜMIN — Entry Room | GUSHIKEN DESIGN",
            description:
              "LÜMINのために制作した、白銀の空気感と静けさを大切にした入口ページ。プロダクトの質感と上品な印象を、落ち着いたトーンで見せる作品。",
            isPartOf: {
              "@id": "https://gushikendesign.com/#website",
            },
          }),
        }}
      />
    </main>
  );
}