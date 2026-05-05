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
    <section className="section-shell overflow-hidden">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="section-kicker">Small magic button</p>
        <h2 className="section-title">A little surprise for when nouny misses me.</h2>
        <button
          type="button"
          onClick={revealMessage}
          className="mt-9 rounded-full bg-[#9ee7d7] px-8 py-4 font-semibold text-[#101719] shadow-[0_0_34px_rgba(158,231,215,0.22)] transition hover:-translate-y-1 hover:bg-[#fff7db] focus:outline-none focus:ring-4 focus:ring-[#9ee7d7]/25"
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
                className="rounded-lg border border-[#ffb3cf]/30 bg-[#101719]/78 p-8 shadow-glass backdrop-blur-xl"
              >
                <p className="font-display text-3xl leading-snug text-[#fff7db] sm:text-4xl">{message}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
