require("dotenv").config();
const express = require("express");
const dbConnection = require("./app/config/db");
const app = express();

dbConnection();

app.use(express.json())
const productRouter = require("./app/routes/productRoute");
app.use("/api", productRouter);
const port = 6002;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
