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
              プライバシー保護のため、正式なご依頼・請求をいただいた際に限り
              遅滞なく開示いたします。
            </p>
          </section>

          {/* 連絡先 */}
          <section>
            <h2 className="text-lg mb-2 tracking-[0.12em]">お問い合わせ先</h2>
            <p>
              メールアドレス：gushikendesign@gmail.com
              <br />
              ※原則 24 時間以内にご返信いたします。
            </p>
          </section>

          {/* 販売価格 */}
          <section>
            <h2 className="text-lg mb-2 tracking-[0.12em]">販売価格について</h2>
            <p>
              制作内容・ページ数・機能・世界観に応じてお見積りを作成します。
              「料金ページ」に税込の目安価格を掲載しています。
            </p>
          </section>

          {/* 商品代金以外の必要料金 */}
          <section>
            <h2 className="text-lg mb-2 tracking-[0.12em]">
              商品代金以外の必要料金
            </h2>
            <p>
              ・ドメイン／サーバー利用料（必要な場合）
              <br />
              ・銀行振込時の振込手数料
            </p>
          </section>

          {/* 支払い方法 */}
          <section>
            <h2 className="text-lg mb-2 tracking-[0.12em]">お支払い方法</h2>
            <p>
              ・銀行振込（請求書に記載の口座へお振込いただきます）
              <br />
              ・その他の決済方法をご希望の場合はご相談ください
            </p>
          </section>

          {/* 支払い時期 */}
          <section>
            <h2 className="text-lg mb-2 tracking-[0.12em]">お支払い時期</h2>
            <p>
              契約締結後、制作着手前に制作費の <strong>50％</strong> をお支払いいただきます。
              <br />
              残金は、デザイン・動作確認が完了した段階（公開前）でご請求いたします。
            </p>
          </section>

          {/* 提供方法 */}
          <section>
            <h2 className="text-lg mb-2 tracking-[0.12em]">商品の提供方法</h2>
            <p>
              Web公開、ファイル共有サービス、メールなど、
              デジタルデータ形式にて納品します。
            </p>
          </section>

          {/* 納期 */}
          <section>
            <h2 className="text-lg mb-2 tracking-[0.12em]">
              商品の引き渡し時期
            </h2>
            <p>
              制作内容により異なりますが、通常は <strong>2〜6 週間</strong> 程度で納品します。
              写真素材の提出時期や修正回数により納期が前後する場合があります。
            </p>
          </section>

          {/* 返品・キャンセル */}
          <section>
            <h2 className="text-lg mb-2 tracking-[0.12em]">
              返品・キャンセルについて
            </h2>
            <p>
              デジタル制作物の特性上、
              <strong>初稿（完成イメージ案）提出後のキャンセルおよび返金には対応しておりません。</strong>
              <br />
              初稿前のキャンセル料、および返金条件は
              「返金規約」にて詳しく定めています。
            </p>
          </section>

          {/* 価格表記 */}
          <section>
            <h2 className="text-lg mb-2 tracking-[0.12em]">表示価格について</h2>
            <p>掲載されている金額はすべて税込表示です。</p>
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
