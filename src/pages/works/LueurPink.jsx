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
            name: "LUEUR PINK｜Soft Pink Salon Experience Website Design",
            description:
              "柔らかなピンクの空気感で、サロンの安心感ややさしさが自然に伝わるようにまとめたコンセプトLP。丸みのあるデザインと淡いグラデーションで、やわらかく前向きな印象を目指した作品。",
            creator: {
              "@type": "Person",
              name: "裕人 具志堅",
              alternateName: "Yuto Gushiken",
              url: "https://gushikendesign.com/",
            },
            publisher: {
              "@type": "Organization",
              name: "GUSHIKEN DESIGN",
              url: "https://gushikendesign.com/",
            },
            inLanguage: "ja",
            url: "https://gushikendesign.com/works/lueur-pink",
            isBasedOn: {
              "@type": "WebSite",
              name: "LUEUR PINK Official Site",
              url: "https://lueur-pink.vercel.app/",
            },
          }),
        }}
      />

      {/* HERO */}
      <div className="relative w-full overflow-hidden">
        {/* SP HERO */}
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
              SOFT PINK SALON EXPERIENCE <br />
              WEBSITE DESIGN
            </p>

            <div className="mt-5">
              <a
                href="https://lueur-pink.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center
                  min-w-[168px]
                  px-8 py-3.5 rounded-full
                  border border-white/45
                  bg-[linear-gradient(180deg,#ff6f9a_0%,#ff5a8b_100%)]
                  text-white
                  text-[0.76rem] tracking-[0.22em]
                  shadow-[0_18px_44px_rgba(255,90,139,0.24)]
                  hover:shadow-[0_26px_70px_rgba(255,90,139,0.32)]
                  hover:translate-y-[-1px]
                  transition-all duration-500
                  backdrop-blur-[4px]
                "
              >
                VISIT SITE →
              </a>
            </div>
          </div>
        </div>

        {/* PC HERO */}
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

          <div
            className="
              absolute inset-0
              bg-gradient-to-b
              from-white/65 via-[#ffd7e6]/20 to-[#ffb8cf]/40
            "
          />

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
              A gentle, airy salon landing page built for comfort and confidence.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#visuals"
                className="
                  inline-flex items-center justify-center
                  px-9 py-4 rounded-full
                  bg-white/62 text-[#1b1b1b]/78
                  text-[0.80rem] tracking-[0.18em]
                  border border-[#ff5a8b]/12
                  shadow-[0_10px_30px_rgba(255,90,139,0.06)]
                  hover:bg-white/82
                  hover:text-[#1b1b1b]
                  transition-all duration-500
                  backdrop-blur-[6px]
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
                  border border-white/40
                  bg-[linear-gradient(180deg,#ff6f9a_0%,#ff5a8b_100%)]
                  text-white
                  text-[0.82rem] tracking-[0.22em]
                  shadow-[0_20px_60px_rgba(255,90,139,0.24)]
                  hover:shadow-[0_28px_90px_rgba(255,90,139,0.34)]
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

      {/* OUTLINE */}
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
            見ているうちに前向きな気持ちになれるような
            やわらかい見え方を大切にしました。
            説明を増やしすぎず、印象が静かに残るページを目指しています。
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
              HIGHLIGHTS
            </h3>

            <ol className="space-y-4 text-[0.98rem] text-[#1b1b1b]/80 leading-[2.0]">
              <li className="flex gap-4">
                <span className="text-[#ff5a8b] font-medium">01</span>
                <span>最初にやわらかく安心できる印象が伝わること。</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#ff5a8b] font-medium">02</span>
                <span>全体を淡いトーンでまとめ、清潔感が感じられること。</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#ff5a8b] font-medium">03</span>
                <span>見終わったあとに、やさしい余韻が残ること。</span>
              </li>
            </ol>
          </div>

          <div className="text-[#1b1b1b]/55 text-[0.82rem] leading-relaxed aq-fade">
            <p>Tech — 軽さと見やすさを大切にしたシンプルな構成</p>
          </div>
        </div>
      </div>

      {/* VISUALS */}
      <div id="visuals" className="max-w-6xl mx-auto px-8 md:px-0 space-y-12">
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

        <div className="grid md:grid-cols-2 gap-8">
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
              SOFT IMPRESSION
            </h3>
            <p className="text-[#1b1b1b]/80 leading-[2.1] text-[1.0rem] font-light whitespace-pre-line">
              “やさしい” は、弱さではない。

              透明感のあるピンクと余白によって、
              来店前の不安がやわらぎ、
              自然に前向きな気持ちになれる。

              見せすぎず、でも印象が残る。
              そんな空気感を大切にした作品です。
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
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
            <p className="text-[#1b1b1b]/65 leading-[2.0] text-[0.98rem] mb-8 whitespace-pre-line">
              柔らかい空気の中で、安心して一歩踏み出せる。
              サロンの魅力を、やさしい印象とともに届けます。
            </p>

<div className="flex flex-col items-center justify-center gap-4">
  <a
    href="https://lueur-pink.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center justify-center
      px-10 py-[15px] rounded-full
      border border-white/45
      bg-[linear-gradient(180deg,#ff6f9a_0%,#ff5a8b_100%)]
      text-white
      text-[0.82rem] tracking-[0.20em]
      shadow-[0_20px_70px_rgba(255,90,139,0.28)]
      hover:shadow-[0_28px_100px_rgba(255,90,139,0.36)]
      hover:translate-y-[-1px]
      transition-all duration-500
    "
  >
    VISIT SITE →
  </a>

  <a
    href="/works"
    className="
      text-[0.76rem]
      tracking-[0.22em]
      text-[#1b1b1b]/42
      hover:text-[#1b1b1b]/66
      transition-colors duration-400
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