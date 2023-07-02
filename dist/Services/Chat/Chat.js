"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatService = void 0;
const __1 = require("../..");
class ChatService {
    constructor() {
        this.chatTogether = () => {
            console.log("chat together have called");
            __1.ioSocket.on("connection", (socket) => {
                console.log(`A user ${socket.id} connected`);
                socket.on("chat message", (message) => {
                    console.log("Message received: ", message);
                    __1.ioSocket.emit("chat message", message);
                });
                socket.on("disconnect", () => {
                    console.log("A user disconnected");
                });
            });
        };
    }
    contructor() { }
}
exports.chatService = new ChatService();
