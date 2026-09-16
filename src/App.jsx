import { useEffect, useRef } from "react";
import MusicAccordion from "./components/MusicAccordion";
import "./App.css";

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.35;

    const startMusic = () => {
      audio.play().catch(() => {});
    };

    startMusic();

    window.addEventListener("click", startMusic, {
      once: true,
    });

    return () => {
      window.removeEventListener("click", startMusic);
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}audio/music.mp3`}
        loop
        preload="auto"
      />

      <MusicAccordion />
    </>
  );
}

export default App;