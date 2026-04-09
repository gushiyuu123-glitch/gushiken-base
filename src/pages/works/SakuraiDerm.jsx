import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import usePageFade from "../../hooks/usePageFade";

export default function SakuraiDerm() {
  useEffect(() => window.scrollTo(0, 0), []);

  const assets = useMemo(
    () => ({
      hero: "/works1/sakurai-hero.png",
      shot1: "/works1/sakurai-11.png",
      shot2: "/works1/sakurai-2.png",
      shot3: "/works1/sakurai-3.png",
    }),
    []
  );

  const liveUrl = "https://sakurai-clinic.vercel.app/";

  usePageFade(".sd-fade", {
    y: 14,
    blur: true,
    duration: 1.1,
    ease: "power2.out",
    start: "top 85%",
  });

  usePageFade(".sd-soft", {
    y: 10,
    blur: false,
    duration: 0.9,
    ease: "power2.out",
    start: "top 85%",
  });

  usePageFade(".sd-sp", {
    y: 14,
    blur: true,
    duration: 1.0,
    ease: "power2.out",
    start: "top 88%",
  });

  return (
    <section className="min-h-screen bg-white text-[#1e1e1e]">
      {/* SEO / JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "@id": "https://sakurai-clinic.vercel.app/",
            name: "Sakurai Aesthetic Dermatology",
            alternateName: "桜井美容皮膚科 — Webサイト制作",
            url: "https://sakurai-clinic.vercel.app/",
            image: [
              "https://sakurai-clinic.vercel.app/ogp.png",
              "/works1/sakurai-hero.png",
              "/works1/sakurai-11.png",
              "/works1/sakurai-2.png",
              "/works1/sakurai-3.png"
            ],
            description:
              "美容皮膚科のやわらかな透明感と安心感が自然に伝わるようにまとめたWebサイト。淡い桜の印象と落ち着いたトーンで、初めての方にも見やすい作品を目指した。",
         "inLanguage": "ja",
      "keywords": [
              "美容皮膚科 Webデザイン",
              "美容クリニックサイト",
              "桜の世界観",
              "React",
              "Vite",
              "Tailwind CSS",
              "GSAP Motion"
            ],
            creator: {
              "@type": "Organization",
              "name": "GUSHIKEN DESIGN",
              "url": "https://gushikendesign.com/"
            },
            publisher: {
              "@type": "Organization",
              "name": "GUSHIKEN DESIGN"
            }
          })
        }}
      />

      {/* OGP */}
      <meta property="og:title" content="Sakurai Aesthetic Dermatology — Web Design" />
      <meta
        property="og:description"
        content="美容皮膚科のやわらかな透明感と安心感が自然に伝わるようにまとめたWeb作品。"
      />
      <meta property="og:image" content="https://sakurai-clinic.vercel.app/ogp.png" />
      <meta property="og:type" content="website" />

      {/* META */}
      <meta
        name="description"
        content="美容皮膚科のやわらかな透明感と安心感が自然に伝わるようにまとめたWebサイト。初めての方にも見やすい印象を大切にした作品。"
      />
      <meta name="twitter:card" content="summary_large_image" />

      {/* PC Layout */}
      <div className="hidden md:block">
        <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-neutral-200">
          <div className="max-w-[1120px] mx-auto px-12 h-[72px] flex items-center justify-between">
            <Link
              to="/works"
              className="text-[12px] tracking-[0.14em] text-neutral-500 hover:text-neutral-700 transition-colors"
            >
              ← WORKS
            </Link>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-[12px] tracking-[0.16em]
                text-neutral-700
                border-b border-neutral-400
                pb-1 hover:opacity-70 transition-opacity
              "
            >
              OPEN SITE →
            </a>
          </div>
        </header>

        {/* HERO */}
        <div className="max-w-[1240px] mx-auto px-12 pt-20 pb-28">
          <div className="grid grid-cols-2 gap-16 items-end">
            <div className="sd-fade">
              <p className="text-[12px] tracking-[0.22em] text-neutral-500 mb-5">
                AESTHETIC / CLINIC
              </p>

              <h1 className="text-[34px] leading-[1.5] tracking-[0.10em] text-neutral-900">
                Sakurai Aesthetic Dermatology
              </h1>

              <p className="mt-10 text-[15px] leading-[2.2] tracking-[0.06em] text-neutral-600 max-w-[520px]">
                美容医療に対する不安をやわらげながら、
                落ち着いて見てもらえることを大切にしたサイトです。
                やさしい透明感と静かな印象で、
                初めての方にも安心感が伝わるようにまとめました。
              </p>

              <div className="mt-14 flex flex-wrap gap-10">
                <div>
                  <p className="text-[11px] tracking-[0.18em] text-neutral-500 mb-2">ROLE</p>
                  <p className="text-[12px] tracking-[0.08em] text-neutral-700">
                    Web Design / Front-end
                  </p>
                </div>

                <div>
                  <p className="text-[11px] tracking-[0.18em] text-neutral-500 mb-2">STACK</p>
                  <p className="text-[12px] tracking-[0.08em] text-neutral-700">
                    React / Vite / Tailwind / GSAP
                  </p>
                </div>
              </div>
            </div>

            <div className="sd-soft">
              <div className="relative overflow-hidden border border-neutral-200 bg-white">
                <img
                  src={assets.hero}
                  alt="Sakurai Clinic hero"
                  className="w-full h-[460px] object-cover"
                />
              </div>
              <p className="mt-5 text-[11px] tracking-[0.14em] text-neutral-500">
                “Calm, Gentle, and Honest Care.”
              </p>
            </div>
          </div>
        </div>

        {/* Background / Approach */}
        <div className="bg-[#fafafa] border-y border-neutral-200">
          <div className="max-w-[1120px] mx-auto px-12 py-28">
            <div className="grid grid-cols-2 gap-20">
              <div className="sd-fade">
                <h2 className="text-[20px] tracking-[0.14em] text-neutral-900 mb-10">
                  背景と課題
                </h2>
                <div className="space-y-6 text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                  <p>
                    美容医療は、不安を抱えたまま調べ始める方も多く、
                    最初に触れる印象が大きく残りやすい分野です。
                  </p>
                  <p>
                    桜井美容皮膚科では、
                    クリニックのやわらかな雰囲気や誠実さが
                    自然に伝わる見え方を大切にしました。
                  </p>
                </div>
              </div>

              <div className="sd-fade">
                <h2 className="text-[20px] tracking-[0.14em] text-neutral-900 mb-10">
                  大切にした印象
                </h2>
                <div className="space-y-6 text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                  <p className="text-neutral-900 tracking-[0.08em]">
                    “静けさ × 透明感 × 桜のニュアンス”
                  </p>
                  <p>
                    淡い桜の印象とやわらかな光を軸に、
                    静かで落ち着いた空気が伝わるように整えました。
                    強い訴求を避けることで、
                    美容医療に対する緊張感を少しやわらげることを目指しています。
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-20 sd-soft">
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-7 border border-neutral-200 overflow-hidden bg-white">
                  <img
                    src={assets.shot1}
                    alt="Sakurai main"
                    className="w-full h-[420px] object-cover"
                  />
                </div>
                <div className="col-span-5">
                  <p className="text-[12px] tracking-[0.18em] text-neutral-500 mb-4">
                    IMPRESSION
                  </p>
                  <p className="text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                    写真や色味のトーンをそろえながら、
                    世界観がひとつの印象として自然に伝わることを大切にしました。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="max-w-[1120px] mx-auto px-12 py-32">
          <div className="sd-fade">
            <h2 className="text-center text-[22px] tracking-[0.16em] text-neutral-900 mb-16">
              ポイント
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-12">
            {[
              {
                t: "AIR",
                d: "余白を広めに取り、やわらかく落ち着いて見られること。",
              },
              {
                t: "FLOW",
                d: "情報が無理なく伝わるよう、自然な順番で見られること。",
              },
              {
                t: "LAYER",
                d: "桜や光の印象を重ね、やさしい透明感が残ること。",
              },
            ].map((x) => (
              <div key={x.t} className="sd-fade border border-neutral-200 bg-white p-10">
                <p className="text-[12px] tracking-[0.22em] text-neutral-500 mb-6">
                  {x.t}
                </p>
                <p className="text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                  {x.d}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-12 gap-8 items-center sd-soft">
            <div className="col-span-6 border border-neutral-200 overflow-hidden">
              <img
                src={assets.shot2}
                alt="Sakurai info"
                className="w-full h-[420px] object-cover"
              />
            </div>

            <div className="col-span-6 border border-neutral-200 overflow-hidden">
              <img
                src={assets.shot3}
                alt="Sakurai access"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stack */}
        <div className="max-w-[1120px] mx-auto px-12 py-32">
          <div className="grid grid-cols-2 gap-20">
            <div className="sd-fade">
              <h2 className="text-[18px] tracking-[0.16em] text-neutral-900 mb-10">
                STACK
              </h2>
              <ul className="text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600 space-y-4">
                <li>・React / Vite</li>
                <li>・Tailwind CSS（v3）</li>
                <li>・GSAP</li>
              </ul>

              <p className="mt-12 text-[12px] leading-[2.3] tracking-[0.10em] text-neutral-500">
                見やすさとやわらかな印象を大切にしながら、全体を整えています。
              </p>
            </div>

            <div className="sd-fade border border-neutral-200 bg-[#fafafa] p-12">
              <p className="text-[12px] tracking-[0.22em] text-neutral-500 mb-6">
                LIVE
              </p>
              <p className="text-[15px] leading-[2.3] tracking-[0.06em] text-neutral-700 mb-10">
                桜井美容皮膚科 — Webサイト
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
                  pb-1 hover:opacity-70 transition-opacity
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

      {/* SP Layout */}
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
          <p className="text-[11px] tracking-[0.22em] text-neutral-500 mb-4 sd-sp">
            AESTHETIC / CLINIC
          </p>

          <h1 className="text-[22px] leading-[1.7] tracking-[0.10em] text-neutral-900 sd-sp">
            Sakurai Aesthetic Dermatology
          </h1>

          <p className="mt-10 text-[13px] leading-[2.3] tracking-[0.06em] text-neutral-600 sd-sp">
            美容医療に対する不安をやわらげながら、
            落ち着いて見てもらえることを大切にしたサイトです。
            やさしい透明感と静かな印象を目指しました。
          </p>

          <div className="mt-14 border border-neutral-200 overflow-hidden sd-sp">
            <img
              src={assets.hero}
              alt="Sakurai hero"
              className="w-full h-[220px] object-cover"
            />
          </div>
        </div>

        <div className="bg-[#fafafa] border-y border-neutral-200">
          <div className="px-6 py-20">
            <div className="space-y-14 sd-sp">
              <div>
                <h2 className="text-[16px] tracking-[0.14em] text-neutral-900 mb-7">
                  背景と課題
                </h2>
                <p className="text-[13px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                  美容皮膚科を初めて調べる方にとって、
                  サイトの印象そのものが安心感につながりやすいと考えました。
                </p>
              </div>

              <div>
                <h2 className="text-[16px] tracking-[0.14em] text-neutral-900 mb-7">
                  アプローチ
                </h2>
                <p className="text-[13px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                  淡い桜や光の印象を大切にしながら、
                  静かで柔らかな雰囲気にまとめています。
                </p>
              </div>
            </div>

            <div className="mt-14 border border-neutral-200 bg-white overflow-hidden sd-sp">
              <img
                src={assets.shot1}
                alt="Sakurai mobile"
                className="w-full h-[240px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="px-6 py-20">
          <h2 className="text-center text-[16px] tracking-[0.16em] text-neutral-900 mb-12 sd-sp">
            ポイント
          </h2>

          <div className="space-y-10">
            {[
              {
                t: "AIR",
                d: "余白を広めに取り、やわらかく落ち着いて見られること。",
              },
              {
                t: "FLOW",
                d: "情報が自然な順番で伝わるように整えていること。",
              },
              {
                t: "LAYER",
                d: "桜や光の印象を重ね、やさしい透明感が残ること。",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="border border-neutral-200 bg-white p-10 sd-sp"
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

          <div className="mt-14 border border-neutral-200 overflow-hidden sd-sp">
            <img
              src={assets.shot2}
              alt="Sakurai flow"
              className="w-full h-[240px] object-cover"
            />
          </div>

          <div className="mt-10 border border-neutral-200 overflow-hidden sd-sp">
            <img
              src={assets.shot3}
              alt="Sakurai access"
              className="w-full h-[240px] object-cover"
            />
          </div>
        </div>

        <div className="px-6 py-20">
          <div className="border border-neutral-200 bg-[#fafafa] p-10 sd-sp">
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
                {liveUrl}
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