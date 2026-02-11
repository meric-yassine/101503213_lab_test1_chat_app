const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
app.use((req, res, next) => {
  console.log("REQ:", req.method, req.url);
  next();
});
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(express.static("view"));

app.get("/test", (req, res) => res.send("SERVER OK"));

mongoose.connect("mongodb://127.0.0.1:27017/chatApp")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

const User = require("./models/User");
const bcrypt = require("bcrypt");

app.post("/signup", async (req, res) => {
  try {
    const { username, firstname, lastname, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      firstname,
      lastname,
      password: hashedPassword
    });

    await user.save();
    res.json({ message: "User created successfully" });

  } catch (err) {
    res.status(400).json({ error: "Username already exists" });
  }
});


app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ error: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ error: "Invalid password" });

  res.json({ message: "Login successful", username });
});


const GroupMessage = require("./models/GroupMessage");

io.on("connection", (socket) => {

  socket.on("joinRoom", (room) => {
    socket.join(room);
  });

  socket.on("chatMessage", async (data) => {
    const { username, room, message } = data;

    const msg = new GroupMessage({
      from_user: username,
      room,
      message
    });

    await msg.save();

    io.to(room).emit("message", msg);
  });

  socket.on("typing", (data) => {
    socket.to(data.room).emit("typing", data.username + " is typing...");
  });

});

