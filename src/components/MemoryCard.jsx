import { useState } from "react";
import { motion } from "framer-motion";

export default function MemoryCard({ memory, index }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      className="group overflow-hidden rounded-lg border border-white/12 bg-[#101719]/72 shadow-[0_22px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#9ee7d7]/50"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[linear-gradient(135deg,rgba(158,231,215,0.2),rgba(27,31,36,0.8),rgba(255,179,207,0.14))]">
        {!imageFailed ? (
          <img
            src={memory.image}
            alt={memory.title}
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-8 text-center">
            <p className="font-display text-3xl text-moon/80">Add your photo here</p>
          </div>
        )}
        {/* Gradient fade at bottom of image for smooth transition into card body */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#101719]/90 to-transparent" />
      </div>

      <div className="px-6 pb-7 pt-5">
        <h3 className="font-display text-3xl leading-tight text-[#fff7db]">{memory.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[#ffb3cf]/86">{memory.description}</p>
        <div className="mt-4 h-px w-10 rounded-full bg-[#9ee7d7]/40" />
        <p className="mt-4 leading-7 text-white/68">{memory.text}</p>
      </div>
    </motion.article>
  );
}
