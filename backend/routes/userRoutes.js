const express = require('express')
const { fetchAllUsers,firstRequirement, secondRequirement, thirdRequirement, fourthRequirement, fifthRequirement} = require("../controllers/users")

const router = express.Router()


router.route("/users").get(fetchAllUsers)
router.route("/users/req1").get(firstRequirement)
router.route("/users/req-2").get(secondRequirement)
router.route("/users/req-3").get(thirdRequirement)
router.route("/users/req-4").get(fourthRequirement)
router.route("/users/req-5").get(fifthRequirement)

module.exports = router