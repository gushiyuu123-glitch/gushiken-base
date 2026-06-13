// src/pages/entry/BlackPapillonEntry.jsx
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const HERO_IMG_PC = "/works1/BlackPapillonRoom2.png";
const HERO_IMG_SP = "/works1/BlackPapillonRoomsp.png"; // ←置き場所に合わせて変える
const ROOM_PATH = "/works/BlackPapillonRoom";
const LIVE_URL = "https://black-papillon.vercel.app/";
const LOGO_SVG = "/BLACKPAPILLON.svg";

const GUSHIKEN_URL = "https://gushikendesign.com";
const PAGE_PATH = "/works/black-papillon";

/* ================================
   Copy (PC/SPで完全共有)
   BLACK PAPILLON = タトゥースタジオ向けに固定
================================ */
const COPY = {
  overview: {
    h1: "タトゥースタジオ向けホームページ制作。仕上がりで選ばれるためのWebサイトへ。",
    p1: "タトゥーは、施術前に不安が残りやすいサービスです。施術スタイル、料金目安、相談方法、治癒後の仕上がりが見えないだけで、問い合わせ前に止まります。",
    p2: "BLACK PAPILLONでは、世界観を壊さずに、初めての人が知りたい情報を“見る順番”に整理しています。",
    p3: "このページは、タトゥースタジオの魅力を伝えながら、相談・予約まで迷わず進めるWebサイト制作の事例です。",
    cta: "本サイトを見る",
  },

  target: {
    h2: "こういうタトゥースタジオのホームページ制作を想定しています",
    list: [
      "Fine line / Black & Grey など、施術スタイルを明確に見せたいスタジオ",
      "Coverup / リワーク相談を受けたいが、説明がSNSだけでは足りないスタジオ",
      "治癒後の仕上がりやアフターケアまで伝えたいスタジオ",
      "世界観はあるのに、料金・相談方法・予約導線が分かりにくいスタジオ",
    ],
    note:
      "タトゥースタジオのWebサイトでは、雰囲気だけでなく、施術スタイル、料金の目安、相談時に必要な情報、注意点、アフターケアまで整理されていることが重要です。",
  },

  problem: {
    h2: "世界観はあるのに、問い合わせまで届かない原因",
    list: [
      "施術スタイルの違いが伝わらない",
      "料金やサイズ感の目安が見えない",
      "治癒後の仕上がりを想像できない",
      "相談時に何を送ればいいか分からない",
      "衛生面・注意点・アフターケアが見つけにくい",
    ],
    note1:
      "タトゥーは、見た目の好みだけでなく、不安を減らせるかどうかで問い合わせ率が変わります。",
    note2:
      "サイトは作品を見せる場所であり、相談前の迷いを減らす場所でもあります。",
  },

  approach: {
    h2: "予約前の不安を減らすために、やることは4つ",
    items: [
      [
        "施術スタイルを先に見せる",
        "Fine line、Black & Grey、Coverupなど、得意な施術スタイルが最初に伝わる構成にする。",
      ],
      [
        "料金目安とサイズ感を出す",
        "すべての料金を細かく出す必要はない。ワンポイント、標準サイズ、大きめ、Coverupなど、相談前の目安を見せる。",
      ],
      [
        "治癒後の仕上がりを伝える",
        "施術直後だけでなく、時間が経った後の印象やアフターケアへの安心感も伝える。",
      ],
      [
        "相談導線を一本化する",
        "Instagram、LINE、フォームなどを増やしすぎず、迷わず相談できる入口に整える。",
      ],
    ],
    note1: "派手に作るより、信じられるように整える。",
    note2:
      "タトゥースタジオの空気を保ったまま、相談前の不安をひとつずつ減らす設計です。",
  },

  case: {
    h2: "実例：BLACK PAPILLON",
    p1: "BLACK PAPILLONは、タトゥースタジオを想定したコンセプトサイトです。",
    p2: "ロゴ、写真、余白、黒の空気感を軸にしながら、施術スタイル・料金目安・相談導線へ自然につながる構成にしています。",
  },

  faq: {
    h2: "よくある質問：タトゥースタジオ向けWeb制作",
    list: [
      [
        "タトゥースタジオのホームページ制作に対応できますか？",
        "はい。施術スタイル、料金目安、予約導線、注意点、アフターケアまで整理したWebサイト制作に対応できます。",
      ],
      [
        "Instagramだけでは足りませんか？",
        "Instagramは作品を見せるには強いですが、料金目安、相談方法、注意点、アフターケアなどを整理して伝えるにはWebサイトがあると補完できます。",
      ],
      [
        "写真が暗めでもサイトとして成立しますか？",
        "成立します。暗い写真は、余白・文字量・背景とのバランスを整えることで、重さではなく世界観として見せられます。",
      ],
      [
        "料金をすべて公開しないといけませんか？",
        "すべてを細かく公開する必要はありません。ただし、ワンポイント、標準サイズ、大きめ、Coverupなど、相談前の目安はある方が不安を減らせます。",
      ],
      [
        "予約導線はLINE、Instagram、フォームのどれがいいですか？",
        "運用方法によって変わります。重要なのは入口を増やしすぎず、ユーザーが迷わない形に一本化することです。",
      ],
      [
        "沖縄以外のタトゥースタジオでも相談できますか？",
        "はい。全国オンラインで対応できます。写真やSNS、現在の導線を確認しながら、必要な範囲を整理できます。",
      ],
    ],
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${GUSHIKEN_URL}${PAGE_PATH}#webpage`,
      url: `${GUSHIKEN_URL}${PAGE_PATH}`,
      name: "タトゥースタジオ向けホームページ制作｜BLACK PAPILLON",
      description:
        "BLACK PAPILLONは、タトゥースタジオ向けのWebサイト制作事例です。施術スタイル、治癒後の仕上がり、料金目安、相談導線、アフターケアを、世界観を崩さずに整理しています。",
      inLanguage: "ja",
      isPartOf: {
        "@id": `${GUSHIKEN_URL}/#website`,
      },
      about: {
        "@id": `${GUSHIKEN_URL}${PAGE_PATH}#service`,
      },
      breadcrumb: {
        "@id": `${GUSHIKEN_URL}${PAGE_PATH}#breadcrumb`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${GUSHIKEN_URL}${PAGE_PATH}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "ホーム",
          item: `${GUSHIKEN_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "制作実績",
          item: `${GUSHIKEN_URL}/works`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "BLACK PAPILLON",
          item: `${GUSHIKEN_URL}${PAGE_PATH}`,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${GUSHIKEN_URL}${PAGE_PATH}#service`,
      name: "タトゥースタジオ向けホームページ制作",
      serviceType: "ホームページ制作・LP制作・Webデザイン",
      provider: {
        "@id": `${GUSHIKEN_URL}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "日本",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "タトゥースタジオ、ボディアート系サロン、施術系ブランド",
      },
      description:
        "タトゥースタジオ向けに、施術スタイル、治癒後の仕上がり、料金目安、相談導線、注意点、アフターケアを整理したWebサイト制作です。",
    },
    {
      "@type": "CreativeWork",
      "@id": `${GUSHIKEN_URL}${PAGE_PATH}#black-papillon`,
      name: "BLACK PAPILLON",
      creator: {
        "@id": `${GUSHIKEN_URL}/#person`,
      },
      url: LIVE_URL,
      genre: "Web Design / Tattoo Studio Website",
      description:
        "BLACK PAPILLONは、タトゥースタジオ向けのコンセプトサイトです。世界観と予約前の不安解消を両立するWebデザイン事例です。",
    },
    {
      "@type": "FAQPage",
      "@id": `${GUSHIKEN_URL}${PAGE_PATH}#faq`,
      mainEntity: COPY.faq.list.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: {
          "@type": "Answer",
          text: a,
        },
      })),
    },
  ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c"),
        }}
      />

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
              <p className="text-[12px] tracking-[0.22em] text-black/45">
                OVERVIEW
              </p>
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
              <p className="text-[12px] tracking-[0.22em] text-black/45">
                TARGET
              </p>
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
                    <p className="text-[16px] leading-[2.0] text-black/70">
                      {t}
                    </p>
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
              <p className="text-[12px] tracking-[0.22em] text-black/45">
                PROBLEM
              </p>
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
                    <p className="text-[16px] leading-[2.0] text-black/70">
                      {t}
                    </p>
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
              <p className="text-[12px] tracking-[0.22em] text-black/45">
                APPROACH
              </p>
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
              <p className="text-[12px] tracking-[0.22em] text-black/45">
                CASE
              </p>
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
              <p className="text-[12px] tracking-[0.22em] text-black/45">
                FAQ
              </p>
            </div>

            <div className="col-span-9">
              <h2 className="text-[20px] tracking-[0.03em] text-[#171614]">
                {COPY.faq.h2}
              </h2>

              <div className="mt-6 border-t border-black/10">
                {COPY.faq.list.map(([q, a]) => (
                  <div key={q} className="py-4 border-b border-black/10">
                    <p className="text-[15px] tracking-[0.02em] text-black/92">
                      {q}
                    </p>
                    <p className="mt-2 text-[15px] leading-[2.0] text-black/62">
                      {a}
                    </p>
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
          <p className="text-[12px] tracking-[0.22em] text-black/45">
            OVERVIEW
          </p>

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
          <p className="text-[12px] tracking-[0.22em] text-black/45">
            APPROACH
          </p>

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
                <p className="text-[15px] tracking-[0.02em] text-black/92">
                  {q}
                </p>
                <p className="mt-2 text-[15px] leading-[2.05] text-black/62">
                  {a}
                </p>
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