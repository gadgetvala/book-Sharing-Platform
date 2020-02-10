/*GOBAL IMPORT*/
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const helmet = require('helmet');

/*LOCAL IMPORT*/
const book = require('./routes/bookRoute');
const user = require('./routes/userRoute');

//Express Called
const app = express();

/*MIDDLEWARE STACK*/
app.use(express.json());
app.use(morgon('dev'));
app.use(helmet());
app.use('/api/v1/book', book);
app.use('/api/v1/user', user);

/*Welcome to API*/
app.get('/', (req, res) => {
	res.status(200).json({
		status: 'success',
		data: 'Welcome to Book Sharing Platform developed by Team Decoders.'
	});
});

module.exports = app;
