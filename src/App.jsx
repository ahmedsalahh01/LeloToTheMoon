import BirthdayIntro from "./components/BirthdayIntro.jsx";
import AgeOrbitSection from "./components/AgeOrbitSection.jsx";
import Hero from "./components/Hero.jsx";
import InteractiveResponses from "./components/InteractiveResponses.jsx";
import LettersSection from "./components/LettersSection.jsx";
import LoveStarsSection from "./components/LoveStarsSection.jsx";
import MemoryGallery from "./components/MemoryGallery.jsx";
import MusicSection from "./components/MusicSection.jsx";
import FinalSection from "./components/FinalSection.jsx";
import StarField from "./components/StarField.jsx";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <div className="moon-backdrop" aria-hidden="true">
        <div className="moon-surface" />
        <div className="moon-shadow" />
      </div>
      <div className="site-veil" aria-hidden="true" />
      <StarField fixed />
      <BirthdayIntro />
      <div className="relative z-10">
        <Hero />
        <AgeOrbitSection />
        <LoveStarsSection />
        <LettersSection />
        <MemoryGallery />
        <MusicSection />
        <FinalSection />
        <InteractiveResponses />
      </div>
    </main>
  );
}
