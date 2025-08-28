const express = require("express");

const jwt = require("jsonwebtoken");

const router = express.Router();

const {User} = require("../db");

const {JWT_SECRET} = require("../config");

const {z} = require ("zod");
const { authMiddleware } = require("../middleware");

const signupBody = z.object({
   username : z.string().email(),
   firstName : z.string(),
   lastName : z.string(),
   password : z.string()
})

router.post("/signup" , async (req,res) =>{
   const validationResponse = signupBody.safeParse(req.body);
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
      lastName : req.body.lastName,
   })
   
   const userId = user._id;
   const token = jwt.sign( {userId} ,JWT_SECRET);
   res.json({
      message: "User created successfully",
      token : token
   })
})

const updatedBody = z.object({
   firstName: z.string().optional(),
   lastName : z.string().optional(),
   password: z.string().optional(),
})

router.put("/", authMiddleware , async (req, res)=>{
   const validationResponse = updatedBody.safeParse(req.body);
   if(!validationResponse.success){
      res.status(411).json({
         message : "Error while updating information"
      })
   }
   await User.updateOne(req.body ,{ id : req.UserId})
   res.json({
      message: "updated successfully"
   })
} )

module.exports = router