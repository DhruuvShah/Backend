import React, { useState } from "react";
import "./MoodSongs.css";

const MoodSongs = () => {
  const [Songs, setSongs] = useState([
    {
      title: "test_title",
      artist: "test_artist",
      url: "Test_url_1",
    },
    {
      title: "test_title",
      artist: "test_artist",
      url: "Test_url_1",
    },
    {
      title: "test_title",
      artist: "test_artist",
      url: "Test_url_1",
    },
  ]);

  return (
    <div className="mood-songs">
      <h2>Recommended Songs</h2>
      {Songs.map((song, index) => (
        <div className="song" key={index}>
          <div className="title">
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </div>
          <div className="play-pause-button">
            <i class="ri-pause-line"></i>
            <i class="ri-play-circle-fill"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoodSongs;
