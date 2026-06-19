// scripts/seo-pages.mjs
import fs from "node:fs";
import path from "node:path";

const SITE_ORIGIN = "https://gushikendesign.com";
const SITE_NAME = "GUSHIKEN DESIGN";
const DIST_DIR = path.resolve("dist");
const BASE_HTML_PATH = path.join(DIST_DIR, "index.html");
const DEFAULT_IMAGE = `${SITE_ORIGIN}/ogp-v4.png`;

if (!fs.existsSync(BASE_HTML_PATH)) {
  console.error(
    "dist/index.html が見つかりません。先に vite build を実行してください。"
  );
  process.exit(1);
}

const baseHtml = fs.readFileSync(BASE_HTML_PATH, "utf-8");

const commonLinks = [
  ["制作実績を見る", "/works"],
  ["料金を見る", "/price"],
  ["沖縄で相談する", "/okinawa"],
  ["全国オンライン対応を見る", "/online"],
  ["相談する", "/contact"],
];

const pages = [
  {
    path: "/works",
    title: "WORKS｜GUSHIKEN DESIGN｜沖縄のWebデザイン・ホームページ制作",
    description:
      "GUSHIKEN DESIGNの制作実績一覧。ブライダル・美容室・理容室・飲食店・観光・アパレル・タトゥースタジオなど、世界観と導線を両立したWebデザインを掲載しています。",
    label: "WORKS / WEB DESIGN / OKINAWA",
    h1: "制作実績",
    lead:
      "GUSHIKEN DESIGNの制作実績一覧です。ブライダル・美容室・理容室・飲食店・観光・アパレル・タトゥースタジオなど、印象や世界観が集客に関わる業種を中心に、構成・デザイン・実装まで一貫して制作しています。",
    points: [
      "Vow in Light、KOU RYUI、BLACK PAPILLONなど、世界観を重視した制作事例を掲載しています。",
      "見た目だけでなく、予約・問い合わせ・信頼につながる導線まで設計します。",
      "沖縄県内の事業者さま、全国オンラインでの制作相談に対応しています。",
    ],
    note:
      "制作実績は、単なる見た目の一覧ではなく、業種ごとの空気感・導線・印象設計を確認できる入口として整理しています。",
    links: [
      ["相談する", "/contact"],
      ["料金を見る", "/price"],
      ["沖縄向け制作", "/okinawa"],
      ["全国オンライン対応", "/online"],
    ],
    jsonLd: webPageJsonLd({
      path: "/works",
      name: "制作実績｜GUSHIKEN DESIGN",
      description:
        "GUSHIKEN DESIGNの制作実績一覧。世界観と導線を両立したWebデザイン事例を掲載しています。",
      breadcrumb: [
        ["ホーム", "/"],
        ["制作実績", "/works"],
      ],
    }),
  },

  {
    path: "/price",
    title: "PRICE｜GUSHIKEN DESIGN｜沖縄のWebデザイン・ホームページ制作",
    description:
      "GUSHIKEN DESIGNの制作料金。LP制作60,000円〜、小規模サイト120,000円〜、印象重視のWebサイト240,000円〜。沖縄県内・全国オンライン対応。",
    label: "PRICE / PLAN / WEB PRODUCTION",
    h1: "料金",
    lead:
      "LP制作、ホームページ制作、小規模サイト制作、印象重視のWebサイト制作に対応しています。目的・ページ数・素材の有無・必要な機能に合わせて、制作範囲と料金を整理します。",
    points: [
      "LP制作は60,000円〜。商品・サービス・店舗の魅力を1ページで伝える制作に対応します。",
      "小規模サイトは120,000円〜。トップページと必要な下層ページを含めて構成します。",
      "印象重視のWebサイトは240,000円〜。世界観・写真・言葉・導線まで整えます。",
    ],
    note:
      "料金は、必要なページ数・素材の有無・更新機能・公開方法によって変わります。最初に目的と必要範囲を整理し、無駄に膨らませない形で提案します。",
    links: [
      ["相談する", "/contact"],
      ["制作実績を見る", "/works"],
      ["沖縄向け制作", "/okinawa"],
      ["全国オンライン対応", "/online"],
    ],
    jsonLd: webPageJsonLd({
      path: "/price",
      name: "料金｜GUSHIKEN DESIGN",
      description:
        "GUSHIKEN DESIGNのLP制作・ホームページ制作・Webデザイン料金ページです。",
      breadcrumb: [
        ["ホーム", "/"],
        ["料金", "/price"],
      ],
    }),
  },

  {
    path: "/contact",
    title: "CONTACT｜GUSHIKEN DESIGN｜沖縄のWebデザイン・ホームページ制作",
    description:
      "GUSHIKEN DESIGNへのホームページ制作・LP制作・Webデザインのご相談はこちら。沖縄県内・全国オンライン対応。目的・予算・公開時期が未定でも相談できます。",
    label: "CONTACT / WEB DESIGN CONSULTATION",
    h1: "制作相談・お問い合わせ",
    lead:
      "ホームページ制作、LP制作、Webデザインのご相談はこちらから。沖縄県内の店舗・事業者さま、全国オンラインでの制作相談に対応しています。",
    points: [
      "目的・予算・公開時期が未定でも相談できます。",
      "現在のサイトやSNSを見ながら、必要な制作範囲を整理できます。",
      "美容室・飲食店・ブライダル・タトゥースタジオ・観光・アパレルなど、印象で選ばれる業種に対応しています。",
    ],
    note:
      "まずは、作りたいもの・今困っていること・見せたい印象を共有してください。必要な範囲を整理して提案します。",
    links: [
      ["制作実績を見る", "/works"],
      ["料金を見る", "/price"],
      ["沖縄向け制作", "/okinawa"],
      ["全国オンライン対応", "/online"],
    ],
    jsonLd: webPageJsonLd({
      path: "/contact",
      name: "制作相談・お問い合わせ｜GUSHIKEN DESIGN",
      description:
        "GUSHIKEN DESIGNへのホームページ制作・LP制作・Webデザインの相談ページです。",
      breadcrumb: [
        ["ホーム", "/"],
        ["お問い合わせ", "/contact"],
      ],
    }),
  },

  {
    path: "/okinawa",
    title: "沖縄の店舗・サロン向けホームページ制作｜GUSHIKEN DESIGN",
    description:
      "GUSHIKEN DESIGNは、沖縄県内の店舗・サロン・個人事業主向けにLP制作・ホームページ制作・Webデザインを行う個人制作スタジオです。浦添を拠点に、予約・問い合わせにつながる構成・デザイン・実装まで一貫して対応します。",
    label: "OKINAWA / LOCAL WEB DESIGN",
    h1: "沖縄の店舗・サロン向けホームページ制作",
    lead:
      "沖縄県内の店舗・サロン・個人事業主向けに、予約・問い合わせにつながるホームページ制作・LP制作を行っています。浦添を拠点に、写真・言葉・導線を伝わる順番に整え、初めて見る人が迷わず相談できる入口をつくります。",
    points: [
      "浦添を拠点に、那覇・宜野湾・北谷・沖縄市など沖縄本島内の事業者さまを想定しています。",
      "美容室・理容室・飲食店・カフェ・バー・サロン・観光体験など、印象や世界観が集客に関わる業種に対応します。",
      "予約・問い合わせ・来店につながる構成、デザイン、実装まで一貫して制作します。",
    ],
    note:
      "良い店なのにWebの第一印象で伝わっていない、SNSはあるけど予約前の不安が残る、テンプレート感が強く選ばれる理由が見えない。そうした状態を、沖縄の店舗に合わせて整理します。",
    faq: [
      [
        "沖縄県内でホームページ制作の相談はできますか？",
        "はい。浦添を拠点に、那覇・宜野湾・北谷・沖縄市など沖縄本島内の店舗・サロン・個人事業主さまを想定しています。",
      ],
      [
        "LPとホームページ、どちらが向いていますか？",
        "予約・問い合わせ・キャンペーンなど目的がひとつならLP、店舗紹介・メニュー・実績・お知らせまで広げたい場合は複数ページのホームページが向いています。",
      ],
      [
        "写真や文章がまだ揃っていなくても相談できますか？",
        "相談できます。必要な写真・文章・掲載情報を先に整理し、足りない素材がある場合は優先順位を決めながら進めます。",
      ],
      [
        "沖縄の店舗サイトでは何が大事ですか？",
        "店の雰囲気、料金、場所、駐車場、予約方法、安心材料がすぐ分かることです。特にスマホで見た時に、初めての人が迷わず問い合わせできる導線が重要です。",
      ],
    ],
    links: [
      ["沖縄で相談する", "/contact"],
      ["制作例を見る", "/works"],
      ["料金を見る", "/price"],
      ["全国オンライン対応", "/online"],
    ],
    jsonLd: okinawaJsonLd(),
  },

  {
    path: "/online",
    title: "全国対応のホームページ制作・LP制作｜GUSHIKEN DESIGN",
    description:
      "GUSHIKEN DESIGNは、沖縄を拠点に全国オンライン対応でホームページ制作・LP制作・Webデザインを行う個人制作スタジオです。Zoom・LINE・メールで相談から公開まで進められます。",
    label: "ONLINE WEB DESIGN / JAPAN",
    h1: "全国対応のホームページ制作・LP制作",
    lead:
      "全国から、オンラインで相談できます。Zoom・LINE・メールで、相談から公開まで。距離を越えて、事業の温度と世界観が届くWebサイトへ整えます。",
    points: [
      "沖縄県外の店舗・個人事業・ブランドからの制作相談に対応しています。",
      "写真、既存サイト、SNS、文章、参考イメージを確認しながら、事業の雰囲気や強みを整理します。",
      "LP制作、小規模サイト、世界観設計、スマホ対応、SEO/AEO設計まで対応します。",
    ],
    note:
      "オンライン制作で大切なのは、ただ連絡手段を用意することではありません。画面越しでも、事業の背景、空気感、強み、伝えたい印象を読み取り、余白・文字・構成・導線へ変えていきます。",
    faq: [
      [
        "全国からホームページ制作を依頼できますか？",
        "はい。GUSHIKEN DESIGNでは、沖縄を拠点に全国オンラインでホームページ制作・LP制作の相談に対応しています。",
      ],
      [
        "オンラインだけで雰囲気や世界観は伝わりますか？",
        "伝えられます。写真、既存サイト、SNS、文章、参考イメージを確認しながら、事業の雰囲気や強みを整理します。",
      ],
      [
        "沖縄以外の店舗や個人事業でも相談できますか？",
        "はい。美容室、飲食店、サロン、観光、ブライダル、アパレル、個人ブランドなど、地域を問わず相談できます。",
      ],
      [
        "写真や文章がまだ揃っていなくても依頼できますか？",
        "相談できます。必要な写真、文章、掲載情報を先に整理し、足りない素材がある場合は優先順位を決めながら進めます。",
      ],
    ],
    links: [
      ["相談する", "/contact"],
      ["進め方を見る", "/online#route"],
      ["制作事例を見る", "/works"],
      ["料金ページを見る", "/price"],
    ],
    jsonLd: onlineJsonLd(),
  },

  {
    path: "/works/vow-in-light",
    title: "Vow in Light｜ブライダル・フォトウェディング向けWebサイト制作",
    description:
      "Vow in Lightは、ブライダル・フォトウェディング向けのWebサイト制作事例です。写真の上質さ、余白、スマホ導線、問い合わせまでの流れを整え、比較検討中のユーザーが相談しやすい構成にしています。",
    image: `${SITE_ORIGIN}/works/vow-in-light-entry.webp`,
    label: "BRIDAL / PHOTOWEDDING WEBSITE",
    h1: "ブライダル・フォトウェディング向けホームページ制作",
    lead:
      "写真の価値を、相談したくなる余白へ。Vow in Lightは、ブライダル・フォトウェディング向けのWebサイト制作事例です。写真の上質さを落とさず、比較検討中のユーザーが相談しやすい流れに整えています。",
    points: [
      "写真そのものが強く見える余白を作り、装飾で写真を邪魔しない構成にしています。",
      "プランや相談方法を整理し、比較検討中のユーザーが問い合わせ前で止まらない導線にしています。",
      "スマホで見た時に、雰囲気から相談まで流れが切れないようにしています。",
    ],
    note:
      "ブライダルやフォトウェディングでは、写真そのものが大きな判断材料になります。サイトの余白、文字量、フォント、導線が整っていないと、せっかくの写真が安く見えることがあります。",
    faq: [
      [
        "ブライダル・フォトウェディング向けのホームページ制作は対応していますか？",
        "はい。フォトウェディングスタジオ、ブライダルサロン、結婚式場、ドレスショップなど、写真の印象が比較検討に関わるWebサイト制作に対応しています。",
      ],
      [
        "写真素材が少なくても制作できますか？",
        "ご相談ください。既存写真の整理から進める、撮影タイミングに合わせて仕上げる、必要な写真の方向性を先に決めるなど、状況に合わせて進められます。",
      ],
      [
        "高級感や上質さを出すには何が重要ですか？",
        "写真そのものだけでなく、余白、文字量、フォント、導線、スマホで見たときの情報密度が重要です。",
      ],
    ],
    links: [
      ["完成サイトを見る", "https://vow-in-light.vercel.app/"],
      ["相談する", "/contact"],
      ["制作実績へ戻る", "/works"],
      ["料金を見る", "/price"],
    ],
    jsonLd: workJsonLd({
      path: "/works/vow-in-light",
      name: "ブライダル・フォトウェディング向けWebサイト制作｜Vow in Light",
      description:
        "Vow in Lightは、ブライダル・フォトウェディング向けのWebサイト制作事例です。",
      serviceName: "ブライダル・フォトウェディング向けWebサイト制作",
      workName: "Vow in Light",
      liveUrl: "https://vow-in-light.vercel.app/",
      genre: "Web Design / Bridal Website / Photowedding Website",
      faq: [
        [
          "ブライダル・フォトウェディング向けのホームページ制作は対応していますか？",
          "はい。フォトウェディングスタジオ、ブライダルサロン、結婚式場、ドレスショップなど、写真の印象が比較検討に関わるWebサイト制作に対応しています。",
        ],
        [
          "写真素材が少なくても制作できますか？",
          "ご相談ください。既存写真の整理から進める、撮影タイミングに合わせて仕上げる、必要な写真の方向性を先に決めるなど、状況に合わせて進められます。",
        ],
      ],
    }),
  },

  {
    path: "/works/kou-ryui",
    title: "KOU RYUI｜琉装・沖縄文化体験向けWebサイト制作",
    description:
      "KOU RYUIは、琉装体験・沖縄文化体験・観光体験向けのWebサイト制作事例です。旅行中の不安を減らし、料金・所要時間・持ち物・アクセス・予約導線を分かりやすく整理しています。",
    image: `${SITE_ORIGIN}/works/kouryui.webp`,
    label: "OKINAWA CULTURE EXPERIENCE WEBSITE",
    h1: "琉装・沖縄文化体験向けWebサイト制作",
    lead:
      "琉装体験を、旅の記憶として予約できる入口へ。KOU RYUIは、琉装体験・沖縄文化体験を想定したWebサイト制作事例です。写真の華やかさだけでなく、旅行中に必要な判断材料を使う順番に整えています。",
    points: [
      "写真、余白、紅と金の印象を立てて、旅の一枠として気持ちが切り替わる入口にしています。",
      "料金・所要時間・持ち物・アクセス・予約方法を探させない構成にしています。",
      "観光中にスマホで見ても、確認から予約までの流れが切れないようにしています。",
    ],
    note:
      "観光中のユーザーは、じっくり比較するよりも、短い時間で判断します。料金、所要時間、場所、持ち物、予約方法。その情報が見つからないだけで、予約は後回しになります。",
    faq: [
      [
        "琉装体験や沖縄文化体験のWebサイト制作に対応できますか？",
        "はい。体験内容、料金、所要時間、持ち物、アクセス、予約導線まで整理したWebサイト制作に対応できます。",
      ],
      [
        "観光客向けのページでは何が大事ですか？",
        "短時間で判断できることです。写真の印象に加えて、料金、所要時間、場所、持ち物、予約方法がすぐ分かる構成が重要です。",
      ],
      [
        "スマホ対応は重要ですか？",
        "重要です。観光中のユーザーはスマホで確認することが多いため、スマホでの読みやすさと予約導線が大切です。",
      ],
    ],
    links: [
      ["完成サイトを見る", "https://kouryui.vercel.app/"],
      ["相談する", "/contact"],
      ["制作実績へ戻る", "/works"],
      ["沖縄向け制作", "/okinawa"],
    ],
    jsonLd: workJsonLd({
      path: "/works/kou-ryui",
      name: "琉装・沖縄文化体験向けWebサイト制作｜KOU RYUI",
      description:
        "KOU RYUIは、琉装体験・沖縄文化体験・観光体験向けのWebサイト制作事例です。",
      serviceName: "琉装・沖縄文化体験向けWebサイト制作",
      workName: "KOU RYUI",
      liveUrl: "https://kouryui.vercel.app/",
      genre: "Web Design / Okinawa Culture Experience Website",
      faq: [
        [
          "琉装体験や沖縄文化体験のWebサイト制作に対応できますか？",
          "はい。体験内容、料金、所要時間、持ち物、アクセス、予約導線まで整理したWebサイト制作に対応できます。",
        ],
        [
          "観光客向けのページでは何が大事ですか？",
          "短時間で判断できることです。写真の印象に加えて、料金、所要時間、場所、持ち物、予約方法がすぐ分かる構成が重要です。",
        ],
      ],
    }),
  },

  {
    path: "/works/black-papillon",
    title: "BLACK PAPILLON｜タトゥースタジオ向けホームページ制作",
    description:
      "BLACK PAPILLONは、タトゥースタジオ向けのWebサイト制作事例です。施術スタイル、治癒後の仕上がり、料金目安、相談導線、アフターケアを、世界観を崩さずに整理しています。",
    image: `${SITE_ORIGIN}/works1/BlackPapillonRoom2.png`,
    label: "TATTOO STUDIO WEBSITE",
    h1: "タトゥースタジオ向けホームページ制作",
    lead:
      "SNSだけでは伝わらない仕上がりと安心を、Webサイトで整える。BLACK PAPILLONは、タトゥースタジオを想定したWebサイト制作事例です。",
    points: [
      "施術直後だけではなく、治癒後の残り方まで想像できる構成にしています。",
      "相談時に送る情報を明確化し、問い合わせの心理的ハードルを下げています。",
      "黒の世界観を保ちながら、読める余白・行間・導線に整えています。",
    ],
    note:
      "タトゥーは、見た目の好みだけで決まるサービスではありません。料金、サイズ、痛み、衛生面、治癒後の仕上がり、相談時に何を送ればいいのか。そうした不安を、世界観を壊さずに順番よく伝えることが大切です。",
    faq: [
      [
        "タトゥースタジオのホームページ制作に対応できますか？",
        "はい。施術スタイル、料金目安、予約導線、注意点、アフターケアまで整理したWebサイト制作に対応できます。",
      ],
      [
        "Instagramだけでは足りませんか？",
        "Instagramは作品を見せるには強いですが、料金目安、相談方法、注意点、アフターケアなどを順番よく伝えるにはWebサイトがあると補完できます。",
      ],
      [
        "暗い写真や黒ベースでも見やすくできますか？",
        "できます。余白、文字量、背景とのコントラスト、導線の置き方を整えることで、重さではなく世界観として見せられます。",
      ],
    ],
    links: [
      ["完成サイトを見る", "https://black-papillon.vercel.app/"],
      ["相談する", "/contact"],
      ["制作実績へ戻る", "/works"],
      ["料金を見る", "/price"],
    ],
    jsonLd: workJsonLd({
      path: "/works/black-papillon",
      name: "タトゥースタジオ向けホームページ制作｜BLACK PAPILLON",
      description:
        "BLACK PAPILLONは、タトゥースタジオ向けのWebサイト制作事例です。",
      serviceName: "タトゥースタジオ向けホームページ制作",
      workName: "BLACK PAPILLON",
      liveUrl: "https://black-papillon.vercel.app/",
      genre: "Web Design / Tattoo Studio Website",
      faq: [
        [
          "タトゥースタジオのホームページ制作に対応できますか？",
          "はい。施術スタイル、料金目安、予約導線、注意点、アフターケアまで整理したWebサイト制作に対応できます。",
        ],
        [
          "Instagramだけでは足りませんか？",
          "Instagramは作品を見せるには強いですが、料金目安、相談方法、注意点、アフターケアなどを順番よく伝えるにはWebサイトがあると補完できます。",
        ],
      ],
    }),
  },

  {
    path: "/news",
    title: "NEWS｜GUSHIKEN DESIGN｜沖縄のWebデザイン・ホームページ制作",
    description:
      "GUSHIKEN DESIGNの更新情報。制作実績、Webデザイン、サイト設計、作品の背景などを掲載しています。",
    label: "NEWS / UPDATE / DESIGN LOG",
    h1: "NEWS",
    lead:
      "GUSHIKEN DESIGNの更新情報です。制作実績、Webデザイン、サイト設計、作品の背景などを記録しています。",
    points: [
      "実案件の制作実績や公開情報を掲載します。",
      "作品の設計意図や判断の文脈を短く残しています。",
      "GUSHIKEN DESIGNの活動状況を確認できます。",
    ],
    note:
      "制作したものを記事として残すことで、単なる更新ではなく、信頼資産として蓄積していきます。",
    links: commonLinks,
    jsonLd: webPageJsonLd({
      path: "/news",
      name: "NEWS｜GUSHIKEN DESIGN",
      description: "GUSHIKEN DESIGNの更新情報です。",
      breadcrumb: [
        ["ホーム", "/"],
        ["NEWS", "/news"],
      ],
    }),
  },

  ...policyPages(),
];

function policyPages() {
  return [
    {
      path: "/terms",
      title: "TERMS｜GUSHIKEN DESIGN",
      description: "GUSHIKEN DESIGNの利用規約です。",
      label: "TERMS",
      h1: "利用規約",
      lead: "GUSHIKEN DESIGNの利用規約ページです。",
      points: ["制作相談・ご依頼前に確認していただく内容を掲載しています。"],
      note: "詳細はページ本文をご確認ください。",
      links: commonLinks,
      jsonLd: webPageJsonLd({
        path: "/terms",
        name: "利用規約｜GUSHIKEN DESIGN",
        description: "GUSHIKEN DESIGNの利用規約です。",
        breadcrumb: [
          ["ホーム", "/"],
          ["利用規約", "/terms"],
        ],
      }),
    },
    {
      path: "/privacy",
      title: "PRIVACY｜GUSHIKEN DESIGN",
      description: "GUSHIKEN DESIGNのプライバシーポリシーです。",
      label: "PRIVACY",
      h1: "プライバシーポリシー",
      lead: "GUSHIKEN DESIGNのプライバシーポリシーページです。",
      points: ["個人情報の取り扱いについて掲載しています。"],
      note: "詳細はページ本文をご確認ください。",
      links: commonLinks,
      jsonLd: webPageJsonLd({
        path: "/privacy",
        name: "プライバシーポリシー｜GUSHIKEN DESIGN",
        description: "GUSHIKEN DESIGNのプライバシーポリシーです。",
        breadcrumb: [
          ["ホーム", "/"],
          ["プライバシーポリシー", "/privacy"],
        ],
      }),
    },
    {
      path: "/legal",
      title: "LEGAL｜GUSHIKEN DESIGN",
      description: "GUSHIKEN DESIGNの特定商取引法に基づく表記です。",
      label: "LEGAL",
      h1: "特定商取引法に基づく表記",
      lead: "GUSHIKEN DESIGNの特定商取引法に基づく表記です。",
      points: ["制作サービスに関する事業者情報を掲載しています。"],
      note: "詳細はページ本文をご確認ください。",
      links: commonLinks,
      jsonLd: webPageJsonLd({
        path: "/legal",
        name: "特定商取引法に基づく表記｜GUSHIKEN DESIGN",
        description: "GUSHIKEN DESIGNの特定商取引法に基づく表記です。",
        breadcrumb: [
          ["ホーム", "/"],
          ["特定商取引法に基づく表記", "/legal"],
        ],
      }),
    },
    {
      path: "/refund",
      title: "REFUND｜GUSHIKEN DESIGN",
      description: "GUSHIKEN DESIGNの返金ポリシーです。",
      label: "REFUND",
      h1: "返金ポリシー",
      lead: "GUSHIKEN DESIGNの返金ポリシーページです。",
      points: ["制作サービスの返金に関する考え方を掲載しています。"],
      note: "詳細はページ本文をご確認ください。",
      links: commonLinks,
      jsonLd: webPageJsonLd({
        path: "/refund",
        name: "返金ポリシー｜GUSHIKEN DESIGN",
        description: "GUSHIKEN DESIGNの返金ポリシーです。",
        breadcrumb: [
          ["ホーム", "/"],
          ["返金ポリシー", "/refund"],
        ],
      }),
    },
  ];
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeAttr(value = "") {
  return escapeHtml(value);
}

function normalizePath(value = "/") {
  const raw = String(value || "/").split("#")[0].split("?")[0];
  if (!raw || raw === "/") return "/";
  const withSlash = raw.startsWith("/") ? raw : `/${raw}`;
  return withSlash.replace(/\/+$/, "") || "/";
}

function absoluteUrl(pagePath = "/") {
  const normalized = normalizePath(pagePath);
  return normalized === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${normalized}`;
}

function isAbsoluteUrl(value = "") {
  return /^https?:\/\//i.test(String(value));
}

function stringifyJsonLd(obj) {
  return JSON.stringify(obj)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

function removeTags(html, selectorName) {
  let next = html;

  const patterns = {
    description: /<meta\s+name=["']description["'][^>]*>\s*/gi,
    robots: /<meta\s+name=["']robots["'][^>]*>\s*/gi,
    canonical: /<link\s+rel=["']canonical["'][^>]*>\s*/gi,
    og: /<meta\s+property=["']og:[^"']+["'][^>]*>\s*/gi,
    twitter: /<meta\s+name=["']twitter:[^"']+["'][^>]*>\s*/gi,
  };

  const pattern = patterns[selectorName];
  if (!pattern) return next;

  return next.replace(pattern, "");
}

function replaceTitle(html, title) {
  if (/<title>[\s\S]*?<\/title>/i.test(html)) {
    return html.replace(
      /<title>[\s\S]*?<\/title>/i,
      `<title>${escapeHtml(title)}</title>`
    );
  }

  return html.replace(
    /<\/head>/i,
    `  <title>${escapeHtml(title)}</title>\n</head>`
  );
}

function injectHeadTags(html, page) {
  const canonical = absoluteUrl(page.path);
  const image = page.image || DEFAULT_IMAGE;
  const title = page.title;
  const description = page.description;
  const ogType = page.ogType || "website";

  let next = html;

  next = replaceTitle(next, title);

  next = removeTags(next, "description");
  next = removeTags(next, "robots");
  next = removeTags(next, "canonical");
  next = removeTags(next, "og");
  next = removeTags(next, "twitter");

  const jsonLdScripts = normalizeJsonLdList(page.jsonLd)
    .map(
      (item) => `
  <script type="application/ld+json">${stringifyJsonLd(item)}</script>`
    )
    .join("");

  const tags = `
  <meta name="description" content="${escapeAttr(description)}" />
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
  <link rel="canonical" href="${canonical}" />

  <meta property="og:site_name" content="${SITE_NAME}" />
  <meta property="og:locale" content="ja_JP" />
  <meta property="og:type" content="${escapeAttr(ogType)}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:title" content="${escapeAttr(title)}" />
  <meta property="og:description" content="${escapeAttr(description)}" />
  <meta property="og:image" content="${escapeAttr(image)}" />
  <meta property="og:image:secure_url" content="${escapeAttr(image)}" />
  <meta property="og:image:type" content="${image.endsWith(".png") ? "image/png" : "image/webp"}" />
  <meta property="og:image:alt" content="${escapeAttr(title)}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeAttr(title)}" />
  <meta name="twitter:description" content="${escapeAttr(description)}" />
  <meta name="twitter:image" content="${escapeAttr(image)}" />
  <meta name="twitter:image:alt" content="${escapeAttr(title)}" />
  <meta name="twitter:url" content="${canonical}" />
${jsonLdScripts}
`;

  return next.replace(/<\/head>/i, `${tags}\n</head>`);
}

function normalizeJsonLdList(jsonLd) {
  if (!jsonLd) return [];
  return Array.isArray(jsonLd) ? jsonLd.filter(Boolean) : [jsonLd];
}

function renderFallback(page) {
  const links = page.links?.length ? page.links : commonLinks;
  const points = page.points || [];
  const faq = page.faq || [];

  return `
  <div id="root">
    <main class="seo-fallback" aria-label="${escapeAttr(page.h1)}">
      <div class="seo-fallback__inner">
        <p class="seo-fallback__label">${escapeHtml(page.label || SITE_NAME)}</p>

        <h1>${escapeHtml(page.h1)}</h1>

        <p class="seo-fallback__lead">
          ${escapeHtml(page.lead)}
        </p>

        ${
          points.length
            ? `<ul class="seo-fallback__points" aria-label="要点">
          ${points.map((point) => `<li>${escapeHtml(point)}</li>`).join("\n          ")}
        </ul>`
            : ""
        }

        <nav class="seo-fallback__links" aria-label="主要ページ">
          ${links
            .map(([text, href]) => {
              const safeHref = isAbsoluteUrl(href) ? href : normalizePath(href);
              const target = isAbsoluteUrl(href)
                ? ` target="_blank" rel="noopener noreferrer"`
                : "";

              return `<a href="${escapeAttr(safeHref)}"${target}>${escapeHtml(text)}</a>`;
            })
            .join("\n          ")}
        </nav>

        ${
          page.note
            ? `<p class="seo-fallback__note">${escapeHtml(page.note)}</p>`
            : ""
        }

        ${
          faq.length
            ? `<section class="seo-fallback__faq" aria-label="よくある質問">
          <h2>FAQ / よくある質問</h2>
          <dl>
            ${faq
              .map(
                ([q, a]) => `<div>
              <dt>${escapeHtml(q)}</dt>
              <dd>${escapeHtml(a)}</dd>
            </div>`
              )
              .join("\n            ")}
          </dl>
        </section>`
            : ""
        }
      </div>
    </main>
  </div>`;
}

function replaceRootContent(html, fallbackHtml) {
  const startToken = '<div id="root">';
  const endToken = "<!-- Vite entry -->";

  const start = html.indexOf(startToken);
  const end = html.indexOf(endToken);

  if (start === -1 || end === -1 || end <= start) {
    console.warn("root fallback の差し替え位置が見つかりませんでした。");
    return html;
  }

  const before = html.slice(0, start);
  const after = html.slice(end);

  return `${before}${fallbackHtml}\n\n  ${after}`;
}

function writePage(page) {
  let html = baseHtml;

  html = injectHeadTags(html, page);
  html = replaceRootContent(html, renderFallback(page));

  const normalized = normalizePath(page.path);
  const outputDir =
    normalized === "/"
      ? DIST_DIR
      : path.join(DIST_DIR, normalized.replace(/^\//, ""));

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, "index.html"), html, "utf-8");

  console.log(`generated: ${normalized}/index.html`);
}

function webPageJsonLd({ path: pagePath, name, description, breadcrumb }) {
  const pageUrl = absoluteUrl(pagePath);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name,
        description,
        inLanguage: "ja",
        isPartOf: {
          "@id": `${SITE_ORIGIN}/#website`,
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
      },
      breadcrumbJsonLd(pagePath, breadcrumb),
    ],
  };
}

function breadcrumbJsonLd(pagePath, items = []) {
  const pageUrl = absoluteUrl(pagePath);

  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items.map(([name, itemPath], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: absoluteUrl(itemPath),
    })),
  };
}

function faqJsonLd(pagePath, faq = []) {
  const pageUrl = absoluteUrl(pagePath);

  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faq.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };
}

function okinawaJsonLd() {
  const pagePath = "/okinawa";
  const pageUrl = absoluteUrl(pagePath);
  const faq = [
    [
      "沖縄県内でホームページ制作の相談はできますか？",
      "はい。浦添を拠点に、那覇・宜野湾・北谷・沖縄市など沖縄本島内の店舗・サロン・個人事業主さまを想定しています。",
    ],
    [
      "LPとホームページ、どちらが向いていますか？",
      "予約・問い合わせ・キャンペーンなど目的がひとつならLP、店舗紹介・メニュー・実績・お知らせまで広げたい場合は複数ページのホームページが向いています。",
    ],
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "沖縄の店舗・サロン向けホームページ制作｜GUSHIKEN DESIGN",
        description:
          "GUSHIKEN DESIGNは、沖縄県内の店舗・サロン・個人事業主向けにLP制作・ホームページ制作・Webデザインを行う個人制作スタジオです。",
        inLanguage: "ja",
        isPartOf: {
          "@id": `${SITE_ORIGIN}/#website`,
        },
        about: {
          "@id": `${pageUrl}#service`,
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
        mainEntity: {
          "@id": `${pageUrl}#faq`,
        },
      },
      breadcrumbJsonLd(pagePath, [
        ["ホーム", "/"],
        ["沖縄のホームページ制作", "/okinawa"],
      ]),
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "沖縄の店舗・サロン向けホームページ制作",
        serviceType: "ホームページ制作・LP制作・Webデザイン",
        provider: {
          "@id": `${SITE_ORIGIN}/#organization`,
        },
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: "沖縄県",
          },
          {
            "@type": "City",
            name: "浦添市",
          },
          {
            "@type": "City",
            name: "那覇市",
          },
          {
            "@type": "City",
            name: "宜野湾市",
          },
          {
            "@type": "City",
            name: "北谷町",
          },
          {
            "@type": "City",
            name: "沖縄市",
          },
        ],
        audience: {
          "@type": "Audience",
          audienceType:
            "沖縄県内の美容室・理容室・飲食店・カフェ・バー・サロン・観光サービス・体験型店舗・個人事業主",
        },
        description:
          "沖縄県内の店舗・サロン・個人事業主向けに、予約・問い合わせにつながるホームページ制作・LP制作・Webデザインを行います。",
      },
      faqJsonLd(pagePath, faq),
    ],
  };
}

function onlineJsonLd() {
  const pagePath = "/online";
  const pageUrl = absoluteUrl(pagePath);
  const faq = [
    [
      "全国からホームページ制作を依頼できますか？",
      "はい。GUSHIKEN DESIGNでは、沖縄を拠点に全国オンラインでホームページ制作・LP制作の相談に対応しています。",
    ],
    [
      "オンラインだけで雰囲気や世界観は伝わりますか？",
      "伝えられます。写真、既存サイト、SNS、文章、参考イメージを確認しながら、事業の雰囲気や強みを整理します。",
    ],
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "全国対応のホームページ制作・LP制作｜GUSHIKEN DESIGN",
        description:
          "GUSHIKEN DESIGNは、沖縄を拠点に全国オンライン対応でホームページ制作・LP制作・Webデザインを行う個人制作スタジオです。",
        inLanguage: "ja",
        isPartOf: {
          "@id": `${SITE_ORIGIN}/#website`,
        },
        about: {
          "@id": `${pageUrl}#service`,
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
        mainEntity: {
          "@id": `${pageUrl}#faq`,
        },
      },
      breadcrumbJsonLd(pagePath, [
        ["ホーム", "/"],
        ["全国対応のホームページ制作", "/online"],
      ]),
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "全国対応のホームページ制作・LP制作",
        serviceType: "ホームページ制作・LP制作・Webデザイン・SEO/AEO設計",
        provider: {
          "@id": `${SITE_ORIGIN}/#organization`,
        },
        areaServed: {
          "@type": "Country",
          name: "日本",
        },
        audience: {
          "@type": "Audience",
          audienceType:
            "全国の店舗、サロン、飲食店、観光サービス、ブライダル事業者、アパレル、個人ブランド、個人事業主",
        },
        description:
          "全国オンライン対応で、相談から公開まで進められるホームページ制作・LP制作です。",
      },
      faqJsonLd(pagePath, faq),
    ],
  };
}

function workJsonLd({
  path: pagePath,
  name,
  description,
  serviceName,
  workName,
  liveUrl,
  genre,
  faq = [],
}) {
  const pageUrl = absoluteUrl(pagePath);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name,
        description,
        inLanguage: "ja",
        isPartOf: {
          "@id": `${SITE_ORIGIN}/#website`,
        },
        about: {
          "@id": `${pageUrl}#service`,
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
        mainEntity: faq.length
          ? {
              "@id": `${pageUrl}#faq`,
            }
          : undefined,
      },
      breadcrumbJsonLd(pagePath, [
        ["ホーム", "/"],
        ["制作実績", "/works"],
        [workName, pagePath],
      ]),
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: serviceName,
        serviceType: "ホームページ制作・LP制作・Webデザイン",
        provider: {
          "@id": `${SITE_ORIGIN}/#organization`,
        },
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: "沖縄県",
          },
          {
            "@type": "Country",
            name: "日本",
          },
        ],
        description,
      },
      {
        "@type": "CreativeWork",
        "@id": `${pageUrl}#creativework`,
        name: workName,
        creator: {
          "@id": `${SITE_ORIGIN}/#person`,
        },
        url: liveUrl,
        genre,
        description,
      },
      ...(faq.length ? [faqJsonLd(pagePath, faq)] : []),
    ],
  };
}

for (const page of pages) {
  writePage(page);
}