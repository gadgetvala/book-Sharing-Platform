const app = require('./index');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	})
	.then(() => console.log('DB connections succesfull'))
	.catch(err => console.log('ERROR'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server is Running'));
