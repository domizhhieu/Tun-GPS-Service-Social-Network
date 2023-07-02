import express, { Express, Request, Response } from "express";
import { ConfigApp } from "./Common/initApp/configApp";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
const port = process.env.PORT || 3000;
const app: Express = express();
app.use(cors());

const server = createServer(app);
export const ioSocket = new Server(server, {
  cors: {
    origin: "*",
  },
});
const chatNamespace = ioSocket.of("/chat");
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
