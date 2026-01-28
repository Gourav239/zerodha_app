const {UsersModel}=require("../model/UsersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.signupController= async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const existingUser = await UsersModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UsersModel({
      email,
      username,
      password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({ message: "Signup successful" });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports.loginController= async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UsersModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // true in production (HTTPS)
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000
    });

    res.json({ message: "Login successful" });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports.logoutController= (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
};