const postModel = require("../models/post.model");
const generateCaption = require("../service/ai.service");
const mongoose = require('mongoose');

// CREATE POST
async function createPostController(req, res) {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).json({ message: "Image file is required." });
        }
        const base64Image = file.buffer.toString('base64');
        const dataURI = `data:${file.mimetype};base64,${base64Image}`;
        const caption = await generateCaption(base64Image);
        const newPost = await postModel.create({
            image: dataURI,
            caption: caption,
            user: req.user._id
        });
        const populatedPost = await newPost.populate('user', 'username');
        return res.status(201).json({
            message: "Post created successfully!",
            post: populatedPost
        });
    } catch (error) {
        console.error("--- CRITICAL ERROR in createPostController ---", error);
        return res.status(500).json({ message: "Internal Server Error." });
    }
}

// GET ALL POSTS
async function getAllPostsController(req, res) {
    try {
        const posts = await postModel.find({ user: req.user._id }).populate('user', 'username').sort({ _id: -1 });
        return res.status(200).json(posts);
    } catch (error) {
        console.error("--- CRITICAL ERROR in getAllPostsController ---", error);
        return res.status(500).json({ message: "Internal Server Error." });
    }
}

// DELETE POST
async function deletePostController(req, res) {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid post ID." });
        }
        const deletedPost = await postModel.findOneAndDelete({ _id: id, user: req.user._id });
        if (!deletedPost) {
            return res.status(404).json({ message: "Post not found or you don't have permission to delete it." });
        }
        return res.status(200).json({ message: "Post deleted successfully." });
    } catch (error) {
        console.error("--- CRITICAL ERROR in deletePostController ---", error);
        return res.status(500).json({ message: "Internal Server Error." });
    }
}

module.exports = {
    createPostController,
    getAllPostsController,
    deletePostController
};