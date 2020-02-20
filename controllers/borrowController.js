const Borrow = require('./../models/borrowModel');
const Book = require('./../models/bookModel.js');
const User = require('./../models/userModel.js');

exports.getAll = async (req, res) => {
	try {
		// const borrow = await Borrow.find();
		
		// let borrowerIds=[];
		// let booksIds=[];
		// borrow.forEach(borrow => {
		// 	booksIds.push(borrow.bookID);
		// 	borrowerIds.push(borrow.userID);
		// });

		// const borrowers = await User.find({ _id: {$in: borrowerIds} });
		// const books = await Book.find({ _id: {$in: booksIds} });	

		// const result = borrowers.map((borrow, index) => {
		// 	return ({
		// 					user: borrow,
		// 					book: books[index]
		// 				})
		// })

		const result = await Borrow.aggregate([
			{
				$lookup: {
					from: "users",
					localField: "userID",
					foreignField: "_id",
					as: "userInfo"

				}	
			},
			{
				$lookup: {
					from: "books",
					localField: "bookID",
					foreignField: "_id",
					as: "bookData"
				}
			}
		])

		res.status(200).json({
			status: 'success',
			data: {
				result
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
