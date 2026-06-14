// src/components/Works.jsx
import { useLayoutEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import WorksCurtainImage from "../visuals/WorksCurtainImage";
import WorksVantaFog from "../visuals/WorksVantaFog";

import styles from "./Works.module.css";

gsap.registerPlugin(ScrollTrigger);

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
    img: "/works/auria-tone.webp",
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

function getCurtainStrength(kind) {
  if (kind === "main") return 1.0;
  if (kind === "wide") return 0.85;
  return 0.72;
}

function WorkCard({ item, kind = "duo", order = 0 }) {
  const hasInternal = typeof item.to === "string" && item.to.startsWith("/");
  const externalLive = isExternal(item.href);

  const Wrapper = hasInternal ? Link : "a";

  const wrapperProps = hasInternal
    ? { to: item.to }
    : {
        href: item.href,
        target: externalLive ? "_blank" : undefined,
        rel: externalLive ? "noreferrer noopener" : undefined,
      };

  const isFade = kind === "main";
  const isEager = kind === "main" && order === 0;

  return (
    <article
      className={`${styles.card} ${styles[`card_${kind}`]}`}
      data-card
      data-kind={kind}
      data-order={order}
    >
      <Wrapper
        className={styles.cardLink}
        aria-label={`${item.title} の制作事例を見る`}
        {...wrapperProps}
      >
        <div
          className={styles.imageMask}
          data-mask
          {...(isFade ? { "data-fade": "1" } : {})}
        >
          <div className={styles.imageInner} data-parallax>
            <img
              className={styles.image}
              data-image
              src={item.img}
              alt={item.alt || item.title}
              decoding="async"
              loading={isEager ? "eager" : "lazy"}
              fetchPriority={isEager ? "high" : "auto"}
            />

            <WorksCurtainImage
              src={item.img}
              className={styles.curtainPlane}
              strength={getCurtainStrength(kind)}
            />
          </div>

          <div className={styles.veil} data-veil aria-hidden="true" />
          <div className={styles.glint} data-glint aria-hidden="true" />
        </div>

        <div className={styles.stamp} data-stamp aria-hidden="true">
          <span className={styles.stampLine} />
          <span className={styles.stampNo}>{item.no}</span>
          <span className={styles.stampTag}>{item.tag}</span>
        </div>

        <div className={styles.caption} data-text>
          <div className={styles.meta}>
            <span className={styles.tag}>{item.tag}</span>
            <span className={styles.no}>{item.no}</span>
          </div>

          <div className={styles.title}>{item.title}</div>
          <div className={styles.sub}>{item.sub}</div>

          <span className={styles.open}>DETAIL →</span>
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

export default function Works() {
  const rootRef = useRef(null);

  const stages = useMemo(() => {
    return [
      { key: "main", type: "main", label: "MAIN", items: [WORKS[0]] },
      { key: "duo", type: "duo", label: "DUO", items: [WORKS[1], WORKS[2]] },
      { key: "wide", type: "wide", label: "WIDE", items: [WORKS[3]] },
    ];
  }, []);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    const coarse = window.matchMedia?.("(pointer: coarse)")?.matches ?? false;
    const narrow = window.matchMedia?.("(max-width: 980px)")?.matches ?? false;

    // PCのみ。SP/タブレットは成立優先で静的。
    if (reduce || coarse || narrow) return undefined;

    const ctx = gsap.context(() => {
      const intro = gsap.utils.toArray("[data-works-intro]");

      gsap.set(intro, {
        opacity: 0,
        y: 18,
        filter: "blur(0.32px)",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 72%",
            once: true,
          },
          defaults: {
            ease: "power3.out",
          },
        })
        .to(intro, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.05,
          stagger: 0.11,
        });

      const head = root.querySelector(`.${styles.head}`);
      const titleMask = head?.querySelector("[data-works-title]");
      const titleImg = titleMask?.querySelector(`.${styles.h2Img}`);

      if (titleMask && titleImg) {
        gsap.set(titleMask, {
          clipPath: "inset(0% 0% 100% 0%)",
          y: 12,
          scale: 0.985,
          filter: "blur(0.22px)",
        });

        gsap.set(titleImg, {
          opacity: 0,
          scale: 1.01,
        });

        const titleTimeline = gsap.timeline({
          paused: true,
          defaults: {
            ease: [0.22, 1, 0.36, 1],
          },
        });

        titleTimeline
          .to(
            titleMask,
            {
              clipPath: "inset(0% 0% 0% 0%)",
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              duration: 0.78,
            },
            0
          )
          .to(
            titleImg,
            {
              opacity: 1,
              scale: 1,
              duration: 0.72,
            },
            0.06
          );

        ScrollTrigger.create({
          trigger: head || root,
          start: "top 82%",
          onEnter: (self) => {
            titleTimeline.play(0);
            self.kill();
          },
        });
      }

      const panels = gsap.utils.toArray("[data-stage]");

      panels.forEach((panel, panelIndex) => {
        const type = panel.getAttribute("data-stage-type") || "duo";
        const cards = Array.from(panel.querySelectorAll("[data-card]"));

        const blurText = 0.28;
        const yText = 14;

        cards.forEach((card) => {
          const mask = card.querySelector("[data-mask]");
          const image = card.querySelector("[data-image]");
          const texts = card.querySelectorAll("[data-text]");
          const veil = card.querySelector("[data-veil]");
          const stamp = card.querySelector("[data-stamp]");
          const glint = card.querySelector("[data-glint]");

          if (!mask || !image) return;

          gsap.set(texts, {
            opacity: 0,
            y: yText,
            filter: `blur(${blurText}px)`,
          });

          const isFade = mask.hasAttribute("data-fade");

          if (isFade) {
            gsap.set(mask, {
              clipPath: "inset(0% 0% 0% 0%)",
              opacity: 0,
              y: 12,
            });
          } else {
            gsap.set(mask, {
              clipPath: "inset(0% 0% 100% 0%)",
            });
          }

          gsap.set(image, {
            scale: 1.09,
            yPercent: 0,
          });

          if (veil) gsap.set(veil, { opacity: 0 });

          if (stamp) {
            gsap.set(stamp, {
              opacity: 0,
              y: 14,
              filter: "blur(0.18px)",
            });
          }

          if (glint) {
            gsap.set(glint, {
              opacity: 0,
              xPercent: -140,
            });
          }
        });

        const tl = gsap.timeline({
          paused: true,
          defaults: {
            ease: [0.22, 1, 0.36, 1],
          },
        });

        const runGlint = (glintEl, strength = 0.75, delay = 0) => {
          if (!glintEl) return;

          gsap
            .timeline()
            .set(glintEl, {
              opacity: strength,
              xPercent: -140,
            })
            .to(glintEl, {
              xPercent: 140,
              duration: 0.92,
              ease: [0.22, 1, 0.36, 1],
              delay,
            })
            .to(
              glintEl,
              {
                opacity: 0,
                duration: 0.18,
              },
              delay + 0.7
            );
        };

        if (type === "main") {
          const card = cards[0];
          if (!card) return;

          const mask = card.querySelector("[data-mask]");
          const image = card.querySelector("[data-image]");
          const texts = card.querySelectorAll("[data-text]");
          const veil = card.querySelector("[data-veil]");
          const stamp = card.querySelector("[data-stamp]");
          const glint = card.querySelector("[data-glint]");

          tl.to(mask, { opacity: 1, y: 0, duration: 0.66 }, 0.02)
            .to(veil, { opacity: 1, duration: 0.72 }, 0.1)
            .to(image, { scale: 1.06, yPercent: -1, duration: 1.25 }, 0.02)
            .to(
              texts,
              {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.62,
              },
              0.2
            )
            .to(
              stamp,
              {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.62,
              },
              0.24
            );

          ScrollTrigger.create({
            trigger: panel,
            start: "top 82%",
            onEnter: () => runGlint(glint, 0.9, 0),
            onEnterBack: () => runGlint(glint, 0.9, 0),
          });
        }

        if (type === "duo") {
          const firstCard = cards[0];
          const secondCard = cards[1];

          if (!firstCard || !secondCard) return;

          const m1 = firstCard.querySelector("[data-mask]");
          const i1 = firstCard.querySelector("[data-image]");
          const t1 = firstCard.querySelectorAll("[data-text]");
          const v1 = firstCard.querySelector("[data-veil]");
          const s1 = firstCard.querySelector("[data-stamp]");
          const g1 = firstCard.querySelector("[data-glint]");

          const m2 = secondCard.querySelector("[data-mask]");
          const i2 = secondCard.querySelector("[data-image]");
          const t2 = secondCard.querySelectorAll("[data-text]");
          const v2 = secondCard.querySelector("[data-veil]");
          const s2 = secondCard.querySelector("[data-stamp]");
          const g2 = secondCard.querySelector("[data-glint]");

          tl.to(m1, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.72 }, 0.02)
            .to(v1, { opacity: 1, duration: 0.72 }, 0.1)
            .to(i1, { scale: 1.06, yPercent: -2, duration: 1.3 }, 0.02)
            .to(
              t1,
              {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.62,
              },
              0.22
            )
            .to(
              s1,
              {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.62,
              },
              0.26
            )
            .to(m2, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.72 }, 0.18)
            .to(v2, { opacity: 1, duration: 0.72 }, 0.26)
            .to(i2, { scale: 1.06, yPercent: 2, duration: 1.3 }, 0.18)
            .to(
              t2,
              {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.62,
              },
              0.38
            )
            .to(
              s2,
              {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.62,
              },
              0.42
            );

          ScrollTrigger.create({
            trigger: panel,
            start: "top 82%",
            onEnter: () => {
              runGlint(g1, 0.72, 0);
              runGlint(g2, 0.68, 0.1);
            },
            onEnterBack: () => {
              runGlint(g1, 0.72, 0);
              runGlint(g2, 0.68, 0.1);
            },
          });
        }

        if (type === "wide") {
          const card = cards[0];
          if (!card) return;

          const mask = card.querySelector("[data-mask]");
          const image = card.querySelector("[data-image]");
          const texts = card.querySelectorAll("[data-text]");
          const veil = card.querySelector("[data-veil]");
          const stamp = card.querySelector("[data-stamp]");
          const glint = card.querySelector("[data-glint]");

          tl.to(mask, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.72 }, 0.02)
            .to(veil, { opacity: 1, duration: 0.72 }, 0.1)
            .to(image, { scale: 1.06, yPercent: 1, duration: 1.35 }, 0.02)
            .to(
              texts,
              {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.62,
              },
              0.22
            )
            .to(
              stamp,
              {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.62,
              },
              0.26
            );

          ScrollTrigger.create({
            trigger: panel,
            start: "top 82%",
            onEnter: () => runGlint(glint, 0.68, 0),
            onEnterBack: () => runGlint(glint, 0.68, 0),
          });
        }

        ScrollTrigger.create({
          trigger: panel,
          start: "top 82%",
          onEnter: () => tl.restart(true),
          onEnterBack: () => tl.restart(true),
        });

        if (panelIndex === 0) {
          requestAnimationFrame(() => {
            try {
              if (ScrollTrigger.isInViewport(panel, 0.65)) {
                tl.play(0);
              }
            } catch (_) {
              tl.play(0);
            }
          });
        }
      });

      const cardsForParallax = gsap.utils.toArray("[data-card]");

      cardsForParallax.forEach((card) => {
        const inner = card.querySelector("[data-parallax]");
        if (!inner) return;

        const kind = card.getAttribute("data-kind") || "";
        const base = kind === "main" ? 4.6 : kind === "wide" ? 3.9 : 3.2;
        const dir = kind === "duoB" ? -1 : 1;
        const amount = base * dir;

        gsap.fromTo(
          inner,
          { yPercent: -amount },
          {
            yPercent: amount,
            ease: "none",
            immediateRender: false,
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.85,
              invalidateOnRefresh: true,
            },
          }
        );
      });
    }, root);

    const refreshTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 240);

    const onResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.clearTimeout(refreshTimer);
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, [stages]);

  return (
    <section
      ref={rootRef}
      className={styles.section}
      id="works"
      aria-labelledby="works-title"
    >
      <WorksVantaFog className={styles.worksFogBg} />

      <header className={styles.head}>
        <p className={styles.kicker} data-works-intro>
          SELECTED
        </p>

        <h2 id="works-title" className={styles.h2}>
          <span className={styles.h2Sr}>WORKS</span>

          <span className={styles.h2Mask} data-works-title>
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

        <p className={styles.lead} data-works-intro>
          見た瞬間の印象から、
          <br />
          相談したくなる流れまで設計した制作事例。
        </p>

        <p className={styles.leadSub} data-works-intro>
          美容・飲食・観光・ブライダル・ブランドサイトなど、
          印象で選ばれる業種を中心に制作しています。
        </p>
      </header>

      <div className={styles.runway}>
        {stages.map((stage) => (
          <article
            key={stage.key}
            className={styles.panel}
            data-stage
            data-stage-type={stage.type}
          >
            <div className={styles.stage}>
              <div className={styles.axis} aria-hidden="true">
                <span className={styles.axisLabel}>{stage.label}</span>
                <span className={styles.axisLine} />
              </div>

              <div className={styles.seamTop} aria-hidden="true" />
              <div className={styles.seamBottom} aria-hidden="true" />

              <div className={styles.bgNo} aria-hidden="true">
                {stage.type === "main"
                  ? "01"
                  : stage.type === "duo"
                    ? "02–03"
                    : "04"}
              </div>

              <div
                className={`${styles.inner} ${styles[`inner_${stage.type}`]}`}
              >
                {stage.type === "main" && (
                  <WorkCard item={stage.items[0]} kind="main" order={0} />
                )}

                {stage.type === "duo" && (
                  <div className={styles.duoWrap}>
                    <WorkCard item={stage.items[0]} kind="duoA" order={0} />
                    <WorkCard item={stage.items[1]} kind="duoB" order={1} />
                  </div>
                )}

                {stage.type === "wide" && (
                  <WorkCard item={stage.items[0]} kind="wide" order={0} />
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.tail} aria-label="Works archive">
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