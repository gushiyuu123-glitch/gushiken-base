// src/pages/entry/KouRyuiEntry.jsx
import { Link } from "react-router-dom";

const SITE_URL = "https://kouryui.vercel.app/";
const HERO_PC = "/works/kouryui.webp";
const HERO_SP = "/works/kouryui1sp.webp";

const GUSHIKEN_URL = "https://gushikendesign.com";
const PAGE_PATH = "/works/kou-ryui";

const COPY = {
  hero: {
    kicker: "OKINAWA CULTURE EXPERIENCE WEBSITE",
    title: "琉装体験を、\n旅の記憶として\n予約できる入口へ。",
    lead:
      "KOU RYUI（紅琉衣）は、琉装体験・沖縄文化体験を想定したWebサイト制作事例です。\n写真の華やかさだけでなく、旅行中に必要な判断材料を“使う順番”に整えています。",
    tags: ["琉装体験", "手ぶらOK", "所要時間", "那覇・国際通り"],
  },

  overview: {
    label: "OVERVIEW",
    h1: "琉装・沖縄文化体験向けWebサイト制作。",
    sub: "旅先で迷わず予約できるように、体験の魅力と判断材料を整理する。",
    body: [
      "KOU RYUIは、琉装体験・沖縄文化体験・観光体験サービスを想定したWebサイト制作事例です。",
      "このページは、完成サイトへ入る前の前座室です。沖縄らしい華やかさをどう見せるか、旅行中のユーザーがどこで迷うか、予約前に何を知りたいかを整理しています。",
      "観光中のユーザーは、じっくり比較するよりも、短い時間で判断します。料金、所要時間、場所、持ち物、予約方法。その情報が見つからないだけで、予約は後回しになります。",
    ],
  },

  answer: {
    label: "ANSWER",
    h2: "琉装体験・沖縄文化体験に、Webサイトは必要ですか？",
    text:
      "必要です。SNSや予約サイトだけでは、世界観、料金、所要時間、持ち物、アクセス、当日の流れを順番よく伝えにくい場合があります。Webサイトでは、旅先で迷いやすい情報を固定し、体験したい気持ちを予約までつなげることができます。",
  },

  intent: {
    label: "INTENT",
    h2: "狙い",
    body: [
      "旅先では、迷いがひとつ残るだけで予約は止まります。",
      "料金は分かるか。所要時間はどれくらいか。手ぶらで行けるか。場所は分かりやすいか。当日でも相談できるか。",
      "その不安が残ったままだと、写真が綺麗でも予約には進みません。だからKOU RYUIでは、沖縄らしい華やかさを残しながら、予約前に必要な情報を“使う順番”に揃えています。",
    ],
  },

  approach: {
    label: "APPROACH",
    h2: "やったことは3つ",
    items: [
      {
        title: "入口で“体験したい”を作る",
        text:
          "写真、余白、紅と金の印象を立てて、ただの衣装案内ではなく、旅の一枠として気持ちが切り替わる入口にしています。",
      },
      {
        title: "料金・所要時間・持ち物を探させない",
        text:
          "手ぶらOK、所要時間、場所、当日の流れ。旅行中の人が判断に使う情報を、先に見える位置へ整理しています。",
      },
      {
        title: "スマホで予約導線が切れない構造にする",
        text:
          "観光中はスマホで判断されます。途中で不安が戻らないように、確認から予約までの流れを短く整えています。",
      },
    ],
  },

  target: {
    label: "TARGET",
    h2: "こういう体験型サービスに向いています",
    items: [
      "琉装体験・着物体験・文化体験など、写真映えと予約導線を両立したい",
      "料金・所要時間・持ち物・アクセスを分かりやすく整理したい",
      "観光客がスマホで見ても迷わないページにしたい",
      "SNSや予約サイトだけでは世界観を伝えきれていない",
      "沖縄らしさや文化性を、安っぽく見せずに伝えたい",
    ],
  },

  problem: {
    label: "PROBLEM",
    h2: "予約前に止まる原因",
    items: [
      "料金やプランの違いがすぐ分からない",
      "所要時間が見つからず、旅程に入れにくい",
      "持ち物や服装の不安が残る",
      "場所やアクセスが分かりにくい",
      "予約方法が複数あり、どこから進めばいいか迷う",
    ],
  },

  structure: {
    label: "STRUCTURE",
    h2: "旅行者が使う順番に並べる",
    items: [
      {
        title: "まず、体験したいと思わせる",
        text:
          "Heroでは、琉装の華やかさと沖縄らしい空気を先に見せ、旅の記憶として残る印象を作ります。",
      },
      {
        title: "次に、判断材料を見せる",
        text:
          "料金、所要時間、持ち物、場所、当日の流れを整理し、予約前の不安を減らします。",
      },
      {
        title: "最後に、予約へ進める",
        text:
          "問い合わせや予約の入口を分かりやすくし、スマホでも迷わず行動できる導線にします。",
      },
    ],
  },

  case: {
    label: "CASE",
    h2: "実例：KOU RYUI",
    body: [
      "KOU RYUIは、琉装体験・沖縄文化体験を想定したコンセプトサイトです。",
      "紅、金、余白、写真の華やかさを軸にしながら、旅行者が知りたい料金・所要時間・持ち物・アクセス・予約導線を整理しています。",
      "完成サイトでは視覚表現に集中し、この前座室では設計意図を読みやすくまとめています。",
    ],
  },

  faq: {
    label: "FAQ",
    h2: "よくある質問",
    list: [
      [
        "琉装体験や沖縄文化体験のWebサイト制作に対応できますか？",
        "はい。体験内容、料金、所要時間、持ち物、アクセス、予約導線まで整理したWebサイト制作に対応できます。",
      ],
      [
        "観光客向けのページでは何が大事ですか？",
        "短時間で判断できることです。写真の印象に加えて、料金、所要時間、場所、持ち物、予約方法がすぐ分かる構成が重要です。",
      ],
      [
        "写真が綺麗なら、それだけで予約されますか？",
        "写真は入口として重要ですが、それだけでは不安が残ることがあります。料金や流れなどの判断材料を近くに置くことで、予約へ進みやすくなります。",
      ],
      [
        "スマホ対応は重要ですか？",
        "重要です。観光中のユーザーはスマホで確認することが多いため、スマホで見た時の読みやすさと予約導線が大切です。",
      ],
      [
        "沖縄以外の体験型サービスでも相談できますか？",
        "はい。着物体験、観光体験、撮影体験、ワークショップなど、地域性や世界観のある体験型サービスにも対応できます。",
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
      name: "琉装・沖縄文化体験向けWebサイト制作｜KOU RYUI",
      description:
        "KOU RYUIは、琉装体験・沖縄文化体験・観光体験向けのWebサイト制作事例です。旅行中の不安を減らし、料金・所要時間・持ち物・アクセス・予約導線を分かりやすく整理しています。",
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
          name: "KOU RYUI",
          item: `${GUSHIKEN_URL}${PAGE_PATH}`,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${GUSHIKEN_URL}${PAGE_PATH}#service`,
      name: "琉装・沖縄文化体験向けWebサイト制作",
      serviceType: "Webサイト制作・LP制作・予約導線設計",
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
          "琉装体験、沖縄文化体験、観光体験、記念撮影サービス、体験型店舗",
      },
      description:
        "琉装体験・沖縄文化体験・観光向けサービスの魅力を伝え、料金・所要時間・持ち物・アクセス・予約導線を分かりやすく整理するWebサイト制作です。",
    },
    {
      "@type": "CreativeWork",
      "@id": `${GUSHIKEN_URL}${PAGE_PATH}#kou-ryui`,
      name: "KOU RYUI",
      creator: {
        "@id": `${GUSHIKEN_URL}/#person`,
      },
      url: SITE_URL,
      genre: "Web Design / Okinawa Culture Experience Website",
      description:
        "KOU RYUIは、琉装体験・沖縄文化体験を想定したコンセプトサイトです。沖縄らしい華やかさと、旅行者が迷わず予約できる導線を両立しています。",
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

function Section({ label, title, lead, children, warm = false }) {
  return (
    <section className="aq-fade relative z-10 bg-transparent">
      <div className="mx-auto grid w-[min(1040px,calc(100%-36px))] grid-cols-1 gap-7 border-t border-[rgba(18,14,12,.10)] px-0 py-14 md:grid-cols-12 md:gap-10 md:py-20">
        <div className="md:col-span-3">
          <p
            className={`m-0 text-[11px] tracking-[0.26em] ${
              warm ? "text-[rgba(165,40,58,.72)]" : "text-[rgba(18,14,12,.42)]"
            }`}
          >
            {label}
          </p>
        </div>

        <div className="md:col-span-9">
          {title ? (
            <h2 className="m-0 max-w-[820px] font-serif text-[22px] leading-[1.52] tracking-[0.08em] text-[rgba(18,14,12,.90)] md:text-[30px] md:leading-[1.52]">
              {title}
            </h2>
          ) : null}

          {lead ? (
            <p className="mt-5 max-w-[780px] text-[15px] leading-[2.08] tracking-[0.06em] text-[rgba(18,14,12,.66)] md:text-[16px]">
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
    <div className="max-w-[780px] space-y-5 text-[15px] leading-[2.1] tracking-[0.06em] text-[rgba(18,14,12,.66)] md:text-[16px]">
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
        className="group block border border-[rgba(165,40,58,.28)] bg-[rgba(255,250,244,.62)] px-6 py-6 transition hover:bg-[rgba(255,250,244,.86)] md:px-8 md:py-7"
        href={SITE_URL}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="KOU RYUIの完成サイトを別タブで開く"
      >
        <span className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <span>
            <span className="block text-[10px] tracking-[0.28em] text-[rgba(165,40,58,.68)]">
              LIVE SITE
            </span>

            <span className="mt-2 block font-serif text-[19px] tracking-[0.08em] text-[rgba(18,14,12,.90)] md:text-[23px]">
              KOU RYUIの完成サイトを見る
            </span>
          </span>

          <span className="inline-flex items-center gap-3 text-[12px] tracking-[0.18em] text-[rgba(18,14,12,.58)]">
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
    <div className="max-w-[820px] border-t border-[rgba(18,14,12,.10)]">
      {items.map((item, index) => {
        const isString = typeof item === "string";
        const title = isString ? item : item.title;
        const text = isString ? null : item.text;

        return (
          <div
            key={`${title}-${index}`}
            className="grid grid-cols-[48px_1fr] gap-4 border-b border-[rgba(18,14,12,.10)] py-5 md:grid-cols-[64px_1fr]"
          >
            <p className="m-0 font-serif text-[13px] tracking-[0.18em] text-[rgba(165,40,58,.66)]">
              {String(index + 1).padStart(2, "0")}
            </p>

            <div>
              <p className="m-0 text-[15px] leading-[1.85] tracking-[0.06em] text-[rgba(18,14,12,.82)] md:text-[16px]">
                {title}
              </p>

              {text ? (
                <p className="mt-2 mb-0 text-[14px] leading-[2.05] tracking-[0.05em] text-[rgba(18,14,12,.58)] md:text-[15px]">
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

function FaqRows() {
  return (
    <Section label={COPY.faq.label} title={COPY.faq.h2}>
      <div className="max-w-[820px] border-t border-[rgba(18,14,12,.10)]">
        {COPY.faq.list.map(([q, a]) => (
          <details
            key={q}
            className="group border-b border-[rgba(18,14,12,.10)] py-5"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[15px] leading-[1.9] tracking-[0.06em] text-[rgba(18,14,12,.84)]">
              <span>{q}</span>
              <span className="text-[rgba(165,40,58,.55)] transition group-open:rotate-45">
                +
              </span>
            </summary>

            <p className="mt-3 mb-0 text-[14px] leading-[2.05] tracking-[0.05em] text-[rgba(18,14,12,.58)] md:text-[15px]">
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
      <div className="mx-auto grid w-[min(1040px,calc(100%-36px))] grid-cols-1 gap-7 border-t border-[rgba(18,14,12,.10)] px-0 py-16 md:grid-cols-12 md:gap-10 md:py-20">
        <div className="md:col-span-3">
          <p className="m-0 text-[11px] tracking-[0.26em] text-[rgba(18,14,12,.42)]">
            NEXT
          </p>
        </div>

        <div className="md:col-span-9">
          <h2 className="m-0 max-w-[760px] font-serif text-[22px] leading-[1.6] tracking-[0.08em] text-[rgba(18,14,12,.90)] md:text-[30px]">
            体験の魅力を、予約できる形へ。
          </h2>

          <p className="mt-5 max-w-[720px] text-[15px] leading-[2.05] tracking-[0.05em] text-[rgba(18,14,12,.62)]">
            琉装体験、観光体験、ブライダル、飲食、美容室、アパレルなど、
            印象で選ばれる業種のWebサイト制作に対応しています。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex h-[48px] items-center justify-center bg-[rgba(18,14,12,.92)] px-7 text-[13px] tracking-[0.16em] text-white transition hover:bg-black"
              to="/contact"
            >
              相談する
            </Link>

            <Link
              className="inline-flex h-[48px] items-center justify-center border border-[rgba(18,14,12,.18)] bg-[rgba(255,250,244,.45)] px-7 text-[13px] tracking-[0.16em] text-[rgba(18,14,12,.82)] transition hover:bg-[rgba(255,250,244,.78)]"
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

export default function KouRyuiEntry() {
  return (
    <article className="relative isolate min-h-[100svh] overflow-hidden bg-[#f7f1ea] text-[#120e0c]">
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
            radial-gradient(1200px 680px at 18% -10%, rgba(255,255,255,.88), transparent 58%),
            radial-gradient(980px 700px at 82% 10%, rgba(165,40,58,.16), transparent 60%),
            radial-gradient(920px 640px at 70% 92%, rgba(70,110,160,.08), transparent 62%),
            radial-gradient(780px 520px at 18% 78%, rgba(190,155,90,.10), transparent 62%),
            linear-gradient(180deg, #f7f1ea 0%, #fffaf4 55%, #f6efe7 100%)
          `,
        }}
        aria-hidden="true"
      />

      <header className="relative z-10 pt-[96px] pb-[58px] aq-fade max-[880px]:pt-[72px] max-[880px]:pb-[44px]">
        <div className="mx-auto w-[min(1120px,calc(100%-56px))] max-[880px]:w-[calc(100%-36px)]">
          <div className="relative overflow-hidden rounded-[8px] border border-[rgba(255,250,241,.18)] bg-[rgba(16,16,18,.32)]">
            <picture>
              <source media="(max-width: 880px)" srcSet={HERO_SP} />

              <img
                src={HERO_PC}
                alt="琉装体験・沖縄文化体験向けWebサイト制作事例 KOU RYUIのキービジュアル"
                className="block h-[clamp(460px,60vh,700px)] w-full object-cover object-[center_38%] opacity-[0.96] [filter:saturate(1.06)_contrast(1.02)_brightness(1.02)] max-[880px]:h-[clamp(340px,46vh,520px)]"
                loading="eager"
              />
            </picture>

            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  linear-gradient(135deg, rgba(0,0,0,.42), rgba(0,0,0,.06) 52%, rgba(0,0,0,.30)),
                  radial-gradient(820px 420px at 18% 12%, rgba(255,250,241,.12), rgba(255,250,241,0) 62%)
                `,
              }}
              aria-hidden="true"
            />
          </div>

          <div className="mt-[34px]">
            <p className="m-0 text-[12px] tracking-[0.24em] text-[rgba(165,40,58,.78)]">
              {COPY.hero.kicker}
            </p>

            <h1 className="mt-[14px] whitespace-pre-line font-serif text-[clamp(30px,3.6vw,48px)] leading-[1.2] tracking-[0.08em] text-[rgba(18,14,12,.92)]">
              {COPY.hero.title}
            </h1>

            <p className="mt-[16px] max-w-[760px] whitespace-pre-line text-[13px] leading-[2.0] tracking-[0.08em] text-[rgba(18,14,12,.70)] md:text-[14px]">
              {COPY.hero.lead}
            </p>

            <div className="mt-[18px] flex flex-wrap gap-x-[14px] gap-y-[10px] text-[12px] tracking-[0.14em] text-[rgba(18,14,12,.58)]">
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
              "linear-gradient(180deg, rgba(255,255,255,0), rgba(247,241,234,1) 70%, rgba(247,241,234,1))",
          }}
          aria-hidden="true"
        />
      </header>

      <main className="relative z-10">
        <Section label={COPY.overview.label}>
          <h2 className="m-0 max-w-[820px] font-serif text-[24px] leading-[1.5] tracking-[0.08em] text-[rgba(18,14,12,.90)] md:text-[36px] md:leading-[1.45]">
            {COPY.overview.h1}
          </h2>

          <p className="mt-4 max-w-[760px] text-[16px] leading-[2.0] tracking-[0.06em] text-[rgba(18,14,12,.70)] md:text-[18px]">
            {COPY.overview.sub}
          </p>

          <div className="mt-8">
            <Paragraphs items={COPY.overview.body} />
          </div>

          <LiveSiteCta />
        </Section>

        <Section label={COPY.answer.label} title={COPY.answer.h2} warm>
          <p className="max-w-[820px] text-[16px] leading-[2.12] tracking-[0.06em] text-[rgba(18,14,12,.66)] md:text-[18px]">
            {COPY.answer.text}
          </p>
        </Section>

        <Section label={COPY.intent.label} title={COPY.intent.h2}>
          <Paragraphs items={COPY.intent.body} />
        </Section>

        <Section
          label={COPY.approach.label}
          title={COPY.approach.h2}
          warm
        >
          <LineItems items={COPY.approach.items} />
        </Section>

        <Section label={COPY.target.label} title={COPY.target.h2}>
          <LineItems items={COPY.target.items} />
        </Section>

        <Section label={COPY.problem.label} title={COPY.problem.h2}>
          <LineItems items={COPY.problem.items} />
        </Section>

        <Section label={COPY.structure.label} title={COPY.structure.h2} warm>
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