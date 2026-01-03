import { useEffect, useRef } from "react";

export default function Shigure() {
  const rootRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article
      ref={rootRef}
      className="
        relative
        bg-[#fbfaf7]
        text-[#161513]
        overflow-hidden
      "
    >
      {/* =========================
          JSON-LD（SEO / 作品説明）
      ========================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "時雨｜Conceptual Ryokan Website",
            alternateName: "SHIGURE — Conceptual Ryokan",
            description:
              "旅館という題材を用い、時間・余白・静寂をUI/UXとして再構築したコンセプトWebサイト。情報訴求ではなく、体験の進行そのものを設計対象とした実験的作品。",
            url: "https://shigure.vercel.app/",
            image: "https://shigure.vercel.app/ogp.png",
            inLanguage: "ja",
            genre: ["Web Design", "UI/UX", "Conceptual Website"],
            keywords: [
              "旅館 Webデザイン",
              "コンセプトサイト",
              "静寂 UI",
              "余白 設計",
              "PC SP 完全分離"
            ],
            creator: {
              "@type": "Person",
              name: "裕人 具志堅",
              alternateName: "Yuto Gushiken",
              url: "https://gushikendesign.com/"
            },
            publisher: {
              "@type": "Organization",
              name: "GUSHIKEN DESIGN",
              url: "https://gushikendesign.com/"
            }
          })
        }}
      />
{/* ==================================================
    HERO
================================================== */}
<section className="relative min-h-[100svh] overflow-hidden flex items-center">
  {/* 建築 */}
  <img
    src="/works1/shigure.png"
    alt=""
    className="
      absolute inset-0
      w-full md:w-[62%] h-full
      object-cover
      scale-[1.03]
      pointer-events-none
    "
  />

  {/* SP専用：文字視認性のための暗室レイヤー */}
  <div
    className="
      absolute inset-x-0 bottom-0
      h-[58%]
      md:hidden
      bg-gradient-to-t
      from-[rgba(0,0,0,0.6)]
      via-[rgba(0,0,0,0.28)]
      to-transparent
      pointer-events-none
    "
  />

  {/* 右側の空気（PC用） */}
  <div
    className="
      absolute inset-y-0 right-0
      w-full md:w-[38%]
      bg-gradient-to-r
      from-[#f3f1ed]/10
      via-[#f3f1ed]/4
      to-transparent
      pointer-events-none
    "
  />

  {/* 宿名（PC縦 / SP横） */}
  <div className="absolute left-[6vw] bottom-[18vh] md:bottom-[10vh] z-10">
    <h2
      className="
        aq-fade
        font-serif
        md:writing-vertical
        text-[1.2rem] md:text-[1.4rem]
        tracking-[0.4em]
        text-[#f3efe6] md:text-[#e6dfd2]
        relative
      "
    >
      <span
        aria-hidden
        className="
          absolute inset-[-1.4rem]
          bg-[radial-gradient(
            ellipse_at_center,
            rgba(0,0,0,0.55) 0%,
            rgba(0,0,0,0.22) 45%,
            rgba(0,0,0,0.0) 70%
          )]
          blur-[26px]
          -z-10
        "
      />
      時雨
    </h2>

    <span
      className="
        aq-fade
        block mt-[1.2rem]
        text-[0.7rem]
        tracking-[0.32em]
        text-[#e0dccf] md:text-[#d2cbbf]/70
        md:writing-vertical
      "
    >
      旅館
    </span>
  </div>

  {/* コピー */}
  <div className="relative ml-auto pr-[6vw] md:pr-[10vw] z-10">
    <h1
      className="
        aq-fade
        font-serif
        md:writing-vertical
        text-[1.6rem] md:text-[2.4rem]
        leading-[1.9]
        tracking-[0.22em]
        text-[#f5f3ee] md:text-[rgba(26,26,26,0.82)]
      "
    >
      時が、<br />
      ほどける宿。
    </h1>

    <p
      className="
        aq-fade
        mt-[2.5rem]
        font-serif
        md:writing-vertical
        text-[0.95rem]
        leading-[2.4]
        tracking-[0.22em]
        text-[#e8e5dc] md:text-[#4a4a46]
      "
    >
      四季のあいだで、<br />
      お休み。
    </p>

    {/* サイトリンク（冒頭） */}
    <p
      className="
        aq-fade
        mt-[2.8rem]
        text-[0.7rem]
        tracking-[0.26em]
        text-[#e6e3da] md:text-[#6a6a66]
      "
    >
      <a
        href="https://shigure.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-[6px] opacity-80 hover:opacity-100 transition"
      >
        https://shigure.vercel.app/
      </a>
    </p>
  </div>
</section>


      {/* ==================================================
          CONCEPT
      ================================================== */}
      <section className="flex items-center justify-center px-[8vw] py-[10rem] md:py-[24vh]">
        <div className="max-w-[46rem] text-center">
          <p className="aq-fade text-[1.05rem] leading-[2.6] tracking-[0.14em] text-[#3a3a38]">
            本作は、旅館という業態を題材にした
            コンセプトWebサイトの制作事例です。
          </p>

          <div className="h-[4rem]" />

          <p className="aq-fade text-[0.95rem] leading-[2.8] tracking-[0.16em] text-[#4a4a46]">
            情報を並べるのではなく、
            Web上で「空間」や「時間」を
            どこまで表現できるかを主題にしています。
            <br /><br />
            スクロール速度、余白、視線移動を
            UIの一部として設計しました。
          </p>

          <div className="h-[4rem]" />

          <p className="aq-fade text-[0.9rem] leading-[2.7] tracking-[0.18em] text-[#5a5a56]">
            PC / SP を完全分離したDOM構成により、
            それぞれに異なる「静けさ」を
            実装レベルで作り分けています。
          </p>
        </div>
      </section>

      {/* ==================================================
          STRUCTURE
      ================================================== */}
      <section className="px-[8vw] py-[10rem] md:py-[14vh]">
        <div className="max-w-[30rem] ml-auto aq-fade">
          <p className="leading-[2.7] tracking-[0.14em] text-[#4a4a46]">
            写真とテキストは
            常に対にならないよう配置されています。
          </p>
        </div>

        <div className="mt-[3rem] md:mt-[6vh] w-full md:w-[36vw] ml-auto aq-fade">
          <img src="/works1/shigure1.png" alt="" className="w-full" />
        </div>

        <div className="mt-[6rem] max-w-[28rem] aq-fade">
          <p className="leading-[2.6] tracking-[0.14em] text-[#4a4a46]">
            画面全体をひとつの余白として
            扱う設計を行っています。
          </p>
        </div>

        <div className="mt-[3rem] md:mt-[6vh] w-full md:w-[40vw] aq-fade">
          <img src="/works1/shigure2.png" alt="" className="w-full" />
        </div>
      </section>

      {/* ==================================================
          INFO / BACKLINK
      ================================================== */}
      <section className="py-[16vh] text-center">
        <p className="aq-fade text-[0.7rem] tracking-[0.32em] text-[#6a6a66]">
          Conceptual Ryokan Website
        </p>

        <p className="aq-fade mt-[1.2rem] text-[0.65rem] tracking-[0.28em] text-[#7a7a76]">
          React / Vite / Tailwind CSS / GSAP
          <br />
          PC / SP Completely Separated
        </p>

       {/* 実サイトリンク（先に置く） */}
<p className="aq-fade mt-[4rem] text-[0.65rem] tracking-[0.28em] text-[#8a8a86]">
  <a
    href="https://shigure.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      underline
      underline-offset-[6px]
      opacity-60
      hover:opacity-100
      transition
    "
  >
    Visit SHIGURE Website →
  </a>
</p>

{/* バックリンク（制作者） */}
<p className="aq-fade mt-[2.6rem] text-[0.65rem] tracking-[0.28em] text-[#8a8a86]">
  <a
    href="https://gushikendesign.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="opacity-60 hover:opacity-100 transition"
  >
    ← Back to GUSHIKEN DESIGN
  </a>
</p>

      </section>
    </article>
  );
}
