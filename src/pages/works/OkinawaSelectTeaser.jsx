// src/pages/works/OkinawaSelectTeaser.jsx
import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

/**
 * OKINAWA SELECT — TEASER (Trailer page)
 * - Hero含めて画像4枚固定
 * - “本編前の予告”＝説明しすぎず、余白で魅せる
 *
 * 使い方：
 * 1) 画像を /public/works1/ に置く
 *    - okinawa-select-hero.jpg
 *    - okinawa-select-02.jpg
 *    - okinawa-select-03.jpg
 *    - okinawa-select-04.jpg
 * 2) App.jsx にルート追加
 *    <Route path="/works/okinawa-select" element={<OkinawaSelectTeaser />} />
 */
export default function OkinawaSelectTeaser() {
  useEffect(() => window.scrollTo(0, 0), []);

  const assets = useMemo(
    () => ({
      hero: "/works1/okinawa-select-hero.png", // IMG_01 (Hero)
      m2: "/works1/okinawa-select-02.png", // IMG_02 (Material)
      m3: "/works1/okinawa-select-03.png", // IMG_03 (Structure)
      m4: "/works1/okinawa-select-04.png", // IMG_04 (Commerce)
    }),
    []
  );

  return (
    <section className="min-h-screen bg-[#f6f3ee] text-[#231f1b] pb-28">
      {/* =========================
          HERO (IMG_01)
      ========================= */}
      <div className="relative w-full overflow-hidden">
        {/* SP */}
        <div className="block md:hidden relative w-full h-[78vh]">
          <img
            src={assets.hero}
            alt="OKINAWA SELECT — Trailer"
            className="
              absolute inset-0 w-full h-full object-cover
              object-[50%_52%]
              scale-[1.04] transform-gpu
              brightness-[0.98] contrast-[0.98]
            "
          />

          {/* Quiet veil */}
          <div className="absolute inset-0 bg-white/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-[#f6f3ee]/35 to-[#f6f3ee]/88" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_22%,rgba(255,255,255,0.55),transparent_62%)]" />

          <div className="absolute inset-x-6 bottom-12">
            <p className="text-[0.64rem] tracking-[0.38em] text-[#6b625a]">
              WORKS — CONCEPT COMMERCE SITE
            </p>

            <h1 className="mt-4 text-[2.05rem] tracking-[0.20em] font-light leading-[1.05]">
              OKINAWA SELECT
            </h1>

            <p className="mt-4 text-[#6b625a] tracking-[0.28em] text-[0.72rem] leading-[2.0]">
              Quiet Materials,
              <br />
              Edited for Living.
            </p>

            <p className="mt-6 text-[#231f1b]/78 text-[0.95rem] leading-[2.05] max-w-[34ch]">
              沖縄の素材を、<br />
              “暮らしの空気”として再編集する。
            </p>

            {/* Teaser CTA (控えめ) */}
            <div className="mt-8">
              <a
                href="https://okinawa-select.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center
                  px-7 py-[12px]
                  rounded-full
                  border border-[#231f1b]/18
                  bg-white/20
                  backdrop-blur-[6px]
                  text-[#231f1b]
                  text-[0.72rem]
                  tracking-[0.30em]
                  hover:bg-white/30
                  hover:border-[#231f1b]/26
                  hover:-translate-y-[1px]
                  transition-all duration-500
                "
              >
                ENTER OKINAWA SELECT →
              </a>

              <div className="mt-4">
                <Link
                  to="/works"
                  className="inline-flex text-[#6b625a] hover:text-[#231f1b] tracking-[0.28em] text-[0.72rem]"
                >
                  ← BACK TO WORKS
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* PC */}
        <div className="hidden md:block relative w-full h-[86vh]">
          <img
            src={assets.hero}
            alt="OKINAWA SELECT — Trailer"
            className="
              absolute inset-0 w-full h-full object-cover
              object-[50%_55%]
              scale-[1.04] transform-gpu
              brightness-[0.98] contrast-[0.98]
            "
          />

          {/* Quiet veil */}
          <div className="absolute inset-0 bg-white/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/08 via-[#f6f3ee]/24 to-[#f6f3ee]/86" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_64%_22%,rgba(255,255,255,0.55),transparent_62%)]" />

          {/* Title block */}
          <div className="absolute left-[clamp(28px,6.5vw,120px)] bottom-[14vh] max-w-[760px]">
            <p className="text-[0.68rem] tracking-[0.42em] text-[#6b625a]">
              WORKS — CONCEPT COMMERCE SITE
            </p>

            <h1 className="mt-6 text-[4.1rem] tracking-[0.20em] font-light leading-[1.02]">
              OKINAWA SELECT
            </h1>

            <p className="mt-6 text-[#6b625a] tracking-[0.30em] text-[0.90rem] leading-[2.05]">
              Quiet Materials,
              <br />
              Edited for Living.
            </p>

            <div className="mt-7 h-px w-[clamp(180px,22vw,320px)] bg-gradient-to-r from-[#231f1b]/45 to-transparent" />

            <p className="mt-8 text-[#231f1b]/74 text-[1.06rem] leading-[2.25] max-w-[46ch]">
              布、石、サンゴ、香り。
              <br />
              商品ではなく、空気として編集する。
            </p>

            {/* Teaser CTA (控えめ / 1回だけ) */}
            <div className="mt-10 flex items-center gap-6">
              <a
                href="https://okinawa-select.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center
                  px-9 py-[12px]
                  rounded-full
                  border border-[#231f1b]/18
                  bg-white/18
                  backdrop-blur-[8px]
                  text-[#231f1b]
                  text-[0.74rem]
                  tracking-[0.30em]
                  hover:bg-white/28
                  hover:border-[#231f1b]/26
                  hover:-translate-y-[1px]
                  transition-all duration-500
                "
              >
                ENTER OKINAWA SELECT →
              </a>

              <span className="text-[0.68rem] tracking-[0.34em] text-[#6b625a]">
                A QUIET TRAILER PAGE
              </span>
            </div>
          </div>

          {/* Small back (PC only, very quiet) */}
          <div className="absolute right-[clamp(20px,3vw,44px)] bottom-[6vh]">
            <Link
              to="/works"
              className="text-[#6b625a] hover:text-[#231f1b] tracking-[0.32em] text-[0.68rem]"
            >
              ← BACK
            </Link>
          </div>
        </div>
      </div>

      {/* =========================
          BODY (No extra images)
          "予告"＝説明しすぎない
      ========================= */}
      <div className="max-w-6xl mx-auto px-7 md:px-10">
        {/* Intro text only */}
        <div className="pt-20 md:pt-24">
          <div className="border-t border-[#231f1b]/10 pt-14 md:pt-16">
            <p className="text-center text-[0.72rem] tracking-[0.36em] text-[#6b625a]">
              THIS IS A TRAILER
            </p>

            <h2 className="mt-8 text-center text-[1.18rem] md:text-[1.22rem] font-light tracking-[0.18em] text-[#231f1b]/92 leading-[2.2]">
              OKINAWA SELECT は、
              <br className="hidden md:block" />
              沖縄の素材を「商品」として並べるためのサイトではありません。
            </h2>

            <p className="mt-10 text-center text-[#231f1b]/70 text-[0.98rem] md:text-[1.04rem] leading-[2.35] md:leading-[2.55] font-light max-w-[62ch] mx-auto">
              布、石、サンゴ、香り。
              <br />
              それらを “暮らしの空気” として再編集するための
              <br className="hidden md:block" />
              コンセプト・コマースサイトです。
            </p>
          </div>
        </div>

        {/* =========================
            SECTION 03 — MATERIAL FIRST (IMG_02)
        ========================= */}
        <Section
          kicker="MATERIAL FIRST"
          title="素材が先に立ち上がる構成。"
          body={
            <>
              商品名より先に、質感と温度が届くように。
              <br />
              価格ではなく、触れたくなる“静かな衝動”を設計した。
            </>
          }
          img={assets.m2}
          imgAlt="OKINAWA SELECT — Material cut"
          align="right"
        />

        {/* =========================
            SECTION 04 — STRUCTURE (IMG_03)
        ========================= */}
        <Section
          kicker="STRUCTURE AS EXPERIENCE"
          title="情報設計そのものが、ブランド体験になる。"
          body={
            <>
              Concept / Collections / Items / Story
              <br />
              構造の順番が、そのまま“理解のリズム”になるように。
            </>
          }
          img={assets.m3}
          imgAlt="OKINAWA SELECT — Structure cut"
          align="left"
        />

        {/* =========================
            SECTION 05 — QUIET COMMERCE (IMG_04)
        ========================= */}
        <Section
          kicker="QUIET COMMERCE"
          title="買わせない。急がせない。"
          body={
            <>
              それでも、人は手を伸ばす。
              <br />
              “静かなコマース”の触感を残すために、UIの主張を削った。
            </>
          }
          img={assets.m4}
          imgAlt="OKINAWA SELECT — Commerce cut"
          align="right"
        />

        {/* =========================
            Final CTA (only once)
        ========================= */}
        <div className="pt-16 md:pt-20 pb-8 text-center">
          <a
            href="https://okinawa-select.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              px-10 py-[12px]
              rounded-full
              border border-[#231f1b]/16
              text-[#231f1b]
              bg-white/12
              hover:bg-white/22
              hover:border-[#231f1b]/24
              hover:-translate-y-[1px]
              transition-all duration-500
              text-[0.74rem]
              tracking-[0.30em]
            "
          >
            ENTER OKINAWA SELECT →
          </a>

          <div className="pt-10 pb-6">
            <Link
              to="/works"
              className="text-[#6b625a] hover:text-[#231f1b] tracking-[0.28em] text-[0.74rem]"
            >
              ← BACK TO WORKS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   Section Component
   - 画像は必ず1枚（合計4枚ルール維持）
   - “予告”＝余白と構図で魅せる
========================= */
function Section({ kicker, title, body, img, imgAlt, align = "left" }) {
  const isLeft = align === "left";

  return (
    <div className="pt-20 md:pt-24">
      <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
        {/* Text */}
        <div className={`md:col-span-5 ${isLeft ? "md:order-1" : "md:order-2"}`}>
          <p className="text-[0.72rem] tracking-[0.36em] text-[#6b625a]">
            {kicker}
          </p>

          <h3 className="mt-6 text-[1.18rem] md:text-[1.26rem] font-light tracking-[0.14em] leading-[2.05] text-[#231f1b]/92">
            {title}
          </h3>

          <p className="mt-8 text-[#231f1b]/70 text-[0.98rem] md:text-[1.04rem] leading-[2.35] md:leading-[2.55] font-light">
            {body}
          </p>

          <div className="mt-10 h-px w-28 bg-gradient-to-r from-[#231f1b]/40 to-transparent" />

          <p className="mt-7 text-[#6b625a] text-[0.74rem] tracking-[0.26em] leading-[2.0]">
            A fragment only. The rest is meant to be entered.
          </p>
        </div>

        {/* Image */}
        <div className={`md:col-span-7 ${isLeft ? "md:order-2" : "md:order-1"}`}>
          <div
            className="
              rounded-[22px]
              border border-[#231f1b]/10
              bg-white/28
              shadow-[0_34px_120px_rgba(35,31,27,0.10)]
              overflow-hidden
            "
          >
            <img
              src={img}
              alt={imgAlt}
              className="
                w-full
                aspect-[16/10]
                object-cover
                brightness-[0.99]
                contrast-[0.99]
              "
              loading="lazy"
            />
          </div>

          {/* quiet label */}
          <div className="pt-6">
            <p className="text-[#6b625a] text-[0.70rem] tracking-[0.32em]">
              TRAILER CUT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
