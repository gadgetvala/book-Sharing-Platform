const express = require("express");
const userController = require("./../controllers/userController");
const Auth = require("./../middlewares/Auth");

const router = express.Router();

router
  .route("/")
  .get(userController.getAllUser)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

router.route("/signin").post(userController.signin);

module.exports = router;
