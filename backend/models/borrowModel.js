const mongoose = require('mongoose');

const borrowSchema = new mongoose.Schema({
	bookID: {
		type: String
	},
	userID: {
		type: String
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
