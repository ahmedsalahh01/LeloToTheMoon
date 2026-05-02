import BirthdayIntro from "./components/BirthdayIntro.jsx";
import Hero from "./components/Hero.jsx";
import InteractiveResponses from "./components/InteractiveResponses.jsx";
import LettersSection from "./components/LettersSection.jsx";
import MemoryGallery from "./components/MemoryGallery.jsx";
import MusicSection from "./components/MusicSection.jsx";
import FinalSection from "./components/FinalSection.jsx";
import StarField from "./components/StarField.jsx";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-space-radial text-white">
      <StarField fixed />
      <BirthdayIntro />
      <div className="relative z-10">
        <Hero />
        <LettersSection />
        <MemoryGallery />
        <MusicSection />
        <FinalSection />
        <InteractiveResponses />
      </div>
    </main>
  );
}
