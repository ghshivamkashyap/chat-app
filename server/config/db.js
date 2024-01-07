const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      dbName: process.env.DB_NAME,
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    .then(console.log("db connected"))
    .catch((error) => {
      console.log("DB Connection Failed");
      console.error(error);
      process.exit(1);
    });
};
