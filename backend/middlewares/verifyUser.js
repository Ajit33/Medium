const jwt=require("jsonwebtoken")

const verifyUser=async(req,res,next)=>{
    const token=req.cookies.token
    if(!token){
        return res.status(401).json({
            message:"Unauthorized access"
        })
    }
    jwt.verify(token,process.env.SECRETKEY,async(err,data)=>{
        if(err){
          return res.status(403).json({
            message:"Invalid Token"
          })
        }
     req.userId=data.id 
     next()
    })
}

module.exports=verifyUser