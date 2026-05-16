import { useEffect } from "react";
import styles from "./OkinawaBridalWebsite.module.css";
import { Link } from "react-router-dom";

export default function OkinawaBridalWebsite() {
  useEffect(() => {
    document.body.classList.add("bridal-entry");
    return () => document.body.classList.remove("bridal-entry");
  }, []);

  const cover = "/works/vow-in-light-entry.webp";
  const liveUrl = "https://vow-in-light.vercel.app/";

  return (
    <article className={styles.page}>

      {/* ── Hero ── */}
      <header className={`${styles.hero} aq-fade`}>
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <p className={styles.eyebrow}>
              Works — Bridal &amp; Photowedding / Okinawa
            </p>

            {/* SEO H1（見た目は静かに） */}
            <h1 className={styles.h1}>
              沖縄のブライダル・フォトウェディング向けホームページ制作
            </h1>

            <p className={styles.project}>
              <img
                className={styles.projectMark}
                src="/typography/VowinLight.svg"
                alt="Vow in Light"
                loading="eager"
              />
              <span className={styles.projectText}>Vow in Light</span>
            </p>

            <p className={styles.lede}>
              写真は綺麗なのに、サイトで印象が落ちる。
              <br />
              そのギャップを、上質さと導線で埋めます。
            </p>

            <div className={styles.tags} aria-label="keywords">
              <span>Bridal</span>
              <span>Okinawa</span>
              <span>Photo</span>
              <span>Flow</span>
            </div>
          </div>

          {/* ✅ プレビュー ＋ 相談CTAの1本のみ。戻るは最下部。 */}
          <aside className={styles.heroRight} aria-label="Project preview">
            <a
              className={styles.preview}
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Vow in Light を開く"
            >
              <img
                className={styles.previewMark}
                src="/logo-gd-dark.png"
                alt=""
                aria-hidden="true"
              />
              <img
                className={styles.previewImg}
                src={cover}
                alt="Vow in Light — 沖縄フォトウェディングサイト制作事例"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <span className={styles.previewCap}>
                Preview <span aria-hidden="true">→</span>
              </span>
            </a>

            <a
              className={styles.ctaPrimary}
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
            >
                     
          Vow in Light を見る <span aria-hidden="true">→</span>
   
            </a>
          </aside>
        </div>
      </header>

      {/* ── PROBLEM ── */}
      <section className={`${styles.section} aq-fade`} aria-labelledby="sec-gap">
        <p className={styles.sectionLabel}>Problem</p>
        <h2 className={styles.h2} id="sec-gap">
          写真は綺麗なのに、サイトで安く見える。
        </h2>
        <p className={styles.p}>
          撮影のクオリティが高くても、サイトを開いた瞬間に印象が落ちることがあります。
          フォント・余白・情報の出し方で、同じ写真がまったく別物に見えるからです。
        </p>
        <p className={styles.p}>
          沖縄のブライダル・フォトウェディングは比較されます。
          <strong className={styles.strong}>
            「どこに頼むか」は、サイトの第一印象で決まる
          </strong>
          場面が増えています。
        </p>
      </section>

      {/* ── WHO ── */}
      <section className={`${styles.section} aq-fade`} aria-labelledby="sec-who">
        <p className={styles.sectionLabel}>Who this is for</p>
        <h2 className={styles.h2} id="sec-who">
          こういう方のサイトを作っています
        </h2>
        <ul className={styles.lineList}>
          {[
            "写真は綺麗なのに、サイトで安っぽく見えてしまっている",
            "世界観はあるのに、問い合わせに繋がらない",
            "他社と並べたとき、比較で負けている気がする",
            "スマホで見たとき、決め手になる何かが足りない",
            "リニューアルしたいが、どこから手をつければいいか分からない",
          ].map((t, i) => (
            <li key={t} className={styles.lineItem}>
              <span className={styles.lineNum}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.lineText}>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── APPROACH ── */}
      <section className={`${styles.section} aq-fade`} aria-labelledby="sec-approach">
        <p className={styles.sectionLabel}>Approach</p>
        <h2 className={styles.h2} id="sec-approach">
          「上質に見せる」のに、やることは多くない。
        </h2>
        <p className={styles.p}>
          派手に飾るより、整える。迷わせる要素を減らし、伝える順番を揃える。
          それだけで、写真の価値が正しく伝わります。
        </p>
        <div className={styles.approachGrid}>
          {[
            ["─ 01", "写真の選定と見せ方", "枚数より選定基準。1枚の重みで世界観が決まります。"],
            ["─ 02", "情報密度と余白", "詰め込みすぎず、抜きすぎず。読み手が迷わない量に整えます。"],
            ["─ 03", "スマホの視線設計", "問い合わせはスマホから。最初にスマホで成立させます。"],
            ["─ 04", "問い合わせへの導線", "CTAを増やさない。自然に手が動く一本道を作ります。"],
          ].map(([n, title, text]) => (
            <div key={title} className={styles.approachItem}>
              <span className={styles.approachNum}>{n}</span>
              <h3 className={styles.approachTitle}>{title}</h3>
              <p className={styles.approachText}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CASE ── */}
      <section className={`${styles.section} aq-fade`} aria-labelledby="sec-case">
        <p className={styles.sectionLabel}>Case study</p>
        <h2 className={styles.h2} id="sec-case">
          制作事例：Vow in Light（沖縄 フォトウェディング）
        </h2>
        <div className={styles.caseBox}>
          <div className={styles.caseMeta}>
            <span>沖縄 / フォトウェディング</span>
            <span>ブランドサイト + 予約導線</span>
            <span>デザイン・実装</span>
          </div>
          <p className={styles.p}>
            課題は「写真の世界観はある。でもサイトで伝わっていない」。
            写真の選び方・テキスト量・スマホの流れを整えました。
          </p>
          <p className={styles.p}>
            伝えたいのは"情報"ではなく、"印象"。
            見た瞬間に頼みたくなる空気を、サイト側で支えています。
          </p>
        </div>

      </section>

      {/* ── FAQ ── */}
      <section className={`${styles.section} aq-fade`} aria-labelledby="sec-faq">
        <p className={styles.sectionLabel}>FAQ</p>
        <h2 className={styles.h2} id="sec-faq">
          よくある質問
        </h2>
        <dl className={styles.faqList}>
          {[
            [
              "沖縄のブライダル・フォトウェディング向けのホームページ制作は対応していますか？",
              "はい。沖縄を拠点に、ブライダルサロン・フォトウェディングスタジオ・結婚式場向けのWebサイト制作を行っています。",
            ],
            [
              "写真素材がない場合でも制作できますか？",
              "ご相談ください。既存写真の整理から進める、撮影タイミングに合わせて仕上げる、どちらも対応できます。",
            ],
            [
              "制作期間はどのくらいかかりますか？",
              "内容によりますが通常4〜8週間です。素材が揃っているほど短縮できます。",
            ],
            [
              "料金の目安を教えてください。",
              "ページ数・素材の有無・機能で変わります。まずは状況を伺って、現実的なスコープで提案します。",
            ],
            [
              "沖縄以外からも依頼できますか？",
              "はい、全国対応しています。オンラインでのやり取りが中心です。",
            ],
          ].map(([q, a]) => (
            <div key={q} className={styles.faqItem}>
              <dt className={styles.faqQ}>{q}</dt>
              <dd className={styles.faqA}>{a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── PROCESS ── */}
      <section className={`${styles.section} aq-fade`} aria-labelledby="sec-flow">
        <p className={styles.sectionLabel}>Process &amp; Price</p>
        <h2 className={styles.h2} id="sec-flow">
          進め方と料金の目安
        </h2>
        <ol className={styles.flowSteps}>
          {[
            ["01", "ヒアリング・相談", "内容が固まっていない段階でも大丈夫です。方向性から整理します。"],
            ["02", "構成案・デザイン", "写真と文章のトーンを揃え、迷わない導線を作ります。"],
            ["03", "実装・確認", "修正は2回まで含みます。それ以上は都度ご相談。"],
            ["04", "公開", "公開設定までサポートします。"],
          ].map(([n, t, d]) => (
            <li key={n} className={styles.flowStep}>
              <span className={styles.flowNum}>{n}</span>
              <div>
                <strong className={styles.flowTitle}>{t}</strong>
                <p className={styles.flowText}>{d}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* ✅ ページ最下部：テキストリンクのみ。ボタンなし。戻るもここ。 */}
        <div className={styles.bottomCta}>
          <p className={styles.bottomLead}>
            沖縄のブライダル・フォトウェディング向けのサイト制作について、まずはご相談ください。
          </p>
          <Link className={styles.ctaConsult} to="/contact">
            ブライダルサイトを相談する <span aria-hidden="true">→</span>
          </Link>
          <p className={styles.note}>
            ※ ブライダル専門を名乗るページではありません。写真商材を上質に見せて導線に落とすための入口ページです。
          </p>
          <div className={styles.footerRow}>
            <Link className={styles.back} to="/works">
              <span aria-hidden="true">←</span> Back to works
            </Link>
          </div>
        </div>
      </section>

    </article>
  );
}