const jwt = require("jsonwebtoken");
const User = require("./model/userModel");

const requireRole = (...roles) => {
  return async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;

      const token = authHeader.split(" ")[1];

      if (!token) {
        return res.status(401).json({ message: "No token provided" });
      }

      const decoded = jwt.verify(token, process.env.SECRET);

      const user = await User.findById(decoded.id);
      if (!user) return res.status(404).json({ message: "User not found" });

      if (!roles.includes(user.role)) {
        return res.status(403).json({ message: "Access denied" });
      }

      req.user = user;
      next();
    } catch (error) {
      console.error("JWT Error:", error.message);
      return res
        .status(401)
        .json({ message: "Invalid token or expired token" });
    }
  };
};

module.exports = { requireRole };
