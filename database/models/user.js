const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
    // validate: {
    //   validator: validator.isEmail,
    //   message: "{VALUE} is not valid email"
    // }
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    trim: true
  },
  entries: {
    type: Number
  },
  joined: {
   type: Date
  }
});


module.exports = {User};
