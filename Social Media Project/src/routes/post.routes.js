const express = require('express');
const jwt = require("jsonwebtoken")
const router = express.Router();

router.post('/', (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized access, please login first"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        return res.status(401).json({
            message: "Invalid token, please login again"
        })
    }
})

module.exports = router;