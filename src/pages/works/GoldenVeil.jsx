import React, { useEffect } from "react";

export default function GoldenVeil() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* =========================================================
          GLOBAL GOLD EFFECT — Hero〜Outline 限定（時間減衰）
      ========================================================= */}
      <div
        className="
          fixed inset-0 z-[2] pointer-events-none
          opacity-[0.20] md:opacity-[0.24]
          mix-blend-screen
          bg-[radial-gradient(circle,rgba(240,210,130,0.18)_0%,transparent_60%)]
          animate-goldFloat
        "
      />
      <div
        className="
          fixed inset-0 z-[2] pointer-events-none
          opacity-[0.12]
          bg-[linear-gradient(90deg,transparent,rgba(230,185,120,0.28),transparent)]
          animate-goldBeam
        "
      />

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <section className="relative z-[1] bg-[#070606] text-white min-h-screen pb-36">

        {/* =========================================================
            HERO
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
                scale-[1.05]
              "
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/85" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(214,170,92,0.18),transparent_60%)]" />

            <div className="absolute bottom-11 left-6 right-6">
              <p className="text-[0.68rem] tracking-[0.34em] text-white/55">
                BLACK ORIETTA / EAU DE PARFUM
              </p>
              <h1 className="mt-3 text-[2.05rem] tracking-[0.26em] font-light leading-[1.08]">
                GOLDEN VEIL
              </h1>
              <p className="mt-3 text-white/58 tracking-[0.30em] text-[0.72rem]">
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
                scale-[1.06]
              "
            />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_32%_18%,rgba(214,170,92,0.16),transparent_56%)] mix-blend-screen" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/42 via-black/12 to-black/88" />
            <div className="absolute inset-0 [box-shadow:inset_0_0_180px_rgba(0,0,0,0.62)]" />

            <div className="absolute bottom-[18vh] left-[clamp(36px,9vw,170px)] max-w-[720px]">
              <p className="text-[0.78rem] tracking-[0.36em] text-white/55">
                BLACK ORIETTA / EAU DE PARFUM
              </p>
              <h1 className="mt-5 text-[4.3rem] tracking-[0.30em] font-light leading-[1.03]">
                GOLDEN VEIL
              </h1>
              <p className="mt-6 text-white/58 tracking-[0.30em] text-[0.92rem] leading-[2.0]">
                A quiet glow, held inside darkness.<br />
                Silence becomes luxury — not shown, but felt.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================
            OUTLINE — SP最適化済
        ========================================================= */}
        <div className="max-w-4xl mx-auto px-8 md:px-0 mt-28 md:mt-32 mb-24 md:mb-28">
          <h2 className="text-[0.92rem] tracking-[0.34em] text-white/40 mb-10">
            PROJECT OUTLINE
          </h2>

          {/* PC */}
          <p className="hidden md:block text-[1.16rem] leading-[2.55] text-white/88 font-light whitespace-pre-line">
{`闇の中に、黄金の“気配”だけを残す。

GOLDEN VEIL は、香りそのものではなく
「香りが残す余白」を主役にした作品。

光は語らない。
ただ、輪郭だけを浮かび上がらせる。

黒の沈黙に、金の緊張をひとすじ。
見せすぎず、消さず、静かに支配する。`}
          </p>

          {/* SP */}
          <p className="block md:hidden text-[1.02rem] leading-[2.15] text-white/88 font-light">
            闇の中に、黄金の気配だけを残す。<br /><br />
            GOLDEN VEIL は、香りそのものではなく
            「香りが残す余白」を主役にした作品。<br /><br />
            光は語らない。<br />
            ただ、輪郭だけを浮かび上がらせる。<br /><br />
            黒の沈黙に、金の緊張をひとすじ。
          </p>

          <div className="mt-10 text-white/35 text-[0.82rem]">
            Tech — React / Vite / Tailwind / GSAP optional
          </div>
        </div>

        {/* =========================================================
            VISUALS
        ========================================================= */}
        <div className="max-w-5xl mx-auto px-8 md:px-0 space-y-24">
          {["visual1", "visual2"].map((v, i) => (
            <div key={i} className="relative overflow-hidden border border-white/10">
              <img
                src={`/works1/orietta-goldenveil-${v}.webp`}
                alt={`Golden Veil Visual ${i + 1}`}
                className="w-full object-cover brightness-[0.93]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/28" />
            </div>
          ))}
        </div>

        {/* =========================================================
            CTA
        ========================================================= */}
        <div className="text-center mt-32">
          <a
            href="https://black-orietta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex px-14 py-[0.95rem]
              text-[0.86rem] tracking-[0.34em]
              border border-[#d8b86a]/35 text-[#f1e4c6]
              rounded-full
              hover:border-[#d8b86a]/70
              hover:shadow-[0_0_34px_rgba(216,184,106,0.22)]
              transition
            "
          >
            VISIT BLACK ORIETTA →
          </a>

          <p className="mt-4 text-white/28 text-[0.68rem] tracking-[0.28em]">
            A fragrance page designed as silence.
          </p>
        </div>
      </section>
    </>
  );
}
