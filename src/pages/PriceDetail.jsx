// src/pages/PriceDetail.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SectionSvgTitle from "../components/SectionSvgTitle";
import "./priceDetail.css";

const PAGE_TITLE = "料金の詳細｜GUSHIKEN DESIGN";
const PAGE_DESCRIPTION =
  "沖縄を拠点に、商品・空間・サービスの印象を上質に伝えるWeb制作を行っています。LP／小規模サイト／印象重視サイト／運用保守の料金目安、制作の流れ、お支払い、追加オプションをご案内します。";

const CANONICAL_URL = "https://gushikendesign.com/price";

const WORKS_PATH = "/works";
const CONTACT_PATH = "/contact";

const PLANS = [
  {
    badge: "01",
    title: "Landing Page",
    jp: "1ページ構成",
    price: "60,000",
    detail:
      "サービスや商品の魅力を、1ページで端的に伝えるプランです。まず公開したい、必要最小限で“ちゃんと見える”状態を作りたい、という段階に向いています。",
    bestFor: "「まず一枚、上質に見せる土台を作りたい」という方へ。",
    includes: ["1ページ構成", "構成提案（簡易）", "デザイン＋実装", "フォーム（簡易）"],
    note: "※ ページ追加・撮影・長文ライティングは別途。",
  },
  {
    badge: "02",
    title: "Small Website",
    jp: "小規模サイト",
    price: "120,000",
    detail:
      "事業の内容・強み・実績などを、複数ページで整理して伝えるプランです。「ちゃんとしてる感」「安心して問い合わせできる情報設計」を最優先に組み立てます。",
    bestFor: "「紹介されても恥ずかしくない“名刺サイト”を作りたい」方へ。",
    includes: ["複数ページ（目安 3〜5）", "情報設計", "デザイン＋実装", "基本SEO"],
    note: "※ 規模により変動します（事前に総額提示）。",
  },
  {
    badge: "03",
    title: "Impression Site",
    jp: "印象重視サイト",
    price: "240,000",
    detail:
      "世界観と体験の“印象”を強く残すプランです。写真・余白・タイポ・動きの統合で、ブランドの気配を立ち上げます。",
    bestFor: "「価格ではなく“雰囲気”で選ばれたい」ブランド・店舗向け。",
    includes: ["世界観設計", "演出（軽量・酔いにくい）", "デザイン＋実装", "導線設計"],
    note: "※ 企画密度が高いぶん、制作期間も長めです。",
    signature: true,
  },
];

const ADDONS = [
  {
    title: "写真の個別補正（まとめ）",
    price: "要相談",
    desc: "色味・トーンの揃え込み。必要な範囲で。",
    badge: "ADD",
  },
  {
    title: "追加ページ",
    price: "要相談",
    desc: "ページ単位で増える場合。構造が変わると再見積。",
    badge: "ADD",
  },
  {
    title: "文章の整理・調整",
    price: "要相談",
    desc: "読みやすさ優先で“伝わる順番”へ整えます。",
    badge: "ADD",
  },
  {
    title: "運用サポート（月額）",
    price: "9,800〜",
    desc: "軽微な更新・NEWS追加など。",
    badge: "CARE",
  },
];

function setMetaByName(name, content) {
  if (!content || typeof document === "undefined") return;

  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setMetaByProperty(property, content) {
  if (!content || typeof document === "undefined") return;

  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setCanonical(href) {
  if (!href || typeof document === "undefined") return;

  let tag = document.querySelector('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }

  tag.setAttribute("href", href);
}

export default function PriceDetail() {
  const rootRef = useRef(null);

  useEffect(() => {
    document.title = PAGE_TITLE;

    setMetaByName("description", PAGE_DESCRIPTION);
    setCanonical(CANONICAL_URL);

    const origin =
      typeof window !== "undefined"
        ? window.location.origin
        : "https://gushikendesign.com";

    const ogImage = `${origin}/ogp.png`;

    setMetaByProperty("og:title", PAGE_TITLE);
    setMetaByProperty("og:description", PAGE_DESCRIPTION);
    setMetaByProperty("og:url", CANONICAL_URL);
    setMetaByProperty("og:type", "website");
    setMetaByProperty("og:image", ogImage);

    setMetaByName("twitter:card", "summary_large_image");
    setMetaByName("twitter:title", PAGE_TITLE);
    setMetaByName("twitter:description", PAGE_DESCRIPTION);
    setMetaByName("twitter:image", ogImage);
  }, []);

  useEffect(() => {
    document.body.classList.add("is-price-detail");

    return () => {
      document.body.classList.remove("is-price-detail");
    };
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const targets = Array.from(root.querySelectorAll(".pd-reveal"));

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    if (reduce || typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.classList.add("pd-revealed"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("pd-revealed");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={rootRef} className="pd-root" aria-labelledby="price-heading">
      <div className="pd-container">
        <div className="pd-side-line" aria-hidden="true" />

        <header className="pd-header pd-reveal">
          <SectionSvgTitle
            title="PRICE"
            sub="PRICE / DETAIL"
            className="pd-svg-title"
          />

          <h1 id="price-heading" className="pd-hidden-heading">
            料金の詳細と進め方
          </h1>

          <p className="pd-page-title">料金の詳細と進め方</p>

          <p className="pd-lead">
            はじめてのご相談でも、内容が固まっていなくても大丈夫です。
            <br />
            目的・雰囲気・ご予算感を聞きながら、必要な範囲と優先順位を一緒に整理していきます。
            <br />
            料金は事前に総額をご案内したうえで進めています。
          </p>

          <p className="pd-taxnote">
            ※ 表示価格はすべて税込の目安です。内容により正式なお見積もりをご案内します。
          </p>
        </header>

        <section className="pd-section pd-reveal" aria-label="プランと料金">
          <div className="pd-sec-head">
            <div className="pd-sec-kicker">—</div>
            <h2 className="pd-sec-title">プランと料金</h2>
          </div>

          <div className="pd-grid">
            {PLANS.map((plan) => (
              <article
                key={plan.badge}
                className={`pd-plan-card ${
                  plan.signature ? "is-signature" : ""
                }`}
              >
                <div className="pd-plan-top">
                  <div className="pd-plan-badge">PLAN {plan.badge}</div>
                  {plan.signature && <div className="pd-signature">SIGNATURE</div>}
                </div>

                <div className="pd-plan-name">{plan.title}</div>
                <div className="pd-plan-jp">{plan.jp}</div>

                <div className="pd-plan-price">
                  <span className="pd-yen">¥</span>
                  <span className="pd-num">{plan.price}</span>
                  <span className="pd-tax">（税込）</span>
                </div>

                <p className="pd-plan-detail">{plan.detail}</p>
                <p className="pd-bestfor">{plan.bestFor}</p>

                <ul className="pd-list" aria-label="含まれる内容">
                  {plan.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {plan.note && <p className="pd-note">{plan.note}</p>}
              </article>
            ))}
          </div>

          <div className="pd-actions">
            <Link className="pd-btn link" to={WORKS_PATH}>
              実例を見る（WORKS）
            </Link>
          </div>
        </section>

        <section className="pd-section pd-reveal" aria-label="追加オプション">
          <div className="pd-sec-head">
            <div className="pd-sec-kicker">—</div>
            <h2 className="pd-sec-title">追加オプション</h2>
          </div>

          <div className="pd-addon-grid">
            {ADDONS.map((addon) => (
              <article key={addon.title} className="pd-addon-card">
                <div className="pd-addon-badge">{addon.badge}</div>
                <div className="pd-addon-title">{addon.title}</div>
                <div className="pd-addon-price">{addon.price}</div>
                <p className="pd-addon-desc">{addon.desc}</p>
              </article>
            ))}
          </div>

          <p className="pd-footnote">
            相談内容に応じて、追加ではなく「構造の組み替え」で解決する場合もあります。
            まずは状況だけ教えてください。
          </p>
        </section>

        <section className="pd-section pd-reveal" aria-label="進め方">
          <div className="pd-sec-head">
            <div className="pd-sec-kicker">—</div>
            <h2 className="pd-sec-title">進め方</h2>
          </div>

          <div className="pd-steps">
            <div className="pd-step">
              <div className="pd-step-no">01</div>
              <div className="pd-step-body">
                <div className="pd-step-title">ヒアリング</div>
                <p className="pd-step-desc">
                  目的・対象・素材の有無・公開時期などを確認します。内容が固まっていなくてもOKです。
                </p>
              </div>
            </div>

            <div className="pd-step">
              <div className="pd-step-no">02</div>
              <div className="pd-step-body">
                <div className="pd-step-title">構成／方向性の整理</div>
                <p className="pd-step-desc">
                  迷いが出やすいポイント（順番／載せ方／言い方）を整理し、まず“骨格”を決めます。
                </p>
              </div>
            </div>

            <div className="pd-step">
              <div className="pd-step-no">03</div>
              <div className="pd-step-body">
                <div className="pd-step-title">制作（デザイン→実装）</div>
                <p className="pd-step-desc">
                  体験の気持ちよさを損なわない範囲で、必要な動き・余韻を設計します。
                </p>
              </div>
            </div>

            <div className="pd-step">
              <div className="pd-step-no">04</div>
              <div className="pd-step-body">
                <div className="pd-step-title">公開／納品</div>
                <p className="pd-step-desc">
                  公開完了＋最終確認OKをもって納品です。必要があれば運用サポートへ移行します。
                </p>
              </div>
            </div>
          </div>

          <p className="pd-paynote">
            着手金（50%）の入金確認後に制作を開始します。素材遅延は納期も同日数スライドします。
          </p>
        </section>

        <section className="pd-contact-cta pd-reveal" aria-label="お問い合わせ">
          <div className="pd-contact-ctaRow">
            <p className="pd-contact-ctaText">
              内容が固まっていなくても大丈夫です。状況だけ教えてください。
            </p>

            <Link className="pd-btn contact" to={CONTACT_PATH}>
              お問い合わせへ（CONTACT）
            </Link>
          </div>
        </section>

        <footer className="pd-footer pd-reveal">
          <Link className="pd-inline-link" to="/">
            ← トップへ戻る
          </Link>
        </footer>
      </div>
    </section>
  );
}