// src/pages/KouRyuiEntry.jsx
import { Link } from "react-router-dom";
import styles from "./KouRyuiEntry.module.css";

const SITE_URL = "https://kouryui.vercel.app/";

// ここは public 配下の実ファイル名に合わせて差し替えOK
const HERO_PC = "/works/kou-ryui-entryhero.webp";
const HERO_SP = "/works/kou-ryui-entryherosp.webp";

export default function KouRyuiEntry() {
  return (
    <article className={styles.page}>
      {/* HERO */}
      <header className={`${styles.hero} aq-fade`}>
        <div className={styles.heroFrame}>
          <picture>
            <source media="(max-width: 880px)" srcSet={HERO_SP} />
            <img className={styles.heroImg} src={HERO_PC} alt="" />
          </picture>

          <div className={styles.heroVeil} aria-hidden="true" />
          <div className={styles.heroInk} aria-hidden="true" />
        </div>

        <div className={styles.heroCopy}>
          <p className={styles.kicker}>CONCEPT SITE</p>

          <h1 className={styles.h1}>
            那覇・国際通りで、
            <br />
            迷わず予約できる
            <br />
            琉球衣装サイト。
          </h1>

          <p className={styles.lead}>
            KOU RYUI（紅琉衣）は「見栄え」より先に、
            <br />
            旅行中の迷いが消える順番を設計した入口です。
          </p>

          <div className={styles.meta}>
            <span>着付け込み</span>
            <span>手ぶらOK</span>
            <span>当日相談可</span>
            <span>那覇・国際通り</span>
          </div>

          <div className={styles.actions}>
            <a
              className={styles.primary}
              href={SITE_URL}
              target="_blank"
              rel="noreferrer"
            >
              サイトを見る
              <span className={styles.arrow} aria-hidden="true">→</span>
            </a>

            <Link className={styles.secondary} to="/works">
              WORKSへ戻る
            </Link>
          </div>
        </div>
      </header>

      {/* BODY */}
      <section className={styles.body}>
        <div className={`${styles.block} aq-fade`}>
          <h2 className={styles.h2}>狙い</h2>
          <p className={styles.p}>
            旅行中は調べるほど、選択肢と不安が増える。
            <br />
            「料金は？」「手ぶらで行ける？」「当日でも大丈夫？」「場所は分かる？」
            <br />
            その迷いが残ったままだと、予約に進めない。
            <br />
            だからKOU RYUIは、必要な情報を“使う順番”に揃えた。
          </p>
        </div>

        <div className={`${styles.block} aq-fade`}>
          <h2 className={styles.h2}>やったことは3つ</h2>

          <div className={styles.list}>
            <div className={styles.item}>
              <p className={styles.itemNo}>01</p>
              <div className={styles.itemMain}>
                <p className={styles.itemTitle}>入口で“行く気”を決める</p>
                <p className={styles.itemText}>
                  写真とロゴを同時に立てて、旅の一枠として気持ちが切り替わるようにした。
                </p>
              </div>
            </div>

            <div className={styles.item}>
              <p className={styles.itemNo}>02</p>
              <div className={styles.itemMain}>
                <p className={styles.itemTitle}>説明を捨てて、判断材料だけ残す</p>
                <p className={styles.itemText}>
                  手ぶらOK／当日相談OK／エリア。
                  <br />
                  脳内で「行ける」が成立したら、それ以上は邪魔になる。
                </p>
              </div>
            </div>

            <div className={styles.item}>
              <p className={styles.itemNo}>03</p>
              <div className={styles.itemMain}>
                <p className={styles.itemTitle}>スマホで予約導線が切れない構造にする</p>
                <p className={styles.itemText}>
                  途中で不安が復活すると、良い印象が一瞬で崩れる。
                  <br />
                  迷子にさせず、送れる形に整えた。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.block} aq-fade`}>
          <h2 className={styles.h2}>想定ユーザー</h2>
          <p className={styles.p}>
            「旅行中に、一枠だけ印象に残る体験を入れたい」人。
            <br />
            初めてで不安がある、手ぶらで行けるか知りたい、雨の日や返却時間など現実の判断材料が欲しい。
            <br />
            その人が、迷わず予約まで進める状態をつくる。
          </p>

          <div className={styles.note}>
            <p className={styles.noteLabel}>制作担当範囲</p>
            <p className={styles.noteText}>企画 / 構成 / デザイン / 実装（コンセプトサイト）</p>
          </div>
        </div>

        <div className={`${styles.bottom} aq-fade`}>
          <a className={styles.primaryBottom} href={SITE_URL} target="_blank" rel="noreferrer">
            KOU RYUI を開く
            <span className={styles.arrow} aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </article>
  );
}