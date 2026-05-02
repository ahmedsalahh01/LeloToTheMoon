import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { surpriseMessages } from "../data/content.js";

export default function SurpriseSection() {
  const [message, setMessage] = useState("");

  const revealMessage = () => {
    const next = surpriseMessages[Math.floor(Math.random() * surpriseMessages.length)];
    setMessage(next);
  };

  return (
    <section className="relative overflow-hidden px-5 py-24 sm:py-32">
      <div className="absolute left-1/4 top-16 h-2 w-2 animate-twinkle rounded-full bg-roseglow" />
      <div className="absolute right-1/3 top-44 h-1.5 w-1.5 animate-twinkle rounded-full bg-moon [animation-delay:1.2s]" />
      <div className="absolute bottom-24 left-1/3 h-2 w-2 animate-twinkle rounded-full bg-white [animation-delay:2s]" />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl text-moon sm:text-6xl">A Little Surprise</h2>
        <button
          type="button"
          onClick={revealMessage}
          className="mt-9 rounded-full border border-white/14 bg-white px-8 py-4 font-semibold text-[#210918] shadow-[0_0_34px_rgba(255,255,255,0.2)] transition hover:-translate-y-1 hover:bg-roseglow focus:outline-none focus:ring-4 focus:ring-roseglow/30"
        >
          Click when you miss me
        </button>

        <div className="mt-10 min-h-36">
          <AnimatePresence mode="wait">
            {message && (
              <motion.div
                key={message}
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="rounded-[2rem] border border-roseglow/30 bg-white/[0.08] p-8 shadow-glass backdrop-blur-xl"
              >
                <p className="font-display text-3xl leading-snug text-moon sm:text-4xl">{message}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
