const express=require("express")
const Comment = require("../models/Comments")
const route=express.Router()
route.post("/create",async(req,res)=>{
    try {
        const newComment=new Comment(req.body)
        const saveComment=await newComment.save()
        res.status(200).json(saveComment)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"somthing went wrong while commenting !"
        })
    }
})


//delete comment

route.delete("/delete/:id",async(req,res)=>{
    try {
        await Comment.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message:"comment deleted Sucessfully !"
        })
    } catch (error) {
      console.log(error)
      res.status(500).json({
        message:"somthing went wrong "
      })   
    }
})


// update comment
route.put("/update/:id",async(req,res)=>{
    try {
        const updatedCommnet= await Comment.findByIdAndUpdate(req.params.id,{$set:(req.body)},{new:true})
        res.status(200).json({
            message:"Comment updated sucessfully !",
            response:updatedCommnet
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"can't update the commnet !"
        })
    }
})


// get commnets

route.get("/post/:postId",async(req,res)=>{
   
    try {
        const comments=await Comment.find({postId:req.params.postId})
        res.status(200).json({
            response:comments
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"somthing went wrong while fetching the commnets"
        })
    }
})



module.exports=route