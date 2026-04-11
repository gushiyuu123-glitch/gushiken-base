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

const easeSilent = [0.22, 0.56, 0.18, 1];

const reveal = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.995,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.02,
      ease: easeSilent,
    },
  },
};

const revealSoft = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.995,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.96,
      ease: easeSilent,
    },
  },
};

const sectionIntro = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function NoahRoom() {
  return (
    <main className="min-h-screen bg-[#0a0c10] text-white">
      {/* HERO */}
      <section className="border-b border-white/10 px-6 pb-16 pt-28 md:px-10 md:pt-36">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-end">
          <motion.div
            variants={sectionIntro}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={revealSoft}
              className="mb-4 text-[0.72rem] tracking-[0.28em] text-white/45"
            >
              ART / CREATIVE
            </motion.p>

            <motion.h1
              variants={reveal}
              className="text-[clamp(2.4rem,6vw,5.8rem)] font-light leading-[0.95] tracking-[0.08em]"
            >
              NOAH
            </motion.h1>

            <motion.p
              variants={revealSoft}
              className="mt-6 max-w-2xl text-[0.98rem] leading-8 text-white/72 md:text-[1.04rem]"
            >
              愛が災厄になったあとも、なお消えなかったもの。
              孤独な少年と人工知能の出会いから始まり、
              愛・喪失・崩壊・継承へと進んでいく3シーズン構成のSF Web作品。
            </motion.p>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            animate="show"
            className="overflow-hidden rounded-[14px] border border-white/10 bg-white/5"
          >
            <img
              src="/works/noah-main.webp"
              alt="NOAH key visual"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ARCHIVE */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-12 md:mb-16"
            variants={sectionIntro}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p
              variants={revealSoft}
              className="mb-3 text-[0.72rem] tracking-[0.26em] text-white/40"
            >
              WEB ARCHIVE
            </motion.p>

            <motion.h2
              variants={revealSoft}
              className="text-[1.5rem] font-light tracking-[0.06em] md:text-[2rem]"
            >
              3 Seasons
            </motion.h2>
          </motion.div>

          <div className="grid gap-8">
            {seasons.map((season, index) => (
              <motion.a
                key={season.title}
                href={season.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group grid overflow-hidden rounded-[14px]
                  border border-white/10 bg-white/[0.03]
                  transition-[transform,border-color,box-shadow,background-color]
                  duration-[380ms]
                  ease-[cubic-bezier(0.22,0.56,0.18,1)]
                  hover:-translate-y-[3px]
                  hover:border-white/16
                  hover:bg-white/[0.045]
                  hover:shadow-[0_18px_34px_rgba(0,0,0,0.34)]
                  md:grid-cols-[1.05fr_0.95fr]
                "
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.98,
                  delay: index * 0.06,
                  ease: easeSilent,
                }}
              >
                <div className="flex flex-col justify-between p-7 md:p-10">
                  <div>
                    <p className="mb-4 text-[0.72rem] tracking-[0.26em] text-white/38">
                      {season.title}
                    </p>

                    <h3 className="text-[1.25rem] font-medium leading-[1.35] md:text-[1.7rem]">
                      {season.subtitle}
                    </h3>

                    <p className="mt-5 text-[0.95rem] leading-8 text-white/68">
                      {season.desc}
                    </p>
                  </div>

                  <div
                    className="
                      mt-8 inline-flex items-center gap-3
                      text-[0.82rem] tracking-[0.18em] text-white/74
                      transition-colors duration-[280ms] ease-out
                      group-hover:text-white/92
                    "
                  >
                    <span>VIEW SITE</span>
                    <span
                      className="
                        transition-transform duration-[300ms] ease-out
                        group-hover:translate-x-[3px]
                      "
                    >
                      →
                    </span>
                  </div>
                </div>

                <div className="min-h-[260px] overflow-hidden md:min-h-[320px]">
                  <img
                    src={season.img}
                    alt={season.title}
                    className="
                      h-full w-full object-cover
                      brightness-[0.92]
                      scale-[1.002]
                      transition-[transform,filter]
                      duration-[620ms]
                      ease-[cubic-bezier(0.22,0.56,0.18,1)]
                      group-hover:brightness-[0.99]
                      group-hover:scale-[1.02]
                    "
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