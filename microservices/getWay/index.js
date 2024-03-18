const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/auth", proxy("http://localhost:4040"));
app.use("/cart", proxy("http://localhost:5050"));
app.use("/orders", proxy("http://localhost:6060")); // products
app.use("/products", proxy("http://localhost:7070")); // products
app.use("/shipping", proxy("http://localhost:8080")); // products
app.use("/user", proxy("http://localhost:9090")); // products

app.listen(8000, () => {
  console.log("Gateway is Listening to Port 8000");
});