
import {Client} from 'pg';
 
async function insertData(){
   const client = new Client({
      host: 'localhost',
      port:5432,
      database:'postgres',
      password:"Postgres"
   });
   try{
      await client.connect();
      const insertQuery = "INSERT INTO users (username , email, password) VALUES ('username2' , 'user@gmail.com' , pass)";
      const res = await client.query(insertQuery);
      console.log("Insertion success" , res)
   } catch(err){
      console.error('Error during the insertion' , err)
   } finally{
      await client.end();
   }
}

insertData();
