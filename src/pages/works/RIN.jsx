import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import usePageFade from "../../hooks/usePageFade";

export default function RIN() {
  useEffect(() => window.scrollTo(0, 0), []);

  const assets = useMemo(
    () => ({
      hero: "/works1/rin.png",
      shot1: "/works1/rin-1.webp",
      shot2: "/works1/rin-2.webp",
      shot3: "/works1/rin-3.webp",
      shotSP: "/works1/rin-sp1.png",
    }),
    []
  );

  const liveUrl = "https://rin-psi.vercel.app/";

  usePageFade(".rin-fade", {
    y: 16,
    blur: true,
    duration: 1.1,
    ease: "power2.out",
    start: "top 85%",
  });

  usePageFade(".rin-fade-soft", {
    y: 10,
    blur: false,
    duration: 0.9,
    ease: "power2.out",
    start: "top 85%",
  });

  usePageFade(".rin-fade-sp", {
    y: 14,
    blur: true,
    duration: 1.0,
    ease: "power2.out",
    start: "top 88%",
  });

  return (
    <section className="min-h-screen bg-white text-slate-900">
      {/* SEO / JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "@id": "https://gushikendesign.com/works/rin#creativework",
            name: "RIN — Eyelash Salon Website",
            alternateName: "RIN（まつエク） — Eyelash Salon Website",
            description:
              "迷っている方にも落ち着いて見てもらえることを大切にした、まつエクサロンのWebサイト。やさしい印象と読みやすさを軸に、安心感が自然に伝わるようにまとめた作品。",
            inLanguage: "ja",
            url: "https://rin-psi.vercel.app/",
            image: [
              "https://gushikendesign.com/works/rin/ogp.png",
              "/works1/rin.png",
              "/works1/rin-1.webp",
              "/works1/rin-2.webp",
              "/works1/rin-3.webp"
            ],
            creator: {
              "@type": "Person",
              name: "裕人 具志堅",
              url: "https://gushikendesign.com/"
            },
            publisher: {
              "@type": "Organization",
              name: "GUSHIKEN DESIGN",
              url: "https://gushikendesign.com/"
            },
            about: [
              "まつエク Webサイト",
              "Eyelash Salon",
              "React Design",
              "Tailwind v3",
              "GSAP Motion"
            ]
          })
        }}
      />

      <meta property="og:title" content="RIN — Eyelash Salon Website" />
      <meta
        property="og:description"
        content="迷っている方にも落ち着いて見てもらえることを大切にした、やさしい印象のまつエクサイト。"
      />
      <meta
        property="og:image"
        content="https://gushikendesign.com/works/rin/ogp.png"
      />
      <meta property="og:type" content="website" />

      <meta
        name="description"
        content="RINは、迷っている方にも落ち着いて見てもらえることを大切にしたまつエク専門サイト。やさしい印象と読みやすさを軸に、安心感が自然に伝わるようにまとめた作品。"
      />
      <meta name="twitter:card" content="summary_large_image" />

      {/* PC */}
      <div className="hidden md:block">
        <header className="sticky top-0 z-50 bg-white/75 backdrop-blur border-b border-neutral-200">
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
                text-neutral-700
                border-b
                border-neutral-300
                pb-1
                hover:opacity-70
                transition-opacity
              "
            >
              OPEN SITE →
            </a>
          </div>
        </header>

        <div className="max-w-[1240px] mx-auto px-12 pt-20 pb-28">
          <div className="grid grid-cols-2 gap-16 items-end">
            <div className="rin-fade">
              <p className="text-[12px] tracking-[0.22em] text-neutral-500 mb-5">
                BEAUTY / SALON
              </p>

              <h1 className="text-[34px] leading-[1.5] tracking-[0.10em] text-neutral-900">
                RIN — Eyelash Salon Website
              </h1>

              <p className="mt-10 text-[15px] leading-[2.2] tracking-[0.06em] text-neutral-600 max-w-[520px]">
                すぐに決めたい方だけでなく、
                <br />
                まだ少し迷っている方にも
                <br />
                落ち着いて見てもらえることを大切にしたサイトです。
              </p>

              <div className="mt-14 flex flex-wrap gap-10">
                <div>
                  <p className="text-[11px] tracking-[0.18em] text-neutral-500 mb-2">
                    ROLE
                  </p>
                  <p className="text-[12px] tracking-[0.08em] text-neutral-700">
                    Web Design / Front-end
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

            <div className="rin-fade-soft">
              <div className="relative overflow-hidden border border-neutral-200">
                <img
                  src={assets.hero}
                  alt="RIN website hero"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-white/02" />
              </div>
              <p className="mt-5 text-[11px] tracking-[0.14em] text-neutral-500">
                “Gentle. Quiet. Easy to trust.”
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#fafafa] border-y border-neutral-200">
          <div className="max-w-[1120px] mx-auto px-12 py-28">
            <div className="grid grid-cols-2 gap-20">
              <div className="rin-fade">
                <h2 className="text-[20px] tracking-[0.14em] text-neutral-900 mb-10">
                  この作品について
                </h2>
                <div className="space-y-6 text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                  <p>
                    美容サービスのサイトは、情報が多くなりやすく、
                    人によっては少し身構えてしまうことがあります。
                  </p>
                  <p>
                    まつエクはほんの少しの違いでも印象が変わるからこそ、
                    不安や迷いを抱えたまま見る方も少なくありません。
                  </p>
                  <p>
                    RINでは、そうした気持ちにも寄り添いながら、
                    やさしく落ち着いた印象で見られることを大切にしました。
                  </p>
                </div>
              </div>

              <div className="rin-fade">
                <h2 className="text-[20px] tracking-[0.14em] text-neutral-900 mb-10">
                  大切にした印象
                </h2>
                <div className="space-y-6 text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                  <p className="text-neutral-900 tracking-[0.08em]">
                    やさしく、落ち着いて見られること。
                  </p>
                  <p>
                    強く押し出すよりも、
                    安心感や読みやすさが自然に伝わることを重視しました。
                  </p>
                  <p>
                    迷っている段階の方にも、
                    無理なく見てもらえる空気を大切にしています。
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-20 rin-fade-soft">
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-7 border border-neutral-200 bg-white overflow-hidden">
                  <img
                    src={assets.shot1}
                    alt="RIN concept screen"
                    className="w-full h-[420px] object-cover"
                  />
                </div>
                <div className="col-span-5">
                  <p className="text-[12px] tracking-[0.18em] text-neutral-500 mb-4">
                    IMPRESSION
                  </p>
                  <p className="text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                    行動を急がせるのではなく、
                    まずは安心して見てもらえること。
                    <br />
                    そのうえで、やさしさや信頼感が静かに残るように整えています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1120px] mx-auto px-12 py-32">
          <div className="rin-fade">
            <h2 className="text-center text-[22px] tracking-[0.16em] text-neutral-900 mb-16">
              ポイント
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-12">
            <div className="rin-fade border border-neutral-200 bg-white p-10">
              <p className="text-[12px] tracking-[0.20em] text-neutral-500 mb-6">
                01 / MOTION
              </p>
              <p className="text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                やわらかな動きで、派手すぎず落ち着いて見られること。
              </p>
            </div>

            <div className="rin-fade border border-neutral-200 bg-white p-10">
              <p className="text-[12px] tracking-[0.20em] text-neutral-500 mb-6">
                02 / INFORMATION
              </p>
              <p className="text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                情報を詰め込みすぎず、必要な内容を無理なく読めること。
              </p>
            </div>

            <div className="rin-fade border border-neutral-200 bg-white p-10">
              <p className="text-[12px] tracking-[0.20em] text-neutral-500 mb-6">
                03 / RELIEF
              </p>
              <p className="text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                見終わったあとに、少し気持ちがやわらぐような印象を残すこと。
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-12 gap-8 items-center rin-fade-soft">
            <div className="col-span-6 border border-neutral-200 overflow-hidden">
              <img
                src={assets.shot2}
                alt="RIN information design"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="col-span-6 border border-neutral-200 overflow-hidden">
              <img
                src={assets.shot3}
                alt="RIN review/contact design"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="bg-white border-y border-neutral-200">
          <div className="max-w-[1120px] mx-auto px-12 py-32">
            <div className="rin-fade text-center">
              <h2 className="text-[20px] tracking-[0.18em] text-neutral-900 mb-10">
                印象の流れ
              </h2>
              <p className="text-[13px] leading-[2.3] tracking-[0.08em] text-neutral-600 max-w-[760px] mx-auto">
                RINでは、まず安心して見られることを大切にしながら、
                少しずつ理解や信頼感につながるような流れを意識しました。
              </p>
            </div>

            <div className="mt-20 grid grid-cols-4 gap-10 rin-fade">
              {[
                { t: "安心", d: "やわらかく見られる空気" },
                { t: "理解", d: "内容が自然に伝わること" },
                { t: "納得", d: "無理なく読める印象" },
                { t: "行動", d: "相談の入口が見つけやすい" },
              ].map((s) => (
                <div key={s.t} className="border border-neutral-200 bg-[#fafafa] p-10">
                  <p className="text-[12px] tracking-[0.22em] text-neutral-500 mb-4">
                    {s.t}
                  </p>
                  <p className="text-[14px] leading-[2.3] tracking-[0.06em] text-neutral-700">
                    {s.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[1120px] mx-auto px-12 py-32">
          <div className="grid grid-cols-2 gap-20 items-start">
            <div className="rin-fade">
              <h2 className="text-[18px] tracking-[0.16em] text-neutral-900 mb-10">
                STACK
              </h2>

              <ul className="text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600 space-y-4">
                <li>・React / Vite</li>
                <li>・Tailwind CSS（v3）</li>
                <li>・GSAP</li>
              </ul>

              <p className="mt-12 text-[12px] leading-[2.3] tracking-[0.10em] text-neutral-500">
                見やすさとやさしい印象を大切にしながら、全体を整えています。
              </p>
            </div>

            <div className="rin-fade border border-neutral-200 bg-[#fafafa] p-12">
              <p className="text-[12px] tracking-[0.22em] text-neutral-500 mb-6">
                LIVE
              </p>
              <p className="text-[15px] leading-[2.3] tracking-[0.06em] text-neutral-700 mb-10">
                RIN のまつエクサイト（公開）
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
                  border-b
                  border-neutral-400
                  pb-1
                  hover:opacity-70
                  transition-opacity
                "
              >
                サイトを見る
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
          <p className="text-[11px] tracking-[0.22em] text-neutral-500 mb-4 rin-fade-sp">
            BEAUTY / SALON
          </p>

          <h1 className="text-[22px] leading-[1.7] tracking-[0.10em] text-neutral-900 rin-fade-sp">
            RIN — Eyelash Salon Website
          </h1>

          <p className="mt-10 text-[13px] leading-[2.3] tracking-[0.06em] text-neutral-600 rin-fade-sp">
            すぐに決めたい方だけでなく、
            <br />
            少し迷っている方にも
            <br />
            落ち着いて見てもらえることを大切にしたサイトです。
          </p>

          <div className="mt-14 border border-neutral-200 overflow-hidden rin-fade-sp">
            <img
              src={assets.hero}
              alt="RIN website hero"
              className="w-full h-[220px] object-cover"
            />
          </div>
        </div>

        <div className="bg-[#fafafa] border-y border-neutral-200">
          <div className="px-6 py-20">
            <div className="space-y-14 rin-fade-sp">
              <div>
                <h2 className="text-[16px] tracking-[0.14em] text-neutral-900 mb-7">
                  この作品について
                </h2>
                <p className="text-[13px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                  美容サイトは情報が多くなりやすく、
                  <br />
                  人によっては少し身構えてしまうことがあります。
                  <br />
                  RINでは、そうした気持ちにも寄り添いながら、
                  <br />
                  やさしく見られる印象を大切にしました。
                </p>
              </div>

              <div>
                <h2 className="text-[16px] tracking-[0.14em] text-neutral-900 mb-7">
                  大切にした印象
                </h2>
                <p className="text-[13px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                  <span className="text-neutral-900 tracking-[0.08em]">
                    やさしく、落ち着いて見られること。
                  </span>
                  <br />
                  強く押し出すよりも、
                  <br />
                  安心感や読みやすさが自然に伝わることを大切にしています。
                </p>
              </div>
            </div>

            <div className="mt-14 border border-neutral-200 bg-white overflow-hidden rin-fade-sp">
              <img
                src={assets.shotSP || assets.shot1}
                alt="RIN mobile screen"
                className="w-full h-[240px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="px-6 py-20">
          <h2 className="text-center text-[16px] tracking-[0.16em] text-neutral-900 mb-12 rin-fade-sp">
            ポイント
          </h2>

          <div className="space-y-10">
            {[
              {
                t: "MOTION",
                d:
                  "やわらかな動きで、派手すぎず落ち着いて見られること。",
              },
              {
                t: "INFORMATION",
                d:
                  "情報を詰め込みすぎず、必要な内容を無理なく読めること。",
              },
              {
                t: "RELIEF",
                d:
                  "見終わったあとに、少し気持ちがやわらぐような印象を残すこと。",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="border border-neutral-200 bg-white p-10 rin-fade-sp"
              >
                <p className="text-[11px] tracking-[0.22em] text-neutral-500 mb-5">
                  {x.t}
                </p>
                <p className="text-[13px] leading-[2.4] tracking-[0.06em] text-neutral-600 whitespace-pre-line">
                  {x.d}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border-y border-neutral-200">
          <div className="px-6 py-20">
            <h2 className="text-center text-[15px] tracking-[0.18em] text-neutral-900 mb-8 rin-fade-sp">
              印象の流れ
            </h2>
            <p className="text-center text-[12px] leading-[2.4] tracking-[0.08em] text-neutral-600 rin-fade-sp">
              安心 → 理解 → 納得 → 行動
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8">
              {[
                { t: "安心", d: "やわらかく見られる空気" },
                { t: "理解", d: "内容が自然に伝わること" },
                { t: "納得", d: "無理なく読める印象" },
                { t: "行動", d: "相談の入口が見つけやすい" },
              ].map((s) => (
                <div
                  key={s.t}
                  className="border border-neutral-200 bg-[#fafafa] p-8 rin-fade-sp"
                >
                  <p className="text-[11px] tracking-[0.22em] text-neutral-500 mb-3">
                    {s.t}
                  </p>
                  <p className="text-[12px] leading-[2.2] tracking-[0.06em] text-neutral-700">
                    {s.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 py-20">
          <div className="border border-neutral-200 bg-[#fafafa] p-10 rin-fade-sp">
            <p className="text-[11px] tracking-[0.22em] text-neutral-500 mb-6">
              STACK
            </p>
            <p className="text-[13px] leading-[2.4] tracking-[0.06em] text-neutral-700">
              React / Vite / Tailwind(v3) / GSAP
            </p>

            <div className="mt-12 pt-10 border-t border-neutral-200">
              <p className="text-[11px] tracking-[0.22em] text-neutral-500 mb-4">
                LIVE
              </p>
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[11px] tracking-[0.18em] text-neutral-700 border-b border-neutral-300 pb-1"
              >
                サイトを見る
              </a>

              <div className="mt-10">
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
      </div>
    </section>
  );
}