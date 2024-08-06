
const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/databaseCofig");


const app = express();

dotenv.config();

app.listen(3000, async () => {
  await connectDB();
  console.log(`Server is running on port 3000`);
});
