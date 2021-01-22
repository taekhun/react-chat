const express = require("express");
// const socketio = require("socket.io");

const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const http = require("http").createServer(app);
// const server = http.createServer(app);
const io = require("socket.io")(http, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("We have a new connection!!!");

  socket.on("disconnect", () => {
    console.log("User has Left!!!");
  });
});

app.use(router);

http.listen(PORT, () => console.log(`✅Server is running on ${PORT}`));
