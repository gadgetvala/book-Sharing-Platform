const Book = require('./../models/bookModel');

exports.getAllBook = async (req, res) => {
	try {
		const book = Book.find();

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
		const book = await Book.findById(req.body.id);

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
		const book = await Book.findByIdAndUpdate(req.body.id, req.body, {
			new: true,
			runValidators: true
		});

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

exports.deleteBook = async (req, res) => {
	try {
		await Book.findByIdAndDelete(req.body.id);

		res.status(200).json({
			status: 'success',
			data: 'Book is deleted By admin'
		});
	} catch (err) {
		res.status(400).json({
			status: 'failure',
			data: { message: err.message }
		});
	}
};
