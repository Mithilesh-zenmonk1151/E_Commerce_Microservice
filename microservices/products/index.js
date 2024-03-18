const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors= require("cors")
const sendMessge= require("./worker/producer.worker")
dotenv.config();
const database = require("./config/db");
const PORT = process.env.PORT || 4001;
database.connect();
app.use(express.json());
app.use(cors());
app.post("/sendMessage",(req,res)=>{
  new sendMessge("hello");
})
//  app.use("/api", require("./routes"));
app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
 
  