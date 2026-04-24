export default function Refund() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <header className="mb-14">
          <p className="text-[#d9b98a]/60 text-[0.68rem] tracking-[0.24em] mb-4">
            REFUND POLICY
          </p>

          <h1 className="text-2xl md:text-3xl tracking-[0.18em] font-light mb-4">
            返金規約
          </h1>

          <div className="w-12 h-px bg-gradient-to-r from-[#d9b98a]/50 to-transparent" />
        </header>

        <div className="space-y-12 text-white/82 leading-[2] text-sm md:text-base">
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第1条（基本方針）
            </h2>
            <p>
              GUSHIKEN DESIGN（以下「当方」）の制作サービスは、ヒアリング・構成設計・デザイン・実装などを含む
              オーダーメイド型の制作業務です。
              <br />
              そのため、制作の進行状況に応じて、返金可否およびキャンセル料を定めています。
            </p>
          </section>

          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第2条（返金対象となるケース）
            </h2>
            <p>
              以下の場合は、返金対象となる場合があります。
              <br />
              ・正式な制作着手前のキャンセル
              <br />
              ・当方の重大な過失により、制作継続が困難となった場合
              <br />
              ・当方都合により、事前に合意した制作が提供できなくなった場合
              <br />
              <br />
              返金の対象となるかは、進行状況と作業内容を確認したうえで個別に判断します。
            </p>
          </section>

          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第3条（返金対象外となるケース）
            </h2>
            <p>
              以下の場合は、原則として返金対象外となります。
              <br />
              ・初稿、構成案、デザイン案、実装データのいずれかを提出済みの場合
              <br />
              ・お客様都合による制作停止、方向性の大幅変更
              <br />
              ・必要素材や確認事項の遅延により制作が進められない場合
              <br />
              ・連絡不通、確認待ちが長期間続いた場合
              <br />
              ・公開後の売上、集客、検索順位、反応数など成果に関する理由
              <br />
              <br />
              制作物は個別のご依頼内容に合わせて作成するため、提出後の返金は原則として行っておりません。
            </p>
          </section>

          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第4条（キャンセル料）
            </h2>
            <p>
              キャンセル時の費用は、制作進行度に応じて以下を目安とします。
              <br />
              ・正式依頼前：無料
              <br />
              ・着手金入金後〜ヒアリング前：着手金の一部を返金
              <br />
              ・ヒアリング完了〜構成案または初稿作成中：制作費の30%〜50%
              <br />
              ・初稿または制作物提出後：制作費の100%
              <br />
              <br />
              実際の作業量により、個別に調整する場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第5条（返金方法）
            </h2>
            <p>
              返金が発生する場合は、原則として銀行振込にて対応します。
              <br />
              振込手数料は、お客様都合のキャンセルの場合はお客様負担、当方都合の場合は当方負担とします。
              <br />
              返金手続きは、返金額確定後7営業日以内を目安に行います。
            </p>
          </section>

          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第6条（返金後の制作物利用）
            </h2>
            <p>
              返金またはキャンセルが成立した場合、当方が制作したデザイン案・構成案・画像・文章・コード等の利用はできません。
              <br />
              無断利用が確認された場合は、別途利用料をご請求する場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第7条（規約の変更）
            </h2>
            <p>
              本規約は、サービス内容や運用状況に応じて改定する場合があります。
              最新の内容は本ページに掲載します。
            </p>
          </section>
        </div>

        <p className="mt-20 text-white/40 tracking-[0.15em] text-xs">
          最終更新日：2026年1月
        </p>
      </div>
    </main>
  );
}