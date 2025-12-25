// src/pages/works/OkiLato.jsx
import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

export default function OkiLato() {
  useEffect(() => window.scrollTo(0, 0), []);

  const assets = useMemo(
    () => ({
      hero: "/works1/oki-lato-hero2.png",
      visual1: "/works1/oki-lato-flavor1.png",
      visual2: "/works1/oki-lato-flavor2.png",
      visual3: "/works1/oki-lato-concept.png",
      store: "/works1/oki-lato-store.png",
    }),
    []
  );

  return (
    <section
      className="
        min-h-screen pb-44
        bg-[linear-gradient(180deg,#fbfdff_0%,#f2fbff_45%,#fbfdff_100%)]
        text-[#69bbff]
      "
    >
{/* =========================
    HERO — White × Aqua × Fruit（No Black）
========================= */}
<div className="relative w-full overflow-hidden">
  {/* ===== SP ===== */}
  <div className="block md:hidden w-full aspect-[4/5] relative">
    <img
      src={assets.hero}
      alt="OkiLato — Island Freshness Gelato Concept Site"
      className="
        absolute inset-0 w-full h-full object-cover
        brightness-[0.95] contrast-[0.98]
        scale-[1.04] transform-gpu
      "
    />

    <div
      className="
        absolute inset-0
        bg-gradient-to-b
        from-white/14
        via-[#e9f7fb]/22
        to-[#f6f3e8]/20
      "
    />
    <div
      className="
        absolute inset-0
        bg-[radial-gradient(circle_at_72%_25%,rgba(143,216,255,0.18),transparent_60%)]
      "
    />

    <div className="absolute bottom-10 left-6 right-6">
      <p className="text-[0.66rem] tracking-[0.34em] text-[#6faecb]">
        WORKS — GELATO BRAND SITE
      </p>

      <h1
        className="
          mt-3
          text-[2.05rem]
          tracking-[0.22em]
          font-light
          leading-[1.08]
          text-[#efe3b2]
        "
      >
        OkiLato
      </h1>

      <p className="mt-3 text-[#6faecb] tracking-[0.28em] text-[0.72rem] leading-relaxed">
        ISLAND FRESHNESS.
        <br />
        Light-filled gelato <br />from Okinawa.
      </p>

      <p className="mt-5 text-[#f3efe9] text-[0.92rem] leading-[2.0] max-w-[34ch]">
        透明な海の光と、果実の色。
        <br />
        “冷たさの余韻”まで設計した、<br />静かなブランドサイト。
      </p>

      <div className="mt-7">
        <a
          href="https://oki-lato.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center
            px-10 py-[13px]
            rounded-full
            bg-gradient-to-r
            from-[#8fd8ff]
            via-[#cfeeff]
            to-[#f3efe9]
            text-[#69bbff]
            text-[0.8rem]
            tracking-[0.28em]
            shadow-[0_22px_70px_rgba(143,216,255,0.30)]
            hover:-translate-y-[1px]
            transition
          "
        >
          VISIT SITE →
        </a>
      </div>
    </div>
  </div>

  {/* ===== PC ===== */}
  <div className="hidden md:block w-full h-[92vh] relative">
    <img
      src={assets.hero}
      alt="OkiLato — Island Freshness"
      className="
        absolute inset-0 w-full h-full object-cover
        brightness-[0.92] contrast-[0.98]
        scale-[1.06] transform-gpu
      "
    />

    <div
      className="
        absolute inset-0
        bg-gradient-to-b
        from-white/12
        via-[#e9f7fb]/20
        to-[#f6f3e8]/18
      "
    />

    <div
      className="
        absolute inset-0
        bg-[radial-gradient(circle_at_74%_22%,rgba(143,216,255,0.16),transparent_62%)]
      "
    />

    <div className="absolute bottom-[17vh] left-[clamp(28px,7vw,120px)] max-w-[720px]">
      <p className="text-[0.72rem] tracking-[0.38em] text-[#6faecb]">
        WORKS — GELATO BRAND SITE
      </p>

      <h1
        className="
          mt-6
          text-[4.2rem]
          tracking-[0.22em]
          font-light
          leading-[1.02]
          text-[#efe3b2]
        "
      >
        OkiLato
      </h1>

      <p className="mt-5 text-[#6faecb] tracking-[0.32em] text-[0.92rem] leading-[2.0]">
        ISLAND FRESHNESS.
        <br />
        Light-filled gelato from Okinawa.
      </p>

      <p className="mt-7 text-[#6faecb] text-[1.06rem] leading-[2.2] max-w-[46ch]">
        沖縄の光は、派手じゃない。
        <br />
        透明で、静かで、最後に余韻だけが残る。
        <br />
        その感覚を UI の余白と淡色に翻訳した。
      </p>

      <div className="mt-9 flex items-center gap-5">
        <a
          href="https://oki-lato.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center
            px-12 py-[14px]
            rounded-full
            bg-gradient-to-r
            from-[#8fd8ff]
            via-[#cfeeff]
            to-[#f3efe9]
            text-[#69bbff]
            text-[0.82rem]
            tracking-[0.28em]
            shadow-[0_26px_90px_rgba(143,216,255,0.34)]
            hover:-translate-y-[2px]
            transition
          "
        >
          VISIT SITE →
        </a>

        <div className="h-px w-24 bg-gradient-to-r from-[#8fd8ff] to-transparent" />
        <span className="text-[0.72rem] tracking-[0.30em] text-[#6faecb]">
          AQUA × SILENCE
        </span>
      </div>
    </div>
  </div>
</div>
      {/* =========================
          OUTLINE
      ========================= */}
      <div className="max-w-5xl mx-auto px-7 md:px-10 pt-28 md:pt-32 pb-24 md:pb-28">
        <h2 className="text-[0.78rem] tracking-[0.34em] text-[#6faecb] mb-10">
          PROJECT OUTLINE
        </h2>

        <p className="text-[1.15rem] md:text-[1.18rem] leading-[2.35] md:leading-[2.55] text-black/80 font-light">
          <span className="hidden md:block whitespace-pre-line">
{`光が満ちる、島のジェラート。

海の透明感、果実の色、やわらかな風。
OkiLato は “味”ではなく、
冷たさの中に残る「余韻」をデザインするブランドサイト。`}
          </span>

          <span className="block md:hidden">
            光が満ちる、島のジェラート。<br /><br />
            海の透明感、果実の色、やわらかな風。<br />
            OkiLato は “味”ではなく、<br />
            冷たさの中に残る「余韻」をデザインするブランドサイト。
          </span>
        </p>

        <div className="mt-14 grid md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-7">
            <h3 className="text-[0.78rem] tracking-[0.34em] text-[#6faecb] mb-5">
              DESIGN TRANSLATION
            </h3>

            <ul className="space-y-4 text-black/75 text-[0.98rem] md:text-[1.02rem] leading-[2.05]">
              <li>・淡色グラデーションで “光の温度” を再現</li>
              <li>・ガラス質感を意識したレイヤー設計</li>
              <li>・余白による体験設計と静かな導線</li>
              <li>・フレーバー写真を展示物として扱う構図</li>
            </ul>
          </div>

          <div className="md:col-span-5">
            <div className="
              rounded-[22px]
              border border-[#8fd8ff]/28
              bg-white/75
              p-7 md:p-8
              shadow-[0_26px_90px_rgba(143,216,255,0.25)]
            ">
              <p className="text-[0.78rem] tracking-[0.34em] text-[#6faecb]">
                SEO NOTES
              </p>

              <p className="mt-4 text-black/75 text-[0.95rem] leading-[2.05] font-light">
                OkiLato is a minimal gelato brand site concept inspired by Okinawa’s
                light, sea transparency, and fruit temperature.
              </p>

              <p className="mt-6 text-black/45 text-[0.82rem] tracking-[0.14em]">
                Keywords: Okinawa / Gelato / Minimal Brand / Aqua & Fruit / Clean UI
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-[#6faecb] text-[0.82rem] leading-relaxed">
          <p>Tech — React / Vite / Tailwind / Exhibition Layout</p>
        </div>
        {/* =========================
    VISUAL — FLAVOR PAIR
========================= */}
<div
  className="
    max-w-6xl mx-auto px-7 md:px-10
    mt-32 md:mt-40
    grid md:grid-cols-2
    gap-12 md:gap-20
  "
>
  <img
    src={assets.visual1}
    alt="OkiLato flavor visual 1"
    className="
      w-full
      rounded-[18px]
      md:translate-y-8
      shadow-[0_30px_90px_rgba(0,0,0,0.08)]
    "
  />

  <img
    src={assets.visual2}
    alt="OkiLato flavor visual 2"
    className="
      w-full
      rounded-[18px]
      md:-translate-y-8
      shadow-[0_30px_90px_rgba(0,0,0,0.08)]
    "
  />
</div>

        {/* =========================
    VISUAL — CONCEPT
========================= */}
<div
  className="
    max-w-5xl mx-auto px-7 md:px-10
    mt-28 md:mt-36
  "
>
  <img
    src={assets.visual3}
    alt="OkiLato concept visual"
    className="
      w-full
      rounded-[22px]
      shadow-[0_40px_120px_rgba(0,0,0,0.10)]
    "
  />
</div>

      </div>

      {/* =========================
          CTA + BACK
      ========================= */}
      <div className="text-center pb-32">
        <a
          href="https://oki-lato.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center
            px-14 py-[15px]
            rounded-full
            border border-[#8fd8ff]/40
            text-[0.86rem] tracking-[0.34em]
            hover:shadow-[0_18px_70px_rgba(143,216,255,0.35)]
            hover:-translate-y-[2px]
            transition-all duration-500
          "
        >
          VISIT SITE →
        </a>

        <div className="mt-12">
          <Link
            to="/works"
            className="text-[#6faecb] hover:text-[#69bbff] tracking-[0.28em] text-[0.78rem]"
          >
            ← BACK TO WORKS
          </Link>
        </div>
      </div>
    </section>
  );
}
