const {registerController, loginController} = require('../controllers/aut.controller');
const express = require('express')

const router = express.Router();


router.post("/register", registerController);
router.post("/login", loginController);

module.exports = router;