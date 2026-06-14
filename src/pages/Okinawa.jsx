// src/pages/Okinawa.jsx
import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

import OkinawaThreeSea from "../visuals/OkinawaThreeSea";
import OkinawaWaveTitle from "../components/OkinawaWaveTitle";
import styles from "./Okinawa.module.css";

const SITE_URL = "https://gushikendesign.com";
const PAGE_PATH = "/okinawa";

const AREAS = ["URASOE", "NAHA", "GINOWAN", "CHATAN", "OKINAWA CITY"];

const TARGETS = [
  {
    name: "美容室・理容室",
    text: "メニュー、雰囲気、スタッフの人柄を整理し、新規予約につながる入口へ。",
  },
  {
    name: "飲食・カフェ・バー",
    text: "料理、空間、場所の印象を、来店前に伝わる順番へ整える。",
  },
  {
    name: "サロン・施術系店舗",
    text: "施術内容、料金、不安解消、予約導線をひとつの流れで見せる。",
  },
  {
    name: "観光・体験サービス",
    text: "沖縄らしさ、写真、所要時間、予約前の判断材料を分かりやすく伝える。",
  },
];

const PROBLEMS = [
  {
    title: "良い店なのに、第一印象で伝わっていない",
    text: "写真、言葉、余白、導線が揃っていないと、実際の魅力より弱く見えてしまいます。",
  },
  {
    title: "SNSはあるけど、予約前の不安が残る",
    text: "営業時間、料金、メニュー、駐車場、場所、流れが見つからないだけで、問い合わせは後回しになります。",
  },
  {
    title: "テンプレート感が強く、選ばれる理由が見えない",
    text: "沖縄の店舗は、人・空間・地域性・雰囲気が強みになることが多い。そこを薄めない設計が必要です。",
  },
];

const FLOW = [
  {
    title: "目的を整理する",
    text: "予約、問い合わせ、来店、採用、実績掲載など、何を増やしたいのかを先に決めます。",
  },
  {
    title: "伝える順番を決める",
    text: "初めて見る人が、店の雰囲気、料金、場所、安心材料、予約方法へ迷わず進めるように整理します。",
  },
  {
    title: "世界観を作る",
    text: "写真、余白、文字、色、動きを合わせて、店の空気が伝わる見た目にします。",
  },
  {
    title: "スマホで確認する",
    text: "沖縄の店舗サイトはスマホで見られる場面が多いため、スマホでの読みやすさと導線を重視します。",
  },
];

const FEATURED_WORKS = [
  {
    name: "KOU RYUI",
    label: "琉装・沖縄文化体験",
    to: "/works/kou-ryui",
  },
  {
    name: "Vow in Light",
    label: "ブライダル・フォトウェディング",
    to: "/works/vow-in-light",
  },
  {
    name: "BLACK PAPILLON",
    label: "タトゥースタジオ",
    to: "/works/black-papillon",
  },
];

const FAQS = [
  {
    q: "沖縄県内でホームページ制作の相談はできますか？",
    a: "はい。浦添を拠点に、那覇・宜野湾・北谷・沖縄市など沖縄本島内の店舗・サロン・個人事業主さまを想定しています。内容によってはオンライン相談と組み合わせて進めることもできます。",
  },
  {
    q: "LPとホームページ、どちらが向いていますか？",
    a: "予約・問い合わせ・キャンペーンなど目的がひとつならLP、店舗紹介・メニュー・実績・お知らせまで広げたい場合は複数ページのホームページが向いています。最初に目的を整理してから提案します。",
  },
  {
    q: "写真や文章がまだ揃っていなくても相談できますか？",
    a: "相談できます。必要な写真・文章・掲載情報を先に整理し、足りない素材がある場合は優先順位を決めながら進めます。SNSや既存サイトがある場合は、そこから現状を確認できます。",
  },
  {
    q: "沖縄の店舗サイトでは何が大事ですか？",
    a: "店の雰囲気、料金、場所、駐車場、予約方法、安心材料がすぐ分かることです。特にスマホで見た時に、初めての人が迷わず問い合わせできる導線が重要です。",
  },
  {
    q: "料金はどう決まりますか？",
    a: "ページ数・掲載内容・導線・必要な機能・更新のしやすさによって決まります。あとから無駄に膨らまないよう、制作前に作る範囲を整理して見積もります。",
  },
  {
    q: "沖縄以外からの依頼もできますか？",
    a: "はい。全国オンライン対応の制作も行っています。沖縄県内の実店舗向け相談はこのページ、県外やオンライン前提のご相談は全国対応ページをご確認ください。",
  },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}${PAGE_PATH}#webpage`,
      url: `${SITE_URL}${PAGE_PATH}`,
      name: "沖縄の店舗・サロン向けホームページ制作｜GUSHIKEN DESIGN",
      description:
        "GUSHIKEN DESIGNは、沖縄県内の店舗・サロン・個人事業主向けにLP制作・ホームページ制作・Webデザインを行う個人制作スタジオです。浦添を拠点に、予約・問い合わせにつながる構成・デザイン・実装まで一貫して対応します。",
      inLanguage: "ja",
      isPartOf: {
        "@id": `${SITE_URL}/#website`,
      },
      about: {
        "@id": `${SITE_URL}${PAGE_PATH}#service`,
      },
      breadcrumb: {
        "@id": `${SITE_URL}${PAGE_PATH}#breadcrumb`,
      },
      mainEntity: {
        "@id": `${SITE_URL}${PAGE_PATH}#faq`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}${PAGE_PATH}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "ホーム",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "沖縄のホームページ制作",
          item: `${SITE_URL}${PAGE_PATH}`,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}${PAGE_PATH}#service`,
      name: "沖縄の店舗・サロン向けホームページ制作",
      serviceType: "ホームページ制作・LP制作・Webデザイン",
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "沖縄県",
        },
        {
          "@type": "City",
          name: "浦添市",
        },
        {
          "@type": "City",
          name: "那覇市",
        },
        {
          "@type": "City",
          name: "宜野湾市",
        },
        {
          "@type": "City",
          name: "北谷町",
        },
        {
          "@type": "City",
          name: "沖縄市",
        },
      ],
      audience: {
        "@type": "Audience",
        audienceType:
          "沖縄県内の美容室・理容室・飲食店・カフェ・バー・サロン・観光サービス・体験型店舗・個人事業主",
      },
      description:
        "沖縄県内の店舗・サロン・個人事業主向けに、予約・問い合わせにつながるホームページ制作・LP制作・Webデザインを行います。",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}${PAGE_PATH}#faq`,
      mainEntity: FAQS.map(({ q, a }) => ({
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

const WRAP = "mx-auto w-full max-w-[1040px] px-6 sm:px-8";
const READ = "mx-auto w-full max-w-[760px]";
const SECTION_PAD = "py-20 sm:py-28";

const H2_T =
  "text-[#F7FBFF] font-semibold tracking-[-0.025em] text-[clamp(23px,2.5vw,34px)] leading-[1.32]";

const BODY_T =
  "text-[#DCEFF5]/85 text-[clamp(14px,1.1vw,16px)] leading-[2.15] tracking-[0.01em]";

const BTN_PRIMARY =
  "inline-flex items-center justify-center h-11 px-7 no-underline text-[12px] tracking-[0.14em] transition bg-[#F7FBFF]/13 border border-[#F7FBFF]/28 text-[#F7FBFF] md:hover:bg-[#F7FBFF]/20 md:hover:border-[#F7FBFF]/42";

const BTN_SECONDARY =
  "inline-flex items-center justify-center h-11 px-7 no-underline text-[12px] tracking-[0.14em] transition bg-transparent border border-[#DCEFF5]/22 text-[#DCEFF5]/84 md:hover:text-[#F7FBFF] md:hover:border-[#F7FBFF]/38";

function stringifyJsonLd(obj) {
  return JSON.stringify(obj)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

function Eyebrow({ children }) {
  return (
    <p
      className="m-0 text-[11px] tracking-[0.28em] text-[#B8DDE8]/62"
      aria-hidden="true"
    >
      {children}
    </p>
  );
}

function Prose({ paragraphs }) {
  return (
    <div className={`mt-7 ${READ} ${BODY_T} space-y-5`}>
      {paragraphs.map((text) => (
        <p key={text} className="m-0">
          {text}
        </p>
      ))}
    </div>
  );
}

function NumberRows({ items }) {
  return (
    <div className="mt-10 mx-auto w-full max-w-[820px] border-t border-[#DCEFF5]/18 text-left">
      {items.map((item, index) => (
        <div
          key={item.title}
          className="grid grid-cols-[54px_1fr] gap-4 border-b border-[#DCEFF5]/14 py-5 sm:grid-cols-[72px_1fr]"
        >
          <p className="m-0 text-[11px] tracking-[0.24em] text-[#F2C77A]/78">
            {String(index + 1).padStart(2, "0")}
          </p>

          <div>
            <h3 className="m-0 text-[15px] leading-[1.75] tracking-[0.04em] text-[#F7FBFF] sm:text-[16px]">
              {item.title}
            </h3>

            <p className="mt-2 mb-0 text-[14px] leading-[2] text-[#DCEFF5]/68">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function TargetCards() {
  return (
    <ul
      className="mt-12 mx-auto w-full max-w-[900px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 list-none p-0 text-left"
      aria-label="対応業種"
    >
      {TARGETS.map(({ name, text }) => (
        <li
          key={name}
          className="border border-[#DCEFF5]/18 bg-[#F7FBFF]/7 backdrop-blur-[3px] px-5 py-5 min-h-[158px]"
        >
          <h3 className="m-0 text-[#F7FBFF] text-[14px] tracking-[0.08em] leading-[1.6]">
            {name}
          </h3>

          <p className="mt-4 mb-0 text-[#DCEFF5]/70 text-[13px] leading-[1.85]">
            {text}
          </p>
        </li>
      ))}
    </ul>
  );
}

function FeaturedWorks() {
  return (
    <div className="mt-10 mx-auto w-full max-w-[780px] grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
      {FEATURED_WORKS.map(({ name, label, to }) => (
        <Link
          key={name}
          to={to}
          className="group block no-underline border border-[#DCEFF5]/18 bg-[#F7FBFF]/7 px-5 py-5 transition md:hover:bg-[#F7FBFF]/11 md:hover:border-[#F7FBFF]/34"
        >
          <p className="m-0 text-[#F7FBFF] text-[14px] tracking-[0.08em] leading-[1.5]">
            {name}
          </p>

          <p className="mt-3 mb-0 text-[#B8DDE8]/62 text-[12px] leading-[1.7]">
            {label}
          </p>

          <span className="mt-5 inline-block text-[#F2C77A]/78 text-[11px] tracking-[0.16em] underline decoration-[#F2C77A]/30 underline-offset-[6px] group-hover:decoration-[#F2C77A]/65">
            VIEW
          </span>
        </Link>
      ))}
    </div>
  );
}

function FaqBlock() {
  return (
    <div
      id="faq"
      className="mt-12 mx-auto w-full max-w-[780px] border-t border-[#DCEFF5]/20 text-left"
    >
      {FAQS.map(({ q, a }) => (
        <details
          key={q}
          className={`${styles.faqItem} border-b border-[#DCEFF5]/15`}
        >
          <summary className="py-6 cursor-pointer text-[#F7FBFF] text-[15px] leading-[1.65] tracking-[0.01em]">
            {q}
          </summary>

          <p className="pb-7 m-0 text-[#DCEFF5]/74 text-[14px] leading-[2] tracking-[0.01em]">
            {a}
          </p>
        </details>
      ))}
    </div>
  );
}

export default function Okinawa() {
  useLayoutEffect(() => {
    document.body.classList.add("is-okinawa-page");
    return () => document.body.classList.remove("is-okinawa-page");
  }, []);

  return (
    <main
      className={`${styles.pageFx} relative isolate w-full min-h-[100svh] overflow-x-hidden`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifyJsonLd(JSON_LD),
        }}
      />

      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <OkinawaThreeSea className="h-[100svh] w-full" />
      </div>

      <nav
        className="fixed z-30 top-5 left-5 right-5 sm:top-7 sm:left-9 sm:right-9 flex items-center justify-between pointer-events-auto drop-shadow-[0_2px_18px_rgba(0,38,52,0.34)]"
        aria-label="ページナビゲーション"
      >
        <Link
          to="/"
          className="text-[11px] tracking-[0.22em] text-[#F7FBFF]/90 no-underline md:hover:text-[#F7FBFF] transition"
        >
          GUSHIKEN DESIGN
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            to="/works"
            className="text-[10px] tracking-[0.18em] text-[#DCEFF5]/82 md:hover:text-[#F7FBFF] transition"
          >
            WORKS
          </Link>

          <Link
            to="/price"
            className="hidden sm:inline text-[10px] tracking-[0.18em] text-[#DCEFF5]/82 md:hover:text-[#F7FBFF] transition"
          >
            PRICE
          </Link>

          <Link
            to="/contact"
            className="text-[10px] tracking-[0.18em] text-[#F2C77A]/82 md:hover:text-[#F2C77A] transition"
          >
            CONTACT
          </Link>
        </div>
      </nav>

      <section
        className={`relative z-10 ${WRAP} pt-28 sm:pt-32 pb-24 sm:pb-28 text-center`}
        aria-labelledby="okinawa-title"
      >
        <Eyebrow>OKINAWA / LOCAL WEB DESIGN</Eyebrow>

        <h1 className="sr-only">
          沖縄の店舗・サロン向けホームページ制作
        </h1>

        <div id="okinawa-title" className="mt-4" aria-hidden="true">
          <OkinawaWaveTitle />
        </div>

        <div className={`mt-7 ${READ} ${BODY_T} space-y-5`}>
          <p className="m-0">
            沖縄県内の店舗・サロン・個人事業主向けに、
            予約・問い合わせにつながるホームページ制作・LP制作を行っています。
          </p>

          <p className="m-0">
            浦添を拠点に、写真・言葉・導線を「伝わる順番」に整え、
            初めて見る人が迷わず相談できる入口をつくります。
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className={BTN_PRIMARY}>
            沖縄で相談する
          </Link>

          <Link to="/works" className={BTN_SECONDARY}>
            制作例を見る
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-x-3 gap-y-2 text-[10px] tracking-[0.22em] text-[#B8DDE8]/62">
          {AREAS.map((area, index) => (
            <span key={area} className="flex items-center gap-2">
              {index !== 0 ? (
                <span
                  aria-hidden="true"
                  className="inline-block size-[2px] rounded-full bg-[#F2C77A]/45"
                />
              ) : null}
              <span>{area}</span>
            </span>
          ))}
        </div>
      </section>

      <section
        className={`${styles.sectionFx} relative z-10 ${WRAP} ${SECTION_PAD} text-center`}
      >
        <Eyebrow>ANSWER / LOCAL SERVICE</Eyebrow>

        <h2 className={`mt-5 ${READ} ${H2_T}`}>
          沖縄でホームページ制作を依頼できますか？
        </h2>

        <Prose
          paragraphs={[
            "はい。GUSHIKEN DESIGNでは、沖縄県内の店舗・サロン・個人事業主向けにホームページ制作・LP制作を行っています。",
            "浦添を拠点に、那覇・宜野湾・北谷・沖縄市など沖縄本島内の事業者さまを想定し、予約・問い合わせにつながる構成、デザイン、実装まで対応します。",
          ]}
        />
      </section>

      <section
        className={`${styles.sectionFx} relative z-10 ${WRAP} ${SECTION_PAD} text-center`}
      >
        <Eyebrow>01 / LOCAL PROBLEM</Eyebrow>

        <h2 className={`mt-5 ${READ} ${H2_T}`}>
          良い店なのに、Webの入口で止まっている。
        </h2>

        <Prose
          paragraphs={[
            "沖縄には、料理・技術・空間・人柄に魅力がある店がたくさんあります。",
            "でもWebでは、最初の数秒で「自分に合う店か」「予約して大丈夫か」が伝わらないと、比較の中で流されます。",
            "GUSHIKEN DESIGNでは、写真・コピー・余白・導線を整理し、初めて見る人が予約や問い合わせまで進みやすい入口を設計します。",
          ]}
        />

        <NumberRows items={PROBLEMS} />
      </section>

      <section
        className={`${styles.sectionFx} relative z-10 ${WRAP} ${SECTION_PAD} text-center`}
      >
        <Eyebrow>02 / DESIGN FLOW</Eyebrow>

        <h2 className={`mt-5 ${READ} ${H2_T}`}>
          目的から逆算して、必要な分だけ作る。
        </h2>

        <Prose
          paragraphs={[
            "予約・問い合わせ・キャンペーン告知など、目的がひとつならLPが向いています。",
            "店舗紹介・メニュー・実績・記事・お知らせまで広げたい場合は、複数ページのホームページが向いています。",
            "最初に目的、必要なページ、掲載内容、導線を整理し、設計・デザイン・実装・公開まで一貫して進めます。",
          ]}
        />

        <NumberRows items={FLOW} />
      </section>

      <section
        className={`${styles.sectionFx} relative z-10 ${WRAP} ${SECTION_PAD} text-center`}
      >
        <Eyebrow>03 / TARGET</Eyebrow>

        <h2 className={`mt-5 ${READ} ${H2_T}`}>
          沖縄の店舗・サロン・ブランドに向けたWeb制作。
        </h2>

        <Prose
          paragraphs={[
            "テンプレートのような無難なサイトではなく、店の空気や選ばれる理由が伝わるサイトを作ります。",
            "美容室・理容室・飲食店・サロン・観光体験など、印象や世界観が集客に関わる業種と相性が良い制作です。",
          ]}
        />

        <TargetCards />
      </section>

      <section
        className={`${styles.sectionFx} relative z-10 ${WRAP} ${SECTION_PAD} text-center`}
      >
        <Eyebrow>04 / PROOF</Eyebrow>

        <h2 className={`mt-5 ${READ} ${H2_T}`}>
          制作例で、入口の強さを見せる。
        </h2>

        <Prose
          paragraphs={[
            "言葉で説明するより、制作例を見る方が早い場合があります。",
            "沖縄らしい文化表現、ブライダルの空気感、施術系店舗の不安解消など、目的に合わせて見せ方を変えています。",
          ]}
        />

        <FeaturedWorks />

        <div className="mt-10">
          <Link
            to="/works"
            className="text-[#F2C77A]/84 text-[12px] tracking-[0.14em] underline decoration-[#F2C77A]/35 underline-offset-[7px] md:hover:decoration-[#F2C77A]/70 transition"
          >
            すべての制作例を見る
          </Link>
        </div>
      </section>

      <section
        className={`${styles.sectionFx} relative z-10 ${WRAP} ${SECTION_PAD} text-center`}
        aria-labelledby="faq-title"
      >
        <Eyebrow>05 / QUESTIONS</Eyebrow>

        <h2 id="faq-title" className={`mt-5 ${READ} ${H2_T}`}>
          相談前の不安だけ、先にほどく。
        </h2>

        <FaqBlock />
      </section>

      <section
        className={`${styles.sectionFx} relative z-10 ${WRAP} py-24 sm:py-32 text-center`}
      >
        <Eyebrow>CONTACT</Eyebrow>

        <h2 className="mt-5 mx-auto w-full max-w-[760px] text-[#F7FBFF] font-semibold tracking-[-0.025em] text-[clamp(25px,2.9vw,40px)] leading-[1.25]">
          沖縄の店に、選ばれる入口を。
        </h2>

        <Prose
          paragraphs={[
            "いまのサイトやSNSを見て、「どこで損しているか」から整理できます。",
            "新規制作・リニューアル・LP制作の相談など、まずは現状を共有してください。",
          ]}
        />

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/contact" className={BTN_PRIMARY}>
            相談する
          </Link>

          <Link to="/online" className={BTN_SECONDARY}>
            全国オンライン対応を見る
          </Link>
        </div>
      </section>
    </main>
  );
}