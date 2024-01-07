const express = require("express");
const { register, login } = require("../controllers/user");
const router = express.Router();

router.post("/login", login);

router.post("/signup", register);

module.exports = router;
