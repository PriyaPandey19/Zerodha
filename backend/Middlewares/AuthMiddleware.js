const User = require("../model/UserModel");
const jwt = require("jsonwebtoken");

const userVerification = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ status: false, message: "No token" });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({ status: false, message: "User not found" });
    }

    req.user = user;   
    next();            // ✅ VERY IMPORTANT

  } catch (error) {
    return res.status(401).json({ status: false, message: "Invalid token" });
  }
};

module.exports = userVerification; // ✅ export FUNCTION, not object
