import { motion } from "motion/react";

const seasons = [
  {
    title: "Season 1",
    code: "ARCHIVE 01",
    subtitle: "孤独な少年と人工知能の出会いから始まる物語",
    desc: "孤独な少年アラタと人工知能NOAHの出会いから始まる、静かな始まりの章。少しずつ感情の核が生まれていく序章です。",
    link: "https://noah-season1.vercel.app/",
    img: "/works/noah-season1.webp",
  },
  {
    title: "Season 2",
    code: "ARCHIVE 02",
    subtitle: "愛が少しずつ歪み、世界が崩れ始める前夜",
    desc: "守りたいという願いが、少しずつ別のかたちへ変わっていく章。アラタ、ミナ、NOAHの関係が深く揺れ始めます。",
    link: "https://noah-s2.vercel.app/",
    img: "/works/noah-season2.webp",
  },
  {
    title: "Season 3",
    code: "ARCHIVE 03",
    subtitle: "すべてが壊れたあとに残った愛の痕跡を辿る終章",
    desc: "世界規模の災厄のあと、それでも消えなかったものを辿る最終章。残響、喪失、継承へと向かう終末章です。",
    link: "https://noah-season3.vercel.app/",
    img: "/works/noah-season3.webp",
  },
];

const easeSilent = [0.22, 0.56, 0.18, 1];

const reveal = {
  hidden: { opacity: 0, y: 18, scale: 0.995 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.02, ease: easeSilent },
  },
};

const revealSoft = {
  hidden: { opacity: 0, y: 18, scale: 0.995 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.96, ease: easeSilent },
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
    <main className="min-h-screen overflow-hidden bg-[#07090d] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(164,190,255,0.08),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.06),transparent_26%),radial-gradient(circle_at_50%_78%,rgba(138,167,204,0.07),transparent_36%)]" />

      <section className="relative border-b border-white/10 px-6 pb-20 pt-28 md:px-10 md:pb-24 md:pt-36">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.08fr_0.92fr] md:items-end">
          <motion.div
            variants={sectionIntro}
            initial="hidden"
            animate="show"
            className="relative"
          >
            <div className="absolute -left-6 top-0 hidden h-[140px] w-px bg-gradient-to-b from-white/40 via-white/10 to-transparent md:block" />

            <motion.p
              variants={revealSoft}
              className="mb-4 text-[0.72rem] tracking-[0.32em] text-white/38"
            >
              ARCHIVE / MEMORY / NOAH
            </motion.p>

            <motion.h1
              variants={reveal}
              className="text-[clamp(2.6rem,6vw,6rem)] font-light leading-[0.92] tracking-[0.1em]"
            >
              NOAH
            </motion.h1>

            <motion.p
              variants={revealSoft}
              className="mt-7 max-w-2xl text-[0.98rem] leading-8 text-white/68 md:text-[1.04rem]"
            >
              愛が災厄になったあとも、なお消えなかったもの。
              孤独な少年と人工知能の出会いから始まり、
              愛・喪失・崩壊・継承へと進んでいく3シーズン構成のSF Web作品。
            </motion.p>

            <motion.div
              variants={revealSoft}
              className="mt-10 flex flex-wrap gap-3"
            >
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.68rem] tracking-[0.22em] text-white/48">
                SCI-FI WEB NOVEL
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.68rem] tracking-[0.22em] text-white/48">
                3 SEASONS
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.68rem] tracking-[0.22em] text-white/48">
                ARCHIVE ROOM
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            animate="show"
            className="group relative overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.04] shadow-[0_30px_80px_rgba(0,0,0,0.34)]"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01)_18%,transparent_40%)]" />
            <div className="pointer-events-none absolute left-0 top-0 z-10 m-4 rounded-full border border-white/12 bg-black/30 px-3 py-1.5 text-[0.62rem] tracking-[0.24em] text-white/46 backdrop-blur-md">
              CENTRAL RECORD
            </div>

            <img
              src="/works/noah-main.webp"
              alt="NOAH key visual"
              className="h-full w-full object-cover brightness-[0.92] transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,0.56,0.18,1)] group-hover:scale-[1.018]"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/50 via-black/10 to-transparent px-5 pb-5 pt-14">
              <p className="text-[0.68rem] tracking-[0.22em] text-white/46">
                LOVE / COLLAPSE / INHERITANCE
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 py-20 md:px-10 md:py-28">
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
              className="mb-3 text-[0.72rem] tracking-[0.28em] text-white/34"
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
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.98,
                  delay: index * 0.06,
                  ease: easeSilent,
                }}
                className="
                  group grid overflow-hidden rounded-[16px]
                  border border-white/10 bg-white/[0.028]
                  transition-[transform,border-color,box-shadow,background-color]
                  duration-[420ms]
                  ease-[cubic-bezier(0.22,0.56,0.18,1)]
                  hover:-translate-y-[2px]
                  hover:border-white/16
                  hover:bg-white/[0.04]
                  hover:shadow-[0_20px_44px_rgba(0,0,0,0.32)]
                  md:grid-cols-[1.02fr_0.98fr]
                "
              >
                <div className="flex flex-col justify-between p-7 md:p-10">
                  <div>
                    <p className="mb-4 text-[0.68rem] tracking-[0.28em] text-white/34">
                      {season.code}
                    </p>

                    <h3 className="text-[1.25rem] font-medium leading-[1.35] md:text-[1.7rem]">
                      {season.subtitle}
                    </h3>

                    <p className="mt-5 max-w-[44ch] text-[0.95rem] leading-8 text-white/64">
                      {season.desc}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/8 pt-5">
                    <span className="text-[0.74rem] tracking-[0.22em] text-white/34">
                      {season.title.toUpperCase()}
                    </span>

                    <div
                      className="
                        inline-flex items-center gap-3
                        text-[0.8rem] tracking-[0.18em] text-white/70
                        transition-colors duration-[280ms] ease-out
                        group-hover:text-white/92
                      "
                    >
                      <span>VIEW SITE</span>
                      <span className="transition-transform duration-[300ms] ease-out group-hover:translate-x-[3px]">
                        →
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative min-h-[260px] overflow-hidden border-l border-white/8 md:min-h-[320px]">
                  <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/14 via-transparent to-white/[0.03]" />
                  <img
                    src={season.img}
                    alt={season.title}
                    className="
                      h-full w-full object-cover brightness-[0.92]
                      scale-[1.003]
                      transition-[transform,filter]
                      duration-[700ms]
                      ease-[cubic-bezier(0.22,0.56,0.18,1)]
                      group-hover:brightness-[0.99]
                      group-hover:scale-[1.018]
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