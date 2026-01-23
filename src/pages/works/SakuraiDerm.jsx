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
{/* ============================
    JSON-LD（SEO）
================================ */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Sakurai Aesthetic Dermatology",
      "description":
        "美容皮膚科の緊張感をやわらげ、静けさと透明感を軸に設計したWebサイト。React / Vite / Tailwind / GSAP による“呼吸する”UIと、淡い桜の世界観を重ねたデザイン。",
      "url": "https://sakurai-clinic.vercel.app/",
      "image": [
        "/works1/sakurai-hero.png",
        "/works1/sakurai-11.png",
        "/works1/sakurai-2.png",
        "/works1/sakurai-3.png"
      ],
      "creator": {
        "@type": "Person",
        "name": "GUSHIKEN DESIGN",
        "url": "https://gushikendesign.com/"
      },
      "inLanguage": "ja",
      "keywords": [
        "美容皮膚科",
        "Aesthetic Dermatology",
        "静けさのデザイン",
        "桜ニュアンス",
        "余白設計",
        "React",
        "Vite",
        "Tailwind CSS v3",
        "GSAP Motion",
        "PC/SP 分離構造"
      ]
    }),
  }}
/>

      {/* =========================
          PC Layout
      ========================= */}
      <div className="hidden md:block">

        {/* Header */}
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
                美容皮膚科の“緊張しやすい空気”をやわらげ、
                ゆっくり息が整う設計で構築しました。
                情報の量と視線の流れを最小限にし、
                初めての方でも自然と安心できる体験へ。
              </p>

              <div className="mt-14 flex flex-wrap gap-10">
                <div>
                  <p className="text-[11px] tracking-[0.18em] text-neutral-500 mb-2">ROLE</p>
                  <p className="text-[12px] tracking-[0.08em] text-neutral-700">
                    UX / UI / Motion Design / Branding
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

        {/* Problems → Approach */}
        <div className="bg-[#fafafa] border-y border-neutral-200">
          <div className="max-w-[1120px] mx-auto px-12 py-28">
            <div className="grid grid-cols-2 gap-20">

              {/* Problem */}
              <div className="sd-fade">
                <h2 className="text-[20px] tracking-[0.14em] text-neutral-900 mb-10">
                  背景と課題
                </h2>
                <div className="space-y-6 text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                  <p>
                    美容医療は「不安」から調べ始める人が多いため、
                    最初に触れる情報の“温度”が印象を大きく左右する分野。
                  </p>
                  <p>
                    桜井美容皮膚科の世界観を壊さないよう、
                    情報・光のニュアンス・導線を丁寧に整え直す必要があった。
                  </p>
                </div>
              </div>

              {/* Approach */}
              <div className="sd-fade">
                <h2 className="text-[20px] tracking-[0.14em] text-neutral-900 mb-10">
                  デザインアプローチ
                </h2>
                <div className="space-y-6 text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                  <p className="text-neutral-900 tracking-[0.08em]">
                    “静けさ × 透明感 × 桜のニュアンス”
                  </p>
                  <p>
                    余白と光の層を重ね、
                    「読んだ瞬間に緊張がほどける」感覚を最優先に設計。
                    強調を避け、ゆっくり読める温度へ整えることで、
                    美容医療の怖さをやわらげた。
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
                    DESIGN INTENT
                  </p>
                  <p className="text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                    写真・光・ピンクの濃度を統一し、
                    世界観が“ひとつの空気”として伝わるように調整した。
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
              世界観を支える設計
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-12">
            {[
              {
                t: "AIR",
                d: "余白を“空気”として扱い、詰めず・押さず・急がせない構造。",
              },
              {
                t: "FLOW",
                d: "視線の流れを分散させず、自然と受け取る順番が揃う導線設計。",
              },
              {
                t: "LAYER",
                d: "ミスト・桜・光を重ね、静かな奥行きを感じるデザインに。",
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
                STRUCTURE & STACK
              </h2>
              <ul className="text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600 space-y-4">
                <li>・React / Vite</li>
                <li>・Tailwind CSS（v3）</li>
                <li>・PC / SP DOM 分離設計</li>
                <li>・GSAP（呼吸するフェード）</li>
              </ul>

              <p className="mt-12 text-[12px] leading-[2.3] tracking-[0.10em] text-neutral-500">
                世界観を壊さないために、光と余白の“速度”を細かく整えています。
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

      {/* =========================
          SP Layout
      ========================= */}
      <div className="md:hidden">

        {/* SP header */}
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

        {/* SP content */}
        <div className="px-6 pt-14 pb-20">

          <p className="text-[11px] tracking-[0.22em] text-neutral-500 mb-4 sd-sp">
            AESTHETIC / CLINIC
          </p>

          <h1 className="text-[22px] leading-[1.7] tracking-[0.10em] text-neutral-900 sd-sp">
            Sakurai Aesthetic Dermatology
          </h1>

          <p className="mt-10 text-[13px] leading-[2.3] tracking-[0.06em] text-neutral-600 sd-sp">
            美容医療の緊張感をやわらげ、
            ゆっくり読める構造を軸に設計したサイトです。
            強調せず、静かに安心できるUIを目指しました。
          </p>

          <div className="mt-14 border border-neutral-200 overflow-hidden sd-sp">
            <img
              src={assets.hero}
              alt="Sakurai hero"
              className="w-full h-[220px] object-cover"
            />
          </div>
        </div>

        {/* SP sections */}
        <div className="bg-[#fafafa] border-y border-neutral-200">
          <div className="px-6 py-20">
            <div className="space-y-14 sd-sp">
              <div>
                <h2 className="text-[16px] tracking-[0.14em] text-neutral-900 mb-7">
                  背景と課題
                </h2>
                <p className="text-[13px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                  美容皮膚科を初めて調べる人にとって、
                  サイトの“空気感”が安心の入口になる。
                </p>
              </div>

              <div>
                <h2 className="text-[16px] tracking-[0.14em] text-neutral-900 mb-7">
                  アプローチ
                </h2>
                <p className="text-[13px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                  淡い桜と光の層で、静かで柔らかい印象へ統一。
                  医療の固さを抑え、落ち着く速度で読めるように構成しました。
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

        {/* SP UX */}
        <div className="px-6 py-20">
          <h2 className="text-center text-[16px] tracking-[0.16em] text-neutral-900 mb-12 sd-sp">
            世界観を支える要素
          </h2>

          <div className="space-y-10">
            {[
              {
                t: "AIR",
                d: "余白の呼吸。詰めずに、自然に読める速度。",
              },
              {
                t: "FLOW",
                d: "不安を増やさず、目線の道筋だけを整える導線。",
              },
              {
                t: "LAYER",
                d: "桜のミストと光で、柔らかい印象を保つレイヤー設計。",
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

        {/* SP STACK */}
        <div className="px-6 py-20">
          <div className="border border-neutral-200 bg-[#fafafa] p-10 sd-sp">
            <p className="text-[11px] tracking-[0.22em] text-neutral-500 mb-6">
              STACK
            </p>
            <p className="text-[13px] leading-[2.4] tracking-[0.06em] text-neutral-700">
              React / Vite / Tailwind(v3) / GSAP  
              <br />
              PC・SP DOM 分離構造
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
