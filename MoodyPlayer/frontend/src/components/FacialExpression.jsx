import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import { motion, AnimatePresence } from "framer-motion";

import { useMood } from "./MoodContext";
import { ScanIcon, MoodEmoji, THEME } from "./UIGraphics";
import styles from "./FacialExpression.module.css";

// Constants
const MODEL_URL = "/models";
const DETECTION_INTERVAL = 400; // ms

export default function FacialExpression() {
  const { mood, setMood, setConfidence, setStatus, status } = useMood();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const intervalRef = useRef(null);
  const [isModelsLoaded, setIsModelsLoaded] = useState(false);
  const [isDetecting, setIsDetecting] = useState(false);
  const [detectedEmotions, setDetectedEmotions] = useState({});

  // 1. Load Face-API Models
  useEffect(() => {
    const loadModels = async () => {
      try {
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
          faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        ]);
        setIsModelsLoaded(true);
        setStatus("Models loaded. Ready for camera.");
      } catch (error) {
        console.error("Failed to load models", error);
        setStatus("Error loading AI models.");
      }
    };
    loadModels();
  }, [setStatus]);

  // 2. Initialize Camera
  const startCamera = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 480, height: 320 } });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Camera permission denied", error);
        setStatus("Camera permission denied.");
      }
    }
  };

  useEffect(() => {
    if (isModelsLoaded) {
      startCamera();
    }
    // Cleanup on unmount
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, [isModelsLoaded]);


  // 3. Mood Detection Logic
  const handleDetection = async () => {
    if (!videoRef.current || videoRef.current.paused || videoRef.current.ended) {
      return;
    }

    const detections = await faceapi
      .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();

    if (detections.length > 0) {
      const expressions = detections[0].expressions;
      const dominantEmotion = Object.keys(expressions).reduce((a, b) => (expressions[a] > expressions[b] ? a : b));

      setDetectedEmotions(expressions);
      setMood(dominantEmotion);
      setConfidence(expressions[dominantEmotion]);
      setStatus(`Detected: ${dominantEmotion}`);

      // Draw overlay on canvas
      if (canvasRef.current) {
        canvasRef.current.innerHTML = "";
        const dims = faceapi.matchDimensions(canvasRef.current, videoRef.current, true);
        // const resizedResults = faceapi.resizeResults(detections, dims);
        // Only draw face detections box for clarity
        faceapi.draw.drawDetections(canvasRef.current);
      }
    } else {
      setStatus("Searching for face...");
      // Reset to neutral if no face is found
      setMood("neutral");
      setConfidence(0);
      setDetectedEmotions({});
    }
  };

  const toggleDetection = () => {
    if (isDetecting) {
      clearInterval(intervalRef.current);
      setIsDetecting(false);
      setStatus("Detection paused.");
    } else {
      setIsDetecting(true);
      setStatus("Starting detection...");
      intervalRef.current = setInterval(handleDetection, DETECTION_INTERVAL);
    }
  };

  return (
    <div className={styles.fxContainer}>
      <div className={`${styles.videoWrap} ${isDetecting ? styles.isScanning : ""}`}>
        <video ref={videoRef} autoPlay muted playsInline className={styles.video} onPlay={() => setStatus("Camera active.")} />
        <canvas ref={canvasRef} className={styles.overlayCanvas} />
        <AnimatePresence>
          {!isDetecting && (
             <motion.div
                className={styles.cameraOffOverlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
              <div className={styles.statusText}>{status}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className={styles.controls}>
        <div className={styles.moodDisplay}>
           <MoodEmoji />
           <div className={styles.moodText}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={mood}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {THEME[mood]?.label || "Neutral"}
                </motion.span>
              </AnimatePresence>
           </div>
        </div>
        <motion.button
          className={styles.ctaButton}
          onClick={toggleDetection}
          disabled={!isModelsLoaded}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97, transition: {duration: 0.1} }}
        >
          <ScanIcon />
          {isDetecting ? "Pause Detection" : "Start Detection"}
        </motion.button>
      </div>

      <div className={styles.confidenceSection}>
        <h4 className={styles.confidenceTitle}>Emotion Confidence</h4>
        <div className={styles.confidenceGrid}>
          {Object.entries(THEME).map(([key, value]) => (
            <div key={key} className={styles.confidenceItem}>
              <span className={styles.emotionLabel}>{value.label}</span>
              <div className={styles.progressBar}>
                <motion.div
                  className={styles.progressFill}
                  initial={{ width: 0 }}
                  animate={{ width: `${(detectedEmotions[key] || 0) * 100}%` }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{ backgroundColor: `hsl(${value.hsl})`}}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}