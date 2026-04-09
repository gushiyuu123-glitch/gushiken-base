import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function ReCamp() {
  const heroRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article
      className="relative min-h-screen isolate overflow-hidden text-white"
      style={{
        background: "linear-gradient(180deg,#22221f 0%,#1a1a18 100%)",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "@id": "https://gushikendesign.com/works/recamp#creativework",
            name: "Re:Camp — Outdoor Gear Studio | Brand Concept Web Design",
            inLanguage: "ja",
            url: "https://gushikendesign.com/works/recamp",
            description:
              "焚き火のあとの静けさや、夜のアウトドアの空気感を大切にしたブランドコンセプトWebデザイン。ギアそのものを強く語るのではなく、雰囲気の余韻が残る入口ページとしてまとめた作品。",
            image: [
              "https://gushikendesign.com/works1/Camp.png",
              "https://gushikendesign.com/works1/mori.png"
            ],
            creator: {
              "@type": "Person",
              name: "具志堅 裕人",
              alternateName: "Yuto Gushiken",
              url: "https://gushikendesign.com/"
            },
            publisher: {
              "@type": "Organization",
              name: "GUSHIKEN DESIGN",
              url: "https://gushikendesign.com/"
            },
            isBasedOn: {
              "@type": "WebSite",
              name: "Re:Camp Official Site",
              url: "https://recamp-site.vercel.app/"
            },
            genre: [
              "Web Design",
              "Outdoor Concept",
              "Brand Website",
              "React",
              "Vite",
              "Tailwind"
            ]
          })
        }}
      />

      {/* 背景 */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: "url(/works1/mori.png)",
          opacity: 0.2,
          filter: "brightness(0.95) contrast(1.05) saturate(1)",
        }}
      />

      <div
        aria-hidden
        className="fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(
              circle at 42% 78%,
              rgba(255,150,80,0.14) 0%,
              rgba(255,150,80,0.06) 30%,
              rgba(0,0,0,0) 65%
            )
          `,
        }}
      />

      <div
        aria-hidden
        className="fixed inset-0 -z-10"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(10,10,10,0.22) 0%,
              rgba(10,10,10,0.10) 35%,
              rgba(10,10,10,0) 70%
            )
          `,
        }}
      />

      {/* HERO */}
      <section className="relative h-[100vh] flex items-end">
        <img
          ref={heroRef}
          src="/works1/Camp.png"
          alt="Re:Camp Hero"
          className="absolute inset-0 w-full h-full object-cover scale-[1.03] opacity-[0.96]"
          draggable={false}
        />

        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-black/35 via-black/20 to-transparent"
        />

        <div className="relative z-10 p-[8vw] md:p-[5vw] max-w-[62rem]">
          <h1 className="text-[2rem] md:text-[3.1rem] tracking-[0.14em] mb-4">
            Re:Camp
          </h1>
          <p className="text-[0.9rem] tracking-[0.26em] opacity-80 uppercase">
            Outdoor Gear Studio — After Campfire
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-[6vw] py-[18vh] max-w-[62rem] mx-auto space-y-14">
        <p className="text-[0.75rem] tracking-[0.32em] text-white/60 uppercase">
          CONCEPT
        </p>

        <h2 className="text-[1.8rem] leading-[1.75] tracking-[0.06em]">
          焚き火が消えたあとに、
          <br />
          なぜか道具だけが、
          <br />
          すぐそばに感じられる。
        </h2>

        <p className="leading-[2.1] text-[1.05rem] text-white/85">
          Re:Camp では、アウトドアギアを強く押し出すのではなく、
          <br />
          夜の空気や、火が消えたあとの静けさごと
          <br />
          ひとつの印象として見せることを大切にしました。
        </p>

        <p className="leading-[2.1] text-[1.05rem] text-white/80">
          情報を増やしすぎず、
          <br />
          余韻が静かに残るような見え方に整えています。
        </p>

        <p className="leading-[2.1] text-[1.05rem] text-white/75">
          これは、本編サイトへ入る前に
          <br />
          Re:Camp の空気感に触れてもらうための入口ページです。
        </p>

        <div className="pt-[6vh] flex gap-8 flex-wrap">
          <Link
            to="/works"
            className="text-[0.85rem] tracking-[0.14em] opacity-70 hover:opacity-100 transition"
          >
            ← 制作一覧に戻る
          </Link>

          <a
            href="https://recamp-site.vercel.app/"
            className="inline-block px-10 py-3 text-[0.85rem] tracking-[0.2em] border border-white/30 hover:bg-white/10 transition-all"
          >
            Re:Camp 本編サイトを見る →
          </a>
        </div>
      </section>
    </article>
  );
}