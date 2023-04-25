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


