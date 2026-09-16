import { useNavigate, useLocation } from "react-router-dom";
import "./MusicDetails.css";

const MusicDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const song = location.state?.song;

  if (!song) {
    return (
      <main className="details-page">
        <button
          className="back-button"
          onClick={() => navigate("/")}
        >
          ← BACK
        </button>

        <div className="details-error">
          <h1>SONG NOT FOUND</h1>
          <p>Select a track from the music collection.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="details-page">
      <button
        className="back-button"
        onClick={() => navigate("/")}
      >
        ← BACK TO MUSIC
      </button>

      <section className="details-container">
        <div className="details-image">
          <img
            src={song.image}
            alt={song.title}
          />

          <div className="image-glow"></div>
        </div>

        <div className="details-content">
          <span className="details-number">
            TRACK {song.number}
          </span>

          <span className="details-mood">
            {song.mood}
          </span>

          <h1>{song.title}</h1>

          <p>{song.description}</p>

          <div className="details-line"></div>

          <div className="details-info">
            <span>NOW PLAYING</span>
            <span>{song.title}</span>
          </div>

          <button
            className="play-button"
            onClick={() => {
              const audio =
                document.getElementById("music-player");

              if (audio) {
                audio.play().catch(() => {});
              }
            }}
          >
            <span>▶</span>
            PLAY TRACK
          </button>
        </div>
      </section>
    </main>
  );
};

export default MusicDetails;