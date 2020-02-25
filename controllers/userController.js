//Gobal Import
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

//Local Import
const User = require("./../models/userModel");

//Local Variable
const privateKey = process.env.PRIVATE_KEY || "bookfrunish";
const salt = process.env.SALT || "encryptsalt";

exports.getAllUser = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: "success",
      data: {
        users
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      message: err.message
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const hash = crypto.pbkdf2Sync(req.body.password, salt, 8, 12, "sha256");

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash,
      branch: req.body.branch,
      semester: req.body.semester,
      enrollmentNo: req.body.enrollmentNo,
      userType: req.body.userType
    });

    const data = await User.find({
      name: req.body.name,
      email: req.body.email
    });

    if (data.length !== 0) {
      throw { message: "User Already existed" };
    }

    const result = await newUser.save();

    res.status(201).json({
      status: "success",
      data: {
        USER: result
      }
    });
  } catch (err) {
    res.status(500).json({
      status: "failure",
      message: err.message
    });
  }
};

exports.signin = async (req, res) => {
  try {
    const hash = crypto.pbkdf2Sync(req.body.password, salt, 8, 12, "sha256");
    let result = await User.find({
      email: req.body.email,
      password: hash
    });

    const needScore = () => {
      let score1, score3;
      //Based on Salary
      if (result[0].income > 600000) {
        score1 = 0;
      } else {
        score1 = (1 - result[0].income / 600000) * 5;
      }

      //Based on department
      // if(result[0].branch === ){
      //   score2 = 5;
      // } else {
      //   score2 = 2.5;
      // }

      //Based on marks
      score3 = (result[0].cgpa / 10) * 5;

      //Average
      return ((score1 + score3) / 10) * 5;
    };

    if (result.length !== 0) {
      if (result[0].token === null) {
        let token = await jwt.sign(
          { id: result[0]._id, userType: result[0].userType },
          privateKey
        );
        result[0].token = token;
        await User.updateOne({ email: result[0].email }, { token });
      }
      console.log(result[0]);
      res.status(200).json({
        status: "success",
        data: {
          name: result[0].name,
          email: result[0].email,
          branch: result[0].branch,
          semester: result[0].semester,
          enrollmentNo: result[0].enrollmentNo,
          userType: result[0].userType,
          token: result[0].token,
          needScore: Math.floor(needScore()),
          mongoID: result[0]._id,
          income: result[0].income,
          descripition: result[0].descripition,
          cgpa: result[0].cgpa
        }
      });
      return;
    }
  } catch (err) {
    res.status(500).json({
      status: "failure",
      error: err.message
    });
    return;
  }

  res.status(404).json({
    status: "failure",
    data: {
      error: "invalid username or password"
    }
  });
};

exports.getUser = async (req, res) => {
  try {
    const users = await User.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        users
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      message: err.message
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: "success",
      data: {
        user
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      message: err.message
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      data: "User deleted"
    });
  } catch (err) {
    res.status(400).json({
      status: "failure",
      message: err.message
    });
  }
};
