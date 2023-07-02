import express, { Express } from "express";
import cors from "cors";
import { createServer } from "http";
import io from "socket.io";
import { Server, Socket } from "socket.io";
import { chatRouter } from "../../Middlewares/Routers/ChatRouter";

export const ConfigApp = (app: Express) => {
  app.use(cors());
  app.use("/chat", chatRouter);
  app.get("/", (req, res) => {
    res.send("<h1> 👉 Server Socket is running...</h1>");
  });
};
