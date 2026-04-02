import React from "react";

export default function OriginRoom() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#060708] text-white">
      {/* ======================================================
          BACKGROUND
      ====================================================== */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.045), rgba(6,7,8,1) 74%)",
        }}
      />

      {/* fine noise */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.035] mix-blend-soft-light"
        style={{
          backgroundImage: "url('/textures/grain-soft.png')",
          backgroundSize: "cover",
        }}
      />

      {/* soft diagonal veil */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.045] mix-blend-screen"
        style={{
          background:
            "linear-gradient(135deg, rgba(160,180,255,0.08), rgba(0,0,0,0) 42%)",
        }}
      />

      {/* center slit */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 opacity-[0.14] mix-blend-screen"
        style={{
          background:
            "linear-gradient(180deg, rgba(210,220,255,0.28), rgba(0,0,0,0) 82%)",
        }}
      />

      {/* ======================================================
          HERO
      ====================================================== */}
      <div className="relative z-10 mx-auto max-w-[980px] px-8 pt-[220px] pb-[180px]">
        <p className="aq-fade mb-7 text-[11px] tracking-[0.30em] text-white/38">
          HUMAN STRUCTURE / INSIGHT / SILENCE
        </p>

        <h1 className="aq-fade mb-10 font-serif text-[42px] leading-[1.28] tracking-[0.12em] text-white/92 md:text-[48px]">
          ORIGIN ROOM
        </h1>

        <div className="aq-fade relative max-w-[680px]">
          <div className="absolute inset-0 bg-[#cfd8ff] opacity-[0.06] blur-[24px]" />

          <div className="relative border border-white/10 bg-white/[0.045] p-8 backdrop-blur-[1.4px] shadow-[inset_0_0_22px_rgba(200,210,255,0.05)] md:p-10">
            <p className="text-[15px] leading-[2.05] text-white/72">
              ここは、才能や表現の奥にある
              <br />
              「見えない構造」を静かに読み解く部屋。
              <br />
              人の感性、思考、行動の背後にある法則を、
              <br />
              光と影のように並べながら見つめていく。
            </p>
          </div>
        </div>
      </div>

      {/* ======================================================
          CORE PHILOSOPHY
      ====================================================== */}
      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-[980px] px-8 py-[150px]">
          <p className="aq-fade mb-4 text-[11px] tracking-[0.26em] text-white/34">
            CORE PHILOSOPHY
          </p>

          <h2 className="aq-fade mb-5 text-[24px] tracking-[0.14em] text-white/90">
            核心思想
          </h2>

          <div className="aq-fade mb-14 h-[1px] w-[72px] bg-white/18" />

          <div className="grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <p className="aq-fade max-w-[680px] text-[15px] leading-[2.25] text-white/62">
              ORIGIN は、優れた表現や才能をただ並べる場所ではなく、
              <br />
              その奥で働いている「共通する構造」を掘り出す試みです。
              <br />
              <br />
              光は、見えている意識。
              <br />
              影は、まだ言葉になっていない感覚や無意識。
              <br />
              この二つを並べて見ることで、
              <span className="text-white/82">人の洞察がどう生まれるか</span>
              をたどっていきます。
              <br />
              <br />
              世界の見え方は、何を見るかだけでなく、
              <br />
              何を見落としているかでも変わっていく。
            </p>

            <div className="aq-fade border border-white/10 bg-white/[0.035] p-7 backdrop-blur-[1.2px]">
              <p className="mb-4 text-[11px] tracking-[0.22em] text-white/35">
                KEYWORDS
              </p>

              <ul className="space-y-4 text-[14px] leading-[1.95] text-white/64">
                <li>
                  <span className="mr-3 text-white/32">01</span>
                  意識と無意識
                </li>
                <li>
                  <span className="mr-3 text-white/32">02</span>
                  感性と構造
                </li>
                <li>
                  <span className="mr-3 text-white/32">03</span>
                  見えるものと見えないもの
                </li>
                <li>
                  <span className="mr-3 text-white/32">04</span>
                  洞察が生まれる配置
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================
          LIGHT & SHADOW
      ====================================================== */}
      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-[980px] px-8 py-[160px]">
          <p className="aq-fade mb-4 text-[11px] tracking-[0.26em] text-white/34">
            LIGHT & SHADOW
          </p>

          <h2 className="aq-fade mb-5 text-[24px] tracking-[0.14em] text-white/90">
            光と影の展示
          </h2>

          <div className="aq-fade mb-16 h-[1px] w-[72px] bg-white/18" />

          <div className="aq-fade grid gap-8 md:grid-cols-2">
            <div className="border border-white/10 bg-white/[0.04] p-8 backdrop-blur-[1.2px] shadow-[inset_0_0_20px_rgba(255,255,255,0.04)]">
              <p className="mb-5 text-[11px] tracking-[0.24em] text-white/35">
                LIGHT
              </p>
              <p className="text-[14px] leading-[2.15] text-white/74">
                光は、意識して見ているもの。
                <br />
                言葉にできる判断や、焦点の合った視点。
                <br />
                何を選び、何を見ようとしているかが現れる領域。
              </p>
            </div>

            <div className="border border-white/10 bg-white/[0.04] p-8 backdrop-blur-[1.2px] shadow-[inset_0_0_20px_rgba(255,255,255,0.04)]">
              <p className="mb-5 text-[11px] tracking-[0.24em] text-white/35">
                SHADOW
              </p>
              <p className="text-[14px] leading-[2.15] text-white/74">
                影は、まだ気づいていない流れや癖。
                <br />
                無意識の偏りや、言葉になる前の感覚。
                <br />
                本質の手前で揺れているものが潜む領域。
              </p>
            </div>
          </div>

          <div className="aq-fade mt-10 border border-white/10 bg-white/[0.03] p-9 backdrop-blur-[1.4px] md:p-10">
            <p className="text-[14px] leading-[2.3] text-white/72">
              ORIGIN では、この二つがどこで重なり、
              <br />
              どこでズレるのかを静かに見ていきます。
              <br />
              表現、思考、感性の奥にある
              <br />
              「構造の呼吸」を、そのまま展示するための部屋です。
            </p>
          </div>
        </div>
      </div>

      {/* ======================================================
          EXIT
      ====================================================== */}
      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-[860px] px-8 py-[200px] text-center">
          <p className="aq-fade mx-auto mb-14 max-w-[560px] text-[14px] leading-[2.5] text-white/54">
            光を見るだけでは、構造は見えない。
            <br />
            影を見るだけでも、本質には届かない。
            <br />
            <br />
            そのあいだにあるものを、
            <br />
            静かに見つめるための部屋。
            <br />
            <br />— ORIGIN ROOM
          </p>

          <div className="aq-fade mb-10">
            <a
              href="https://origin-gray.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-white/14 bg-white/[0.035] px-6 py-3 text-[12px] tracking-[0.18em] text-white/76 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
            >
              VISIT ORIGIN
              <span className="text-white/36">↗</span>
            </a>
          </div>

          <div>
            <a
              href="/works"
              className="aq-fade inline-block text-[12px] tracking-[0.20em] text-white/56 transition-colors hover:text-white/88"
            >
              ← WORKS へ戻る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}