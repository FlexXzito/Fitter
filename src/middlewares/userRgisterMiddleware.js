import bcrypt from "bcrypt";

export const hashPassword = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username) {
    return res.status(400).json({ error: "Username is required" });
  }

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      error: "Invalid email format"
    });
  }

  req.body.email = email.toLowerCase().trim();

  if (!password || password.length < 6) {
    return res.status(400).json({ error: "Password is required and must be at least 6 characters long" });
  }

  try {
    req.body.password = await bcrypt.hash(password, 10);
    next();
  } catch (error) {
    return res.status(500).json({ error: "Error hashing password" });
  }
};
