// src/pages/entry/OkinawaBridalWebsite.jsx
import { Link } from "react-router-dom";

const COVER = "/works/vow-in-light-entry.webp";
const LIVE_URL = "https://vow-in-light.vercel.app/";

const GUSHIKEN_URL = "https://gushikendesign.com";
const PAGE_PATH = "/works/vow-in-light";

const COPY = {
  hero: {
    kicker: "BRIDAL / PHOTOWEDDING WEBSITE",
    h1: "ブライダル・フォトウェディング向け\nホームページ制作。",
    sub: "写真の価値を、\n相談したくなる余白へ。",
    lead:
      "Vow in Lightは、ブライダル・フォトウェディング向けのWebサイト制作事例です。\n写真の上質さを落とさず、比較検討中のユーザーが相談しやすい流れに整えています。",
    tags: ["Bridal", "Photowedding", "Photo", "Inquiry"],
  },

  overview: {
    label: "OVERVIEW",
    h2: "写真は綺麗なのに、サイトで印象が落ちる。",
    body: [
      "ブライダルやフォトウェディングでは、写真そのものが大きな判断材料になります。",
      "でも、サイトの余白、文字量、フォント、導線が整っていないと、せっかくの写真が安く見えることがあります。",
      "このページは、完成サイトへ入る前の前座室です。Vow in Lightで何を整えたのか、なぜ写真の見せ方と問い合わせ導線を分けて考えたのかを、読みやすくまとめています。",
    ],
  },

  answer: {
    label: "ANSWER",
    h2: "ブライダル・フォトウェディングに、Webサイトは必要ですか？",
    text:
      "必要です。Instagramや予約媒体は写真を見せるには強い一方で、プランの違い、相談の流れ、撮影の雰囲気、料金の目安を順番よく伝えるには限界があります。Webサイトは、比較検討中のユーザーに安心材料を渡し、問い合わせまでの流れを整える場所です。",
  },

  intent: {
    label: "INTENT",
    h2: "狙い",
    body: [
      "ブライダル・フォトウェディングは、感情で惹かれ、現実条件で比較されます。",
      "写真の雰囲気が好きでも、料金、プラン、撮影場所、相談方法、当日の流れが分からないと、問い合わせ前で止まります。",
      "Vow in Lightでは、写真の世界観を壊さずに、比較検討中のユーザーが知りたい情報へ自然に進める構成にしています。",
    ],
  },

  difference: {
    label: "DIFFERENCE",
    h2: "Vow in Lightで差別化した設計",
    lead:
      "上質に見せるために、足しすぎない。写真が主役になるように、余白、文字量、導線を静かに整えています。",
    items: [
      {
        title: "PHOTO FIRST",
        text:
          "装飾で写真を飾るのではなく、写真そのものが強く見える余白を作る。",
      },
      {
        title: "QUIET LUXURY",
        text:
          "派手な高級感ではなく、静かな上質さで比較検討中の不安を減らす。",
      },
      {
        title: "MOBILE INQUIRY",
        text:
          "スマホで見た時に、雰囲気から相談まで流れが切れないようにする。",
      },
      {
        title: "PLAN CLARITY",
        text:
          "プランや料金の考え方を整理し、相談前の迷いを残さない。",
      },
    ],
  },

  target: {
    label: "TARGET",
    h2: "こういうブライダル事業者に向いています",
    items: [
      "写真は綺麗なのに、サイトで安っぽく見えてしまっている",
      "世界観はあるのに、問い合わせにつながっていない",
      "フォトウェディング・ロケーション撮影の魅力を整理したい",
      "スマホで見た時に、決め手になる導線が弱い",
      "プランや相談方法を、上質なまま分かりやすく伝えたい",
    ],
  },

  problem: {
    label: "PROBLEM",
    h2: "問い合わせ前に止まる原因",
    items: [
      "写真の世界観とサイトの印象が合っていない",
      "プランや料金の違いが分かりにくい",
      "スマホで見た時に情報が探しにくい",
      "問い合わせボタンが多すぎる、または弱すぎる",
      "相談前に何を確認すればいいか分からない",
    ],
  },

  structure: {
    label: "STRUCTURE",
    h2: "比較検討から相談までの流れを整える",
    items: [
      {
        title: "最初に写真の空気を伝える",
        text:
          "Heroでは説明しすぎず、写真の世界観で止める。上質さは、最初の数秒で判断されます。",
      },
      {
        title: "次に、選ぶ理由を渡す",
        text:
          "撮影スタイル、雰囲気、プラン、対応範囲など、比較中のユーザーが知りたい情報を整理します。",
      },
      {
        title: "最後に、相談へ進ませる",
        text:
          "問い合わせの入口を分かりやすくし、スマホでも自然に相談できる流れにします。",
      },
    ],
  },

  case: {
    label: "CASE",
    h2: "実例：Vow in Light",
    body: [
      "Vow in Lightは、ブライダル・フォトウェディング向けのコンセプトサイトです。",
      "写真、余白、タイポグラフィ、静かな導線を軸にしながら、比較検討中のユーザーが相談しやすい構成にしています。",
      "完成サイトでは視覚表現に集中し、この前座室では設計意図を読みやすくまとめています。",
    ],
  },

  faq: {
    label: "FAQ",
    h2: "よくある質問",
    list: [
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
    ],
  },
};

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
      mainEntity: {
        "@id": `${GUSHIKEN_URL}${PAGE_PATH}#faq`,
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
      mainEntity: COPY.faq.list.map(([q, a]) => ({
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

function stringifyJsonLd(obj) {
  return JSON.stringify(obj)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

function Section({ label, title, lead, children, gold = false }) {
  return (
    <section className="aq-fade relative z-10 bg-transparent">
      <div className="mx-auto grid w-[min(1040px,calc(100%-36px))] grid-cols-1 gap-7 border-t border-[rgba(18,15,12,.10)] px-0 py-14 md:grid-cols-12 md:gap-10 md:py-20">
        <div className="md:col-span-3">
          <p
            className={`m-0 text-[11px] tracking-[0.28em] ${
              gold ? "text-[rgba(160,125,75,.72)]" : "text-[rgba(18,15,12,.40)]"
            }`}
          >
            {label}
          </p>
        </div>

        <div className="md:col-span-9">
          {title ? (
            <h2 className="m-0 max-w-[820px] font-serif text-[23px] leading-[1.52] tracking-[0.08em] text-[rgba(18,15,12,.90)] md:text-[31px] md:leading-[1.52]">
              {title}
            </h2>
          ) : null}

          {lead ? (
            <p className="mt-5 max-w-[780px] text-[15px] leading-[2.08] tracking-[0.05em] text-[rgba(18,15,12,.64)] md:text-[16px]">
              {lead}
            </p>
          ) : null}

          {children ? <div className="mt-7">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

function Paragraphs({ items }) {
  return (
    <div className="max-w-[780px] space-y-5 text-[15px] leading-[2.1] tracking-[0.05em] text-[rgba(18,15,12,.64)] md:text-[16px]">
      {items.map((text) => (
        <p key={text} className="m-0">
          {text}
        </p>
      ))}
    </div>
  );
}

function LiveSiteCta() {
  return (
    <div className="mt-10 max-w-[780px]">
      <a
        className="group block border border-[rgba(160,125,75,.24)] bg-[rgba(255,252,248,.68)] px-6 py-6 transition hover:bg-[rgba(255,252,248,.92)] md:px-8 md:py-7"
        href={LIVE_URL}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Vow in Lightの完成サイトを別タブで開く"
      >
        <span className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <span>
            <span className="block text-[10px] tracking-[0.28em] text-[rgba(160,125,75,.68)]">
              LIVE SITE
            </span>

            <span className="mt-2 block font-serif text-[19px] tracking-[0.08em] text-[rgba(18,15,12,.90)] md:text-[23px]">
              Vow in Lightの完成サイトを見る
            </span>
          </span>

          <span className="inline-flex items-center gap-3 text-[12px] tracking-[0.18em] text-[rgba(18,15,12,.58)]">
            OPEN
            <span
              className="inline-block transition duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </span>
        </span>
      </a>
    </div>
  );
}

function LineItems({ items }) {
  return (
    <div className="max-w-[820px] border-t border-[rgba(18,15,12,.10)]">
      {items.map((item, index) => {
        const isString = typeof item === "string";
        const title = isString ? item : item.title;
        const text = isString ? null : item.text;

        return (
          <div
            key={`${title}-${index}`}
            className="grid grid-cols-[48px_1fr] gap-4 border-b border-[rgba(18,15,12,.10)] py-5 md:grid-cols-[64px_1fr]"
          >
            <p className="m-0 font-serif text-[13px] tracking-[0.18em] text-[rgba(160,125,75,.62)]">
              {String(index + 1).padStart(2, "0")}
            </p>

            <div>
              <p className="m-0 text-[15px] leading-[1.85] tracking-[0.05em] text-[rgba(18,15,12,.82)] md:text-[16px]">
                {title}
              </p>

              {text ? (
                <p className="mt-2 mb-0 text-[14px] leading-[2.05] tracking-[0.04em] text-[rgba(18,15,12,.56)] md:text-[15px]">
                  {text}
                </p>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function DifferenceRows() {
  return (
    <div className="max-w-[820px] border-t border-[rgba(18,15,12,.10)]">
      {COPY.difference.items.map((item, index) => (
        <div
          key={item.title}
          className="grid grid-cols-1 gap-3 border-b border-[rgba(18,15,12,.10)] py-6 md:grid-cols-[180px_1fr] md:gap-8"
        >
          <div>
            <p className="m-0 font-serif text-[13px] tracking-[0.18em] text-[rgba(160,125,75,.62)]">
              {String(index + 1).padStart(2, "0")}
            </p>

            <h3 className="mt-2 mb-0 text-[15px] tracking-[0.08em] text-[rgba(18,15,12,.88)]">
              {item.title}
            </h3>
          </div>

          <p className="m-0 text-[15px] leading-[2.05] tracking-[0.04em] text-[rgba(18,15,12,.58)]">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}

function FaqRows() {
  return (
    <Section label={COPY.faq.label} title={COPY.faq.h2}>
      <div className="max-w-[820px] border-t border-[rgba(18,15,12,.10)]">
        {COPY.faq.list.map(([q, a]) => (
          <details
            key={q}
            className="group border-b border-[rgba(18,15,12,.10)] py-5"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[15px] leading-[1.9] tracking-[0.05em] text-[rgba(18,15,12,.84)]">
              <span>{q}</span>
              <span className="text-[rgba(160,125,75,.55)] transition group-open:rotate-45">
                +
              </span>
            </summary>

            <p className="mt-3 mb-0 text-[14px] leading-[2.05] tracking-[0.04em] text-[rgba(18,15,12,.56)] md:text-[15px]">
              {a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}

function BottomCta() {
  return (
    <footer className="aq-fade relative z-10 bg-transparent">
      <div className="mx-auto grid w-[min(1040px,calc(100%-36px))] grid-cols-1 gap-7 border-t border-[rgba(18,15,12,.10)] px-0 py-16 md:grid-cols-12 md:gap-10 md:py-20">
        <div className="md:col-span-3">
          <p className="m-0 text-[11px] tracking-[0.28em] text-[rgba(18,15,12,.40)]">
            NEXT
          </p>
        </div>

        <div className="md:col-span-9">
          <h2 className="m-0 max-w-[760px] font-serif text-[22px] leading-[1.6] tracking-[0.08em] text-[rgba(18,15,12,.90)] md:text-[30px]">
            写真の価値を、問い合わせにつながる形へ。
          </h2>

          <p className="mt-5 max-w-[720px] text-[15px] leading-[2.05] tracking-[0.04em] text-[rgba(18,15,12,.60)]">
            ブライダル、フォトウェディング、美容室、飲食、観光、アパレルなど、
            印象で選ばれる業種のWebサイト制作に対応しています。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex h-[48px] items-center justify-center bg-[rgba(18,15,12,.92)] px-7 text-[13px] tracking-[0.16em] text-white transition hover:bg-black"
              to="/contact"
            >
              相談する
            </Link>

            <Link
              className="inline-flex h-[48px] items-center justify-center border border-[rgba(18,15,12,.18)] bg-[rgba(255,252,248,.48)] px-7 text-[13px] tracking-[0.16em] text-[rgba(18,15,12,.82)] transition hover:bg-[rgba(255,252,248,.78)]"
              to="/works"
            >
              WORKSへ戻る
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function OkinawaBridalWebsite() {
  return (
    <article className="relative isolate min-h-[100svh] overflow-hidden bg-[#f8f5f0] text-[#120f0c]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifyJsonLd(JSON_LD),
        }}
      />

      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(1400px 620px at 20% -8%, rgba(210,185,150,.20), transparent 55%),
            radial-gradient(1100px 680px at 86% 12%, rgba(180,210,240,.12), transparent 60%),
            radial-gradient(900px 600px at 50% 110%, rgba(200,180,155,.12), transparent 62%),
            linear-gradient(180deg, #f8f5f0 0%, #fdfcf9 50%, #f9f7f4 100%)
          `,
        }}
        aria-hidden="true"
      />

      <header className="relative z-10 pt-[96px] pb-[58px] aq-fade max-[880px]:pt-[72px] max-[880px]:pb-[44px]">
        <div className="mx-auto w-[min(1120px,calc(100%-56px))] max-[880px]:w-[calc(100%-36px)]">
          <div className="relative overflow-hidden rounded-[10px] border border-[rgba(18,15,12,.10)] bg-[rgba(255,252,248,.40)]">
            <img
              src={COVER}
              alt="Vow in Light ブライダル・フォトウェディング向けWebサイト制作事例のキービジュアル"
              className="block h-[clamp(460px,62vh,720px)] w-full object-cover object-center opacity-[0.96] [filter:saturate(.94)_contrast(1.03)_brightness(.97)] max-[880px]:h-[clamp(340px,50vh,560px)]"
              loading="eager"
            />

            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(248,245,240,.05) 0%, rgba(18,15,12,.14) 100%)",
              }}
              aria-hidden="true"
            />
          </div>

          <div className="mt-[34px]">
            <p className="m-0 text-[12px] tracking-[0.24em] text-[rgba(160,125,75,.72)]">
              {COPY.hero.kicker}
            </p>

            <h1 className="mt-[14px] whitespace-pre-line font-serif text-[clamp(30px,3.6vw,48px)] leading-[1.22] tracking-[0.08em] text-[rgba(18,15,12,.92)]">
              {COPY.hero.h1}
            </h1>

            <p className="mt-[18px] whitespace-pre-line font-serif text-[clamp(24px,3.2vw,42px)] leading-[1.35] tracking-[0.08em] text-[rgba(18,15,12,.82)]">
              {COPY.hero.sub}
            </p>

            <p className="mt-[18px] max-w-[760px] whitespace-pre-line text-[13px] leading-[2.0] tracking-[0.07em] text-[rgba(18,15,12,.66)] md:text-[14px]">
              {COPY.hero.lead}
            </p>

            <div className="mt-[18px] flex flex-wrap gap-x-[14px] gap-y-[10px] text-[12px] tracking-[0.14em] text-[rgba(18,15,12,.50)]">
              {COPY.hero.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-[28px] h-[42px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0), rgba(248,245,240,1) 70%, rgba(248,245,240,1))",
          }}
          aria-hidden="true"
        />
      </header>

      <main className="relative z-10">
        <Section label={COPY.overview.label} title={COPY.overview.h2}>
          <Paragraphs items={COPY.overview.body} />
          <LiveSiteCta />
        </Section>

        <Section label={COPY.answer.label} title={COPY.answer.h2} gold>
          <p className="max-w-[820px] text-[16px] leading-[2.12] tracking-[0.05em] text-[rgba(18,15,12,.64)] md:text-[18px]">
            {COPY.answer.text}
          </p>
        </Section>

        <Section label={COPY.intent.label} title={COPY.intent.h2}>
          <Paragraphs items={COPY.intent.body} />
        </Section>

        <Section
          label={COPY.difference.label}
          title={COPY.difference.h2}
          lead={COPY.difference.lead}
          gold
        >
          <DifferenceRows />
        </Section>

        <Section label={COPY.target.label} title={COPY.target.h2}>
          <LineItems items={COPY.target.items} />
        </Section>

        <Section label={COPY.problem.label} title={COPY.problem.h2}>
          <LineItems items={COPY.problem.items} />
        </Section>

        <Section label={COPY.structure.label} title={COPY.structure.h2} gold>
          <LineItems items={COPY.structure.items} />
        </Section>

        <Section label={COPY.case.label} title={COPY.case.h2}>
          <Paragraphs items={COPY.case.body} />
        </Section>

        <FaqRows />

        <BottomCta />
      </main>
    </article>
  );
}