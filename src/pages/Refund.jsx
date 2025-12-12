export default function Refund() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* タイトル */}
        <h1 className="text-2xl md:text-3xl tracking-[0.18em] mb-12 font-light">
          返金規約
        </h1>

        {/* 本文 */}
        <div className="space-y-10 text-white/85 leading-[2] text-sm md:text-base">

          {/* 第1条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">
              第1条（返金対象）
            </h2>
            <p>
              当方が提供する制作サービスにおいて、以下の場合に限り返金対応を行います。
              <br />・制作前のキャンセル（着手前に限る）
              <br />・当方の重大な過失により制作の遂行が不可能となった場合
              <br />
              <br />
              なお、契約時にお支払いいただいた着手金については、
              業務着手前に限り全額返金いたします。
            </p>
          </section>

          {/* 第2条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">
              第2条（返金対象外）
            </h2>
            <p>
              以下の場合、返金はお受けできません。
              <br />・初稿提出後のキャンセル
              <br />・制作に必要な情報提供や返信が長期間ない場合
              <br />・クライアント都合による制作停止
              <br />・公開後の成果（売上・集客等）に関する保証
              <br />・制作物のイメージ違いを理由とするもの
            </p>
          </section>

          {/* 第3条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">
              第3条（キャンセル料）
            </h2>
            <p>
              制作工程に応じて、以下のキャンセル料金が発生します。
              <br />・契約後〜ヒアリング前：0%
              <br />・ヒアリング完了〜初稿作成中：30%
              <br />・初稿提出後：100%
              <br />
              <br />
              ※キャンセル料は、すでに進行した作業量に応じて算出されるものとします。
            </p>
          </section>

          {/* 第4条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">
              第4条（返金方法）
            </h2>
            <p>
              返金は銀行振込にて行います（振込手数料はお客様負担）。
              <br />
              返金の申請はメールにて受け付け、確認後 7営業日以内に処理いたします。
            </p>
          </section>

          {/* 第5条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">
              第5条（規約の変更）
            </h2>
            <p>
              当方は必要に応じて本規約を変更することができます。
              <br />
              最新の返金規約は本ページにて公開されるものとします。
            </p>
          </section>

          {/* 第6条（著作権） */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-2">
              第6条（著作権について）
            </h2>
            <p>
              返金が行われた場合、当方が制作したデザイン・データ・構成案など、
              一切の成果物を使用することはできません。
              <br />
              無断利用が確認された場合、法的措置を取る場合があります。
            </p>
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
