import { useCallback, useEffect, useMemo, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Seo from "../components/Seo";
import styles from "./Online.module.css";

import heroCoast from "../assets/online/online-hero-coast.png";
import workspaceImg from "../assets/online/online-workspace.png";
import beachPalmImg from "../assets/online/online-beach-palm.png";
import nightSeaImg from "../assets/online/online-night-sea.png";

/* =========================================================
   00 / DATA
========================================================= */

const routeItems = [
  {
    no: "01",
    title: "聞く",
    en: "Listen",
    text: "Zoom・LINE・メールで、事業の背景や今の悩みを聞きます。",
  },
  {
    no: "02",
    title: "掴む",
    en: "Read",
    text: "言葉になっていない雰囲気、強み、見せ方の方向を整理します。",
  },
  {
    no: "03",
    title: "形にする",
    en: "Design",
    text: "写真・余白・文字・導線を組み、伝わる画面へ落とし込みます。",
  },
  {
    no: "04",
    title: "届ける",
    en: "Launch",
    text: "公開後の見え方まで確認し、必要に応じて調整します。",
  },
];

const scopeItems = [
  {
    no: "01",
    title: "LP制作",
    text: "商品・サービス・キャンペーンを一枚で伝えるページ。",
  },
  {
    no: "02",
    title: "小規模サイト",
    text: "店舗・個人事業・ブランドの信頼の土台になるサイト。",
  },
  {
    no: "03",
    title: "世界観設計",
    text: "写真、余白、タイポ、言葉、動きまで含めた印象設計。",
  },
  {
    no: "04",
    title: "スマホ対応",
    text: "小さな画面でも迷わせず、問い合わせまで進める導線。",
  },
  {
    no: "05",
    title: "SEO / AEO",
    text: "GoogleにもAI検索にも文脈が伝わる構造づくり。",
  },
];

const signatureItems = [
  "入口3秒で空気を伝える構成",
  "写真と文字の位置関係",
  "余白の呼吸とスクロールの間",
  "スマホで崩れない読みやすさ",
  "検索とAIに伝わるページ構造",
];

const works = [
  {
    title: "BLACK PAPILLON",
    type: "Tattoo Studio",
    image: "/works/bp.webp",
    link: "https://black-papillon.vercel.app/",
    position: "center",
  },
  {
    title: "KOU RYUI",
    type: "Ryukyu Costume Rental",
    image: "/works/kouryui.webp",
    link: "https://kouryui.vercel.app/",
    position: "center",
  },
  {
    title: "Vow in Light",
    type: "Okinawa Wedding LP",
    image: "/works/vow-in-light-entryhero.webp",
    link: "https://vow-in-light.vercel.app/",
    position: "center",
  },
  {
    title: "UMIKAJI",
    type: "Okinawa Awamori Brand",
    image: "/works/umikaji-pc2.webp",
    link: "https://umikaji-awamori.vercel.app/",
    position: "center",
  },
  {
    title: "HARE KARIYUSHI",
    type: "Summer Wear EC",
    image: "/works/hare-kariyushi.webp",
    link: "https://hare-kariyushi.vercel.app/",
    position: "center",
  },
];

const priceRows = [
  {
    name: "LP制作",
    detail: "1ページ構成 / デザイン / 実装 / 簡易フォーム",
    price: "¥60,000〜",
  },
  {
    name: "小規模サイト",
    detail: "目安3〜5ページ / 情報設計 / 基本SEO",
    price: "¥120,000〜",
  },
  {
    name: "印象重視サイト",
    detail: "世界観設計 / 演出 / 導線設計 / 複数ページ",
    price: "¥240,000〜",
  },
  {
    name: "運用サポート",
    detail: "公開後の文章調整 / 画像差し替え / 軽微な更新",
    price: "¥9,800〜 / month",
  },
];

/* =========================================================
   HELPERS
========================================================= */

const normalizePathname = (pathname = "/") => {
  const raw = String(pathname || "/").split("?")[0].split("#")[0];

  if (!raw || raw === "/") return "/";

  const withSlash = raw.startsWith("/") ? raw : `/${raw}`;
  return withSlash.replace(/\/+$/, "") || "/";
};

const getLenisLike = () => {
  const api = window.__gd_lenis__;

  if (api?.lenis?.scrollTo) return api.lenis;
  if (api?.scrollTo) return api;

  return null;
};

/* =========================================================
   PAGE COMPONENT
========================================================= */

export default function Online() {
  const pageRef = useRef(null);
  const location = useLocation();

  const pathname = useMemo(
    () => normalizePathname(location.pathname),
    [location.pathname]
  );

  const isOnlineRoute = pathname === "/online";

  const handleSectionJump = useCallback((event, id) => {
    event.preventDefault();

    const target = document.getElementById(id);
    if (!target) return;

    const lenis = getLenisLike();

    if (lenis?.scrollTo) {
      lenis.scrollTo(target, {
        offset: 0,
        duration: 0.9,
      });
      return;
    }

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  useEffect(() => {
    if (!isOnlineRoute) {
      document.body.classList.remove("is-online-page");
      return undefined;
    }

    document.body.classList.add("is-online-page");

    return () => {
      document.body.classList.remove("is-online-page");
    };
  }, [isOnlineRoute]);

  useEffect(() => {
    if (!isOnlineRoute) return undefined;

    const root = pageRef.current;
    if (!root) return undefined;

    const reduceMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    if (reduceMotion) {
      root.querySelectorAll("[data-online-reveal]").forEach((node) => {
        node.style.opacity = 1;
        node.style.transform = "none";
        node.style.clipPath = "none";
        node.style.filter = "none";
      });

      return () => {
        root.querySelectorAll("[data-online-reveal]").forEach((node) => {
          node.style.opacity = "";
          node.style.transform = "";
          node.style.clipPath = "";
          node.style.filter = "";
        });
      };
    }

    gsap.registerPlugin(ScrollTrigger);

    let ctx;

    const cleanupOnlineGsap = () => {
      if (!root) return;

      if (ctx) {
        ctx.revert();
        ctx = null;
      }

      ScrollTrigger.getAll().forEach((trigger) => {
        const triggerEl = trigger.trigger;

        if (triggerEl && root.contains(triggerEl)) {
          trigger.kill(true);
        }
      });

      gsap.killTweensOf(root);
      gsap.killTweensOf(root.querySelectorAll("*"));

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    };

    ctx = gsap.context(() => {
      const revealNodes = gsap.utils.toArray("[data-online-reveal]");

      revealNodes.forEach((node) => {
        const type = node.dataset.onlineReveal || "fade";
        const delay = Number(node.dataset.delay || 0);
        const isImage = type === "image" || type === "mask";

        gsap.fromTo(
          node,
          {
            autoAlpha: 0,
            y: type === "hero" ? 36 : 30,
            filter: "blur(12px)",
            clipPath: isImage ? "inset(0% 0% 100% 0%)" : "inset(0% 0% 0% 0%)",
          },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            clipPath: "inset(0% 0% 0% 0%)",
            duration: type === "hero" ? 1.25 : 1.05,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: node,
              start: "top 86%",
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray("[data-online-parallax]").forEach((node) => {
        const speed = Number(node.dataset.speed || -6);
        const section = node.closest("section") || node;

        gsap.to(node, {
          yPercent: speed,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.9,
          },
        });
      });

      gsap.fromTo(
        `.${styles.arc}`,
        { strokeDashoffset: 420, autoAlpha: 0 },
        {
          strokeDashoffset: 0,
          autoAlpha: 1,
          duration: 2.2,
          stagger: 0.13,
          ease: "power2.out",
          delay: 0.42,
        }
      );

      gsap.fromTo(
        `.${styles.node}`,
        { scale: 0, transformOrigin: "center center", autoAlpha: 0 },
        {
          scale: 1,
          autoAlpha: 1,
          duration: 0.72,
          stagger: 0.075,
          ease: "back.out(1.7)",
          delay: 0.72,
        }
      );
    }, root);

    return cleanupOnlineGsap;
  }, [isOnlineRoute]);

  // Router / Outlet 側で万が一 Online が残っても、URLが /online 以外なら自分で消える
  if (!isOnlineRoute) {
    return null;
  }

  return (
    <>
      <Seo
        title="全国対応のWeb制作｜沖縄からオンラインでつながるWebデザイン"
        description="沖縄を拠点に、全国の事業者様へオンラインでWebサイト制作を行います。Zoom・LINE・メールで相談から公開まで対応。世界観設計、LP制作、小規模サイト制作、スマホ対応、SEO/AEOまでご相談ください。"
        path="/online"
      />

      <main className={styles.page} ref={pageRef}>
        {/* =========================================================
            01 / HERO
        ========================================================= */}
        <section className={styles.hero} aria-labelledby="online-hero-title">
          <div className={styles.heroPhoto} data-online-parallax data-speed="-6">
            <img
              src={heroCoast}
              alt="沖縄の海と朝の光"
              loading="eager"
              decoding="async"
            />
          </div>

          <div className={styles.heroTone} aria-hidden="true" />
          <div className={styles.heroMist} aria-hidden="true" />
          <div className={styles.heroGrain} aria-hidden="true" />

          <header className={styles.header} data-online-reveal="hero">
            <Link to="/" className={styles.brand} aria-label="GUSHIKEN DESIGN トップへ">
              <span>GUSHIKEN DESIGN</span>
              <small>Web Design / Okinawa</small>
            </Link>
          </header>

          <p className={styles.heroVertical} aria-hidden="true">
            REMOTE FROM OKINAWA
          </p>

          <div className={styles.heroStage}>
            <p className={styles.heroKicker} data-online-reveal="hero" data-delay="0.06">
              ONLINE WEB DESIGN
            </p>

            <h1
              id="online-hero-title"
              className={styles.heroTitle}
              data-online-reveal="hero"
              data-delay="0.1"
              style={{
                "--from-x": "clamp(42px, 5vw, 92px)",
                "--from-y": "clamp(118px, 17vh, 184px)",
                "--to-x": "clamp(520px, 54vw, 1030px)",
                "--to-y": "clamp(390px, 55vh, 560px)",
              }}
            >
              <span className={styles.titleFrom}>沖縄から</span>
              <span className={styles.titleTo}>全国へ。</span>
            </h1>

            <div
              className={styles.heroFlow}
              aria-hidden="true"
              data-online-reveal="hero"
              data-delay="0.16"
            >
              <div className={styles.heroSvgFlow} data-online-parallax data-speed="-3">
                <svg className={styles.networkSvg} viewBox="0 0 980 640" aria-hidden="true">
                  <defs>
                    <filter id="onlineGlow">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <path className={styles.arc} d="M48 440 C230 116, 500 80, 930 132" />
                  <path className={styles.arc} d="M64 462 C278 226, 514 190, 898 286" />
                  <path className={styles.arc} d="M96 488 C340 338, 566 332, 850 428" />
                  <path className={styles.arc} d="M128 516 C394 424, 646 408, 942 552" />

                  <path
                    className={styles.japanShape}
                    d="M650 86 C694 112 724 154 708 198 C746 216 772 260 750 302 C792 334 782 394 740 424 C754 472 714 520 662 506 C632 560 568 572 528 528 C472 538 436 484 462 438 C416 396 440 328 496 316 C480 266 512 222 554 214 C532 158 580 100 650 86Z"
                  />

                  {[
                    [104, 440],
                    [270, 230],
                    [438, 174],
                    [584, 216],
                    [712, 302],
                    [772, 414],
                    [666, 494],
                    [922, 552],
                  ].map(([cx, cy]) => (
                    <g key={`${cx}-${cy}`} filter="url(#onlineGlow)">
                      <circle className={styles.nodePulse} cx={cx} cy={cy} r="18" />
                      <circle className={styles.node} cx={cx} cy={cy} r="4.6" />
                    </g>
                  ))}
                </svg>
              </div>
            </div>

            <div className={styles.heroBottom} data-online-reveal="hero" data-delay="0.22">
              <p className={styles.heroLead}>距離を越えて、伝わるWebを。</p>

              <p className={styles.heroText}>
                相談から公開まで、オンラインで進められます。
                <br />
                画面越しでも、事業の温度と世界観が届くサイトへ。
              </p>

              <div className={styles.heroActions}>
                <Link to="/contact" className={styles.primaryBtn}>
                  相談する
                </Link>

                <a
                  href="#route"
                  className={styles.textLink}
                  onClick={(event) => handleSectionJump(event, "route")}
                >
                  進め方を見る
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            02 / DISTANCE
        ========================================================= */}
        <section className={styles.distance} aria-labelledby="distance-title">
          <div className={styles.distanceLabel} aria-hidden="true">
            DISTANCE
          </div>

          <div className={styles.distanceCopy} data-online-reveal="fade">
            <p className={styles.sectionKicker}>Distance / Design</p>
            <h2 id="distance-title">距離は、壁ではなくなる。</h2>
          </div>

          <div className={styles.distanceBody} data-online-reveal="fade" data-delay="0.08">
            <p>
              オンラインで進めるときに大切なのは、ただ連絡手段を用意することではありません。
              言葉になっていない雰囲気を拾い、写真・文章・余白・導線に置き換えること。
            </p>
            <p>沖縄からでも、全国の事業の空気を読み取り、伝わる形へ整えていきます。</p>
          </div>

          <figure className={styles.distanceImage} data-online-reveal="image">
            <img
              src={workspaceImg}
              alt="海を眺めながらオンライン制作を進めるワークスペース"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className={styles.distanceTargets} data-online-reveal="fade" data-delay="0.12">
            <span>Small Business</span>
            <span>Salon</span>
            <span>Food</span>
            <span>Tourism</span>
            <span>Apparel</span>
            <span>Personal Brand</span>
          </div>
        </section>

        {/* =========================================================
            03 / ROUTE
        ========================================================= */}
        <section
          id="route"
          className={styles.route}
          style={{ "--route-image": `url(${beachPalmImg})` }}
          aria-labelledby="route-title"
        >
          <div className={styles.routeHead} data-online-reveal="fade">
            <p className={styles.sectionKicker}>Online Route</p>
            <h2 id="route-title">
              聞く、掴む、
              <br />
              形にして届ける。
            </h2>
          </div>

          <div className={styles.routeRail} aria-hidden="true" />

          <div className={styles.routeList}>
            {routeItems.map((item, index) => (
              <article
                className={styles.routeItem}
                key={item.no}
                data-online-reveal="fade"
                data-delay={index * 0.05}
              >
                <span className={styles.routeNo}>{item.no}</span>
                <p className={styles.routeEn}>{item.en}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className={styles.routePhoto} data-online-reveal="image" aria-hidden="true" />
        </section>

        {/* =========================================================
            04 / SCOPE
        ========================================================= */}
        <section id="scope" className={styles.scope} aria-labelledby="scope-title">
          <div className={styles.scopeIntro} data-online-reveal="fade">
            <p className={styles.sectionKicker}>Scope</p>
            <h2 id="scope-title">
              作れるもの。
              <br />
              整えるだけでは
              <br />
              終わらせない。
            </h2>
            <p>
              必要なページ数や機能を並べるだけではなく、
              <br />
              見る人がどう受け取るかまで考えて設計します。
            </p>
          </div>

          <div className={styles.scopeList}>
            {scopeItems.map((item, index) => (
              <article
                className={styles.scopeItem}
                key={item.no}
                data-online-reveal="fade"
                data-delay={index * 0.04}
              >
                <span>{item.no}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* =========================================================
            05 / SIGNATURE
        ========================================================= */}
        <section className={styles.signature} aria-labelledby="signature-title">
          <div className={styles.signatureBgWord} aria-hidden="true">
            SIGNATURE
          </div>

          <div className={styles.signatureText} data-online-reveal="fade">
            <p className={styles.sectionKicker}>Style / Strength</p>
            <h2 id="signature-title">印象を設計する。</h2>
            <p>
              Webサイトは、情報を置くだけでは選ばれません。
              <br />
              写真の明るさ、文字の位置、余白の呼吸、スクロールした時の間。
              <br />
              その細部が、事業の印象を決めます。
            </p>
          </div>

          <ul className={styles.signatureList} data-online-reveal="fade" data-delay="0.08">
            {signatureItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* =========================================================
            06 / WORKS
        ========================================================= */}
        <section id="works" className={styles.works} aria-labelledby="works-title">
          <div className={styles.worksHead} data-online-reveal="fade">
            <p className={styles.sectionKicker}>Works</p>
            <h2 id="works-title">制作例</h2>
          </div>

          <div className={styles.workGallery}>
            {works.map((work, index) => (
              <a
                href={work.link}
                target="_blank"
                rel="noreferrer"
                className={`${styles.workCard} ${index === 0 ? styles.workFeatured : ""}`}
                key={work.title}
                data-online-reveal="image"
                data-delay={index * 0.04}
              >
                <figure
                  className={styles.workThumb}
                  style={{ "--work-image": `url(${work.image})` }}
                >
                  <img
                    src={work.image}
                    alt={`${work.title} の制作実績`}
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: work.position }}
                  />
                </figure>

                <div className={styles.workMeta}>
                  <h3>{work.title}</h3>
                  <p>{work.type}</p>
                </div>
              </a>
            ))}
          </div>

          <div className={styles.worksAction} data-online-reveal="fade">
            <Link to="/works" className={styles.worksButton}>
              制作事例を全て見る
            </Link>
          </div>
        </section>

        {/* =========================================================
            07 / PRICE
        ========================================================= */}
        <section className={styles.price} aria-labelledby="price-title">
          <div className={styles.priceIntro} data-online-reveal="fade">
            <p className={styles.sectionKicker}>Price</p>
            <h2 id="price-title">料金の目安</h2>
            <p>
              表示価格は税込の目安です。
              <br />
              目的・ページ数・必要な導線を整理した上で
              <br />
              正式にお見積もりします。
            </p>
          </div>

          <div className={styles.priceTable}>
            {priceRows.map((row, index) => (
              <article
                className={styles.priceRow}
                key={row.name}
                data-online-reveal="fade"
                data-delay={index * 0.04}
              >
                <h3>{row.name}</h3>
                <p>{row.detail}</p>
                <strong>{row.price}</strong>
              </article>
            ))}
          </div>

          <Link to="/price" className={styles.priceLink} data-online-reveal="fade">
            料金ページを見る
          </Link>
        </section>

        {/* =========================================================
            08 / CTA
        ========================================================= */}
        <section className={styles.cta} aria-labelledby="cta-title">
          <div className={styles.ctaBg} data-online-parallax data-speed="-5">
            <img
              src={nightSeaImg}
              alt="月光に照らされた沖縄の海"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className={styles.ctaText} data-online-reveal="fade">
            <p className={styles.sectionKicker}>Contact</p>
            <h2 id="cta-title">
              画面越しに、
              <br />
              まず聞かせてください。
            </h2>
            <p>
              作りたいものが明確でなくても構いません。
              <br />
              事業のこと、見せ方のこと、今の悩みから整理していきます。
            </p>
          </div>

          <Link to="/contact" className={styles.ctaButton} data-online-reveal="fade" data-delay="0.08">
            相談する
          </Link>
        </section>
      </main>
    </>
  );
}