const express = require('express');
const userController = require('userController');

const router = express.Router();

router
	.route('/')
	.get('getAllUser')
	.post('createUser');

router
	.route('/:id')
	.get(userController.getUser)
	.patch(userController.updateUser)
	.delete(userController.deleteUser);

module.exports = router;
