import "./MoodSongs.css";
import { useState, useRef, useEffect } from "react";

/**
 * Glassy, minimal list with play/pause per row.
 * Keeps your existing API shape: Songs: [{ title, artist, audio/url }]
 * Uses a single <audio> element for better control.
 */
const MoodSongs = ({ Songs = [] }) => {
  const [isPlaying, setIsPlaying] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    // Stop audio if list changes
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(null);
  }, [Songs]);

  const handlePlayPause = (index, src) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying === index) {
      audio.pause();
      setIsPlaying(null);
    } else {
      if (audio.src !== src) audio.src = src;
      audio.play().catch(() => {});
      setIsPlaying(index);
    }
  };

  return (
    <div className="mood-songs">
      <h2>Recommended Tracks</h2>

      <div className="songs-list">
        {Songs.length === 0 && (
          <div className="empty">No songs yet — detect your mood to begin.</div>
        )}

        {Songs.map((song, index) => {
          const src = song.audio || song.url || "";
          const playing = isPlaying === index;

          return (
            <div key={index} className="song-row">
              <div className="meta">
                <div className="title">{song.title || "Untitled"}</div>
                <div className="artist">{song.artist || "Unknown Artist"}</div>
              </div>

              <button
                className={`pill ${playing ? "pill-active" : ""}`}
                onClick={() => handlePlayPause(index, src)}
                aria-label={playing ? "Pause" : "Play"}
              >
                {playing ? "Pause" : "Play"}
              </button>
            </div>
          );
        })}
      </div>

      {/* Single global audio element */}
      <audio ref={audioRef} style={{ display: "none" }} />
    </div>
  );
};

export default MoodSongs;
