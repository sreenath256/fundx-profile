// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const userSchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     password: {
//       type: String,
//     },
//     photoURL: {
//       type: String,
//     },
//     googleId: {
//       type: String,
//     },
//     isBlocked: {
//       type: Boolean,
//       default: false, // Default value is set to false, indicating the user is not blocked initially
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("User", userSchema);

const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please add the firstname"],
    },
    lastname: {
      type: String,
      required: [true, "Please add the lastname"],
    },
    email: {
      type: String,
      required: [true, "Please add the email"],
      unique: [true, "email already registerd"],
    },
    password: {
      type: String,
      required: [true, "Please add the password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);
