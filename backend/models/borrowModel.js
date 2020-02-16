const mongoose = require('mongoose');

const borrowSchema = new mongoose.Schema({
	bookID: {
		type: Schema.Types.ObjectId,
		require: [true, 'a borrow should have a book id']
	},
	userID: {
		type: Schema.Types.ObjectId,
		require: [true, 'a borrow should have a user']
	},
	borrowDate: {
		type: Date
	},
	returnDate: {
		type: Date
	}
});

const borrowModel = mongoose.model('Borrow', borrowSchema);

module.exports = borrowModel;
