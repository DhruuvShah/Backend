import FacialExpression from "./components/FacialExpression";
import "./App.css";
import MoodSongs from "./components/MoodSongs";
import { useState } from "react";

function App() {
   const [Songs, setSongs] = useState([
    {
      title: "test_title",
      artist: "test_artist",
      url: "Test_url_1",
    }
  ]);

  return (
    <>
      <FacialExpression setSongs={setSongs} />
      <MoodSongs Songs={Songs} />
    </>
  );
}

export default App;
