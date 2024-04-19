// adminAuthMiddleware.js
const User = require("../model/User");

const adminAuthMiddleware = async (req, res, next) => {
  try {
    const adminUsers = await User.find({ role: "ADMIN" });

    if (adminUsers.length === 0) {
      return res.status(403).json({ message: "No admin users found" });
    }

    req.adminUser = adminUsers[0];

    next();
  } catch (error) {
    console.error("Admin authentication error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = adminAuthMiddleware;
