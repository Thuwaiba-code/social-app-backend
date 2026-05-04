import express from "express";
import mongoose from "mongoose";
import user from "./models/User.js";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import authMiddleware from './middleware/auth.js';




const app = express();
const server = http.createServer(app);
const PORT = 5000;
const router = express.Router();
const users = new Map();


app.use(express.json()); 
app.use(cors());
app.use("/uploads", express.static("uploads"));

router.get('/profile', authMiddleware, (req, res))



const io = new Server(server,)
    cors: {
        origin: "http://localhost:5173", // your frontend
        methods["GET", "POST"]
    }


io.on("connection"), (socket);
    console.log("User connected", socket.id);



// Store connected users
let onlineUsers = {};

io.on("connection", (socket) => {
    console.log("User connected", socket.id);

    online
     socket.on("user-online"), (userId) 
        onlineUsers[userId] === socket.id;
    });

    // User joins online
    socket.on("user-online",) (userId);
        onlineUsers[userId] === socket.id;
        ("online-users", Object.keys(onlineUsers));
        
       io.emit("onlineUsers", Array.from(users.values()));
       
       // Notify
       io.emit("notification", '${username} joined');
       io.emit("notification", '${username} left');

    // Send message in real-time
    socket.on("send-message", ({ receivedId, message }) => {
        const receiverSocket = onlineUsers[receiverId];
        if (receiverSocket) {
            io.to(receiverSocket).emit("receive-message", message);
        }
    });


    // User disconnects
    socket.on("disconnect", () => {
        for (let userId in onlineUsers) {
            if (onlineUsers[userId] === socket.id) {
                delete onlineUsers[userId];
            }
        }
    });

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/socialAppDB")
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));

//Root route
app.get("/", (req, res) => {
    res.send("Server is running successfully!");
});

//POST /users -create a new user
app.post("/users", async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.json({ message: "User created successfully!", user: newUser });
    } catch (err) {
        res.status(500) .json({ error: err.message });
    }
});

//
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start server
 server.listen(4000, () => {
    console.log("Server running on port 4000");
 });




