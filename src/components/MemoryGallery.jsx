import { memories } from "../data/content.js";
import MemoryCard from "./MemoryCard.jsx";

export default function MemoryGallery() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h2 className="section-title">Moments that still shine when the screen goes dark.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/58">
            Three pieces of proof that ordinary days can turn into something cosmic.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {memories.map((memory, index) => (
            <MemoryCard key={`${memory.title}-${index}`} memory={memory} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
