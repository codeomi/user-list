const User = require("../models/UserModel")
const sampleData = require('../../sample_data.json')


exports.createAllUsers = async(req,res,next)=>{
    const users = await User.find()
    res.status(200).json({users:users})
}