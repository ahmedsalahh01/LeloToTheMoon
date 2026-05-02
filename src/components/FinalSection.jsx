import { motion } from "framer-motion";

export default function FinalSection() {
  const replay = () => {
    document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden px-5 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75 }}
        className="relative z-10 mx-auto max-w-4xl"
      >
        <p className="font-display text-5xl leading-tight text-moon sm:text-7xl">
          No matter how many stars exist, you are still my favorite one.
        </p>
        <button
          type="button"
          onClick={replay}
          className="mt-10 rounded-full border border-roseglow/40 bg-roseglow px-8 py-4 font-semibold text-[#210918] shadow-[0_0_32px_rgba(255,143,184,0.32)] transition hover:-translate-y-1 hover:bg-white focus:outline-none focus:ring-4 focus:ring-roseglow/30"
        >
          Replay the Journey
        </button>
      </motion.div>
    </section>
  );
}
