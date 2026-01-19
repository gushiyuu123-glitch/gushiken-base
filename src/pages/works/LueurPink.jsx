// src/pages/works/LueurPink.jsx
import React, { useEffect } from "react";

export default function LueurPink() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen pb-36 text-[#1b1b1b] bg-[#fff7fb]">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": "https://gushikendesign.com/works/lueur-pink#creativework",
      "name": "LUEUR PINK｜Soft Pink Salon Experience Website Design",
      "description":
        "柔らかなピンクの空気感で、サロンの『安心・やさしさ・期待』を体験として届けるコンセプトLP。余白、丸み、淡いグラデーションによって緊張をほどき、自然に予約へ向かう静かな導線を設計した。",
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
      "url": "https://gushikendesign.com/works/lueur-pink",
      "isBasedOn": {
        "@type": "WebSite",
        "name": "LUEUR PINK Official Site",
        "url": "https://lueur-pink.vercel.app/"
      }
    })
  }}
/>

      {/* =========================================================
          HERO — Soft Pink × Experience
      ========================================================= */}
      <div className="relative w-full overflow-hidden">
        {/* ------------------- SP HERO ------------------- */}
        <div className="block md:hidden w-full aspect-[4/5] relative">
          <img
            src="/works1/lueur-pink-hero.webp"
            alt="LUEUR PINK — SOFT PINK SALON EXPERIENCE"
            className="
              absolute inset-0 w-full h-full
              object-cover object-center
              brightness-[1.02]
              saturate-[1.02]
              scale-[1.03]
              transform-gpu
            "
          />

          {/* airy pink veil */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-b
              from-white/10 via-[#ffd7e6]/20 to-[#ffb8cf]/30
            "
          />

          <div className="absolute bottom-10 left-6 aq-fade">
            <h1 className="text-[2.0rem] tracking-[0.22em] font-light mb-2 text-[#1b1b1b]">
              LUEUR <span className="text-[#ff5a8b]">PINK</span>
            </h1>
            <p className="text-[#1b1b1b]/55 tracking-[0.22em] text-[0.74rem]">
              SOFT PINK SALON EXPERIENCE <br></br> WEBSITE DESIGN
            </p>

            <div className="mt-5">
              <a
                href="https://lueur-pink.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center
                  px-7 py-3 rounded-full
                  bg-[#ff5a8b] text-white
                  text-[0.78rem] tracking-[0.18em]
                  shadow-[0_16px_40px_rgba(255,90,139,0.25)]
                  hover:shadow-[0_22px_60px_rgba(255,90,139,0.32)]
                  hover:translate-y-[-1px]
                  transition-all duration-500
                "
              >
                VISIT SITE →
              </a>
            </div>
          </div>
        </div>

        {/* ------------------- PC HERO ------------------- */}
        <div className="hidden md:block w-full h-[92vh] relative">
          <img
            src="/works1/lueur-pink-hero.webp"
            alt="LUEUR PINK — SOFT PINK SALON EXPERIENCE"
            className="
              absolute inset-0 w-full h-full
              object-cover
              brightness-[1.02]
              saturate-[1.02]
              scale-[1.04]
              transform-gpu
            "
          />

          {/* Soft Pink Veil */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-b
              from-white/65 via-[#ffd7e6]/20 to-[#ffb8cf]/40
            "
          />

          {/* subtle vignette for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/15 to-transparent" />

          <div className="absolute bottom-24 left-[clamp(28px,8vw,150px)] aq-fade">
            <h1 className="text-[4.1rem] tracking-[0.22em] font-light mb-4 leading-[1.08] text-[#1b1b1b]">
              LUEUR <span className="text-[#ff5a8b]">PINK</span>
            </h1>

            <div className="flex items-center gap-5 mb-4">
              <span className="h-[1px] w-14 bg-[#ff5a8b]/60" />
              <p className="text-[#1b1b1b]/60 tracking-[0.26em] text-[0.92rem]">
                SOFT PINK SALON EXPERIENCE
              </p>
            </div>

            <p className="text-[#1b1b1b]/55 tracking-[0.20em] text-[0.92rem] mb-6">
              A gentle, airy salon landing page built for “comfort + confidence”.
            </p>

            <div className="flex items-center gap-3">


              <a
                href="#visuals"
                className="
                  inline-flex items-center justify-center
                  px-10 py-4 rounded-full
                  bg-white/70 text-[#1b1b1b]
                  text-[0.82rem] tracking-[0.18em]
                  border border-[#ff5a8b]/15
                  hover:bg-white
                  transition-all duration-500
                "
              >
                SEE VISUALS
              </a>
                            <a
                href="https://lueur-pink.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center
                  px-10 py-4 rounded-full
                  bg-[#ff5a8b] text-white
                  text-[0.82rem] tracking-[0.22em]
                  shadow-[0_18px_50px_rgba(255,90,139,0.20)]
                  hover:shadow-[0_26px_80px_rgba(255,90,139,0.34)]
                  hover:translate-y-[-1px]
                  transition-all duration-500
                "
              >
                VISIT SITE →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          OUTLINE — Soft Experience × Minimal Trust
      ========================================================= */}
      <div className="max-w-4xl mx-auto px-8 md:px-0 mt-28 mb-24">
        <h2 className="text-[0.92rem] tracking-[0.30em] text-[#1b1b1b]/45 mb-10 aq-fade">
          PROJECT OUTLINE
        </h2>

        <div className="space-y-10">
          <p
            className="
              text-[1.12rem]
              leading-[2.35]
              text-[#1b1b1b]/85
              font-light
              whitespace-pre-line
              tracking-[0.01em]
              aq-fade
            "
          >
          “髪が変わると、人生が動き出す。”

LUEUR PINK は、やわらかなピンクの雰囲気で、
サロンの「安心感」や「やさしさ」が
自然に伝わるようにまとめたLPです。

画面全体を落ち着いた印象に整え、
見ているうちに前向きな気持ちになれる流れを意識しました。
説明を増やさず、信頼が静かに残る構成にしています。

          </p>

          <div
            className="
              rounded-3xl
              bg-white/70
              border border-[#ff5a8b]/10
              shadow-[0_24px_70px_rgba(255,90,139,0.10)]
              p-7 md:p-9
              aq-fade
            "
          >
            <h3 className="text-[0.86rem] tracking-[0.26em] text-[#1b1b1b]/55 mb-6">
              EXPERIENCE DESIGN POINTS
            </h3>

           <ol className="space-y-4 text-[0.98rem] text-[#1b1b1b]/80 leading-[2.0]">
  <li className="flex gap-4">
    <span className="text-[#ff5a8b] font-medium">01</span>
    <span>最初に「安心して見られる」印象をつくり、自然に世界観へ入れる構成。</span>
  </li>
  <li className="flex gap-4">
    <span className="text-[#ff5a8b] font-medium">02</span>
    <span>全体をやわらかい雰囲気でまとめ、清潔感が伝わる見せ方に整理。</span>
  </li>
  <li className="flex gap-4">
    <span className="text-[#ff5a8b] font-medium">03</span>
    <span>迷わず進める流れを意識しつつ、余韻が残る体験にまとめています。</span>
  </li>
</ol>

          </div>

          <div className="text-[#1b1b1b]/55 text-[0.82rem] leading-relaxed aq-fade">
       <p>Tech — 安定性と軽さを優先したシンプルな構成 / 端末ごとの最適化</p>

          </div>
        </div>
      </div>

      {/* =========================================================
          VISUAL BLOCKS — Soft Pink × Clean Cards
      ========================================================= */}
      <div id="visuals" className="max-w-6xl mx-auto px-8 md:px-0 space-y-12">
        {/* Visual header */}
        <div className="flex items-center justify-between gap-6 aq-fade">
          <div>
            <h2 className="text-[0.92rem] tracking-[0.30em] text-[#1b1b1b]/45 mb-2">
              VISUALS
            </h2>
            <p className="text-[#1b1b1b]/55 text-[0.9rem] leading-[1.9]">
              Soft pink gradients, airy spacing, and gentle shadows.
            </p>
          </div>
          <span className="hidden md:block h-[1px] flex-1 bg-[#ff5a8b]/15" />
        </div>

        {/* Visual 1 */}
        <div
          className="
            relative overflow-hidden
            rounded-3xl
            bg-white/60
            border border-[#ff5a8b]/10
            shadow-[0_28px_80px_rgba(255,90,139,0.12)]
            aq-fade
          "
        >
          <img
            src="/works1/lueur-pink-111.webp"
            className="w-full object-cover"
            alt="Lueur Pink Visual 1"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-[#ffb8cf]/15" />
        </div>

        {/* Visual 2 */}
        <div
          className="
            relative overflow-hidden
            rounded-3xl
            bg-white/60
            border border-[#ff5a8b]/10
            shadow-[0_28px_80px_rgba(255,90,139,0.12)]
            aq-fade
          "
        >
          <img
            src="/works1/lueur-pink-222.webp"
            className="w-full object-cover"
            alt="Lueur Pink Visual 2"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-[#ffd7e6]/20" />
        </div>

        {/* Visual 3 (optional) */}
        <div
          className="
            grid md:grid-cols-2 gap-8
          "
        >
          <div
            className="
              relative overflow-hidden
              rounded-3xl
              bg-white/60
              border border-[#ff5a8b]/10
              shadow-[0_24px_70px_rgba(255,90,139,0.10)]
              aq-fade
            "
          >
            <img
              src="/works1/lueur-pink-333.webp"
              className="w-full object-cover"
              alt="Lueur Pink Visual 3"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ffb8cf]/18" />
          </div>

          <div
            className="
              rounded-3xl
              bg-white/70
              border border-[#ff5a8b]/10
              shadow-[0_24px_70px_rgba(255,90,139,0.10)]
              p-7 md:p-9
              flex flex-col justify-center
              aq-fade
            "
          >
            <h3 className="text-[0.86rem] tracking-[0.26em] text-[#1b1b1b]/55 mb-4">
              WHY IT WORKS
            </h3>
            <p className="text-[#1b1b1b]/80 leading-[2.1] text-[1.0rem] font-light">
              “やさしい” は、弱さではない。
              {"\n"}
              透明感のあるピンクと余白は、来店前の不安を静かに消し、
              予約の一歩を自然に後押しする。
              {"\n\n"}
              見せすぎず、でも信頼が残る。
              そのバランスを、体験として設計した。
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================
          CTA — Soft Glow Button
      ========================================================= */}
      <div className="text-center mt-24">
        <div className="max-w-3xl mx-auto px-8 md:px-0">
          <div
            className="
              rounded-[32px]
              bg-white/70
              border border-[#ff5a8b]/10
              shadow-[0_30px_90px_rgba(255,90,139,0.12)]
              p-10 md:p-12
              aq-fade
            "
          >
            <h3 className="text-[1.05rem] tracking-[0.26em] text-[#1b1b1b]/70 mb-4">
              EXPERIENCE THE SOFT PINK
            </h3>
            <p className="text-[#1b1b1b]/65 leading-[2.0] text-[0.98rem] mb-8">
  柔らかい空気の中で、安心して一歩踏み出せる。{"\n"}
  サロンの魅力を、静かな体験としてそっと届けます。
</p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                    <a
                href="https://lueur-pink.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center
                  px-12 py-4 rounded-full
                  bg-[#ff5a8b] text-white
                  text-[0.84rem] tracking-[0.24em]
                  shadow-[0_18px_60px_rgba(255,90,139,0.26)]
                  hover:shadow-[0_26px_90px_rgba(255,90,139,0.34)]
                  hover:translate-y-[-1px]
                  transition-all duration-500
                  w-full md:w-auto
                "
              >
                VISIT SITE →
              </a>
              <a
                href="/works"
                className="
                  inline-flex items-center justify-center
                  px-12 py-4 rounded-full
                  bg-white/80 text-[#1b1b1b]
                  text-[0.84rem] tracking-[0.22em]
                  border border-[#ff5a8b]/15
                  hover:bg-white
                  transition-all duration-500
                  w-full md:w-auto
                "
              >
                ← BACK TO WORKS
              </a>
              
 
            </div>
          </div>

          <p className="mt-10 text-[0.8rem] text-[#1b1b1b]/45 tracking-[0.18em] aq-fade">
            © GUSHIKEN DESIGN — Works Detail / LUEUR PINK
          </p>
        </div>
      </div>
    </section>
  );
}
