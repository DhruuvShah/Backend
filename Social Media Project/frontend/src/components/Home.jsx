/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import LoadingDots from "./LoadingDots";
import "./Home.css";

const contentVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.3, ease: "easeInOut" },
};

function Home() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [generatedCaption, setGeneratedCaption] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/api/posts", {
          withCredentials: true,
        });
        setPosts(response.data);
      } catch (err) {
        console.error("Failed to fetch history:", err);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setError("");
    setGeneratedCaption("");
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        setError("File size must be under 5MB.");
        return;
      }
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleClear = () => {
    setFile(null);
    setPreview("");
    setGeneratedCaption("");
    setError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const generateCaption = async () => {
    if (!file) {
      setError("Please upload an image first.");
      return;
    }
    setError("");
    setLoading(true);
    setGeneratedCaption("");
    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await axios.post("/api/posts", formData, {
        withCredentials: true,
      });
      const newPost = response.data.post;
      setGeneratedCaption(newPost.caption);
      setPosts((prevPosts) => [newPost, ...prevPosts]);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to generate caption.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`/api/posts/${postId}`, { withCredentials: true });
      setPosts(posts.filter((post) => post._id !== postId));
      toast.success("Post deleted!", { className: "toast-style" });
    } catch (err) {
      console.error("Failed to delete post:", err);
      toast.error("Could not delete post.", { className: "toast-style" });
    }
  };

  const handleCopyCaption = () => {
    if (generatedCaption) {
      navigator.clipboard
        .writeText(generatedCaption)
        .then(() => {
          toast.success("Caption copied!", {
            className: "toast-style",
          });
        })
        .catch(() => {
          toast.error("Failed to copy.", {
            className: "toast-style",
          });
        });
    }
  };

  return (
    <div className="home-grid">
      <div className="generator-column">
        <div className="generator-card glass-card">
          <div className="generator-header">
            <h1>AI Caption Generator</h1>
            <p>Transform your images into compelling captions</p>
          </div>
          <div
            className="upload-box"
            onClick={() => !loading && fileInputRef.current.click()}
            style={{ cursor: loading ? "progress" : "pointer" }}
          >
            <AnimatePresence>
              {loading && (
                <motion.div
                  className="loading-overlay"
                  key="loader-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <LoadingDots />
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div
              className="upload-box-content"
              animate={{ opacity: loading ? 0.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence mode="wait">
                {preview ? (
                  <motion.img
                    key="preview"
                    src={preview}
                    alt="Preview"
                    className="image-preview"
                    variants={contentVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={contentVariants.transition}
                  />
                ) : (
                  <motion.div
                    key="placeholder"
                    className="upload-placeholder"
                    variants={contentVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={contentVariants.transition}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21.2 15c.7-1.2 1-2.5.7-3.9-.6-2.4-2.4-4.2-4.8-4.8-.9-.3-1.8-.5-2.7-.5-1.5 0-2.8.6-3.9 1.6l-1.8 1.8c-.3.3-.5.7-.7 1a4 4 0 0 0-3.3 1.2c-1.2 1.2-1.8 2.8-1.8 4.4 0 3.3 2.7 6 6 6h7.8c1.6 0 3-1.3 3-3 0-1.1-.6-2-1.4-2.5"></path>
                      <path d="M12 12v9"></path>
                      <path d="m16 16-4-4-4 4"></path>
                    </svg>
                    <p>Drop or click to upload</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              style={{ display: "none" }}
              disabled={loading}
            />
          </div>
          {error && <p className="error-text">{error}</p>}

          <div className="generate-actions-container">
            <button
              className="generate-button"
              onClick={generateCaption}
              disabled={!file || loading}
            >
              {loading ? "Generating..." : "Generate Caption"}
            </button>
            {preview && !loading && (
              <button className="clear-button" onClick={handleClear}>
                Clear
              </button>
            )}
          </div>

          <AnimatePresence>
            {generatedCaption && !loading && (
              <motion.div
                className="caption-display"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <p>{generatedCaption}</p>
                <div className="caption-actions">
                  <button onClick={handleCopyCaption}>Copy</button>
                  <button onClick={generateCaption} disabled={loading}>
                    Regenerate
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="history-column">
        <div className="history-card glass-card">
          <h2>History</h2>
          <div className="history-feed">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div key={post._id} className="history-item">
                  <img
                    src={post.image}
                    alt="Generated post"
                    className="history-item-image"
                  />
                  <div className="history-item-details">
                    <p>{post.caption}</p>
                  </div>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(post._id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </button>
                </div>
              ))
            ) : (
              <div className="no-history">
                <p>No history yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
