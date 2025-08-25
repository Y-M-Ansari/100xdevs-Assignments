const express = require("express");
const adminRouter = require("./routes/admin.js");
const userRouter = require("./routes/user.js");

const app = express();

app.use(express.json());

app.use("/admin",adminRouter);
app.use("/user",userRouter);

//global catch
app.use(function(error,req,res,next){
   res.status(500).json({
      msg:error.message
   })
})

app.listen(3000);
