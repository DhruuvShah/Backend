import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMood } from './MoodContext';

// Centralized Theme & Metadata
export const THEME = {
  happy:    { label: 'Happy',    hsl: '45, 100%, 65%', playlistTitle: "Uplifting Tracks for a Happy Vibe" },
  sad:      { label: 'Sad',      hsl: '210, 70%, 60%', playlistTitle: "Gentle Melodies for a Somber Mood" },
  angry:    { label: 'Angry',    hsl: '0, 85%, 60%',   playlistTitle: "Powerful Beats to Channel Your Energy" },
  surprised:{ label: 'Surprised',hsl: '270, 90%, 70%', playlistTitle: "Dynamic Sounds for a Moment of Surprise" },
  fearful:  { label: 'Fearful',  hsl: '310, 50%, 55%', playlistTitle: "Soothing Tracks to Bring You Calm" },
  disgusted:{ label: 'Disgusted',hsl: '110, 40%, 50%', playlistTitle: "Cleansing Rhythms to Reset Your Mood" },
  neutral:  { label: 'Neutral',  hsl: '220, 15%, 70%', playlistTitle: "Balanced Tunes for a Neutral State" },
  // Added an 'idle' state for the UI theme.
  idle:     { label: 'Idle',     hsl: '220, 15%, 70%', playlistTitle: "Recommended For You" },
};


// --- SVG Icons ---
// (These icons are unchanged)
export const Logo = (props) => (
  <svg viewBox="0 0 32 32" width="24" height="24" {...props}>
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="hsl(var(--mood-color-hsl))" /><stop offset="1" stopColor="hsl(var(--mood-color-hsl)/0.7)" />
      </linearGradient>
    </defs>
    <path d="M8 9.5c0-1.4 1.1-2.5 2.5-2.5h7c1.4 0 2.5 1.1 2.5 2.5v2.2c0 1.4-1.1 2.5-2.5-2.5h-7c-1.4 0-2.5-1.1-2.5-2.5V9.5Z" fill="url(#g)" />
    <rect x="6" y="18" rx="4" ry="4" width="20" height="8" fill="url(#g)" opacity=".55" />
  </svg>
);
export const Sun = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>;
export const Moon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>;
export const PlayIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>;
export const PauseIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>;
export const ScanIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg>;
export const MusicIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>;

// --- Animated Emoji ---
const Expression = ({ mood }) => {
  const variants = {
    happy: "M 10 18 C 12 24, 20 24, 22 18",
    sad: "M 10 22 C 12 16, 20 16, 22 22",
    angry: "M 10 22 L 22 18",
    surprised: "M 16 18 a 4 4 0 1 0 0.001 0z",
    fearful: "M 10 18 Q 16 22 22 18",
    disgusted: "M 10 20 C 12 18, 14 22, 16 20 S 20 18, 22 20",
    neutral: "M 10 20 L 22 20",
    // 'idle' mood will use the same path as 'neutral'.
    idle: "M 10 20 L 22 20",
  };

  const pathD = variants[mood] || variants.neutral;

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
    >
      <circle cx="11" cy="12" r="1.5" fill="currentColor" />
      <circle cx="21" cy="12" r="1.5" fill="currentColor" />
      <path d={pathD} stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </motion.g>
  );
};

export const MoodEmoji = () => {
  const { mood } = useMood();

  return (
    <motion.svg width="32" height="32" viewBox="0 0 32 32">
      <motion.circle cx="16" cy="16" r="14" fill="hsl(var(--mood-color-hsl)/0.2)" stroke="hsl(var(--mood-color-hsl))" strokeWidth="1.5"
        transition={{ duration: 0.8, ease: "circOut" }}
      />
      <AnimatePresence mode="wait">
        <Expression key={mood} mood={mood} />
      </AnimatePresence>
    </motion.svg>
  );
};
