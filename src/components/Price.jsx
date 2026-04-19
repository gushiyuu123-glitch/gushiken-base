import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./price.css";

/* ===== 制作フロー ＋ 全プラン共通 ===== */
function PriceVisual() {
  const FLOW = [
    { num: "01", label: "ヒアリング",  sub: "ご相談・要件確認",   gold: false },
    { num: "02", label: "デザイン",    sub: "方向性・制作",       gold: false },
    { num: "03", label: "実装・確認",  sub: "コーディング・修正", gold: false },
    { num: "04", label: "納品・公開",  sub: "設定サポート込み",   gold: true  },
  ];

  const INCLUDES = [
    { label: "オリジナルデザイン",     full: true  },
    { label: "スマホ対応",             full: true  },
    { label: "公開初期設定",           full: true  },
    { label: "ドメイン接続サポート",   full: true  },
    { label: "運用・保守",             full: false },
  ];

  return (
    <div className="aq-fade delay-4 mb-12 sm:mb-14">

      {/* ── 制作の流れ ── */}
      <p className="text-white/25 text-[0.68rem] tracking-[0.22em] mb-7 uppercase">
        ― 制作の流れ ―
      </p>

      <div className="relative flex items-start justify-between">
        {/* 背面ライン */}
        <div
          className="absolute top-[8px] left-[8px] right-[8px] h-px"
          style={{ background: "rgba(255,255,255,0.09)" }}
        />

        {FLOW.map(({ num, label, sub, gold }) => (
          <div key={num} className="relative z-10 flex-1 text-center">
            <div
              className="w-[17px] h-[17px] rounded-full mx-auto mb-[14px]"
              style={{
                background: gold ? "#1e1a12" : "#1a1a1a",
                border: `1px solid ${
                  gold ? "rgba(201,169,110,0.60)" : "rgba(255,255,255,0.22)"
                }`,
              }}
            />
            <p
              className="text-[0.68rem] tracking-[0.14em] mb-[5px]"
              style={{
                color: gold ? "rgba(201,169,110,0.50)" : "rgba(255,255,255,0.22)",
              }}
            >
              {num}
            </p>
            <p
              className="text-[0.75rem] sm:text-[0.78rem] tracking-[0.1em] mb-[4px] leading-[1.5]"
              style={{
                color: gold ? "rgba(201,169,110,0.75)" : "rgba(255,255,255,0.55)",
              }}
            >
              {label}
            </p>
            <p
              className="text-[0.62rem] sm:text-[0.65rem] tracking-[0.08em] leading-[1.5]"
              style={{
                color: gold ? "rgba(201,169,110,0.35)" : "rgba(255,255,255,0.22)",
              }}
            >
              {sub}
            </p>
          </div>
        ))}
      </div>

      {/* divider */}
      <div
        className="h-px my-8 sm:my-9"
        style={{ background: "rgba(255,255,255,0.06)" }}
      />

      {/* ── 全プラン共通 ── */}
      <p className="text-white/25 text-[0.68rem] tracking-[0.22em] mb-5 uppercase">
        ― 全プラン共通 ―
      </p>

      <div className="flex flex-col gap-[13px]">
        {INCLUDES.map(({ label, full }) => (
          <div key={label} className="flex items-center gap-4">
            <span
              className="text-[0.75rem] tracking-[0.1em] flex-shrink-0 text-right"
              style={{
                width: "7.5rem",
                color: full ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.30)",
              }}
            >
              {label}
            </span>

            <div
              className="flex-1 h-px relative"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              <div
                className="absolute left-0 top-[-1.5px] h-[3px] rounded-[1px]"
                style={{
                  width: full ? "100%" : "40%",
                  background: full
                    ? "rgba(255,255,255,0.38)"
                    : "rgba(201,169,110,0.42)",
                }}
              />
            </div>

            <span
              className="text-[0.68rem] tracking-[0.1em] flex-shrink-0 text-right"
              style={{
                width: "2.2rem",
                color: full ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.22)",
              }}
            >
              {full ? "含む" : "別途"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Price() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.add("aq-show");
        el.querySelectorAll(".aq-fade").forEach((x) => {
          x.classList.add("aq-show");
        });
        io.unobserve(el);
      },
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="price" ref={sectionRef} className="price-section aq-fade">
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="price-gold-line" />

        {/* ===== PAGE TITLE ===== */}
        <h2
          translate="no"
          className="
            price-title aq-fade delay-1
            text-[2.2rem] sm:text-[2.4rem]
            tracking-[0.22em]
            text-white font-light
          "
        >
          PRICE
        </h2>

        {/* ===== SECTION TITLE ===== */}
        <h3
          className="
            price-section-title aq-fade delay-1
            mb-10
            text-[1.05rem]
            tracking-[0.18em]
            text-white/80
          "
        >
          料金プラン / PRICING PLANS
        </h3>

        {/* LEAD / PC */}
        <div className="hidden sm:block">
          <p className="price-philosophy aq-fade delay-2">
            料金の目安と進め方を、
            <br />
            初めての方にも分かりやすくご案内しています。
          </p>

          <p className="price-lead aq-fade delay-3">
            ご相談前に、
            <strong>「総額」「納品内容」「公開までの流れ」</strong>
            を事前にご確認いただけます。
          </p>
        </div>

        {/* LEAD / SP */}
        <div className="block sm:hidden">
          <p className="price-philosophy aq-fade delay-2">
            料金の目安と進め方を、
            <br />
            初めての方にも
            <br />
            分かりやすくご案内しています。
          </p>

          <p className="price-lead aq-fade delay-3">
            ご相談前に、
            <br />
            <strong>
              「総額」「納品内容」
              <br />
              「公開までの流れ」
            </strong>
            を事前にご確認いただけます。
          </p>
        </div>

        {/* ── Visual ── */}
        <PriceVisual />

        {/* PLAN 01〜03 */}
        <div className="price-grid top-plans aq-fade delay-5">
          <PriceCard
            label="PLAN 01"
            title="Landing Page（1ページ）"
            price="¥60,000〜"
            desc="商品やサービスの魅力を、1ページで端的に伝えたい方向けのプランです。まずは必要な情報を整理し、すっきりと公開したい方におすすめです。"
            includes={[
              "オリジナルデザイン",
              "スマホ対応",
              "公開初期設定",
              "ドメイン / サーバー接続サポート",
            ]}
          />

          <PriceCard
            label="PLAN 02"
            title="Small Website（小規模サイト）"
            price="¥120,000〜"
            desc="トップページと下層ページを通して、お店やサービスの内容をきちんと伝えたい方向けのプランです。店舗・サロン・小規模事業のサイトにおすすめです。"
            includes={[
              "トップ + 下層2〜4ページ",
              "スマホ対応",
              "公開初期設定",
              "ドメイン / サーバー接続サポート",
            ]}
          />

          <PriceCard
            label="PLAN 03"
            title="Brand Site（世界観重視）"
            price="¥240,000〜"
            desc="写真・色・余白まで丁寧に整えながら、ブランド全体の印象と信頼感を深く伝えるプランです。世界観を大切にしたい方におすすめです。"
            includes={[
              "世界観設計",
              "複数ページ対応",
              "スマホ対応",
              "公開初期設定 / 接続サポート",
            ]}
          />
        </div>

        {/* PLAN 04 */}
        <div className="special-plan aq-fade delay-6">
          <div className="price-card price-card-special">
            <p className="price-card-label">PLAN 04</p>
            <h3 className="price-card-title">
              Maintenance / Subscription（運用・保守）
            </h3>
            <p className="price-card-price">¥9,800 / 月</p>
            <p className="price-card-desc">
              文言や写真の差し替え、軽微な修正など、
              <strong>サイトの印象を保ちながら継続的に整える</strong>
              ための運用プランです。
            </p>
          </div>
        </div>

        {/* NOTE / PC */}
        <div className="hidden sm:block">
          <p className="price-note aq-fade delay-7">
            ドメイン代・サーバー代は実費です。
            <br />
            公開に必要な初期設定や接続サポートは、料金内で対応します。
          </p>
        </div>

        {/* NOTE / SP */}
        <div className="block sm:hidden">
          <p className="price-note aq-fade delay-7">
            ドメイン代・サーバー代は
            <br />
            実費です。
            <br />
            <br />
            公開に必要な初期設定や
            <br />
            接続サポートは、
            <br />
            料金内で対応します。
          </p>
        </div>

        {/* CTA */}
        <div className="price-cta aq-fade delay-8 mt-16">
          <Link to="/price" className="price-btn">
            料金の詳細を見る →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ===== Price Card ===== */
const PriceCard = React.memo(function PriceCard({
  label,
  title,
  desc,
  price,
  includes = [],
}) {
  return (
    <div className="price-card">
      <p className="price-card-label">{label}</p>
      <h3 className="price-card-title">{title}</h3>
      <p className="price-card-price">{price}</p>
      <p className="price-card-desc">{desc}</p>

      {includes.length > 0 && (
        <ul className="mt-5 space-y-2 text-[0.72rem] leading-[1.9] tracking-[0.08em] text-white/54">
          {includes.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-[0.55em] h-[3px] w-[3px] rounded-full bg-[#cdbd8f]/65" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});