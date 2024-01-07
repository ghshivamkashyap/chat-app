const User = require("../Models/User");
const genrateToken = require("../config/genrateToken");

exports.register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password || !confirmPassword) {
    // console.log("All fields required");
    return res.status(400).json({
      success: false,
      message: "all fields are required",
    });
  }

  const userExist = await User.findOne({
    email: email,
  });

  if (userExist) {
    return res.status(400).json({
      success: false,
      message: "user already exists",
    });
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    let token = genrateToken(user?._id);
    console.log(user, " token is- ", token);
    return res.status(200).json({
      success: true,
      data: user,
      token: token,
    });
  } else {
    return res.status(400).json({
      success: false,
      data: "",
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  const user = await User.findOne({
    email: email,
  });

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "no user found",
    });
  }

  const isPasswordMatch = await User.findOne({
    email: email,
    password: password,
  });

  if (!isPasswordMatch) {
    return res.status(401).json({
      success: false,
      message: "Invalid password",
    });
  }

  const token = genrateToken(user._id);

  return res.status(200).json({
    success: true,
    data: user,
    token: token,
  });
};

// module.exports{}
