const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
	category: {
		type: String,
		require: [true, 'Book category is required'],
		lowercase: true
	},
	bookName: {
		type: String,
		require: [true, 'Book must have a name'],
		minlength: 5,
		maxlength: 22
	},
	uploadDate: {
		type: Date
	},
	bookImage: {
		type: String
	},
	bookType: {
		type: String,
		require: [true, 'Must define book type'],
		enum: {
			values: ['notes', 'hand written notes', 'book'],
			message: 'It must be from values'
		},
		lowercase: true
	},
	isAvailable: {
		type: Boolean,
		require: [true, 'Book must be marks as available or no']
	},
	tag: {
		type: Array,
		default: undefined
	}
});

const bookModel = mongoose.model('Book', bookSchema);

module.exports = bookModel;
