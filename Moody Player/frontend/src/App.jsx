import { useEffect, useState } from "react";
import FacialExpression from "./components/FacialExpression";
import MoodSongs from "./components/MoodSongs";
import "./App.css";

function App() {
  const [Songs, setSongs] = useState([
    { title: "test_title", artist: "test_artist", url: "Test_url_1" },
  ]);

  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <div className="app-root">
      <header className="app-nav glass">
        <div className="brand">
          <span className="brand-dot" />
          <span className="brand-name">Moody Player</span>
        </div>
        <button
          aria-label="Toggle theme"
          className="toggle-btn"
          onClick={toggleTheme}
        >
          {theme === "light" ? "◐" : "◑"}
        </button>
      </header>

      <main className="app-container">
        <section className="hero glass">
          <div className="hero-left">
            {/* Camera feed & control live here */}
            <FacialExpression setSongs={setSongs} />
          </div>

          <div className="hero-right">
            <h1 className="title">Live Mood Detection</h1>
            <p className="subtitle">
              Your current mood is analyzed in real-time. Enjoy music tailored to
              your feelings.
            </p>
            <p className="tips">
              Tip: sit in a well-lit space, keep your face centered, and look at
              the camera for a few seconds for best results.
            </p>
          </div>
        </section>

        <section className="list glass">
          <MoodSongs Songs={Songs} />
        </section>
      </main>

      <footer className="app-footer">
        <span>Made with ❤️ for unique experiences</span>
      </footer>
    </div>
  );
}

export default App;
