import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { questionJourney } from "../data/content.js";

export default function InteractiveResponses() {
  const [currentStepId, setCurrentStepId] = useState("start");
  const currentStep = questionJourney[currentStepId];

  const moveToStep = (nextStepId) => {
    setCurrentStepId(nextStepId);
  };

  const restart = () => {
    setCurrentStepId("start");
  };

  return (
    <section id="feelings" className="relative px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="font-display text-4xl text-moon sm:text-6xl">A Little Journey For Your Heart</h2>
          <p className="mx-auto mt-5 max-w-3xl rounded-[1.5rem] border border-roseglow/25 bg-roseglow/[0.08] px-5 py-4 font-display text-2xl leading-8 text-roseglow shadow-[0_0_28px_rgba(255,143,184,0.12)] backdrop-blur-xl sm:text-3xl">
            Don't open anything from this now, this is for you later on lma tehsy enk mehtaga message meny wana msh mawgud
          </p>
        </motion.div>

        <div className="mx-auto mt-12 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStepId}
              initial={{ opacity: 0, x: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: -28, scale: 0.98 }}
              transition={{ duration: 0.38 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.07] p-7 text-center shadow-glass backdrop-blur-xl sm:p-10"
            >
              <div className="absolute left-8 top-8 h-2 w-2 rounded-full bg-roseglow/70 shadow-[0_0_20px_rgba(255,143,184,0.8)]" />
              <div className="absolute right-10 top-14 h-1.5 w-1.5 rounded-full bg-moon/80 shadow-[0_0_18px_rgba(248,244,223,0.8)]" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-roseglow/80">
                {currentStep.eyebrow}
              </p>
              <h3 className="mt-4 font-display text-4xl leading-tight text-moon sm:text-5xl">
                {currentStep.title}
              </h3>

              {currentStep.type === "question" ? (
                <>
                  <p className="mx-auto mt-4 max-w-xl leading-7 text-white/64">
                    {currentStep.subtitle}
                  </p>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {currentStep.answers.map((answer) => (
                      <button
                        key={answer.label}
                        type="button"
                        onClick={() => moveToStep(answer.next)}
                        className="rounded-2xl border border-white/10 bg-white/[0.065] px-5 py-5 font-semibold text-white/82 transition hover:-translate-y-1 hover:border-roseglow/55 hover:bg-roseglow hover:text-[#210918] focus:outline-none focus:ring-4 focus:ring-roseglow/25"
                      >
                        {answer.label}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <p className="mx-auto mt-6 max-w-2xl whitespace-pre-line font-display text-2xl leading-9 text-white/82 sm:text-3xl sm:leading-[1.3]">
                    {currentStep.body}
                  </p>
                  {currentStep.spotifyEmbedUrl && (
                    <div className="mt-8 overflow-hidden rounded-[1.25rem] border border-white/12 bg-black/20 p-2">
                      <iframe
                        title={`${currentStep.title} song`}
                        src={currentStep.spotifyEmbedUrl}
                        width="100%"
                        height={currentStep.spotifyEmbedHeight || "352"}
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="block rounded-xl"
                      />
                    </div>
                  )}
                  {currentStep.spotifyCaption && (
                    <p className="mt-4 text-center font-display text-xl text-roseglow/90 sm:text-2xl">
                      {currentStep.spotifyCaption}
                    </p>
                  )}
                </>
              )}

              <div className="mt-7 flex items-center justify-center gap-3">
                {currentStepId !== "start" && (
                  <button
                    type="button"
                    onClick={restart}
                    className="rounded-full border border-white/12 bg-white/[0.06] px-5 py-2 text-sm font-semibold text-white/70 transition hover:border-roseglow/45 hover:text-white"
                  >
                    Start over
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
