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

// 1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
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

// 2. Male Users which have phone price greater than 10,000.
exports.secondRequirement = catchAsyncError(async (req, res, next) => {
  const query = {
    gender: "Male",
    phone_price: { $gt: "10000" },
  }; //We have a fixed a requirement thats why we are giving fixed query in the form of variable
  const users = await User.find(query);
  if (!users) {
    return next(new ErrorHandler("Cannot find users", 400));
  }

  res
    .status(200)
    .json({ success: true, responses: users.length, users: users });
});

// 3. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.

exports.thirdRequirement = catchAsyncError(async (req, res, next) => {
  const query = {
    last_name: { $regex: /^M/i }, // match last name starting with M (case-insensitive)
    email: { $regex: /M$/i }, // match email ending with M (case-insensitive)
    $expr: { $gt: [{ $strLenCP: "$quote" }, 15] }, // match quote length greater than 15
  };
  const users = await User.find(query);
  if (!users) {
    return next(new ErrorHandler("Cannot find users", 400));
  }

  res
    .status(200)
    .json({ success: true, responses: users.length, users: users });
});

// 4. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.

exports.fourthRequirement = catchAsyncError(async (req, res, next) => {
  const query = {
    car: { $in: ["BMW", "Mercedes", "Audi"] },
    email: { $not: { $regex: /\d/ } },
  };
  const users = await User.find(query);
  if (!users) {
    return next(new ErrorHandler("Cannot find users", 400));
  }

  res
    .status(200)
    .json({ success: true, responses: users.length, users: users });
});
// 5. Show the data of top 10 cities which have the highest number of users and their average income.
exports.fifthRequirement = catchAsyncError(async (req, res, next) => {
  const pipeline = [
    {
      $group: {
        _id: "$city",
        count: { $sum: 1 },
        totalIncome: { $sum: { $toDouble: { $substr: ["$income", 1, -1] } } },
      },
    },
    {
      $project: {
        _id: 0,
        city: "$_id",
        count: 1,
        averageIncome: { $divide: ["$totalIncome", "$count"] },
      },
    },
    { $sort: { count: -1 } },
    { $limit: 10 },
  ];

  const result = await User.aggregate(pipeline);

  res
    .status(200)
    .json({ success: true, responses: result.length, data: result });
});
