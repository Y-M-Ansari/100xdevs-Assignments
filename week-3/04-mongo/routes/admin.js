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