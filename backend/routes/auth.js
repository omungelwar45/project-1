const express = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).json("User registered successfully");
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json("User not found");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json("Invalid credentials");

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
