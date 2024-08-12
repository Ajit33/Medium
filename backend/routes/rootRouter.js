
const express=require("express")
const AuthRoutes=require("./auth")
const userRoute=require("./user")
const postRoute=require("./post")
const commentRoutes=require("./comments")
const cookieParser=require("cookie-parser")
const verifyUser = require("../middlewares/verifyUser")

const route=express.Router()
route.use("/user",verifyUser , userRoute)
route.use("/post", verifyUser,postRoute)
route.use("/auth",AuthRoutes)
route.use("/comment", verifyUser ,commentRoutes)


module.exports=route; 