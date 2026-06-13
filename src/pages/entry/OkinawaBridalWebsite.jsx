// src/pages/entry/OkinawaBridalWebsite.jsx
import { Link } from "react-router-dom";

const COVER = "/works/vow-in-light-entry.webp";
const LIVE_URL = "https://vow-in-light.vercel.app/";

const GUSHIKEN_URL = "https://gushikendesign.com";
const PAGE_PATH = "/works/vow-in-light";

const FAQ_ITEMS = [
  [
    "ブライダル・フォトウェディング向けのホームページ制作は対応していますか？",
    "はい。フォトウェディングスタジオ、ブライダルサロン、結婚式場、ドレスショップなど、写真の印象が比較検討に関わるWebサイト制作に対応しています。",
  ],
  [
    "写真素材が少なくても制作できますか？",
    "ご相談ください。既存写真の整理から進める、撮影タイミングに合わせて仕上げる、必要な写真の方向性を先に決めるなど、状況に合わせて進められます。",
  ],
  [
    "高級感や上質さを出すには何が重要ですか？",
    "写真そのものだけでなく、余白、文字量、フォント、導線、スマホで見たときの情報密度が重要です。派手に飾るより、写真の価値が落ちない設計に整えます。",
  ],
  [
    "料金やプランは全部載せた方がいいですか？",
    "すべてを細かく載せる必要はありません。ただし、比較検討中のユーザーが不安にならないように、プランの考え方や相談前の目安は整理しておく方が問い合わせにつながりやすくなります。",
  ],
  [
    "沖縄以外のブライダル事業者でも依頼できますか？",
    "はい、全国対応しています。オンラインでのやり取りを中心に、写真素材や現在のサイト、SNSを確認しながら進められます。",
  ],
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${GUSHIKEN_URL}${PAGE_PATH}#webpage`,
      url: `${GUSHIKEN_URL}${PAGE_PATH}`,
      name: "ブライダル・フォトウェディング向けWebサイト制作｜Vow in Light",
      description:
        "Vow in Lightは、ブライダル・フォトウェディング向けのWebサイト制作事例です。写真の上質さ、余白、スマホ導線、問い合わせまでの流れを整え、比較検討中のユーザーが相談しやすい構成にしています。",
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
          name: "Vow in Light",
          item: `${GUSHIKEN_URL}${PAGE_PATH}`,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${GUSHIKEN_URL}${PAGE_PATH}#service`,
      name: "ブライダル・フォトウェディング向けWebサイト制作",
      serviceType: "ホームページ制作・LP制作・Webデザイン",
      provider: {
        "@id": `${GUSHIKEN_URL}/#organization`,
      },
      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "沖縄県",
        },
        {
          "@type": "Country",
          name: "日本",
        },
      ],
      audience: {
        "@type": "Audience",
        audienceType:
          "フォトウェディングスタジオ、ブライダルサロン、結婚式場、ドレスショップ、ロケーション撮影サービス",
      },
      description:
        "ブライダル・フォトウェディング向けに、写真の上質さ、余白、スマホ導線、プラン説明、問い合わせ導線を整理するWebサイト制作です。",
    },
    {
      "@type": "CreativeWork",
      "@id": `${GUSHIKEN_URL}${PAGE_PATH}#vow-in-light`,
      name: "Vow in Light",
      creator: {
        "@id": `${GUSHIKEN_URL}/#person`,
      },
      url: LIVE_URL,
      genre: "Web Design / Bridal Website / Photowedding Website",
      description:
        "Vow in Lightは、ブライダル・フォトウェディング向けのコンセプトサイトです。写真の世界観と問い合わせ導線を両立するWebデザイン事例です。",
    },
    {
      "@type": "FAQPage",
      "@id": `${GUSHIKEN_URL}${PAGE_PATH}#faq`,
      mainEntity: FAQ_ITEMS.map(([q, a]) => ({
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

export default function OkinawaBridalWebsite() {
  const cover = COVER;
  const liveUrl = LIVE_URL;

  return (
    <article className="relative isolate min-h-[100svh] text-[#120f0c]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c"),
        }}
      />

      {/* 背景（KOU方式：bodyを触らず、このページ内で固定レイヤーを敷く） */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background: `
            radial-gradient(1400px 620px at 20% -8%, rgba(210,185,150,.18), transparent 55%),
            radial-gradient(1100px 680px at 86% 12%, rgba(180,210,240,.14), transparent 60%),
            radial-gradient(900px 600px at 50% 110%, rgba(200,180,155,.12), transparent 62%),
            linear-gradient(180deg, #f8f5f0 0%, #fdfcf9 50%, #f9f7f4 100%)
          `,
        }}
        aria-hidden="true"
      />

      {/* =========================
          HERO（Stage）
      ========================= */}
      <header className="aq-fade">
        <div className="mx-auto w-[min(1200px,calc(100%-56px))] max-[880px]:w-[calc(100%-36px)] pt-[clamp(120px,12vw,172px)] pb-[clamp(40px,6vw,64px)] border-b border-black/10">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] gap-[clamp(28px,5vw,72px)] items-start">
            {/* LEFT：Preview（縦で格） */}
            <aside className="order-2 lg:order-1">
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="
                  group relative block overflow-hidden
                  rounded-[12px] border border-black/10
                  bg-[linear-gradient(160deg,rgba(210,195,175,.22),rgba(230,220,208,.12))]
                  h-[clamp(320px,36vw,520px)]
                  transition-transform
                  hover:-translate-y-[2px]
                "
                aria-label="Vow in Light を開く"
              >
                {/* 画像 */}
                <img
                  src={cover}
                  alt="Vow in Light — ブライダル・フォトウェディング向けWebサイト制作事例"
                  loading="eager"
                  className="
                    absolute inset-0 w-full h-full object-cover
                    [filter:saturate(.92)_contrast(1.04)_brightness(.96)]
                  "
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                {/* 薄いブランド印（控えめ） */}
                <img
                  src="/logo-gd-dark.png"
                  alt=""
                  aria-hidden="true"
                  className="
                    absolute top-[16px] right-[16px] w-[72px] opacity-[0.18]
                    [filter:grayscale(1)_brightness(.25)_contrast(1.2)]
                    mix-blend-mode-multiply pointer-events-none
                  "
                />

                {/* 下のキャプション */}
                <span
                  className="
                    absolute left-[14px] bottom-[12px]
                    text-[11px] tracking-[.20em] text-black/70
                    bg-[rgba(248,245,240,.82)] border border-black/10
                    px-[12px] py-[8px] rounded-full
                    backdrop-blur-[4px]
                  "
                >
                  Preview <span aria-hidden="true">→</span>
                </span>

                {/* 薄いフェード */}
                <span
                  className="absolute inset-0 pointer-events-none"
                  aria-hidden="true"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(248,245,240,0) 42%, rgba(248,245,240,.32) 100%)",
                  }}
                />
              </a>

              {/* CTA（左はボタン1本：本URL） */}
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="
                  mt-[16px] inline-flex items-center justify-center gap-[10px]
                  w-full rounded-full
                  px-[18px] py-[13px]
                  text-[13px] tracking-[.08em]
                  border border-[rgba(160,125,75,.22)]
                  text-[rgba(160,125,75,1)]
                  bg-[rgba(160,125,75,.14)]
                  hover:bg-[rgba(160,125,75,.20)]
                  transition
                "
              >
                Vow in Light を見る <span aria-hidden="true">→</span>
              </a>
            </aside>

            {/* RIGHT：Copy（静か・決め手） */}
            <div className="order-1 lg:order-2 min-w-0">
              <p className="m-0 mb-[20px] text-[11px] tracking-[.22em] text-[rgba(160,125,75,.55)]">
                Works — Bridal &amp; Photowedding / Okinawa
              </p>

              {/* SEO H1（見た目は静かに） */}
              <h1 className="m-0 text-[clamp(13px,1.2vw,15px)] leading-[1.85] tracking-[.14em] text-black/70 font-normal">
                ブライダル・フォトウェディング向けホームページ制作
              </h1>

              {/* Project mark */}
              <p className="mt-[14px] leading-[0]">
                <img
                  src="/typography/VowinLight.svg"
                  alt="Vow in Light"
                  loading="eager"
                  className="block w-[clamp(240px,32vw,520px)] opacity-[0.90]"
                />
                <span className="inline-block mt-[10px] text-[12px] tracking-[.14em] text-black/35">
                  Vow in Light
                </span>
              </p>

              <p className="mt-[16px] text-[clamp(13px,1.1vw,14px)] leading-[2.1] tracking-[.06em] text-black/55 max-w-[56ch]">
                写真は綺麗なのに、サイトで印象が落ちる。
                <br />
                そのギャップを、上質さと問い合わせ導線で埋めます。
              </p>

              <div className="mt-[22px] flex flex-wrap gap-[8px]">
                {["Bridal", "Photowedding", "Photo", "Inquiry"].map((t) => (
                  <span
                    key={t}
                    className="
                      text-[11px] tracking-[.20em]
                      px-[12px] py-[7px] rounded-full
                      border border-[rgba(160,125,75,.22)]
                      text-[rgba(160,125,75,.55)]
                      bg-[rgba(160,125,75,.14)]
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* =========================
          SECTIONS（Paper）
      ========================= */}
      <main className="aq-fade">
        <div className="mx-auto w-[min(980px,calc(100%-56px))] max-[880px]:w-[calc(100%-36px)]">
          {/* PROBLEM */}
          <section className="mt-[clamp(40px,6vw,64px)] pt-[clamp(36px,5vw,52px)] border-t border-black/10">
            <p className="m-0 mb-[10px] text-[10px] tracking-[.32em] text-[rgba(160,125,75,.55)] uppercase">
              Problem
            </p>

            <h2 className="m-0 mb-[24px] text-[clamp(15px,1.6vw,18px)] leading-[1.65] tracking-[.12em] text-black/90 font-medium">
              写真は綺麗なのに、サイトで安く見える。
            </h2>

            <p className="m-0 text-[14px] leading-[2.1] tracking-[.05em] text-black/70 max-w-[68ch]">
              撮影のクオリティが高くても、サイトを開いた瞬間に印象が落ちることがあります。
              フォント・余白・情報の出し方で、同じ写真がまったく別物に見えるからです。
            </p>

            <p className="mt-[16px] mb-0 text-[14px] leading-[2.1] tracking-[.05em] text-black/70 max-w-[68ch]">
              ブライダル・フォトウェディングは比較検討されます。
              <span className="font-medium text-black/90">
                「どこに頼むか」は、サイトの第一印象で決まる
              </span>
              場面が増えています。
            </p>
          </section>

          {/* WHO */}
          <section className="mt-[clamp(40px,6vw,64px)] pt-[clamp(36px,5vw,52px)] border-t border-black/10">
            <p className="m-0 mb-[10px] text-[10px] tracking-[.32em] text-[rgba(160,125,75,.55)] uppercase">
              Who this is for
            </p>

            <h2 className="m-0 mb-[24px] text-[clamp(15px,1.6vw,18px)] leading-[1.65] tracking-[.12em] text-black/90 font-medium">
              こういう方のサイトを作っています
            </h2>

            <ul className="m-0 p-0 list-none border-t border-black/10">
              {[
                "写真は綺麗なのに、サイトで安っぽく見えてしまっている",
                "世界観はあるのに、問い合わせに繋がらない",
                "他社と並べたとき、比較で負けている気がする",
                "スマホで見たとき、決め手になる何かが足りない",
                "リニューアルしたいが、どこから手をつければいいか分からない",
              ].map((t, i) => (
                <li
                  key={t}
                  className="grid grid-cols-[64px_1fr] max-[520px]:grid-cols-[52px_1fr] gap-[14px] py-[16px] border-b border-black/10"
                >
                  <span className="text-[11px] tracking-[.22em] text-[rgba(160,125,75,.55)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] leading-[1.9] tracking-[.04em] text-black/70">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* APPROACH */}
          <section className="mt-[clamp(40px,6vw,64px)] pt-[clamp(36px,5vw,52px)] border-t border-black/10">
            <p className="m-0 mb-[10px] text-[10px] tracking-[.32em] text-[rgba(160,125,75,.55)] uppercase">
              Approach
            </p>

            <h2 className="m-0 mb-[24px] text-[clamp(15px,1.6vw,18px)] leading-[1.65] tracking-[.12em] text-black/90 font-medium">
              「上質に見せる」のに、やることは多くない。
            </h2>

            <p className="m-0 text-[14px] leading-[2.1] tracking-[.05em] text-black/70 max-w-[68ch]">
              派手に飾るより、整える。迷わせる要素を減らし、伝える順番を揃える。
              それだけで、写真の価値が正しく伝わります。
            </p>

            <div className="mt-[32px] grid grid-cols-2 max-[980px]:grid-cols-1 border-t border-l border-black/10 rounded-[6px] overflow-hidden">
              {[
                [
                  "─ 01",
                  "写真の選定と見せ方",
                  "枚数より選定基準。1枚の重みで世界観が決まります。",
                ],
                [
                  "─ 02",
                  "情報密度と余白",
                  "詰め込みすぎず、抜きすぎず。迷わない量に整えます。",
                ],
                [
                  "─ 03",
                  "スマホの視線設計",
                  "問い合わせはスマホから。最初にスマホで成立させます。",
                ],
                [
                  "─ 04",
                  "問い合わせへの導線",
                  "CTAを増やしすぎず、自然に手が動く一本道を作ります。",
                ],
              ].map(([n, title, text]) => (
                <div
                  key={title}
                  className="p-[24px_22px] bg-[rgba(255,252,248,.72)] border-r border-b border-black/10"
                >
                  <span className="block text-[10px] tracking-[.32em] text-[rgba(160,125,75,.55)] mb-[10px]">
                    {n}
                  </span>

                  <h3 className="m-0 mb-[8px] text-[13px] font-medium tracking-[.10em] text-black/90">
                    {title}
                  </h3>

                  <p className="m-0 text-[13px] leading-[1.85] tracking-[.04em] text-black/55">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CASE */}
          <section className="mt-[clamp(40px,6vw,64px)] pt-[clamp(36px,5vw,52px)] border-t border-black/10">
            <p className="m-0 mb-[10px] text-[10px] tracking-[.32em] text-[rgba(160,125,75,.55)] uppercase">
              Case study
            </p>

            <h2 className="m-0 mb-[24px] text-[clamp(15px,1.6vw,18px)] leading-[1.65] tracking-[.12em] text-black/90 font-medium">
              制作事例：Vow in Light
            </h2>

            <div className="mb-[20px] p-[28px_26px] max-[520px]:p-[20px_18px] bg-[rgba(248,244,238,.85)] border border-[rgba(160,125,75,.14)] rounded-[6px]">
              <div className="flex flex-wrap gap-x-[16px] gap-y-[8px] mb-[20px] pb-[16px] border-b border-black/10">
                {[
                  "ブライダル / フォトウェディング",
                  "ブランドサイト + 問い合わせ導線",
                  "デザイン・実装",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-[11px] tracking-[.22em] text-[rgba(160,125,75,.55)]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="m-0 text-[14px] leading-[2.1] tracking-[.05em] text-black/70 max-w-[68ch]">
                課題は「写真の世界観はある。でもサイトで伝わっていない」。
                写真の選び方・テキスト量・スマホの流れを整えました。
              </p>

              <p className="mt-[16px] mb-0 text-[14px] leading-[2.1] tracking-[.05em] text-black/70 max-w-[68ch]">
                伝えたいのは“情報”だけではなく、“印象”。
                見た瞬間に相談したくなる空気を、サイト側で支えています。
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-[clamp(40px,6vw,64px)] pt-[clamp(36px,5vw,52px)] border-t border-black/10">
            <p className="m-0 mb-[10px] text-[10px] tracking-[.32em] text-[rgba(160,125,75,.55)] uppercase">
              FAQ
            </p>

            <h2 className="m-0 mb-[24px] text-[clamp(15px,1.6vw,18px)] leading-[1.65] tracking-[.12em] text-black/90 font-medium">
              よくある質問
            </h2>

            <dl className="m-0 p-0 grid gap-0 border-t border-black/10">
              {FAQ_ITEMS.map(([q, a]) => (
                <div key={q} className="py-[22px] border-b border-black/10">
                  <dt className="m-0 mb-[10px] text-[13px] font-medium leading-[1.75] tracking-[.06em] text-black/90">
                    <span className="text-[rgba(160,125,75,.55)] font-normal">
                      Q.{" "}
                    </span>
                    {q}
                  </dt>

                  <dd className="m-0 text-[13px] leading-[1.95] tracking-[.04em] text-black/55 pl-[20px] border-l border-[rgba(160,125,75,.22)]">
                    {a}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {/* PROCESS */}
          <section className="mt-[clamp(40px,6vw,64px)] pt-[clamp(36px,5vw,52px)] border-t border-black/10 pb-[clamp(120px,12vw,160px)]">
            <p className="m-0 mb-[10px] text-[10px] tracking-[.32em] text-[rgba(160,125,75,.55)] uppercase">
              Process &amp; Price
            </p>

            <h2 className="m-0 mb-[24px] text-[clamp(15px,1.6vw,18px)] leading-[1.65] tracking-[.12em] text-black/90 font-medium">
              進め方と料金の目安
            </h2>

            <ol className="m-0 p-0 list-none border-t border-black/10">
              {[
                [
                  "01",
                  "ヒアリング・相談",
                  "写真素材、現在のサイトやSNS、伝えたい印象を確認します。内容が固まっていない段階でも大丈夫です。",
                ],
                [
                  "02",
                  "構成案・デザイン",
                  "写真と文章のトーンを揃え、上質さと問い合わせ導線が両立する構成に整えます。",
                ],
                [
                  "03",
                  "実装・確認",
                  "スマホでの見え方を重視しながら実装します。修正は2回まで含みます。",
                ],
                [
                  "04",
                  "公開",
                  "公開設定までサポートします。必要に応じて、公開後の軽微な調整も相談できます。",
                ],
              ].map(([n, t, d]) => (
                <li
                  key={n}
                  className="grid grid-cols-[64px_1fr] max-[520px]:grid-cols-[52px_1fr] gap-[14px] py-[18px] border-b border-black/10"
                >
                  <span className="text-[10px] tracking-[.28em] text-[rgba(160,125,75,.55)] mt-[3px]">
                    {n}
                  </span>

                  <div>
                    <strong className="block text-[13px] font-medium tracking-[.10em] text-black/90 mb-[6px]">
                      {t}
                    </strong>

                    <p className="m-0 text-[13px] leading-[1.85] tracking-[.04em] text-black/55">
                      {d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-[28px] pt-[28px] border-t border-black/10">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-[18px] md:gap-[28px] items-start">
                {/* LEFT: main CTA */}
                <div>
                  <p className="m-0 text-[14px] leading-[2.0] tracking-[.05em] text-black/70 max-w-[60ch]">
                    ブライダル・フォトウェディング向けの
                    <br />
                    サイト制作について、まずはご相談ください。
                  </p>

                  <div className="mt-[16px]">
                    <Link
                      className="
                        inline-flex items-center gap-[10px]
                        px-[22px] py-[13px] rounded-full
                        text-[13px] tracking-[.08em]
                        border border-[rgba(160,125,75,.22)]
                        text-[rgba(160,125,75,1)]
                        bg-[rgba(160,125,75,.14)]
                        hover:bg-[rgba(160,125,75,.20)]
                        transition
                      "
                      to="/contact"
                    >
                      ブライダルサイトを相談する
                    </Link>
                  </div>
                </div>

                {/* RIGHT: note */}
                <aside className="md:pt-[2px]">
                  <p className="m-0 text-[11px] leading-[1.9] tracking-[.05em] text-black/42">
                    ※
                    このページは、沖縄店舗全般ではなく、写真商材を上質に見せて問い合わせ導線に落とすためのブライダル・フォトウェディング向け入口ページです。
                  </p>
                </aside>
              </div>

              {/* Back to works は最下部のまま */}
              <div className="mt-[32px] pt-[20px] border-t border-black/10">
                <Link
                  className="flex w-fit mx-auto items-center gap-[8px] text-[12px] tracking-[.12em] text-black/40 hover:text-black/55 transition"
                  to="/works"
                >
                  ALL VIEW WORKS →
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </article>
  );
}