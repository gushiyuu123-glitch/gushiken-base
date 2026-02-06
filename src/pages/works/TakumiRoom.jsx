// src/pages/works/TakumiRoom.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function TakumiRoom() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <main
      className="
        relative min-h-screen text-white overflow-hidden
        bg-cover bg-center lg:bg-left
      "
      style={{
        backgroundImage: "url('/works1/philosophy-bg.png')",
      }}
    >
      {/* ==================================================
          黒膜（構造の“静けさ”を残す明度）
      ================================================== */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0
          bg-[rgba(0,0,0,0.26)]
          backdrop-blur-[1px]
        "
      />

      {/* ==================================================
          光膜（建築写真の白膜を再現）
      ================================================== */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0
          bg-gradient-to-b
          from-[rgba(255,255,255,0.07)]
          via-[rgba(255,255,255,0.045)]
          to-transparent
          pointer-events-none
        "
      />

      {/* ==================================================
          横の光スリット（建築の“差し込み光”）
      ================================================== */}
      <div
        aria-hidden
        className="
          absolute inset-0 z-0
          bg-gradient-to-r
          from-transparent
          via-[rgba(255,255,255,0.075)]
          to-transparent
          mix-blend-screen
        "
      />

      {/* ==================================================
          CONTENT（中央寄せ・建築的レイアウト）
      ================================================== */}
      <section
        className="
          relative z-20 
          px-6 py-20
          lg:px-0
          lg:py-28
          mx-auto
          w-full
          lg:max-w-[880px]
          text-center
        "
      >
        {/* =============================
            TITLE
        ============================== */}
        <h1
          className="
            font-serif
            text-[2.55rem] md:text-[3.35rem]
            tracking-[0.22em]
            text-white/95
            mb-10
            select-none
          "
        >
          TAKUMI — ROOM
        </h1>

        {/* =============================
            LEAD（“建築 × 静寂”の翻訳強化）
        ============================== */}
        <p
          className="
            text-white/72
            text-[1.05rem] md:text-[1.18rem]
            leading-[1.95] md:leading-[2.05]
            mx-auto
            max-w-[650px]
            mb-20
          "
        >
          建築を形づくるのは、壁でも柱でもなく──  <br></br>
          光の入り方、影の落ち方、素材が秘めた“骨格の美しさ”。  <br></br>
          TAKUMI — ROOM は、その構造が静かに息づく瞬間だけを  <br></br>
          Web空間に丁寧に落とし込んだ前室です。
        </p>

        {/* =============================
            VISUAL（建築の骨格 × 光の通り道）
        ============================== */}
        <div className="relative mb-20 flex justify-center">
          <img
            src="/works1/philosophy-bg2.png"
            alt="TAKUMI architectural texture"
            className="
              w-full max-w-[900px]
              rounded-[18px]
              opacity-[0.96]
              shadow-[0_12px_40px_rgba(0,0,0,0.32)]
            "
          />

          {/* 中央スリット（建築光を再現） */}
          <div
            aria-hidden
            className="
              absolute inset-0
              bg-gradient-to-r
              from-transparent
              via-white/4
              to-transparent
              mix-blend-screen
            "
          />
        </div>

        {/* =============================
            SUBTEXT（静けさの翻訳度を上げた文章）
        ============================== */}
        <p
          className="
            text-white/62
            text-[0.92rem]
            tracking-[0.20em]
            leading-[2.15]
            mx-auto
            max-w-[650px]
            mb-16
          "
        >
          緊張の中にある、ほどける瞬間。  
          光が落ち着き、影が呼吸をはじめるとき。  <br></br>
          建築が本来持つ“静かな構造美”だけを抽出した空間です。
        </p>

        {/* =============================
            CTA（建築 × 製作技法の文脈強化）
        ============================== */}
        <div className="text-center">
          <a
            href="https://takumi-ochre.vercel.app/"
            target="_blank"
            className="
              inline-block
              text-white/85
              text-[0.78rem]
              tracking-[0.32em]
              border-b border-white/25
              pb-[6px]
              hover:text-white hover:border-white/45
              transition-all duration-400
            "
          >
            TAKUMI（デモサイトを見る）
          </a>
        </div>

        {/* Back */}
        <div className="mb-14 mt-10 text-center">
          <Link
            to="/works"
            className="
              text-white/55 text-[0.75rem]
              tracking-[0.28em]
              hover:text-white/80
              transition
            "
          >
            BACK TO WORKS
          </Link>
        </div>
      </section>
    </main>
  );
}
