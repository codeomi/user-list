const app = require("./app");
const dotenv = require("dotenv");

const connectDatabase = require("./config/db");

//config
dotenv.config({ path: "./backend/config/config.env" });

//connect to databse
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Serever is workking on https://localhost:${process.env.PORT}`);
});

// //unhandled promise
// process.on("unhandledRejection", (err) => {
//   console.log(`Error: ${err.message}`);
//   console.log("Shutting Down Server due to unhandled promise");

//   server.close(() => {
//     process.exit(1);
//   });
// });
