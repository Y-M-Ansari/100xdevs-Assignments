const express = require("express");
const app = express();
// const zod = require ("zod");
// Local Middleware
function userMiddleware(req,res,next){
  const username = req.headers.username;
  const password = req.headers.password; 
  if(username != "Yousuf" || password != "pass"){
    res.json({
      msg: "Your username is incorrect"
    })
  }else{
    next();
  }
}

// Local Middleware
function kidneyMiddleware(req,res,next){
  const kidneyId =req.query.kidneyId;
  if(kidneyId != 1 && kidneyId !=2){
    res.status(400).json({
      msg: "Your enter wrong input"
    })
  }else{
    next();
  } 
}

// Router Handler
app.get("/health-checkup" ,userMiddleware , kidneyMiddleware , function(req , res){
  res.status(200).json({
    msg: "Your kidney is fine ."
  })
})

// port
app.listen (3001);