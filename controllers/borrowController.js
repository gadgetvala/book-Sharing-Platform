const Borrow = require('./../models/borrowModel');

exports.getAll = async (req, res) => {
	try {
		const borrow = await Borrow.find();

		res.status(200).json({
			status: 'success',
			data: {
				borrow
			}
		});
	} catch (err) {
		res.status(400).json({
			status: 'failure',
			data: { message: err.message }
		});
	}
};

exports.getAllByUser = async (req, res) => {
	try {
		const borrow = await Borrow.find({
			userID: req.params.id
		});

		res.status(200).json({
			status: 'success',
			data: {
				borrow
			}
		});
	} catch (err) {
		res.status(400).json({
			status: 'failure',
			data: { message: err.message }
		});
	}
};

exports.createRecord = async (req, res) => {
	try {
		const record = await Borrow.create({
			bookID: req.body.bookID,
			userID: req.body.userID,
			borrowDate: Date.now(),
			returnDate: req.body.returnDate
		});

		res.status(201).json({
			status: 'success',
			data: {
				record
			}
		});
	} catch (err) {
		res.status(400).json({
			status: 'failure',
			data: { message: err.message }
		});
	}
};

exports.deleteRecord = async (req, res) => {
	try {
		await Borrow.findByIdAndDelete(req.params.id);

		res.status(201).json({
			status: 'success',
			data: 'Record Deleted Successfully'
		});
	} catch (err) {
		res.status(400).json({
			status: 'failure',
			data: { message: err.message }
		});
	}
};
