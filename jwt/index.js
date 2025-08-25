const jwt = require("jsonwebtoken");

const value ={
  name: "Yousuf",
  account: 123123123
}

const token = jwt.sign(value,"secret");
console.log(token);

const verifiedToken = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiWW91c3VmIiwiYWNjb3VudCI6MTIzMTIzMTIzLCJpYXQiOjE3NTI1NjA0OTh9.fM34dr5UHI32yNRTcIK7r23A_MLQiNOH9jQwlj8sBEc", "secret");

console.log(verifiedToken);