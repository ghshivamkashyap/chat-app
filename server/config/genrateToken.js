const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const genrateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

module.exports = genrateToken;
