// src/components/WorksSP.jsx
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./WorksSP.module.css";

const WORKS = [
  {
    key: "kou",
    no: "01",
    tag: "PICK UP / WEB",
    title: "KOU RYUI",
    sub: "琉球衣装キャンペーンサイト",
    img: "/works/kouryui.webp",
    href: "https://kouryui.vercel.app/",
    pos: "50% 56%",
  },
  {
    key: "vow",
    no: "02",
    tag: "PICK UP / WEB",
    title: "Vow in Light",
    sub: "Wedding / Okinawa",
    img: "/works/vow-in-light-entryhero.webp",
    href: "https://vow-in-light.vercel.app/",
    pos: "46% 44%",
  },
  {
    key: "umikaji",
    no: "03",
    tag: "PICK UP / BRAND",
    title: "UMIKAJI",
    sub: "Awamori Brand / Okinawa",
    img: "/works/umikaji-pc2.webp",
    href: "https://umikaji-awamori.vercel.app/",
    pos: "72% 56%",
  },
  {
    key: "velmont",
    no: "04",
    tag: "PICK UP / BRAND",
    title: "VELMONT",
    sub: "Luxury Auto Showroom",
    img: "/works/velmonte222.webp",
    href: "https://velmont-virid.vercel.app/",
    pos: "50% 54%",
  },
];

function isExternal(url) {
  return /^https?:\/\//i.test(url);
}

export default function WorksSP() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    const targets = Array.from(root.querySelectorAll("[data-reveal]"));

    if (reduce || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add(styles.in));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add(styles.in);
          io.unobserve(e.target);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -10% 0px" }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={rootRef} className={styles.section} id="works" aria-label="Works">
      <header className={styles.head}>
        <p className={styles.kicker} data-reveal style={{ "--d": "0ms" }}>
          SELECTED
        </p>

        <h2 className={styles.h2} data-reveal style={{ "--d": "70ms" }}>
          <span className={styles.sr}>WORKS</span>
          <span className={styles.h2Mask}>
            <img
              className={styles.h2Img}
              src="/typography/works.png"
              alt=""
              aria-hidden="true"
              decoding="async"
            />
          </span>
        </h2>

        <p className={styles.lead} data-reveal style={{ "--d": "140ms" }}>
          事例は、判断しやすい順に。
          <br />
          印象と導線を、きれいに整える。
        </p>
      </header>

      <div className={styles.list} aria-label="Works list">
        {WORKS.map((w, i) => {
          const external = isExternal(w.href);

          return (
            <a
              key={w.key}
              className={styles.item}
              data-reveal
              style={{
                "--d": `${220 + i * 70}ms`,
                "--pos": w.pos || "50% 50%",
              }}
              href={w.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer noopener" : undefined}
              aria-label={`${w.title} を新しいタブで開く`}
            >
              <div className={styles.media}>
                <div className={styles.imageInner}>
                  <img
                    className={styles.img}
                    src={w.img}
                    alt={`${w.title}（${w.sub}）`}
                    loading={i === 0 ? "eager" : "lazy"}
                    fetchPriority={i === 0 ? "high" : "auto"}
                    decoding="async"
                    style={{ objectPosition: "var(--pos)" }}
                  />
                </div>

                <div className={styles.veil} aria-hidden="true" />
                <div className={styles.glint} aria-hidden="true" />

                <div className={styles.caption} aria-label="Work caption">
                  <div className={styles.meta}>
                    <span className={styles.tag}>{w.tag}</span>
                    <span className={styles.no}>{w.no}</span>
                  </div>

                  <div className={styles.title}>{w.title}</div>
                  <div className={styles.sub}>{w.sub}</div>
                  <div className={styles.open}>OPEN ↗</div>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <div
        className={styles.tail}
        data-reveal
        style={{ "--d": `${220 + WORKS.length * 70 + 80}ms` }}
      >
        <Link className={styles.all} to="/works" aria-label="すべての制作実績を見る">
          VIEW ALL WORKS
        </Link>
      </div>
    </section>
  );
}