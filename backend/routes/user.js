const express=require("express")
const bcrypt=require("bcrypt")
const route=express.Router();
const User=require("../models/User");
const Post = require("../models/Posts");
const Comment = require("../models/Comments");
// Update
route.put("/updatePassword/:id",async(req,res)=>{
    try {
        if(req.body.password){
            const salt=await bcrypt.genSalt(10)
            req.body.password=await bcrypt.hashSync(req.body.password,salt)
        }
        const Updateduser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json({
            message:"Password Update Sucessfull",
            response:Updateduser
        })
    } catch (error) {
      res.status(500).json({
        message:"Update pasaword failed",
        err:error
      })  
    }
})

// DELETE

route.delete("/deleteUser/:id",async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        await Post.deleteMany({userId:req.params.id})
        await Comment.deleteMany({userId:req.params.id})

        res.status(200).json({
            message:"User Deleted sucessfully"
        })
    } catch (error) {
        res.status(500).json({
            message:"Delete User failed",
            err:error
          })  
        
    }
})



// GET Other User

route.get("/find/:id",async(req,res)=>{
    try {
        const user= await User.findById(req.params.id)
        if(!user){
            return res.status(400).json({
                message:"This user Doesn't exist !"
            })
        }
        const{password,...info}=user._doc
        res.status(200).json({
            message:"user get sucessfully !",
            respose:info
        })
    } catch (error) {
        res.status(500).json({
            message:"Faild to get the user",
            err:error
          })  
    }
})




module.exports=route