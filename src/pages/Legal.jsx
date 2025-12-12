export default function Legal() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* タイトル */}
        <h1 className="text-2xl md:text-3xl tracking-[0.18em] font-light mb-12">
          特定商取引法に基づく表記
        </h1>

        {/* 本文 */}
        <div className="space-y-10 leading-[2] text-sm md:text-base text-white/85">

          {/* 販売事業者名 */}
          <section>
            <h2 className="text-lg mb-2 tracking-[0.12em]">販売事業者名</h2>
            <p>GUSHIKEN DESIGN（グシケンデザイン）</p>
          </section>

          {/* 代表者名 */}
          <section>
            <h2 className="text-lg mb-2 tracking-[0.12em]">代表者</h2>
            <p>具志堅 裕人</p>
          </section>

          {/* 所在地 */}
          <section>
            <h2 className="text-lg mb-2 tracking-[0.12em]">所在地</h2>
            <p>
              プライバシー保護のため、請求をいただいた場合に限り
              遅滞なく開示いたします。
            </p>
          </section>

          {/* 連絡先 */}
          <section>
            <h2 className="text-lg mb-2 tracking-[0.12em]">お問い合わせ先</h2>
            <p>
              メールアドレス：gushikendesign@gmail.com
              <br />
              ※原則 24 時間以内に返信いたします。
            </p>
          </section>

          {/* 販売価格 */}
          <section>
            <h2 className="text-lg mb-2 tracking-[0.12em]">販売価格について</h2>
            <p>
              制作内容・ページ数・仕様に応じて個別にお見積もりいたします。
              料金表ページに税込の目安価格を掲載しています。
            </p>
          </section>

          {/* 商品代金以外の費用 */}
          <section>
            <h2 className="text-lg mb-2 tracking-[0.12em]">
              商品代金以外の必要料金
            </h2>
            <p>
              ・ドメイン／サーバー利用料（外部サービス利用時）
              <br />
              ・銀行振込の際の振込手数料
            </p>
          </section>

          {/* 支払い方法 */}
          <section>
            <h2 className="text-lg mb-2 tracking-[0.12em]">お支払い方法</h2>
            <p>
              ・銀行振込
              <br />
              ・その他（ご要望に応じて相談可）
            </p>
          </section>

          {/* 支払い時期 */}
          <section>
            <h2 className="text-lg mb-2 tracking-[0.12em]">お支払い時期</h2>
            <p>
              契約締結後、着手金として制作費の 50％ をお支払いいただきます。
              残額は納品前の最終確認時にお支払い頂きます。
            </p>
          </section>

          {/* 提供方法 */}
          <section>
            <h2 className="text-lg mb-2 tracking-[0.12em]">商品の提供方法</h2>
            <p>
              制作したデータは、Web公開・ファイル共有サービス・メール等を通じて
              デジタル形式で納品いたします。
            </p>
          </section>

          {/* 納期 */}
          <section>
            <h2 className="text-lg mb-2 tracking-[0.12em]">
              商品の引き渡し時期
            </h2>
            <p>
              制作内容により異なりますが、通常 2〜6 週間以内に納品いたします。
            </p>
          </section>

          {/* 返品・キャンセル */}
          <section>
            <h2 className="text-lg mb-2 tracking-[0.12em]">返品・キャンセルについて</h2>
            <p>
              デジタルサービスの性質上、初稿提出後のキャンセルおよび返金は
              お受けしておりません。
              <br />
              詳細は「返金規約」をご確認ください。
            </p>
          </section>

          {/* 価格表記 */}
          <section>
            <h2 className="text-lg mb-2 tracking-[0.12em]">表示価格について</h2>
            <p>本サイトに掲載されている価格はすべて税込表示です。</p>
          </section>

        </div>

        {/* 更新日 */}
        <p className="mt-16 text-white/40 tracking-[0.15em] text-xs">
          最終更新日：2025年1月
        </p>
      </div>
    </div>
  );
}
