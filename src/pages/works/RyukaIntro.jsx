import { useEffect, useMemo } from "react";

export default function RyukaIntro() {
  useEffect(() => window.scrollTo(0, 0), []);

  const gallery = useMemo(
    () => [
      "/works1/ryuka.png",
      "/works1/ryuka_product.png",
      "/works1/ryuka_scene.png",
      "/works1/ryuka_glass.png",
      "/works1/ryuka_after.png",
    ],
    []
  );

  return (
    <section
      className="
        min-h-screen overflow-x-hidden
        text-slate-900
        bg-[linear-gradient(180deg,#f6fdff_0%,#ffffff_60%,#fff6fb_100%)]
      "
    >
      {/* SEO / JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "@id": "https://gushikendesign.com/works/ryuka#creativework",
            name: "琉香 RYUKA — フレグランスブランドサイト",
            headline: "香りは、記憶のかたちをしている",
            description:
              "沖縄の光・風・海・琉球ガラスから着想を得て制作したフレグランスブランドサイト。香りや空気感が静かに伝わることを大切にした作品。",
            inLanguage: "ja",
            image: [
              "https://gushikendesign.com/works/ryuka/ogp.png",
              "/works1/ryuka.png",
              "/works1/ryuka_product.png",
              "/works1/ryuka_scene.png",
              "/works1/ryuka_glass.png",
              "/works1/ryuka_after.png"
            ],
            url: "https://gushikendesign.com/works/ryuka",
            creator: {
              "@type": "Person",
              name: "裕人 具志堅"
            },
            publisher: {
              "@type": "Organization",
              name: "GUSHIKEN DESIGN",
              url: "https://gushikendesign.com/"
            },
            keywords: [
              "フレグランス",
              "沖縄デザイン",
              "琉球ガラス",
              "ブランドサイト",
              "React",
              "Vite",
              "Tailwind CSS",
              "高級ECデザイン"
            ]
          })
        }}
      />

      {/* OGP */}
      <meta
        property="og:title"
        content="RYUKA — フレグランスブランドサイト"
      />
      <meta
        property="og:description"
        content="沖縄の光・風・静けさから着想を得て制作したフレグランスWeb作品。"
      />
      <meta
        property="og:image"
        content="https://gushikendesign.com/works/ryuka/ogp.png"
      />
      <meta property="og:type" content="website" />

      {/* META */}
      <meta
        name="description"
        content="沖縄の光・風・海・琉球ガラスから着想を得て制作したフレグランスブランドサイト。香りや空気感が静かに伝わることを大切にした作品。"
      />
      <meta name="twitter:card" content="summary_large_image" />

      {/* PC */}
      <div className="pc-only">
        <div className="mx-auto max-w-[1080px] px-8 pt-28">
          {/* HERO */}
          <header className="text-center">
            <p className="text-[11px] tracking-[0.38em] text-slate-500">
              WORK DETAIL / CASE STUDY
            </p>

            <h1 className="mt-6 font-[serif] text-[48px] tracking-[0.08em] leading-[1.15]">
              琉香 — <span className="text-slate-600">RYUKA</span>
            </h1>

            <p className="mt-6 text-[15px] leading-[2.1] text-slate-600">
              沖縄の光と香りをテーマにした、<br />
              <span className="text-slate-900">
                フレグランスブランドサイト
              </span>
            </p>
          </header>

          {/* KEY PHRASE */}
          <section className="my-28 text-center">
            <p className="font-[serif] text-[24px] leading-[1.9] text-[#ff9ac7] tracking-[0.06em]">
              “香りを買う”のではなく、<br />
              “記憶を感じる”
            </p>
          </section>

          {/* CONCEPT */}
          <TextBlock title="コンセプト">
            <p>
              琉香は、沖縄の海・光・風・琉球ガラス工芸から着想した
              フレグランスブランドのコンセプトサイトです。
            </p>
            <p className="mt-6">
              本作品では、情報を詰め込みすぎず、
              香りに触れる前の空気感や印象が
              やわらかく伝わることを大切にしました。
            </p>
            <p className="mt-6">
              光や写真、余白の見え方を整えながら、
              展示を見るような静かな世界観を目指しています。
            </p>
          </TextBlock>

          {/* HERO + GALLERY */}
          <GalleryExhibition images={gallery} />

          {/* STRUCTURE */}
          <TextBlock title="サイト構成">
            <ul className="list-disc list-inside space-y-3">
              <li>Top：ブランドの雰囲気を伝える入口</li>
              <li>Store：実在店舗や接点の紹介</li>
              <li>Boutique：香りを選ぶページ</li>
              <li>商品詳細：背景や魅力が伝わる見せ方</li>
              <li>Story / Exhibit：ブランドの空気感を補うコンテンツ</li>
            </ul>
            <p className="mt-6">
              世界観を大切にしながらも、
              香りやブランドの魅力が自然に伝わるような流れを意識しています。
            </p>
          </TextBlock>

          {/* TECH */}
          <TextBlock title="IMPLEMENTATION">
            <ul className="list-disc list-inside space-y-3">
              <li>React ベースの構成</li>
              <li>やわらかな光の変化</li>
              <li>香りの展示を見せるビジュアル表現</li>
              <li>ブランドの印象を損なわない画面設計</li>
            </ul>

            <p className="mt-6">
              演出を増やしすぎず、静かに見られることを優先しながら、
              全体を落ち着いたトーンでまとめています。
            </p>
          </TextBlock>

          {/* POSITION */}
          <TextBlock title="作品の位置づけ">
            <p>
              ブランド設計からフロントエンドまでを一貫して担当し、
              実在ブランドを想定したサイトとして制作しました。
            </p>
            <p className="mt-6">
              世界観と見やすさの両方を意識しながら、
              香りという商材の魅力が静かに伝わる形を目指しています。
            </p>
          </TextBlock>

          {/* CTA */}
          <section
            className="
              mt-40
              pb-48
              text-center
            "
          >
            <a
              href="https://ryuka-official.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-3
                rounded-full px-10 py-5
                border border-slate-300
                bg-white
                text-slate-900
                text-[14px] tracking-[0.16em]
                shadow-[0_30px_100px_rgba(0,0,0,0.14)]
                hover:shadow-[0_40px_120px_rgba(0,0,0,0.18)]
                transition
              "
            >
              View RYUKA Site →
            </a>
          </section>
        </div>
      </div>
    </section>
  );
}

function GalleryExhibition({ images }) {
  return (
    <>
      {/* PC ONLY */}
      <section className="hidden md:block">
        <section className="relative">
          <div className="pt-[35vh] pb-[25vh]">
            <div className="sticky top-0 h-screen overflow-hidden">
              <img
                src={images[0]}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-white/55" />

              <div className="relative z-10 h-full flex items-center justify-center text-center px-8">
                <div>
                  <p className="text-[12px] tracking-[0.36em] text-slate-600">
                    FRAGRANCE EXPERIENCE
                  </p>

                  <p className="mt-10 font-[serif] text-[38px] leading-[1.6] tracking-[0.12em] text-slate-900">
                    香りは、<br />
                    記憶のかたちをしている。
                  </p>

                  <p className="mt-10 text-[13px] tracking-[0.32em] text-slate-600">
                    光、風、静けさ。<br />
                    沖縄の感覚を閉じ込めて。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-40 relative">
          <div className="grid grid-cols-12 gap-16 items-start">
            <div className="col-span-7">
              <p className="mb-6 text-[13px] tracking-[0.28em] text-slate-500">
                SCENE
              </p>
              <img
                src={images[1]}
                className="w-full h-[520px] object-cover rounded-[6px]"
              />
            </div>

            <div className="col-span-5 mt-32">
              <p className="mb-6 text-[13px] tracking-[0.28em] text-slate-500">
                MATERIAL
              </p>
              <img
                src={images[2]}
                className="w-full h-[520px] object-cover rounded-[6px]"
              />
            </div>
          </div>

          <div className="mt-40 text-center">
            <img
              src={images[3]}
              className="mx-auto w-[520px] h-[380px] object-cover rounded-[6px]"
            />
            <p className="mt-10 text-[14px] tracking-[0.28em] text-slate-500">
              静かに残る、余韻。
            </p>
          </div>
        </section>
      </section>

      {/* SP ONLY */}
      <section className="md:hidden mt-24 space-y-24 px-5">
        <section className="md:hidden mt-24 px-5">
          <div className="relative h-[70vh] overflow-hidden rounded-[6px]">
            <img
              src={images[0]}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-white/65" />

            <div
              className="
                relative z-10
                h-full
                flex items-center justify-center
                text-center
                px-6
              "
            >
              <div>
                <p className="text-[11px] tracking-[0.32em] text-slate-600">
                  FRAGRANCE EXPERIENCE
                </p>

                <p
                  className="
                    mt-8
                    font-[serif]
                    text-[28px]
                    leading-[1.65]
                    tracking-[0.1em]
                    text-slate-900
                  "
                >
                  香りは、<br />
                  記憶のかたちをしている。
                </p>

                <p
                  className="
                    mt-8
                    text-[12px]
                    tracking-[0.26em]
                    text-slate-600
                  "
                >
                  光、風、静けさ。<br />
                  沖縄の感覚を閉じ込めて。
                </p>
              </div>
            </div>
          </div>
        </section>

        <div>
          <img
            src={images[1]}
            alt=""
            className="w-full h-[420px] object-cover rounded-[6px]"
          />
        </div>

        <div>
          <img
            src={images[2]}
            alt=""
            className="w-full h-[420px] object-cover rounded-[6px]"
          />
        </div>

        <div>
          <img
            src={images[3]}
            alt=""
            className="w-full h-[360px] object-cover rounded-[6px]"
          />
        </div>
      </section>
    </>
  );
}

function TextBlock({ title, children }) {
  return (
    <section className="max-w-[720px] mx-auto mt-32">
      <h2 className="font-[serif] text-[26px] tracking-[0.08em] text-slate-900">
        {title}
      </h2>
      <div className="mt-8 text-[15px] leading-[2.2] text-slate-700">
        {children}
      </div>
    </section>
  );
}