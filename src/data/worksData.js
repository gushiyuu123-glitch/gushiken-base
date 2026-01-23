// src/data/worksData.js

export const worksData = [
  /* ----------------------------------------------------------
    BEAUTY / SALON
  ---------------------------------------------------------- */
  {
    category: "BEAUTY / SALON",
    subtitle: "美容・サロン向けの上質な余白デザイン",
    items: [
      {
        title: "LILU nail salon",
        slug: "LILU",

        desc: "可愛い × 上品 × 直感設計。\n20代女性の感覚で“選ばれる”ために構築したネイルサロンUI。",
        link: "https://lilu-drab.vercel.app/",
        img: "/works/lilu.webp",

        isNew: true,
        createdAt: "2025-02-28",

        tags: [
          "NEW",
          "ピンク",
          "余白",
          "上品",
          "直感設計",
          "Beauty",
          "Salon",
          "UI/UX",
          "Visual First",
          "PC/SP 分離"
        ],

        detail: {
          concept:
            "20代女性が“考えずに好きだと感じること”を起点に、写真・余白・色・タイポグラフィを最小限の情報設計で構成。SNS閲覧後の『最後の決め手』になることを目的に、違和感や選択ストレスを排除したビジュアル主導のサロンサイト。",
          tech: [
            "React",
            "Vite",
            "Tailwind",
            "GSAP",
            "PC/SP 完全分離",
            "microCMS（NEWS連携）"
          ]
        }
      },
      {
  title: "SAKURAI CLINIC",
  slug: "SakuraiClinic",
  desc: "桜 × 静寂 × 美容医療。\n淡い光と余白で信頼と優しさを設計した美容皮膚科サイト。",
  link: "https://sakurai-clinic.vercel.app/",
  img: "/works/sakurai.webp",
  isNew: true,
  createdAt: "2026-01-21",
  tags: [
    "NEW",
    "美容医療",
    "桜",
    "静寂",
    "余白",
    "上品",
    "Beauty",
    "Clinic",
    "Branding",
    "PC/SP 分離"
  ],

  detail: {
    concept:
      "“美容医療は怖くない”という心理設計をベースに、桜の静けさ・光の粒度・優しい余白で安心感を設計。圧の無い導線で、はじめての来院でも迷わないUIを追求した。",
    tech: [
      "React",
      "Vite",
      "Tailwind",
      "GSAP",
      "IntersectionObserver",
      "PC/SP 完全分離",
      "microCMS（NEWS連携）"
    ]
  }
},

// LILU の直後に追加
{
  title: "RIN — Eyelash Salon",
  slug: "RIN",

  desc: "迷い × 静けさ × 納得。\n“すぐ決めない人”のために設計した、思想主導のまつエクサイト。",
  link: "https://rin-psi.vercel.app/",
  img: "/works/rin.webp",

  isNew: true,
  createdAt: "2025-02-22",

  tags: [
    "NEW",
    "静寂",
    "余白",
    "思想設計",
    "Beauty",
    "Salon",
    "UX",
    "GSAP",
    "PC/SP 完全分離"
  ],

  detail: {
    concept:
      "『すぐに決めなくていい』という姿勢を起点に、迷いや不安を否定せず受け止める導線・言葉・余白で構成。美容サイトにありがちな圧を排除し、読む速度・感情の置き場・判断の余白までをUIとして設計した。",
    tech: [
      "React",
      "Vite",
      "Tailwind",
      "GSAP",
      "Scroll Animation",
      "PC/SP 完全分離",
      "microCMS（NEWS連携）"
    ]
  }
},
{
  title: "Miyahira Dental Clinic",
  slug: "MiyahiraDental",

  desc: "誠実 × 丁寧 × 安心。\n“落ち着いて任せられる歯科体験”を丁寧に設計した地域クリニックサイト。",
  link: "https://miyahira-dental.vercel.app/",
  img: "/works/miyahira.webp",

  isNew: true,
  createdAt: "2026-01-23",

  tags: [
    "NEW",
    "歯科",
    "クリニック",
    "清潔感",
    "安心設計",
    "余白",
    "日本的ミニマル",
    "PC/SP 分離",
    "Branding"
  ],

  detail: {
    concept:
      "“誠実で丁寧な歯科”という印象を、余白・写真・色・光のコントラストで設計。派手さを排除し、初めての来院でも迷わず安心できる導線を最優先に構成した。治療の怖さ・緊張をやわらげる“落ち着いた空気感”が核となるデザイン。",
    tech: [
      "React",
      "Vite",
      "Tailwind",
      "GSAP",
      "IntersectionObserver",
      "PC/SP 完全分離",
      "microCMS（NEWS連携）"
    ]
  }
},

      {
        title: "Okinawa White Spa",
        slug: "OkinawaWhiteSpa",

        desc: "白 × 静寂 × 上質な余白。\n非日常の白を設計したリラクゼーションUI。",
        link: "https://okinawa-white-spa.vercel.app",
        img: "/works/spa.webp",

        isNew: false,
        createdAt: null,

        tags: [
          "白", "静寂", "余白", "ミニマル",
          "Beauty", "Salon",
          "Motion", "GSAP", "Light Animation"
        ],

        detail: {
          concept: "白を主役とした“非日常の静けさ”を、余白の重心と光の階調によってミニマルに構築したスパデザイン。",
          tech: ["React", "Vite", "Tailwind", "GSAP", "Light Animation"]
        }
      },
{
  title: "Lucent Salon",
  slug: "Lucent",

  desc: "透明な光 × ミニマル。\n美容 × 透明感をUIへ落とし込んだ設計。",
  link: "https://lucent-salon.vercel.app",
  img: "/works/lucent.webp",

  isNew: false,
  createdAt: null,

  tags: [
    "透明感",
    "光",
    "白",
    "ミニマル",
    "Beauty",
    "Salon",
    "Motion",
    "Light Animation"
  ],

  detail: {
    concept:
      "透明光のニュアンスをUIに抽象化し、美容系らしい“透け感 × 清潔感”をミニマルな構成で表現した設計。",
    tech: [
      "React",
      "Vite",
      "Tailwind",
      "GSAP",
      "Light Animation"
    ]
  }
},
      {
        title: "LUEUR PINK",
        slug: "LueurPink",

        desc: "透明感 × 上品ピンク。\n若年層向けに最適化した軽量モーションUI。",
        link: "https://lueur-pink.vercel.app",
        img: "/works/lueurpink.webp",

        isNew: false,
        createdAt: null,

        tags: [
          "ピンク", "透明感", "光", "可憐",
          "Beauty", "Salon",
          "Smartphone", "Motion"
        ],

        detail: {
          concept: "透明感と柔らかさをトーンに落とし込み、若年層に心地よく届く“軽さ × 品”のUI体験を設計。",
          tech: ["React", "Vite", "Tailwind", "GSAP", "Smartphone特化"]
        }
      },

    ]
  },
  /* ----------------------------------------------------------
    HOTEL
  ---------------------------------------------------------- */
  {
    category: "HOTEL",
    subtitle: "沖縄の光と空気感をUIに落とし込んだホテルデザイン",
    items: [
      {
        title: "Blue Shore Hotel — Luxury Okinawa",
        slug: "BlueShoreHotel",

        desc: "Sea × Light × Quiet Luxury。\n沖縄の“静けさ”を光と余白で再現したホテルLP。",
        link: "https://lux-hotel-lp.vercel.app",
        img: "/works/lux-hotel-lp.webp",

        isNew: true,
        createdAt: "2025-02-18",

        tags: [
          "NEW",
          "沖縄", "海", "静寂", "光", "透明感",
          "Hotel", "Luxury", "Branding",
          "GSAP", "Cinematic Scroll", "PC/SP 分離"
        ],

        detail: {
          concept: "沖縄の海光を“静寂のラグジュアリー”として再構築。余白と淡い光の遷移でホテルらしい上質感を演出。",
          tech: ["React", "Vite", "Tailwind", "GSAP", "Cinematic Scroll", "PC/SP分離"]
        }
      },
      {
        title: "SHIGURE — Seasonal Ryokan",
        slug: "Shigure",

        desc: "滞在 × 季節 × 静寂。\n“何もしない時間”を主役に設計した、思想主導の旅館体験UI。",
        link: "https://shigure.vercel.app/",
        img: "/works/shigure.webp",

        isNew: true,
        createdAt: "2025-03-XX",

        tags: [
          "NEW",
          "旅館",
          "滞在設計",
          "静寂",
          "余白",
          "季節",
          "Hotel",
          "Ryokan",
          "UX",
          "思想設計",
          "PC/SP 完全分離"
        ],

        detail: {
          concept:
            "観光や非日常を押し付けるのではなく、“日常の延長にある静けさ”を宿泊体験として設計。滞在・料理・季節の移ろい・余韻までをUIとして再構築した、思想主導の旅館サイト。",
          tech: [
            "React",
            "Vite",
            "Tailwind",
            "GSAP",
            "IntersectionObserver",
            "PC/SP 完全分離"
          ]
        }
      },

      {
        title: "Okinawa Resort Hotel",
        slug: "OkinawaLightResortHotel",

        desc: "光と青のホテルLP。\n沖縄の朝光を再現したビジュアル設計。",
        link: "https://okinawa-hotel.vercel.app",
        img: "/works/okinawa1.webp",

        isNew: false,
        createdAt: null,

        tags: [
          "沖縄", "光", "青", "海", "ミニマル",
          "Hotel", "Branding",
          "GSAP", "Motion"
        ],

        detail: {
          concept: "朝光の柔らかい青さを UI に抽象化し、静かな“朝の空気”を感じるホテルサイトとして設計。",
          tech: ["React", "Vite", "Tailwind", "GSAP", "Motion"]
        }
      },

      {
        title: "Horizon Blanc",
        slug: "HorizonBlanc",

        desc: "朝光 × 静寂。\n白の階調を活かした余白デザイン。",
        link: "https://okinawa-resort-hotel.vercel.app",
        img: "/works/okinawa2.webp",

        isNew: false,
        createdAt: null,

        tags: [
          "白", "光", "静寂", "余白",
          "Hotel", "Branding",
          "Parallax", "Motion"
        ],

        detail: {
          concept: "白の階調と微細な光の強弱を軸に、静寂と朝の清浄さをデザインとして昇華したホテルUI。",
          tech: ["React", "Vite", "Tailwind", "GSAP", "Parallax"]
        }
      },

      {
        title: "The Calm Okinawa",
        slug: "TheCalmOkinawa",

        desc: "海 × 透明感 × 静寂。\n水面の光をUIへ抽象化した構成。",
        link: "https://the-calm-okinawa.vercel.app",
        img: "/works/calm.webp",

        isNew: false,
        createdAt: null,

        tags: [
          "沖縄", "海", "透明感", "静寂", "光",
          "Hotel", "Branding",
          "Cinematic Scroll", "GSAP"
        ],

        detail: {
          concept: "静かな海面に揺れる光を UI アニメーションへ落とし込み、透明な静けさを軸にホテルの世界観を構築。",
          tech: ["React", "Vite", "Tailwind", "GSAP", "Cinematic Scroll"]
        }
      }
    ]
  },
  /* ----------------------------------------------------------
    EC / BRAND DESIGN
  ---------------------------------------------------------- */
  {
    category: "EC / BRAND DESIGN",
    subtitle: "世界観 × 技術を統合したECデザイン",
    items: [
          /* ==========================================
        NEW — WHITE × DARK CACAO（先頭）
    ========================================== */
    {
      title: "WHITE × DARK CACAO",
      slug: "WhiteDarkCacao",

      desc: "白 × カカオ × 静寂。\n食品ECを“上質な世界観”として再構築したデザイン。",
      link: "https://white-dark-cacao.vercel.app", // ← URL差し替えてね
      img: "/works/white-dark-cacao.webp",

      isNew: true,
      createdAt: "2026-01-19",

      tags: [
        "NEW",
        "白",
        "カカオ",
        "ミニマル",
        "EC",
        "Branding",
        "Food",
        "Motion",
        "Tailwind",
        "GSAP"
      ],

      detail: {
        concept:
          "国産ミルクと濃厚カカオの『静かな甘さ』を基調に、食品EC特有のゴチャつきを排除し、上質な世界観に統合して設計。余白・光・写真の比率を丁寧に調整し、食品ブランドとして信頼を得られる “高級食品UI” を目指した構成。",
        tech: [
          "React",
          "Vite",
          "Tailwind",
          "GSAP",
          "IntersectionObserver",
          "PC/SP 完全分離"
        ]
      }
    },

      {
        title: "STILL — Minimal EC",
        slug: "still",

        desc: "静寂 × 緊張感 × ファッション。\nストイックな構成美を追求したEC。",
        link: "https://still-ec.vercel.app",
        img: "/works/still-ec.webp",

        isNew: false,
        createdAt: null,

        tags: [
          "黒", "静寂", "モード", "緊張感",
          "EC", "Fashion",
          "Motion", "GSAP"
        ],

        detail: {
          concept: "黒の緊張感と余白のリズムで“静かな強さ”を作り出す、ファッション特化のミニマルEC設計。",
          tech: ["React", "Vite", "Tailwind", "GSAP"]
        }
      },

      {
        title: "Noir & Lux — Shadow Edition",
        slug: "noir-lux",

        desc: "影 × 造形 × 精密美。",
        link: "https://noir-lux.vercel.app",
        img: "/works/noir-lux.webp",

        isNew: true,
        createdAt: "2025-02-10",

        tags: [
          "NEW",
          "EC",
          "Branding",
          "Shadow",
          "Luxury",
          "Black",
          "Gold",
          "Minimal",
          "GSAP Motion",
          "PC/SP"
        ],

        detail: {
          concept:
            "影の造形と光の差分を精密に扱い、ハイブランドの陰影美を抽象化した静寂系ECデザイン。",
          tech: ["React", "Vite", "Tailwind", "GSAP", "PC/SP分離"]
        }
      },

      {
        title: "Okinawa Select — Modern Okinawan Objects",
        slug: "OkinawaSelectTeaser",

        desc: "沖縄素材 × 上質ミニマル。\n右スライドCart・ContextAPI管理・PC/SP完全分離など最新EC技術を統合したプロトタイプ。",
        link: "https://okinawa-select.vercel.app",
        img: "/works/OkinawaSelect.webp",

        isNew: false,
        createdAt: null,

        tags: [
          "沖縄", "自然光", "ミニマル", "白",
          "EC", "Branding",
          "ContextAPI", "Cart Animation", "PC/SP 分離"
        ],

        detail: {
          concept: "沖縄素材の“自然光の美”をプロダクト写真に集約し、ミニマルの静けさに落とし込んだ次世代型EC。",
          tech: ["React", "Vite", "Tailwind", "ContextAPI", "PC/SP分離"]
        }
      },

      {
        title: "Neutral Objects — Lifestyle Brand",
        slug: "NeutralObjectsTeaser",

        desc: "光 × 余白 × 静けさ。\nオブジェ写真を中心に据えた編集型EC。",
        link: "https://neutral-objects.vercel.app",
        img: "/works/neutral-objects.webp",

        isNew: false,
        createdAt: null,

        tags: [
          "光", "静寂", "余白", "ミニマル",
          "EC", "Branding", "Art",
          "Motion"
        ],

        detail: {
          concept: "オブジェの“存在静度”をUIの主役に置き、光と余白で魅せる美術館型ECを構築。",
          tech: ["React", "Vite", "Tailwind", "GSAP"]
        }
      }
    ]
  },
/* ----------------------------------------------------------
  OUTDOOR / PRODUCT DESIGN
---------------------------------------------------------- */
{
  category: "OUTDOOR / PRODUCT DESIGN",
  subtitle: "道具・屋外プロダクトの“使用感”をUIへ翻訳したデザイン",
  items: [
    {
      title: "Re:Camp — Outdoor Gear Studio",
      slug: "ReCamp",

      desc: "屋外 × 道具 × 実在感。\n使用環境から逆算したプロダクト設計。",
      link: "https://recamp-site.vercel.app/",
      img: "/works/recamp.webp",

      isNew: true,
      createdAt: "2026-01-XX",

      tags: [
        "Outdoor",
        "Gear",
        "プロダクト",
        "実在感",
        "Minimal",
        "Branding",
        "GSAP",
        "PC/SP 分離"
      ],

      detail: {
        concept:
          "屋外という“不安定な環境”を前提に、道具の配置・光・使用距離までをUIへ翻訳。機能説明ではなく、触れたときの質感や“使える実感”を中心に置いたプロダクトデザイン。",
        tech: [
          "React",
          "Vite",
          "GSAP",
          "IntersectionObserver",
          "Tailwind",
          "PC/SP 完全分離"
        ]
      }
    }
  ]
}
,

  /* ----------------------------------------------------------
     FOOD / FURNITURE / BRAND
  ---------------------------------------------------------- */
  {
    category: "FOOD / FURNITURE / BRAND",
    subtitle: "飲食・家具・ブランドUIに最適化した世界観設計",
    items: [
      {
        title: "RÉSONANCE — Restaurant",
        slug: "resonance",

        desc: "時間 × 熱 × 静寂。\nスクロールを通して“一夜の体験”を設計したシネマティック・レストランUI。",
        link: "https://resonance-restaurant.vercel.app/",
        img: "/works/resonance.webp",

        isNew: true,
        createdAt: "2025-02-10",

        tags: [
          "NEW",
          "静寂", "陰影", "光", "黒",
          "Restaurant", "Branding",
          "Cinematic Scroll", "GSAP"
        ],

        detail: {
          concept:
            "“一夜の温度変化”をストーリーベースで再現し、料理 × 時間 × 光を滑らかなシネマティック体験として設計。",
          tech: ["React", "Vite", "Tailwind", "GSAP", "Cinematic Scroll"]
        }
      },
      {
        title: "甘静 — Wagashi Brand",
        slug: "Kansei",

        desc: "余白 × 静寂 × 季節。\n“その日の菓子をつくる”姿勢を、空間として設計した和菓子ブランドサイト。",
        link: "https://kansei-nine.vercel.app/",
        img: "/works/kansei.webp",

        isNew: true,
        createdAt: "2025-03-XX",

        tags: [
          "NEW",
          "和菓子",
          "静寂",
          "余白",
          "季節",
          "Food",
          "Branding",
          "Japanese Aesthetic",
          "PC/SP 分離"
        ],

        detail: {
          concept:
            "商品説明や物語を語るのではなく、菓子と空間の“姿勢”だけを残す構成。余白・配置・視線の流れを通して、季節と距離感を体験させる和菓子ブランドサイト。",
          tech: [
            "React",
            "Vite",
            "Tailwind",
            "PC/SP 完全分離"
          ]
        }
      },

      {
        title: "CAPE. OKINAWA — Cafe",
        slug: "CapeOkinawa",

        desc: "海 × 光 × 静寂。\n体験の流れそのものを設計した、展示型カフェWeb。",
        link: "https://cape-okinawa.vercel.app/",
        img: "/works/cape-okinawa.webp",

        isNew: true,
        createdAt: "2025-02-10",

        tags: [
          "NEW",
          "沖縄", "青", "海", "光", "静寂",
          "Cafe", "Branding",
          "Motion"
        ],

        detail: {
          concept: "海光の揺らぎと空気の澄みを UI に抽象化し、カフェ体験を“展示”として見せる静寂デザイン。",
          tech: ["React", "Vite", "Tailwind", "GSAP"]
        }
      },
{
  title: "OkiLato — Island Freshness",
  slug: "OkiLato",

  desc: "南国 × ターコイズ。\n沖縄の光と温度を、そのままUIに落とし込んだブランド体験。",
  link: "https://oki-lato.vercel.app",
  img: "/works/okilato.webp",

  isNew: false,
  createdAt: null,

  tags: [
    "沖縄",
    "ターコイズ",
    "海",
    "光",
    "ミニマル",
    "Branding",
    "Food",
    "Motion"
  ],

  detail: {
    concept:
      "沖縄の光と湿度を色・余白・写真配置に抽象化し、南国らしい軽さと心地よさをUI体験として構築したブランドデザイン。",
    tech: [
      "React",
      "Vite",
      "Tailwind",
      "GSAP"
    ]
  }
},

      {
        title: "Aburiya Itto",
        slug: "AburiyaItto",

        desc: "和 × 炙り × ラグジュアリー。\n和の陰影を活かした料理ブランディング。",
        link: "https://aburiya-itto.vercel.app",
        img: "/works/itto.webp",

        isNew: false,
        createdAt: null,

        tags: [
          "和", "黒", "赤", "陰影",
          "Restaurant", "Branding",
          "GSAP", "Motion"
        ],

        detail: {
          concept: "和食の“火 × 陰影”を美術的に再構成し、静かな迫力を感じる料理ブランディングを設計。",
          tech: ["React", "Vite", "Tailwind", "GSAP"]
        }
      },

      {
        title: "Koti — Furniture",
        slug: "Koti",

        desc: "北欧の光 × 木の温度。\n柔らかな北欧光をUIに落とし込んだ家具ブランド。",
        link: "https://koti-beta.vercel.app",
        img: "/works/koti.webp",

        isNew: false,
        createdAt: null,

        tags: [
          "北欧", "木", "自然光", "柔らかい光",
          "Furniture", "Branding",
          "Motion"
        ],

        detail: {
          concept: "北欧の“木の温度”と柔らかい光の粒度をUIへ翻訳し、優しい空気感で家具の魅力を引き出す設計。",
          tech: ["React", "Vite", "Tailwind", "GSAP"]
        }
      },

      {
        title: "ACTIVE DAYS",
        slug: "ActiveDays",

        desc: "黒 × スポーティ × 都会的。\nフィットネス特有の動感をUIへ構築。",
        link: "https://active-days.vercel.app",
        img: "/works/activedays.webp",

        isNew: false,
        createdAt: null,

        tags: [
          "黒", "スポーティ", "都会", "動感",
          "Branding", "Fitness",
          "Motion"
        ],

        detail: {
          concept: "黒の無機質さと都会のスピード感を混ぜ合わせ、フィットネスの“動き”をUIで直感的に表現した設計。",
          tech: ["React", "Vite", "Tailwind", "GSAP"]
        }
      },
      {
  title: "FINE — Okinawa Edition",
  slug: "FineOkinawa",

  desc: "40代からの穏やかな出会い。\n安心感を設計した大人向けUI。",
  link: "https://www.fine-okinawa.com/",
  img: "/works/fine.webp",

  isNew: false,
  createdAt: null,

  tags: [
    "安心感", "穏やか", "白", "柔らかい光",
    "Real Project", "Matching",
    "Smartphone"
  ],

  detail: {
    concept:
      "“安心感 × 柔らかさ”を優先した大人向けUIで、余白と静かな光を中心に設計したリアル事業サイト。",
    tech: ["Next.js（元サイト仕様）", "Responsive"]
  }
}
    ]
  },



  /* ----------------------------------------------------------
    ART / CREATIVE
  ---------------------------------------------------------- */
  {
    category: "ART / CREATIVE",
    subtitle: "光・影・静寂をテーマにしたアート表現",
    items: [
      {
        title: "VIVA — Between the sea and the city",
        slug: "VIVA",

        desc: "海と都市のあいだ。\n用途を定義しない“編集された空気”としてのファッション表現。",
        link: "https://viva-fashion.vercel.app/",
        img: "/works/viva.webp",

        isNew: true,
        createdAt: "2026-01-XX",

        tags: [
          "Editorial",
          "Art",
          "Fashion",
          "余白",
          "静寂",
          "世界観",
          "Cinematic",
          "PC/SP 最適化"
        ],

        detail: {
          concept:
            "雑誌・ブランド・ECのいずれにも属さない、編集思想主導のファッション表現。スクロールをページめくりと捉え、余白・写真・リズムだけで“残る感覚”を設計したアート寄りプロジェクト。",
          tech: [
            "React",
            "Vite",
            "Tailwind",
            "GSAP",
            "IntersectionObserver",
            "PC/SP 最適化"
          ]
        }
      },
      {
        title: "BLACK ORIETTA",
        slug: "GoldenVeil",

        desc: "黒 × 金 × 香りの余韻。\nプロダクトではなく“空気”を編集したフレグランス表現。",
        link: "https://black-orietta.vercel.app",
        img: "/works/orietta.webp",

        isNew: false,
        createdAt: null,

        tags: [
          "Art",
          "Fragrance",
          "Editorial",
          "Luxury",
          "黒",
          "金",
          "陰影",
          "静寂",
          "GSAP",
          "Motion"
        ],

        detail: {
          concept:
            "香水そのものではなく、“残り香の時間”を主題に、黒の深度と金の輝度差で静かなラグジュアリーを構築。プロダクト説明を排し、光と陰影のみで世界観を編集したアート寄り表現。",
          tech: [
            "React",
            "Vite",
            "Tailwind",
            "GSAP"
          ]
        }
      },
      {
        title: "RYUKA — Fragrance",
        slug: "RyukaIntro",

        desc: "自然光 × 琉球の香り。\n香りの余韻を“余白”で可視化した抽象的ブランド表現。",
        link: "https://ryuka-official.vercel.app",
        img: "/works/ryuka.webp",

        isNew: false,
        createdAt: null,

        tags: [
          "自然光", "琉球", "光", "余白", "静寂",
          "Fragrance", "Art", "Branding"
        ],

        detail: {
          concept: "“香りの余韻”を光と余白で表現し、琉球の静けさを抽象的に再構築したアート寄りブランドデザイン。",
          tech: ["React", "Vite", "Tailwind"]
        }
      },

      {
        title: "The Flow of Tea",
        slug: "FlowOfTea",

        desc: "茶 × 余白 × 世界観。\n茶の所作を静かに伝える構成美。",
        link: "https://flow-of-tea.vercel.app",
        img: "/works/aziwau1.webp",

        isNew: false,
        createdAt: null,

        tags: [
          "茶", "静寂", "余白", "日本的",
          "Art", "Branding"
        ],

        detail: {
          concept: "“茶の所作”の静けさを UI に落とし込み、余白・行間・温度の美学で世界観を構築したアート設計。",
          tech: ["React", "Vite", "Tailwind"]
        }
      },

      {
        title: "Ray of Silence",
        slug: "RayOfSilence",

        desc: "光 × 影 × 静寂。\nミニマル光学のアート表現。",
        link: "https://ray-of-silence.vercel.app",
        img: "/works/ray.webp",

        isNew: false,
        createdAt: null,

        tags: [
          "光", "影", "静寂", "ミニマル",
          "Art",
          "GSAP", "Light Animation"
        ],

        detail: {
          concept: "光と影の繊細な境界をモーションに抽象化し、“静寂の光学”をテーマに構築したミニマルアートサイト。",
          tech: ["React", "Vite", "Tailwind", "GSAP", "Light Animation"]
        }
      }
    ]
  }
];
