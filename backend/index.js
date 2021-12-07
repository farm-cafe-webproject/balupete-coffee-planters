const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

dotenv.config({ path: "backend/config/config.env" });
const connectDB = require('./database/connectDatabase.js');
const { connect } = require('mongoose');

//! Handling Uncaught Exception
process.on("uncaughtException", (err) => {
	console.log(`Error: ${err.message}`);
	console.log(`Shutting down the server due to Uncaught Exception`);
	process.exit(1);
});

connectDB();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Route imports

// Routes

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

//! Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
	console.log(`Error: ${err.message}`);
	console.log(`Shutting down the server due to Unhandled Promise Rejection`);
	server.close(() => {
		process.exit(1);
	});
});

