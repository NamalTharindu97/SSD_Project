const express = require("express");
const cors = require("cors");
const dbConnection = require("../backend/config/dbConnection");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();

const app = express();
dbConnection();
const PORT = process.env.PORT || 5001;

//Node.js DOS

//Security Misconfigurations
//configure cors properly for privent security misconfigurations
const allowedOrigins = ["http://localhost:3000"];
app.use(
	cors({
		origin: allowedOrigins,
		credentials: true,
	})
);
//limit the JSON payload size for privent security misconfigurations
app.use(express.json({ limit: "1mb" }));
app.use(cookieParser());
app.use(
	session({
		secret: "key-fsdfsrfeg165654gregsdgreg1e1g6re546464g5r6",
		resave: false,
		saveUninitialized: true,
	})
);

app.use("/api/v1/employee", require("../backend/routes/EmpRoutes"));

app.listen(PORT, () => {
	console.log("server running");
});

module.exports = app;
