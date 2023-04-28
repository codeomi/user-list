const app = require("./app");

const connectDatabase = require("./config/db");

//config
if(process.env.NODE_ENV !== "PRODUCTION"){
  require("dotenv").config({ path: "./backend/config/config.env" });
}

//connect to databse
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Serever is workking on https://localhost:${process.env.PORT}`);
});


