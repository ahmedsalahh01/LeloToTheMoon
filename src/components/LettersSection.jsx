import { motion } from "framer-motion";
import { letters } from "../data/content.js";

export default function LettersSection() {
  return (
    <section id="letters" className="relative px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-display text-4xl text-moon sm:text-6xl">Happy birthday to the light of my life</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {letters.map((letter, index) => (
            <motion.article
              key={letter.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="relative min-h-72 overflow-hidden rounded-[2rem] border border-white/35 bg-white/[0.075] p-7 shadow-[0_0_0_1px_rgba(255,143,184,0.08),0_24px_80px_rgba(0,0,0,0.34)] backdrop-blur-2xl sm:p-10"
            >
              <div className="pointer-events-none absolute inset-3 rounded-[1.6rem] border border-roseglow/20" />
              <div className="pointer-events-none absolute -right-16 -top-20 h-44 w-44 rounded-full bg-roseglow/12 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-moon/10 blur-3xl" />
              <h3 className="font-display text-3xl text-roseglow sm:text-4xl">{letter.title}</h3>
              <p className="mt-5 whitespace-pre-line text-lg leading-9 text-white/78">{letter.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
