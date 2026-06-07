// src/pages/entry/KouRyuiEntry.jsx
import { Link } from "react-router-dom";

const SITE_URL = "https://kouryui.vercel.app/";
const HERO_PC = "/works/kouryui.webp";
const HERO_SP = "/works/kouryui1sp.webp";

export default function KouRyuiEntry() {
  return (
    <article className="relative isolate min-h-[100svh] text-[#120e0c]">
      {/* 背景（bodyを触らない・固定レイヤーで上書き） */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(1200px 680px at 18% -10%, rgba(255,255,255,.86), transparent 58%),
            radial-gradient(980px 700px at 82% 10%, rgba(165, 40, 58, .18), transparent 60%),
            radial-gradient(920px 640px at 70% 92%, rgba(70, 110, 160, .10), transparent 62%),
            radial-gradient(780px 520px at 18% 78%, rgba(190, 155, 90, .10), transparent 62%),
            linear-gradient(180deg, #f7f1ea 0%, #fffaf4 55%, #f6efe7 100%)
          `,
        }}
        aria-hidden="true"
      />

      {/* =========================
          STAGE（Hero）
      ========================= */}
      <header className="relative z-10 pt-[96px] pb-[64px] bg-transparent aq-fade
                   max-[880px]:pt-[72px] max-[880px]:pb-[44px]">
        <div className="mx-auto w-[min(1120px,calc(100%-56px))] max-[880px]:w-[calc(100%-36px)]">
          {/* hero frame */}
          <div className="relative overflow-hidden rounded-[8px] border border-[rgba(255,250,241,.18)] bg-[rgba(16,16,18,.32)]">
            <picture>
              <source media="(max-width: 880px)" srcSet={HERO_SP} />
      <img
  src={HERO_PC}
  alt="那覇・国際通りの琉球衣装体験を想定したキービジュアル"
  className="
    block w-full
    h-[clamp(460px,60vh,700px)]
    max-[880px]:h-[clamp(340px,46vh,520px)]
    object-cover object-[center_38%]
    opacity-[0.96]
    [filter:saturate(1.06)_contrast(1.02)_brightness(1.02)]
  "
  loading="eager"
/>
            </picture>

            {/* veil */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  linear-gradient(135deg, rgba(0,0,0,.42), rgba(0,0,0,.06) 52%, rgba(0,0,0,.30)),
                  radial-gradient(820px 420px at 18% 12%, rgba(255,250,241,.12), rgba(255,250,241,0) 62%)
                `,
              }}
              aria-hidden="true"
            />

            {/* ink accents */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  radial-gradient(ellipse at 82% 18%, rgba(165,40,58,.16), rgba(165,40,58,0) 44%),
                  radial-gradient(ellipse at 18% 20%, rgba(190,155,90,.10), rgba(190,155,90,0) 46%)
                `,
              }}
              aria-hidden="true"
            />
          </div>

          {/* copy */}
          <div className="mt-[34px]">
            <p className="m-0 text-[12px] tracking-[.22em] text-[rgba(165,40,58,.78)]">
              CONCEPT SITE
            </p>

            <h1 className="mt-[14px] font-serif text-[clamp(28px,3.4vw,44px)] leading-[1.18] tracking-[.06em] text-[rgba(18,14,12,.92)]">
              那覇・国際通りで、
              <br />
              迷わず予約できる
              <br />
              琉球衣装サイト。
            </h1>

            <p className="mt-[14px] text-[13px] leading-[1.9] tracking-[.08em] text-[rgba(18,14,12,.70)]">
              KOU RYUI（紅琉衣）は「見栄え」より先に、
              <br />
              旅行中の迷いが消える順番を設計した入口です。
            </p>

            <div className="mt-[16px] flex flex-wrap gap-x-[14px] gap-y-[10px] text-[12px] tracking-[.14em] text-[rgba(18,14,12,.58)]">
              <span>着付け込み</span>
              <span>手ぶらOK</span>
              <span>当日相談可</span>
              <span>那覇・国際通り</span>
            </div>
          </div>
        </div>

        {/* stage fade */}
        <div
          className="mt-[28px] h-[42px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0), rgba(247,241,234,1) 70%, rgba(247,241,234,1))",
          }}
          aria-hidden="true"
        />
      </header>

      {/* =========================
          PAPER（Body）
      ========================= */}
      <main className="relative z-10">
        <div className="mx-auto w-[min(1120px,calc(100%-56px))] max-[880px]:w-[calc(100%-36px)]">
          <div className="pt-[34px] pb-[calc(clamp(140px,14vw,210px)+env(safe-area-inset-bottom))]">
            {/* block: aim */}
            <section className="aq-fade border-t border-[rgba(18,14,12,.10)] first:border-t-0 px-[22px] py-[26px] max-[880px]:px-[16px] max-[880px]:py-[22px]">
              <h2 className="m-0 font-serif text-[18px] tracking-[.10em] text-[rgba(18,14,12,.90)]">
                狙い
              </h2>
              <p className="mt-[12px] mb-0 text-[13px] leading-[2.0] tracking-[.08em] text-[rgba(18,14,12,.68)]">
                旅行中は調べるほど、選択肢と不安が増える。
                <br />
                「料金は？」「手ぶらで行ける？」「当日でも大丈夫？」「場所は分かる？」
                <br />
                その迷いが残ったままだと、予約に進めない。
                <br />
                だからKOU RYUIは、必要な情報を“使う順番”に揃えた。
              </p>
            </section>

            {/* block: 3 */}
            <section className="aq-fade border-t border-[rgba(18,14,12,.10)] px-[22px] py-[26px] max-[880px]:px-[16px] max-[880px]:py-[22px]">
              <h2 className="m-0 font-serif text-[18px] tracking-[.10em] text-[rgba(18,14,12,.90)]">
                やったことは3つ
              </h2>

              <div className="mt-[16px] grid gap-[14px]">
                {[
                  {
                    no: "01",
                    title: '入口で“行く気”を決める',
                    text: "写真とロゴを同時に立てて、旅の一枠として気持ちが切り替わるようにした。",
                  },
                  {
                    no: "02",
                    title: "説明を捨てて、判断材料だけ残す",
                    text: "手ぶらOK／当日相談OK／エリア。\n脳内で「行ける」が成立したら、それ以上は邪魔になる。",
                  },
                  {
                    no: "03",
                    title: "スマホで予約導線が切れない構造にする",
                    text: "途中で不安が復活すると、良い印象が一瞬で崩れる。\n迷子にさせず、送れる形に整えた。",
                  },
                ].map((it) => (
                  <div
                    key={it.no}
                    className="grid grid-cols-[44px_1fr] gap-[14px] border-t border-[rgba(18,14,12,.10)] first:border-t-0 py-[14px]"
                  >
                    <p className="m-0 font-serif text-[14px] tracking-[.18em] text-[rgba(165,40,58,.78)]">
                      {it.no}
                    </p>
                    <div>
                      <p className="m-0 font-serif text-[15px] tracking-[.10em] text-[rgba(18,14,12,.88)]">
                        {it.title}
                      </p>
                      <p className="mt-[8px] mb-0 text-[13px] leading-[2.0] tracking-[.08em] text-[rgba(18,14,12,.66)] whitespace-pre-line">
                        {it.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* block: user */}
            <section className="aq-fade border-t border-[rgba(18,14,12,.10)] px-[22px] py-[26px] max-[880px]:px-[16px] max-[880px]:py-[22px]">
              <h2 className="m-0 font-serif text-[18px] tracking-[.10em] text-[rgba(18,14,12,.90)]">
                想定ユーザー
              </h2>
              <p className="mt-[12px] mb-0 text-[13px] leading-[2.0] tracking-[.08em] text-[rgba(18,14,12,.68)]">
                「旅行中に、一枠だけ印象に残る体験を入れたい」人。
                <br />
                初めてで不安がある、手ぶらで行けるか知りたい、雨の日や返却時間など現実の判断材料が欲しい。
                <br />
                その人が、迷わず予約まで進める状態をつくる。
              </p>

              <div className="mt-[18px] pt-[16px] border-t border-[rgba(18,14,12,.10)]">
                <p className="m-0 text-[12px] tracking-[.18em] text-[rgba(18,14,12,.52)]">
                  制作担当範囲
                </p>
                <p className="mt-[10px] mb-0 text-[13px] tracking-[.10em] text-[rgba(18,14,12,.70)]">
                  企画 / 構成 / デザイン / 実装（コンセプトサイト）
                </p>
              </div>
            </section>

            {/* actions */}
            <div className="aq-fade border-t border-[rgba(18,14,12,.10)] px-[22px] pt-[20px] pb-[26px] max-[880px]:px-[16px] max-[880px]:pt-[18px] max-[880px]:pb-[22px]">
              <div className="flex items-center justify-between gap-[18px] flex-wrap">
                <Link
                  className="text-[12px] tracking-[.16em] text-[rgba(18,14,12,.58)] border-b border-[rgba(18,14,12,.26)] pb-[8px]"
                  to="/works"
                >
                  WORKSへ戻る
                </Link>

                <a
                  className="text-[13px] tracking-[.16em] text-[rgba(18,14,12,.88)] pb-[10px] border-b"
                  style={{
                    borderImage:
                      "linear-gradient(90deg, rgba(165,40,58,.86), rgba(165,40,58,0)) 1",
                  }}
                  href={SITE_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  KOU RYUI を開く <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </article>
  );
}