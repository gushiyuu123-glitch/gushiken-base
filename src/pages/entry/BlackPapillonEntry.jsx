// src/pages/entry/BlackPapillonEntry.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const HERO_IMG_PC = "/works1/BlackPapillonRoom2.png";
const HERO_IMG_SP = "/works1/BlackPapillonRoomsp.png";
const LOGO_SVG = "/BLACKPAPILLON.svg";

const LIVE_URL = "https://black-papillon.vercel.app/";
const GUSHIKEN_URL = "https://gushikendesign.com";
const PAGE_PATH = "/works/black-papillon";

const COPY = {
  hero: {
    kicker: "TATTOO STUDIO WEBSITE",
    meta: ["HEALED FIRST", "CONSULTATION DESIGN", "B&G"],
  },

  overview: {
    label: "OVERVIEW",
    h1: "タトゥースタジオ向けホームページ制作。",
    sub: "SNSだけでは伝わらない“仕上がりと安心”を、Webサイトで整える。",
    body: [
      "BLACK PAPILLONは、タトゥースタジオを想定したWebサイト制作事例です。",
      "このページは、完成サイトへ入る前の前座室です。作品の世界観を先に見せながら、どんな考えで設計したのか、どんな不安を減らすためのサイトなのかを整理しています。",
      "タトゥーは、見た目の好みだけで決まるサービスではありません。料金、サイズ、痛み、衛生面、治癒後の仕上がり、相談時に何を送ればいいのか。そうした不安を、世界観を壊さずに順番よく伝えることが大切です。",
    ],
  },

  answer: {
    label: "ANSWER",
    h2: "タトゥースタジオに、ホームページは必要ですか？",
    text: "必要です。Instagramは作品を見せる場所として強い一方で、料金目安、相談方法、注意点、アフターケアは流れやすい。Webサイトは、信頼と予約導線を固定する場所です。SNSとホームページを分けて使うことで、問い合わせ前の不安を減らせます。",
  },

  difference: {
    label: "DIFFERENCE",
    h2: "BLACK PAPILLONで差別化した設計",
    lead: "ただ暗く、ただ格好よく作るだけでは弱い。タトゥースタジオの空気を保ったまま、予約前の迷いだけを消す設計です。",
    items: [
      {
        title: "HEALED FIRST",
        text: "施術直後だけではなく、治癒後の残り方まで想像できる構成にする。",
      },
      {
        title: "CONSULTATION MAP",
        text: "相談時に送る情報を明確化し、問い合わせの心理的ハードルを下げる。",
      },
      {
        title: "PRICE BEFORE FEAR",
        text: "料金の不安を放置せず、サイズ別・内容別の目安を先に見せる。",
      },
      {
        title: "DARK, BUT READABLE",
        text: "黒の世界観を保ちながら、読める余白・行間・導線に整える。",
      },
    ],
  },

  target: {
    label: "TARGET",
    h2: "こういうタトゥースタジオに向いています",
    items: [
      "Fine line / Black & Grey / Coverup など、得意な施術スタイルを明確に見せたい",
      "Instagramだけでは、料金・相談方法・注意点まで伝えきれていない",
      "世界観はあるのに、予約導線や問い合わせ導線が弱い",
      "治癒後の仕上がりやアフターケアまで伝えたい",
    ],
  },

  problem: {
    label: "PROBLEM",
    h2: "問い合わせ前に止まる原因",
    items: [
      "施術スタイルの違いが見えない",
      "料金の目安がない",
      "治癒後のイメージがない",
      "相談方法が曖昧",
      "注意点やケアが見つけにくい",
    ],
  },

  structure: {
    label: "STRUCTURE",
    h2: "予約までの流れを、迷わない順番にする",
    items: [
      {
        title: "世界観で止める",
        text: "最初にブランドの空気を見せる。タトゥースタジオでは、入口の印象がそのまま信頼になります。",
      },
      {
        title: "スタイルを見せる",
        text: "得意ジャンルを先に出す。ユーザーが“自分の欲しい雰囲気に合うか”を判断できるようにします。",
      },
      {
        title: "料金目安を見せる",
        text: "相談前の不安を減らす。すべてを固定料金にするのではなく、サイズや内容ごとの目安を置きます。",
      },
      {
        title: "ケアと注意点を見せる",
        text: "施術前後の不安を先回りする。安心材料を後ろに隠さず、必要な場所で読ませます。",
      },
      {
        title: "相談導線を一本化する",
        text: "Instagram、LINE、フォームを増やしすぎない。最終的にどこから相談すればいいかを明確にします。",
      },
    ],
  },

  case: {
    label: "CASE",
    h2: "実例：BLACK PAPILLON",
    body: [
      "BLACK PAPILLONは、黒、余白、ロゴ、静かな動きで、タトゥースタジオの強い世界観を先に見せるコンセプトサイトです。",
      "ただし、雰囲気だけでは終わらせません。施術スタイル、治癒後の仕上がり、料金目安、相談導線、アフターケアへ自然に進めるように構成しています。",
      "この前座室では説明を最小限に整理し、完成サイトでは視覚表現に集中できるようにしています。",
    ],
  },

  faq: {
    label: "FAQ",
    h2: "よくある質問",
    list: [
      [
        "タトゥースタジオのホームページ制作に対応できますか？",
        "はい。施術スタイル、料金目安、予約導線、注意点、アフターケアまで整理したWebサイト制作に対応できます。",
      ],
      [
        "Instagramだけでは足りませんか？",
        "Instagramは作品を見せるには強いですが、料金目安、相談方法、注意点、アフターケアなどを順番よく伝えるにはWebサイトがあると補完できます。",
      ],
      [
        "暗い写真や黒ベースでも見やすくできますか？",
        "できます。余白、文字量、背景とのコントラスト、導線の置き方を整えることで、重さではなく世界観として見せられます。",
      ],
      [
        "料金をすべて公開しないといけませんか？",
        "すべてを細かく公開する必要はありません。ただし、ワンポイント、標準サイズ、大きめ、Coverupなど、相談前の目安はある方が不安を減らせます。",
      ],
      [
        "沖縄以外のタトゥースタジオでも相談できますか？",
        "はい。全国オンラインで対応できます。写真、SNS、現在の導線を確認しながら、必要な範囲を整理できます。",
      ],
    ],
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${GUSHIKEN_URL}${PAGE_PATH}#webpage`,
      url: `${GUSHIKEN_URL}${PAGE_PATH}`,
      name: "タトゥースタジオ向けホームページ制作｜BLACK PAPILLON",
      description:
        "BLACK PAPILLONは、タトゥースタジオ向けのWebサイト制作事例です。施術スタイル、治癒後の仕上がり、料金目安、相談導線、アフターケアを、世界観を崩さずに整理しています。",
      inLanguage: "ja",
      isPartOf: {
        "@id": `${GUSHIKEN_URL}/#website`,
      },
      about: {
        "@id": `${GUSHIKEN_URL}${PAGE_PATH}#service`,
      },
      breadcrumb: {
        "@id": `${GUSHIKEN_URL}${PAGE_PATH}#breadcrumb`,
      },
      mainEntity: {
        "@id": `${GUSHIKEN_URL}${PAGE_PATH}#faq`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${GUSHIKEN_URL}${PAGE_PATH}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "ホーム",
          item: `${GUSHIKEN_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "制作実績",
          item: `${GUSHIKEN_URL}/works`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "BLACK PAPILLON",
          item: `${GUSHIKEN_URL}${PAGE_PATH}`,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${GUSHIKEN_URL}${PAGE_PATH}#service`,
      name: "タトゥースタジオ向けホームページ制作",
      serviceType: "ホームページ制作・LP制作・Webデザイン",
      provider: {
        "@id": `${GUSHIKEN_URL}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "日本",
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "タトゥースタジオ、ボディアート系サロン、施術系ブランド",
      },
      description:
        "タトゥースタジオ向けに、施術スタイル、治癒後の仕上がり、料金目安、相談導線、注意点、アフターケアを整理したWebサイト制作です。",
    },
    {
      "@type": "CreativeWork",
      "@id": `${GUSHIKEN_URL}${PAGE_PATH}#black-papillon`,
      name: "BLACK PAPILLON",
      creator: {
        "@id": `${GUSHIKEN_URL}/#person`,
      },
      url: LIVE_URL,
      genre: "Web Design / Tattoo Studio Website",
      description:
        "BLACK PAPILLONは、タトゥースタジオ向けのコンセプトサイトです。世界観と予約前の不安解消を両立するWebデザイン事例です。",
    },
    {
      "@type": "FAQPage",
      "@id": `${GUSHIKEN_URL}${PAGE_PATH}#faq`,
      mainEntity: COPY.faq.list.map(([q, a]) => ({
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

function stringifyJsonLd(obj) {
  return JSON.stringify(obj)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

function Section({ label, title, lead, children, dark = false }) {
  return (
    <section
      className={`aq-fade ${
        dark ? "bg-[#11100f] text-[#f6f2ea]" : "bg-[#f6f2ea] text-[#171614]"
      }`}
    >
      <div className="mx-auto grid max-w-[1040px] grid-cols-1 gap-7 px-6 py-14 md:grid-cols-12 md:gap-10 md:px-8 md:py-20">
        <div className="md:col-span-3">
          <p
            className={`text-[11px] tracking-[0.26em] ${
              dark ? "text-white/38" : "text-black/42"
            }`}
          >
            {label}
          </p>
        </div>

        <div className="md:col-span-9">
          {title ? (
            <h2 className="max-w-[820px] text-[22px] leading-[1.5] tracking-[0.02em] md:text-[29px] md:leading-[1.55]">
              {title}
            </h2>
          ) : null}

          {lead ? (
            <p
              className={`mt-5 max-w-[780px] text-[16px] leading-[2.05] md:text-[17px] ${
                dark ? "text-white/68" : "text-black/66"
              }`}
            >
              {lead}
            </p>
          ) : null}

          {children ? <div className="mt-7">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

function Paragraphs({ items, dark = false }) {
  return (
    <div
      className={`max-w-[780px] space-y-5 text-[15px] leading-[2.08] md:text-[16px] ${
        dark ? "text-white/66" : "text-black/64"
      }`}
    >
      {items.map((text) => (
        <p key={text}>{text}</p>
      ))}
    </div>
  );
}

function LiveSiteCta() {
  return (
    <div className="mt-10 max-w-[780px]">
      <a
        href={LIVE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden bg-[#171614] px-6 py-6 text-white transition hover:bg-black md:px-8 md:py-7"
        aria-label="BLACK PAPILLONの完成サイトを別タブで開く"
      >
        <span
          className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle at 18% 20%, rgba(246,242,234,.14), transparent 32%), linear-gradient(135deg, rgba(255,255,255,.08), transparent 42%)",
          }}
          aria-hidden="true"
        />

        <span className="relative z-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <span>
            <span className="block text-[10px] tracking-[0.28em] text-white/42">
              LIVE SITE
            </span>

            <span className="mt-2 block text-[18px] tracking-[0.04em] text-white md:text-[22px]">
              BLACK PAPILLONの完成サイトを見る
            </span>
          </span>

          <span className="inline-flex items-center gap-3 text-[12px] tracking-[0.18em] text-white/72 md:text-[13px]">
            OPEN
            <span
              className="inline-block transition duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </span>
        </span>
      </a>
    </div>
  );
}

function LineItems({ items, dark = false }) {
  const border = dark ? "border-white/12" : "border-black/10";
  const number = dark ? "text-white/32" : "text-black/34";
  const title = dark ? "text-white/86" : "text-black/86";
  const text = dark ? "text-white/58" : "text-black/58";

  return (
    <div className={`max-w-[820px] border-t ${border}`}>
      {items.map((item, index) => {
        const isString = typeof item === "string";
        const main = isString ? item : item.title;
        const sub = isString ? null : item.text;

        return (
          <div
            key={`${main}-${index}`}
            className={`grid grid-cols-[48px_1fr] gap-4 border-b ${border} py-5 md:grid-cols-[64px_1fr]`}
          >
            <span className={`text-[11px] tracking-[0.22em] ${number}`}>
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <p className={`text-[15px] leading-[1.8] md:text-[16px] ${title}`}>
                {main}
              </p>

              {sub ? (
                <p className={`mt-2 text-[14px] leading-[2.0] md:text-[15px] ${text}`}>
                  {sub}
                </p>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function DifferenceRows() {
  return (
    <div className="max-w-[820px] border-t border-black/10">
      {COPY.difference.items.map((item, index) => (
        <div
          key={item.title}
          className="grid grid-cols-1 gap-3 border-b border-black/10 py-6 md:grid-cols-[180px_1fr] md:gap-8"
        >
          <div>
            <p className="text-[11px] tracking-[0.22em] text-black/34">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 text-[15px] tracking-[0.08em] text-black/90">
              {item.title}
            </h3>
          </div>

          <p className="text-[15px] leading-[2.05] text-black/60">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}

function FaqRows() {
  return (
    <Section label={COPY.faq.label} title={COPY.faq.h2}>
      <div className="max-w-[820px] border-t border-black/10">
        {COPY.faq.list.map(([q, a]) => (
          <details key={q} className="group border-b border-black/10 py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[15px] leading-[1.85] tracking-[0.02em] text-black/86">
              <span>{q}</span>
              <span className="text-black/38 transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-[14px] leading-[2.05] text-black/58 md:text-[15px]">
              {a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}

function BottomCta() {
  return (
    <footer className="aq-fade border-t border-black/10 bg-[#f6f2ea]">
      <div className="mx-auto max-w-[1040px] px-6 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-3">
            <p className="text-[11px] tracking-[0.26em] text-black/42">
              NEXT
            </p>
          </div>

          <div className="md:col-span-9">
            <h2 className="max-w-[760px] text-[22px] leading-[1.6] tracking-[0.02em] text-[#171614] md:text-[30px]">
              世界観を削らず、問い合わせ前の不安だけを減らす。
            </h2>

            <p className="mt-5 max-w-[720px] text-[15px] leading-[2.05] text-black/62">
              タトゥースタジオ、美容室、飲食、ブライダル、観光、アパレルなど、
              印象で選ばれる業種のWebサイト制作に対応しています。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex h-[48px] items-center justify-center bg-[#171614] px-7 text-[14px] tracking-[0.08em] text-white transition hover:bg-black"
                to="/contact"
              >
                相談する
              </Link>

              <Link
                className="inline-flex h-[48px] items-center justify-center border border-black/18 bg-white/35 px-7 text-[14px] tracking-[0.08em] text-[#171614] transition hover:bg-white/55"
                to="/works"
              >
                ALL WORKS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function BlackPapillonEntry() {
  const heroRef = useRef(null);
  const logoRef = useRef(null);
  const [logoSvg, setLogoSvg] = useState("");
  const [logoReady, setLogoReady] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return undefined;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    if (reduce) {
      el.classList.add("isOn");
      return undefined;
    }

    const raf = requestAnimationFrame(() => {
      el.classList.add("isOn");
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    let alive = true;
    const controller = new AbortController();

    setLogoReady(false);
    setLogoFailed(false);

    fetch(LOGO_SVG, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Logo SVG fetch failed: ${res.status}`);
        return res.text();
      })
      .then((text) => {
        if (!alive) return;
        setLogoSvg(text);
      })
      .catch(() => {
        if (!alive) return;
        setLogoFailed(true);
        setLogoReady(true);
      });

    return () => {
      alive = false;
      controller.abort();
    };
  }, []);

  useEffect(() => {
    const wrap = logoRef.current;
    if (!wrap || logoFailed) return undefined;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    if (reduce) {
      setLogoReady(true);
      return undefined;
    }

    const svg = wrap.querySelector("svg");
    if (!svg) return undefined;

    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");

    const isSkippable = (el) => {
      const tag = (el.tagName || "").toLowerCase();

      return (
        tag === "defs" ||
        tag === "title" ||
        tag === "desc" ||
        tag === "metadata" ||
        tag === "style"
      );
    };

    const topLevel = Array.from(svg.children).filter((el) => !isSkippable(el));

    let targets = topLevel.filter(
      (el) => (el.tagName || "").toLowerCase() === "g"
    );

    if (targets.length < 2) {
      targets = Array.from(svg.querySelectorAll("path")).filter(
        (pathEl) =>
          !pathEl.closest("defs") &&
          !pathEl.closest("mask") &&
          !pathEl.closest("clipPath")
      );
    }

    if (targets.length === 0) targets = topLevel;

    wrap.querySelectorAll("[data-gd-letter]").forEach((node) => {
      node.removeAttribute("data-gd-letter");
      node.style.removeProperty("--d");
    });

    const STEP = 34;

    targets.forEach((node, index) => {
      node.setAttribute("data-gd-letter", "");
      node.style.setProperty("--d", `${index * STEP}ms`);
    });

    const raf = requestAnimationFrame(() => {
      setLogoReady(true);
    });

    return () => cancelAnimationFrame(raf);
  }, [logoSvg, logoFailed]);

  return (
    <main className="bpEntry min-h-screen bg-[#f6f2ea] text-[#171614]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifyJsonLd(JSON_LD),
        }}
      />

      <header
        ref={heroRef}
        className="bpHero relative isolate min-h-[100svh] overflow-hidden bg-[#0b0a0a]"
        style={{ contain: "layout paint" }}
      >
        <div className="bpBg absolute inset-0" aria-hidden="true" />
        <div className="bpVeil absolute inset-0" aria-hidden="true" />

        <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6">
          <p className="bpKicker mb-8 text-center text-[11px] tracking-[0.34em] text-white/48">
            {COPY.hero.kicker}
          </p>

          {logoSvg && !logoFailed ? (
            <div
              ref={logoRef}
              role="img"
              aria-label="BLACK PAPILLON"
              className={`bpLogo block w-[min(92vw,1040px)] select-none ${
                logoReady ? "isReady" : ""
              }`}
              dangerouslySetInnerHTML={{ __html: logoSvg }}
            />
          ) : (
            <div
              ref={logoRef}
              role="img"
              aria-label="BLACK PAPILLON"
              className={`bpLogo block w-[min(92vw,1040px)] select-none ${
                logoReady ? "isReady" : ""
              }`}
            >
              <span className="bpWordmark">BLACK PAPILLON</span>
            </div>
          )}

          <div className="bpHeroMeta mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] tracking-[0.24em] text-white/42">
            {COPY.hero.meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] tracking-[0.32em] text-white/34"
          aria-hidden="true"
        >
          SCROLL
        </div>

        <style>{`
          .bpHero{
            --bpBgImg: url("${HERO_IMG_PC}");
          }

          @media (max-width: 767px){
            .bpHero{
              --bpBgImg: url("${HERO_IMG_SP}");
            }
          }

          .bpHero .bpBg{
            background-image: var(--bpBgImg);
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            transform: scale(1.055);
            opacity: .98;
            filter: saturate(.86) contrast(1.04);
            transition:
              transform 1800ms cubic-bezier(.16, 1, .24, 1),
              filter 1800ms cubic-bezier(.16, 1, .24, 1);
            will-change: transform, filter;
          }

          .bpHero.isOn .bpBg{
            transform: scale(1.01);
            filter: saturate(.94) contrast(1.02);
          }

          .bpHero .bpVeil{
            background:
              radial-gradient(circle at 50% 42%, rgba(246,242,234,.08), transparent 32%),
              linear-gradient(180deg, rgba(8,8,9,.46) 0%, rgba(8,8,9,.92) 100%);
          }

          .bpHero .bpKicker,
          .bpHero .bpHeroMeta{
            opacity: 0;
            transform: translate3d(0, 10px, 0);
            transition:
              opacity 820ms cubic-bezier(.16, 1, .24, 1),
              transform 820ms cubic-bezier(.16, 1, .24, 1);
          }

          .bpHero.isOn .bpKicker,
          .bpHero.isOn .bpHeroMeta{
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }

          .bpHero .bpHeroMeta{
            transition-delay: 520ms;
          }

          .bpHero .bpLogo{
            opacity: 0;
            transform: translate3d(0, 8px, 0);
            transition:
              opacity 320ms cubic-bezier(.22, 1, .36, 1),
              transform 680ms cubic-bezier(.16, 1, .24, 1);
          }

          .bpHero.isOn .bpLogo.isReady{
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }

          .bpHero .bpLogo svg{
            display: block;
            width: 100%;
            height: auto;
          }

          .bpHero .bpWordmark{
            display: block;
            font-family: "Times New Roman", serif;
            font-size: clamp(48px, 12vw, 152px);
            letter-spacing: .08em;
            line-height: .9;
            text-align: center;
            color: rgba(246,242,234,.9);
          }

          .bpHero .bpLogo [data-gd-letter]{
            opacity: 0;
            transform: translate3d(0, 20px, 0);
            filter: blur(.32px);
            transform-box: fill-box;
            transform-origin: 50% 68%;
            will-change: opacity, transform, filter;
          }

          .bpHero.isOn .bpLogo [data-gd-letter]{
            animation: bpLetterIn 920ms cubic-bezier(.16, 1, .24, 1) both;
            animation-delay: var(--d, 0ms);
          }

          @keyframes bpLetterIn{
            0%{
              opacity: 0;
              transform: translate3d(0, 22px, 0);
              filter: blur(.36px);
            }
            64%{
              opacity: 1;
              filter: blur(.12px);
            }
            100%{
              opacity: 1;
              transform: translate3d(0, 0, 0);
              filter: blur(0);
            }
          }

          @media (prefers-reduced-motion: reduce){
            .bpHero .bpBg,
            .bpHero .bpKicker,
            .bpHero .bpHeroMeta,
            .bpHero .bpLogo,
            .bpHero .bpLogo [data-gd-letter]{
              opacity: 1 !important;
              transform: none !important;
              filter: none !important;
              animation: none !important;
              transition: none !important;
            }
          }
        `}</style>
      </header>

      <Section label={COPY.overview.label}>
        <h1 className="max-w-[820px] text-[28px] leading-[1.45] tracking-[0.02em] text-[#171614] md:text-[40px] md:leading-[1.42]">
          {COPY.overview.h1}
        </h1>

        <p className="mt-4 max-w-[760px] text-[17px] leading-[1.95] text-black/70 md:text-[20px]">
          {COPY.overview.sub}
        </p>

        <div className="mt-8">
          <Paragraphs items={COPY.overview.body} />
        </div>

        <LiveSiteCta />
      </Section>

      <Section label={COPY.answer.label} title={COPY.answer.h2} dark>
        <p className="max-w-[820px] text-[17px] leading-[2.15] text-white/72 md:text-[20px]">
          {COPY.answer.text}
        </p>
      </Section>

      <Section
        label={COPY.difference.label}
        title={COPY.difference.h2}
        lead={COPY.difference.lead}
      >
        <DifferenceRows />
      </Section>

      <Section label={COPY.target.label} title={COPY.target.h2}>
        <LineItems items={COPY.target.items} />
      </Section>

      <Section label={COPY.problem.label} title={COPY.problem.h2}>
        <LineItems items={COPY.problem.items} />
      </Section>

      <Section label={COPY.structure.label} title={COPY.structure.h2} dark>
        <LineItems items={COPY.structure.items} dark />
      </Section>

      <Section label={COPY.case.label} title={COPY.case.h2}>
        <Paragraphs items={COPY.case.body} />
      </Section>

      <FaqRows />

      <BottomCta />
    </main>
  );
}