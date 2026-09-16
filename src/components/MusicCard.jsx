import { useState } from "react";

const MusicCard = ({ song, isActive, onClick }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleExplore = (e) => {
    e.stopPropagation();
    setShowDescription(!showDescription);
  };

  return (
    <article
      className={`music-card ${isActive ? "active" : ""}`}
      onClick={onClick}
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}${song.image.replace(
          /^\//,
          ""
        )})`,
        "--accent": song.accent,
      }}
    >
      <div className="music-card-overlay"></div>

      <div className="music-number">
        {song.number}
      </div>

      {!isActive && (
        <div className="vertical-title">
          {song.title}
        </div>
      )}

      {isActive && (
        <div className="music-content">
          <span className="music-mood">
            {song.mood}
          </span>

          <h1>{song.title}</h1>

          {!showDescription ? (
            <button
              className="learn-more"
              onClick={handleExplore}
            >
              EXPLORE <span>→</span>
            </button>
          ) : (
            <div className="explore-description">
              <p>{song.description}</p>

              <button
                className="learn-more"
                onClick={handleExplore}
              >
                CLOSE <span>↑</span>
              </button>
            </div>
          )}
        </div>
      )}
    </article>
  );
};

export default MusicCard;