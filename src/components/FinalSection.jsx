import { motion } from "framer-motion";

export default function FinalSection() {
  return (
    <section className="relative flex min-h-[75vh] items-center overflow-hidden px-5 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75 }}
        className="relative z-10 mx-auto max-w-4xl"
      >
        <p className="section-kicker">Before the last page</p>
        <p className="mt-5 font-display text-5xl leading-tight text-[#fff7db] sm:text-7xl">
          No matter how bright the moon gets, Nessma is still the light I look for.
        </p>
      </motion.div>
    </section>
  );
}
