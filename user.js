import express from "express";
import User from "../modes/User.js";

const router = express.Router();

router.put("/profile-pic", async (req, res) => {
    try {
        const { userId, imageUrl } = req.body;

        const user = await User.findById(userId);
        user.profilePic = imageUrl;

        await user.save();

        res.json({ message: "Profile picture upadated", user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    });

    export defaut router;