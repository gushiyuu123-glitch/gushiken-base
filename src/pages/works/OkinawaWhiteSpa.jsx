// src/pages/works/OkinawaWhiteSpa.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function OkinawaWhiteSpa() {
  useEffect(() => window.scrollTo(0, 0), []);

  const siteUrl = "https://okinawa-white-spa.vercel.app/";

  const assets = {
    hero: "/works1/spa.png",
    v1: "/works1/spa1.jpg",
    v2: "/works1/spa.jpg",
  };

  const titleJP = "Okinawa White Spa";
  const titleEN = "Private Spa Experience Design";
  const tagline = "WHITE × SILENCE × PRIVATE RETREAT";

  const outline = `白を「明るさ」ではなく、視線を落ち着かせるための“静けさ”として扱った、
プライベートスパのコンセプトLPです。

装飾で高級感を作るのではなく、
余白・文字の距離・UIの重心・光の階調だけで
「整う」という感覚が成立する温度を狙いました。

情報量を抑えても実在感が薄れないよう、
線の緊張感はわずかに残し、
ホテルの公式サイトのように“説明しない安心”を優先しています。`;

  return (
    <section className="min-h-screen bg-[#fbfcfd] text-[#0f141a] pb-40">
      {/* ================= JSON-LD ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "@id":
              "https://gushikendesign.com/works/okinawa-white-spa#creativework",
            name: `${titleJP}｜${titleEN}`,
            description:
              "白を『明るさ』ではなく『静けさ』として扱い、余白・行間・光の階調だけで『整う体験』を設計したプライベートスパLP。情報量を抑えながら、実在感と上質さが持続する画面温度を構築。",
            creator: {
              "@type": "Person",
              name: "裕人 具志堅",
              alternateName: "Yuto Gushiken",
              url: "https://gushikendesign.com/",
            },
            publisher: {
              "@type": "Organization",
              name: "GUSHIKEN DESIGN",
              url: "https://gushikendesign.com/",
            },
            inLanguage: "ja",
            url: "https://gushikendesign.com/works/okinawa-white-spa",
            isBasedOn: {
              "@type": "WebSite",
              name: "Okinawa White Spa Official Site",
              url: siteUrl,
            },
          }),
        }}
      />

      {/* =========================================================
          HERO — Luxury Hotel Tone (quiet, precise, airy)
      ========================================================= */}
      <div className="relative w-full overflow-hidden">
        {/* ====== SP ====== */}
        <div className="block md:hidden">
          <header className="sticky top-0 z-50 bg-white/78 backdrop-blur border-b border-black/10">
            <div className="px-5 h-[64px] flex items-center justify-between">
              <Link
                to="/works"
                className="text-[11px] tracking-[0.18em] text-black/55 hover:text-black/75"
              >
                ← WORKS
              </Link>
              <a
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-[0.18em] text-black/60 border-b border-black/20 pb-1 hover:opacity-75"
              >
                VISIT →
              </a>
            </div>
          </header>

          <div className="relative w-full pt-10">
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <img
                src={assets.hero}
                alt={titleJP}
                className="absolute inset-0 w-full h-full object-cover brightness-[1.0]"
                loading="eager"
              />

              {/* film（弱め） */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/22 via-white/8 to-white/66" />

              {/* highlight core */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 18% 18%, rgba(255,255,255,0.85), transparent 60%)",
                }}
              />

              {/* Titles */}
              <div className="absolute bottom-10 left-6 right-6">
                <p className="text-[10px] tracking-[0.34em] text-black/35 mb-3">
                  SELECTED WORKS
                </p>

                <h1 className="text-[1.6rem] tracking-[0.12em] font-extralight leading-[1.25] text-black/85">
                  {titleJP}
                </h1>

                <p className="mt-3 text-[0.78rem] tracking-[0.26em] text-black/45">
                  {tagline}
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-black/18" />
                  <p className="text-[10px] tracking-[0.28em] text-black/38">
                    {titleEN}
                  </p>
                </div>
              </div>
            </div>

            {/* micro note */}
            <p className="px-6 mt-10 text-[12px] leading-[2.2] tracking-[0.06em] text-black/55">
              “静けさが、贅沢になる。”
              <br />
              説明で納得させるのではなく、空気で伝える設計へ。
            </p>
          </div>
        </div>

        {/* ====== PC ====== */}
        <div className="hidden md:block">
          {/* top bar */}
          <header className="sticky top-0 z-50 bg-white/72 backdrop-blur border-b border-black/10">
            <div className="max-w-[1180px] mx-auto px-12 h-[72px] flex items-center justify-between">
              <div className="flex items-center gap-10">
                <Link
                  to="/works"
                  className="text-[12px] tracking-[0.18em] text-black/55 hover:text-black/75 transition-colors"
                >
                  ← WORKS
                </Link>
                <p className="text-[12px] tracking-[0.22em] text-black/45">
                  CASE STUDY
                </p>
              </div>

              <a
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-[12px]
                  tracking-[0.20em]
                  text-black/65
                  border-b border-black/20
                  pb-1
                  hover:opacity-70
                  transition-opacity
                "
              >
                VISIT SITE →
              </a>
            </div>
          </header>

          {/* hero layout */}
          <div className="max-w-[1240px] mx-auto px-12 pt-16 pb-24">
            <div className="grid grid-cols-[0.95fr_1.05fr] gap-16 items-end">
              {/* left text */}
              <div>
                <p className="text-[12px] tracking-[0.34em] text-black/35 mb-6">
                  PRIVATE SPA / CONCEPT LP
                </p>

                <h1 className="text-[3.05rem] leading-[1.18] tracking-[0.08em] font-extralight text-black/82">
                  {titleJP}
                </h1>

                <p className="mt-6 text-[0.95rem] tracking-[0.28em] text-black/45">
                  {tagline}
                </p>

                <div className="mt-10 w-16 h-px bg-gradient-to-r from-black/18 to-transparent" />

                <p className="mt-10 text-[15px] leading-[2.35] tracking-[0.06em] text-black/58 max-w-[560px]">
                  “静けさが、贅沢になる。”
                  <br />
                  余白と光の階調だけで、気持ちが整う温度を設計した。
                  <br />
                  ホテルの公式サイトのように、説明を削り、信頼だけを残す。
                </p>

                {/* meta */}
                <div className="mt-14 flex gap-14">
                  <div>
                    <p className="text-[11px] tracking-[0.22em] text-black/35 mb-2">
                      ROLE
                    </p>
                    <p className="text-[12px] tracking-[0.08em] text-black/60">
                      UX / UI / Visual Tone
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[0.22em] text-black/35 mb-2">
                      INTENT
                    </p>
                    <p className="text-[12px] tracking-[0.08em] text-black/60">
                      Calm / Premium / Low-Pressure
                    </p>
                  </div>
                </div>
              </div>

              {/* right image */}
              <div>
                <div className="relative overflow-hidden rounded-[18px] border border-black/10 bg-white">
                  <img
                    src={assets.hero}
                    alt={`${titleJP} hero`}
                    className="w-full h-[520px] object-cover brightness-[1.01] scale-[1.02]"
                    loading="eager"
                  />

                  {/* ultra thin glass */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/10 via-transparent to-white/20" />

                  {/* quiet highlight */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 22% 18%, rgba(255,255,255,0.55), transparent 62%)",
                    }}
                  />
                </div>

                <p className="mt-5 text-[11px] tracking-[0.18em] text-black/35">
                  “Luxury without explanation.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          OUTLINE — Hotel-like editorial block
      ========================================================= */}
      <div className="max-w-[860px] mx-auto px-6 md:px-0 mt-20 md:mt-24">
        <div className="flex items-center gap-3 mb-8">
          <p className="text-[11px] tracking-[0.34em] text-black/35">
            PROJECT OUTLINE
          </p>
          <span className="h-px flex-1 bg-gradient-to-r from-black/12 to-transparent" />
        </div>

        <p className="text-[1.02rem] md:text-[1.08rem] leading-[2.45] text-black/72 font-light whitespace-pre-line tracking-[0.02em]">
          {outline}
        </p>

        <div className="mt-12 flex flex-wrap gap-8 text-[12px] tracking-[0.20em] text-black/40">
          <span className="border border-black/10 rounded-full px-4 py-2 bg-white/55 backdrop-blur-[6px]">
            WHITE AS SILENCE
          </span>
          <span className="border border-black/10 rounded-full px-4 py-2 bg-white/55 backdrop-blur-[6px]">
            LOW-PRESSURE UX
          </span>
          <span className="border border-black/10 rounded-full px-4 py-2 bg-white/55 backdrop-blur-[6px]">
            HOTEL-LIKE RHYTHM
          </span>
        </div>
      </div>

      {/* =========================================================
          GALLERY — Exhibition tone (2 visuals only)
      ========================================================= */}
      <div className="max-w-[980px] mx-auto px-6 md:px-0 mt-20 md:mt-24">
        <div className="flex items-center gap-3 mb-8">
          <p className="text-[11px] tracking-[0.34em] text-black/35">
            GALLERY
          </p>
          <span className="h-px flex-1 bg-gradient-to-r from-black/12 to-transparent" />
        </div>

        <p className="text-[13px] leading-[2.25] tracking-[0.06em] text-black/52 font-light">
          点数は増やさない。空間の“白さ”と“間”が伝わる構図だけを残す。
        </p>

        <div className="mt-12 space-y-14 md:space-y-18">
          {/* visual 1 */}
          <figure className="relative overflow-hidden rounded-[18px] border border-black/10 bg-white">
            <img
              src={assets.v1}
              alt="Okinawa White Spa visual 1"
              className="w-full object-cover brightness-[1.02]"
              loading="lazy"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/10 via-transparent to-white/18" />
          </figure>

          {/* visual 2 */}
          <figure className="relative overflow-hidden rounded-[18px] border border-black/10 bg-white">
            <img
              src={assets.v2}
              alt="Okinawa White Spa visual 2"
              className="w-full object-cover brightness-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/14 via-transparent to-white/10" />
          </figure>
        </div>
      </div>

      {/* =========================================================
          CTA — Hotel-ish quiet finish
      ========================================================= */}
      <div className="max-w-[860px] mx-auto px-6 md:px-0 mt-24 md:mt-28 text-center">
        <p className="text-[13px] leading-[2.35] tracking-[0.08em] text-black/50 font-light">
          “予約を促す”のではなく、
          <br />
          “安心して置いておける場所”を作る。
          <br />
          高級感は、説明ではなく、体験のリズムで成立する。
        </p>

        <div className="mt-12 flex flex-col items-center gap-10">
          <a
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              h-[50px] px-12
              text-[11px]
              tracking-[0.34em]
              border border-black/18
              text-black/70
              hover:text-black/90
              hover:border-black/35
              transition-all duration-500
              bg-white/55
              backdrop-blur-[8px]
              rounded-[12px]
            "
          >
            VISIT OFFICIAL SITE →
          </a>

          <Link
            to="/works"
            className="inline-block text-black/45 hover:text-black tracking-[0.28em] text-[11px]"
          >
            ← BACK TO WORKS LIST
          </Link>
        </div>
      </div>
    </section>
  );
}
