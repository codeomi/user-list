const express = require('express')
const { fetchAllUsers,firstRequirement, secondRequirement} = require("../controllers/users")

const router = express.Router()


router.route("/users").get(fetchAllUsers)
router.route("/users/req-1").get(firstRequirement)
router.route("/users/req-2").get(secondRequirement)

module.exports = router