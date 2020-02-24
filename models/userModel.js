const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please tell us your name"],
    trim: true
  },
  email: {
    type: String,
    require: [true, "Please tell us your email"],
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    require: [true, "Please provide a password"]
  },
  branch: {
    type: String,
    require: [true, "Please provide a branch"]
  },
  semester: {
    type: String,
    require: [true, "Please provide a semester"],
    enum: {
      values: ["1", "2", "3", "4", "5", "6", "7", "8", "complete"],
      message: "Only 1 to 8 semester"
    }
  },
  enrollmentNo: {
    type: Number,
    require: [true, "Please provide a Enrollment"],
    minlength: 12,
    maxlength: 12
  },
  userType: {
    type: String,
    default: "student",
    enum: {
      values: ["student", "faculty", "alumini"]
    }
  },
  token: {
    type: String,
    default: null
  }
});

const User = mongoose.model("user", userSchema);

module.exports = User;
