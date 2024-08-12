const express=require("express")
const route=express.Router()
const User=require("../models/User")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")


// signup
route.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;
       const salt=await bcrypt.genSalt(10)
       const hashedPassword=await bcrypt.hashSync(password,salt)
        // Validate input
        if (!username || !email || !password) {
            return res.status(400).json({
                message: "Username, email, and password are required."
            });
        }

        // Create a new user
        const newUser = new User({ username, email, password:hashedPassword });
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
      const user= await User.findOne({email:req.body.email})
      if(!user){
        return res.status(401).json({
            message:"User not found !"
        })
      }
      const match=await bcrypt.compareSync(req.body.password,user.password)
      if(!match){
        return   res.status(400).json({
           message:"Invalid password"
        })
      }
      const token=jwt.sign({id:user._id},process.env.SECRETKEY,{expiresIn:"3d"})
      const{password,...info}=user._doc
      res.cookie("token",token).status(200).json({
        message:"Sign in sucessfully ",
        response: info
      })
    } catch (error) {
        res.satus(500).json({
            err:error
        })
    }
})

// Logout

route.get("/logout",async(req,res)=>{
   try {
      res.clearCookie("token",{sameSite:"none",secure:true}).status(200).json({
        message:"User logged out sucessfully !"
      })
   } catch (error) {
    res.status(500).json({
        err:error
    })
   }
})


module.exports=route