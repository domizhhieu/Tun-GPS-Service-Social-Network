import express from "express";
import { chatService } from "../../Services/Chat/Chat";

export const chatRouter = express.Router();
chatRouter.get("/chat-together", chatService.chatTogether);
