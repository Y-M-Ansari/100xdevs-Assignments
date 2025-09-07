const {Client} = require ('pg');
const con = new Client({
   host:"localhost",
   user:"postgres",
   port: 5432,
   password:"Postgres",
   database:"DemoDB",
});

con.connect().then(() => console.log("connected")) 
con.query("Select * from students" , (err,res) =>{
   if(!err){
      console.log(res.rows);
   }else{
      console.log(err.message);
   }
   con.end;
})