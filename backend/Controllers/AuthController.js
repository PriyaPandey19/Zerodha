const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

/* ===================== SIGNUP ===================== */
module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User already exists" });
    }

    const user = await User.create({ email, password, username });

    const token = createSecretToken(user._id);

    /* ✅ CORRECT COOKIE */
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,          // true only in HTTPS
      sameSite: "lax",        // VERY IMPORTANT
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      success: true,
      message: "User signed up successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Signup failed" });
  }
};

/* ===================== LOGIN ===================== */
module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ success: false, message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    const token = createSecretToken(user._id);

    /* ✅ CORRECT COOKIE */
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Login failed" });
  }
};
