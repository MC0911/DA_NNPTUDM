const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: [String]
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
)
module.exports = mongoose.model("User", UserSchema)
