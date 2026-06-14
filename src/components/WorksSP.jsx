// src/components/WorksSP.jsx
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./WorksSP.module.css";

const WORKS = [
  {
    key: "papillon",
    no: "01",
    tag: "PICK UP / WEB",
    title: "BLACK PAPILLON",
    sub: "Tattoo Studio / Naha, Okinawa",
    img: "/works/bp.webp",
    to: "/works/black-papillon",
    href: "https://black-papillon.vercel.app/",
    alt: "BLACK PAPILLON — Tattoo Studio / Naha, Okinawa（制作事例）",
    pos: "56% 50%",
  },
  {
    key: "hare",
    no: "02",
    tag: "PICK UP / EC",
    title: "HARE KARIYUSHI",
    sub: "Summer Wear EC / Okinawa",
    img: "/works/hare-kariyushi1.webp",
    to: "/works/HareKariyushiRoom",
    href: "https://hare-kariyushi.vercel.app/",
    alt: "制作事例：HARE KARIYUSHI（Summer Wear EC / Okinawa）",
    pos: "50% 52%",
  },
  {
    key: "auria",
    no: "03",
    tag: "PICK UP / WEB",
    title: "AURIA TONE",
    sub: "Space Design & Supervision",
    img: "/works/auria-tone.webp",
    to: "/works/AuriaTone",
    href: "https://auria-tone.vercel.app/",
    alt: "制作事例：AURIA TONE（Space Design & Supervision）",
    pos: "50% 50%",
  },
  {
    key: "umikaji",
    no: "04",
    tag: "PICK UP / BRAND",
    title: "UMIKAJI",
    sub: "Awamori Brand / Okinawa",
    img: "/works/umikaji-pc2.webp",
    to: "/works/UmikajiRoom",
    href: "https://umikaji-awamori.vercel.app/",
    alt: "制作事例：UMIKAJI（Awamori Brand / Okinawa）",
    pos: "50% 52%",
  },
];

function isExternal(url) {
  return /^https?:\/\//i.test(url || "");
}

function WorkItemSP({ item, index }) {
  const externalLive = isExternal(item.href);
  const hasInternal = typeof item.to === "string" && item.to.startsWith("/");

  const Wrapper = hasInternal ? Link : "a";

  const wrapperProps = hasInternal
    ? { to: item.to }
    : {
        href: item.href,
        target: externalLive ? "_blank" : undefined,
        rel: externalLive ? "noreferrer noopener" : undefined,
      };

  return (
    <article
      className={styles.item}
      data-reveal
      style={{
        "--d": `${220 + index * 80}ms`,
        "--pos": item.pos || "50% 50%",
      }}
    >
      <Wrapper
        className={styles.itemLink}
        aria-label={`${item.title} の制作事例を見る`}
        {...wrapperProps}
      >
        <div className={styles.itemTop} aria-hidden="true">
          <span>{item.no}</span>
          <span>{item.tag}</span>
        </div>

        <div className={styles.media}>
          <div className={styles.imageInner}>
            <img
              className={styles.img}
              src={item.img}
              alt={item.alt || `${item.title}（${item.sub}）`}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              decoding="async"
              style={{ objectPosition: "var(--pos)" }}
            />
          </div>

          <div className={styles.depth} aria-hidden="true" />
          <div className={styles.veil} aria-hidden="true" />
          <div className={styles.scan} aria-hidden="true" />
          <div className={styles.glint} aria-hidden="true" />

          <span
            className={`${styles.corner} ${styles.cornerA}`}
            aria-hidden="true"
          />
          <span
            className={`${styles.corner} ${styles.cornerB}`}
            aria-hidden="true"
          />

          <div className={styles.caption}>
            <div className={styles.meta}>
              <span className={styles.tag}>{item.tag}</span>
              <span className={styles.no}>{item.no}</span>
            </div>

            <div className={styles.title}>{item.title}</div>
            <div className={styles.sub}>{item.sub}</div>

            <div className={styles.open}>
              <span className={styles.openLine} aria-hidden="true" />
              <span className={styles.openText}>DETAIL</span>
            </div>
          </div>
        </div>
      </Wrapper>

      {externalLive && (
        <a
          className={styles.live}
          href={item.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${item.title} の公開サイトを新しいタブで開く`}
        >
          LIVE ↗
        </a>
      )}
    </article>
  );
}

export default function WorksSP() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    const targets = Array.from(root.querySelectorAll("[data-reveal]"));

    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add(styles.in));
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add(styles.in);
          io.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -12% 0px",
      }
    );

    targets.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className={styles.section}
      id="works"
      aria-labelledby="works-sp-title"
    >
      <div className={styles.bg} aria-hidden="true" />

      <header className={styles.head}>
        <p className={styles.kicker} data-reveal style={{ "--d": "0ms" }}>
          SELECTED
        </p>

        <h2
          id="works-sp-title"
          className={styles.h2}
          data-reveal
          style={{ "--d": "70ms" }}
        >
          <span className={styles.sr}>WORKS</span>

          <span className={styles.h2Mask}>
            <img
              className={styles.h2Img}
              src="/typography/works.png"
              srcSet="/typography/works.png 1x, /typography/works@2x.png 2x"
              alt=""
              aria-hidden="true"
              decoding="async"
            />
          </span>
        </h2>

        <p className={styles.lead} data-reveal style={{ "--d": "140ms" }}>
          見た瞬間の印象から、
          <br />
          相談したくなる流れまで設計した制作事例。
        </p>

        <p className={styles.leadSub} data-reveal style={{ "--d": "180ms" }}>
          美容・飲食・観光・ブライダル・ブランドサイトなど、
          印象で選ばれる業種を中心に制作しています。
        </p>
      </header>

      <div className={styles.list} aria-label="Works list">
        {WORKS.map((work, index) => (
          <WorkItemSP key={work.key} item={work} index={index} />
        ))}
      </div>

      <div
        className={styles.tail}
        data-reveal
        style={{ "--d": `${260 + WORKS.length * 80}ms` }}
      >
        <p className={styles.tailCopy}>
          作品全体を見たあと、今のサイトやSNSで損している部分も整理できます。
        </p>

        <div className={styles.tailLinks}>
          <Link
            className={styles.all}
            to="/works"
            aria-label="すべての制作実績を見る"
          >
            VIEW ALL WORKS
          </Link>


        </div>
      </div>
    </section>
  );
}