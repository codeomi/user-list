const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const errrorMiddleware = require("./middleware/error");
const userRoutes = require("./routes/userRoutes");
const path = require("path")

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

//config
if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({ path: "./backend/config/config.env" });
  }

//route
app.use("/api/v1", userRoutes);

if (process.env.NODE_ENV === "production") {
    const path = require("path");
    app.use(express.static(path.resolve(__dirname, 'frontend', 'build')));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'),function (err) {
            if(err) {
                res.status(500).send(err)
            }
        });
    })
}

//middleware for error
app.use(errrorMiddleware);

module.exports = app;
