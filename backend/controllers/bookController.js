const Book = require('./../models/bookModel');

exports.getAllBook = async (req, res) => {
	try {
		const book = await Book.find();

		res.status(200).json({
			status: 'success',
			data: {
				book
			}
		});
	} catch (err) {
		res.status(400).json({
			status: 'failure',
			data: { message: err.message }
		});
	}
};

exports.createBook = async (req, res) => {
	try {
		const book = await Book.create(req.body);

		res.status(201).json({
			status: 'success',
			data: {
				book
			}
		});
	} catch (err) {
		res.status(400).json({
			status: 'failure',
			data: { message: err.message }
		});
	}
};

exports.getBook = async (req, res) => {
	try {
		const book = await Book.findById(req.params.id);

		res.status(200).json({
			status: 'success',
			data: {
				book
			}
		});
	} catch (err) {
		res.status(400).json({
			status: 'failure',
			data: { message: err.message }
		});
	}
};

exports.updateBook = async (req, res) => {
	try {
		const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true
		});

		res.status(200).json({
			status: 'success',
			data: {
				book
			}
		});
	} catch (err) {
		res.status(400).json({
			status: 'failure',
			data: { message: err.message }
		});
	}
};

exports.deleteBook = async (req, res) => {
	try {
		await Book.findByIdAndDelete(req.params.id);

		res.status(200).json({
			status: 'success',
			data: "Book Deleted successfully"
		});
	} catch (err) {
		res.status(400).json({
			status: 'failure',
			data: { message: err.message }
		});
	}
};
