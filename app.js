import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
import './src/config/mongoose.js';

import cors from './src/middleware/cors.js';
import booksRouter from './src/routes/books.js';
import BookModel from './src/models/Book.js';


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/books', booksRouter)

app.listen(PORT, () => console.log("Server running on PORT " + PORT));

// Socket.io
const server = http.createServer(app)
const io = socketIO(server);
const socketPort = 8000;

server.listen(socketPort, () => console.log("SocketServer running on PORT " + socketPort));

io.on("connection", socket => {
  console.log("New client connected " + socket.id);

  socket.on("putBook", book => {
    BookModel.findByIdAndUpdate(book.id, {
        title: book.title})
      .then(updatedDoc => {
        io.sockets.emit("change_data");
      });
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});