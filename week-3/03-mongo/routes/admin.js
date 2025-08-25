const express = require ("express");
const router = express();

const adminMiddleware =require("../middleware/admin.js");
const {Admin, Course} =require ("../db")

router.post("/signup" ,(req,res)=>{
   const username = req.body.username;
   const password = req.body.password;

   Admin.create({
      username:username,
      password:password
   })
   .then(function(){
      res.json({
         msg:"Admin created successfully"
      })
   })
   .catch(function(){
      res.json({
         msg:"Something went wrong"
      });
   })
})
router.post("/courses" ,adminMiddleware, async (req,res)=>{
   const title = req.body.title;
   const description = req.body.description;
   const imageLink = req.body.imageLink;
   const price = req.body.price;
   // zod can be used to validate userinput
   const newCourse = await Course.create({
      title,
      description,
      imageLink,
      price
   })
   console.log(newCourse);
   res.json({
      msg:"Course created successfully",
      courseId : newCourse._id
   })
});

router.get("/courses", adminMiddleware, function (req,res){
   Course.find({})
   .then(function(response){
      res.json({
         courses : response
      })
   })
})

module.exports = router;
