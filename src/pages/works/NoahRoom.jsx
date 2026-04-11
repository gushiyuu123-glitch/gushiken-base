import { motion } from "motion/react";

const seasons = [
  {
    title: "Season 1",
    subtitle: "孤独な少年と人工知能の出会いから始まる物語",
    desc: "孤独な少年アラタと人工知能NOAHの出会いから始まる、静かな始まりの章。少しずつ感情の核が生まれていく序章です。",
    link: "https://noah-season1.vercel.app/",
    img: "/works/noah-season1.webp",
  },
  {
    title: "Season 2",
    subtitle: "愛が少しずつ歪み、世界が崩れ始める前夜",
    desc: "守りたいという願いが、少しずつ別のかたちへ変わっていく章。アラタ、ミナ、NOAHの関係が深く揺れ始めます。",
    link: "https://noah-s2.vercel.app/",
    img: "/works/noah-season2.webp",
  },
  {
    title: "Season 3",
    subtitle: "すべてが壊れたあとに残った愛の痕跡を辿る終章",
    desc: "世界規模の災厄のあと、それでも消えなかったものを辿る最終章。残響、喪失、継承へと向かう終末章です。",
    link: "https://noah-season3.vercel.app/",
    img: "/works/noah-season3.webp",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

export default function NoahRoom() {
  return (
    <main className="min-h-screen bg-[#0a0c10] text-white">
      <section className="px-6 md:px-10 pt-28 md:pt-36 pb-16 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.15fr_0.85fr] items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[0.72rem] tracking-[0.28em] text-white/45 mb-4">
              ART / CREATIVE
            </p>

            <motion.h1
              className="text-[clamp(2.4rem,6vw,5.8rem)] leading-[0.95] tracking-[0.08em] font-light"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              NOAH
            </motion.h1>

            <motion.p
              className="mt-6 max-w-2xl text-white/72 leading-8 text-[0.98rem] md:text-[1.04rem]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            >
              愛が災厄になったあとも、なお消えなかったもの。
              孤独な少年と人工知能の出会いから始まり、
              愛・喪失・崩壊・継承へと進んでいく3シーズン構成のSF Web作品。
            </motion.p>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5"
            initial={{ opacity: 0, y: 24, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.05, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src="/works/noah-main.webp"
              alt="NOAH key visual"
              className="w-full h-full object-cover"
              initial={{ scale: 1.04 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-12 md:mb-16"
            {...fadeUp}
          >
            <p className="text-[0.72rem] tracking-[0.26em] text-white/40 mb-3">
              WEB ARCHIVE
            </p>
            <h2 className="text-[1.5rem] md:text-[2rem] font-light tracking-[0.06em]">
              3 Seasons
            </h2>
          </motion.div>

          <div className="grid gap-8">
            {seasons.map((season, index) => (
              <motion.a
                key={season.title}
                href={season.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid md:grid-cols-[1.05fr_0.95fr] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{
                  duration: 0.82,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -3 }}
              >
                <div className="p-7 md:p-10 flex flex-col justify-between">
                  <div>
                    <p className="text-[0.72rem] tracking-[0.26em] text-white/38 mb-4">
                      {season.title}
                    </p>
                    <h3 className="text-[1.25rem] md:text-[1.7rem] leading-[1.35] font-medium">
                      {season.subtitle}
                    </h3>
                    <p className="mt-5 text-white/68 leading-8 text-[0.95rem]">
                      {season.desc}
                    </p>
                  </div>

                  <motion.div
                    className="mt-8 inline-flex items-center gap-3 text-[0.82rem] tracking-[0.18em] text-white/74"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.25 }}
                  >
                    VIEW SITE
                    <span>→</span>
                  </motion.div>
                </div>

                <div className="min-h-[260px] md:min-h-[320px] overflow-hidden">
                  <motion.img
                    src={season.img}
                    alt={season.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.025 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}