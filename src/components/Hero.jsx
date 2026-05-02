import { motion } from "framer-motion";
import { moonData } from "../data/content.js";

function WaxingCrescentMoon() {
  return (
    <div
      className="relative mx-auto h-56 w-56 sm:h-72 sm:w-72 lg:h-96 lg:w-96"
      aria-label={`${moonData.phase} moon, ${moonData.illumination} illuminated`}
      role="img"
    >
      {/* Outer atmosphere glow — wide pink halo */}
      <div
        className="absolute -inset-16 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,143,184,0.07) 40%, transparent 72%)",
          filter: "blur(28px)",
        }}
      />
      {/* Inner warm glow ring */}
      <div
        className="absolute -inset-8 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(248,244,223,0.18) 52%, transparent 78%)",
          filter: "blur(18px)",
        }}
      />

      {/* 1 — Base sphere: warm highland tones */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 58% 42%, #f5eece 0%, #e9dca8 28%, #cfc090 55%, #b5a370 78%, #9a8858 100%)",
        }}
      />

      {/* 2 — Bright central highlight (terminator-side) */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse 38% 32% at 62% 36%, rgba(255,253,242,0.82) 0%, rgba(255,250,228,0.45) 40%, transparent 100%)",
        }}
      />

      {/* 3 — Mare (dark volcanic plains) — irregular dark patches */}
      <div
        className="absolute inset-0 rounded-full mix-blend-multiply"
        style={{
          background: `
            radial-gradient(ellipse 24% 16% at 74% 40%, rgba(88,72,50,0.42) 0%, transparent 100%),
            radial-gradient(ellipse 16% 12% at 82% 64%, rgba(80,66,46,0.34) 0%, transparent 100%),
            radial-gradient(ellipse 20% 14% at 60% 70%, rgba(85,70,48,0.30) 0%, transparent 100%),
            radial-gradient(ellipse 10%  8% at 68% 52%, rgba(75,62,42,0.22) 0%, transparent 100%)
          `,
        }}
      />

      {/* 4 — Craters with shadowed bowl + bright rim highlight */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `
            radial-gradient(circle at 73% 32%, rgba(60,48,32,0.30) 0 3.5px, rgba(240,232,200,0.22) 3.5px 5.5px, transparent 6px),
            radial-gradient(circle at 81% 55%, rgba(60,48,32,0.26) 0 5.5px, rgba(240,232,200,0.18) 5.5px 8px,   transparent 8.5px),
            radial-gradient(circle at 69% 72%, rgba(60,48,32,0.22) 0 4px,   rgba(240,232,200,0.14) 4px 6px,     transparent 6.5px),
            radial-gradient(circle at 77% 46%, rgba(60,48,32,0.18) 0 2.5px, rgba(240,232,200,0.10) 2.5px 4px,   transparent 4.5px),
            radial-gradient(circle at 65% 60%, rgba(60,48,32,0.14) 0 2px,   rgba(240,232,200,0.08) 2px 3px,     transparent 3.5px),
            radial-gradient(circle at 85% 38%, rgba(60,48,32,0.12) 0 1.5px, rgba(240,232,200,0.06) 1.5px 2.5px, transparent 3px)
          `,
        }}
      />

      {/* 5 — Limb darkening: edges always appear darker on real moons */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 48%, rgba(18,12,4,0.38) 75%, rgba(6,4,2,0.72) 100%)",
        }}
      />

      {/* 6 — Night-side shadow overlay (creates the crescent shape) */}
      <div
        className="absolute top-0 h-full w-full rounded-full"
        style={{
          left: "8%",
          background: "#080914",
          boxShadow: "inset 22px 0 36px rgba(255,255,255,0.055)",
        }}
      />

      {/* 7 — Subtle surface sheen: soft specular reflection */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse 22% 18% at 58% 30%, rgba(255,255,255,0.12) 0%, transparent 100%)",
        }}
      />
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
          <div className="mx-auto mt-8 w-full max-w-[690px] overflow-hidden rounded-[1.25rem] border border-white/20 bg-black/20 p-2 shadow-glass backdrop-blur-xl">
            <iframe
              title="Birthday dance song"
              src="https://open.spotify.com/embed/track/24byEXJQtVfo8ySx5vsHWo?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="block rounded-xl"
            />
          </div>
          <p className="mt-4 text-center font-display text-xl text-roseglow/90 sm:text-2xl">
            Play this and takhyly eny bar'uslek bel turta
          </p>
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
