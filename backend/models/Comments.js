const mongoose=require("mongoose");

const commentSchema=new mongoose.Schema({

    author:{
        type:String,
        required:true
    },
    Comment:{
        type:String,
        required:true,
    },
    postId:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }

},{timestamps:true})


const Comment=mongoose.model("Comment",commentSchema);
module.exports=Comment