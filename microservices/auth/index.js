const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors= require("cors")
dotenv.config();
const database = require("./config/database");
// const { recieveMsg } = require("./work/consumer.work");
// const { recieveMsg } = require("./work/consumer.work");

const PORT = process.env.PORT || 4001;
database.connect();
app.use(express.json());
app.use(cors());
// recieveMsg();

 app.use("/api", require("./routes"));
app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
 
  