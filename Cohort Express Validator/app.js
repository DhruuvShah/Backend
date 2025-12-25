const express = require("express");
const validator = require("./middleware/validator.middleware");

const app = express();
app.use(express.json());

app.post("/register", validator.registerValidationRules, (req, res) => {
  const { username, email, password } = req.body;
    res.status(200).json({ message: "User registered successfully", data: { username, email } });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
