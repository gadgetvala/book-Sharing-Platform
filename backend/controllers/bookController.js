const Book = require('./../models/bookModel');

exports.getAllBook = (req, res) => {
	try {
		res.status(200).json({
			status: 'success',
			data: 'Display All Books'
		});
	} catch (err) {
		res.status(400).json({
			status: 'failure',
			data: { message: err.message }
		});
	}
};

exports.createBook = (req, res) => {
	try {
		res.status(200).json({
			status: 'success',
			data: 'Create New Book'
		});
	} catch (err) {
		res.status(400).json({
			status: 'failure',
			data: { message: err.message }
		});
	}
};

exports.getBook = (req, res) => {
	try {
		res.status(200).json({
			status: 'success',
			data: 'Get Book by Id'
		});
	} catch (err) {
		res.status(400).json({
			status: 'failure',
			data: { message: err.message }
		});
	}
};

exports.updateBook = (req, res) => {
	try {
		res.status(200).json({
			status: 'success',
			data: 'Update book details only by admin'
		});
	} catch (err) {
		res.status(400).json({
			status: 'failure',
			data: { message: err.message }
		});
	}
};

exports.delete = (req, res) => {
	try {
		res.status(200).json({
			status: 'success',
			data: 'delete Book only by admin'
		});
	} catch (err) {
		res.status(400).json({
			status: 'failure',
			data: { message: err.message }
		});
	}
};
