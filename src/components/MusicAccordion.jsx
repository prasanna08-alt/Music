import { useState } from "react";
import musicData from "../data/musicData";
import MusicCard from "./MusicCard";

const MusicAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="music-page">
      <div className="music-header">
        <span>MUSIC</span>
        <span>indian music</span>
      </div>

      <section className="music-accordion">
        {musicData.map((song, index) => (
          <MusicCard
            key={song.id}
            song={song}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </section>
    </main>
  );
};

export default MusicAccordion;