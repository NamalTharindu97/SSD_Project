const express = require("express");
const cors = require("cors");
const dbConnection = require("../backend/config/dbConnection");
const dotenv = require("dotenv").config();

const app = express();
dbConnection();
const PORT = process.env.PORT || 5001;

//middlewares
app.use(cors());
app.use(express.json());
app.use("/api/v1/employee", require("../backend/routes/EmpRoutes"));

app.listen(PORT, () => {
  console.log("server running");
});

module.exports = app;
