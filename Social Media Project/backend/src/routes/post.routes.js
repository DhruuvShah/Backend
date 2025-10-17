const express = require('express');
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const { createPostController, getAllPostsController, deletePostController } = require("../controllers/post.controller");
const multer = require("multer");

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 },
});

router.get('/', authMiddleware, getAllPostsController);
router.post('/', authMiddleware, upload.single("image"), createPostController);
router.delete('/:id', authMiddleware, deletePostController);

module.exports = router;