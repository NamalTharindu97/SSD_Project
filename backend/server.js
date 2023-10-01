const express = require("express");
const cors = require("cors");
const dbConnection = require("../backend/config/dbConnection");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const slowDown = require("express-slow-down");
const cookieSession = require("cookie-session");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const dotenv = require("dotenv").config();

const app = express();

//use express-slow-down library for prevent nodejs dos attacks
const speedLimiter = slowDown({
	windowMs: 15 * 60 * 1000, // 15 minutes
	delayAfter: 50, // allow 50 requests, then start slowing down
	delayMs: 500, // delay each request by 500ms after exceeding limit
});

dbConnection();
const PORT = process.env.PORT || 5001;

// Security Misconfigurations
// Configure cors properly for preventing security misconfigurations
const allowedOrigins = ["http://localhost:3000"];
app.use(
	cors({
		origin: allowedOrigins,
		credentials: true,
	})
);

// Limit the JSON payload size for preventing security misconfigurations
app.use(express.json({ limit: "1mb" }));
app.use(cookieParser());
app.use(
	session({
		secret: "key-fsdfsrfeg165654gregsdgreg1e1g6re546464g5r6",
		resave: false,
		saveUninitialized: true,
	})
);

//passportjs
app.use(passport.initialize());
app.use(passport.session());

// Apply the speed limiter middleware to all routes
app.use(speedLimiter);

app.use("/api/v1/employee", require("../backend/routes/EmpRoutes"));

app.use("/auth", authRoute);

app.listen(PORT, () => {
	console.log("server running");
});

module.exports = app;
