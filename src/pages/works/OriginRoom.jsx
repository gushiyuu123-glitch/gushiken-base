// src/pages/OriginRoom.jsx
import React, { useEffect, useRef } from "react";

const originKeys = [
  {
    id: "01",
    label: "感性",
    en: "SENSE",
    text: "言葉や理屈になる前に、空気・質感・違和感を受け取る入口。",
  },
  {
    id: "02",
    label: "直感",
    en: "INTUITION",
    text: "まだ説明しきれないズレや気配を、判断の手前で掴む入口。",
  },
  {
    id: "03",
    label: "革命",
    en: "REVOLUTION",
    text: "既存の延長に留まらず、進みながら選択肢を更新する入口。",
  },
  {
    id: "04",
    label: "心理",
    en: "PSYCHOLOGY",
    text: "人の反応や思考の流れを、感情ではなく構造として読む入口。",
  },
  {
    id: "05",
    label: "構造",
    en: "STRUCTURE",
    text: "要素がどう関係し、全体がどう成立しているかを見る入口。",
  },
  {
    id: "06",
    label: "本質",
    en: "ESSENCE",
    text: "原因を辿り、最後に残る核を確かめる入口。",
  },
  {
    id: "07",
    label: "因果",
    en: "CAUSALITY",
    text: "結果の手前にある原因・地形・順番を読み、起こるべき反応を整える入口。",
  },
];

export default function OriginRoom() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const targets = root.querySelectorAll(".origin-pre-reveal");

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <main
      ref={rootRef}
      className="relative w-full overflow-x-hidden bg-[#050607] text-white"
    >
      <style>{`
        .origin-pre-reveal {
          opacity: 0;
          transform: translateY(24px);
          filter: blur(0.18px);
          transition:
            opacity 0.72s cubic-bezier(0.22, 0.1, 0.25, 1),
            transform 0.72s cubic-bezier(0.22, 0.1, 0.25, 1),
            filter 0.72s cubic-bezier(0.22, 0.1, 0.25, 1);
          will-change: opacity, transform, filter;
        }

        .origin-pre-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }

        .origin-pre-card {
          position: relative;
          overflow: hidden;
        }

        .origin-pre-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(220, 228, 255, 0.08),
              transparent 58%
            );
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }

        .origin-pre-card:hover::before {
          opacity: 1;
        }

        .origin-pre-card::after {
          content: "";
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 0;
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255,255,255,0.18),
            transparent
          );
          opacity: 0.4;
        }

        .origin-pre-grain {
          background-image:
            radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 3px 3px;
        }

        @media (prefers-reduced-motion: reduce) {
          .origin-pre-reveal {
            transition: none !important;
          }
        }
      `}</style>

      {/* BACKGROUND */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 18%, rgba(210,220,255,0.07), rgba(5,6,7,1) 72%)",
        }}
      />

      <div
        aria-hidden
        className="origin-pre-grain pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-screen"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.055] mix-blend-screen"
        style={{
          background:
            "linear-gradient(135deg, rgba(160,180,255,0.12), rgba(0,0,0,0) 44%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 opacity-[0.12] mix-blend-screen"
        style={{
          background:
            "linear-gradient(180deg, rgba(230,235,255,0.34), rgba(255,255,255,0.04) 38%, rgba(0,0,0,0) 86%)",
        }}
      />

      {/* HERO */}
      <section className="relative z-10 min-h-[100svh] px-7 pt-[190px] pb-[150px] md:px-8 md:pt-[220px] md:pb-[180px]">
        <div className="mx-auto max-w-[980px]">
          <p className="origin-pre-reveal mb-7 text-[10px] tracking-[0.34em] text-white/36 md:text-[11px]">
            BEFORE ENTERING ORIGIN
          </p>

          <h1 className="origin-pre-reveal mb-10 font-serif text-[40px] leading-[1.18] tracking-[0.13em] text-white/92 md:text-[56px]">
            ORIGIN
            <br />
            ANTEROOM
          </h1>

          <div className="origin-pre-reveal relative max-w-[720px]">
            <div className="absolute inset-0 bg-[#d9e0ff] opacity-[0.055] blur-[28px]" />

            <div className="relative border border-white/10 bg-white/[0.04] p-7 shadow-[inset_0_0_24px_rgba(210,220,255,0.05)] backdrop-blur-[1.2px] md:p-10">
              <p className="text-[14px] leading-[2.15] text-white/72 md:text-[15px] md:leading-[2.2]">
                ここは、ORIGIN に入る前の前室。
                <br />
                人物を紹介する場所ではなく、
                <br />
                それぞれの部屋を、視点として受け取るための場所。
              </p>
            </div>
          </div>

          <p className="origin-pre-reveal mt-12 max-w-[620px] text-[13px] leading-[2.2] text-white/45 md:text-[14px]">
            名前ではなく、入口として読む。
            <br />
            言葉ではなく、焦点を合わせる。
            <br />
            ここから先の部屋は、そのために並んでいる。
          </p>
        </div>
      </section>

      {/* PREMISE */}
      <section className="relative z-10 border-t border-white/10">
        <div className="mx-auto grid max-w-[980px] gap-14 px-7 py-[140px] md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-[160px]">
          <div>
            <p className="origin-pre-reveal mb-4 text-[10px] tracking-[0.3em] text-white/34 md:text-[11px]">
              PREMISE
            </p>

            <h2 className="origin-pre-reveal text-[23px] leading-[1.7] tracking-[0.14em] text-white/90 md:text-[26px]">
              名前ではなく、
              <br />
              視点として読む。
            </h2>

            <div className="origin-pre-reveal mt-8 h-[1px] w-[74px] bg-white/18" />
          </div>

          <div className="origin-pre-reveal max-w-[680px] text-[14px] leading-[2.28] text-white/62 md:text-[15px]">
            <p>
              ここに並ぶ人物は、答えではない。
              <br />
              それぞれが、世界をどう受け取り、
              <br />
              どう判断し、どう形にしたのか。
            </p>

            <p className="mt-8 text-white/76">
              ORIGIN では、その視点だけを取り出し、
              <br />
              ひとつの部屋として置いている。
            </p>
          </div>
        </div>
      </section>

      {/* NAME / VIEWPOINT */}
      <section className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-[980px] px-7 py-[145px] md:px-8 md:py-[165px]">
          <p className="origin-pre-reveal mb-4 text-[10px] tracking-[0.3em] text-white/34 md:text-[11px]">
            NAME / VIEWPOINT
          </p>

          <h2 className="origin-pre-reveal mb-5 text-[23px] leading-[1.7] tracking-[0.14em] text-white/90 md:text-[25px]">
            名前は、入口になる。
          </h2>

          <div className="origin-pre-reveal mb-16 h-[1px] w-[74px] bg-white/18" />

          <div className="grid gap-8 md:grid-cols-2">
            <div className="origin-pre-reveal border border-white/10 bg-white/[0.035] p-7 shadow-[inset_0_0_20px_rgba(255,255,255,0.035)] backdrop-blur-[1.2px] md:p-8">
              <p className="mb-5 text-[10px] tracking-[0.26em] text-white/35 md:text-[11px]">
                NAME
              </p>

              <p className="text-[14px] leading-[2.15] text-white/72">
                名前は、情報を整理するための目印。
                <br />
                経歴や評価を並べるためではなく、
                <br />
                その人が持っていた角度へ入るために置いている。
              </p>
            </div>

            <div className="origin-pre-reveal border border-white/10 bg-white/[0.035] p-7 shadow-[inset_0_0_20px_rgba(255,255,255,0.035)] backdrop-blur-[1.2px] md:p-8">
              <p className="mb-5 text-[10px] tracking-[0.26em] text-white/35 md:text-[11px]">
                VIEWPOINT
              </p>

              <p className="text-[14px] leading-[2.15] text-white/72">
                見る角度が変わると、
                <br />
                同じものでも意味の置かれ方が変わる。
                <br />
                その違いを、部屋ごとに体験していく。
              </p>
            </div>
          </div>

          <div className="origin-pre-reveal mt-10 border border-white/10 bg-white/[0.025] p-8 backdrop-blur-[1.2px] md:p-10">
            <p className="text-[14px] leading-[2.35] text-white/66">
              この前室では、知識を増やすより先に、
              <br />
              どの角度から見るかを整える。
              <br />
              その準備ができると、次の部屋の見え方が少し変わる。
            </p>
          </div>
        </div>
      </section>

      {/* ENTRANCES */}
      <section className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-[1080px] px-7 py-[150px] md:px-8 md:py-[175px]">
          <div className="mx-auto mb-16 max-w-[760px] text-center">
            <p className="origin-pre-reveal mb-5 text-[10px] tracking-[0.32em] text-white/34 md:text-[11px]">
              ENTRANCES
            </p>

            <h2 className="origin-pre-reveal text-[23px] leading-[1.8] tracking-[0.14em] text-white/90 md:text-[26px]">
              ここに並ぶのは、
              <br />
              人物の説明ではない。
            </h2>

            <p className="origin-pre-reveal mt-8 text-[14px] leading-[2.25] text-white/54">
              名前をきっかけに、視点へ入る。
              <br />
              それぞれの部屋は、考え方を体験するための小さな入口。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {originKeys.map((item) => (
              <div
                key={item.id}
                className="origin-pre-reveal origin-pre-card border border-white/10 bg-white/[0.032] p-7 backdrop-blur-[1.2px] transition duration-500 hover:border-white/16 hover:bg-white/[0.045] md:min-h-[240px]"
              >
                <div className="relative z-10">
                  <div className="mb-8 flex items-center justify-between">
                    <p className="text-[11px] tracking-[0.22em] text-white/30">
                      {item.id}
                    </p>

                    <p className="text-[10px] tracking-[0.24em] text-white/24">
                      {item.en}
                    </p>
                  </div>

                  <h3 className="mb-5 text-[23px] font-light tracking-[0.24em] text-white/88">
                    {item.label}
                  </h3>

                  <p className="text-[13px] leading-[2.05] text-white/56">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="origin-pre-reveal mx-auto mt-14 max-w-[720px] text-center text-[13px] leading-[2.25] text-white/42">
            感性で受け取り、直感で違和感を掴む。
            <br />
            革命で前提を動かし、心理で反応を読む。
            <br />
            構造で世界を組み、本質で核へ潜り、因果で結果の手前を整える。
          </p>
        </div>
      </section>

      {/* EXIT TO ORIGIN */}
      <section className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-[860px] px-7 py-[190px] text-center md:px-8 md:py-[215px]">
          <p className="origin-pre-reveal mx-auto mb-14 max-w-[560px] text-[14px] leading-[2.55] text-white/54">
            準備ができたら、
            <br />
            ORIGIN へ進む。
            <br />
            <br />
            部屋ごとに、世界の受け取り方を
            <br />
            少しずつ切り替えていく。
          </p>

          <div className="origin-pre-reveal mb-10">
            <a
              href="https://origin-gray.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-white/14 bg-white/[0.035] px-7 py-3.5 text-[12px] tracking-[0.2em] text-white/76 transition-all duration-300 hover:border-white/24 hover:bg-white/[0.065] hover:text-white"
            >
              ENTER ORIGIN
              <span className="text-white/36">↗</span>
            </a>
          </div>

          <a
            href="/works"
            className="origin-pre-reveal inline-block text-[12px] tracking-[0.2em] text-white/48 transition-colors duration-300 hover:text-white/82"
          >
            ← WORKS へ戻る
          </a>
        </div>
      </section>
    </main>
  );
}