import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import usePageFade from "../../hooks/usePageFade";

export default function MiyahiraDental() {
  useEffect(() => window.scrollTo(0, 0), []);

  const assets = useMemo(
    () => ({
      hero: "/works1/miyahira.png",
      shot1: "/works1/miyahira-1.png",
      shot2: "/works1/miyahira-2.png",
      shot3: "/works1/miyahira-3.png",
    }),
    []
  );

  const liveUrl = "https://miyahira-dental.vercel.app/";

  usePageFade(".md-fade", {
    y: 16,
    blur: true,
    duration: 1.1,
    ease: "power2.out",
    start: "top 85%",
  });

  usePageFade(".md-fade-soft", {
    y: 10,
    blur: false,
    duration: 0.9,
    ease: "power2.out",
    start: "top 85%",
  });

  usePageFade(".md-fade-sp", {
    y: 16,
    blur: true,
    duration: 1.0,
    ease: "power2.out",
    start: "top 88%",
  });

  return (
    <section className="min-h-screen bg-white text-slate-900">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "@id":
              "https://gushikendesign.com/works/miyahira-dental#creativework",
            name: "みやひら歯科｜Webサイト制作",
            description:
              "不安や痛みを抱えた方にも落ち着いて見てもらえるよう、安心感と誠実さを大切にまとめた歯科クリニックのWebサイト。強い訴求を避け、やさしく読み進められる印象を目指した作品。",
            url: "https://gushikendesign.com/works/miyahira-dental",
            image: [
              "/works1/miyahira.png",
              "/works1/miyahira-1.png",
              "/works1/miyahira-2.png",
              "/works1/miyahira-3.png"
            ],
            creator: {
              "@type": "Person",
              name: "裕人 具志堅",
              alternateName: "Yuto Gushiken",
              url: "https://gushikendesign.com/"
            },
            publisher: {
              "@type": "Organization",
              name: "GUSHIKEN DESIGN",
              url: "https://gushikendesign.com/"
            },
            inLanguage: "ja",
            isBasedOn: {
              "@type": "WebSite",
              name: "Miyahira Dental Clinic Official",
              url: "https://miyahira-dental.vercel.app/"
            }
          })
        }}
      />

      {/* PC */}
      <div className="hidden md:block">
        <header className="sticky top-0 z-50 bg-white/75 backdrop-blur border-b border-neutral-200">
          <div className="max-w-[1120px] mx-auto px-12 h-[72px] flex items-center justify-between">
            <div className="flex items-center gap-10">
              <Link
                to="/works"
                className="text-[12px] tracking-[0.16em] text-neutral-500 hover:text-neutral-700 transition-colors"
              >
                ← WORKS
              </Link>

              <p className="text-[12px] tracking-[0.22em] text-neutral-600">
                CASE STUDY
              </p>
            </div>

            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-[12px]
                tracking-[0.2em]
                text-neutral-700
                border-b
                border-neutral-300
                pb-1
                hover:opacity-70
                transition-opacity
              "
            >
              OPEN SITE →
            </a>
          </div>
        </header>

        <div className="max-w-[1240px] mx-auto px-12 pt-20 pb-28">
          <div className="grid grid-cols-2 gap-16 items-end">
            <div className="md-fade">
              <p className="text-[12px] tracking-[0.22em] text-neutral-500 mb-5">
                DENTAL / CLINIC
              </p>

              <h1 className="text-[34px] leading-[1.5] tracking-[0.10em] text-neutral-900">
                Miyahira Dental Clinic
              </h1>

              <p className="mt-10 text-[15px] leading-[2.2] tracking-[0.06em] text-neutral-600 max-w-[520px]">
                痛みに弱い方や、不安を抱えた方にも
                <br />
                落ち着いて見てもらえることを大切にした
                <br />
                歯科クリニックのWebサイトです。
              </p>

              <div className="mt-14 flex flex-wrap gap-10">
                <div>
                  <p className="text-[11px] tracking-[0.18em] text-neutral-500 mb-2">
                    ROLE
                  </p>
                  <p className="text-[12px] tracking-[0.08em] text-neutral-700">
                    Web Design / Front-end
                  </p>
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.18em] text-neutral-500 mb-2">
                    STACK
                  </p>
                  <p className="text-[12px] tracking-[0.08em] text-neutral-700">
                    React / Vite / Tailwind / GSAP
                  </p>
                </div>
              </div>
            </div>

            <div className="md-fade-soft">
              <div className="relative overflow-hidden border border-neutral-200">
                <img
                  src={assets.hero}
                  alt="Miyahira Dental hero"
                  className="w-full h-[460px] object-cover"
                />
              </div>
              <p className="mt-5 text-[11px] tracking-[0.14em] text-neutral-500">
                “Quiet. Gentle. Honest Care.”
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#fafafa] border-y border-neutral-200">
          <div className="max-w-[1120px] mx-auto px-12 py-28">
            <div className="grid grid-cols-2 gap-20">
              <div className="md-fade">
                <h2 className="text-[20px] tracking-[0.14em] text-neutral-900 mb-10">
                  この作品について
                </h2>
                <div className="space-y-6 text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                  <p>
                    歯科のWebサイトは、不安や緊張を抱えたまま訪れる方が多い分、
                    まずは安心して見られることが大切だと考えました。
                  </p>
                  <p>
                    みやひら歯科では、派手な見せ方や強い訴求を避けながら、
                    誠実さと落ち着きが自然に伝わるページを目指しています。
                  </p>
                  <p>
                    予約を急がせるよりも、
                    「ここなら相談しやすそう」と感じてもらえる印象を優先しました。
                  </p>
                </div>
              </div>

              <div className="md-fade">
                <h2 className="text-[20px] tracking-[0.14em] text-neutral-900 mb-10">
                  大切にした印象
                </h2>
                <div className="space-y-6 text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                  <p className="text-neutral-900 tracking-[0.08em]">
                    “不安をやわらげる、やさしい見え方”
                  </p>
                  <p>
                    押しつけるような強さではなく、
                    読みやすさや落ち着いたトーンを通して、
                    安心感が静かに伝わることを大切にしました。
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-20 md-fade-soft">
              <div className="grid grid-cols-12 gap-8 items-center">
                <div className="col-span-7 border border-neutral-200 bg-white overflow-hidden">
                  <img
                    src={assets.shot1}
                    alt="Miyahira Dental main"
                    className="w-full h-[420px] object-cover"
                  />
                </div>
                <div className="col-span-5">
                  <p className="text-[12px] tracking-[0.18em] text-neutral-500 mb-4">
                    IMPRESSION
                  </p>
                  <p className="text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                    最初に感じるのは安心感。
                    <br />
                    そのうえで、丁寧さややさしさが自然に伝わるよう、
                    全体を落ち着いた印象でまとめています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1120px] mx-auto px-12 py-32">
          <div className="md-fade">
            <h2 className="text-center text-[22px] tracking-[0.16em] text-neutral-900 mb-16">
              ポイント
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-12">
            {[
              {
                t: "MOTION",
                d: "やわらかな動きで、強い刺激を与えずに見られること。",
              },
              {
                t: "INFORMATION",
                d: "情報を詰め込みすぎず、必要な内容を落ち着いて読めること。",
              },
              {
                t: "RELIEF",
                d: "見終わったあとに、少し気持ちがやわらぐような印象を残すこと。",
              },
            ].map((x) => (
              <div key={x.t} className="md-fade border border-neutral-200 bg-white p-10">
                <p className="text-[12px] tracking-[0.20em] text-neutral-500 mb-6">
                  {x.t}
                </p>
                <p className="text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                  {x.d}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-12 gap-8 items-center md-fade-soft">
            <div className="col-span-6 border border-neutral-200 overflow-hidden">
              <img
                src={assets.shot2}
                alt="Miyahira Dental structure"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="col-span-6 border border-neutral-200 overflow-hidden">
              <img
                src={assets.shot3}
                alt="Miyahira Dental contact/review"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="max-w-[1120px] mx-auto px-12 py-32">
          <div className="grid grid-cols-2 gap-20 items-start">
            <div className="md-fade">
              <h2 className="text-[18px] tracking-[0.16em] text-neutral-900 mb-10">
                STACK
              </h2>
              <ul className="text-[14px] leading-[2.4] tracking-[0.06em] text-neutral-600 space-y-4">
                <li>・React / Vite</li>
                <li>・Tailwind CSS（v3）</li>
                <li>・GSAP</li>
              </ul>

              <p className="mt-12 text-[12px] leading-[2.3] tracking-[0.10em] text-neutral-500">
                軽さと見やすさを大切にしながら、落ち着いた印象に仕上げています。
              </p>
            </div>

            <div className="md-fade border border-neutral-200 bg-[#fafafa] p-12">
              <p className="text-[12px] tracking-[0.22em] text-neutral-500 mb-6">
                LIVE
              </p>
              <p className="text-[15px] leading-[2.3] tracking-[0.06em] text-neutral-700 mb-10">
                みやひら歯科 — Webサイト
              </p>

              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block
                  text-[12px]
                  tracking-[0.20em]
                  text-neutral-800
                  border-b
                  border-neutral-400
                  pb-1
                  hover:opacity-70
                  transition-opacity
                "
              >
                サイトを見る
              </a>

              <div className="mt-14 pt-10 border-t border-neutral-200">
                <Link
                  to="/works"
                  className="
                    inline-block
                    text-[12px]
                    tracking-[0.18em]
                    text-neutral-600
                    hover:text-neutral-800
                    transition-colors
                  "
                >
                  ← WORKSへ戻る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SP */}
      <div className="md:hidden">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
          <div className="px-5 h-[64px] flex items-center justify-between">
            <Link
              to="/works"
              className="text-[11px] tracking-[0.18em] text-neutral-600"
            >
              ← WORKS
            </Link>

            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-[0.18em] text-neutral-700 border-b border-neutral-300 pb-1"
            >
              OPEN →
            </a>
          </div>
        </header>

        <div className="px-6 pt-14 pb-20">
          <p className="text-[11px] tracking-[0.22em] text-neutral-500 mb-4 md-fade-sp">
            DENTAL / CLINIC
          </p>

          <h1 className="text-[22px] leading-[1.7] tracking-[0.10em] text-neutral-900 md-fade-sp">
            Miyahira Dental Clinic
          </h1>

          <p className="mt-10 text-[13px] leading-[2.3] tracking-[0.06em] text-neutral-600 md-fade-sp">
            痛みに弱い方や、不安がある方にも
            <br />
            落ち着いて見てもらえることを大切にした
            <br />
            歯科クリニックのWebサイトです。
          </p>

          <div className="mt-14 border border-neutral-200 overflow-hidden md-fade-sp">
            <img
              src={assets.hero}
              alt="Miyahira Dental hero"
              className="w-full h-[220px] object-cover"
            />
          </div>
        </div>

        <div className="bg-[#fafafa] border-y border-neutral-200">
          <div className="px-6 py-20">
            <div className="space-y-14 md-fade-sp">
              <div>
                <h2 className="text-[16px] tracking-[0.14em] text-neutral-900 mb-7">
                  この作品について
                </h2>
                <p className="text-[13px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                  歯科サイトは不安を抱えた人が訪れることが多いため、
                  <br />
                  まずは安心して見られることを大切にしました。
                </p>
              </div>

              <div>
                <h2 className="text-[16px] tracking-[0.14em] text-neutral-900 mb-7">
                  大切にした印象
                </h2>
                <p className="text-[13px] leading-[2.4] tracking-[0.06em] text-neutral-600">
                  <span className="text-neutral-900">“やさしく、落ち着いた見え方”</span>
                  <br />
                  読みやすさと誠実さが自然に伝わることを大切にしています。
                </p>
              </div>
            </div>

            <div className="mt-14 border border-neutral-200 bg-white overflow-hidden md-fade-sp">
              <img
                src={assets.shot1}
                alt="Miyahira mobile"
                className="w-full h-[240px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="px-6 py-20">
          <h2 className="text-center text-[16px] tracking-[0.16em] text-neutral-900 mb-12 md-fade-sp">
            ポイント
          </h2>

          <div className="space-y-10">
            {[
              {
                t: "MOTION",
                d: "やわらかな動きで、強い刺激を与えずに見られること。",
              },
              {
                t: "INFORMATION",
                d: "情報を詰め込みすぎず、必要な内容を落ち着いて読めること。",
              },
              {
                t: "RELIEF",
                d: "見終わったあとに、少し気持ちがやわらぐような印象を残すこと。",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="border border-neutral-200 bg-white p-10 md-fade-sp"
              >
                <p className="text-[11px] tracking-[0.22em] text-neutral-500 mb-5">
                  {x.t}
                </p>
                <p className="text-[13px] leading-[2.4] tracking-[0.06em] text-neutral-600 whitespace-pre-line">
                  {x.d}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 border border-neutral-200 bg-white overflow-hidden md-fade-sp">
            <img
              src={assets.shot2}
              alt="Miyahira UX"
              className="w-full h-[240px] object-cover"
            />
          </div>

          <div className="mt-10 border border-neutral-200 bg-white overflow-hidden md-fade-sp">
            <img
              src={assets.shot3}
              alt="Miyahira Review"
              className="w-full h-[240px] object-cover"
            />
          </div>
        </div>

        <div className="px-6 py-20">
          <div className="border border-neutral-200 bg-[#fafafa] p-10 md-fade-sp">
            <p className="text-[11px] tracking-[0.22em] text-neutral-500 mb-6">
              STACK
            </p>
            <p className="text-[13px] leading-[2.4] tracking-[0.06em] text-neutral-700">
              React / Vite / Tailwind(v3) / GSAP
            </p>

            <div className="mt-12 pt-10 border-t border-neutral-200">
              <p className="text-[11px] tracking-[0.22em] text-neutral-500 mb-4">
                LIVE
              </p>
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[11px] tracking-[0.18em] text-neutral-700 border-b border-neutral-300 pb-1"
              >
                サイトを見る
              </a>

              <div className="mt-10">
                <Link
                  to="/works"
                  className="text-[11px] tracking-[0.18em] text-neutral-600"
                >
                  ← WORKSへ戻る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}