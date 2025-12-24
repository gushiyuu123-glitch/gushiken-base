import React, { useEffect } from "react";

export default function GoldenVeil() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* =========================================================
          GLOBAL GOLD EFFECT — (A + C 強化版)
      ========================================================= */}
      {/* Golden Dust (粒子の薄膜) */}
      <div
        className="
          fixed inset-0 z-[2] pointer-events-none
          opacity-[0.22] mix-blend-screen
          bg-[radial-gradient(circle,rgba(240,210,130,0.18)_0%,transparent_60%)]
          animate-goldFloat
        "
      />

      {/* Gold Beam（横切る金のスリット光） */}
      <div
        className="
          fixed inset-0 z-[2] pointer-events-none
          opacity-[0.13]
          bg-[linear-gradient(90deg,transparent,rgba(230,185,120,0.28),transparent)]
          animate-goldBeam
        "
      />

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <section className="relative z-[1] bg-[#070606] text-white min-h-screen pb-36">

        {/* =========================================================
            HERO — GOLDEN VEIL（SP右寄せ＋暗めゴールドヴェール）
        ========================================================= */}
        <div className="relative w-full overflow-hidden">

          {/* ===== SP ===== */}
          <div className="block md:hidden w-full aspect-[4/5] relative">
            <img
              src="/works1/orietta-goldenveil-hero.webp"
              alt="BLACK ORIETTA — GOLDEN VEIL"
              className="
                absolute inset-0 w-full h-full
                object-cover object-[50%_50%]
                brightness-[0.82] contrast-[1.02]
                scale-[1.05] transform-gpu
              "
            />

            {/* 追加：SPだけ少し暗めの黄金グラデ */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-b
                from-black/55 via-black/20 to-black/85
              "
            />
            <div
              className="
                absolute inset-0
                bg-[radial-gradient(circle_at_30%_18%,rgba(214,170,92,0.18),transparent_60%)]
              "
            />

            <div className="absolute bottom-11 left-6 right-6">
              <p className="text-[0.68rem] tracking-[0.34em] text-white/55">
                BLACK ORIETTA / EAU DE PARFUM
              </p>
              <h1 className="mt-3 text-[2.05rem] tracking-[0.26em] font-light leading-[1.08]">
                GOLDEN VEIL
              </h1>
              <p className="mt-3 text-white/58 tracking-[0.30em] text-[0.72rem] leading-relaxed">
                A quiet glow, held inside darkness.
              </p>

              <div className="mt-5 h-px w-20 bg-gradient-to-r from-[#d8b86a]/60 to-transparent" />
            </div>
          </div>

          {/* ===== PC ===== */}
          <div className="hidden md:block w-full h-[92vh] relative">

            <img
              src="/works1/orietta-goldenveil-hero.webp"
              alt="BLACK ORIETTA — GOLDEN VEIL"
              className="
                absolute inset-0 w-full h-full
                object-cover object-[62%_45%]
                brightness-[0.88] contrast-[1.02]
                scale-[1.06] transform-gpu
              "
            />

            <div
              className="
                absolute inset-0
                bg-[radial-gradient(circle_at_32%_18%,rgba(214,170,92,0.16),transparent_56%)]
                mix-blend-screen opacity-90
              "
            />

            <div
              className="
                absolute inset-0
                bg-gradient-to-b
                from-black/42 via-black/12 to-black/88
              "
            />
            <div className="absolute inset-0 [box-shadow:inset_0_0_180px_rgba(0,0,0,0.62)]" />

            <div className="absolute bottom-[18vh] left-[clamp(36px,9vw,170px)] max-w-[720px]">
              <p className="text-[0.78rem] tracking-[0.36em] text-white/55">
                BLACK ORIETTA / EAU DE PARFUM
              </p>

              <h1 className="mt-5 text-[4.3rem] tracking-[0.30em] font-light leading-[1.03]">
                GOLDEN VEIL
              </h1>

              <p className="mt-6 text-white/58 tracking-[0.30em] text-[0.92rem] leading-[2.0]">
                A quiet glow, held inside darkness.
                <br />
                Silence becomes luxury — not shown, but felt.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-28 bg-gradient-to-r from-[#d8b86a]/70 to-transparent" />
                <span className="text-[0.72rem] tracking-[0.34em] text-white/40">
                  NOIR × AURUM × VEIL
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            OUTLINE
        ========================================================= */}
        <div className="max-w-4xl mx-auto px-8 md:px-0 mt-28 md:mt-32 mb-24 md:mb-28">
          <h2 className="text-[0.92rem] tracking-[0.34em] text-white/40 mb-10">
            PROJECT OUTLINE
          </h2>

          <p
            className="
              text-[1.12rem] md:text-[1.16rem]
              leading-[2.55]
              text-white/88 font-light whitespace-pre-line tracking-[0.01em]
            "
          >
{`闇の中に、黄金の“気配”だけを残す。

GOLDEN VEIL は、香りそのものではなく
「香りが残す余白」を主役にした作品。

光は語らない。
ただ、輪郭だけを浮かび上がらせる。

黒の沈黙に、金の緊張をひとすじ。
見せすぎず、消さず、静かに支配する。

— Black Orietta の世界観を
“抽象美 × モード” で再定義した詳細ページ。`}
          </p>

          <div className="mt-10 text-white/35 text-[0.82rem] leading-relaxed">
            <p>Tech — React / Vite / Tailwind / GSAP optional</p>
          </div>
        </div>

        {/* =========================================================
            VISUALS
        ========================================================= */}
        <div className="max-w-5xl mx-auto px-8 md:px-0 mt-16 space-y-20 md:space-y-24">

          {/* Visual 01 */}
          <div className="relative overflow-hidden border border-white/10">
            <img
              src="/works1/orietta-goldenveil-visual1.webp"
              alt="GOLDEN VEIL Visual 01"
              className="w-full object-cover brightness-[0.92] contrast-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/25" />
            <div className="absolute inset-0 [box-shadow:inset_0_0_140px_rgba(0,0,0,0.52)]" />

            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
              <p className="text-[0.7rem] md:text-[0.72rem] tracking-[0.34em] text-white/50">
                VISUAL 01
              </p>
              <p className="mt-2 text-white/70 text-[0.95rem] md:text-[1.02rem] font-light">
                The veil is not a costume — it is a boundary.
              </p>
            </div>
          </div>

          {/* Visual 02 */}
          <div className="relative overflow-hidden border border-white/10">
            <img
              src="/works1/orietta-goldenveil-visual2.webp"
              alt="GOLDEN VEIL Visual 02"
              className="w-full object-cover brightness-[0.93] contrast-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/28" />
            <div className="absolute inset-0 [box-shadow:inset_0_0_140px_rgba(0,0,0,0.52)]" />

            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
              <p className="text-[0.7rem] md:text-[0.72rem] tracking-[0.34em] text-white/50">
                VISUAL 02
              </p>
              <p className="mt-2 text-white/70 text-[0.95rem] md:text-[1.02rem] font-light">
                A single slit of gold — enough to define the whole silence.
              </p>
            </div>
          </div>

        </div>

        {/* =========================================================
            CTA
        ========================================================= */}
        <div className="text-center mt-28 md:mt-32">
          <a
            href="https://black-orietta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              px-14 py-[0.95rem]
              text-[0.86rem]
              tracking-[0.34em]
              border border-[#d8b86a]/35
              text-[#f1e4c6]
              rounded-full
              hover:border-[#d8b86a]/70
              hover:shadow-[0_0_34px_rgba(216,184,106,0.22)]
              hover:-translate-y-[2px]
              transition-all duration-500
            "
          >
            VISIT BLACK ORIETTA →
          </a>

          <p className="mt-7 text-white/35 text-[0.72rem] tracking-[0.30em]">
            SILENCE DESIGNED / AURUM HELD
          </p>
        </div>

      </section>
    </>
  );
}
