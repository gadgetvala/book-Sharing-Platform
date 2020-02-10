const User = require('./../models/userModel');

exports.getAllUser = (req, res) => {
	try {
		res.status(200).json({
			status: 'success',
			data: 'All Register User'
		});
	} catch (err) {
		res.status(400).json({
			status: 'failure',
			message: err.message
		});
	}
};

exports.createUser = (req, res) => {
	try {
		res.status(200).json({
			status: 'success',
			data: 'Post request for creating users'
		});
	} catch (err) {
		res.status(400).json({
			status: 'failure',
			message: err.message
		});
	}
};

exports.getUser = (req, res) => {
	try {
		res.status(200).json({
			status: 'success',
			data: 'Get user by id'
		});
	} catch (err) {
		res.status(400).json({
			status: 'failure',
			message: err.message
		});
	}
};

exports.updateUser = (req, res) => {
	try {
		res.status(200).json({
			status: 'success',
			data: 'Update user details'
		});
	} catch (err) {
		res.status(400).json({
			status: 'failure',
			message: err.message
		});
	}
};

exports.deleteUser = (req, res) => {
	try {
		res.status(200).json({
			status: 'success',
			data: 'User deleted'
		});
	} catch (err) {
		res.status(400).json({
			status: 'failure',
			message: err.message
		});
	}
};
