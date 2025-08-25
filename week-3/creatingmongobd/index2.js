const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://0603yousuf:huUr0DTngjZjNT7a@cluster1.pgjulpi.mongodb.net/students");
const User = mongoose.model(
  "Users",
  {
    name:String,
    email:String,
    password:String
  }
)
const user = new User({
  name:"Yousuf",
  email:"yousuf@gmail.com",
  password:'123321'
})
user.save();