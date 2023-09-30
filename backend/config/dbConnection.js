const mongoose = require("mongoose");
//mongodb injection
const dbConnection = async () => {
	try {
		//use enviroment variables for privent mongodb injection
		//use embedding credentials for privent mongdb injection

		const userName = process.env.DB_NAME;
		const password = process.env.DB_PASSWORD;

		const connectionString = `mongodb+srv://${userName}:${password}@merncrudyt01.xrcuuxl.mongodb.net/?retryWrites=true&w=majority`;

		const con = await mongoose.connect(connectionString);
		console.log("db connected success", con.connection.name);
	} catch (error) {
		console.log(error);
	}
};

module.exports = dbConnection;
