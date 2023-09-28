const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    const con = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("db connected success", con.connection.name);
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnection;
