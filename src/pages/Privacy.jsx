export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Title */}
        <h1 className="text-2xl md:text-3xl tracking-[0.18em] font-light mb-12">
          プライバシーポリシー
        </h1>

        <div className="space-y-12 text-white/85 leading-[2] text-sm md:text-base">

          {/* 第1条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第1条（個人情報の定義）
            </h2>
            <p>
              本ポリシーにおける「個人情報」とは、氏名・メールアドレス・住所・
              電話番号など、特定の個人を識別できる情報、または
              他の情報と照合することで識別が可能となる情報をいいます。
            </p>
          </section>

          {/* 第2条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第2条（個人情報の取得方法）
            </h2>
            <p>
              当方は、お問い合わせフォーム・メール・契約書情報など、
              お客様が任意で提供された情報を適正な手段により取得します。
              また、サイト運営上必要な範囲で、
              IPアドレス・ブラウザ情報などの技術情報を自動取得する場合があります。
            </p>
          </section>

          {/* 第3条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第3条（個人情報の利用目的）
            </h2>
            <p>
              取得した個人情報は、以下の目的の範囲内で利用します。<br />
              ・お問い合わせへの回答<br />
              ・業務連絡および契約手続き<br />
              ・制作物の納品およびアフターサポート<br />
              ・請求・決済処理<br />
              ・サービス改善および品質向上のための分析
            </p>
          </section>

          {/* 第4条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第4条（第三者提供）
            </h2>
            <p>
              法令に基づく場合を除き、当方はお客様の同意なく個人情報を
              第三者へ提供することはありません。
            </p>
          </section>

          {/* 第5条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第5条（安全管理措置）
            </h2>
            <p>
              個人情報への不正アクセス・漏えい・滅失・改ざん等を防止するため、
              適切な安全管理措置を講じ、必要に応じて改善を行います。
            </p>
          </section>

          {/* 第6条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第6条（開示・訂正・削除）
            </h2>
            <p>
              お客様ご本人からの請求により、合理的な範囲で
              個人情報の開示・訂正・追加・削除に対応します。
              ご希望の場合はメールにてご連絡ください。
            </p>
          </section>

          {/* 第7条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第7条（アクセス解析ツールの利用）
            </h2>
            <p>
              サイト改善のため、Vercel Analytics などの解析ツールを
              利用する場合があります。これらは匿名データを使用し、
              個人を特定するものではありません。
            </p>
          </section>

          {/* 第8条 */}
          <section>
            <h2 className="text-lg tracking-[0.12em] mb-3">
              第8条（プライバシーポリシーの改定）
            </h2>
            <p>
              本ポリシーは、必要に応じて内容を変更することがあります。
              変更後の内容は本ページにて適宜公開いたします。
            </p>
          </section>
        </div>

        {/* 更新日 */}
        <p className="mt-20 text-white/40 tracking-[0.15em] text-xs">
          最終更新日：2025年1月
        </p>
      </div>
    </div>
  );
}
