// src/pages/works/WhiteDarkCacao.jsx
import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

/**
 * WHITE × DARK CACAO — Case Study Page
 * ✅ RIN/Clinic系と「まったく別物」にするために：
 * - “編集誌 / ルックブック” っぽい組み立て（大きい余白＋強いタイポ）
 * - 斜めやガラスではなく、紙面の「段落」「見出し」「余白」で勝つ
 * - 黒は使うが“重さ”より「インク」寄り。白は“紙”寄り。
 *
 * 画像は 4枚だけで構成（SP用の別画像は使わない）
 */

export default function WhiteDarkCacao() {
  useEffect(() => window.scrollTo(0, 0), []);

  // ===== 画像（4つだけ）=====
  // ※あなたの実ファイルに合わせてパスを揃えてね
  const assets = useMemo(
    () => ({
      hero: "/works1/white-dark-hero.png",
      shot1: "/works1/white-dark-cacao.webp",
      shot2: "/works1/white-dark-22.png",
      shot3: "/works1/white-dark-3.png",
    }),
    []
  );

  const liveUrl = "https://white-dark-cacao.vercel.app/";

  return (
    <section className="min-h-screen bg-[#fbfaf8] text-[#1b1b1b]">
      {/* ======================================
          TOP BAR（PC/SP 共通）
      ====================================== */}
      <header className="sticky top-0 z-50 bg-[#fbfaf8]/82 backdrop-blur border-b border-black/10">
        <div className="mx-auto max-w-[1240px] px-6 md:px-12 h-[68px] flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              to="/works"
              className="text-[11px] md:text-[12px] tracking-[0.18em] text-black/55 hover:text-black/75 transition-colors"
            >
              ← WORKS
            </Link>

            <p className="hidden md:block text-[11px] tracking-[0.22em] text-black/45">
              CASE STUDY / EC BRAND
            </p>
          </div>

          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-[11px] md:text-[12px]
              tracking-[0.22em]
              text-black/70
              border-b border-black/25
              pb-1
              hover:opacity-70
              transition-opacity
            "
          >
            OPEN SITE →
          </a>
        </div>
      </header>

      {/* ======================================
          HERO（紙面＋二元性）
      ====================================== */}
      <div className="mx-auto max-w-[1240px] px-6 md:px-12 pt-14 md:pt-20 pb-14 md:pb-20">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
          {/* Left: Title / Statement */}
          <div className="md:col-span-5">
            <p className="text-[11px] tracking-[0.28em] text-black/45 mb-5">
              WHITE × DARK CACAO
            </p>

            <h1 className="text-[26px] md:text-[34px] leading-[1.45] tracking-[0.08em] text-black/90">
              静けさで選べる
              <br />
              ショコラECの設計
            </h1>

            <p className="mt-8 text-[13px] md:text-[15px] leading-[2.2] tracking-[0.05em] text-black/65">
              “買わせる” ではなく、
              <br />
              <span className="text-black/90">落ち着いて選べる時間</span>を設計する。
              <br />
              余白・写真・文字の距離だけで、
              <br />
              上質さが自然に伝わる構成へ。
            </p>

            {/* Meta */}
            <div className="mt-10 md:mt-12 flex flex-wrap gap-8">
              <Meta label="ROLE" value="Brand / UI / Motion" />
              <Meta label="STACK" value="React / Vite / Tailwind(v3) / GSAP" />
            </div>

            {/* Small rule */}
            <div className="mt-12 h-px w-[140px] bg-black/15" />
          </div>

          {/* Right: Hero Image + “binary” caption */}
          <div className="md:col-span-7">
            <div className="relative overflow-hidden border border-black/10 bg-white">
              {/* “二元性”を写真の上に載せず、外枠と余白で表現 */}
              <img
                src={assets.hero}
                alt="WHITE × DARK CACAO hero"
                className="w-full h-[260px] md:h-[520px] object-cover"
              />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="border border-black/10 bg-white px-4 py-3">
                <p className="text-[10px] tracking-[0.28em] text-black/45 mb-1">
                  WHITE
                </p>
                <p className="text-[12px] leading-[1.9] text-black/70 tracking-[0.04em]">
                  軽い甘さ / 空気感 / 浮く余白
                </p>
              </div>
              <div className="border border-black/10 bg-white px-4 py-3">
                <p className="text-[10px] tracking-[0.28em] text-black/45 mb-1">
                  DARK
                </p>
                <p className="text-[12px] leading-[1.9] text-black/70 tracking-[0.04em]">
                  深い苦味 / 密度 / 沈む静けさ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================
          SECTION: Concept（雑誌の見開き風）
      ====================================== */}
      <div className="border-y border-black/10 bg-[#f6f3ee]">
        <div className="mx-auto max-w-[1240px] px-6 md:px-12 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-4">
              <p className="text-[11px] tracking-[0.28em] text-black/45 mb-4">
                CONCEPT
              </p>
              <h2 className="text-[18px] md:text-[22px] tracking-[0.10em] text-black/90 leading-[1.7]">
                説明しない設計
                <br />
                伝わる設計
              </h2>

              <div className="mt-10 h-px w-[120px] bg-black/15" />
            </div>

            <div className="md:col-span-8">
              <div className="space-y-6 text-[13px] md:text-[14px] leading-[2.35] tracking-[0.06em] text-black/65">
                <p>
                  ショコラを選ぶ時間は、本来もっと静かで、余裕があるものだと考えています。
                  だからUIは、派手な訴求より先に、目と呼吸が落ち着くリズムを優先しました。
                </p>
                <p>
                  情報は“全部見せる”のではなく、必要な場所でだけ自然に立ち上がる。
                  余白は空きではなく、味の余韻を置く場所として扱っています。
                </p>
                <p className="text-black/90">
                  「急がせないこと」そのものが、信頼のデザインになる。
                </p>
              </div>
            </div>
          </div>

          {/* image 1 */}
          <div className="mt-12 md:mt-16 border border-black/10 bg-white overflow-hidden">
            <img
              src={assets.shot1}
              alt="Concept / layout screen"
              className="w-full h-[240px] md:h-[520px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* ======================================
          SECTION: UX Decisions（カードじゃなく“段落”で魅せる）
      ====================================== */}
      <div className="mx-auto max-w-[1240px] px-6 md:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
          <div className="md:col-span-4">
            <p className="text-[11px] tracking-[0.28em] text-black/45 mb-4">
              UX DECISIONS
            </p>
            <h2 className="text-[18px] md:text-[22px] tracking-[0.10em] text-black/90 leading-[1.7]">
              触れ方の設計
              <br />
              選び方の設計
            </h2>
          </div>

          <div className="md:col-span-8">
            <div className="border border-black/10 bg-white">
              <div className="grid md:grid-cols-3">
                <Decision
                  no="01"
                  title="圧を消す"
                  body="CTAを前に出しすぎない。選択を急がせるUIを排除して、“見ていられる”状態を保つ。"
                />
                <Decision
                  no="02"
                  title="情報を段階化"
                  body="最初に結論を押しつけない。必要な人が、必要な深さまで降りられる構造。"
                />
                <Decision
                  no="03"
                  title="動きを最小化"
                  body="モーションは“演出”ではなく、視線の呼吸。動く量より、遅さと間で整える。"
                  isLast
                />
              </div>
            </div>

            <div className="mt-10 md:mt-12 grid md:grid-cols-2 gap-8">
              <div className="border border-black/10 bg-white overflow-hidden">
                <img
                  src={assets.shot2}
                  alt="Product / information"
                  className="w-full h-[220px] md:h-[380px] object-cover"
                />
              </div>
              <div className="border border-black/10 bg-white overflow-hidden">
                <img
                  src={assets.shot3}
                  alt="Checkout / flow"
                  className="w-full h-[220px] md:h-[380px] object-cover"
                />
              </div>
            </div>

            <p className="mt-10 text-[12px] leading-[2.2] tracking-[0.10em] text-black/45">
              NOTE: “高級感”は派手さではなく、余白・距離・速度で成立する。
            </p>
          </div>
        </div>
      </div>

      {/* ======================================
          SECTION: Structure（“設計図”っぽく）
      ====================================== */}
      <div className="border-y border-black/10 bg-[#fbfaf8]">
        <div className="mx-auto max-w-[1240px] px-6 md:px-12 py-16 md:py-22">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-4">
              <p className="text-[11px] tracking-[0.28em] text-black/45 mb-4">
                STRUCTURE
              </p>
              <h2 className="text-[18px] md:text-[22px] tracking-[0.10em] text-black/90 leading-[1.7]">
                感情の順番を
                <br />
                先に整える
              </h2>
            </div>

            <div className="md:col-span-8">
              <div className="border border-black/10 bg-white">
                <div className="grid md:grid-cols-4">
                  <FlowStep t="静けさ" d="目が疲れない入口" />
                  <FlowStep t="理解" d="必要な情報だけ届く" />
                  <FlowStep t="選択" d="決めさせない設計" />
                  <FlowStep t="購入" d="手続きも静かに終える" last />
                </div>
              </div>

              <div className="mt-10 border border-black/10 bg-[#f6f3ee] px-8 md:px-12 py-10 md:py-12">
                <p className="text-[12px] tracking-[0.28em] text-black/45 mb-5">
                  DESIGN STATEMENT
                </p>
                <p className="text-[13px] md:text-[14px] leading-[2.35] tracking-[0.08em] text-black/70">
                  “買う” は行動だけど、
                  <br />
                  “選ぶ” は気持ち。
                  <br />
                  このサイトは、選ぶ時間そのものを価値として扱うために、
                  <span className="text-black/90">余白・距離・速度</span>を最小単位で調整している。
                </p>
              </div>

              <div className="mt-12 flex items-center justify-between gap-6">
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center
                    text-[12px]
                    tracking-[0.22em]
                    text-black/75
                    border-b border-black/25
                    pb-1
                    hover:opacity-70
                    transition-opacity
                  "
                >
                  {liveUrl}
                </a>

                <Link
                  to="/works"
                  className="text-[12px] tracking-[0.18em] text-black/55 hover:text-black/75 transition-colors"
                >
                  ← WORKSへ戻る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom spacing */}
      <div className="h-16 md:h-24" />
    </section>
  );
}

/* =========================
   Parts
========================= */
function Meta({ label, value }) {
  return (
    <div>
      <p className="text-[10px] tracking-[0.28em] text-black/45 mb-2">
        {label}
      </p>
      <p className="text-[12px] tracking-[0.06em] text-black/70">{value}</p>
    </div>
  );
}

function Decision({ no, title, body, isLast }) {
  return (
    <div
      className={`
        px-7 py-8 md:px-8 md:py-10
        ${isLast ? "" : "border-b md:border-b-0 md:border-r border-black/10"}
      `}
    >
      <p className="text-[10px] tracking-[0.30em] text-black/45 mb-4">
        {no}
      </p>
      <p className="text-[14px] tracking-[0.10em] text-black/90 mb-4">
        {title}
      </p>
      <p className="text-[12px] leading-[2.25] tracking-[0.06em] text-black/65">
        {body}
      </p>
    </div>
  );
}

function FlowStep({ t, d, last }) {
  return (
    <div className={`px-7 py-8 md:px-8 md:py-10 ${last ? "" : "border-r border-black/10"}`}>
      <p className="text-[11px] tracking-[0.28em] text-black/45 mb-3">{t}</p>
      <p className="text-[12px] leading-[2.1] tracking-[0.06em] text-black/70">
        {d}
      </p>
    </div>
  );
}
