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
    text: "タトゥースタジオ向けに、黒・余白・言葉の温度で空気を組み立てたデザインスタディ。",
    link: "/works/black-papillon",
  },
  {
    no: "02",
    title: "Vow in Light",
    meta: "Bridal / Photowedding / Web Design",
    text: "ブライダル・フォトウェディング向けに、光・静けさ・余白で世界観を伝える構成を試したデザインスタディ。",
    link: "/works/vow-in-light",
  },
  {
    no: "03",
    title: "KOU RYUI",
    meta: "Ryukyu Costume / Culture Experience",
    text: "沖縄文化体験・琉装撮影向けに、文化性と予約前の安心感を両立する見せ方を検証したデザインスタディ。",
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
      <line x1="4" y1="22" x2="36" y2="22" strokeWidth="1" strokeLinecap="round" />
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
                OKINAWA / WEB DESIGN / FIELD TO SCREEN
              </p>

              <p
                className={cx(
                  styles["ap-lead"],
                  styles["ap-flow"],
                  styles["ap-flow-2"]
                )}
              >
                現場で拾った感覚を、
                <br />
                <span>画面の流れに変える。</span>
              </p>

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
                きれいに見せるだけではなく、
                その店やサービスの<span>空気・言葉・導線</span>が伝わるように、
                構成から公開まで一貫して制作します。
              </p>
            </div>
          </div>
        </section>

        <section className={styles["ap-section"]}>
          <div className={styles["ap-container"]}>
            <article className={cx(styles["story-block"], styles["ap-flow"])}>
              <p className={styles["story-label"]}>PHILOSOPHY</p>

              <p className={styles["story-lead"]}>
                感覚だけで終わらせず、
                <br />
                <span>理由のある景色にする。</span>
              </p>

              <p className={styles["story-text"]}>
                写真、言葉、余白、導線。
                <br />
                どこに何を置くかで、商品・空間・サービスの伝わり方は変わります。
                <br />
                初めて見る人が、迷わず理解できる状態まで整えることを大切にしています。
              </p>

              <div className={styles["story-prose"]}>
                <p>
                  最初に見える写真、言葉の量、余白の取り方、情報の順番。
                  それぞれに小さな判断が積み重なっています。
                  その積み重ねが、見た人の受け取り方と行動を変えると考えています。
                </p>

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

              <p className={styles["story-lead"]}>
                現場で見た、
                <br />
                <span>伝わり方の差。</span>
              </p>

              <p className={styles["story-text"]}>
                Web制作に入る前は、沖縄県内の観光土産卸の営業として、
                店舗や売り場を回っていました。
                <br />
                商品がどこで見られ、どう説明され、どんな置き方なら手に取られるのか。
                その違いを、現場で見てきました。
              </p>

              <div className={styles["story-prose"]}>
                <p>
                  店舗を回っていると、同じ商品でも、置かれる場所や見え方、
                  伝え方によって反応が変わることがあります。
                  商品そのものの良さだけではなく、最初に何が目に入り、
                  どこで安心できるか。
                  その小さな違いが、選ばれるかどうかに関わっていました。
                </p>

                <p>
                  その経験が、今のWeb制作に直接つながっています。
                  最初に何が目に入るか、どこで迷うか、どこで安心するか。
                  現場で見てきた流れと同じことを、画面の中で組み立てています。
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
                <span className={styles["story-index"]}>02</span>
              </div>

              <p className={styles["story-lead"]}>
                現場の感覚を、
                <br />
                <span>画面の流れに変える。</span>
              </p>

              <p className={styles["story-text"]}>
                Webでも、最初に何が目に入るかで受け取り方は変わります。
                <br />
                写真、言葉、料金、実績、問い合わせまでの流れ。
                <br />
                見た人が迷わず進めるように、必要な情報を必要な順番で置いていきます。
              </p>

              <div className={styles["method-strip"]}>
                <div>
                  <span>01</span>
                  <p>誰に届けるかを決める</p>
                </div>

                <div>
                  <span>02</span>
                  <p>最初に見せる景色を決める</p>
                </div>

                <div>
                  <span>03</span>
                  <p>相談までの流れをつくる</p>
                </div>
              </div>
            </article>

            <article className={cx(styles["works-block"], styles["ap-flow"])}>
              <div className={styles["story-heading-row"]}>
                <p className={styles["story-label"]}>DESIGN STUDIES</p>
                <span className={styles["story-index"]}>03</span>
              </div>

              <p className={styles["story-lead"]}>
                業種ごとの空気を、
                <br />
                <span>画面の中で試す。</span>
              </p>

              <p className={styles["story-text"]}>
                作品制作では、業種ごとの見せ方・言葉・導線を試しています。
                <br />
                ただ数を増やすためではなく、実際の制作で使える判断を増やすための検証です。
              </p>

              <div className={styles["works-list"]}>
                {DESIGN_STUDIES.map((work) => (
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

            <article className={cx(styles["qualification-block"], styles["ap-flow"])}>
              <p className={styles["story-label"]}>BASIS / FOCUS</p>

              <p className={styles["story-lead"]}>
                感覚を支える、
                <br />
                <span>基礎と検証。</span>
              </p>

              <p className={styles["qualification-intro"]}>
                HTML・CSS・Web制作の基礎、色彩設計や配色理論。
                感覚だけに頼らず、制作の土台も少しずつ積み上げています。
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
                  <h2>証明できるものは、静かに置いておく。</h2>
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

            <article className={cx(styles["closing-block"], styles["ap-flow"])}>
  <p className={styles["closing-lead"]}>
  入口から、
  <br />
  <span>一緒につくり上げましょう。</span>
</p>

              <p className={styles["closing-text"]}>
                内容がまだ固まっていなくても大丈夫です。
                <br />
                業種・目的・写真・予算感を聞きながら、
                必要な見せ方と進め方を一緒に整理します。
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