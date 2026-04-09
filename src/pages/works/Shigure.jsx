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
      {/* SEO / JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "@id": "https://shigure.vercel.app/",
            name: "SHIGURE｜Conceptual Ryokan Website",
            alternateName: "時雨 — 旅館コンセプトサイト",
            url: "https://shigure.vercel.app/",
            inLanguage: "ja",
            description:
              "旅館の静けさや余韻を大切にしながらまとめたコンセプトサイト。情報を並べるだけではなく、滞在前の空気感がやわらかく伝わることを目指した作品。",
            image: "https://shigure.vercel.app/ogp.png",
            genre: ["Web Design", "Conceptual Website"],
            keywords: [
              "旅館 Webデザイン",
              "旅館サイト",
              "世界観デザイン",
              "React",
              "モダンフロントエンド"
            ],
            creator: {
              "@type": "Organization",
              name: "GUSHIKEN DESIGN"
            },
            publisher: {
              "@type": "Organization",
              name: "GUSHIKEN DESIGN"
            }
          })
        }}
      />

      {/* OGP */}
      <meta property="og:title" content="SHIGURE｜Conceptual Ryokan Website" />
      <meta
        property="og:description"
        content="旅館の静けさや余韻を大切にまとめたコンセプト作品。"
      />
      <meta property="og:image" content="https://shigure.vercel.app/ogp.png" />
      <meta property="og:type" content="website" />

      {/* META */}
      <meta
        name="description"
        content="旅館の静けさや余韻を大切にしながらまとめたコンセプトサイト。滞在前の空気感がやわらかく伝わることを目指した作品。"
      />
      <meta name="twitter:card" content="summary_large_image" />

      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden flex items-center">
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

      {/* CONCEPT */}
      <section className="flex items-center justify-center px-[8vw] py-[10rem] md:py-[24vh]">
        <div className="max-w-[46rem] text-center">
          <p className="aq-fade text-[1.05rem] leading-[2.6] tracking-[0.14em] text-[#3a3a38]">
            本作は、旅館という業態を題材にした
            コンセプトWebサイトの制作事例です。
          </p>

          <div className="h-[4rem]" />

          <p className="aq-fade text-[0.95rem] leading-[2.8] tracking-[0.16em] text-[#4a4a46]">
            情報を並べることよりも、
            Web上で旅館の空気や静けさが
            どこまで伝わるかを大切にしました。
            <br /><br />
            ゆっくり眺めたくなるような、
            落ち着いた印象に全体をまとめています。
          </p>

          <div className="h-[4rem]" />

          <p className="aq-fade text-[0.9rem] leading-[2.7] tracking-[0.18em] text-[#5a5a56]">
            PCとSPそれぞれで、
            静かな旅館らしさが自然に伝わる見え方を目指しています。
          </p>
        </div>
      </section>

      {/* STRUCTURE */}
      <section className="px-[8vw] py-[10rem] md:py-[14vh]">
        <div className="max-w-[30rem] ml-auto aq-fade">
          <p className="leading-[2.7] tracking-[0.14em] text-[#4a4a46]">
            写真とテキストの距離感を整えながら、
            落ち着いて見られる余白を大切にしています。
          </p>
        </div>

        <div className="mt-[3rem] md:mt-[6vh] w-full md:w-[36vw] ml-auto aq-fade">
          <img src="/works1/shigure1.png" alt="" className="w-full" />
        </div>

        <div className="mt-[6rem] max-w-[28rem] aq-fade">
          <p className="leading-[2.6] tracking-[0.14em] text-[#4a4a46]">
            画面全体がひとつの静かな印象になるよう、
            上品な間合いを意識して整えました。
          </p>
        </div>

        <div className="mt-[3rem] md:mt-[6vh] w-full md:w-[40vw] aq-fade">
          <img src="/works1/shigure2.png" alt="" className="w-full" />
        </div>
      </section>

      {/* INFO / BACKLINK */}
      <section className="py-[16vh] text-center">
        <p className="aq-fade text-[0.7rem] tracking-[0.32em] text-[#6a6a66]">
          Conceptual Ryokan Website
        </p>

        <p className="aq-fade mt-[1.2rem] text-[0.65rem] tracking-[0.28em] text-[#7a7a76]">
          Tech — React / Modern Frontend
        </p>

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

        <p className="aq-fade mt-[2.6rem] text-[0.65rem] tracking-[0.28em] text-[#8a8a86]">
          <a
            href="https://gushikendesign.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-60 hover:opacity-100 transition"
          >
            ← Back to Works
          </a>
        </p>
      </section>
    </article>
  );
}