import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import usePageFade from "../../hooks/usePageFade";

export default function WhiteDarkCacao() {
  useEffect(() => window.scrollTo(0, 0), []);

  const assets = useMemo(
    () => ({
      heroWhite: "/works1/white-dark-hero1.png",
      heroDark: "/works1/white-dark-cacao1.png",
      shotWhite: "/works1/white-dark-22.png",
      shotDark: "/works1/white-dark-3.png",
      detail1: "/works1/white-03333.png",
      detail2: "/works1/cacao-033.png",
    }),
    []
  );

  const liveUrl = "https://white-dark-cacao.vercel.app/";
  const canonicalUrl = "https://gushikendesign.com/works/white-dark-cacao";

  usePageFade(".lux-fade", {
    y: 18,
    duration: 1.1,
    ease: "power2.out",
    start: "top 85%",
  });

  usePageFade(".lux-fade-soft", {
    y: 10,
    duration: 0.9,
    ease: "power2.out",
    start: "top 88%",
  });

  return (
    <section className="min-h-screen bg-white text-[#1a1a1a]">
      {/* SEO */}
      <head>
        <title>WHITE × DARK CACAO — 高級ショコラEC | GUSHIKEN DESIGN</title>
        <meta
          name="description"
          content="WHITE × DARK CACAO — ホテルのような静かな上質感と、ショコラの奥行きを重ねた高級ECデザイン。落ち着いて選べる空気を大切にした作品。"
        />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content="WHITE × DARK CACAO — 高級ショコラEC" />
        <meta
          property="og:description"
          content="ホテルのような静かな上質感と、ショコラの奥行きを重ねたECデザイン。GUSHIKEN DESIGN による作品。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={assets.heroWhite} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WHITE × DARK CACAO — 高級ショコラEC" />
        <meta
          name="twitter:description"
          content="ホテルのような静かな上質感と、ショコラの奥行きを重ねた高級ECデザイン。"
        />
        <meta name="twitter:image" content={assets.heroWhite} />
      </head>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "@id": canonicalUrl,
            name: "WHITE × DARK CACAO — Chocolate EC Website",
            url: canonicalUrl,
            inLanguage: "ja",
            description:
              "ホテルのような静かな上質感と、ショコラの奥行きを重ねた高級ECデザイン。落ち着いて選べる空気を大切にした作品。",
            image: assets.heroWhite,
            creator: {
              "@type": "Organization",
              name: "GUSHIKEN DESIGN",
            },
            isBasedOn: ["React", "Vite", "Tailwind CSS", "GSAP"],
            mainEntityOfPage: canonicalUrl,
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "WORKS",
                item: "https://gushikendesign.com/works",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "WHITE × DARK CACAO",
                item: canonicalUrl,
              },
            ],
          }),
        }}
      />

      {/* PC */}
      <div className="hidden md:block">
        <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-neutral-300">
          <div className="max-w-[1120px] mx-auto px-12 h-[72px] flex items-center justify-between">
            <div className="flex items-center gap-10">
              <Link
                to="/works"
                className="text-[12px] tracking-[0.16em] text-neutral-500 hover:text-neutral-700 transition-colors"
              >
                ← WORKS
              </Link>

              <p className="text-[12px] tracking-[0.22em] text-neutral-600">
                CASE STUDY
              </p>
            </div>

            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-[12px]
                tracking-[0.2em]
                text-neutral-800
                border-b border-neutral-400
                pb-1
                hover:opacity-70
                transition-opacity
              "
            >
              OPEN SITE →
            </a>
          </div>
        </header>

        <div className="max-w-[1240px] mx-auto px-12 pt-20 pb-32">
          <div className="grid grid-cols-2 gap-12 items-end">
            <div className="lux-fade">
              <p className="text-[12px] tracking-[0.22em] text-neutral-500 mb-6">
                CHOCOLATE / EC BRAND
              </p>

              <h1 className="text-[38px] leading-[1.4] tracking-[0.08em] text-neutral-900">
                WHITE × DARK CACAO
              </h1>

              <p className="mt-10 text-[15px] leading-[2.2] tracking-[0.06em] text-neutral-600 max-w-[560px]">
                ホテルのような静かな上質感と、
                ショコラの深みを重ねたECデザイン。
                <br />
                説明を増やしすぎず、
                落ち着いて選べる空気を大切にしました。
              </p>

              <div className="mt-14 flex gap-14">
                <div>
                  <p className="text-[11px] tracking-[0.18em] text-neutral-500 mb-2">
                    ROLE
                  </p>
                  <p className="text-[12px] tracking-[0.08em] text-neutral-700">
                    Web Design / EC Design
                  </p>
                </div>

                <div>
                  <p className="text-[11px] tracking-[0.18em] text-neutral-500 mb-2">
                    STACK
                  </p>
                  <p className="text-[12px] tracking-[0.08em] text-neutral-700">
                    React / Vite / Tailwind / GSAP
                  </p>
                </div>
              </div>
            </div>

            <div className="lux-fade-soft">
              <div className="relative flex gap-6">
                <div className="relative border border-neutral-200 overflow-hidden">
                  <img
                    src={assets.heroWhite}
                    className="w-full h-[420px] object-cover"
                  />
                  <div className="absolute inset-0 bg-white/10" />
                </div>

                <div className="relative border border-neutral-200 overflow-hidden translate-y-10">
                  <img
                    src={assets.heroDark}
                    className="w-full h-[420px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </div>

              <p className="mt-6 text-[11px] tracking-[0.14em] text-neutral-500">
                “Duality of Taste.”
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#f8f8f6] border-y border-neutral-300">
          <div className="max-w-[1120px] mx-auto px-12 py-28">
            <div className="grid grid-cols-2 gap-20">
              <div className="lux-fade">
                <h2 className="text-[20px] tracking-[0.14em] text-neutral-900 mb-10">
                  ブランドの考え方
                </h2>
                <p className="text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600 whitespace-pre-line">
                  WHITE × DARK CACAO は、
                  “急いで決める”よりも
                  “落ち着いて選ぶ”時間を大切にしたブランドです。
                  ホテルのロビーのような空気感を意識しながら、
                  情報よりも印象が先に残る見せ方を目指しました。
                </p>
              </div>

              <div className="lux-fade">
                <h2 className="text-[20px] tracking-[0.14em] text-neutral-900 mb-10">
                  大切にした印象
                </h2>
                <p className="text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600 whitespace-pre-line">
                  WHITE と DARK、
                  二つのトーンを行き来しながら、
                  静けさ・深み・温かみが自然に伝わるよう整えました。
                  高価格帯らしい落ち着きのある空気を大切にしています。
                </p>
              </div>
            </div>

            <div className="mt-20 grid grid-cols-12 gap-8 items-center lux-fade-soft">
              <div className="col-span-7 border border-neutral-200 bg-white overflow-hidden">
                <img
                  src={assets.shotWhite}
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="col-span-5 text-[14px] tracking-[0.06em] text-neutral-600 leading-[2.4]">
                “白の静けさは、ブランドの入口。”
                <br />
                最初に、清潔感と落ち着きが自然に伝わるようにまとめています。
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1120px] mx-auto px-12 py-32">
          <h2 className="lux-fade text-center text-[22px] tracking-[0.18em] text-neutral-900 mb-16">
            WHITE と DARK、二つの世界観
          </h2>

          <div className="grid grid-cols-2 gap-16">
            <div className="lux-fade border border-neutral-200 bg-white p-12">
              <p className="text-[12px] tracking-[0.18em] text-neutral-500 mb-6">
                WHITE — QUIET SWEETNESS
              </p>
              <p className="text-[14px] leading-[2.3] tracking-[0.06em] text-neutral-600 mb-10">
                明るさだけでなく、
                静かでやわらかな甘さを感じるトーン。
                丁寧さや上品さが伝わる世界観を意識しています。
              </p>

              <img
                src={assets.detail1}
                className="w-full h-[360px] object-cover border border-neutral-200"
              />
            </div>

            <div className="lux-fade border border-neutral-200 bg-white p-12">
              <p className="text-[12px] tracking-[0.18em] text-neutral-500 mb-6">
                DARK — QUIET BITTERNESS
              </p>
              <p className="text-[14px] leading-[2.3] tracking-[0.06em] text-neutral-600 mb-10">
                情報を詰め込みすぎず、
                静かに深みが残るトーン。
                夜のバーのような落ち着きを感じる世界観にまとめました。
              </p>

              <img
                src={assets.detail2}
                className="w-full h-[360px] object-cover border border-neutral-200"
              />
            </div>
          </div>
        </div>

        <div className="max-w-[1120px] mx-auto px-12 py-28">
          <div className="grid grid-cols-2 gap-20 items-start">
            <div className="lux-fade">
              <h2 className="text-[18px] tracking-[0.16em] text-neutral-900 mb-10">
                STACK
              </h2>
              <ul className="text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600 space-y-3">
                <li>・React / Vite</li>
                <li>・Tailwind CSS (v3)</li>
                <li>・GSAP</li>
              </ul>
            </div>

            <div className="lux-fade border border-neutral-200 bg-[#fafafa] p-12">
              <p className="text-[12px] tracking-[0.22em] text-neutral-500 mb-6">
                LIVE
              </p>
              <p className="text-[15px] leading-[2.3] tracking-[0.06em] text-neutral-700 mb-10">
                White × Dark Cacao（公開ページ）
              </p>

              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block
                  text-[12px]
                  tracking-[0.20em]
                  text-neutral-800
                  border-b border-neutral-400
                  pb-1
                  hover:opacity-70
                  transition-opacity
                "
              >
                {liveUrl}
              </a>

              <div className="mt-14 pt-10 border-t border-neutral-200">
                <Link
                  to="/works"
                  className="
                    inline-block
                    text-[12px]
                    tracking-[0.18em]
                    text-neutral-600
                    hover:text-neutral-800
                    transition-colors
                  "
                >
                  ← WORKSへ戻る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SP */}
      <div className="md:hidden">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
          <div className="px-5 h-[64px] flex items-center justify-between">
            <Link
              to="/works"
              className="text-[11px] tracking-[0.18em] text-neutral-600"
            >
              ← WORKS
            </Link>

            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-[0.18em] text-neutral-700 border-b border-neutral-300 pb-1"
            >
              OPEN →
            </a>
          </div>
        </header>

        <div className="px-6 pt-14 pb-20">
          <p className="text-[11px] tracking-[0.22em] text-neutral-500 mb-4 lux-fade-soft">
            CHOCOLATE / EC BRAND
          </p>

          <h1 className="text-[22px] leading-[1.7] tracking-[0.10em] text-neutral-900 lux-fade-soft">
            WHITE × DARK CACAO
          </h1>

          <p className="mt-8 text-[13px] leading-[2.2] tracking-[0.06em] text-neutral-600 lux-fade-soft">
            ホテルのような静かな上質感をまとったショコラブランド。
            <br />
            落ち着いて選べる空気を大切にしたデザインです。
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4 lux-fade-soft">
            <img
              src={assets.heroWhite}
              className="w-full h-[180px] object-cover border border-neutral-200"
            />
            <img
              src={assets.heroDark}
              className="w-full h-[180px] object-cover border border-neutral-200"
            />
          </div>
        </div>

        <div className="bg-[#f8f8f6] border-y border-neutral-200">
          <div className="px-6 py-20 space-y-12">
            <div className="lux-fade-soft">
              <h2 className="text-[16px] tracking-[0.14em] text-neutral-900 mb-5">
                ブランドの考え方
              </h2>
              <p className="text-[13px] leading-[2.4] tracking-[0.06em] text-neutral-600 whitespace-pre-line">
                落ち着いて選ぶ時間そのものを大切にしながら、
                情報よりも印象が先に伝わることを目指しました。
              </p>
            </div>

            <div className="lux-fade-soft">
              <h2 className="text-[16px] tracking-[0.14em] text-neutral-900 mb-5">
                大切にした印象
              </h2>
              <p className="text-[13px] leading-[2.4] tracking-[0.06em] text-neutral-600 whitespace-pre-line">
                WHITE と DARK の二つのトーンで、
                静けさと深みが自然に伝わるようにまとめています。
              </p>
            </div>

            <img
              src={assets.shotWhite}
              className="w-full h-[200px] object-cover border border-neutral-200 lux-fade-soft"
            />
          </div>
        </div>

        <div className="px-6 py-20 space-y-10">
          {[
            { title: "WHITE — QUIET SWEETNESS", img: assets.detail1 },
            { title: "DARK — QUIET BITTERNESS", img: assets.detail2 },
          ].map((x) => (
            <div
              key={x.title}
              className="border border-neutral-200 bg-white p-8 lux-fade-soft"
            >
              <p className="text-[11px] tracking-[0.20em] text-neutral-500 mb-4">
                {x.title}
              </p>
              <img
                src={x.img}
                className="w-full h-[200px] object-cover border border-neutral-200 mb-5"
              />
              <p className="text-[12px] leading-[2.2] tracking-[0.06em] text-neutral-700">
                それぞれのトーンが静かに印象に残るように整えたセクションです。
              </p>
            </div>
          ))}
        </div>

        <div className="px-6 py-20">
          <div className="border border-neutral-200 bg-[#fafafa] p-10 lux-fade-soft">
            <p className="text-[11px] tracking-[0.22em] text-neutral-500 mb-6">
              LIVE
            </p>

            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] tracking-[0.18em] text-neutral-700 border-b border-neutral-300 pb-1 mb-6"
            >
              {liveUrl}
            </a>

            <div>
              <Link
                to="/works"
                className="text-[11px] tracking-[0.18em] text-neutral-600"
              >
                ← WORKSへ戻る
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}