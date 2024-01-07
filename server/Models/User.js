const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true , unique:true},
    password: { type: String, required: true },
    image: {
      type: String,
      // required: true,
      default:
        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1704613191~exp=1704613791~hmac=af9d5cb88f491f58ff878926afe2669cf96bff00d10e7af29c2461be9afc43f6",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", User);
