import styles from "./OkinawaBridalWebsite.module.css";
import { Link } from "react-router-dom";

export default function OkinawaBridalWebsite() {
  return (
    <article className={styles.page}>
      {/* =============================
          Room（前室）
          ============================= */}
      <header className={`${styles.room} aq-fade`}>
        <p className={styles.eyebrow}>WORKS — BRIDAL / LIGHT ATMOSPHERE</p>

        {/* SEOはこのH1で取る。見た目は“静かに”扱う */}
        <h1 className={styles.h1}>
          沖縄のブライダル・フォトウェディング向けホームページ制作
        </h1>

        {/* 作品名はオブジェクトとして大きく見せる */}
        <p className={styles.project}>Vow in Light</p>
        <p className={styles.sub}>
          ENTRY ROOM<span className={styles.dot}>•</span>
          写真の価値を、サイトで安く見せないための前室。
        </p>

        <p className={styles.lede}>
          プロダクト（写真）そのものを強く語る前に、
          <br />
          まずは「空気」と「順番」だけが残るように整えました。
        </p>

        <div className={styles.tags} aria-label="keywords">
          <span>PRECISION</span>
          <span>SILENCE</span>
          <span>LIGHT</span>
          <span>FLOW</span>
        </div>

        <div className={styles.ctaRow}>
          <a
            className={styles.ctaPrimary}
            href="https://vow-in-light.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            ENTER Vow in Light <span aria-hidden="true">→</span>
          </a>

          <Link className={styles.ctaGhost} to="/contact">
            相談する <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={styles.backRow}>
          <Link className={styles.back} to="/works">
            <span aria-hidden="true">←</span> BACK TO WORKS
          </Link>
        </div>
      </header>

      {/* =============================
          SEO本文（依頼者語）
          ============================= */}
      <section className={`${styles.section} aq-fade`} aria-labelledby="sec-intro">
        <h2 className={styles.h2} id="sec-intro">
          写真は綺麗なのに、サイトで安く見える。そのギャップを埋める。
        </h2>

        <p className={styles.p}>
          写真の力は、サイトで死ぬことがある。
          <br />
          余白がなく、フォントが安く、スマホで開いた瞬間に「ここで頼もう」という気持ちが消える。
          <br />
          Webサイトは、撮影の価値を伝える最後の舞台でもある。
        </p>
      </section>

      <section className={`${styles.section} aq-fade`} aria-labelledby="sec-worries">
        <h2 className={styles.h2} id="sec-worries">
          こういう悩みを持つ方に作っています
        </h2>
        <ul className={styles.list}>
          <li>写真は綺麗なのに、サイトで安っぽく見えてしまっている</li>
          <li>世界観は伝わるが、「問い合わせ」に繋がらない</li>
          <li>他社と並べたとき、比較で負けている気がする</li>
          <li>スマホで見たとき、決め手になる何かが足りない</li>
        </ul>
      </section>

      <section className={`${styles.section} aq-fade`} aria-labelledby="sec-solution">
        <h2 className={styles.h2} id="sec-solution">
          解決のために、実はやることは多くない
        </h2>

        <p className={styles.p}>
          「上質に見せる」は、金色にすることでも、装飾を増やすことでもない。
        </p>
        <p className={styles.p}>
          情報の量を整え、余白で視線を誘導し、読む順番を設計する。
          <br />
          それだけで、同じ写真がまったく違って見える。
        </p>
        <p className={styles.p}>
          「問い合わせを増やす」も、ボタンを増やすことではない。
          <br />
          迷う理由を一つずつ消していくと、自然に手が動く。
        </p>
      </section>

      <section className={`${styles.section} aq-fade`} aria-labelledby="sec-case">
        <h2 className={styles.h2} id="sec-case">
          制作事例：Vow in Light
        </h2>

        <p className={styles.p}>
          沖縄のフォトウェディングブランド「Vow in Light」のWebサイトを担当した。
          <br />
          依頼者の課題は「写真の世界観はある。でもサイトで伝わっていない」というものだった。
        </p>

        <p className={styles.p}>
          やったことは、写真の選定基準の整理、テキスト量の削減、スマホでの視線の流れの再設計。
          <br />
          結果として、「見た瞬間に頼みたくなる」と言ってもらえるサイトになった。
        </p>

 <a
  className={styles.inlineLink}
  href="https://vow-in-light.vercel.app/"
  target="_blank"
  rel="noreferrer"
>
  → 制作詳細を見る <span aria-hidden="true">→</span>
</a>
      </section>

      <section className={`${styles.section} aq-fade`} aria-labelledby="sec-flow">
        <h2 className={styles.h2} id="sec-flow">
          進め方と料金の目安
        </h2>

        <ul className={styles.flowList}>
          <li>ヒアリング → 構成案 → デザイン → 実装 → 公開の順で進む</li>
          <li>修正は2回まで含む（それ以上は都度相談）</li>
          <li>納期は内容によるが、通常4〜8週間</li>
          <li>料金は内容・ページ数・素材の有無によって変わるため、まず相談から</li>
          <li>「いくらですか」は最初に聞いてもいい。答えられる範囲で正直に話す</li>
        </ul>

        <div className={styles.bottomCta}>
          <p className={styles.bottomLead}>
            沖縄のブライダル・フォトウェディング向けのサイト制作について、相談はこちらから。
          </p>
          <Link className={styles.cta2} to="/contact">
            相談する <span aria-hidden="true">→</span>
          </Link>

          <p className={styles.note}>
            ※ ブライダル“専門”を名乗るページではなく、写真商材を上質に見せて導線に落とすための入口です。
          </p>
        </div>
      </section>
    </article>
  );
}