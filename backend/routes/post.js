const express=require("express")
const Post = require("../models/Posts")

const route=express.Router()
//create post
route.post("/createPost",async (req,res) => {
    try {
        const newpost=new Post(req.body)
        const savedPost=await newpost.save()
        res.status(200).json({
            message:"Post created Sucessfully !",
            response:savedPost
        })
    } catch (error) {
        console.error(error);
       res.status(500).json({
        message:"can't create post !",
        
       }) 
    }
})


//update post

route.put("/updatePost/:id",async(req,res)=>{
  try {
    const updatedPost=await Post.findByIdAndUpdate(req.params.id,{$set:req.body} ,{new:true})
    res.status(200).json({
        message:"Post Updated Sucessfully !",
        response:updatedPost
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
        message:"Somthing went wrong in update Post !"
    })
  }
})

//Delete Post

route.delete("/deletePost/:id",async(req,res)=>{
    try {
        await Post.findOneAndDelete(req.params.id)
        res.status(200).json({
            message:"Post deleted sucessfully !"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"Somthing went wrong while deleting the post"
        })
    }
})
  

//Get posts

route.get("/",async(req,res)=>{
    const query=req.query
    try {
        const searchFilter={
            title:{$regex:query.search, $options:"i"}
        }
        const posts= await Post.find(query.search?searchFilter :null)
        res.status(200).json({
           response:posts
        })
    } catch (error) {
      console.log(error)  
      res.status(500).json({
        message:"somting went wrong in finding post !"
      })
    }
})


//Get post of a perticullar userId

route.get("post/:userId",async(req,res)=>{
    try {
        const post= await Post.findById({userId:req.params.userId})
        res.status(200).json({
            response:post
        })
    } catch (error) {
       console.log(error) 
       res.status(500).json({
        message:"somthing went wrong"
       })
    }
})

module.exports=route