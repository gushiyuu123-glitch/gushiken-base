// src/pages/works/TakumiRoom.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function TakumiRoom() {
  return (
    <section className="min-h-screen bg-[#070604] text-white px-6 py-20">

      {/* Back */}
      <div className="mb-10">
        <Link
          to="/works"
          className="
            text-white/45 text-[0.75rem]
            tracking-[0.28em]
            hover:text-white/75
            transition-all duration-300
          "
        >
          ← BACK TO WORKS
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-[2.6rem] tracking-[0.22em] font-light mb-6">
        TAKUMI
      </h1>

      {/* Lead */}
      <p className="text-white/45 text-[0.95rem] leading-relaxed max-w-xl">
        構造 × 動線 × 余白。
        <br />
        建築的な“骨格の美しさ”を整理するための部屋です。
        今後、静かに更新される予定です。
      </p>

      {/* 外部URL */}
      <a
        href="https://takumi-ochre.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-block mt-10
          text-white/70 text-[0.75rem]
          tracking-[0.32em]
          hover:text-white
          transition
        "
      >
        ▶ TAKUMI（デモサイトを見る）
      </a>
    </section>
  );
}
