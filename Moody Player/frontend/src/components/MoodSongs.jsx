import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayIcon, PauseIcon, MusicIcon } from "./UIGraphics";
import styles from "./MoodSongs.module.css";

const SongCard = ({ song, onToggle, isPlaying }) => {
  const { title = "Untitled", artist = "Unknown Artist", albumArt } = song;

  return (
    <motion.div
      className={`${styles.songCard} ${isPlaying ? styles.isPlaying : ""}`}
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className={styles.albumArt} style={{ backgroundColor: `hsl(var(--mood-color-hsl)/0.2)`}}>
        {albumArt ? <img src={albumArt} alt={title} /> : <MusicIcon />}
      </div>
      <div className={styles.meta}>
        <div className={styles.title}>{title}</div>
        <div className={styles.artist}>{artist}</div>
      </div>
      <motion.button
        className={styles.playButton}
        onClick={onToggle}
        aria-label={isPlaying ? "Pause" : "Play"}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </motion.button>
      {isPlaying && (
        <div className={styles.audioVisualizer}>
          <span /> <span /> <span /> <span />
        </div>
      )}
    </motion.div>
  );
};

export default function MoodSongs({ songs = [] }) {
  const audioRef = useRef(null);
  const [activeSongIndex, setActiveSongIndex] = useState(null);

  // When song list changes, stop playback
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setActiveSongIndex(null);
  }, [songs]);

  const togglePlayback = (index, song) => {
    const audio = audioRef.current;
    if (!audio) return;
    const songUrl = song.audio || song.url;

    if (activeSongIndex === index) {
      audio.pause();
      setActiveSongIndex(null);
    } else {
      if (audio.src !== songUrl) {
        audio.src = songUrl;
      }
      audio.play().catch(e => console.error("Audio playback error:", e));
      setActiveSongIndex(index);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  return (
    <motion.div
      className={styles.songsContainer}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      key={songs.length > 0 ? songs[0].title : 'empty'} // Re-trigger animation on new list
    >
      <AnimatePresence>
        {songs.length > 0 ? (
          songs.map((song, i) => (
            <SongCard
              key={`${song.title}-${i}`}
              song={song}
              isPlaying={activeSongIndex === i}
              onToggle={() => togglePlayback(i, song)}
            />
          ))
        ) : (
          <motion.div
            className={styles.emptyState}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p>Detect your mood to get personalized song recommendations.</p>
          </motion.div>
        )}
      </AnimatePresence>
      <audio
        ref={audioRef}
        onEnded={() => setActiveSongIndex(null)}
        style={{ display: "none" }}
      />
    </motion.div>
  );
}