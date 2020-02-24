const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
	subject: {
		type: String,
		require: [true, 'Book subject is required'],
		lowercase: true
	},
	department: {
		type: String,
		require: [true, 'Book must belongs to any department'],
		lowercase: true
	},
	bookName: {
		type: String,
		require: [true, 'Book must have a name'],
		minlength: 5,
		maxlength: 255,
		lowercase: true
	},
	author: {
		type: String,
		require: [true, 'Book must have a author'],
		lowercase: true
	},
	uploadDate: {
		type: Date,
		default: Date.now()
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
		// require: [true, 'Book must be marks as available or no']
		default: true
	},
	tag: {
		type: [String]
	},
	doner: {
		type: Number
	}
});

const bookModel = mongoose.model('Book', bookSchema);

module.exports = bookModel;
