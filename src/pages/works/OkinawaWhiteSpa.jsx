// src/pages/works/OkinawaWhiteSpa.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function OkinawaWhiteSpa() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const siteUrl = "https://okinawa-white-spa.vercel.app/";

  return (
    <section className="bg-[#fbfcfd] text-[#0f141a] min-h-screen pb-40">
      {/* ================= JSON-LD ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "@id":
              "https://gushikendesign.com/works/okinawa-white-spa#creativework",
            name: "Okinawa White Spa｜Private Spa Experience Design",
            description:
              "白を『明るさ』ではなく『静けさ』として扱い、UIの重心・余白・光の階調で『整う体験』を設計したプライベートスパLP。情報量を抑えながら、実在感と上質さが持続する画面温度を構築。",
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
            url: "https://gushikendesign.com/works/okinawa-white-spa",
            isBasedOn: {
              "@type": "WebSite",
              name: "Okinawa White Spa Official Site",
              url: siteUrl,
            },
          }),
        }}
      />

      {/* =========================================================
          HERO — White × Silence × Private Retreat
          ※ 白ベール弱化版
      ========================================================= */}
      <div className="relative w-full overflow-hidden">
        {/* ===== SP ===== */}
        <div className="block md:hidden relative w-full pt-16">
          <div className="relative w-full aspect-[4/5] overflow-hidden">
            <img
              src="/works1/spa.png"
              alt="Okinawa White Spa"
              className="absolute inset-0 w-full h-full object-cover brightness-[0.99]"
              loading="eager"
            />

            {/* White film（SP：弱化） */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/38 via-white/12 to-white/72" />

            {/* 光の芯（控えめ） */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 18% 22%, rgba(255,255,255,0.75), transparent 58%)",
              }}
            />

            {/* Titles SP */}
            <div className="absolute bottom-10 left-6 right-6">
              <p className="text-[0.62rem] tracking-[0.34em] text-black/35 mb-3">
                SELECTED WORKS
              </p>

              <h1 className="text-[1.55rem] tracking-[0.16em] font-extralight leading-[1.28] text-black/85">
                Okinawa White Spa
              </h1>

              <p className="mt-3 text-[0.78rem] tracking-[0.26em] text-black/45">
                WHITE × SILENCE × PRIVATE RETREAT
              </p>
            </div>
          </div>
        </div>

        {/* ===== PC ===== */}
        <div className="hidden md:block relative w-full">
          <div className="relative w-full h-[92vh] pt-20 overflow-hidden">
            <img
              src="/works1/spa.png"
              alt="Okinawa White Spa"
              className="absolute inset-0 w-full h-full object-cover brightness-[1.01] scale-[1.02]"
              loading="eager"
            />

            {/* White film（PC：弱化） */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/42 via-white/12 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/14 via-transparent to-white/78" />

            {/* 光の芯 */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 22% 18%, rgba(255,255,255,0.8), transparent 60%)",
              }}
            />

            {/* Titles PC */}
            <div className="absolute left-[6%] bottom-[14%] max-w-[720px]">
              <p className="text-[0.7rem] tracking-[0.38em] text-black/35 mb-4">
                SELECTED WORKS
              </p>

              <h1 className="text-[3.1rem] tracking-[0.10em] font-extralight leading-[1.18] text-black/80">
                Okinawa White Spa
              </h1>

              <p className="mt-5 text-[0.95rem] tracking-[0.28em] text-black/45">
                WHITE × SILENCE × PRIVATE RETREAT
              </p>

              <div className="mt-7 w-16 h-px bg-gradient-to-r from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          OUTLINE — リアル寄り設計意図
      ========================================================= */}
      <div className="max-w-4xl mx-auto px-6 md:px-0 mt-24 md:mt-28">
        <div className="flex items-center gap-3 mb-8">
          <p className="text-[0.72rem] tracking-[0.34em] text-black/35">
            PROJECT OUTLINE
          </p>
          <span className="h-px flex-1 bg-gradient-to-r from-black/12 to-transparent" />
        </div>

        <p className="text-[1.06rem] md:text-[1.12rem] leading-[2.35] text-black/80 font-light whitespace-pre-line tracking-[0.01em]">
{`白 × 静寂 × 上質な余白。

「整う」という感覚を、
装飾や演出ではなく、
UIの重心・行間・光の階調だけで成立させることを目標にした
プライベートスパのコンセプトLP。

白を“明るさ”としてではなく、
視線を落ち着かせるための「静けさ」として扱い、
情報量を減らしても品位が落ちない密度を探りました。

余白を広く取りながらも、
線・配置・視線誘導にはわずかな緊張感を残し、
高級感が時間とともに薄れない画面温度を意識しています。`}
        </p>

        <div className="mt-12 text-black/45 text-[0.85rem] tracking-[0.18em] leading-relaxed">
          <p>Tech — React / Vite / Tailwind / Minimal Motion</p>
        </div>
      </div>

      {/* =========================================================
          VISUALS — 展示としての余白
      ========================================================= */}
      <p className="max-w-4xl mx-auto px-6 md:px-0 mt-20 text-[0.9rem] leading-[2.1] text-black/55 font-light">
        写真点数はあえて増やさず、  
        空間の“白さ”と“間”が伝わる構図のみを選定しています。
      </p>

      <div className="max-w-6xl mx-auto px-6 md:px-0 mt-16 space-y-16 md:space-y-24">
        <figure className="relative overflow-hidden rounded-[18px] border border-black/10 bg-white">
          <img
            src="/works1/spa1.jpg"
            alt="Okinawa White Spa visual 1"
            className="w-full object-cover brightness-[1.02]"
            loading="lazy"
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/8 via-transparent to-white/22" />
        </figure>

        <figure className="relative overflow-hidden rounded-[18px] border border-black/10 bg-white">
          <img
            src="/works1/spa.jpg"
            alt="Okinawa White Spa visual 2"
            className="w-full object-cover brightness-[1.04]"
            loading="lazy"
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/18 via-transparent to-white/10" />
        </figure>
      </div>

      {/* =========================================================
          CTA — 静かな締め
      ========================================================= */}
      <p className="max-w-3xl mx-auto mt-24 mb-10 text-[0.9rem] leading-[2.2] text-black/55 font-light px-6 text-center">
        沖縄という土地性を前面に出すのではなく、  
        「誰にとっても静かに整う場所」であることを優先し、  
        色・言葉・動きはすべて最小限に抑えています。
      </p>

      <div className="text-center px-6">
        <a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center
            h-[48px] px-10
            text-[0.82rem]
            tracking-[0.34em]
            border border-black/18
            text-black/70
            hover:text-black/90
            hover:border-black/35
            hover:shadow-[0_0_26px_rgba(0,0,0,0.10)]
            transition-all duration-500
            bg-white/40
            backdrop-blur-[6px]
            rounded-full
          "
        >
          VISIT SITE →
        </a>

        <div className="mt-10">
          <Link
            to="/works"
            className="inline-block text-black/45 hover:text-black tracking-[0.26em] text-[0.75rem]"
          >
            ← BACK TO WORKS LIST
          </Link>
        </div>
      </div>
    </section>
  );
}
