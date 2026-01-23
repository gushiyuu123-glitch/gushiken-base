import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import usePageFade from "../../hooks/usePageFade";

export default function MiyahiraDental() {
  useEffect(() => window.scrollTo(0, 0), []);

  /* ============================
      Assets
  ============================ */
  const assets = useMemo(
    () => ({
      hero: "/works1/miyahira.png",
      shot1: "/works1/miyahira-1.png",
      shot2: "/works1/miyahira-2.png",
      shot3: "/works1/miyahira-3.png",
    }),
    []
  );

  const liveUrl = "https://miyahira-dental.vercel.app/";

  /* ============================
      Fade animations
  ============================ */
  usePageFade(".md-fade", {
    y: 16,
    blur: true,
    duration: 1.1,
    ease: "power2.out",
    start: "top 85%",
  });

  usePageFade(".md-fade-soft", {
    y: 10,
    blur: false,
    duration: 0.9,
    ease: "power2.out",
    start: "top 85%",
  });

  usePageFade(".md-fade-sp", {
    y: 16,
    blur: true,
    duration: 1.0,
    ease: "power2.out",
    start: "top 88%",
  });

  return (
    <section className="min-h-screen bg-white text-slate-900">
      {/* =========================
          JSON-LD（SEO）
      ========================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "@id":
              "https://gushikendesign.com/works/miyahira-dental#creativework",
            name: "みやひら歯科｜Webサイト・デザイン設計",
            description:
              "不安や痛みに敏感な患者様のために、“静かに読めるUI”と落ち着いた色調・余白設計で構築した歯科クリニックの公式サイト。派手な訴求を避け、安心感と誠実さを最優先したWebデザイン。",
            url: "https://gushikendesign.com/works/miyahira-dental",
            image: [
              "/works1/miyahira.png",
              "/works1/miyahira-1.png",
              "/works1/miyahira-2.png",
              "/works1/miyahira-3.png"
            ],
            creator: {
              "@type": "Person",
              name: "裕人 具志堅",
              alternateName: "Yuto Gushiken",
              url: "https://gushikendesign.com/"
            },
            publisher: {
              "@type": "Organization",
              name: "GUSHIKEN DESIGN",
              url: "https://gushikendesign.com/"
            },
            inLanguage: "ja",
            isBasedOn: {
              "@type": "WebSite",
              name: "Miyahira Dental Clinic Official",
              url: "https://miyahira-dental.vercel.app/"
            }
          })
        }}
      />

      {/* =========================
          PC Layout（md以上）
      ========================== */}
      <div className="hidden md:block">

        {/* ===== Top bar ===== */}
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

        {/* ===== HERO ===== */}
        <div className="max-w-[1240px] mx-auto px-12 pt-20 pb-28">
          <div className="grid grid-cols-2 gap-16 items-end">
            <div className="md-fade">
              <p className="text-[12px] tracking-[0.22em] text-neutral-500 mb-5">
                DENTAL / CLINIC
              </p>

              <h1 className="text-[34px] leading-[1.5] tracking-[0.10em] text-neutral-900">
                Miyahira Dental Clinic
              </h1>

              <p className="mt-10 text-[15px] leading-[2.2] tracking-[0.06em] text-neutral-600 max-w-[520px]">
                痛みに弱い方、不安を抱えた方に向けて、
                <br />
                “静かに安心できる歯科体験” をデザインしました。
                <br />
                強いアピールをせず、丁寧さと落ち着きを優先しています。
              </p>

              {/* meta */}
              <div className="mt-14 flex flex-wrap gap-10">
                <div>
                  <p className="text-[11px] tracking-[0.18em] text-neutral-500 mb-2">
                    ROLE
                  </p>
                  <p className="text-[12px] tracking-[0.08em] text-neutral-700">
                    UX / UI / Motion Design
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

            <div className="md-fade-soft">
              <div className="relative overflow-hidden border border-neutral-200">
                <img
                  src={assets.hero}
                  alt="Miyahira Dental hero"
                  className="w-full h-[460px] object-cover"
                />
              </div>
              <p className="mt-5 text-[11px] tracking-[0.14em] text-neutral-500">
                “Quiet. Gentle. Honest Care.”
              </p>
            </div>
          </div>
        </div>

        {/* ===== Section: Problem → Concept ===== */}
        <div className="bg-[#fafafa] border-y border-neutral-200">
          <div className="max-w-[1120px] mx-auto px-12 py-28">
            <div className="grid grid-cols-2 gap-20">

              {/* Problem */}
              <div className="md-fade">
                <h2 className="text-[20px] tracking-[0.14em] text-neutral-900 mb-10">
                  課題
                </h2>
                <div className="space-y-6 text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                  <p>
                    歯科のWebサイトは「痛み・不安」を抱えたまま訪れる人が多いため、
                    情報過多や強い訴求は逆効果になることが多い。
                  </p>
                  <p>
                    そこで、みやひら歯科では
                    <span className="text-neutral-900">“安心の入口”</span>
                    を先にデザインする方針を採用。
                  </p>
                  <p>
                    予約導線より前に、
                    「ここなら大丈夫かもしれない」
                    と自然に思える静かなレイアウトを設計した。
                  </p>
                </div>
              </div>

              {/* Concept */}
              <div className="md-fade">
                <h2 className="text-[20px] tracking-[0.14em] text-neutral-900 mb-10">
                  コンセプト
                </h2>
                <div className="space-y-6 text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                  <p className="text-neutral-900 tracking-[0.08em]">
                    “痛みの不安に寄り添うデザイン”
                  </p>
                  <p>
                    押しつけず、急がせず、静かに読める設計。
                    <br />
                    迷っている人の気持ちを前提にし、
                    呼吸が整うUI・配色・余白で構築した。
                  </p>
                </div>
              </div>
            </div>

            {/* supporting image */}
            <div className="mt-20 md-fade-soft">
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-7 border border-neutral-200 bg-white overflow-hidden">
                  <img
                    src={assets.shot1}
                    alt="Miyahira Dental main"
                    className="w-full h-[420px] object-cover"
                  />
                </div>
                <div className="col-span-5">
                  <p className="text-[12px] tracking-[0.18em] text-neutral-500 mb-4">
                    DESIGN INTENT
                  </p>
                  <p className="text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                    まず「安心」。  
                    そのために、情報・動き・余白を心理基準で再構成し、
                    読んだだけで少し気が楽になる体験を目指した。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Section: UX Decisions ===== */}
        <div className="max-w-[1120px] mx-auto px-12 py-32">
          <div className="md-fade">
            <h2 className="text-center text-[22px] tracking-[0.16em] text-neutral-900 mb-16">
              UXで意識したこと
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-12">
            {[
              {
                t: "MOTION",
                d: "歯科の不安を増幅させないよう、ふわっと自然に現れるモーションに統一。",
              },
              {
                t: "INFORMATION",
                d: "料金・治療情報は一度に詰め込まない。“全部読まなくてOK”と感じられる構造。",
              },
              {
                t: "PRESSURE",
                d: "CTAを強くしない。「どうするか決めなくていい」を前提に設計。",
              },
            ].map((x) => (
              <div key={x.t} className="md-fade border border-neutral-200 bg-white p-10">
                <p className="text-[12px] tracking-[0.20em] text-neutral-500 mb-6">
                  {x.t}
                </p>
                <p className="text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                  {x.d}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-12 gap-8 items-center md-fade-soft">
            <div className="col-span-6 border border-neutral-200 overflow-hidden">
              <img
                src={assets.shot2}
                alt="Miyahira Dental structure"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="col-span-6 border border-neutral-200 overflow-hidden">
              <img
                src={assets.shot3}
                alt="Miyahira Dental contact/review"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* ===== Section: Stack ===== */}
        <div className="max-w-[1120px] mx-auto px-12 py-32">
          <div className="grid grid-cols-2 gap-20 items-start">
            <div className="md-fade">
              <h2 className="text-[18px] tracking-[0.16em] text-neutral-900 mb-10">
                STRUCTURE & STACK
              </h2>
              <ul className="text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600 space-y-4">
                <li>・React / Vite</li>
                <li>・Tailwind CSS（v3）</li>
                <li>・PC / SP DOM 分離構造</li>
                <li>・GSAP（呼吸するモーション）</li>
              </ul>

              <p className="mt-12 text-[12px] leading-[2.3] tracking-[0.10em] text-neutral-500">
                不安を前提に、音・光・動きを抑えた“静かなWeb体験”の設計。
              </p>
            </div>

            <div className="md-fade border border-neutral-200 bg-[#fafafa] p-12">
              <p className="text-[12px] tracking-[0.22em] text-neutral-500 mb-6">
                LIVE
              </p>
              <p className="text-[15px] leading-[2.3] tracking-[0.06em] text-neutral-700 mb-10">
                みやひら歯科 — Webサイト
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
          SP Layout（md未満）
      ========================== */}
      <div className="md:hidden">
        {/* SP top bar */}
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

        {/* SP HERO */}
        <div className="px-6 pt-14 pb-20">
          <p className="text-[11px] tracking-[0.22em] text-neutral-500 mb-4 md-fade-sp">
            DENTAL / CLINIC
          </p>

          <h1 className="text-[22px] leading-[1.7] tracking-[0.10em] text-neutral-900 md-fade-sp">
            Miyahira Dental Clinic
          </h1>

          <p className="mt-10 text-[13px] leading-[2.3] tracking-[0.06em] text-neutral-600 md-fade-sp">
            痛みに弱い方、不安がある方のために、
            <br />
            “静かに読めるUI” を基準に作ったサイトです。
            <br />
            CTAを強くせず、安心して読み進められる構造に。
          </p>

          <div className="mt-14 border border-neutral-200 overflow-hidden md-fade-sp">
            <img
              src={assets.hero}
              alt="Miyahira Dental hero"
              className="w-full h-[220px] object-cover"
            />
          </div>
        </div>

        {/* SP Problem / Concept */}
        <div className="bg-[#fafafa] border-y border-neutral-200">
          <div className="px-6 py-20">
            <div className="space-y-14 md-fade-sp">
              <div>
                <h2 className="text-[16px] tracking-[0.14em] text-neutral-900 mb-7">
                  課題
                </h2>
                <p className="text-[13px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                  歯科サイトは不安を抱えた人が訪れる。
                  <br />
                  情報を詰めすぎず、押さず、静かに伝える必要がある。
                </p>
              </div>

              <div>
                <h2 className="text-[16px] tracking-[0.14em] text-neutral-900 mb-7">
                  コンセプト
                </h2>
                <p className="text-[13px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                  <span className="text-neutral-900">“安心の設計”</span> を最優先に。
                  <br />
                  読む速度に合わせ、押しつけないレイアウトで構築。
                </p>
              </div>
            </div>

            <div className="mt-14 border border-neutral-200 bg-white overflow-hidden md-fade-sp">
              <img
                src={assets.shot1}
                alt="Miyahira mobile"
                className="w-full h-[240px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* SP UX */}
        <div className="px-6 py-20">
          <h2 className="text-center text-[16px] tracking-[0.16em] text-neutral-900 mb-12 md-fade-sp">
            UXで意識したこと
          </h2>

          <div className="space-y-10">
            {[
              {
                t: "MOTION",
                d: "ふわっと自然に出る動きで、歯科の不安を刺激しない。",
              },
              {
                t: "INFORMATION",
                d: "情報を一度に出さず、必要なだけ読める設計。",
              },
              {
                t: "PRESSURE",
                d: "CTAを強調しない。“判断を急がせない”体験に統一。",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="border border-neutral-200 bg-white p-10 md-fade-sp"
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

          <div className="mt-14 border border-neutral-200 bg-white overflow-hidden md-fade-sp">
            <img
              src={assets.shot2}
              alt="Miyahira UX"
              className="w-full h-[240px] object-cover"
            />
          </div>

          <div className="mt-10 border border-neutral-200 bg-white overflow-hidden md-fade-sp">
            <img
              src={assets.shot3}
              alt="Miyahira Review"
              className="w-full h-[240px] object-cover"
            />
          </div>
        </div>

        {/* SP STACK */}
        <div className="px-6 py-20">
          <div className="border border-neutral-200 bg-[#fafafa] p-10 md-fade-sp">
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
