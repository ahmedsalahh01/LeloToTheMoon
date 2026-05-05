import { motion } from "framer-motion";
import { spotifyPlaylist } from "../data/content.js";

export default function MusicSection() {
  return (
    <section className="section-shell">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
        >
          <p className="section-kicker">
            Press Play
          </p>
          <h2 className="section-title">
            {spotifyPlaylist.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="w-full overflow-hidden rounded-lg border border-white/16 bg-black/30 p-2 shadow-glass backdrop-blur-xl"
        >
          <iframe
            title={spotifyPlaylist.title}
            src={spotifyPlaylist.embedUrl}
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="block rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
