// src/pages/works/Koti.jsx
import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

export default function Koti() {
  useEffect(() => window.scrollTo(0, 0), []);

  const assets = useMemo(
    () => ({
      hero: "/works1/koti-hero1.png",
      visual1: "/works1/koti-hero.png",
      visual2: "/works1/koti-visual2.png",
    }),
    []
  );

  const siteUrl = "https://koti-beta.vercel.app/";

  return (
    <section
      className="
        min-h-screen pb-44
        bg-[linear-gradient(180deg,#fbfaf7_0%,#f6f2ea_40%,#ffffff_100%)]
        text-[#141312]
      "
    >
      {/* ================= JSON-LD ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "@id": "https://gushikendesign.com/works/koti#creativework",
            name: "KOTI｜Quiet Living Furniture Concept Site",
            description:
              "北欧の暮らしに着想し、光・余白・木の温度を軸に設計した家具ブランドのコンセプトサイト。家具を売るのではなく、空間の整い方や暮らしの質を先に体験させるUI構成を意識して制作。",
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
            isBasedOn: {
              "@type": "WebSite",
              name: "KOTI Official Concept Site",
              url: siteUrl,
            },
            url: "https://gushikendesign.com/works/koti",
          }),
        }}
      />

      {/* =========================
          HERO
      ========================= */}
      <div className="relative w-full overflow-hidden">
        {/* ===== SP ===== */}
        <div className="relative block md:hidden">
          <div className="relative h-[78vh] min-h-[560px]">
            <img
              src={assets.hero}
              alt="KOTI hero"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,248,244,0.94)_0%,rgba(250,248,244,0.78)_35%,rgba(250,248,244,0.25)_50%,rgba(250,248,244,0.05)_60%)]" />
            <div className="relative z-10 mx-auto h-full max-w-[560px] px-6 pt-36">
              <p className="text-[11px] tracking-[0.38em] text-[#6a5a43]">
                WORKS — QUIET LIVING FURNITURE
              </p>

              <h1 className="mt-5 text-[42px] tracking-[0.06em]">KOTI</h1>

              <p className="mt-4 max-w-[30ch] text-[13px] leading-[2.05] text-[#2b2621]">
                光と余白を、暮らしの中心に。
                <br />
                北欧の住空間で大切にされてきた
                <br />
                「自然光の入り方」「家具の間隔」<br />「木の触感」を
               
                UI と構成に<br />落とし込んだコンセプトサイト。<br />
              </p>

    <div className="mt-12 md:mt-9">

  <a
    href={siteUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-[#141312] px-6 py-3 text-[10px] tracking-[0.24em] text-[#fbfaf7]"
  >
    ENTER THE SITE →
  </a>
</div>

            </div>
          </div>
        </div>

        {/* ===== PC ===== */}
        <div className="relative hidden md:block">
          <div className="relative h-[84vh] min-h-[720px]">
            <img
              src={assets.hero}
              alt="KOTI hero"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,248,244,0.95)_0%,rgba(250,248,244,0.78)_38%,rgba(250,248,244,0.24)_50%,rgba(250,248,244,0.06)_80%)]" />

            <div className="relative z-10 mx-auto h-full max-w-[1180px] px-10 flex items-center">
              <div className="w-[56%]">
                <p className="text-[12px] tracking-[0.42em] text-[#6a5a43]">
                  WORKS — QUIET LIVING FURNITURE
                </p>

                <h1 className="mt-6 text-[74px] tracking-[0.10em]">KOTI</h1>

                <p className="mt-6 max-w-[48ch] text-[14px] leading-[2.1] text-[#2b2621]">
                  光と余白を、暮らしの中心に。
                  <br />
                  北欧の住空間で大切にされてきた
                  <br />
                  「光の入り方」「家具同士の距離感」「素材の温度」。
                  <br />
                  それらを“売るため”ではなく、
                  <br />
                  “整えるため”に再構成した家具ブランドの
                  <br />
                  コンセプトサイトです。
                </p>

                <div className="mt-10 flex gap-4">
                  <a
                    href={siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#141312] px-8 py-3.5 text-[12px] tracking-[0.26em] text-[#fbfaf7]"
                  >
                    ENTER THE SITE →
                  </a>
                  <a
                    href="#detail"
                    className="rounded-full border border-[#d9cfbe] bg-white/70 px-8 py-3.5 text-[12px] tracking-[0.26em]"
                  >
                    WORK DETAIL
                  </a>
                </div>
              </div>
              <div className="w-[44%]" />
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          DETAIL
      ========================= */}
      <div id="detail" className="mx-auto max-w-[1180px] px-6 md:px-10 pt-28">
        <h2 className="text-[32px] md:text-[40px] tracking-[0.06em]">
          静けさを、家具というかたちに。
        </h2>

        <p className="mt-6 max-w-[60ch] text-[14px] leading-[2.1] text-[#2b2621]/90">
          北欧の住空間では、家具は主役ではなく環境の一部として置かれます。
          <br />
          KOTI ではその考え方を踏襲し、プロダクトを前に出すのではなく、
          光の入り方、家具同士の距離、空間の抜け感を
          UI 上で先に体験できる構成を意識しました。
          <br />
          見た目の美しさよりも、
          「この空間で過ごす時間」を想像できるか。
          そこを最優先に設計しています。
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 bg-white/70 border border-[#e7dece] rounded-3xl p-10">
            <h3 className="text-[22px] tracking-[0.06em]">
              光と余白を、先に体験させる。
            </h3>

            <p className="mt-5 text-[13px] leading-[2.05] text-[#2b2621]/90">
              家具単体の魅力ではなく、
              配置や余白によって生まれる居心地の差を伝えるため、
              写真点数や情報量は意図的に抑えました。
              <br />
              スクロールの速度に合わせて視線が落ち着くよう、
              明度差と影のコントラストも最小限に設計しています。
            </p>
          </div>

          <div className="md:col-span-7">
            <img
              src={assets.visual1}
              alt="KOTI visual"
              className="rounded-3xl w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* =========================
          BOTTOM
      ========================= */}
      <div className="mt-28 text-center">
        <a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
         className="rounded-full bg-[#141312] px-6 py-3 text-[12px] tracking-[0.24em] text-[#fbfaf7]"
        >
          ENTER THE KOTI SITE →
        </a>

        <div className="mt-10">
          <Link
            to="/works"
             className="rounded-full border border-[#d9cfbe] bg-white/70 px-8 py-3.5 text-[12px] tracking-[0.26em]"
          >
            ← BACK TO WORKS
          </Link>
        </div>

        <p className="mt-8 text-[11px] tracking-[0.34em] text-[#6a5a43]/70">
          © 2025 KOTI — Quiet Living Furniture (Concept)
        </p>
      </div>
    </section>
  );
}
