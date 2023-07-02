import { Socket } from "socket.io";
import { ioSocket } from "../..";

class ChatService {
  private contructor() {}
  chatTogether = () => {
    console.log("chat together have called");
    ioSocket.on("connection", (socket: Socket) => {
      console.log(`A user ${socket.id} connected`);

      socket.on("chat message", (message: string) => {
        console.log("Message received: ", message);
        ioSocket.emit("chat message", message);
      });
      socket.on("disconnect", () => {
        console.log("A user disconnected");
      });
    });
  };
}
export const chatService = new ChatService();
