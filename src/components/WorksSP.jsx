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
  to: "/works/BlackPapillonRoom",
  href: "https://black-papillon.vercel.app/",
  alt: "BLACK PAPILLON — Tattoo Studio / Naha, Okinawa（制作事例）",
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
  },
  {
    key: "auria",
    no: "03",
    tag: "PICK UP / WEB",
    title: "AURIA TONE",
    sub: "Space Design & Supervision",
    // TODO: works用画像を配置してパスを合わせる
    img: "/works/auria-tone.webp",
    // TODO: ルート名が違う場合はここだけ合わせる
    to: "/works/AuriaTone",
    href: "https://auria-tone.vercel.app/",
    alt: "制作事例：AURIA TONE（Space Design & Supervision）",
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