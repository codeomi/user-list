const User = require("../models/UserModel");
const sampleData = require("../../sample_data.json");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("../middleware/catchAsyncError");

exports.fetchAllUsers = async (req, res, next) => {
  const users = await User.find();
  if (!users) {
    next(new Error("Cannot find users"));
  }
  res
    .status(200)
    .json({ success: true, responses: users.length, users: users });
};

// Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
exports.firstRequirement = catchAsyncError(async (req, res, next) => {
  const query = {
    income: { $lt: "$5" },
    car: { $in: ["BMW", "Mercedes"] },
  }; //We have a fixed a requirement thats why we are giving fixed query in the form of variable
  const users = await User.find(query);
  if (!users) {
    return next(new ErrorHandler("Cannot find users", 400));
  }

  res
    .status(200)
    .json({ success: true, responses: users.length, users: users });
});
