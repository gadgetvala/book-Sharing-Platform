const express = require('express');
const borrowController = require('./../controllers/borrowController.js');

const router = express.Router();

router
	.route('/')
	.get(borrowController.getAll)
	.post(borrowController.createRecord);

router
	.route('/:id')
	.get(borrowController.getAllByUser)
	.delete(borrowController.deleteRecord);

module.exports = router;
