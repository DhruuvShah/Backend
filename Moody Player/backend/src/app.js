const express = require("express");
const songRoutes = require('./routes/song.routes');
const cors = require('cors');

const app = express();
app.use(express.json());
const frontendURL = "https://your-frontend-name.vercel.app";
app.use(cors({
  origin: [frontendURL, "http://localhost:5173"]
}));

app.use('/', songRoutes);

module.exports = app;