// src/pages/entry/KouRyuiEntry.jsx
import { Link } from "react-router-dom";

const SITE_URL = "https://kouryui.vercel.app/";
const HERO_PC = "/works/kouryui.webp";
const HERO_SP = "/works/kouryui1sp.webp";

const GUSHIKEN_URL = "https://gushikendesign.com";
const PAGE_PATH = "/works/kou-ryui";

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
  ],
};

export default function KouRyuiEntry() {
  return (
    <article className="relative isolate min-h-[100svh] text-[#120e0c]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c"),
        }}
      />

      {/* 背景（bodyを触らない・固定レイヤーで上書き） */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(1200px 680px at 18% -10%, rgba(255,255,255,.86), transparent 58%),
            radial-gradient(980px 700px at 82% 10%, rgba(165, 40, 58, .18), transparent 60%),
            radial-gradient(920px 640px at 70% 92%, rgba(70, 110, 160, .10), transparent 62%),
            radial-gradient(780px 520px at 18% 78%, rgba(190, 155, 90, .10), transparent 62%),
            linear-gradient(180deg, #f7f1ea 0%, #fffaf4 55%, #f6efe7 100%)
          `,
        }}
        aria-hidden="true"
      />

      {/* =========================
          STAGE（Hero）
      ========================= */}
      <header
        className="
          relative z-10 pt-[96px] pb-[64px] bg-transparent aq-fade
          max-[880px]:pt-[72px] max-[880px]:pb-[44px]
        "
      >
        <div className="mx-auto w-[min(1120px,calc(100%-56px))] max-[880px]:w-[calc(100%-36px)]">
          {/* hero frame */}
          <div className="relative overflow-hidden rounded-[8px] border border-[rgba(255,250,241,.18)] bg-[rgba(16,16,18,.32)]">
            <picture>
              <source media="(max-width: 880px)" srcSet={HERO_SP} />

              <img
                src={HERO_PC}
                alt="琉装体験・沖縄文化体験向けWebサイト制作事例 KOU RYUIのキービジュアル"
                className="
                  block w-full
                  h-[clamp(460px,60vh,700px)]
                  max-[880px]:h-[clamp(340px,46vh,520px)]
                  object-cover object-[center_38%]
                  opacity-[0.96]
                  [filter:saturate(1.06)_contrast(1.02)_brightness(1.02)]
                "
                loading="eager"
              />
            </picture>

            {/* veil */}
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

            {/* ink accents */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  radial-gradient(ellipse at 82% 18%, rgba(165,40,58,.16), rgba(165,40,58,0) 44%),
                  radial-gradient(ellipse at 18% 20%, rgba(190,155,90,.10), rgba(190,155,90,0) 46%)
                `,
              }}
              aria-hidden="true"
            />
          </div>

          {/* copy */}
          <div className="mt-[34px]">
            <p className="m-0 text-[12px] tracking-[.22em] text-[rgba(165,40,58,.78)]">
              CONCEPT SITE
            </p>

            <h1 className="mt-[14px] font-serif text-[clamp(28px,3.4vw,44px)] leading-[1.18] tracking-[.06em] text-[rgba(18,14,12,.92)]">
              琉装体験を、
              <br />
              旅の記憶として
              <br />
              予約できる入口へ。
            </h1>

            <p className="mt-[14px] text-[13px] leading-[1.9] tracking-[.08em] text-[rgba(18,14,12,.70)]">
              KOU RYUI（紅琉衣）は、琉装体験・沖縄文化体験を想定したWebサイト制作事例です。
              <br />
              写真の華やかさだけでなく、旅行中に必要な判断材料を“使う順番”に整えています。
            </p>

            <div className="mt-[16px] flex flex-wrap gap-x-[14px] gap-y-[10px] text-[12px] tracking-[.14em] text-[rgba(18,14,12,.58)]">
              <span>琉装体験</span>
              <span>手ぶらOK</span>
              <span>所要時間</span>
              <span>那覇・国際通り</span>
            </div>
          </div>
        </div>

        {/* stage fade */}
        <div
          className="mt-[28px] h-[42px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0), rgba(247,241,234,1) 70%, rgba(247,241,234,1))",
          }}
          aria-hidden="true"
        />
      </header>

      {/* =========================
          PAPER（Body）
      ========================= */}
      <main className="relative z-10">
        <div className="mx-auto w-[min(1120px,calc(100%-56px))] max-[880px]:w-[calc(100%-36px)]">
          <div className="pt-[34px] pb-[calc(clamp(140px,14vw,210px)+env(safe-area-inset-bottom))]">
            {/* block: aim */}
            <section className="aq-fade border-t border-[rgba(18,14,12,.10)] first:border-t-0 px-[22px] py-[26px] max-[880px]:px-[16px] max-[880px]:py-[22px]">
              <h2 className="m-0 font-serif text-[18px] tracking-[.10em] text-[rgba(18,14,12,.90)]">
                狙い
              </h2>

              <p className="mt-[12px] mb-0 text-[13px] leading-[2.0] tracking-[.08em] text-[rgba(18,14,12,.68)]">
                旅先では、迷いがひとつ残るだけで予約は止まる。
                <br />
                「料金は？」「所要時間は？」「手ぶらで行ける？」「場所は分かる？」「当日でも相談できる？」
                <br />
                その不安が残ったままだと、写真が綺麗でも予約には進まない。
                <br />
                だからKOU RYUIは、沖縄らしい華やかさを残しながら、予約前に必要な情報を“使う順番”に揃えた。
              </p>
            </section>

            {/* block: 3 */}
            <section className="aq-fade border-t border-[rgba(18,14,12,.10)] px-[22px] py-[26px] max-[880px]:px-[16px] max-[880px]:py-[22px]">
              <h2 className="m-0 font-serif text-[18px] tracking-[.10em] text-[rgba(18,14,12,.90)]">
                やったことは3つ
              </h2>

              <div className="mt-[16px] grid gap-[14px]">
                {[
                  {
                    no: "01",
                    title: "入口で“体験したい”を作る",
                    text: "写真と余白、紅と金の印象を立てて、旅の一枠として気持ちが切り替わるようにした。",
                  },
                  {
                    no: "02",
                    title: "料金・所要時間・持ち物を探させない",
                    text: "手ぶらOK／所要時間／場所／当日の流れ。\n旅行中の人が判断に使う情報を、先に見える位置へ整理した。",
                  },
                  {
                    no: "03",
                    title: "スマホで予約導線が切れない構造にする",
                    text: "観光中はスマホで判断される。\n途中で不安が戻らないように、確認から予約までの流れを短く整えた。",
                  },
                ].map((it) => (
                  <div
                    key={it.no}
                    className="grid grid-cols-[44px_1fr] gap-[14px] border-t border-[rgba(18,14,12,.10)] first:border-t-0 py-[14px]"
                  >
                    <p className="m-0 font-serif text-[14px] tracking-[.18em] text-[rgba(165,40,58,.78)]">
                      {it.no}
                    </p>

                    <div>
                      <p className="m-0 font-serif text-[15px] tracking-[.10em] text-[rgba(18,14,12,.88)]">
                        {it.title}
                      </p>

                      <p className="mt-[8px] mb-0 text-[13px] leading-[2.0] tracking-[.08em] text-[rgba(18,14,12,.66)] whitespace-pre-line">
                        {it.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* block: user */}
            <section className="aq-fade border-t border-[rgba(18,14,12,.10)] px-[22px] py-[26px] max-[880px]:px-[16px] max-[880px]:py-[22px]">
              <h2 className="m-0 font-serif text-[18px] tracking-[.10em] text-[rgba(18,14,12,.90)]">
                想定ユーザー
              </h2>

              <p className="mt-[12px] mb-0 text-[13px] leading-[2.0] tracking-[.08em] text-[rgba(18,14,12,.68)]">
                「旅行中に、一枠だけ印象に残る体験を入れたい」人。
                <br />
                初めてで不安がある、手ぶらで行けるか知りたい、所要時間や場所をすぐ確認したい。
                <br />
                その人が、迷わず予約まで進める状態をつくる。
              </p>

              <div className="mt-[18px] pt-[16px] border-t border-[rgba(18,14,12,.10)]">
                <p className="m-0 text-[12px] tracking-[.18em] text-[rgba(18,14,12,.52)]">
                  制作担当範囲
                </p>

                <p className="mt-[10px] mb-0 text-[13px] tracking-[.10em] text-[rgba(18,14,12,.70)]">
                  企画 / 構成 / デザイン / 実装（コンセプトサイト）
                </p>
              </div>
            </section>

            {/* actions */}
            <div className="aq-fade border-t border-[rgba(18,14,12,.10)] px-[22px] pt-[20px] pb-[26px] max-[880px]:px-[16px] max-[880px]:pt-[18px] max-[880px]:pb-[22px]">
              <div className="flex items-center justify-between gap-[18px] flex-wrap">
                <Link
                  className="text-[12px] tracking-[.16em] text-[rgba(18,14,12,.58)] border-b border-[rgba(18,14,12,.26)] pb-[8px]"
                  to="/works"
                >
                  WORKSへ戻る
                </Link>

                <a
                  className="text-[13px] tracking-[.16em] text-[rgba(18,14,12,.88)] pb-[10px] border-b"
                  style={{
                    borderImage:
                      "linear-gradient(90deg, rgba(165,40,58,.86), rgba(165,40,58,0)) 1",
                  }}
                  href={SITE_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  KOU RYUI を開く <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </article>
  );
}