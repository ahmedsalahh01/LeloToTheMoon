import { memories } from "../data/content.js";
import MemoryCard from "./MemoryCard.jsx";

export default function MemoryGallery() {
  return (
    <section className="relative px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-display text-4xl text-moon sm:text-6xl">Unforgetable Moments</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {memories.map((memory, index) => (
            <MemoryCard key={`${memory.title}-${index}`} memory={memory} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
