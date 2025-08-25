const express = require ("express");
const UserMiddleware = require("../middleware/user.js");
const {User,Course} = require("../db/index.js");

const router = express();

router.post("/signup", async function(req,res){
   const username = req.body.username;
   const password = req.body.password;
   try{
      const result = await User.create({
         username,
         password
      })
      res.status(200).json({
         msg: "User created successfully."
      })
   }catch(err){
      res.status(400).json({
         msg: "something went wrong"
      })
   }

   
})

router.get("/courses", async function(req,res){
   try{
      const courses = await Course.find({})
      res.status(200).json({
         courses : courses
      })
   }catch(err){
      res.status(400).json({
         msg:"Something went wrong"
      })
   }
})

router.post("/courses/:courseId", UserMiddleware, async(req,res)=>{
   const username = req.headers.username;
   const {courseId} = req.params;
   try{
      await User.updateOne({
         username : username
      },{
         "$push": {
            purchasedCourses: courseId
         }
      })
      res.status(200).json({
         msg: "course purchased successfully."
      })
   }catch(err){
      res.status(400).json({
         msg: message.error
      })
   }
});

router.get("/purchasedCourses" , UserMiddleware , (req,res)=>{
   User.findOne({
      username: req.headers.username
   })
   .then(user=>{
      if(!user){
         return res.status(404).json({
            msg : "User not found"
         })
      }
      console.log(user.purchasedCourses)
      Course.find({
         _id: {"$in": user.purchasedCourses}
      })
      .then(courses=>{
         res.json({
            courses : courses
         });
      })
      .catch(err=>{
         console.log(err);
         res.status(500).json({
            msg: "Error fetching courses"
         });
      });
   })
   .catch(err=>{
      console.log(err);
      res.status(500).json({ 
         msg: "Error fetching user" 
      });
   });
}); 

module.exports = router;
