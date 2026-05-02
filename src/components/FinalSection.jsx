import { motion } from "framer-motion";

export default function FinalSection() {
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
      </motion.div>
    </section>
  );
}
