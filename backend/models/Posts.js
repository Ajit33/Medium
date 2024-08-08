const mongoose=require("mongoose")


const postSchema=new mongoose.Schema({
 title:{
    type:String,
    required:true,
    unique:true
 },
 description:{
    type:String,
    require:true,
 },
 photo:{
    type:String,
    required:false
 },
 username:{
    type:String,
    required:true
 },
 userId:{
    type:String,
    required:true
 }
},{timestamps:true})

const Post=mongoose.model("Post",postSchema)

module.exports={Post}