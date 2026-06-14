// src/pages/Online.jsx
import { useCallback, useEffect, useMemo, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Online.module.css";

import heroCoast from "../assets/online/online-hero-coast.png";
import workspaceImg from "../assets/online/online-workspace.png";
import beachPalmImg from "../assets/online/online-beach-palm.png";
import nightSeaImg from "../assets/online/online-night-sea.png";

/* =========================================================
   00 / SEO DATA
========================================================= */

const SITE_URL = "https://gushikendesign.com";
const PAGE_PATH = "/online";

const FAQ_ITEMS = [
  {
    q: "全国からホームページ制作を依頼できますか？",
    a: "はい。GUSHIKEN DESIGNでは、沖縄を拠点に全国オンラインでホームページ制作・LP制作の相談に対応しています。Zoom・LINE・メールなどを使い、相談から公開までオンラインで進められます。",
  },
  {
    q: "オンラインだけで雰囲気や世界観は伝わりますか？",
    a: "伝えられます。写真、既存サイト、SNS、文章、参考イメージを確認しながら、事業の雰囲気や強みを整理します。言葉になっていない印象も、画面構成・余白・文字・導線へ落とし込みます。",
  },
  {
    q: "沖縄以外の店舗や個人事業でも相談できますか？",
    a: "はい。美容室、飲食店、サロン、観光、ブライダル、アパレル、個人ブランドなど、地域を問わず相談できます。沖縄県内の実店舗向け相談は、沖縄ページでも案内しています。",
  },
  {
    q: "写真や文章がまだ揃っていなくても依頼できますか？",
    a: "相談できます。必要な写真、文章、掲載情報を先に整理し、足りない素材がある場合は優先順位を決めながら進めます。既存SNSや現在のサイトがある場合は、そこから現状を確認できます。",
  },
  {
    q: "LPと複数ページのホームページはどちらが向いていますか？",
    a: "商品・サービス・キャンペーンなど目的がひとつならLP、店舗紹介・メニュー・実績・お知らせなど情報を広げたい場合は複数ページのホームページが向いています。最初に目的を整理してから提案します。",
  },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}${PAGE_PATH}#webpage`,
      url: `${SITE_URL}${PAGE_PATH}`,
      name: "全国対応のホームページ制作・LP制作｜GUSHIKEN DESIGN",
      description:
        "GUSHIKEN DESIGNは、沖縄を拠点に全国オンライン対応でホームページ制作・LP制作・Webデザインを行う個人制作スタジオです。Zoom・LINE・メールで相談から公開まで進められます。",
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
          name: "全国対応のホームページ制作",
          item: `${SITE_URL}${PAGE_PATH}`,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}${PAGE_PATH}#service`,
      name: "全国対応のホームページ制作・LP制作",
      serviceType: "ホームページ制作・LP制作・Webデザイン・SEO/AEO設計",
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "日本",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "全国の店舗、サロン、飲食店、観光サービス、ブライダル事業者、アパレル、個人ブランド、個人事業主",
      },
      description:
        "全国オンライン対応で、相談から公開まで進められるホームページ制作・LP制作です。写真、言葉、余白、導線を整理し、問い合わせにつながるWebサイトを制作します。",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}${PAGE_PATH}#faq`,
      mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
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

/* =========================================================
   01 / DATA
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
    to: "/works/black-papillon",
    position: "center",
  },
  {
    title: "KOU RYUI",
    type: "Ryukyu Costume Rental",
    image: "/works/kouryui.webp",
    to: "/works/kou-ryui",
    position: "center",
  },
  {
    title: "Vow in Light",
    type: "Okinawa Wedding LP",
    image: "/works/vow-in-light-entryhero.webp",
    to: "/works/vow-in-light",
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
    detail: "目安2〜4ページ / 情報設計 / 基本SEO",
    price: "¥120,000〜",
  },
  {
    name: "印象重視サイト",
    detail: "世界観設計 / 演出 / 導線設計 / 複数ページ",
    price: "¥200,000〜",
  },
  {
    name: "運用サポート",
    detail: "公開後の文章調整 / 画像差し替え / 軽微な更新",
    price: "¥9,800〜 / month",
  },
];

/* =========================================================
   02 / HELPERS
========================================================= */

const normalizePathname = (pathname = "/") => {
  const raw = String(pathname || "/").split("?")[0].split("#")[0];

  if (!raw || raw === "/") return "/";

  const withSlash = raw.startsWith("/") ? raw : `/${raw}`;
  return withSlash.replace(/\/+$/, "") || "/";
};

const stringifyJsonLd = (obj) =>
  JSON.stringify(obj)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");

const getLenisLike = () => {
  const api = window.__gd_lenis__;

  if (api?.lenis?.scrollTo) return api.lenis;
  if (api?.scrollTo) return api;

  return null;
};

const shouldReduceMotion = () =>
  window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

const getRevealInitialState = (node) => {
  const type = node.dataset.onlineReveal || "fade";
  const isImage = type === "image" || type === "mask";

  return {
    y: type === "hero" ? 36 : 30,
    clipPath: isImage ? "inset(0% 0% 100% 0%)" : "inset(0% 0% 0% 0%)",
    duration: type === "hero" ? 1250 : 1050,
  };
};

const prepareRevealNode = (node) => {
  if (!node) return;

  const delay = Number(node.dataset.delay || 0);
  const state = getRevealInitialState(node);

  node.style.opacity = "0";
  node.style.visibility = "hidden";
  node.style.transform = `translate3d(0, ${state.y}px, 0)`;
  node.style.filter = "blur(12px)";
  node.style.clipPath = state.clipPath;
  node.style.willChange = "transform, opacity, filter, clip-path";
  node.style.transitionProperty =
    "opacity, visibility, transform, filter, clip-path";
  node.style.transitionDuration = `${state.duration}ms`;
  node.style.transitionTimingFunction = "cubic-bezier(0.22, 1, 0.36, 1)";
  node.style.transitionDelay = `${delay}s`;
};

const revealNode = (node) => {
  if (!node) return;

  node.style.opacity = "1";
  node.style.visibility = "visible";
  node.style.transform = "translate3d(0, 0, 0)";
  node.style.filter = "blur(0px)";
  node.style.clipPath = "inset(0% 0% 0% 0%)";
};

const prepareNetworkMotion = (root, schedule) => {
  const arcs = Array.from(root.querySelectorAll(`.${styles.arc}`));
  const nodes = Array.from(root.querySelectorAll(`.${styles.node}`));

  arcs.forEach((arc, index) => {
    arc.style.opacity = "0";
    arc.style.visibility = "hidden";
    arc.style.strokeDashoffset = "420";
    arc.style.transitionProperty = "opacity, visibility, stroke-dashoffset";
    arc.style.transitionDuration = "2200ms";
    arc.style.transitionTimingFunction = "cubic-bezier(0.22, 1, 0.36, 1)";
    arc.style.transitionDelay = `${0.42 + index * 0.13}s`;
  });

  nodes.forEach((node, index) => {
    node.style.opacity = "0";
    node.style.visibility = "hidden";
    node.style.transformBox = "fill-box";
    node.style.transformOrigin = "center center";
    node.style.transform = "scale(0)";
    node.style.transitionProperty = "opacity, visibility, transform";
    node.style.transitionDuration = "720ms";
    node.style.transitionTimingFunction = "cubic-bezier(0.34, 1.56, 0.64, 1)";
    node.style.transitionDelay = `${0.72 + index * 0.075}s`;
  });

  schedule(() => {
    arcs.forEach((arc) => {
      arc.style.opacity = "1";
      arc.style.visibility = "visible";
      arc.style.strokeDashoffset = "0";
    });

    nodes.forEach((node) => {
      node.style.opacity = "1";
      node.style.visibility = "visible";
      node.style.transform = "scale(1)";
    });
  });
};

const revealNetworkImmediately = (root) => {
  const arcs = Array.from(root.querySelectorAll(`.${styles.arc}`));
  const nodes = Array.from(root.querySelectorAll(`.${styles.node}`));

  arcs.forEach((arc) => {
    arc.style.opacity = "1";
    arc.style.visibility = "visible";
    arc.style.strokeDashoffset = "0";
  });

  nodes.forEach((node) => {
    node.style.opacity = "1";
    node.style.visibility = "visible";
    node.style.transform = "none";
  });
};

const isInView = (node) => {
  if (!node) return false;

  const rect = node.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight || 0;

  return rect.top < vh * 0.92 && rect.bottom > 0;
};

const prepareWorkCard = (card, index) => {
  if (!card) return;

  card.style.opacity = "0";
  card.style.visibility = "hidden";
  card.style.transform = "translate3d(-34px, 18px, 0) scale(0.985)";
  card.style.filter = "blur(14px)";
  card.style.willChange = "transform, opacity, filter";
  card.style.transitionProperty = "opacity, visibility, transform, filter";
  card.style.transitionDuration = "980ms";
  card.style.transitionTimingFunction = "cubic-bezier(0.16, 1, 0.3, 1)";
  card.style.transitionDelay = `${index * 0.12}s`;
};

const revealWorkCard = (card) => {
  if (!card) return;

  card.style.opacity = "1";
  card.style.visibility = "visible";
  card.style.transform = "translate3d(0, 0, 0) scale(1)";
  card.style.filter = "blur(0px)";
};

const revealWorkCards = (cards) => {
  cards.forEach(revealWorkCard);
};

/* =========================================================
   03 / SMALL COMPONENTS
========================================================= */

function WorkCard({ work, index }) {
  const inner = (
    <>
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
    </>
  );

  const className = `${styles.workCard} ${
    index === 0 ? styles.workFeatured : ""
  }`;

  if (work.to) {
    return (
      <Link
        to={work.to}
        className={className}
        data-online-work-card
        data-work-index={index}
      >
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={work.link}
      target="_blank"
      rel="noreferrer"
      className={className}
      data-online-work-card
      data-work-index={index}
    >
      {inner}
    </a>
  );
}

function OnlineFaq() {
  return (
    <section
      id="faq"
      className="relative z-10 px-6 py-24 sm:px-8 sm:py-32"
      aria-labelledby="online-faq-title"
    >
      <div className="mx-auto w-full max-w-[980px]">
        <div data-online-reveal="fade">
          <p className={styles.sectionKicker}>FAQ</p>

          <h2
            id="online-faq-title"
            className="mt-4 max-w-[760px] text-[clamp(32px,5vw,72px)] leading-[1.02] tracking-[-0.06em] text-[#f5efe3]"
          >
            オンライン相談の不安を、
            <br />
            先にほどく。
          </h2>

          <p className="mt-7 max-w-[680px] text-[14px] leading-[2.05] tracking-[0.04em] text-[#f5efe3]/68">
            全国対応でも、進め方が見えれば不安は減らせます。
            <br />
            相談前に気になりやすいことを、先に整理しています。
          </p>
        </div>

        <div className="mt-12 border-t border-[#f5efe3]/16">
          {FAQ_ITEMS.map(({ q, a }, index) => (
            <details
              key={q}
              className="group border-b border-[#f5efe3]/13 py-6"
              data-online-reveal="fade"
              data-delay={index * 0.04}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[15px] leading-[1.8] tracking-[0.04em] text-[#f5efe3]/88">
                <span>{q}</span>
                <span className="text-[#d9b98a]/70 transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 max-w-[760px] text-[14px] leading-[2.05] tracking-[0.03em] text-[#f5efe3]/62">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   04 / PAGE COMPONENT
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

    let active = true;
    let observer = null;
    let worksObserver = null;
    let scrollRaf = 0;
    let workFallbackTimer = 0;
    const rafIds = [];

    const schedule = (fn) => {
      const id = requestAnimationFrame(() => {
        if (!active) return;
        fn();
      });

      rafIds.push(id);
      return id;
    };

    const revealNodes = Array.from(
      root.querySelectorAll("[data-online-reveal]")
    );
    const parallaxNodes = Array.from(
      root.querySelectorAll("[data-online-parallax]")
    );
    const workCards = Array.from(
      root.querySelectorAll("[data-online-work-card]")
    );
    const worksSection = root.querySelector(`.${styles.works}`);

    if (shouldReduceMotion()) {
      revealNodes.forEach(revealNode);

      parallaxNodes.forEach((node) => {
        node.style.transform = "translate3d(0, 0, 0)";
      });

      revealNetworkImmediately(root);
      revealWorkCards(workCards);

      return () => {
        active = false;
        rafIds.forEach((id) => cancelAnimationFrame(id));
        cancelAnimationFrame(scrollRaf);
        window.clearTimeout(workFallbackTimer);
      };
    }

    revealNodes.forEach(prepareRevealNode);
    workCards.forEach(prepareWorkCard);
    prepareNetworkMotion(root, schedule);

    schedule(() => {
      if (!active) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            revealNode(entry.target);
            observer?.unobserve(entry.target);
          });
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -14% 0px",
        }
      );

      revealNodes.forEach((node) => {
        if (isInView(node)) {
          revealNode(node);
          return;
        }

        observer.observe(node);
      });
    });

    if (worksSection && workCards.length) {
      worksObserver = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (!entry?.isIntersecting) return;

          revealWorkCards(workCards);

          worksObserver?.disconnect();
          worksObserver = null;
        },
        {
          threshold: 0.16,
          rootMargin: "0px 0px -12% 0px",
        }
      );

      worksObserver.observe(worksSection);

      if (isInView(worksSection)) {
        revealWorkCards(workCards);
        worksObserver.disconnect();
        worksObserver = null;
      }

      workFallbackTimer = window.setTimeout(() => {
        if (!active) return;
        if (!worksSection) return;

        const hiddenCount = workCards.filter(
          (card) => card.style.opacity === "0"
        ).length;

        if (hiddenCount === workCards.length && isInView(worksSection)) {
          revealWorkCards(workCards);
        }
      }, 1200);
    }

    const updateParallax = () => {
      if (!active) return;

      scrollRaf = 0;

      const vh = window.innerHeight || 1;

      parallaxNodes.forEach((node) => {
        const speed = Number(node.dataset.speed || -6);
        const section = node.closest("section") || node;
        const rect = section.getBoundingClientRect();

        const progress = Math.min(
          1,
          Math.max(0, (vh - rect.top) / (vh + rect.height))
        );

        const y = (progress - 0.5) * speed * 18;

        node.style.transform = `translate3d(0, ${y}px, 0)`;
      });
    };

    const requestParallax = () => {
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(updateParallax);
    };

    requestParallax();

    window.addEventListener("scroll", requestParallax, { passive: true });
    window.addEventListener("resize", requestParallax);

    return () => {
      active = false;

      if (observer) {
        observer.disconnect();
        observer = null;
      }

      if (worksObserver) {
        worksObserver.disconnect();
        worksObserver = null;
      }

      rafIds.forEach((id) => cancelAnimationFrame(id));
      cancelAnimationFrame(scrollRaf);
      window.clearTimeout(workFallbackTimer);

      window.removeEventListener("scroll", requestParallax);
      window.removeEventListener("resize", requestParallax);
    };
  }, [isOnlineRoute, pathname]);

  if (!isOnlineRoute) {
    return null;
  }

  return (
    <main className={styles.page} ref={pageRef}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifyJsonLd(JSON_LD),
        }}
      />

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
          <Link
            to="/"
            className={styles.brand}
            aria-label="GUSHIKEN DESIGN トップへ"
          >
            <span>GUSHIKEN DESIGN</span>
            <small>Online Web Design / Japan</small>
          </Link>
        </header>

        <p className={styles.heroVertical} aria-hidden="true">
          REMOTE FROM OKINAWA
        </p>

        <div className={styles.heroStage}>
          <p
            className={styles.heroKicker}
            data-online-reveal="hero"
            data-delay="0.06"
          >
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
            <span className="sr-only">
              全国対応のホームページ制作・LP制作。オンラインで相談から公開まで。
            </span>

            <span className={styles.titleFrom} aria-hidden="true">
              沖縄から
            </span>

            <span className={styles.titleTo} aria-hidden="true">
              全国へ。
            </span>
          </h1>

          <div
            className={styles.heroFlow}
            aria-hidden="true"
            data-online-reveal="hero"
            data-delay="0.16"
          >
            <div
              className={styles.heroSvgFlow}
              data-online-parallax
              data-speed="-3"
            >
              <svg
                className={styles.networkSvg}
                viewBox="0 0 980 640"
                aria-hidden="true"
              >
                <defs>
                  <filter id="onlineGlow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <path
                  className={styles.arc}
                  d="M48 440 C230 116, 500 80, 930 132"
                />
                <path
                  className={styles.arc}
                  d="M64 462 C278 226, 514 190, 898 286"
                />
                <path
                  className={styles.arc}
                  d="M96 488 C340 338, 566 332, 850 428"
                />
                <path
                  className={styles.arc}
                  d="M128 516 C394 424, 646 408, 942 552"
                />

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

          <div
            className={styles.heroBottom}
            data-online-reveal="hero"
            data-delay="0.22"
          >
            <p className={styles.heroLead}>
              全国から、オンラインで相談できます。
            </p>

            <p className={styles.heroText}>
              Zoom・LINE・メールで、相談から公開まで。
              <br />
              距離を越えて、事業の温度と世界観が届くWebサイトへ。
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
          <p className={styles.sectionKicker}>Distance / Online Service</p>

          <h2 id="distance-title">
            距離は、
            <br />
            制作の壁ではない。
          </h2>
        </div>

        <div
          className={styles.distanceBody}
          data-online-reveal="fade"
          data-delay="0.08"
        >
          <p>
            全国対応のWeb制作で大切なのは、ただ連絡手段を用意することではありません。
            画面越しでも、事業の背景、空気感、強み、伝えたい印象を読み取ることです。
          </p>

          <p>
            写真、文章、既存サイト、SNS、参考イメージを見ながら、
            言葉になっていない雰囲気を、余白・文字・構成・導線へ変えていきます。
          </p>

          <p>
            オンラインでも、伝える順番を間違えなければ、
            相談から公開まで進められます。
          </p>
        </div>

        <figure className={styles.distanceImage} data-online-reveal="image">
          <img
            src={workspaceImg}
            alt="オンラインでWeb制作を進めるワークスペース"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <div
          className={styles.distanceTargets}
          data-online-reveal="fade"
          data-delay="0.12"
        >
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

        <ul
          className={styles.signatureList}
          data-online-reveal="fade"
          data-delay="0.08"
        >
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
            <WorkCard key={work.title} work={work} index={index} />
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
          08 / FAQ
      ========================================================= */}
      <OnlineFaq />

      {/* =========================================================
          09 / CTA
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

        <Link
          to="/contact"
          className={styles.ctaButton}
          data-online-reveal="fade"
          data-delay="0.08"
        >
          相談する
        </Link>
      </section>
    </main>
  );
}