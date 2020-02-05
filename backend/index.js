/*GOBAL IMPORT*/
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

/*LOCAL IMPORT*/

//Express Called
const app = express();

/*
 *LOCAL HOST CONNECTION
 *const URI = "mongodb://localhost:27017/bsp";
 */
/*CONNECTION STRING TO mongoDB*/
const URI = 'Insert connection string here';

/*MIDDLEWARE STACK*/
app.use(express.json());
app.use(morgon('dev'));

/*Welcome to API*/
app.get('/', (req, res) => {
	res.status(200).json({
		status: 'success',
		data: 'Welcome to Book Sharing Platform developed by Team Decoders.'
	});
});

module.exports = app;
