import { getClient } from "./utils.js";

async function getUsers (){
   const client = await getClient();
   const userText = `SELECT * from users`;
   const result = await client.query(userText);
   for (let user of result.rows){
      console.log(`user_id: ${user.id} , email: ${user.email}`)
   }
}

async function getUserFromEmail(email:String){
   const client = await getClient();
   const userText = `SELECT * FROM users WHERE email = $1`;
   const userRes = await client.query(userText, [email]);
   console.log("Single User detail:");
   for (let user of userRes.rows){
      console.log(`user_id: ${user.id} , email: ${user.email}`)
   }
}

getUsers();

getUserFromEmail('yousuf@gmail.com');