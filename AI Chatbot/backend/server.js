require('dotenv').config();
const app = require('./src/app');
const { createServer } = require("http");
const { Server } = require("socket.io");
const generateResponse = require('./src/services/ai.service.js');

const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

const chatHistory = [

];

io.on("connection", (socket) => {
    console.log('A User Connected');

    socket.on("disconnect", () => {
        console.log('A User Disconnected');
    });

    socket.on("ai-message", async (data) => {
        console.log("Received AI message:", data.prompt);
        chatHistory.push({
            role: "user", parts: [{ text: data.prompt }]
        });

        const response = await generateResponse(chatHistory);

        chatHistory.push({
            role: "model",
            parts: [{ text: response }]
        });

        socket.emit("ai-message-response", { response });
    })
});

httpServer.listen(3000, () => {
    console.log('Server is running on port 3000');
});
