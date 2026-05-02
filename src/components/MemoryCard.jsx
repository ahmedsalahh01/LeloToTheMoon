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
      className="group overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/[0.065] shadow-glass backdrop-blur-xl transition hover:-translate-y-2 hover:border-roseglow/50"
    >
      <div className="aspect-[4/5] overflow-hidden bg-[linear-gradient(135deg,rgba(255,143,184,0.24),rgba(80,54,160,0.45),rgba(248,244,223,0.16))]">
        {!imageFailed ? (
          <img
            // Add your photo here.
            src={memory.image}
            alt={memory.title}
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-8 text-center">
            <p className="font-display text-3xl text-moon">Add your photo here</p>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-display text-3xl text-moon">{memory.title}</h3>
        {/* Write the description here. */}
        <p className="mt-2 text-sm uppercase tracking-[0.22em] text-roseglow/80">{memory.description}</p>
        {/* Write the text under the photo here. */}
        <p className="mt-4 leading-7 text-white/72">{memory.text}</p>
      </div>
    </motion.article>
  );
}
