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
        title: "Okinawa White Spa",
        slug: "okinawa-white-spa",

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
        title: "LUEUR PINK",
        slug: "lueur-pink",

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

      {
        title: "BLACK ORIETTA",
        slug: "black-orietta",

        desc: "黒 × 金 × 高級香水。\n重厚なラグジュアリートーンの演出設計。",
        link: "https://black-orietta.vercel.app",
        img: "/works/orietta.webp",

        isNew: false,
        createdAt: null,

        tags: [
          "黒", "金", "Luxury", "陰影",
          "Beauty", "Branding", "Fragrance",
          "GSAP", "Motion"
        ],

        detail: {
          concept: "黒の深度と金の輝度差で“高級香水の余韻”を再現し、陰影のコントラストで重厚な静けさを演出。",
          tech: ["React", "Vite", "Tailwind", "GSAP"]
        }
      }
    ]
  },

  /* ----------------------------------------------------------
    SMARTPHONE / MOBILE DESIGN
  ---------------------------------------------------------- */
  {
    category: "SMARTPHONE / MOBILE DESIGN",
    subtitle: "スマホでの体験を最優先したUI設計",
    items: [
      {
        title: "OkiLato — Island Freshness",
        slug: "okilato",

        desc: "南国 × ターコイズ。\nスマホ特化レイアウトで体験を最適化。",
        link: "https://oki-lato.vercel.app",
        img: "/works/okilato.webp",

        isNew: false,
        createdAt: null,

        tags: [
          "沖縄", "青", "海", "光", "ミニマル",
          "Smartphone", "Branding",
          "Motion"
        ],

        detail: {
          concept: "ターコイズの清涼感と南国光をスマホ特化レイアウトに最適化し、軽快に閲覧できる感覚的UIを構築。",
          tech: ["React", "Vite", "Tailwind", "GSAP", "Smartphone特化"]
        }
      },

      {
        title: "Lucent Salon",
        slug: "lucent-salon",

        desc: "透明な光 × ミニマル。\n美容 × 透明感をUIへ落とし込んだ設計。",
        link: "https://lucent-salon.vercel.app",
        img: "/works/lucent.webp",

        isNew: false,
        createdAt: null,

        tags: [
          "透明感", "光", "白", "ミニマル",
          "Beauty", "Smartphone",
          "Motion", "Light Animation"
        ],

        detail: {
          concept: "透明光のニュアンスをUIに抽象化し、美容系らしい“透け感 × 清潔感”をミニマルで表現した設計。",
          tech: ["React", "Vite", "Tailwind", "GSAP", "Light Animation", "Smartphone特化"]
        }
      }
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
        slug: "blue-shore-hotel",

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
        title: "Okinawa Resort Hotel",
        slug: "okinawa-resort-hotel",

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
        slug: "horizon-blanc",

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
        slug: "the-calm-okinawa",

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
      {
        title: "STILL — Minimal EC",
        slug: "still-ec",

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
        slug: "okinawa-select",

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
        slug: "neutral-objects",

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
        title: "CAPE. OKINAWA — Cafe",
        slug: "cape-okinawa",

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
        title: "Aburiya Itto",
        slug: "aburiya-itto",

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
        slug: "koti",

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
        slug: "active-days",

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
      }
    ]
  },

  /* ----------------------------------------------------------
    MATCHING / REAL BUSINESS PROJECT
  ---------------------------------------------------------- */
  {
    category: "MATCHING / REAL BUSINESS PROJECT",
    subtitle: "実際の事業で使用されているUI/UXデザイン",
    items: [
      {
        title: "FINE — Okinawa Edition",
        slug: "fine-okinawa",

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
          concept: "“安心感 × 柔らかさ”を優先した大人向けUIで、余白と静かな光を中心に設計したリアル事業サイト。",
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
        title: "RYUKA — Fragrance",
        slug: "ryuka",

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
        slug: "flow-of-tea",

        desc: "茶 × 余白 × 世界観。\n茶の所作を静かに伝える構成美。",
        link: "https://flow-of-tea.vercel.app",
        img: "/works/aziwau.webp",

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
        slug: "ray-of-silence",

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
