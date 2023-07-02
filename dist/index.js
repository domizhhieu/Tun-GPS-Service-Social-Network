"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ioSocket = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const server = (0, http_1.createServer)(app);
exports.ioSocket = new socket_io_1.Server(server, {
    cors: {
        origin: "*",
    },
});
const chatNamespace = exports.ioSocket.of("/chat");
chatNamespace.on("connection", (socket) => {
    console.log("Người dùng đã kết nối vào chat chung");
    socket.on("message", (message) => {
        console.log("Nhận tin nhắn từ người dùng trong chat chung:", message);
        // Gửi tin nhắn đến tất cả các kết nối trong namespace 'chat'
        chatNamespace.emit("message", message);
    });
    socket.on("disconnect", () => {
        console.log("Người dùng đã ngắt kết nối từ chat chung");
    });
});
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
