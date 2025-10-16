const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const {
  createPostController,
  getAllPostsController,
} = require("../controllers/post.controller");
const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: {
      fileSize: 2 * 1024 * 1024,
    },
  },
});

// Route to GET all posts
router.get("/", authMiddleware, getAllPostsController);

// Route to CREATE a new post
router.post("/", authMiddleware, upload.single("image"), createPostController);

module.exports = router;
