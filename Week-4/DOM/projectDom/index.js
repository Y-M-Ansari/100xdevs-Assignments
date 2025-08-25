const express = require ("express");
const app = express();

const cors = require("cors");
app.use(cors());

// app.use(express.json());

app.get("/sum", function (req,res){
   const num1 = Number(req.query.num1);
   const num2 = Number(req.query.num2);
   const sum =num1+num2
   res.send(sum.toString());
});

app.listen(3000);