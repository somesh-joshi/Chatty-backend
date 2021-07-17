const app = require('express')();

const server = require('http').createServer(app);

const io = require('socket.io')(server, {
    cors: {
    origin: "*"
  }});

io.on("connection", (socket) => {
    console.log("what is the socket is:", socket);
    console.log("socket is active to be connected");

    socket.on("chat", (payload) => {
        console.log("What is the payload:", payload);
        io.emit("chat", payload);
    })
});

server.listen(5000, () => console.log("Server is Active at 5000........"));
