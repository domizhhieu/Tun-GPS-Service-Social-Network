"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigApp = void 0;
const cors_1 = __importDefault(require("cors"));
const ChatRouter_1 = require("../../Middlewares/Routers/ChatRouter");
const ConfigApp = (app) => {
    app.use((0, cors_1.default)());
    app.use("/chat", ChatRouter_1.chatRouter);
    app.get("/", (req, res) => {
        res.send("<h1> 👉 Server Socket is running...</h1>");
    });
};
exports.ConfigApp = ConfigApp;
