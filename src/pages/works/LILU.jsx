import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import usePageFade from "../../hooks/usePageFade";

export default function LILU() {
  useEffect(() => window.scrollTo(0, 0), []);

  const assets = useMemo(
    () => ({
      hero: "/works1/lilu.webp",
      shot1: "/works1/lilu-1.webp",
      shot2: "/works1/lilu-2.webp",
      shot3: "/works1/lilu-3.webp",
      shotSP: "/works1/lilu-sp.png",
    }),
    []
  );

  const liveUrl = "https://lilu-drab.vercel.app/";

  /* ===== Animation ===== */
  usePageFade(".lilu-fade", {
    y: 14,
    blur: true,
    duration: 1.0,
    ease: "power2.out",
    start: "top 85%",
  });

  usePageFade(".lilu-fade-soft", {
    y: 8,
    blur: false,
    duration: 0.9,
    ease: "power2.out",
    start: "top 85%",
  });

  return (
    <section className="min-h-screen bg-[#fffefe] text-slate-800">

      {/* =========================
          PC
      ========================== */}
      <div className="hidden md:block">

        {/* ===== Top bar ===== */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
          <div className="max-w-[1120px] mx-auto px-12 h-[72px] flex items-center justify-between">
            <Link
              to="/works"
              className="text-[12px] tracking-[0.16em] text-neutral-500 hover:text-neutral-700"
            >
              ← WORKS
            </Link>

            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] tracking-[0.18em] text-neutral-700 border-b border-neutral-300 pb-1 hover:opacity-70"
            >
              OPEN SITE →
            </a>
          </div>
        </header>

        {/* ===== HERO ===== */}
        <div className="max-w-[1240px] mx-auto px-12 pt-24 pb-32">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div className="lilu-fade">
              <p className="text-[12px] tracking-[0.22em] text-pink-300 mb-6">
                BEAUTY / NAIL SALON
              </p>

              <h1 className="text-[34px] leading-[1.5] tracking-[0.08em]">
                LILU nail salon
              </h1>

              <p className="mt-10 text-[15px] leading-[2.2] tracking-[0.06em] text-neutral-600 max-w-[520px]">
                20代女性が、<br />
                「可愛い」「安心」「ここ好きかも」と<br />
                直感で感じられることを最優先に設計したネイルサロンサイト。
              </p>

              <div className="mt-14 flex gap-12">
                <div>
                  <p className="text-[11px] tracking-[0.18em] text-neutral-500 mb-2">
                    ROLE
                  </p>
                  <p className="text-[12px]">UI / UX / Visual Design</p>
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.18em] text-neutral-500 mb-2">
                    TARGET
                  </p>
                  <p className="text-[12px]">20s Women</p>
                </div>
              </div>
            </div>

            <div className="lilu-fade-soft border border-neutral-200 overflow-hidden">
              <img
                src={assets.hero}
                alt="LILU nail salon hero"
                className="w-full h-[460px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* ===== Concept ===== */}
        <div className="bg-[#fff7f9] border-y border-pink-100">
          <div className="max-w-[1120px] mx-auto px-12 py-28 grid grid-cols-2 gap-20">
            <div className="lilu-fade">
              <h2 className="text-[20px] tracking-[0.14em] mb-8">
                コンセプト
              </h2>
              <p className="text-[14px] leading-[2.4] text-neutral-600">
                情報を詰め込まず、<br />
                考えさせすぎず、<br />
                スクロールするだけで
                <span className="text-neutral-900">
                  「お店の雰囲気が伝わる」
                </span>
                ことを大切にしました。
              </p>
            </div>

            <div className="lilu-fade">
              <p className="text-[14px] leading-[2.4] text-neutral-600">
                ネイルサロン選びは、<br />
                理屈よりも「感覚」が先に来るもの。
                <br />
                LILUでは
                <span className="text-neutral-900">
                  写真・余白・色・タイポ
                </span>
                だけで安心感をつくる設計を採用しています。
              </p>
            </div>
          </div>
        </div>

        {/* ===== Visual ===== */}
        <div className="max-w-[1120px] mx-auto px-12 py-32">
          <div className="grid grid-cols-3 gap-10">
            {[assets.shot1, assets.shot2, assets.shot3].map((src, i) => (
              <div key={i} className="lilu-fade border border-neutral-200 overflow-hidden">
                <img src={src} alt="LILU visual" className="w-full h-[360px] object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* ===== UX ===== */}
        <div className="bg-white border-t border-neutral-200">
          <div className="max-w-[1120px] mx-auto px-12 py-28">
            <h2 className="text-center text-[20px] tracking-[0.16em] mb-16 lilu-fade">
              UXで意識したこと
            </h2>

            <div className="grid grid-cols-3 gap-12">
              {[
                ["VISUAL", "第一印象で“可愛い”と感じる写真構成"],
                ["PACE", "早く読ませない、ゆったりしたスクロール"],
                ["RELIEF", "予約前に安心できる温度感"],
              ].map(([t, d]) => (
                <div key={t} className="lilu-fade border border-neutral-200 bg-[#fff7f9] p-10">
                  <p className="text-[12px] tracking-[0.20em] mb-4">{t}</p>
                  <p className="text-[14px] leading-[2.3] text-neutral-600">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Footer ===== */}
        <div className="max-w-[1120px] mx-auto px-12 py-24">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[13px] tracking-[0.18em] border-b border-neutral-300 pb-1"
          >
            {liveUrl}
          </a>

          <div className="mt-10">
            <Link to="/works" className="text-[12px] tracking-[0.18em] text-neutral-600">
              ← WORKSへ戻る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
