import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

function Home() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ... (useEffect and fetchPosts function remain the same)
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("/api/posts", { withCredentials: true });
      setPosts(response.data);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
      setError("Could not load feed.");
    }
  };

  // --- THIS FUNCTION IS UPDATED ---
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    // Clear previous errors
    setError("");

    if (selectedFile) {
      // Check file size (5MB limit)
      if (selectedFile.size > 5 * 1024 * 1024) {
        setError("File size exceeds 5MB. Please choose a smaller file.");
        setFile(null);
        setPreview("");
        return; // Stop the function here
      }

      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  // ... (handleSubmit and the return/JSX part remain the same)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select an image to upload.");
      return;
    }
    setError("");
    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post("/api/posts", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      setPosts([response.data.post, ...posts]);
      setFile(null);
      setPreview("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-layout">
      {/* Create Post Section */}
      <div className="create-post-section">
        <div className="create-post-card">
          <h2 className="section-title">Create New Post</h2>
          <form onSubmit={handleSubmit}>
            <div className="file-upload-wrapper">
              <label htmlFor="file-upload" className="file-upload-label">
                {preview ? (
                  <img src={preview} alt="Preview" className="image-preview" />
                ) : (
                  <span>Click to select an image</span>
                )}
              </label>
              <input
                id="file-upload"
                type="file"
                className="file-input"
                onChange={handleFileChange}
                accept="image/*"
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" disabled={loading || !file} className="btn">
              {loading ? "Generating..." : "Generate Caption & Post"}
            </button>
          </form>
        </div>
      </div>

      {/* Posts Feed Section */}
      <div className="md:col-span-2">
        <h2 className="section-title">Feed</h2>
        <div className="feed-container">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post._id} className="post-card">
                <div className="post-header">
                  <span className="post-username">{post.user.username}</span>
                </div>
                <img
                  src={post.image}
                  alt="Post content"
                  className="post-image"
                />
                <div className="post-caption">
                  <p>{post.caption}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="no-posts-message">No posts yet. Create one!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
