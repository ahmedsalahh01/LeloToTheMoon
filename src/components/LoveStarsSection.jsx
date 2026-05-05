import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { loveReasons } from "../data/content.js";

export default function LoveStarsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedReason = loveReasons[selectedIndex];

  return (
    <section id="reasons" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="section-title">Click the stars. Each one knows why I love nouny.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/64">
            I could write forever, but the sky looks better when every reason
            becomes a tiny light she can discover herself.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="constellation-panel mt-12"
        >
          <div className="constellation-lines" aria-hidden="true" />
          {loveReasons.map((reason, index) => (
            <button
              key={reason.title}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`love-star ${index === 26 ? "love-star-special" : ""} ${
                selectedIndex === index ? "love-star-active" : ""
              }`}
              style={{
                "--reason-angle": `${(360 / loveReasons.length) * index}deg`,
                "--reason-star-scale": index % 9 === 0 ? 1.45 : index % 4 === 0 ? 1.22 : 1,
              }}
              aria-label={`Reveal reason: ${reason.title}`}
            >
              <span>★</span>
            </button>
          ))}

          <div className="constellation-message-wrap">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedReason.title}
                initial={{ opacity: 0, y: 14, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.28 }}
                className="constellation-message"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9ee7d7]/80">
                  Reason {selectedIndex + 1}
                </p>
                <h3 className="mt-3 font-display text-4xl text-[#fff7db]">{selectedReason.title}</h3>
                <p className="mt-4 text-lg leading-8 text-white/72">{selectedReason.body}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
