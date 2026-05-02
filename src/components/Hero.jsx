import { motion } from "framer-motion";
import { moonData } from "../data/content.js";

function WaxingCrescentMoon() {
  return (
    <div
      className="relative mx-auto h-56 w-56 sm:h-72 sm:w-72 lg:h-96 lg:w-96"
      aria-label={`${moonData.phase} moon, ${moonData.illumination} illuminated`}
      role="img"
    >
      <div className="absolute inset-0 rounded-full bg-moon shadow-moon" />
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_28%,rgba(255,255,255,0.88),rgba(248,244,223,0.9)_18%,rgba(211,202,169,0.75)_48%,rgba(110,96,78,0.45)_100%)]" />
      <div className="absolute left-[7%] top-0 h-full w-full rounded-full bg-[#080914] shadow-[inset_18px_0_28px_rgba(255,255,255,0.08)]" />
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_73%_31%,rgba(94,80,64,0.2)_0_4px,transparent_5px),radial-gradient(circle_at_82%_54%,rgba(94,80,64,0.16)_0_7px,transparent_8px),radial-gradient(circle_at_70%_71%,rgba(94,80,64,0.13)_0_5px,transparent_6px)] mix-blend-multiply" />
      <div className="absolute -inset-8 rounded-full bg-moon/10 blur-3xl" />
    </div>
  );
}

export default function Hero() {
  const scrollToJourney = () => {
    document.getElementById("letters")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-5 py-20">
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.34em] text-roseglow/80">
            Lelo's Special Day
          </p>
          <h1 className="font-display text-5xl leading-[0.95] text-moon sm:text-7xl lg:text-8xl">
            The Moon on the Day You Were Born
          </h1>
          <p className="mt-6 font-display text-3xl text-white sm:text-4xl">
            {moonData.date}
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/76 lg:mx-0">
            A waxing crescent moon, just like the beginning of something beautiful. 
            This is not just a normal day, it's the day the light to my heart was born. 
          </p>
          <button
            type="button"
            onClick={scrollToJourney}
            className="mt-10 rounded-full border border-roseglow/40 bg-roseglow px-8 py-4 font-semibold text-[#210918] shadow-[0_0_32px_rgba(255,143,184,0.35)] transition hover:-translate-y-1 hover:bg-white focus:outline-none focus:ring-4 focus:ring-roseglow/30"
          >
            Start the Journey
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
          className="animate-float"
        >
          <WaxingCrescentMoon />
        </motion.div>
      </div>
    </section>
  );
}
