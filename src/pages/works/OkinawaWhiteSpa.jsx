// src/pages/works/OkinawaWhiteSpa.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function OkinawaWhiteSpa() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-[#fbfcfd] text-[#0f141a] min-h-screen pb-40">
      {/* =========================================================
          HERO — White × Silence × Private Retreat（PC/SP 分離）
          ※ Header 固定でも文字が隠れないように “pt” を入れる
      ========================================================= */}
      <div className="relative w-full overflow-hidden">
        {/* ===== SP ===== */}
        <div className="block md:hidden relative w-full pt-16">
          {/* 4:5 に寄せつつ、少しだけ“上の余白”を確保してタイトルを守る */}
          <div className="relative w-full aspect-[4/5] overflow-hidden">
            <img
              src="/works1/spa.png"
              alt="Okinawa White Spa"
              className="
                absolute inset-0 w-full h-full
                object-cover object-center
                brightness-[0.98]
                transform-gpu
              "
              loading="eager"
            />

            {/* White film（上は薄く、下は“白い余韻”で締める） */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-b
                from-white/55 via-white/18 to-white/92
              "
            />

            {/* ほんの少しだけ“光の芯” */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 18% 22%, rgba(255,255,255,0.85), transparent 55%)",
              }}
            />

            {/* Titles SP */}
            <div className="absolute bottom-10 left-6 right-6">
              <p className="text-[0.62rem] tracking-[0.34em] text-black/35 mb-3">
                SELECTED WORKS
              </p>

              {/* タイトル：レスポンシブで少し小さめに */}
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
          {/* header分の逃げ：作品詳細はここが大事 */}
          <div className="relative w-full h-[92vh] pt-20 overflow-hidden">
            <img
              src="/works1/spa.png"
              alt="Okinawa White Spa"
              className="
                absolute inset-0 w-full h-full
                object-cover
                brightness-[1.02]
                scale-[1.04]
                transform-gpu
              "
              loading="eager"
            />

            {/* White film（右へ抜ける空気） */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/55 via-white/16 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/92" />

            {/* 光の“静かな芯” */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 22% 18%, rgba(255,255,255,0.9), transparent 58%)",
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
          OUTLINE — “白の余白”を文章でも設計
      ========================================================= */}
      <div className="max-w-4xl mx-auto px-6 md:px-0 mt-24 md:mt-28">
        <div className="flex items-center gap-3 mb-8">
          <p className="text-[0.72rem] tracking-[0.34em] text-black/35">
            PROJECT OUTLINE
          </p>
          <span className="h-px flex-1 bg-gradient-to-r from-black/12 to-transparent" />
        </div>

        <p className="text-[1.06rem] md:text-[1.12rem] leading-[2.3] text-black/80 font-light whitespace-pre-line tracking-[0.01em]">
          {`白 × 静寂 × 上質な余白。
“整う”という体験を、UIの重心・行間・光の階調で設計したプライベートスパLP。

白を「明るさ」ではなく「静けさ」として扱い、
情報量を削ぎ落としても品位が落ちない密度で構成。
穏やかなトーンの中に、線・余白・視線誘導の“緊張感”を微量に混ぜて、
上質さが持続する画面温度を作っています。`}
        </p>

        <div className="mt-12 text-black/45 text-[0.85rem] tracking-[0.18em] leading-relaxed">
          <p>Tech — React / Vite / Tailwind / Minimal Motion</p>
        </div>
      </div>

      {/* =========================================================
          VISUALS — “展示”としての余白（1〜3枚想定）
          ※ 追加画像があるならここに足すだけでOK
      ========================================================= */}
      <div className="max-w-6xl mx-auto px-6 md:px-0 mt-20 md:mt-24 space-y-16 md:space-y-24">
        {/* Visual 1 */}
        <figure className="relative overflow-hidden rounded-[18px] border border-black/10 bg-white">
          <img
            src="/works1/spa1.jpg"
            alt="Okinawa White Spa visual 1"
            className="w-full object-cover brightness-[1.02]"
            loading="lazy"
          />
          {/* 透明の“白い膜”を少し */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/10 via-transparent to-white/25" />
        </figure>

        {/* Visual 2（差分がある場合は差し替え） */}
        <figure className="relative overflow-hidden rounded-[18px] border border-black/10 bg-white">
          <img
            src="/works1/spa.jpg"
            alt="Okinawa White Spa visual 2"
            className="w-full object-cover brightness-[1.04]"
            loading="lazy"
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/20 via-transparent to-white/10" />
        </figure>
      </div>

      {/* =========================================================
          CTA — 静かに“上質”だけ残す
      ========================================================= */}
      <div className="text-center mt-24 md:mt-32 px-6">
        <a
          href="https://okinawa-white-spa.vercel.app"
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
