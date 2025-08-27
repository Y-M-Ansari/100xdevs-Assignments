const express = require("express");

const router = express.Router();

const {User} = require("./db");

const {JWT_SECRET} = require("../config");

const {z} = require ("zod");

const signupBody = z.object({
   usename : z.string().email(),
   firstName : z.string(),
   lastName : z.string,
   password : z.string()
})

router.post("/signup" , async (req,res) =>{
   const validationResponse = signupBody.safeparse(req.body);
   if (! validationResponse.success){
      return res.status(411).json({
         message : "Incorrect inputs"
      })
   }

   const existingUser = await User.findOne({
      username : req.body.username
   })
   if (existingUser) {
      return res.status(411).json({
         message: "Email already taken"
      })
   }

   const user = await User.create({
      username : req.body.username,
      password : req.body.password,
      firstName : req.body.firstName,
      lastName : req.body.lastname,
   })
   
   const userId = user._id;
   const token = jwt.sign( {userId} ,JWT_SECRET);
   res.json({
      message: "User created successfully",
      token : token
   })

})

module.exports()