// src/pages/Okinawa.jsx
import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import OkinawaThreeSea from "../visuals/OkinawaThreeSea";
import OkinawaWaveTitle from "../components/OkinawaWaveTitle";
import styles from "./Okinawa.module.css";

const AREAS = ["URASOE", "NAHA", "GINOWAN", "CHATAN", "OKINAWA"];

const TARGETS = [
  "飲食",
  "美容室",
  "サロン",
  "タトゥー",
  "観光",
  "ブライダル",
  "アパレル",
  "スタジオ",
];

const FAQS = [
  {
    q: "沖縄県内の店舗向けですか？",
    a: "沖縄県内の実店舗を中心に対応しています。浦添を拠点に、那覇・宜野湾・北谷・沖縄市などのHP・LP制作を想定しています。",
  },
  {
    q: "LPとホームページ、どちらが向いていますか？",
    a: "予約・問い合わせなど目的がひとつならLP、店舗紹介やメニュー、実績、記事などを広げたい場合は複数ページのHPが向いています。",
  },
  {
    q: "料金はどう決まりますか？",
    a: "最初にページ数・掲載内容・導線・必要な機能を整理し、作る範囲で決めます。あとから無駄に膨らまないよう、先に範囲を決めて進めます。",
  },
];

const WRAP = "mx-auto w-full max-w-[980px] px-6 sm:px-8";
const READ = "mx-auto w-full max-w-[700px]";
const SECTION_PAD = "py-20 sm:py-28";

const H2_T =
  "text-white/95 font-semibold tracking-[-0.025em] text-[clamp(20px,2.2vw,27px)] leading-[1.32]";
const BODY_T =
  "text-white/80 text-[clamp(14px,1.1vw,16px)] leading-[2.18] tracking-[0.01em]";

const BTN_PRIMARY =
  "inline-flex items-center justify-center h-11 px-7 no-underline text-[12px] tracking-[0.14em] transition bg-white/10 border border-white/20 text-white/95 md:hover:bg-white/15 md:hover:border-white/35";

const Eyebrow = ({ children }) => (
  <p className="m-0 text-[11px] tracking-[0.28em] text-white/50" aria-hidden="true">
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
  // ✅ bodyクラスは“紙グレイン停止/色スキーム”だけに使う（header/footerはLayoutで非描画）
  useLayoutEffect(() => {
    document.body.classList.add("is-okinawa-page");
    return () => document.body.classList.remove("is-okinawa-page");
  }, []);

  return (
    <main className={`${styles.pageFx} relative isolate w-full min-h-[100svh] overflow-x-hidden`}>
      {/* Three背景はクリック無効 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <OkinawaThreeSea className="h-[100svh] w-full" />
      </div>

      {/* ページ内ナビ（子島用の最小） */}
      <nav
        className="fixed z-30 top-5 left-5 right-5 sm:top-7 sm:left-9 sm:right-9
                   flex items-center justify-between pointer-events-auto
                   drop-shadow-[0_2px_18px_rgba(0,38,52,0.34)]"
        aria-label="ページナビゲーション"
      >
        <Link to="/" className="text-[11px] tracking-[0.22em] text-white/85 no-underline">
          GUSHIKEN DESIGN
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <Link to="/works" className="text-[10px] tracking-[0.18em] text-white/80 md:hover:text-white/95 transition">
            WORKS
          </Link>
          <Link to="/contact" className="text-[10px] tracking-[0.18em] text-white/80 md:hover:text-white/95 transition">
            CONTACT
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className={`relative z-10 ${WRAP} pt-28 sm:pt-32 pb-24 sm:pb-28 text-center`} aria-labelledby="okinawa-title">
        <Eyebrow>OKINAWA / WEB DESIGN & DEVELOPMENT</Eyebrow>

        {/* ✅ h1ネスト回避：外側はdiv（WaveTitleがh1を返してもOK） */}
        <div id="okinawa-title" className="mt-4">
          <OkinawaWaveTitle />
        </div>

        <div className={`mt-7 ${READ} ${BODY_T} space-y-5`}>
          <p className="m-0">沖縄の実店舗に、予約・問い合わせまで迷わせない「入口」をつくります。</p>
          <p className="m-0">写真・言葉・導線を「決まる順番」に整え、判断を軽くします。</p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-x-3 gap-y-2 text-[10px] tracking-[0.22em] text-white/50">
          {AREAS.map((a, i) => (
            <span key={a} className="flex items-center gap-2">
              {i !== 0 && <span aria-hidden className="inline-block size-[2px] rounded-full bg-white/35" />}
              <span>{a}</span>
            </span>
          ))}
        </div>
      </section>

      {/* 01 */}
      <section className={`${styles.sectionFx} relative z-10 ${WRAP} ${SECTION_PAD} text-center`}>
        <Eyebrow>01 / ENTRANCE</Eyebrow>
        <h2 className={`mt-5 ${READ} ${H2_T}`}>入口で、店の価値が止まっている。</h2>
        <Prose
          paragraphs={[
            "良い店ほど、「中身」はもう出来ています。",
            "でもWebでは、最初の数秒で伝わらないと、無いものとして扱われます。",
            "写真・言葉・余白・導線を、迷わず進める順番に組み直して、「予約や問い合わせまでの距離」を短くします。",
          ]}
        />
      </section>

      {/* 02 */}
      <section className={`${styles.sectionFx} relative z-10 ${WRAP} ${SECTION_PAD} text-center`}>
        <Eyebrow>02 / DEFINE</Eyebrow>
        <h2 className={`mt-5 ${READ} ${H2_T}`}>目的から逆算して、必要な分だけ作る。</h2>
        <Prose
          paragraphs={[
            "予約が目的なら、1ページで迷いを消すLP。",
            "情報を積み上げるなら、知りたい順に辿り着ける複数ページのHP。",
            "先に「作る範囲」を決めて、無駄に膨らまないよう整えます。設計 → デザイン → 実装 → 公開まで一貫して対応します。",
          ]}
        />
      </section>

      {/* 03 */}
      <section className={`${styles.sectionFx} relative z-10 ${WRAP} ${SECTION_PAD} text-center`}>
        <Eyebrow>03 / PROOF</Eyebrow>
        <h2 className={`mt-5 ${READ} ${H2_T}`}>実例で、入口の強さを見せる。</h2>
        <Prose
          paragraphs={[
            "制作例は、言葉より早い。",
            "子島の役目は「信用の入口」をつくることです。",
            "代表例：",
          ]}
        />

        {/* ボタンじゃなく“軽い内部リンク”で子島らしく回遊 */}
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[12px] tracking-[0.10em] text-white/85">
          <Link to="/works/vow-in-light" className="underline decoration-white/30 underline-offset-[6px] md:hover:decoration-white/60 transition">
            Vow in Light
          </Link>
          <Link to="/works/kou-ryui" className="underline decoration-white/30 underline-offset-[6px] md:hover:decoration-white/60 transition">
            KOU RYUI
          </Link>
        </div>

        <ul
          className="mt-12 mx-auto w-full max-w-[700px]
                     grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4
                     list-none p-0 text-center"
          aria-label="対応業種"
        >
          {TARGETS.map((t) => (
            <li key={t} className="border-t border-white/20 pt-3 text-white/75 text-[13px] tracking-[0.08em]">
              {t}
            </li>
          ))}
        </ul>
      </section>

      {/* 04 FAQ */}
      <section className={`${styles.sectionFx} relative z-10 ${WRAP} ${SECTION_PAD} text-center`} aria-labelledby="faq-title">
        <Eyebrow>04 / QUESTIONS</Eyebrow>
        <h2 id="faq-title" className={`mt-5 ${READ} ${H2_T}`}>相談前の不安だけ、先にほどく。</h2>

        <div className="mt-12 mx-auto w-full max-w-[700px] border-t border-white/20 text-left">
          {FAQS.map(({ q, a }) => (
            <details key={q} className={`${styles.faqItem} border-b border-white/15`}>
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

      {/* CONTACT：ボタンは最下部だけ */}
      <section className={`${styles.sectionFx} relative z-10 ${WRAP} py-24 sm:py-32 text-center`}>
        <Eyebrow>CONTACT</Eyebrow>

        <h2
          className={`mt-5 ${READ} text-white/95 font-semibold tracking-[-0.025em]
                      text-[clamp(22px,2.6vw,34px)] leading-[1.25]`}
        >
          入口を整えるだけで、決まり方が変わる。
        </h2>

        <Prose
          paragraphs={[
            "いまのサイトやSNSを見て、「どこで損しているか」から整理できます。",
            "まずは現状を共有してください。",
          ]}
        />

        <div className="mt-12 flex flex-col items-center">
          <Link to="/contact" className={BTN_PRIMARY}>
            相談する
          </Link>

          <Link
            to="/works"
            className="mt-5 text-white/85 text-[12px] tracking-[0.14em]
                       underline decoration-white/35 underline-offset-[7px]
                       md:hover:decoration-white/60 transition"
            aria-label="制作例（WORKS）を見る"
          >
            制作例を見る
          </Link>
        </div>
      </section>
    </main>
  );
}