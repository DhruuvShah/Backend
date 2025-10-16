const postModel = require("../models/post.model");
const generateCaption = require("../service/ai.service");

async function createPostController(req, res) {
    console.log("Create post controller hit."); // For debugging
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).json({ message: "Image file is required." });
        }

        const base64Image = file.buffer.toString('base64');
        const dataURI = `data:${file.mimetype};base64,${base64Image}`;

        console.log("Generating caption..."); // For debugging
        const caption = await generateCaption(base64Image);
        console.log("Caption generated:", caption); // For debugging

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
        return res.status(500).json({ message: "Internal Server Error. Check server logs for details." });
    }
}

async function getAllPostsController(req, res) {
    try {
        // Check if user is authenticated
        if (!req.user) {
            return res.status(401).json({ message: "Authentication required" });
        }
        
        const posts = await postModel.find()
            .populate({
                path: 'user',
                select: 'username',
                model: 'user'
            })
            .sort({ _id: -1 });
        return res.status(200).json(posts);
    } catch (error) {
        console.error("--- CRITICAL ERROR in getAllPostsController ---", error);
        return res.status(500).json({ message: "Internal Server Error. Check server logs for details." });
    }
}

module.exports = {
    createPostController,
    getAllPostsController
};