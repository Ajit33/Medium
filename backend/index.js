
const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/databaseCofig");
const cors=require("cors")
const RootRouter=require("./routes/rootRouter");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cors());
app.use(express.json())
app.use(cookieParser())
dotenv.config();

app.use("/api/v1",RootRouter)



app.listen(3000, async () => {
  await connectDB();
  console.log(`Server is running on port 3000`);
});
