const mongoose = require('mongoose');

const borrowSchema = new mongoose.Schema({
	bookID: {
		type: String
	},
	userID : {
		type: String
	},
	borrowDate: {
		type: Date
	},
	returnDate: {
		type: Date
	}
});

const borrowModel = const mongoose.model("Borrow", borrowModel);

module.exports = borrowModel;