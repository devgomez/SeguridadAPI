const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const apiRoute = require("./src/routes/ApiRoute");

const app = express();

// Settings

app.set("port", process.env.PORT || 4000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api", apiRoute);

module.exports = app;
