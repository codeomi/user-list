const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectToDatabase = () => {
  mongoose.connect(process.env.DB_URI).then((data) => {
    console.log(`mongoDb connected with server ${data.connection.host}`);
  });
};




module.exports = connectToDatabase;
