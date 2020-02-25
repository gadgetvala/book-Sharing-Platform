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
  },
  income: {
    type: Number,
    default: 100000
  },
  descripition : {
    type: String,
    default : "A student is primarily a person enrolled in a school or other educational institution who attends classes in a course to attain the appropriate level of mastery of a subject under the guidance of an instructor and who devotes time outside class to do whatever activities the instructor assigns"
  },
  cgpa : { 
    type: Number
  }
  
});

const User = mongoose.model("user", userSchema);

module.exports = User;