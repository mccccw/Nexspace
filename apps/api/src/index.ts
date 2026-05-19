import "dotenv/config";
import { createServer } from "http";
import { Server } from "socket.io";
import { createApp } from "./app";

const app = createApp();
const server = createServer(app);
const io = new Server(server, { cors: { origin: process.env.FRONTEND_URL } });

io.on("connection", (socket) => {
  socket.on("chat:join_channel", ({ channelId }) => socket.join(channelId));
  socket.on("chat:leave_channel", ({ channelId }) => socket.leave(channelId));
  socket.on("chat:send_message", (payload) => io.to(payload.channelId).emit("chat:message", { message: payload }));
  socket.on("chat:edit_message", (payload) => io.emit("chat:message_edited", { message: payload }));
  socket.on("chat:delete_message", (payload) => io.emit("chat:message_deleted", payload));
  socket.on("chat:typing_start", (payload) => io.to(payload.channelId).emit("chat:typing", payload));
  socket.on("chat:typing_stop", (payload) => io.to(payload.channelId).emit("chat:typing_stop", payload));
  socket.on("dm:send", (payload) => io.emit("dm:message", { message: payload }));
  socket.on("dm:read", (payload) => io.emit("dm:read", payload));
  socket.on("user:status", (payload) => io.emit(payload.status === "offline" ? "user:offline" : "user:online", payload));
});

server.listen(Number(process.env.PORT ?? 3001), () => console.log("API up"));
