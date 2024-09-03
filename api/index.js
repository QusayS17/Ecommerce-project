const express = require("express");
const bodyParser = require("body-parser");  // Corrected typo
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));  // Corrected typo
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");

// Replace <password> with your actual password, URL-encoded if necessary
mongoose.connect("mongodb+srv://kosaysolh0:Ko174say@@cluster0.inb0r.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error connecting to MongoDB: " + err);
});

app.listen(port, () => {
    console.log("Server is running on port " + port);
});
