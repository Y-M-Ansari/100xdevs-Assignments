const express = require ('express');
const app = express();

const users =[{
   name : 'John',
   kedneys:[{
    healthy:false
   }],
}]

app.use(express.json());

app.get('/',function (req , res ){
   const johnKedneys = users[0].kedneys;
   const numberOfKedneys=johnKedneys.length;
   const healthykedneys=johnKedneys.filter(function(kedney){
      return kedney.healthy;
   })
   let numberOfHealthyKedneys =healthykedneys.length;
   const numberOfUnhealthyKedneys = numberOfKedneys-numberOfHealthyKedneys;
   res.json({
      numberOfKedneys,
      numberOfHealthyKedneys,
      numberOfUnhealthyKedneys
   })
});
// adding kidneys 
app.post('/',function (req,res){
   const isHealthy = req.body.isHealthy;
   users[0].kedneys.push({
      healthy : isHealthy,
   })
   res.json({
      msg:'Done!'
   })
})

// changing unhealthy kidneys by healthy kidneys
app.put('/', function (req,res){
   if(isThereUnhealthykedney()){
      users[0].kedneys.forEach(function(kedney){
      kedney.healthy =true;
      });
      res.json({
         msg:'Done!'
      })
   }
   else{
      res.status(411).json({
         msg:'There is no unhealthy kedney'
      })
   }
})

// removing all the unhealthy kedneys
app.delete('/',function(req,res){
   if(isThereUnhealthykedney()){
      const healthykedneys=users[0].kedneys.filter(function(kedney){
      return kedney.healthy;   
      })
      users[0].kedneys=healthykedneys;
      res.json({
         msg:"Done!"
      });
   }
   else{
      res.status(411).json({
         msg:'There is no unhealthy kedney'
      });
   }
   
})

function isThereUnhealthykedney(){
   atleastOneunhealthyKedney=false;
   users[0].kedneys.forEach(function(kedney){
      if(!kedney.healthy){
         atleastOneunhealthyKedney=true;
      }
   })
   return atleastOneunhealthyKedney;
}
app.listen(3000);
