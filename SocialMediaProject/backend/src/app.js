const express = require("express");
const authRoutes = require("./routes/auth.routes");
const postRoutes = require("./routes/post.routes");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");
require("./models/user.model"); // Ensure User model is registered
require("./models/post.model"); // Ensure Post model is registered

const app = express();

// CORS configuration
app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend URL
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Internal Server Error",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

module.exports = app;
