// src/pages/entry/BlackPapillonEntry.jsx
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const HERO_IMG_PC = "/works1/BlackPapillonRoom2.png";
const HERO_IMG_SP = "/works1/BlackPapillonRoomsp.png"; // ←置き場所に合わせて変える
const ROOM_PATH = "/works/BlackPapillonRoom";
const LIVE_URL = "https://black-papillon.vercel.app/";
const LOGO_SVG = "/BLACKPAPILLON.svg";

/* ================================
   Copy (PC/SPで完全共有)
================================ */
const COPY = {
  overview: {
    h1: "沖縄・那覇のバー／シーシャバー／タトゥースタジオ向け ホームページ制作（Webサイト制作）。",
    p1: "夜の店は“雰囲気”で選ばれるのに、サイトで「予約」「料金の目安」「場所」が探しづらいだけで取りこぼします。",
    p2: "世界観は崩さず、必要な情報を“使う順番”に並べ替えて、スマホで開いた瞬間に予約まで一本道にする。",
    p3: "このページは、夜業態（バー／ラウンジ／シーシャ／タトゥー）の店舗サイトを「迷わせずに決まる形」にするための入口です。",
    cta: "本サイトを見る",
  },

  target: {
    h2: "こういう業態のホームページ（Webサイト）制作を想定しています",
    list: [
      "那覇・沖縄のバー / ラウンジ / ナイトバー（予約導線が弱い）",
      "シーシャ / シーシャバー（メニュー・料金・ルールが散らばっている）",
      "タトゥースタジオ（不安が残って問い合わせまで行かない）",
      "夜営業のサロン・スタジオ（“雰囲気”はあるのに決め手が弱い）",
    ],
    note:
      "検索では「沖縄 バー ホームページ制作」「那覇 シーシャ Web制作」「タトゥースタジオ ホームページ」など、“業態名 × 沖縄（那覇） × HP/サイト制作” で探されやすい領域です。ここに対して、依頼側が知りたい情報を“順番”で出すことが重要になります。",
  },

  problem: {
    h2: "雰囲気はあるのに、予約まで届かない原因",
    list: [
      "予約の入口が散っている（SNS／地図／フォームがバラバラ）",
      "料金の目安がなくて、聞く前に止まる",
      "場所・営業時間が一発で出ない",
      "初めての不安が残ったまま（ルール／流れ／注意点）",
    ],
    note1:
      "夜業態は「初めての不安」が強いぶん、迷う要素が1つあるだけで離脱します。",
    note2:
      "サイトは“雰囲気”だけでなく、予約に必要な判断材料が最短で揃うかまで含めて評価されます。",
  },

  approach: {
    h2: "迷わせないために、やることは3つ",
    items: [
      [
        "予約の入口を一本化する",
        "CTAの位置と言葉を固定。どこを見ていても「次に押す場所」が迷子にならないようにする。",
      ],
      [
        "料金・場所・ルールを先に出す",
        "雰囲気は壊さず、判断材料だけは“探させない順番”に置く。",
      ],
      [
        "暗い写真でも沈まない見せ方にする",
        "写真の並びと文字量で、暗さを“品”に変える（チープにしない）。",
      ],
    ],
    note1: "派手に作るより、迷わせない。",
    note2: "夜の空気を保ったまま「予約できる状態」にするのが、この設計です。",
  },

  case: {
    h2: "実例：BLACK PAPILLON（世界観を壊さず、予約導線を一本化する）",
    p1: "ロゴや写真の空気はそのままに、予約・料金・アクセスが迷子にならない構造で組んでいます。",
    p2: "“見たい”を作ってから、必要な情報に自然に辿り着く流れを体験できます。",
  },

  faq: {
    h2: "よくある質問（夜の店のWeb制作）",
    list: [
      [
        "沖縄（那覇）の店舗でも依頼できますか？",
        "はい。沖縄・那覇を含めて対応しています。",
      ],
      [
        "写真が暗い/少ないのですが大丈夫ですか？",
        "大丈夫です。写真の順番と文字量、見せ方で成立させます。",
      ],
      [
        "予約の入口はどこに置くのが正解ですか？",
        "“探させない位置”に固定します。ページ内で迷わせません。",
      ],
      [
        "何を用意すれば相談できますか？",
        "SNSや既存URL（なくてもOK）、営業時間、場所（地図）、料金の目安が分かれば進められます。写真は後からでも大丈夫です。",
      ],
      [
        "予約はLINEとフォーム、どちらがいいですか？",
        "業態と運用で最適が変わります。現状の導線を見て、入口が増えすぎない形に一本化します。",
      ],
      [
        "バー/シーシャ/タトゥー以外でも相談できますか？",
        "夜の業態であれば相談可能です。まずは内容を見て判断します。",
      ],
    ],
  },
};

export default function BlackPapillonEntry() {
  const heroRef = useRef(null);
  const logoRef = useRef(null);
  const [logoSvg, setLogoSvg] = useState("");
  const [logoReady, setLogoReady] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    if (reduce) {
      el.classList.add("isOn");
      return;
    }
    const raf = requestAnimationFrame(() => el.classList.add("isOn"));
    return () => cancelAnimationFrame(raf);
  }, []);

  // SVGをインライン化（文字単位でアニメできるように）
  useEffect(() => {
    let alive = true;

    fetch(LOGO_SVG)
      .then((r) => r.text())
      .then((t) => {
        if (!alive) return;
        setLogoReady(false);
        setLogoSvg(t);
      })
      .catch(() => {});

    return () => {
      alive = false;
    };
  }, []);

  // 1文字ずつ“下から出る”ためのターゲット付与（SVG構造に合わせて自動判定）
  useEffect(() => {
    const wrap = logoRef.current;
    if (!wrap) return;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    if (reduce) {
      setLogoReady(true);
      return;
    }

    const svg = wrap.querySelector("svg");
    if (!svg) return;

    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");

    const isSkippable = (el) => {
      const tag = (el.tagName || "").toLowerCase();
      return (
        tag === "defs" ||
        tag === "title" ||
        tag === "desc" ||
        tag === "metadata" ||
        tag === "style"
      );
    };

    const topLevel = Array.from(svg.children).filter((el) => !isSkippable(el));
    let targets = topLevel.filter(
      (el) => (el.tagName || "").toLowerCase() === "g"
    );

    if (targets.length < 2) {
      targets = Array.from(svg.querySelectorAll("path")).filter(
        (p) =>
          !p.closest("defs") && !p.closest("mask") && !p.closest("clipPath")
      );
    }

    if (targets.length === 0) targets = topLevel;

    wrap.querySelectorAll("[data-gd-letter]").forEach((n) => {
      n.removeAttribute("data-gd-letter");
      n.style.removeProperty("--d");
    });

    const STEP = 38; // ms
    targets.forEach((node, i) => {
      node.setAttribute("data-gd-letter", "");
      node.style.setProperty("--d", `${i * STEP}ms`);
    });

    requestAnimationFrame(() => setLogoReady(true));
  }, [logoSvg]);

  return (
    <main className="min-h-screen bg-[#f6f2ea] text-[#171614]">
      {/* =========================
          HERO：画像 + SVG だけ（他は置かない）
      ========================= */}
      <header
        ref={heroRef}
        className="bpHero relative isolate overflow-hidden"
        style={{ contain: "layout paint" }}
      >
        {/* bg image（画像はCSSでPC/SP切替する） */}
        <div className="bpBg absolute inset-0" aria-hidden="true" />

        {/* veil */}
        <div
          className="bpVeil absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,12,.62) 0%, rgba(10,10,12,.92) 100%)",
          }}
        />

        {/* center SVG */}
        <div className="bpCenter relative z-10 min-h-[100svh] flex items-center justify-center px-6">
          <div
            ref={logoRef}
            role="img"
            aria-label="BLACK PAPILLON"
            className={`bpLogo block w-[min(92vw,1040px)] select-none ${
              logoReady ? "isReady" : ""
            }`}
            dangerouslySetInnerHTML={{ __html: logoSvg }}
          />
        </div>

        {/* scoped CSS（Hero内だけ。干渉しない） */}
        <style>{`
          /* =========================
             BG: PC/SPで画像切替（まずは「全体が必ず見える」モード）
             - containで切らない（確認用）
             - 画像だけSPで縦に差し替え
             ここから後で cover / pos / scale を動かす
          ========================= */
          .bpHero{
            --bpBgImg: url("${HERO_IMG_PC}");
            --bpBgSize: contain;
            --bpBgPos: center center;
            --bpBgScale: 1;
          }
          @media (max-width: 767px){
            .bpHero{
              --bpBgImg: url("${HERO_IMG_SP}");
            }
          }
          .bpHero .bpBg{
            background-image: var(--bpBgImg);
            background-size: var(--bpBgSize);
            background-position: var(--bpBgPos);
            background-repeat: no-repeat;
            background-color: rgba(10,10,12,.98);
            transform: scale(var(--bpBgScale));
            transform-origin: 50% 50%;
            will-change: transform;
          }

          /* =========================
             Logo reveal
          ========================= */
          .bpHero .bpLogo{
            opacity: 0;
            transform: none;
            filter: none;
            transition: opacity 240ms cubic-bezier(0.22, 1, 0.36, 1);
          }
          .bpHero.isOn .bpLogo.isReady{
            opacity: 1;
          }
          .bpHero .bpLogo svg{
            display: block;
            width: 100%;
            height: auto;
          }

          /* ===== Letter reveal（1文字ずつ下から） ===== */
          .bpHero .bpLogo [data-gd-letter]{
            opacity: 0;
            transform: translate3d(0, 18px, 0);
            filter: blur(0.32px);
            transform-box: fill-box;
            transform-origin: 50% 65%;
            will-change: opacity, transform, filter;
          }
          .bpHero.isOn .bpLogo [data-gd-letter]{
            animation: bpLetterIn 880ms cubic-bezier(0.16, 1, 0.24, 1) both;
            animation-delay: var(--d, 0ms);
          }
          @keyframes bpLetterIn{
            0%{
              opacity: 0;
              transform: translate3d(0, 22px, 0);
              filter: blur(0.34px);
            }
            62%{
              opacity: 1;
              filter: blur(0.12px);
            }
            100%{
              opacity: 1;
              transform: translate3d(0, 0, 0);
              filter: blur(0);
            }
          }

          /* Reduced motion */
          @media (prefers-reduced-motion: reduce){
            .bpHero .bpLogo{
              opacity: 1 !important;
              transition: none !important;
            }
            .bpHero .bpLogo [data-gd-letter]{
              opacity: 1 !important;
              transform: none !important;
              filter: none !important;
              animation: none !important;
            }
          }
        `}</style>
      </header>

      {/* =========================
          PC版（md以上）：2カラム紙面
      ========================= */}
      <div className="hidden md:block">
        {/* OVERVIEW */}
        <section className="aq-fade max-w-[1120px] mx-auto px-6 sm:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-3">
              <p className="text-[12px] tracking-[0.22em] text-black/45">OVERVIEW</p>
            </div>

            <div className="col-span-9">
              <h1 className="text-[26px] tracking-[0.03em] text-[#171614]">
                {COPY.overview.h1}
              </h1>

              <p className="mt-5 text-[16px] leading-[2.0] text-black/72">
                {COPY.overview.p1}
                <br />
                {COPY.overview.p2}
                <br />
                {COPY.overview.p3}
              </p>

              <div className="mt-9">
                <a
                  className="inline-flex items-center justify-center h-[46px] px-7 rounded-[8px] bg-[#171614] text-white text-[14px] tracking-[0.02em] hover:bg-black/90 transition"
                  href={LIVE_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {COPY.overview.cta}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TARGET */}
        <section className="aq-fade max-w-[1120px] mx-auto px-6 sm:px-8 pb-16 sm:pb-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-3">
              <p className="text-[12px] tracking-[0.22em] text-black/45">TARGET</p>
            </div>

            <div className="col-span-9">
              <h2 className="text-[20px] tracking-[0.03em] text-[#171614]">
                {COPY.target.h2}
              </h2>

              <div className="mt-6 border-t border-black/10">
                {COPY.target.list.map((t, i) => (
                  <div
                    key={t}
                    className="grid grid-cols-[56px_1fr] gap-4 py-4 border-b border-black/10"
                  >
                    <span className="text-[12px] tracking-[0.18em] text-black/45">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[16px] leading-[2.0] text-black/70">{t}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-[14px] leading-[2.05] text-black/62">
                {COPY.target.note}
              </p>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="aq-fade max-w-[1120px] mx-auto px-6 sm:px-8 pb-16 sm:pb-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-3">
              <p className="text-[12px] tracking-[0.22em] text-black/45">PROBLEM</p>
            </div>

            <div className="col-span-9">
              <h2 className="text-[20px] tracking-[0.03em] text-[#171614]">
                {COPY.problem.h2}
              </h2>

              <div className="mt-6 border-t border-black/10">
                {COPY.problem.list.map((t, i) => (
                  <div
                    key={t}
                    className="grid grid-cols-[56px_1fr] gap-4 py-4 border-b border-black/10"
                  >
                    <span className="text-[12px] tracking-[0.18em] text-black/45">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[16px] leading-[2.0] text-black/70">{t}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-[14px] leading-[2.05] text-black/62">
                {COPY.problem.note1}
                <br />
                {COPY.problem.note2}
              </p>
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="aq-fade max-w-[1120px] mx-auto px-6 sm:px-8 pb-16 sm:pb-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-3">
              <p className="text-[12px] tracking-[0.22em] text-black/45">APPROACH</p>
            </div>

            <div className="col-span-9">
              <h2 className="text-[20px] tracking-[0.03em] text-[#171614]">
                {COPY.approach.h2}
              </h2>

              <div className="mt-6 border-t border-black/10">
                {COPY.approach.items.map(([title, desc], i) => (
                  <div key={title} className="py-4 border-b border-black/10">
                    <p className="text-[12px] tracking-[0.18em] text-black/45">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-[16px] tracking-[0.02em] text-black/92">
                      {title}
                    </p>
                    <p className="mt-2 text-[15px] leading-[2.0] text-black/62">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-[14px] leading-[2.05] text-black/62">
                {COPY.approach.note1}
                <br />
                {COPY.approach.note2}
              </p>
            </div>
          </div>
        </section>

        {/* CASE */}
        <section className="aq-fade max-w-[1120px] mx-auto px-6 sm:px-8 pb-16 sm:pb-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-3">
              <p className="text-[12px] tracking-[0.22em] text-black/45">CASE</p>
            </div>

            <div className="col-span-9">
              <h2 className="text-[20px] tracking-[0.03em] text-[#171614]">
                {COPY.case.h2}
              </h2>

              <p className="mt-4 text-[16px] leading-[2.0] text-black/70">
                {COPY.case.p1}
                <br />
                {COPY.case.p2}
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="aq-fade max-w-[1120px] mx-auto px-6 sm:px-8 pb-20 sm:pb-24">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-3">
              <p className="text-[12px] tracking-[0.22em] text-black/45">FAQ</p>
            </div>

            <div className="col-span-9">
              <h2 className="text-[20px] tracking-[0.03em] text-[#171614]">
                {COPY.faq.h2}
              </h2>

              <div className="mt-6 border-t border-black/10">
                {COPY.faq.list.map(([q, a]) => (
                  <div key={q} className="py-4 border-b border-black/10">
                    <p className="text-[15px] tracking-[0.02em] text-black/92">{q}</p>
                    <p className="mt-2 text-[15px] leading-[2.0] text-black/62">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* =========================
          SP版（md未満）：1カラム＋文字大きめ
      ========================= */}
      <div className="md:hidden">
        {/* OVERVIEW */}
        <section className="aq-fade max-w-[1120px] mx-auto px-6 py-14">
          <p className="text-[12px] tracking-[0.22em] text-black/45">OVERVIEW</p>

          <h1 className="mt-4 text-[24px] leading-[1.35] tracking-[0.02em] text-[#171614]">
            {COPY.overview.h1}
          </h1>

          <p className="mt-5 text-[16px] leading-[2.05] text-black/72">
            {COPY.overview.p1}
            <br />
            {COPY.overview.p2}
            <br />
            {COPY.overview.p3}
          </p>

          <div className="mt-9">
            <a
              className="inline-flex items-center justify-center w-full h-[48px] px-6 rounded-[10px] bg-[#171614] text-white text-[15px] tracking-[0.02em] hover:bg-black/90 transition"
              href={LIVE_URL}
              target="_blank"
              rel="noreferrer noopener"
            >
              {COPY.overview.cta}
            </a>
          </div>
        </section>

        {/* TARGET */}
        <section className="aq-fade max-w-[1120px] mx-auto px-6 pb-14">
          <p className="text-[12px] tracking-[0.22em] text-black/45">TARGET</p>

          <h2 className="mt-4 text-[20px] leading-[1.45] tracking-[0.02em] text-[#171614]">
            {COPY.target.h2}
          </h2>

          <div className="mt-6 border-t border-black/10">
            {COPY.target.list.map((t, i) => (
              <div
                key={t}
                className="grid grid-cols-[46px_1fr] gap-3 py-4 border-b border-black/10"
              >
                <span className="text-[12px] tracking-[0.18em] text-black/45">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[16px] leading-[2.0] text-black/74">{t}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[15px] leading-[2.05] text-black/62">
            {COPY.target.note}
          </p>
        </section>

        {/* PROBLEM */}
        <section className="aq-fade max-w-[1120px] mx-auto px-6 pb-14">
          <p className="text-[12px] tracking-[0.22em] text-black/45">PROBLEM</p>

          <h2 className="mt-4 text-[20px] leading-[1.45] tracking-[0.02em] text-[#171614]">
            {COPY.problem.h2}
          </h2>

          <div className="mt-6 border-t border-black/10">
            {COPY.problem.list.map((t, i) => (
              <div
                key={t}
                className="grid grid-cols-[46px_1fr] gap-3 py-4 border-b border-black/10"
              >
                <span className="text-[12px] tracking-[0.18em] text-black/45">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[16px] leading-[2.0] text-black/74">{t}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[15px] leading-[2.05] text-black/62">
            {COPY.problem.note1}
            <br />
            {COPY.problem.note2}
          </p>
        </section>

        {/* APPROACH */}
        <section className="aq-fade max-w-[1120px] mx-auto px-6 pb-14">
          <p className="text-[12px] tracking-[0.22em] text-black/45">APPROACH</p>

          <h2 className="mt-4 text-[20px] leading-[1.45] tracking-[0.02em] text-[#171614]">
            {COPY.approach.h2}
          </h2>

          <div className="mt-6 border-t border-black/10">
            {COPY.approach.items.map(([title, desc], i) => (
              <div key={title} className="py-4 border-b border-black/10">
                <p className="text-[12px] tracking-[0.18em] text-black/45">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-[16px] tracking-[0.02em] text-black/92">
                  {title}
                </p>
                <p className="mt-2 text-[15px] leading-[2.05] text-black/62">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[15px] leading-[2.05] text-black/62">
            {COPY.approach.note1}
            <br />
            {COPY.approach.note2}
          </p>
        </section>

        {/* CASE */}
        <section className="aq-fade max-w-[1120px] mx-auto px-6 pb-14">
          <p className="text-[12px] tracking-[0.22em] text-black/45">CASE</p>

          <h2 className="mt-4 text-[20px] leading-[1.45] tracking-[0.02em] text-[#171614]">
            {COPY.case.h2}
          </h2>

          <p className="mt-5 text-[16px] leading-[2.05] text-black/72">
            {COPY.case.p1}
            <br />
            {COPY.case.p2}
          </p>
        </section>

        {/* FAQ */}
        <section className="aq-fade max-w-[1120px] mx-auto px-6 pb-20">
          <p className="text-[12px] tracking-[0.22em] text-black/45">FAQ</p>

          <h2 className="mt-4 text-[20px] leading-[1.45] tracking-[0.02em] text-[#171614]">
            {COPY.faq.h2}
          </h2>

          <div className="mt-6 border-t border-black/10">
            {COPY.faq.list.map(([q, a]) => (
              <div key={q} className="py-4 border-b border-black/10">
                <p className="text-[15px] tracking-[0.02em] text-black/92">{q}</p>
                <p className="mt-2 text-[15px] leading-[2.05] text-black/62">{a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* =========================
          BOTTOM：ここだけボタン2つ（相談 / WORKS）
      ========================= */}
      <footer className="aq-fade border-t border-black/10">
        <div className="max-w-[1120px] mx-auto px-6 sm:px-8 py-16 sm:py-18 text-center">
          <p className="text-[12px] tracking-[0.18em] text-black/45">
            SUPPORT / ALL VIEW WORKS
          </p>

          <br />
          <div className="mt-5 flex flex-wrap justify-center items-center gap-y-3 gap-x-8">
            <Link
              className="inline-flex items-center justify-center h-[46px] px-6 rounded-[8px] bg-[#171614] text-white text-[14px] tracking-[0.02em] hover:bg-black/90 transition"
              to="/contact"
            >
              相談する
            </Link>

            <Link
              className="inline-flex items-center justify-center h-[46px] px-6 rounded-[8px] border border-black/20 bg-white/40 text-[#171614] text-[14px] tracking-[0.06em] hover:bg-white/55 transition"
              to="/works"
            >
              ALL VIEW WORKS
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}