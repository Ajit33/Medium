const express=require("express")
const route=express.Router()
const User=require("../models/User")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")


// signup
route.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validate input
        if (!username || !email || !password) {
            return res.status(400).json({
                message: "Username, email, and password are required."
            });
        }

        // Create a new user
        const newUser = new User({ username, email, password });
        const savedUser = await newUser.save();

        res.status(200).json({
            message: "User created successfully",
            savedUser
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Something went wrong"
        });
    }
});
//sign in

route.post("/signin",async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})




module.exports=route