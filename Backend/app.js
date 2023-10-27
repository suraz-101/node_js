const express = require("express");
const app = express();
const router = express.Router();

var bodyParser =	require("body-parser");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use(express.json())
//Route Imports
const product = require("./routes/productRoute");



app.use("/api/v1",product);


module.exports = app;