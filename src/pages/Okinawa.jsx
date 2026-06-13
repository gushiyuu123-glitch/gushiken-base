// src/pages/Okinawa.jsx
import React, { useLayoutEffect } from "react";
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
    text: "新規予約、メニュー、雰囲気、スタッフの魅力を伝えるサイト設計。",
  },
  {
    name: "飲食・カフェ・バー",
    text: "料理・空間・場所の印象を、来店や予約につながる入口へ整える。",
  },
  {
    name: "サロン・施術系店舗",
    text: "世界観、施術内容、不安解消を一つの流れで伝える。",
  },
  {
    name: "観光・体験サービス",
    text: "沖縄らしさ、写真、体験価値を、問い合わせにつながる形にする。",
  },
];

const FEATURED_WORKS = [
  {
    name: "YORISOI Hair & Spa",
    label: "浦添・メンズ専門理容室",
    to: "/works/yorisoi",
  },
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
];

const FAQS = [
  {
    q: "沖縄県内で対面の打ち合わせはできますか？",
    a: "はい。浦添を拠点に、那覇・宜野湾・北谷・沖縄市など沖縄本島内の事業者さまを想定しています。内容によってはオンライン相談と組み合わせて進めることもできます。",
  },
  {
    q: "LPとホームページ、どちらが向いていますか？",
    a: "予約・問い合わせ・キャンペーンなど目的がひとつならLP、店舗紹介・メニュー・実績・記事など情報を広げたい場合は複数ページのホームページが向いています。最初に目的を整理してから提案します。",
  },
  {
    q: "写真や文章がまだ揃っていなくても相談できますか？",
    a: "相談できます。必要な写真・文章・掲載情報を先に整理し、足りない素材がある場合は優先順位を決めながら進めます。SNSや既存サイトがある場合は、そこから現状を確認できます。",
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
const READ = "mx-auto w-full max-w-[720px]";
const SECTION_PAD = "py-20 sm:py-28";

const H2_T =
  "text-white/95 font-semibold tracking-[-0.025em] text-[clamp(22px,2.4vw,32px)] leading-[1.32]";
const BODY_T =
  "text-white/80 text-[clamp(14px,1.1vw,16px)] leading-[2.15] tracking-[0.01em]";

const BTN_PRIMARY =
  "inline-flex items-center justify-center h-11 px-7 no-underline text-[12px] tracking-[0.14em] transition bg-white/12 border border-white/24 text-white/95 md:hover:bg-white/18 md:hover:border-white/38";

const BTN_SECONDARY =
  "inline-flex items-center justify-center h-11 px-7 no-underline text-[12px] tracking-[0.14em] transition bg-transparent border border-white/18 text-white/80 md:hover:text-white/95 md:hover:border-white/34";

const Eyebrow = ({ children }) => (
  <p
    className="m-0 text-[11px] tracking-[0.28em] text-white/50"
    aria-hidden="true"
  >
    {children}
  </p>
);

const Prose = ({ paragraphs }) => (
  <div className={`mt-7 ${READ} ${BODY_T} space-y-5`}>
    {paragraphs.map((t, i) => (
      <p key={i} className="m-0">
        {t}
      </p>
    ))}
  </div>
);

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
          __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c"),
        }}
      />

      {/* Three背景 */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <OkinawaThreeSea className="h-[100svh] w-full" />
      </div>

      {/* ページ内ナビ */}
      <nav
        className="fixed z-30 top-5 left-5 right-5 sm:top-7 sm:left-9 sm:right-9
                   flex items-center justify-between pointer-events-auto
                   drop-shadow-[0_2px_18px_rgba(0,38,52,0.34)]"
        aria-label="ページナビゲーション"
      >
        <Link
          to="/"
          className="text-[11px] tracking-[0.22em] text-white/88 no-underline md:hover:text-white transition"
        >
          GUSHIKEN DESIGN
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            to="/works"
            className="text-[10px] tracking-[0.18em] text-white/80 md:hover:text-white/95 transition"
          >
            WORKS
          </Link>

          <Link
            to="/price"
            className="hidden sm:inline text-[10px] tracking-[0.18em] text-white/80 md:hover:text-white/95 transition"
          >
            PRICE
          </Link>

          <Link
            to="/contact"
            className="text-[10px] tracking-[0.18em] text-white/80 md:hover:text-white/95 transition"
          >
            CONTACT
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section
        className={`relative z-10 ${WRAP} pt-28 sm:pt-32 pb-24 sm:pb-28 text-center`}
        aria-labelledby="okinawa-title"
      >
        <Eyebrow>OKINAWA / LOCAL WEB DESIGN</Eyebrow>

        <div id="okinawa-title" className="mt-4">
          <OkinawaWaveTitle />
        </div>

        <div className={`mt-7 ${READ} ${BODY_T} space-y-5`}>
          <p className="m-0">
            沖縄県内の店舗・サロン・個人事業主向けに、予約・問い合わせにつながる
            ホームページ制作・LP制作を行っています。
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

        <div className="mt-10 flex flex-wrap justify-center gap-x-3 gap-y-2 text-[10px] tracking-[0.22em] text-white/50">
          {AREAS.map((a, i) => (
            <span key={a} className="flex items-center gap-2">
              {i !== 0 && (
                <span
                  aria-hidden="true"
                  className="inline-block size-[2px] rounded-full bg-white/35"
                />
              )}
              <span>{a}</span>
            </span>
          ))}
        </div>
      </section>

      {/* 01 */}
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
      </section>

      {/* 02 */}
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
      </section>

      {/* 03 */}
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

        <ul
          className="mt-12 mx-auto w-full max-w-[880px]
                     grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3
                     list-none p-0 text-left"
          aria-label="対応業種"
        >
          {TARGETS.map(({ name, text }) => (
            <li
              key={name}
              className="border border-white/15 bg-white/[0.055] backdrop-blur-[2px]
                         px-5 py-5 min-h-[154px]"
            >
              <h3 className="m-0 text-white/90 text-[14px] tracking-[0.08em] leading-[1.6]">
                {name}
              </h3>
              <p className="mt-4 mb-0 text-white/63 text-[13px] leading-[1.85]">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* 04 */}
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
            "沖縄らしい文化表現、ブライダルの空気感、店舗の予約導線など、目的に合わせて見せ方を変えています。",
          ]}
        />

        <div
          className="mt-10 mx-auto w-full max-w-[760px]
                     grid grid-cols-1 sm:grid-cols-3 gap-3 text-left"
        >
          {FEATURED_WORKS.map(({ name, label, to }) => (
            <Link
              key={name}
              to={to}
              className="group block no-underline border border-white/15 bg-white/[0.055]
                         px-5 py-5 transition md:hover:bg-white/[0.09] md:hover:border-white/28"
            >
              <p className="m-0 text-white/92 text-[14px] tracking-[0.08em] leading-[1.5]">
                {name}
              </p>

              <p className="mt-3 mb-0 text-white/50 text-[12px] leading-[1.7]">
                {label}
              </p>

              <span
                className="mt-5 inline-block text-white/70 text-[11px] tracking-[0.16em]
                           underline decoration-white/25 underline-offset-[6px]
                           group-hover:decoration-white/55"
              >
                VIEW
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/works"
            className="text-white/85 text-[12px] tracking-[0.14em]
                       underline decoration-white/35 underline-offset-[7px]
                       md:hover:decoration-white/60 transition"
          >
            すべての制作例を見る
          </Link>
        </div>
      </section>

      {/* 05 FAQ */}
      <section
        className={`${styles.sectionFx} relative z-10 ${WRAP} ${SECTION_PAD} text-center`}
        aria-labelledby="faq-title"
      >
        <Eyebrow>05 / QUESTIONS</Eyebrow>

        <h2 id="faq-title" className={`mt-5 ${READ} ${H2_T}`}>
          相談前の不安だけ、先にほどく。
        </h2>

        <div className="mt-12 mx-auto w-full max-w-[760px] border-t border-white/20 text-left">
          {FAQS.map(({ q, a }) => (
            <details
              key={q}
              className={`${styles.faqItem} border-b border-white/15`}
            >
              <summary className="py-6 cursor-pointer text-white/90 text-[15px] leading-[1.65] tracking-[0.01em]">
                {q}
              </summary>

              <p className="pb-7 m-0 text-white/70 text-[14px] leading-[2] tracking-[0.01em]">
                {a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        className={`${styles.sectionFx} relative z-10 ${WRAP} py-24 sm:py-32 text-center`}
      >
        <Eyebrow>CONTACT</Eyebrow>

        <h2
          className={`mt-5 ${READ} text-white/95 font-semibold tracking-[-0.025em]
                      text-[clamp(24px,2.8vw,38px)] leading-[1.25]`}
        >
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