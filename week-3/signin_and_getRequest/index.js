const express = require ('express');
const app = express();
const jwt = require ('jsonwebtoken');
const jwtPass = 'ABcde123';

app.use(express.json());

let All_Users = [
  {
    username:"yousuf@gmail.com",
    password:"123321",
    name:'Yousuf'
  },
  {
    username:'mohit@gmail.com',
    password:'112233',
    name:'Mohit'
  },
  {
    username:'anand@gmail.com',
    password:'123456',
    name:'Anand'
  }
]

function user_exist(username,password){
  return All_Users.some(function (user){
    return user.username === username && user.password === password;
  })
}

app.post("/signin", function (req,res){
  const username = req.body.username;
  const password = req.body.password;
  if(user_exist(username,password).length<=0){
    return res.status(403).json({
      msg: "user not found in our memory db"
    })
  }else{
    const token = jwt.sign({username:username},jwtPass);
    return res.json({
      token
    });
  }
})
app.get("/users", function (req,res){
  const token = req.headers.authorization;
  try{
    const decoded = jwt.verify(token,jwtPass)
    const username = decoded.username;
    res.json({
        users:All_Users.filter(function(user){
        if(user.username==username){
          return false;
        }else{
          return true;
        }
      })
    })
  }catch(err){
    return res.status(403).json({
      msg:"Invalid Token"
    });
  }
})

app.listen(3000);