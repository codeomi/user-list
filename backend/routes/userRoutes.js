const express = require('express')
const { fetchAllUsers,firstRequirement} = require("../controllers/users")

const router = express.Router()


router.route("/users").get(fetchAllUsers)
router.route("/users/req-1").get(firstRequirement)

module.exports = router