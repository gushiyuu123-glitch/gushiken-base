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

  const outline = `白をやわらかな清潔感として見せながら、
落ち着いた空気が自然に伝わるようにまとめた、
プライベートスパのコンセプトLPです。

装飾を増やしすぎず、
全体を静かなトーンで整えることで、
“整う”感覚がやさしく残る印象を目指しました。

情報量を抑えながらも、
実在感や上質さが薄れないよう、
安心して見られるページに仕上げています。`;

  return (
    <section className="min-h-screen bg-[#fbfcfd] text-[#0f141a] pb-40">
      {/* JSON-LD */}
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
              "白のやわらかな清潔感と静かな空気を大切にしながら、落ち着いて見られる印象にまとめたプライベートスパのコンセプトLP。上質さと安心感の両方を意識した作品。",
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

      {/* HERO */}
      <div className="relative w-full overflow-hidden">
        {/* SP */}
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

              <div className="absolute inset-0 bg-gradient-to-b from-white/22 via-white/8 to-white/66" />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 18% 18%, rgba(255,255,255,0.85), transparent 60%)",
                }}
              />

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

            <p className="px-6 mt-10 text-[12px] leading-[2.2] tracking-[0.06em] text-black/55">
              “静けさが、贅沢になる。”
              <br />
              やさしく整った空気が、そのまま印象として残るページへ。
            </p>
          </div>
        </div>

        {/* PC */}
        <div className="hidden md:block">
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

          <div className="max-w-[1240px] mx-auto px-12 pt-16 pb-24">
            <div className="grid grid-cols-[0.95fr_1.05fr] gap-16 items-end">
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
                  白のやわらかな清潔感と、落ち着いた空気感を大切にまとめました。
                  <br />
                  説明を増やしすぎず、安心感が自然に残ることを目指しています。
                </p>

                <div className="mt-14 flex gap-14">
                  <div>
                    <p className="text-[11px] tracking-[0.22em] text-black/35 mb-2">
                      ROLE
                    </p>
                    <p className="text-[12px] tracking-[0.08em] text-black/60">
                      Web Design / Front-end
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[0.22em] text-black/35 mb-2">
                      INTENT
                    </p>
                    <p className="text-[12px] tracking-[0.08em] text-black/60">
                      Calm / Premium / Private
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="relative overflow-hidden rounded-[18px] border border-black/10 bg-white">
                  <img
                    src={assets.hero}
                    alt={`${titleJP} hero`}
                    className="w-full h-[520px] object-cover brightness-[1.01] scale-[1.02]"
                    loading="eager"
                  />

                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/10 via-transparent to-white/20" />

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

      {/* OUTLINE */}
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
            WHITE TONE
          </span>
          <span className="border border-black/10 rounded-full px-4 py-2 bg-white/55 backdrop-blur-[6px]">
            QUIET IMPRESSION
          </span>
          <span className="border border-black/10 rounded-full px-4 py-2 bg-white/55 backdrop-blur-[6px]">
            PRIVATE SPA
          </span>
        </div>
      </div>

      {/* GALLERY */}
      <div className="max-w-[980px] mx-auto px-6 md:px-0 mt-20 md:mt-24">
        <div className="flex items-center gap-3 mb-8">
          <p className="text-[11px] tracking-[0.34em] text-black/35">
            GALLERY
          </p>
          <span className="h-px flex-1 bg-gradient-to-r from-black/12 to-transparent" />
        </div>

        <p className="text-[13px] leading-[2.25] tracking-[0.06em] text-black/52 font-light">
          点数を増やしすぎず、白の空気感と落ち着きが伝わるビジュアルだけを残しました。
        </p>

        <div className="mt-12 space-y-14 md:space-y-18">
          <figure className="relative overflow-hidden rounded-[18px] border border-black/10 bg-white">
            <img
              src={assets.v1}
              alt="Okinawa White Spa visual 1"
              className="w-full object-cover brightness-[1.02]"
              loading="lazy"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/10 via-transparent to-white/18" />
          </figure>

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

      {/* CTA */}
      <div className="max-w-[860px] mx-auto px-6 md:px-0 mt-24 md:mt-28 text-center">
        <p className="text-[13px] leading-[2.35] tracking-[0.08em] text-black/50 font-light">
          強く押し出さなくても、
          <br />
          静かな印象はしっかり残る。
          <br />
          やさしく整った空気を、そのまま届けることを大切にしました。
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