// src/pages/works/Koti.jsx
import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

export default function Koti() {
  useEffect(() => window.scrollTo(0, 0), []);

  const assets = useMemo(
    () => ({
      // ✅ ここだけ君の実ファイル名に合わせて差し替え
      hero: "/works1/koti-hero1.png",
      visual1: "/works1/koti-hero.png",
      visual2: "/works1/koti-visual2.png",
    }),
    []
  );

  const siteUrl = "https://koti-beta.vercel.app/";

  return (
    <section
      className="
        min-h-screen pb-44
        bg-[linear-gradient(180deg,#fbfaf7_0%,#f6f2ea_40%,#ffffff_100%)]
        text-[#141312]
      "
    >
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": "https://gushikendesign.com/works/koti#creativework",
      "name": "KOTI｜Quiet Living Furniture Concept Site",
      "description":
        "北欧の暮らしに着想した、光・余白・木の温度を中心に設計された家具ブランドのコンセプトサイト。プロダクトを売るのではなく、空間と静けさを体験として提示するUI設計。",
      "genre": [
        "Furniture Brand Design",
        "Interior Web Design",
        "Concept Website"
      ],
      "keywords": [
        "家具 ブランドサイト",
        "北欧 インテリア デザイン",
        "静かなWebデザイン",
        "余白 UI",
        "コンセプトサイト"
      ],
      "creator": {
        "@type": "Person",
        "name": "裕人 具志堅",
        "alternateName": "Yuto Gushiken",
        "url": "https://gushikendesign.com/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "GUSHIKEN DESIGN",
        "url": "https://gushikendesign.com/"
      },
      "inLanguage": "ja",
      "isBasedOn": {
        "@type": "WebSite",
        "name": "KOTI Official Concept Site",
        "url": "https://koti-beta.vercel.app/"
      },
      "url": "https://gushikendesign.com/works/koti"
    })
  }}
/>

      {/* =========================
          HERO — Beige × White × Black × Wood
      ========================= */}
      <div className="relative w-full overflow-hidden">
        {/* subtle film grain / glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_30%,rgba(0,0,0,0.06),transparent_55%),radial-gradient(900px_500px_at_80%_20%,rgba(120,85,40,0.08),transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.10] bg-[linear-gradient(0deg,rgba(0,0,0,0.06),transparent_40%,rgba(0,0,0,0.06))]" />
        </div>

        {/* ===== SP ===== */}
        <div className="relative block md:hidden">
          <div className="relative h-[78vh] min-h-[560px]">
            <img
              src={assets.hero}
              alt="KOTI hero"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
            {/* overlay to protect text */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,248,244,0.94)_0%,rgba(250,248,244,0.78)_35%,rgba(250,248,244,0.25)_50%,rgba(250,248,244,0.05)_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(900px_460px_at_18%_42%,rgba(255,255,255,0.88),transparent_60%)]" />

            <div className="relative z-10 mx-auto h-full max-w-[560px] px-6 pt-28">
              <p className="text-[11px] tracking-[0.38em] text-[#6a5a43]">
                WORKS — QUIET LIVING FURNITURE
              </p>

              <h1 className="mt-5 text-[42px] leading-[1.08] tracking-[0.06em] text-[#141312]">
                KOTI
              </h1>

              <p className="mt-4 max-w-[28ch] text-[13px] leading-[2.0] text-[#2b2621]">
                光と余白を、暮らしの中心に。
                <br />
                木の温度と静けさで整える北欧の空気感。
              </p>

              <div className="mt-9 flex flex-col gap-3">
                <a
                  href={siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center
                    rounded-full
                    border border-[#c9b892]
                    bg-[#141312]
                    px-6 py-3
                    text-[12px] tracking-[0.24em] text-[#fbfaf7]
                    transition
                    hover:bg-[#0f0e0d]
                    focus:outline-none focus:ring-2 focus:ring-[#c9b892]/60
                  "
                >
                  ENTER THE SITE →
                </a>

                <a
                  href="#detail"
                  className="
                    inline-flex items-center justify-center
                    rounded-full
                    border border-[#d9cfbe]
                    bg-white/70
                    px-6 py-3
                    text-[12px] tracking-[0.24em] text-[#2b2621]
                    transition
                    hover:bg-white
                    focus:outline-none focus:ring-2 focus:ring-[#c9b892]/45
                  "
                >
                  WORK DETAIL
                </a>
              </div>

              <div className="mt-10 flex items-center gap-3 text-[11px] tracking-[0.28em] text-[#6a5a43]/90">
                <span className="h-[1px] w-10 bg-[#c9b892]/70" />
                <span>BEIGE / WHITE / BLACK / WOOD</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== PC ===== */}
        <div className="relative hidden md:block">
          <div className="relative h-[84vh] min-h-[720px]">
            <img
              src={assets.hero}
              alt="KOTI hero"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />

            {/* left protection layer (text readability) */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,248,244,0.95)_0%,rgba(250,248,244,0.78)_38%,rgba(250,248,244,0.24)_50%,rgba(250,248,244,0.06)_80%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(1100px_560px_at_18%_48%,rgba(255,255,255,0.88),transparent_62%)]" />

            {/* inner */}
            <div className="relative z-10 mx-auto h-full max-w-[1180px] px-10">
              <div className="flex h-full items-center">
                <div className="w-[56%]">
                  <p className="text-[12px] tracking-[0.42em] text-[#6a5a43]">
                    WORKS — QUIET LIVING FURNITURE
                  </p>

                  <h1 className="mt-6 text-[74px] leading-[1.04] tracking-[0.10em] text-[#141312]">
                    KOTI
                  </h1>

                  <p className="mt-6 max-w-[44ch] text-[14px] leading-[2.05] text-[#2b2621]">
                    光と余白を、暮らしの中心に。
                    <br />
                    木の温度と静けさで整える北欧の空気感。
                    <br />
                    少ない言葉で、深い落ち着きを。
                  </p>

                  <div className="mt-10 flex items-center gap-4">
                    <a
                      href={siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center justify-center
                        rounded-full
                        border border-[#c9b892]
                        bg-[#141312]
                        px-8 py-3.5
                        text-[12px] tracking-[0.26em] text-[#fbfaf7]
                        transition
                        hover:bg-[#0f0e0d]
                        focus:outline-none focus:ring-2 focus:ring-[#c9b892]/60
                      "
                    >
                      ENTER THE SITE →
                    </a>

                    <a
                      href="#detail"
                      className="
                        inline-flex items-center justify-center
                        rounded-full
                        border border-[#d9cfbe]
                        bg-white/70
                        px-8 py-3.5
                        text-[12px] tracking-[0.26em] text-[#2b2621]
                        transition
                        hover:bg-white
                        focus:outline-none focus:ring-2 focus:ring-[#c9b892]/45
                      "
                    >
                      WORK DETAIL
                    </a>
                  </div>

                  <div className="mt-10 flex items-center gap-3 text-[11px] tracking-[0.28em] text-[#6a5a43]/90">
                    <span className="h-[1px] w-14 bg-[#c9b892]/70" />
                    <span>BEIGE / WHITE / BLACK / WOOD</span>
                  </div>
                </div>

                {/* right empty space to keep hero calm */}
                <div className="w-[44%]" />
              </div>
            </div>
          </div>
        </div>

        {/* bottom divider */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[linear-gradient(90deg,transparent,rgba(201,184,146,0.55),transparent)]" />
      </div>

      {/* =========================
          DETAIL
      ========================= */}
      <div id="detail" className="mx-auto max-w-[1180px] px-6 md:px-10">
        {/* intro */}
        <div className="pt-20 md:pt-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-[11px] tracking-[0.42em] text-[#6a5a43]">
                PREVIEW PAGE
              </p>
              <h2 className="mt-4 text-[30px] md:text-[40px] tracking-[0.06em] text-[#141312]">
                静けさを、家具というかたちに。
              </h2>
            </div>

            <p className="max-w-[52ch] text-[13px] leading-[2.0] text-[#2b2621]/85">
              北欧の暮らしが大切にしてきた「光」「余白」「木の温度」。
              KOTI は空間を埋めるのではなく、整えるための家具という思想で構成された
              “Quiet Living” のコンセプトサイトです。
            </p>
          </div>
        </div>

        {/* 3 images (hero + 2) — we show 2 here */}
        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* left text card */}
          <div
            className="
              md:col-span-5
              rounded-3xl
              border border-[#e7dece]
              bg-white/65
              p-8 md:p-10
              shadow-[0_18px_60px_rgba(20,19,18,0.08)]
            "
          >
            <p className="text-[11px] tracking-[0.40em] text-[#6a5a43]">
              CONCEPT
            </p>

            <h3 className="mt-4 text-[22px] md:text-[24px] tracking-[0.06em] text-[#141312]">
              光と余白を、暮らしの中心に。
            </h3>

            <p className="mt-5 text-[13px] leading-[2.05] text-[#2b2621]/90">
              強い主張はしない。けれど、空気が変わる。
              <br />
              木の表情、影の落ち方、手触りの温度感。
              <br />
              KOTI は「静けさの設計」をテーマにした北欧家具の世界観を、
              余白と光のレイヤーで表現します。
            </p>

            <div className="mt-8 h-[1px] w-full bg-[linear-gradient(90deg,rgba(201,184,146,0.0),rgba(201,184,146,0.55),rgba(201,184,146,0.0))]" />

            <div className="mt-7 grid grid-cols-3 gap-4">
              <div>
                <p className="text-[10px] tracking-[0.32em] text-[#6a5a43]">
                  MATERIAL
                </p>
                <p className="mt-2 text-[12px] leading-[1.8] text-[#2b2621]/90">
                  Light Oak
                  <br />
                  Linen
                  <br />
                  Ceramic
                </p>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.32em] text-[#6a5a43]">
                  MOOD
                </p>
                <p className="mt-2 text-[12px] leading-[1.8] text-[#2b2621]/90">
                  Soft Light
                  <br />
                  Quiet Space
                  <br />
                  Calm Shadow
                </p>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.32em] text-[#6a5a43]">
                  PALETTE
                </p>
                <p className="mt-2 text-[12px] leading-[1.8] text-[#2b2621]/90">
                  Beige
                  <br />
                  White
                  <br />
                  Black
                </p>
              </div>
            </div>
          </div>

          {/* right image */}
          <div className="md:col-span-7">
            <div
              className="
                relative overflow-hidden rounded-3xl
                border border-[#e7dece]
                bg-white/40
                shadow-[0_18px_70px_rgba(20,19,18,0.10)]
              "
            >
              <img
                src={assets.visual1}
                alt="KOTI visual 1"
                className="h-[320px] md:h-[420px] w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_40%,rgba(0,0,0,0.10))]" />
            </div>
          </div>
        </div>

        {/* second row */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <div className="md:col-span-7 order-2 md:order-1">
            <div
              className="
                relative overflow-hidden rounded-3xl
                border border-[#e7dece]
                bg-white/40
                shadow-[0_18px_70px_rgba(20,19,18,0.10)]
              "
            >
              <img
                src={assets.visual2}
                alt="KOTI visual 2"
                className="h-[320px] md:h-[420px] w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_25%_30%,rgba(255,255,255,0.22),transparent_55%)]" />
            </div>
          </div>

          <div className="md:col-span-5 order-1 md:order-2">
            <div
              className="
                h-full rounded-3xl
                border border-[#e7dece]
                bg-[#141312]
                p-8 md:p-10
                text-[#fbfaf7]
                shadow-[0_18px_60px_rgba(20,19,18,0.12)]
              "
            >
              <p className="text-[11px] tracking-[0.40em] text-[#c9b892]">
                POINT
              </p>

              <h3 className="mt-4 text-[22px] md:text-[24px] tracking-[0.06em]">
                余白が、プロダクトになる。
              </h3>

              <p className="mt-5 text-[13px] leading-[2.05] text-[#fbfaf7]/85">
                見せたいのは、家具そのものではなく “空間”。
                <br />
                だから写真は多くしない。情報も盛らない。
                <br />
                その代わり、光と影の密度を上げて、
                静けさの説得力を作る。
              </p>

              <div className="mt-8 h-[1px] w-full bg-[linear-gradient(90deg,transparent,rgba(201,184,146,0.55),transparent)]" />

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center
                    rounded-full
                    border border-[#c9b892]
                    bg-transparent
                    px-7 py-3
                    text-[12px] tracking-[0.26em] text-[#fbfaf7]
                    transition
                    hover:bg-[#fbfaf7] hover:text-[#141312]
                    focus:outline-none focus:ring-2 focus:ring-[#c9b892]/60
                  "
                >
                  OPEN KOTI SITE →
                </a>

                <a
                  href="#bottom"
                  className="
                    inline-flex items-center justify-center
                    rounded-full
                    border border-[#ffffff]/20
                    bg-white/5
                    px-7 py-3
                    text-[12px] tracking-[0.26em] text-[#fbfaf7]/80
                    transition
                    hover:bg-white/10
                    focus:outline-none focus:ring-2 focus:ring-[#c9b892]/30
                  "
                >
                  BACK LINKS ↓
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            BOTTOM NAV
        ========================= */}
        <div id="bottom" className="mt-20 md:mt-28">
          <div className="mx-auto max-w-[860px] text-center">
            {/* ✅ ここ：BACK TO WORKS の上にサイトボタン置く */}
            <a
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center
                rounded-full
                border border-[#c9b892]
                bg-[#141312]
                px-8 py-3.5
                text-[12px] tracking-[0.26em] text-[#fbfaf7]
                shadow-[0_18px_60px_rgba(20,19,18,0.12)]
                transition
                hover:bg-[#0f0e0d]
                focus:outline-none focus:ring-2 focus:ring-[#c9b892]/60
              "
            >
              ENTER THE KOTI SITE →
            </a>

            <div className="mt-10">
              <Link
                to="/works"
                className="text-[#6a5a43] hover:text-[#141312] tracking-[0.28em] text-[0.75rem]"
              >
                ← BACK TO WORKS
              </Link>
            </div>

            <p className="mt-8 text-[11px] tracking-[0.34em] text-[#6a5a43]/70">
              © 2025 KOTI — Quiet Living Furniture (Concept)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
