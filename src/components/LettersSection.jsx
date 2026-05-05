import { motion } from "framer-motion";
import { letters } from "../data/content.js";

export default function LettersSection() {
  return (
    <section id="letters" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h2 className="section-title">A birthday letter written under your moon.</h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {letters.map((letter, index) => (
            <motion.article
              key={letter.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="letter-panel"
            >
              <h3 className="font-display text-3xl text-[#fff7db] sm:text-4xl">{letter.title}</h3>
              <p className="mt-5 whitespace-pre-line text-lg leading-9 text-white/78">{letter.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
