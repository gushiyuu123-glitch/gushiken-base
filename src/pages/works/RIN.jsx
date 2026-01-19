// src/pages/works/RIN.jsx
import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import usePageFade from "../../hooks/usePageFade";

export default function RIN() {
  useEffect(() => window.scrollTo(0, 0), []);

  // ===== 画像（ここだけ差し替えればOK）=====
  // ※存在しない場合は、あなたの works 用スクショに合わせてパス変更してね
  const assets = useMemo(
    () => ({
      hero: "/works1/rin.png", // 作品一覧で使ってるサムネと揃えるのが綺麗
      shot1: "/works1/rin-1.webp", // コンセプト（迷いのUX）
      shot2: "/works1/rin-2.webp", // 料金/情報の出し方
      shot3: "/works1/rin-3.webp", // Review/Contactあたり
      shotSP: "/works1/rin-sp1.png", // SP版の見せ場（あれば）
    }),
    []
  );

  const liveUrl = "https://rin-psi.vercel.app/";

  // ===== page fade（PC）=====
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

  // ===== page fade（SP）=====
  usePageFade(".rin-fade-sp", {
    y: 14,
    blur: true,
    duration: 1.0,
    ease: "power2.out",
    start: "top 88%",
  });

  return (
    <section className="min-h-screen bg-white text-slate-900">
      {/* =========================
          PC（md以上）
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
            <div className="rin-fade">
              <p className="text-[12px] tracking-[0.22em] text-neutral-500 mb-5">
                BEAUTY / SALON
              </p>

              <h1 className="text-[34px] leading-[1.5] tracking-[0.10em] text-neutral-900">
                RIN — Eyelash Salon Website
              </h1>

              <p className="mt-10 text-[15px] leading-[2.2] tracking-[0.06em] text-neutral-600 max-w-[520px]">
                「すぐに予約したい人」ではなく、
                <br />
                まだ迷っている人のために設計したサイト。
                <br />
                押さない。急がせない。静かに読める。
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
                “Designed for hesitation.”
              </p>
            </div>
          </div>
        </div>

        {/* ===== SECTION: Problem → Concept ===== */}
        <div className="bg-[#fafafa] border-y border-neutral-200">
          <div className="max-w-[1120px] mx-auto px-12 py-28">
            <div className="grid grid-cols-2 gap-20">
              <div className="rin-fade">
                <h2 className="text-[20px] tracking-[0.14em] text-neutral-900 mb-10">
                  課題
                </h2>
                <div className="space-y-6 text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                  <p>
                    美容サービスのサイトは、情報を詰め込みやすく、
                    「決断を急かす圧」が生まれやすい。
                  </p>
                  <p>
                    でも、まつエクはほんの少しで印象が変わる。
                    だからこそ“不安”は自然で、むしろ正しい反応だと思う。
                  </p>
                  <p>
                    そこでRINは、集客より先に
                    <span className="text-neutral-900">「迷いの受け皿」</span>
                    を作ることにした。
                  </p>
                </div>
              </div>

              <div className="rin-fade">
                <h2 className="text-[20px] tracking-[0.14em] text-neutral-900 mb-10">
                  コンセプト
                </h2>
                <div className="space-y-6 text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                  <p className="text-neutral-900 tracking-[0.08em]">
                    決めない、という選択。
                  </p>
                  <p>
                    「早く決めてください」という考え方を採らない。
                    だからサイトも、押しつけず、急がせず、
                    静かに読める構造にする。
                  </p>
                  <p>
                    目標は、
                    <span className="text-neutral-900">
                      “読んだ人の呼吸が整う”
                    </span>
                    感覚をつくること。
                  </p>
                </div>
              </div>
            </div>

            {/* supporting image */}
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
                    DESIGN INTENT
                  </p>
                  <p className="text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                    “行動させる”よりも先に、
                    <br />
                    “安心して置いておける”場所をつくる。
                    <br />
                    そのために、情報量・動き・余白の密度を
                    <br />
                    すべて心理基準で調整した。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== SECTION: UX Decisions ===== */}
        <div className="max-w-[1120px] mx-auto px-12 py-32">
          <div className="rin-fade">
            <h2 className="text-center text-[22px] tracking-[0.16em] text-neutral-900 mb-16">
              UXで意識したこと
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-12">
            <div className="rin-fade border border-neutral-200 bg-white p-10">
              <p className="text-[12px] tracking-[0.20em] text-neutral-500 mb-6">
                01 / MOTION
              </p>
              <p className="text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                スクロールで文字や写真が“ふわっと”現れる設計。
                <br />
                派手さよりも
                <span className="text-neutral-900">「目が疲れない」</span>
                ことを優先。
              </p>
            </div>

            <div className="rin-fade border border-neutral-200 bg-white p-10">
              <p className="text-[12px] tracking-[0.20em] text-neutral-500 mb-6">
                02 / INFORMATION
              </p>
              <p className="text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                料金や補足は“一度に全部出さない”。
                <br />
                必要なところだけ読める構造にして、
                <span className="text-neutral-900">
                  「全部読まなくても大丈夫」
                </span>
                を作った。
              </p>
            </div>

            <div className="rin-fade border border-neutral-200 bg-white p-10">
              <p className="text-[12px] tracking-[0.20em] text-neutral-500 mb-6">
                03 / PRESSURE
              </p>
              <p className="text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                CTAを強くしない。
                <br />
                「来てください」ではなく
                「そのままで大丈夫」を置く。
                <br />
                不安を否定しない導線設計。
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

        {/* ===== SECTION: Structure (Story) ===== */}
        <div className="bg-white border-y border-neutral-200">
          <div className="max-w-[1120px] mx-auto px-12 py-32">
            <div className="rin-fade text-center">
              <h2 className="text-[20px] tracking-[0.18em] text-neutral-900 mb-10">
                構造（感情の流れ）
              </h2>
              <p className="text-[13px] leading-[2.3] tracking-[0.08em] text-neutral-600 max-w-[760px] mx-auto">
                予約導線より先に、気持ちの順番を整える。
                <br />
                RINは「理解 → 判断」ではなく、
                「安心 → 理解 → 判断延期 → 行動」を作っている。
              </p>
            </div>

            <div className="mt-20 grid grid-cols-4 gap-10 rin-fade">
              {[
                { t: "安心", d: "不安を否定しない言葉" },
                { t: "理解", d: "基準を共有して可視化" },
                { t: "判断延期", d: "押さない・急がせない" },
                { t: "行動", d: "相談の入口をそっと置く" },
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

        {/* ===== SECTION: Tech ===== */}
        <div className="max-w-[1120px] mx-auto px-12 py-32">
          <div className="grid grid-cols-2 gap-20 items-start">
            <div className="rin-fade">
         <h2 className="text-[18px] tracking-[0.16em] text-neutral-900 mb-10">
  STRUCTURE & STACK
</h2>


 <ul className="text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600 space-y-4">
  <li>・React / Vite</li>
  <li>・Tailwind CSS（v3）</li>
  <li>・体験優先の構造とモーション</li>
</ul>



              <p className="mt-12 text-[12px] leading-[2.3] tracking-[0.10em] text-neutral-500">
                この作品は「見た目」ではなく、「気持ち」を設計したケースです。
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
          SP（md未満）
      ========================== */}
      <div className="md:hidden">
        {/* ===== SP top bar ===== */}
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

        {/* ===== SP hero ===== */}
        <div className="px-6 pt-14 pb-20">
          <p className="text-[11px] tracking-[0.22em] text-neutral-500 mb-4 rin-fade-sp">
            BEAUTY / SALON
          </p>

          <h1 className="text-[22px] leading-[1.7] tracking-[0.10em] text-neutral-900 rin-fade-sp">
            RIN — Eyelash Salon Website
          </h1>

          <p className="mt-10 text-[13px] leading-[2.3] tracking-[0.06em] text-neutral-600 rin-fade-sp">
            「すぐに予約したい人」よりも、
            <br />
            少し迷っている人のために作ったサイト。
            <br />
            押さない。急がせない。静かに読める。
          </p>

          <div className="mt-14 border border-neutral-200 overflow-hidden rin-fade-sp">
            <img
              src={assets.hero}
              alt="RIN website hero"
              className="w-full h-[220px] object-cover"
            />
          </div>
        </div>

        {/* ===== SP Problem/Concept ===== */}
        <div className="bg-[#fafafa] border-y border-neutral-200">
          <div className="px-6 py-20">
            <div className="space-y-14 rin-fade-sp">
              <div>
                <h2 className="text-[16px] tracking-[0.14em] text-neutral-900 mb-7">
                  課題
                </h2>
                <p className="text-[13px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                  美容サイトは「決断を急かす圧」が生まれやすい。
                  <br />
                  でも、まつエクは少しで印象が変わる。
                  <br />
                  不安になるのは自然で、むしろ正しい反応だと思う。
                </p>
              </div>

              <div>
                <h2 className="text-[16px] tracking-[0.14em] text-neutral-900 mb-7">
                  コンセプト
                </h2>
                <p className="text-[13px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                  <span className="text-neutral-900 tracking-[0.08em]">
                    決めない、という選択。
                  </span>
                  <br />
                  押しつけず、急がせず、
                  <br />
                  “読んだ人の呼吸が整う”設計を目指した。
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

        {/* ===== SP UX Decisions ===== */}
        <div className="px-6 py-20">
          <h2 className="text-center text-[16px] tracking-[0.16em] text-neutral-900 mb-12 rin-fade-sp">
            UXで意識したこと
          </h2>

          <div className="space-y-10">
            {[
              {
                t: "MOTION",
                d:
                  "派手にしない。\n目が疲れない。\n気持ちが置いていかれない。",
              },
              {
                t: "INFORMATION",
                d:
                  "全部を一度に出さない。\n必要なところだけ読める。\n“全部読まなくても大丈夫”。",
              },
              {
                t: "PRESSURE",
                d:
                  "CTAを強くしない。\n不安を否定しない。\nそのままで大丈夫を置く。",
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

        {/* ===== SP Structure ===== */}
        <div className="bg-white border-y border-neutral-200">
          <div className="px-6 py-20">
            <h2 className="text-center text-[15px] tracking-[0.18em] text-neutral-900 mb-8 rin-fade-sp">
              構造（感情の流れ）
            </h2>
            <p className="text-center text-[12px] leading-[2.4] tracking-[0.08em] text-neutral-600 rin-fade-sp">
              安心 → 理解 → 判断延期 → 行動
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8">
              {[
                { t: "安心", d: "不安を否定しない言葉" },
                { t: "理解", d: "基準を共有して可視化" },
                { t: "判断延期", d: "押さない・急がせない" },
                { t: "行動", d: "相談の入口をそっと置く" },
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

        {/* ===== SP Tech + link ===== */}
        <div className="px-6 py-20">
          <div className="border border-neutral-200 bg-[#fafafa] p-10 rin-fade-sp">
            <p className="text-[11px] tracking-[0.22em] text-neutral-500 mb-6">
              STACK
            </p>
            <p className="text-[13px] leading-[2.4] tracking-[0.06em] text-neutral-700">
              React / Vite / Tailwind(v3) / GSAP
              <br />
              PC/SP DOM 分離 / 情報の段階提示
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
