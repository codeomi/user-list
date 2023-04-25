const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

const errrorMiddleware = require("./middleware/error");

const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

// fetchUsers()


//route
app.use("/api/v1", userRoutes);

//middleware for error
app.use(errrorMiddleware);

module.exports = app;
