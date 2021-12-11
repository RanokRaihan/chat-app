const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//init app
const app = express();

//config environment variable
dotenv.config();

// connect database
mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING, {
        newUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("database connection successful"))
    .catch((err) => console.log(err));

//request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set("view-engine", "ejs");
