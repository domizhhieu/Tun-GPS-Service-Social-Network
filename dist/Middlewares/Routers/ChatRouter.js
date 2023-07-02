"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatRouter = void 0;
const express_1 = __importDefault(require("express"));
const Chat_1 = require("../../Services/Chat/Chat");
exports.chatRouter = express_1.default.Router();
exports.chatRouter.get("/chat-together", Chat_1.chatService.chatTogether);
