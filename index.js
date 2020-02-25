/*GOBAL IMPORT*/
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

/*LOCAL IMPORT*/
const book = require("./routes/bookRoute");
const user = require("./routes/userRoute");
const borrow = require("./routes/borrowRoute");

//Express Called
const app = express();

// Fixing CORS Problem
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/*MIDDLEWARE STACK*/
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use("/api/v1/book", book);
app.use("/api/v1/user", user);
app.use("/api/v1/borrow", borrow);

/*Welcome to API*/
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    data: `Welcome to Book Sharing Platform developed by <Team Decoders />.`
  });
});

module.exports = app;
