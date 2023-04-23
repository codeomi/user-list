const express = require('express')
const {createAllUsers} = require("../controllers/users")

const router = express.Router()


router.route("/users").get(createAllUsers)

module.exports = router