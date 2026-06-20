// src/pages/AboutPage.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./AboutPage.module.css";

const cx = (...a) => a.filter(Boolean).join(" ");

const QUALIFICATIONS = [
  {
    id: "html5-expert",
    status: "取得済み",
    statusEn: "ACQUIRED",
    title: "HTML5 Webエキスパート",
    org: "Webクリエイター能力認定試験",
    year: "2025",
    note: "証明書あり",
    image: "/images/certificates/web-expert-certificate-site-final1.webp",
    tier: "acquired",
    action: "証明を見る →",
  },
  {
    id: "color-design",
    status: "強化領域",
    statusEn: "FOCUS",
    title: "色彩設計 / 配色理論",
    org: "色彩検定2級の範囲をベースに、配色・トーン設計を強化",
    year: "",
    note: "実務反映",
    image: null,
    tier: "focus",
    action: "設計に反映中",
  },
];

// [変更] タイトルと説明文から「印象」を排除し、役割を明確に分離
const APPROACH_ITEMS = [
  {
    title: "入口の空気を決める",
    text: "何を最初に見せるか、どこで立ち止めてもらうかを整理し、そのサービスらしい空気が伝わる入口をつくります。",
  },
  {
    title: "情報の順番を組み立てる",
    text: "読み手が理解しやすい順番に、写真・言葉・補足情報を並べ、判断まで続く流れをつくります。",
  },
  {
    title: "見え方の温度を合わせる",
    text: "色、余白、文字、写真のトーンを揃え、どこを見ても同じ空気が続くように整えます。",
  },
  {
    title: "公開後を見据えて作る",
    text: "公開して終わりではなく、更新や運用のしやすさも含めて、無理なく使い続けられる形を考えます。",
  },
];

const CONCEPT_SITES = [
  {
    no: "01",
    title: "BLACK PAPILLON",
    meta: "Tattoo Studio / Naha, Okinawa",
    text: "仕上がりで選ばれるタトゥースタジオを想定し、黒・余白・言葉の温度で空気を組み立てたコンセプトサイト。",
    link: "/works/black-papillon",
  },
  {
    no: "02",
    title: "Vow in Light",
    meta: "Bridal / Photowedding / Web Design",
    text: "ブライダル・フォトウェディング向けに、光・静けさ・余白で世界観を伝える構成を検証したコンセプトサイト。",
    link: "/works/vow-in-light",
  },
  {
    no: "03",
    title: "KOU RYUI",
    meta: "Ryukyu Costume / Culture Experience",
    text: "沖縄文化体験・琉装撮影を想定し、文化性と予約前の安心感を両立する見せ方を検証したコンセプトサイト。",
    link: "/works/kou-ryui",
  },
];

const TIMELINE = [
  {
    date: "2025.06",
    title: "Webデザイン科 入学",
    text: "デザインとコーディングの基礎を体系的に学び始める。",
  },
  {
    date: "2025.11",
    title: "Webデザイン科 修了",
    text: "基礎学習後、自身のサイト制作とコンセプトサイト制作を本格化。",
  },
  {
    // [変更] 「印象で選ばれる」→「世界観で選ばれる」（本文中での重複回避）
    date: "2025-2026",
    title: "コンセプトサイト制作 / 表現検証",
    text: "美容・飲食・観光・ブライダル・タトゥーなど、世界観で選ばれる業種を中心に制作。",
  },
  {
    date: "2026",
    title: "実案件制作・公開",
    text: "実在店舗様のWebサイト制作・公開まで対応。実際の運用を見据えた設計も経験。",
  },
];

const SWATCHES = [
  { bg: "#0d0d0d", label: "DEEP" },
  { bg: "#1a1a1a", label: "BASE" },
  { bg: "#2c2b29", label: "WARM" },
  { bg: "rgba(255,255,255,0.5)", label: "LIGHT" },
  { bg: "linear-gradient(135deg,#c9b18a,#d9c29a,#8f7650)", label: "GOLD" },
];

function CrownIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="4" y1="22" x2="36" y2="22" strokeWidth="1" strokeLinecap="round" />
      <polyline
        points="4,22 4,10 13,17 20,4 27,17 36,10 36,22"
        strokeWidth="1"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="18.2" y="2" width="3.6" height="3.6" transform="rotate(45 20 3.8)" strokeWidth="0.85" />
      <rect x="2.2" y="8" width="3.6" height="3.6" transform="rotate(45 4 9.8)" strokeWidth="0.85" />
      <rect x="34.2" y="8" width="3.6" height="3.6" transform="rotate(45 36 9.8)" strokeWidth="0.85" />
    </svg>
  );
}

function FocusIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="14" strokeWidth="0.8" strokeDasharray="2.5 3" />
      <circle cx="20" cy="20" r="5.5" strokeWidth="0.8" />
      <circle cx="20" cy="20" r="1.6" strokeWidth="0.9" />
      <line x1="20" y1="18.4" x2="20" y2="7" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="21.4" y1="20.8" x2="30" y2="25.5" strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}

function QualificationRow({ item, index, onOpen }) {
  const clickable = Boolean(item.image);
  const isAcquired = item.tier === "acquired";

  const handleOpen = () => {
    if (!clickable) return;
    onOpen(item);
  };

  return (
    <div
      className={cx(
        styles.qrow,
        styles[`qrow--${item.tier}`],
        clickable ? styles["qrow--clickable"] : ""
      )}
      onClick={handleOpen}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      aria-label={clickable ? `${item.title} の証明画像を開く` : undefined}
      aria-haspopup={clickable ? "dialog" : undefined}
      onKeyDown={(e) => {
        if (!clickable) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleOpen();
        }
      }}
    >
      <div className={styles["qrow__meta"]}>
        <span className={styles["qrow__no"]}>
          {String(index + 1).padStart(2, "0")}
        </span>

        {isAcquired ? (
          <CrownIcon className={styles["qrow__icon"]} />
        ) : (
          <FocusIcon className={styles["qrow__icon"]} />
        )}

        <span className={styles["qrow__status"]}>{item.status}</span>
        <span className={styles["qrow__statusEn"]}>{item.statusEn}</span>
      </div>

      <div className={styles["qrow__main"]}>
        <h3 className={styles["qrow__title"]}>{item.title}</h3>
        <p className={styles["qrow__org"]}>
          {item.org}
          {item.year ? (
            <>
              <span className={styles["qrow__org-sep"]}>／</span>
              {item.year}
            </>
          ) : null}
        </p>
      </div>

      <div className={styles["qrow__right"]}>
        <span className={styles["qrow__note"]}>{item.note}</span>
        <span className={styles["qrow__action"]} aria-hidden="true">
          <span>{clickable ? "証明を見る →" : item.action || "設計に反映中"}</span>
        </span>
      </div>
    </div>
  );
}

function CertificateModal({ item, onClose }) {
  const scrollYRef = useRef(0);
  const lastActiveRef = useRef(null);

  useEffect(() => {
    if (!item) return undefined;

    const html = document.documentElement;
    const body = document.body;
    lastActiveRef.current = document.activeElement;

    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    scrollYRef.current =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    html.classList.add("scroll-lock");
    body.classList.add("scroll-lock");
    document.addEventListener("keydown", onKey);

    return () => {
      const y = scrollYRef.current;
      document.removeEventListener("keydown", onKey);

      html.classList.remove("scroll-lock");
      body.classList.remove("scroll-lock");

      window.scrollTo(0, y);
      const el = lastActiveRef.current;
      if (el && typeof el.focus === "function") el.focus();
      lastActiveRef.current = null;
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className={styles["certificate-modal"]}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
    >
      <div
        className={styles["certificate-modal__inner"]}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles["certificate-modal__header"]}>
          <div>
            <p className={styles["certificate-modal__label"]}>QUALIFICATION</p>
            <h2
              id="certificate-modal-title"
              className={styles["certificate-modal__title"]}
            >
              {item.title}
            </h2>
          </div>

          <button
            type="button"
            className={styles["certificate-modal__close"]}
            onClick={onClose}
            aria-label="証明画像を閉じる"
          >
            CLOSE
          </button>
        </div>

        <div className={styles["certificate-modal__imageWrap"]}>
          <img
            src={item.image}
            alt={`${item.title} の証明画像`}
            className={styles["certificate-modal__image"]}
          />
          <p className={styles["certificate-modal__note"]}>
            ※悪用防止のため、一部情報を加工・解像度調整しています。
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const [activeCertificate, setActiveCertificate] = useState(null);
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const root = pageRef.current;
    if (!root) return undefined;

    const targets = Array.from(root.querySelectorAll(`.${styles["ap-flow"]}`));
    const reveal = (target) => target.classList.add(styles.isIn);

    if (typeof IntersectionObserver === "undefined") {
      targets.forEach(reveal);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main ref={pageRef} className={styles["about-page"]}>
        <section className={styles["ap-hero"]}>
          <div className={styles["ap-container"]}>
            <div
              className={cx(
                styles["ap-side-line"],
                styles["ap-flow"],
                styles["ap-flow-line"]
              )}
              aria-hidden="true"
            />

            <header
              className={cx(
                styles["ap-header"],
                styles["ap-flow"],
                styles["ap-flow-1"]
              )}
            >
              <h1 className={styles.srOnly}>ABOUT / GUSHIKEN DESIGN</h1>

              <div className={styles["ap-title-wrap"]}>
                <p className={styles["ap-title-sub"]}>ABOUT / GUSHIKEN DESIGN</p>
                <p className={styles["ap-title"]}>ABOUT</p>
              </div>

              <p className={styles["ap-sub"]}>制作者の背景</p>
            </header>

            <div className={styles["ap-hero-body"]}>
              <p
                className={cx(
                  styles["ap-kicker"],
                  styles["ap-flow"],
                  styles["ap-flow-2"]
                )}
              >
                OKINAWA / WEB DESIGN / FIELD TO SCREEN
              </p>

              {/*
                [変更] 「選ばれる理由を」→「現場で拾った感覚を」
                理由: 「選ばれる理由」がORIGINとCLOSINGにも登場していたため、
                      HEROでは制作者の背景・軌跡を端的に示す言葉に変更。
                      "FIELD TO SCREEN" キッカーとも連動する。
              */}
              <p
                className={cx(
                  styles["ap-lead"],
                  styles["ap-flow"],
                  styles["ap-flow-2"]
                )}
              >
                現場で拾った感覚を、
                <br />
                <span>画面の設計に変える。</span>
              </p>

              {/*
                [変更]
                - 「見た目を整えるだけではなく、」を削除（防衛的表現）
                - 「自然に伝わるための」を削除（本文中で複数回登場）
              */}
              <p
                className={cx(
                  styles["ap-text"],
                  styles["ap-flow"],
                  styles["ap-flow-3"]
                )}
              >
                GUSHIKEN DESIGNは、沖縄県浦添市を拠点に、
                ホームページ制作・LP制作・Webデザインを行う個人制作スタジオです。
                <br />
                誰に、何を、どの順番で伝えるか。
                <br />
                そのサービスの<span>空気と言葉と導線</span>を、構成・デザイン・実装まで一貫して整えます。
              </p>
            </div>
          </div>
        </section>

        <section className={styles["ap-section"]}>
          <div className={styles["ap-container"]}>
            <article className={cx(styles["story-block"], styles["ap-flow"])}>
              <p className={styles["story-label"]}>PHILOSOPHY</p>

              {/* [維持] 独自性がある。変えない。 */}
              <p className={styles["story-lead"]}>
                感覚だけで終わらせず、
                <br />
                <span>理由のある景色にする。</span>
              </p>

              {/*
                [変更]
                - 「印象は変わります」→「伝わり方は変わります」（「印象」の重複回避）
                - 「ただ美しく見せるのではなく、」を削除（防衛的表現）
              */}
              <p className={styles["story-text"]}>
                写真、言葉、余白、導線。
                <br />
                どこに何を置くかで、商品・空間・サービスの伝わり方は変わります。
                <br />
                初めて見る人が理解し、比較し、相談しやすい状態まで整えることを大切にしています。
              </p>

              <div className={styles["story-prose"]}>
                {/*
                  [変更] トップページのPOLICYとほぼ同文だったため、
                         「制作者の視点・判断の積み重ね」という角度にリライト。
                         「Webサイトは、じっくり読まれる前に...」はトップに任せる。
                */}
                <p>
                  最初に見える写真、言葉の量、余白の取り方、情報の順番。
                  それぞれに小さな判断が積み重なっています。
                  その積み重ねが、見た人の受け取り方と行動を変えると考えています。
                </p>

                {/*
                  [変更]
                  - 「大切にしているのは、ただ目立たせることではありません。」を削除（防衛的）
                  - 「自然に伝わり」→「最初に届け」
                  - 「を作ることです。」→「それが、制作の目標です。」（結論を明示）
                */}
                <p>
                  その店やサービスらしさを最初に届け、見た人が
                  「ここは自分に合いそうだ」と判断できる状態をつくること。
                  それが、制作の目標です。
                </p>
              </div>
            </article>

            <article
              className={cx(
                styles["story-block"],
                styles["story-block--origin"],
                styles["ap-flow"]
              )}
            >
              <div className={styles["story-heading-row"]}>
                <p className={styles["story-label"]}>ORIGIN / FIELD EXPERIENCE</p>
                <span className={styles["story-index"]}>01</span>
              </div>

              {/*
                [変更] 「現場で見た、選ばれる理由。」→「現場で見た、伝わり方の差。」
                理由: 「選ばれる理由」はCLOSINGとHEROでも使用。ORIGINは
                      「何を学んだか」の話なので、より観察・発見の言葉に。
              */}
              <p className={styles["story-lead"]}>
                現場で見た、
                <br />
                <span>伝わり方の差。</span>
              </p>

              {/* [維持] 具体的で良い。変えない。 */}
              <p className={styles["story-text"]}>
                Web制作に入る前は、沖縄県内の観光土産卸の営業として、
                店舗や売り場を回っていました。
                <br />
                現場を見ながら、商品がどう見られ、どこで手に取られ、
                どんな説明があると伝わりやすいのかを考える仕事でした。
              </p>

              <div className={styles["story-prose"]}>
                {/* [維持] 具体的で独自性がある。変えない。 */}
                <p>
                  店舗を回っていると、同じ商品でも、置かれる場所や見え方、
                  伝え方によって反応が変わることがあります。
                  商品そのものの良さだけではなく、最初に何が目に入り、
                  どんな印象を持たれ、どこで安心できるか。
                  その小さな違いが、選ばれるかどうかに関わっていました。
                </p>

                {/*
                  [変更] WEB DESIGNセクションとの棲み分けを明確に。
                  ORIGINは「気づきを得た」で締める。
                  「どこで不安を減らすか」はWEB DESIGNセクションに任せる。
                */}
                <p>
                  その経験が、今のWeb制作に直接つながっています。
                  最初に何が目に入るか、どこで迷うか、どこで安心するか。
                  現場で見てきた流れと同じことを、画面の中で組み立てています。
                </p>
              </div>

              {/* [維持] 具体的な数字があり信頼感がある。変えない。 */}
              <div className={styles["field-note"]}>
                <p className={styles["field-note__label"]}>FIELD NOTE</p>
                <p className={styles["field-note__text"]}>
                  前職では、前年比でマイナス推移だった担当エリアの改善に取り組み、
                  現場提案を重ねる中で、1年後に前年比130%まで回復・改善した経験があります。
                </p>
              </div>
            </article>

            <article className={cx(styles["story-block"], styles["ap-flow"])}>
              <div className={styles["story-heading-row"]}>
                <p className={styles["story-label"]}>WEB DESIGN</p>
                <span className={styles["story-index"]}>02</span>
              </div>

              {/*
                [変更] 「現場で見たことを、Webの設計へ。」→「現場の感覚を、設計の言葉に変える。」
                理由: ORIGINで「現場→Web」の橋渡しは済んでいる。
                      このセクションはより「制作の思考プロセス」を示す場所なので、
                      「設計の言葉に変える」という制作者固有の動詞を使う。
              */}
              <p className={styles["story-lead"]}>
                現場の感覚を、
                <br />
                <span>設計の言葉に変える。</span>
              </p>

              {/*
                [変更]
                - 「「選ばれる理由」は」→「現場で積んできた問いと」（「選ばれる理由」3回目の排除）
                - それ以外は維持（「最初に何を見せるか」の問いの列挙は機能している）
              */}
              <p className={styles["story-text"]}>
                現場で積んできた問いと、Webの設計は向いている方向が同じです。
                <br />
                最初に何を見せるか。どの言葉で安心してもらうか。
                どこで比較し、どこで相談へ進んでもらうか。
                <br />
                その流れを画面の中で整えることが、Web制作の役割だと考えています。
              </p>

              <div className={styles["method-strip"]}>
                <div>
                  <span>01</span>
                  {/* [維持] */}
                  <p>誰に向けて伝えるかを整理する</p>
                </div>

                <div>
                  <span>02</span>
                  {/* [変更] 「最初に見せる印象を決める」→「最初に届ける空気を決める」 */}
                  <p>最初に届ける空気を決める</p>
                </div>

                <div>
                  <span>03</span>
                  {/*
                    [変更] 「不安を減らす順番で情報を置く」→「相談まで続く流れを置く」
                    理由: 「不安を減らす」はトップのFLOWとORIGIN prose 2に既出。
                          「相談まで続く」は目的（ゴール）を言う言葉に変換。
                  */}
                  <p>相談まで続く流れを置く</p>
                </div>
              </div>
            </article>

            <article className={cx(styles["works-block"], styles["ap-flow"])}>
              <div className={styles["story-heading-row"]}>
                <p className={styles["story-label"]}>CONCEPT SITES</p>
                <span className={styles["story-index"]}>03</span>
              </div>

              {/* [維持] 良い。「空気」を「検証する」という動詞の組み合わせが独自。 */}
              <p className={styles["story-lead"]}>
                業種ごとの空気を、
                <br />
                <span>画面の中で検証する。</span>
              </p>

              {/*
                [変更] 「業種ごとの世界観、写真の見え方、言葉の温度、余白、導線を検証しています。」
                →列挙をまとめて簡潔に。同じ単語の羅列が複数セクションに出ていたため。
              */}
              <p className={styles["story-text"]}>
                コンセプトサイトでは、業種ごとの世界観と見せ方を検証しています。
                <br />
                表現として成立するかだけでなく、「見た人がどう判断するか」まで
                含めて組み立てています。
                <br />
                実際の制作でもそのまま使える判断を蓄積するために、続けています。
              </p>

              <div className={styles["works-list"]}>
                {CONCEPT_SITES.map((work) => (
                  <Link key={work.no} to={work.link} className={styles["works-item"]}>
                    <span className={styles["works-no"]}>{work.no}</span>

                    <span className={styles["works-main"]}>
                      <span className={styles["works-title"]}>{work.title}</span>
                      <span className={styles["works-meta"]}>{work.meta}</span>
                      <span className={styles["works-text"]}>{work.text}</span>
                    </span>

                    <span className={styles["works-arrow"]}>→</span>
                  </Link>
                ))}
              </div>
            </article>

            <article className={cx(styles["approach-block"], styles["ap-flow"])}>
              <p className={styles["story-label"]}>DESIGN APPROACH</p>

              <div className={styles["approach-list"]}>
                {APPROACH_ITEMS.map((item, index) => (
                  <article key={item.title} className={styles["approach-item"]}>
                    <span className={styles["approach-no"]}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className={styles["approach-title"]}>{item.title}</h2>
                    <p className={styles["approach-text"]}>{item.text}</p>
                  </article>
                ))}
              </div>
            </article>

            <article className={cx(styles["qualification-block"], styles["ap-flow"])}>
              <p className={styles["story-label"]}>BASIS / FOCUS</p>

              {/* [維持] 「感覚を支える、基礎と検証。」は端的で良い。 */}
              <p className={styles["story-lead"]}>
                感覚を支える、
                <br />
                <span>基礎と検証。</span>
              </p>

              {/*
                [変更] 語順を整理。「〜だけに寄せすぎず」という防衛的な入り方を変える。
                結論（何を学んでいるか）を先に置く。
              */}
              <p className={styles["qualification-intro"]}>
                HTML・CSS・Web制作の基礎、色彩設計や配色理論。
                デザインの感覚を支える土台として、学び続けています。
              </p>

              <div className={styles["certificate-board"]}>
                <button
                  type="button"
                  className={styles["certificate-preview"]}
                  onClick={() => setActiveCertificate(QUALIFICATIONS[0])}
                  aria-label="HTML5 Webエキスパートの証明画像を開く"
                >
                  <img
                    src="/images/certificates/web-expert-certificate-site-final1.webp"
                    alt="HTML5 Webエキスパート 証明画像"
                  />
                  <span>証明を見る →</span>
                </button>

                <div className={styles["certificate-copy"]}>
                  <p className={styles["certificate-label"]}>CERTIFICATE / STUDY</p>
                  {/* [維持] このコピーは完成している。絶対に変えない。 */}
                  <h2>証明できるものは、静かに置いておく。</h2>
                  {/* [維持] 「印象を感覚だけでなく設計として扱える」は差別化になる表現。 */}
                  <p>
                    資格は大きく見せるためではなく、制作の土台を補強するために掲載しています。
                    現在は色彩設計・配色理論も強化し、印象を感覚だけでなく設計として扱えるように学び続けています。
                  </p>
                </div>
              </div>

              <div className={styles["qualification-list"]}>
                {QUALIFICATIONS.map((item, index) => (
                  <div
                    key={item.id}
                    className={cx(styles["qrow-flow"], styles["ap-flow"])}
                    style={{ "--q-index": index }}
                  >
                    <QualificationRow
                      item={item}
                      index={index}
                      onOpen={setActiveCertificate}
                    />
                  </div>
                ))}
              </div>
            </article>

            <article className={cx(styles["tone-block"], styles["ap-flow"])}>
              <p className={styles["story-label"]}>SITE TONE</p>

              {/* [維持] */}
              <p className={styles["tone-text"]}>
                掲載しているサイトでは、余白と読みやすさを優先し、
                見え方の一貫性を大切にしています。
              </p>

              <div className={styles["swatch-grid"]}>
                {SWATCHES.map(({ bg, label }) => (
                  <div key={label} className={styles["swatch-item"]}>
                    <div className={styles["swatch"]} style={{ background: bg }} />
                    <p>{label}</p>
                  </div>
                ))}
              </div>

              <div className={styles["tone-meta"]}>
                <div>
                  <p className={styles["tone-meta-label"]}>FONT</p>
                  <p className={styles["tone-meta-main"]}>Aa Bb</p>
                  <p className={styles["tone-meta-sub"]}>読みやすさ</p>
                </div>

                <div>
                  <p className={styles["tone-meta-label"]}>SPACING</p>
                  <div className={styles["spacing-lines"]}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <p className={styles["tone-meta-sub"]}>情報の区切り</p>
                </div>

                <div>
                  <p className={styles["tone-meta-label"]}>TONE</p>
                  <div className={styles["tone-dots"]}>
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <p className={styles["tone-meta-sub"]}>統一感</p>
                </div>
              </div>
            </article>

            <article className={cx(styles["timeline-block"], styles["ap-flow"])}>
              <p className={styles["story-label"]}>TIMELINE</p>

              <div className={styles["timeline-list"]}>
                {TIMELINE.map((item) => (
                  <div key={`${item.date}-${item.title}`} className={styles["timeline-item"]}>
                    <span className={styles["timeline-date"]}>{item.date}</span>
                    <div className={styles["timeline-main"]}>
                      <h2>{item.title}</h2>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className={cx(styles["closing-block"], styles["ap-flow"])}>
              {/*
                [変更] 「そのサービスが、選ばれる理由を一緒に整える。」
                      →「そのサービスの入口を、一緒につくる。」
                理由: 「選ばれる理由」がHERO・ORIGIN・ここで3回目になっていた。
                      「入口をつくる」はトップのHEROコピー「選ばれる入口を、空気から設計する。」
                      と呼応し、サイト全体の言葉がつながる。
              */}
              <p className={styles["closing-lead"]}>
                そのサービスの入口を、
                <br />
                <span>一緒につくる。</span>
              </p>

              {/* [維持] 機能している。トップとの重複は許容範囲。 */}
              <p className={styles["closing-text"]}>
                まだ内容が固まっていなくても大丈夫です。
                <br />
                業種・目的・写真・予算感を聞きながら、
                必要な見せ方と進め方を一緒に決めていきます。
              </p>

              <div className={styles["closing-links"]}>
                <Link to="/contact" className={styles["ap-primary-link"]}>
                  制作を相談する
                </Link>
                <Link to="/works" className={styles["ap-secondary-link"]}>
                  制作事例を見る
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>

      <CertificateModal
        item={activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />
    </>
  );
}