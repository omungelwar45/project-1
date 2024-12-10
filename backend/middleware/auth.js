const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(403).json("Access Denied");

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json("Invalid Token");
    }
};

const verifyRole = (role) => (req, res, next) => {
    if (req.user.role !== role) return res.status(403).json("Access Denied");
    next();
};

module.exports = { verifyToken, verifyRole };
