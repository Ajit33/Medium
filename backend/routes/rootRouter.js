
const express=require("express")
const AuthRoutes=require("./auth")
const userRoute=require("./user")
const postRoute=require("./post")
const commentRoutes=require("./comments")


const route=express.Router()
route.use("/user",userRoute)
route.use("/post",postRoute)
route.use("/auth",AuthRoutes)
route.use("/comment",commentRoutes)


module.exports=route; 