const express = require ("express");
const {createTodo,updateTodo} = require ("./types.js");
const {todo} = require("./db.js");
const cors = require ("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo" ,  async function (req,res){
   //input validation
   const createPayload = req.body;
   const parsePayload = createTodo.safeParse(createPayload);
   if (!parsePayload.success){
      res.status(411).json({
         msg : "You sent the wrong inputs"
      })
      return ;
   }
   // updating data on MongoDB
   await todo.create({
      title: createPayload.title,
      description : createPayload.description,
      completed :false
   });
   res.status(200).json({
      msg : " Todo created successfully"
   })
})
app.get("/todo" , async function (req,res){
   const todos = await todo.find({});
   console.log(todos);
   res.json({
      todos
   });
})
app.put("/completed" , async function (req,res){
   //input validation
   const updatePayload = req.body;
   const responsePayload = updateTodo.safeParse(updatePayload);
   if(!responsePayload.success){
      res.status(411).json({
         msg : "You sent the wrong inputs"
      })
      return ;
   }
   // updating data on MongoDB

   await todo.updateOne({
      _id : req.body.id
   },{
      completed : true
   })
   res.status(200).json({
         msg : "Todo marked as completed"
   });
})

app.listen(3000);