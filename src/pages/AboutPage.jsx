// src/pages/AboutPage.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./AboutPage.module.css";

const cx = (...classes) => classes.filter(Boolean).join(" ");

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

const DESIGN_STUDIES = [
  {
    no: "01",
    title: "BLACK PAPILLON",
    meta: "Tattoo Studio / Naha, Okinawa",
    text: "タトゥースタジオ向けに、黒・余白・言葉の温度で印象を組み立てたデザインスタディ。",
    link: "/works/black-papillon",
  },
  {
    no: "02",
    title: "Vow in Light",
    meta: "Bridal / Photowedding / Web Design",
    text: "ブライダル・フォトウェディング向けに、光・静けさ・予約前の安心感を整理した制作。",
    link: "/works/vow-in-light",
  },
  {
    no: "03",
    title: "KOU RYUI",
    meta: "Ryukyu Costume / Culture Experience",
    text: "沖縄文化体験・琉装撮影向けに、文化性と体験の魅力が伝わる構成を検証した制作。",
    link: "/works/kou-ryui",
  },
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
      <line
        x1="4"
        y1="22"
        x2="36"
        y2="22"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <polyline
        points="4,22 4,10 13,17 20,4 27,17 36,10 36,22"
        strokeWidth="1"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      <rect
        x="18.2"
        y="2"
        width="3.6"
        height="3.6"
        transform="rotate(45 20 3.8)"
        strokeWidth="0.85"
      />
      <rect
        x="2.2"
        y="8"
        width="3.6"
        height="3.6"
        transform="rotate(45 4 9.8)"
        strokeWidth="0.85"
      />
      <rect
        x="34.2"
        y="8"
        width="3.6"
        height="3.6"
        transform="rotate(45 36 9.8)"
        strokeWidth="0.85"
      />
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
      <line
        x1="20"
        y1="18.4"
        x2="20"
        y2="7"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <line
        x1="21.4"
        y1="20.8"
        x2="30"
        y2="25.5"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
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
        clickable && styles["qrow--clickable"]
      )}
      onClick={handleOpen}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      aria-label={clickable ? `${item.title} の証明画像を開く` : undefined}
      aria-haspopup={clickable ? "dialog" : undefined}
      onKeyDown={(event) => {
        if (!clickable) return;

        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
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
          <span>{clickable ? "証明を見る →" : item.action}</span>
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

    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      onClose();
    };

    scrollYRef.current =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    html.classList.add("scroll-lock");
    body.classList.add("scroll-lock");
    document.addEventListener("keydown", onKeyDown);

    return () => {
      const y = scrollYRef.current;

      document.removeEventListener("keydown", onKeyDown);

      html.classList.remove("scroll-lock");
      body.classList.remove("scroll-lock");

      window.scrollTo(0, y);

      const active = lastActiveRef.current;
      if (active && typeof active.focus === "function") {
        active.focus();
      }

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
        onClick={(event) => event.stopPropagation()}
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
                OKINAWA / FIELD EXPERIENCE / WEB DESIGN
              </p>

              <p
                className={cx(
                  styles["ap-lead"],
                  styles["ap-flow"],
                  styles["ap-flow-2"]
                )}
              >
                売り場で見た差を、<span>Webの設計へ。</span>
              </p>

              <div
                className={cx(
                  styles["ap-text"],
                  styles["ap-flow"],
                  styles["ap-flow-3"]
                )}
              >
                <p>
                  GUSHIKEN DESIGNは、沖縄県浦添市を拠点に、
                  ホームページ制作・LP制作・Webデザインを行う個人制作スタジオです。
                </p>

                <p>
                  前職の営業で見てきた
                  <span>見られ方・選ばれ方・安心の置き方</span>
                  をもとに、事業の印象と相談までの道筋を整えます。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles["ap-section"]}>
          <div className={styles["ap-container"]}>
            <article className={cx(styles["story-block"], styles["ap-flow"])}>
              <p className={styles["story-label"]}>PHILOSOPHY</p>

              <p className={styles["story-lead"]}>
                見た目の奥に、<span>伝わる理由を置く。</span>
              </p>

              <div className={styles["story-text"]}>
                <p>写真、言葉、余白、情報の順番。</p>
                <p>
                  どこに何を置くかで、商品・空間・サービスの受け取られ方は変わります。
                </p>
              </div>

              <div className={styles["story-prose"]}>
                <p>
                  良い雰囲気に見せるだけなら、表面を整えることでもできます。
                  でも、見た人が安心して読み進め、相談や予約を考えるところまで進むには、
                  その見せ方に理由が必要です。
                </p>

                <p>
                  最初に目に入る写真、言葉の量、余白の取り方、料金や実績を出す順番。
                  小さな判断の積み重ねが、見た人の理解と行動を変えると考えています。
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
              </div>

              <p className={styles["story-lead"]}>
                小さな反応の差を、<span>見逃さない。</span>
              </p>

              <div className={styles["story-text"]}>
                <p>
                  Web制作に入る前は、沖縄県内の観光土産卸の営業として、
                  店舗や売り場を回っていました。
                </p>

                <p>
                  商品がどこで見られ、どう説明され、どんな置き方なら手に取られるのか。
                  その違いを現場で見てきました。
                </p>
              </div>

              <div className={styles["story-prose"]}>
                <p>
                  同じ商品でも、置かれる場所や見え方、説明のされ方によって反応が変わる。
                  商品そのものの良さだけではなく、最初に何が目に入り、
                  どこで安心できるかが、選ばれるかどうかに関わっていました。
                </p>

                <p>
                  その感覚は、今のWeb制作にもつながっています。
                  サイトでも、最初に見える印象、読み進める順番、不安が消える場所によって、
                  相談や予約までの進み方は変わります。
                </p>
              </div>

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
              </div>

              <p className={styles["story-lead"]}>
                見られ方を、<span>設計に変える。</span>
              </p>

              <div className={styles["story-text"]}>
                <p>Webでも、最初の数秒で受け取られる印象は大きく変わります。</p>
                <p>
                  何を見せ、何を説明し、どこで相談できるようにするか。
                  その順番を整理しながら制作します。
                </p>
              </div>

              <div className={styles["story-prose"]}>
                <p>
                  まず、誰に見てほしいサイトなのかを決めます。
                  次に、その人が最初に受け取る印象を整えます。
                  写真・見出し・余白・言葉の量は、そこで大きく変わります。
                </p>

                <p>
                  その上で、料金、実績、FAQ、問い合わせまでの流れを組み立てます。
                  世界観で惹きつけるだけではなく、迷わず相談できる状態まで整えることを大切にしています。
                </p>
              </div>
            </article>

            <article className={cx(styles["works-block"], styles["ap-flow"])}>
              <div className={styles["story-heading-row"]}>
                <p className={styles["story-label"]}>DESIGN STUDIES</p>
              </div>

              <p className={styles["story-lead"]}>
                作品制作を、<span>検証として残す。</span>
              </p>

              <div className={styles["story-text"]}>
                <p>
                  作品制作では、業種ごとの見せ方・言葉・情報の置き方を試しています。
                </p>

                <p>
                  ただ数を増やすためではなく、実際の制作で使える判断を増やすための検証です。
                </p>
              </div>

              <div className={styles["works-list"]}>
                {DESIGN_STUDIES.map((work) => (
                  <Link
                    key={work.no}
                    to={work.link}
                    className={styles["works-item"]}
                  >
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

            <article className={cx(styles["qualification-block"], styles["ap-flow"])}>
              <p className={styles["story-label"]}>BASIS / FOCUS</p>

              <p className={styles["story-lead"]}>
                感覚に、<span>根拠を添える。</span>
              </p>

              <div className={styles["qualification-intro"]}>
                <p>HTML・CSS・Web制作の基礎、色彩設計や配色理論。</p>
                <p>
                  感覚だけに頼らず、制作の土台も少しずつ積み上げています。
                </p>
              </div>

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
                  <h2>証明できるものは、静かに置いておく。</h2>
                  <p>
                    資格は大きく見せるためではなく、制作の土台を補強するために掲載しています。
                    現在は色彩設計・配色理論も強化し、印象を感覚だけでなく設計として扱えるように学び続けています。
                  </p>
                </div>
              </div>

              <div className={styles["qualification-list"]}>
                {QUALIFICATIONS.map((item, index) => (
                  <div key={item.id} className={styles["ap-flow"]}>
                    <QualificationRow
                      item={item}
                      index={index}
                      onOpen={setActiveCertificate}
                    />
                  </div>
                ))}
              </div>
            </article>

            <article className={cx(styles["closing-block"], styles["ap-flow"])}>
              <p className={styles["closing-lead"]}>
                今ある素材から、<span>整えます。</span>
              </p>

              <div className={styles["closing-text"]}>
                <p>内容がまだ固まっていなくても大丈夫です。</p>
                <p>
                  業種・目的・写真・予算感を聞きながら、
                  必要な見せ方と進め方を一緒に整理します。
                </p>
              </div>

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