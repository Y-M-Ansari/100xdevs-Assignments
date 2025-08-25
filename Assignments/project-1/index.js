const express = require("express");
const app = express();

let requestCount=0;
function requestCounter(req,res,next){
  requestCount= requestCount+1;
  console.log("Request Count "+requestCount);
  next()
}

app.use(requestCounter);

app.get('/user1', function (req,res){
  res.status(200).json(({
    name: "Yousuf"
  }))
});

app.get('/user2', function (req,res){
  res.status(200).json(({
    name: "Malik"
  }))
});

app.listen(3000);