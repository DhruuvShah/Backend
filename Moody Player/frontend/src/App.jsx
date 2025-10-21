import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

import { MoodProvider, useMood } from "./components/MoodContext";
import FacialExpression from "./components/FacialExpression";
import MoodSongs from "./components/MoodSongs";
import { Logo, Sun, Moon, THEME } from "./components/UIGraphics";

import styles from "./App.module.css";

// Helper to get the initial theme (light/dark) from system/local storage
function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// Main layout component that consumes mood context
function AppLayout() {
  const { mood } = useMood();
  const [songs, setSongs] = useState([]);
  const [theme, setTheme] = useState(getInitialTheme);

  // The UI theme is now derived directly from the mood context.
  const moodTheme = THEME[mood] || THEME.neutral;

  // Effect to manage the light/dark theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Effect to fetch songs when the mood changes
  useEffect(() => {
    // Do not fetch songs if the app is in its 'idle' state.
    if (mood === 'idle') {
      setSongs([]); // Clear the list when idle
      return;
    }

    let isCancelled = false;

    const fetchSongs = async () => {
      try {
        const out = await axios.get(`http://localhost:3000/songs?mood=${mood}`);
        if (!isCancelled) {
          setSongs(out.data.songs || []);
        }
      } catch (error)
      {
        console.error("Failed to fetch songs:", error);
      }
    };

    fetchSongs();

    return () => {
      isCancelled = true;
    };
  }, [mood]); // This effect runs whenever the mood changes from 'idle' to something else.

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <div className={styles.appRoot} style={{ '--mood-color-hsl': moodTheme.hsl }}>
      <div className={styles.ambient} aria-hidden="true" />

      <header className={styles.appNav}>
        <div className={styles.brand}>
          <Logo />
          <span className={styles.brandName}>MoodyPlayer</span>
        </div>
        <motion.button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label="Toggle theme"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className={styles.toggleThumb}
            initial={false}
            animate={{ x: theme === "dark" ? 26 : 3 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={theme}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "light" ? <Sun /> : <Moon />}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.button>
      </header>

      <main className={styles.container}>
        <section className={styles.hero}>
          <div className={`${styles.card} ${styles.heroLeft}`}>
            <FacialExpression />
          </div>
          <motion.div
            className={`${styles.card} ${styles.heroRight}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className={styles.sectionTitle}>Music for Your Mood</h2>
            <p className={styles.sectionSub}>
              Our AI analyzes your facial expression to curate a playlist that matches your feelings.
            </p>
            <p className={styles.tips}>
              <strong>Tip:</strong> For the best results, please ensure your face is well-lit and centered in the camera frame.
            </p>
          </motion.div>
        </section>

        <section className={styles.listSection}>
          <AnimatePresence mode="wait">
            <motion.h3
              key={mood}
              className={styles.listTitle}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              {/* The title is now correctly derived from the theme object. */}
              {moodTheme.playlistTitle}
            </motion.h3>
          </AnimatePresence>
          <MoodSongs songs={songs} />
        </section>
      </main>
    </div>
  );
}

// Main App component wrapped in the provider
export default function App() {
  return (
    <MoodProvider>
      <AppLayout />
    </MoodProvider>
  );
}
