import { motion } from "framer-motion";
import { spotifyPlaylist } from "../data/content.js";

export default function MusicSection() {
  return (
    <section className="relative px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
        >
          <p className="text-sm uppercase tracking-[0.34em] text-roseglow/75">
            Press Play
          </p>
          <h2 className="mt-4 font-display text-4xl text-moon sm:text-6xl">
            {spotifyPlaylist.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/62">
            A soundtrack for reading, remembering, and missing each other softly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mt-10 overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/[0.07] p-3 shadow-glass backdrop-blur-xl"
        >
          <iframe
            title={spotifyPlaylist.title}
            src={spotifyPlaylist.embedUrl}
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="block rounded-[1.25rem]"
          />
        </motion.div>
      </div>
    </section>
  );
}
