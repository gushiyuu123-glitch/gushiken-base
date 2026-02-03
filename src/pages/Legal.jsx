export default function Legal() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* ========= TITLE ========= */}
        <header className="mb-14">
          <h1
            className="
              text-2xl md:text-3xl
              tracking-[0.18em]
              font-light
              mb-4
            "
          >
            特定商取引法に基づく表記
          </h1>

          {/* 小ライン（世界観統合） */}
          <div className="w-12 h-px bg-gradient-to-r from-white/22 to-transparent" />
        </header>

        {/* ========= BODY ========= */}
        <div
          className="
            space-y-10
            leading-[2]
            text-sm md:text-base
            text-white/85
          "
        >

          {/* 事業者 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">
              販売事業者名
            </h2>
            <p>GUSHIKEN DESIGN（グシケンデザイン）</p>
          </section>

          {/* 代表者 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">代表者</h2>
            <p>具志堅 裕人</p>
          </section>

          {/* 住所 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">所在地</h2>
            <p>
              プライバシー保護のため、<br />
              <span className="text-white/90">
                正式なご依頼または請求書発行時に限り
              </span>
              遅滞なく開示いたします。
            </p>
          </section>

          {/* 連絡先 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">お問い合わせ先</h2>
            <p>
              メールアドレス：gushikendesign@gmail.com
              <br />
              ※ 原則 24 時間以内に返信いたします。
            </p>
          </section>

          {/* 販売価格 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">
              販売価格について
            </h2>
            <p>
              制作内容・ページ数・機能に応じてお見積りを作成します。
              <br />
              料金ページに税込の目安価格を掲載しています。
            </p>
          </section>

          {/* 追加料金 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">
              商品代金以外の必要料金
            </h2>
            <p>
              ・ドメイン / サーバー費（必要に応じて）<br />
              ・銀行振込時の手数料
            </p>
          </section>

          {/* 支払い方法 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">お支払い方法</h2>
            <p>
              ・銀行振込（請求書記載の口座へ）<br />
              ・その他ご希望があればご相談ください
            </p>
          </section>

          {/* 支払い時期 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">お支払い時期</h2>
            <p>
              契約締結後、制作着手前に
              <strong className="text-white/90"> 50% </strong>
              をお支払いいただきます。
              <br />
              残金は公開前、最終確認完了後にご請求いたします。
            </p>
          </section>

          {/* 引き渡し時期 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">
              商品の引き渡し時期
            </h2>
            <p>
              通常は
              <strong className="text-white/90"> 2〜6 週間 </strong>
              程度で制作します。
              <br />
              写真素材の提出状況や修正回数により変動する場合があります。
            </p>
          </section>

          {/* 商品の提供方法 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">
              商品の提供方法
            </h2>
            <p>
              Web公開・ファイル共有・メール等、<br />
              デジタルデータ形式で納品いたします。
            </p>
          </section>

          {/* 返品・キャンセル */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">
              返品・キャンセルについて
            </h2>
            <p>
              デジタル制作物の特性上、
              <strong className="text-white/90">
                初稿（デザイン案）提出後のキャンセルおよび返金は承っておりません。
              </strong>
              <br />
              初稿前のキャンセル料・返金条件は
              「返金規約」にて詳しく定めています。
            </p>
          </section>

          {/* 価格表記 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">
              表示価格について
            </h2>
            <p>掲載価格はすべて税込表示です。</p>
          </section>
        </div>

        {/* 更新日 */}
        <p className="mt-16 text-white/40 tracking-[0.15em] text-xs">
          最終更新日：2025年1月
        </p>
      </div>
    </main>
  );
}
