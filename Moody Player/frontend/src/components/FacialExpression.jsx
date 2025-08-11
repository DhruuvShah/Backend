import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import "./FacialExpression.css";
import axios from "axios";

/**
 * UI-first refactor with the same detection logic.
 * - Loads models from /models (unchanged)
 * - Streams camera to <video>
 * - On click, detects mood and fetches songs
 */
export default function FacialExpression({ setSongs }) {
  const videoRef = useRef(null);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("Camera idle");

  const loadModels = async () => {
    const MODEL_URL = "/models";
    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
  };

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) videoRef.current.srcObject = stream;
        setStatus("Camera ready");
      })
      .catch(() => setStatus("Camera permission denied"));
  };

  async function detectMood() {
    if (!videoRef.current) return;
    setBusy(true);
    setStatus("Analyzing mood…");

    try {
      const detections = await faceapi
        .detectAllFaces(
          videoRef.current,
          new faceapi.TinyFaceDetectorOptions()
        )
        .withFaceExpressions();

      if (!detections || detections.length === 0) {
        setStatus("No face detected. Try better lighting.");
        setBusy(false);
        return;
      }

      let max = 0;
      let expression = "neutral";
      for (const key of Object.keys(detections[0].expressions)) {
        const score = detections[0].expressions[key];
        if (score > max) {
          max = score;
          expression = key;
        }
      }

      setStatus(`Detected: ${expression}. Fetching songs…`);

      const res = await axios.get(
        `http://localhost:3000/songs?mood=${expression}`
      );
      setSongs(res.data.songs || []);
      setStatus(`Ready · Mood: ${expression}`);
    } catch (e) {
      setStatus("Detection error. Check console/server.");
      console.error(e);
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    loadModels().then(startVideo);
  }, []);

  return (
    <div className="mood-wrap">
      <div className="video-frame">
        <video ref={videoRef} autoPlay muted playsInline className="video" />
        <div className="video-overlay">
          <span className="overlay-dot" />
          <span className="overlay-text">{status}</span>
        </div>
      </div>

      <div className="actions">
        <button
          className="primary"
          onClick={detectMood}
          disabled={busy}
          aria-busy={busy}
        >
          {busy ? "Analyzing…" : "Start Listening"}
        </button>
        <button
          className="ghost"
          onClick={() => {
            if (videoRef.current?.srcObject) {
              const tracks = videoRef.current.srcObject.getTracks();
              tracks.forEach((t) => t.stop());
              startVideo();
            } else {
              startVideo();
            }
          }}
        >
          Refresh Camera
        </button>
      </div>
    </div>
  );
}
