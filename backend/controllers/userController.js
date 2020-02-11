const User = require('./../models/userModel');

exports.getAllUser = async (req, res) => {
	try {
		const users = await User.find();

		res.status(200).json({
			status: 'success',
			data: {
				users
			}
		});
	} catch (err) {
		res.status(400).json({
			status: 'failure',
			message: err.message
		});
	}
};

exports.createUser = async (req, res) => {
	try {
		const newUser = await User.create(req.body);

		res.status(201).json({
			status: 'success',
			data: {
				USER: newUser
			}
		});
	} catch (err) {
		res.status(400).json({
			status: 'failure',
			message: err.message
		});
	}
};

exports.getUser = async (req, res) => {
	try {
		const users = await User.findById(req.body.id);

		res.status(200).json({
			status: 'success',
			data: {
				users
			}
		});
	} catch (err) {
		res.status(400).json({
			status: 'failure',
			message: err.message
		});
	}
};

exports.updateUser = async (req, res) => {
	try {
		const user = await User.findByIdAndUpdate(req.body.id, req.body, {
			new: true,
			runValidators: true
		});

		res.status(200).json({
			status: 'success',
			data: {
				user
			}
		});
	} catch (err) {
		res.status(400).json({
			status: 'failure',
			message: err.message
		});
	}
};

exports.deleteUser = async (req, res) => {
	try {
		await User.findByIdAndDelete(req.body.id);

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
