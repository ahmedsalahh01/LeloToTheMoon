import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import StarField from "./StarField.jsx";

export default function BirthdayIntro() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const introTimer = window.setTimeout(() => {
      setShowIntro(false);
    }, 3600);

    return () => window.clearTimeout(introTimer);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#03040b]"
        >
          <StarField />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,143,184,0.26),transparent_28%),radial-gradient(circle_at_50%_55%,rgba(248,244,223,0.14),transparent_34%),linear-gradient(180deg,#03040b_0%,#10071a_100%)]" />
          <div className="absolute left-[12%] top-[22%] h-2 w-2 animate-twinkle rounded-full bg-moon" />
          <div className="absolute right-[18%] top-[30%] h-1.5 w-1.5 animate-twinkle rounded-full bg-roseglow [animation-delay:0.8s]" />
          <div className="absolute bottom-[24%] left-[24%] h-1.5 w-1.5 animate-twinkle rounded-full bg-white [animation-delay:1.4s]" />
          <div className="absolute bottom-[32%] right-[28%] h-2 w-2 animate-twinkle rounded-full bg-moon [animation-delay:2s]" />

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 px-6 text-center"
          >
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.18em" }}
              animate={{ opacity: 1, letterSpacing: "0.34em" }}
              transition={{ duration: 1.1, delay: 0.15 }}
              className="text-xs font-semibold uppercase text-roseglow/85 sm:text-sm"
            >
              May 6, 2000
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.35 }}
              className="mt-5 font-display text-5xl leading-[0.95] text-moon drop-shadow-[0_0_34px_rgba(248,244,223,0.45)] sm:text-7xl lg:text-8xl"
            >
              Happy Birthday
              <span className="block text-roseglow drop-shadow-[0_0_28px_rgba(255,143,184,0.45)]">
                to the love of my life
              </span>
            </motion.h1>
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "min(360px, 70vw)", opacity: 1 }}
              transition={{ duration: 1, delay: 0.75 }}
              className="mx-auto mt-8 h-px bg-gradient-to-r from-transparent via-roseglow to-transparent"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
